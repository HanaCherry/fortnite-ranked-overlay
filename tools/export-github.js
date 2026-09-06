"use strict";
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const output = path.join(root, 'dist', 'github');
// Never silently reuse an export: it may contain local data from a previous run.
if (fs.existsSync(output)) {
  throw new Error('dist/github existe déjà. Déplacez ce dossier avant de recréer un export propre.');
}
const sourceFiles = [
  '.gitignore', '.npmignore', 'LICENSE', 'README.md', 'README.en.md',
  'package.json', 'package-lock.json',
  'config.json', 'server.js', 'tracker-live.js',
  'LANCER.bat', 'LANCER-SILENCIEUX.vbs', 'INSTALLER.bat',
  'index.html', 'simulateur.html', '404.html',
  'tools/export-github.js', 'tools/capture-docs.js', 'tools/build-i18n-readme.js', 'test/app.test.js',
  'docs/i18n.js', 'docs/site.js',
  'docs/assets/hero-banner.jpg', 'docs/assets/dashboard.png',
  'docs/assets/overlay.png', 'docs/assets/overlay-compact.png',
  'public/control.html', 'public/studio.css', 'public/studio.js', 'public/appearance.css',
  'public/overlay.html', 'public/overlay-compact.html', 'public/overlay.css',
  'public/overlay.js', 'public/rank-logos.js', 'public/stars.js',
  'public/brand/studio-logo.png'
];
const i18nDir = path.join(root, 'docs', 'i18n');
if (fs.existsSync(i18nDir)) {
  for (const file of fs.readdirSync(i18nDir)) {
    if (file.endsWith('.md')) sourceFiles.push('docs/i18n/' + file);
  }
}
for (const file of fs.readdirSync(path.join(root, 'public', 'ranks'))) {
  if (/^(?:\d+|trn_\d+|(?:bronze|silver|gold|platinum|diamond|elite|champion)(?:_[123])?|unreal(?:-legends)?|unranked)\.(?:png|webp)$/.test(file) || file === 'README.txt') {
    sourceFiles.push('public/ranks/' + file);
  }
}
const defaults = JSON.parse(fs.readFileSync(path.join(root, 'config.json'), 'utf8'));
if (defaults.epicName || defaults.profileUrl || defaults.twitch || Object.values(defaults.api || {}).some(Boolean)) {
  throw new Error('La configuration distribuée doit rester vide de données personnelles et de clés.');
}
for (const file of sourceFiles) {
  const source = path.join(root, file);
  if (!fs.statSync(source).isFile() || fs.lstatSync(source).isSymbolicLink()) throw new Error('Fichier source invalide : ' + file);
}
for (const file of sourceFiles) {
  const destination = path.join(output, file);
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.copyFileSync(path.join(root, file), destination);
}
console.log(`${sourceFiles.length} fichiers exportés dans dist/github. Aucune donnée du dossier data/ n’est incluse.`);
