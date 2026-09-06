"use strict";
const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const { spawn } = require('node:child_process');
const { once } = require('node:events');
const root = path.resolve(__dirname, '..');

test('fresh installation, private persistence and manual overlay workflow', { timeout: 20000 }, async (t) => {
  const data = fs.mkdtempSync(path.join(os.tmpdir(), 'ranked-test-'));
  const original = fs.readFileSync(path.join(root, 'config.json'), 'utf8');
  const child = spawn(process.execPath, ['server.js'], {
    cwd: root, env: { ...process.env, PORT: '0', RANKED_DATA_DIR: data }, stdio: ['ignore', 'pipe', 'pipe']
  });
  t.after(async () => {
    if (child.exitCode === null) { const exited = once(child, 'exit'); child.kill(); await exited; }
    const resolved = path.resolve(data);
    assert.equal(path.dirname(resolved), path.resolve(os.tmpdir()));
    assert.ok(path.basename(resolved).startsWith('ranked-test-'));
    fs.rmSync(resolved, { recursive: true, force: true });
  });
  const origin = await new Promise((resolve, reject) => {
    let output = '';
    const timer = setTimeout(() => reject(new Error('Server startup timeout')), 7000);
    child.stdout.on('data', chunk => {
      output += chunk;
      const match = output.match(/http:\/\/127\.0\.0\.1:(\d+)\/control/);
      if (match) { clearTimeout(timer); resolve('http://127.0.0.1:' + match[1]); }
    });
    child.on('error', reject);
    child.on('exit', code => { clearTimeout(timer); reject(new Error('Server exited: ' + code)); });
  });
  const get = async route => (await fetch(origin + route)).json();
  const post = async (route, body) => {
    const response = await fetch(origin + route, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
    assert.equal(response.status, 200);
    return response.json();
  };
  const initial = await get('/api/state');
  assert.equal(initial.epicName, '');
  assert.equal(initial.ranked.rank, 'Unranked');
  assert.deepEqual(initial.events, []);
  await post('/api/config', { pollSeconds: 60 });
  await post('/api/overlay', { opacity: 0.75, showProfileName: false });
  const config = await get('/api/config');
  assert.equal(config.pollSeconds, 60);
  assert.equal(config.overlay.opacity, 0.75);
  assert.equal(config.port, 8767);
  await post('/api/overlay', { themeStyle: 'galaxy', badgeStyle: 'orbit' });
  const styled = await get('/api/state');
  assert.equal(styled.overlay.themeStyle, 'galaxy');
  assert.equal(styled.overlay.badgeStyle, 'orbit');
  const saved = JSON.parse(fs.readFileSync(path.join(data, 'config.json'), 'utf8'));
  assert.equal(saved.overlay.themeStyle, 'galaxy');
  assert.equal(saved.overlay.badgeStyle, 'orbit');
  await post('/api/overlay', { themeStyle: 'bunny', badgeStyle: 'bunny' });
  const bunny = await get('/api/state');
  assert.equal(bunny.overlay.themeStyle, 'bunny');
  assert.equal(bunny.overlay.badgeStyle, 'bunny');
  await post('/api/overlay', { themeStyle: 'unknown', badgeStyle: 'unknown' });
  const fallback = await get('/api/state');
  assert.equal(fallback.overlay.themeStyle, 'classic');
  assert.equal(fallback.overlay.badgeStyle, 'fortnite');
  assert.equal(fs.readFileSync(path.join(root, 'config.json'), 'utf8'), original);
  for (const route of ['/data/secrets.json', '/data/config.json', '/config.json']) {
    assert.equal((await fetch(origin + route)).status, 404);
  }
  for (const route of ['/api/simulate', '/api/key', '/api/test-key', '/api/stats/set', '/simulator.html']) {
    assert.equal((await fetch(origin + route, {method: 'POST'})).status, 404, route);
  }
  const rank = await post('/api/ranked', { mode: 'builds', active: true, rank: 'Gold II', progress: 42 });
  assert.equal(rank.state.ranked.rank, 'Gold II');
  assert.equal(rank.state.ranked.progress, 42);
  for (const route of ['/', '/overlay.html', '/overlay-compact.html', '/studio.css', '/studio.js', '/brand/studio-logo.png']) {
    assert.equal((await fetch(origin + route)).status, 200, route);
  }
});

test('dashboard scripts compile and controls have unique IDs', () => {
  const vm = require('node:vm');
  for (const file of ['control.html']) {
    const html = fs.readFileSync(path.join(root, 'public', file), 'utf8');
    const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
    assert.equal(new Set(ids).size, ids.length, 'duplicate ID in ' + file);
    for (const match of html.matchAll(/<script>([\s\S]*?)<\/script>/g)) new vm.Script(match[1], { filename: file });
    for (const match of html.matchAll(/getElementById\("([^"]+)"\)/g)) assert.ok(ids.includes(match[1]), 'missing control ' + match[1]);
  }
});
