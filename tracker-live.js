/**
 * Lecture live du profil public fortnitetracker.com (Playwright + Edge).
 * L’API officielle TRN est morte / bloquée ; le site public affiche le vrai ranked.
 */

"use strict";

const path = require("path");

let chromium;
try {
  chromium = require("playwright-core").chromium;
} catch {
  chromium = null;
}

const PROFILE = (name) =>
  "https://fortnitetracker.com/profile/all/" + encodeURIComponent(name);

let browser = null;
let page = null;
let launching = null;
let lastResult = null;
let busy = null;
let cookiesDone = false;
let loadedName = "";
let lastEpicRefreshAt = 0;

function normalizeRankLabel(raw) {
  if (!raw) return null;
  let s = String(raw).replace(/\s+/g, " ").trim();
  if (/^unrated$/i.test(s)) return null;
  s = s.replace(/\s*3\s*$/, " III").replace(/\s*2\s*$/, " II").replace(/\s*1\s*$/, " I");
  s = s.replace(/\bIII\b/i, "III").replace(/\bII\b/i, "II").replace(/\bI\b/i, "I");
  const m = s.match(/^(Bronze|Silver|Gold|Platinum|Diamond|Elite|Champion|Unreal(?:\s+Legends)?)\s*(III|II|I)?/i);
  if (!m) return s;
  const div = m[1][0].toUpperCase() + m[1].slice(1).toLowerCase().replace(/\s+legends/i, " Legends");
  if (/unreal/i.test(div)) return /legends/i.test(div) ? "Unreal Legends" : "Unreal";
  if (m[2]) return `${div} ${m[2].toUpperCase()}`;
  return div;
}

function num(s) {
  if (s == null) return null;
  const n = Number(String(s).replace(/,/g, "").replace(/\s/g, ""));
  return Number.isFinite(n) ? n : null;
}

function parseAllRanks(text) {
  const out = {};
  if (!text) return out;
  const rankTok = "(Unrated|Unreal(?:\\s+Legends)?|[A-Za-z]+(?:\\s+[123])?)";
  const re = new RegExp(
    "(Battle Royale|Reload|Arenas Boxfights|Rocket Racing)\\s+Current\\s+" +
      rankTok +
      "(?:\\s+(\\d+)\\s*%)?(?:\\s*#[\\d,]+)?(?:\\s*-\\s*)?(?:\\s*([\\d,]+)\\s*Elo)?\\s+All-Time Best\\s+" +
      rankTok,
    "gi"
  );
  let m;
  while ((m = re.exec(text))) {
    const mode = m[1].toLowerCase();
    const current = normalizeRankLabel(m[2]);
    const progress = m[3] != null ? Math.max(0, Math.min(100, Number(m[3]))) : 0;
    const elo = num(m[4]);
    const peak = normalizeRankLabel(m[5]);
    let key = "other";
    if (mode === "battle royale") key = "builds";
    else if (mode === "reload") key = "reload";
    else if (mode.includes("arena")) key = "arenas";
    else if (mode.includes("rocket")) key = "rocket";
    out[key] = { rank: current, progress, elo, peak, rawCurrent: m[2].trim(), playlist: m[1] };
  }
  return out;
}

function parseOverview(text) {
  const grab = (label) => {
    const m = text.match(new RegExp(label + "[\\s\\S]{0,48}?([\\d][\\d,]*(?:\\.\\d+)?)", "i"));
    return m ? num(m[1]) : null;
  };
  return {
    wins: grab("Wins"),
    kills: grab("Kills"),
    kd: grab("K/D"),
    matches: grab("Matches") || grab("Total Matches"),
  };
}

async function dismissCookies(p) {
  for (const label of ["Accepter tout", "Accept all", "Accept All", "I Accept", "Agree", "Tout accepter"]) {
    try {
      const btn = p.getByRole("button", { name: label, exact: false }).first();
      if (await btn.count()) {
        await btn.click({ timeout: 1500 });
        await p.waitForTimeout(400);
      }
    } catch {}
  }
}

async function launchAnyBrowser() {
  const attempts = [{ channel: "msedge" }, { channel: "chrome" }, {}];
  let lastErr;
  for (const extra of attempts) {
    try {
      return await chromium.launch({
        ...extra,
        headless: true,
        args: ["--disable-blink-features=AutomationControlled", "--disable-dev-shm-usage"],
      });
    } catch (e) {
      lastErr = e;
    }
  }
  throw lastErr || new Error("no_browser");
}

async function ensurePage() {
  if (!chromium) {
    try { chromium = require("playwright-core").chromium; }
    catch { throw new Error("Module de suivi absent. Relancez LANCER.bat pour installer les composants, ou executez npm install puis redemarrez le serveur."); }
  }
  if (page && browser) return page;
  if (launching) {
    await launching;
    return page;
  }
  launching = (async () => {
    browser = await launchAnyBrowser();
    page = await browser.newPage({
      userAgent:
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36",
      viewport: { width: 1440, height: 1100 },
    });
    page.setDefaultTimeout(18000);
    cookiesDone = false;
    loadedName = "";
  })();
  try {
    await launching;
  } finally {
    launching = null;
  }
  return page;
}

async function scrape(epicName, opts = {}) {
  if (busy && !opts.force) return busy;
  const run = doScrape(epicName, opts);
  busy = run;
  try {
    return await run;
  } finally {
    if (busy === run) busy = null;
  }
}

async function waitRanks(p) {
  try {
    await p.waitForFunction(
      () => {
        const t = (document.body && document.body.innerText) || "";
        return /ALL RANKS/i.test(t) && /Battle Royale/i.test(t) && /Current/i.test(t);
      },
      { timeout: 12000 }
    );
  } catch {}
}

async function clickEpicRefresh(p) {
  const refresh = p.getByRole("button", { name: /refresh|update|mettre à jour/i }).first();
  if (await refresh.count()) {
    await refresh.click({ timeout: 2000 }).catch(() => {});
    lastEpicRefreshAt = Date.now();
    await waitRanks(p);
  }
}

async function doScrape(epicName, opts = {}) {
  const name = String(epicName || "").trim();
  if (!name) throw new Error("missing_epic_name");
  let p = await ensurePage();
  const target = PROFILE(name);
  const samePlayer = loadedName.toLowerCase() === name.toLowerCase();
  try {
    if (samePlayer && p.url() && /fortnitetracker\.com/i.test(p.url())) {
      await p.reload({ waitUntil: "domcontentloaded", timeout: 30000 });
    } else {
      await p.goto(target, { waitUntil: "domcontentloaded", timeout: 45000 });
      loadedName = name;
      cookiesDone = false;
    }
  } catch (e) {
    try {
      await closeBrowser();
    } catch {}
    p = await ensurePage();
    await p.goto(target, { waitUntil: "domcontentloaded", timeout: 45000 });
    loadedName = name;
    cookiesDone = false;
  }

  if (!cookiesDone) {
    await dismissCookies(p);
    cookiesDone = true;
  }
  await waitRanks(p);

  const wantRefresh = !!opts.refresh || !samePlayer || Date.now() - lastEpicRefreshAt > 120000;
  if (wantRefresh) await clickEpicRefresh(p);

  const dump = await p.evaluate(() => {
    const text = document.body ? document.body.innerText : "";
    const nodes = Array.from(document.querySelectorAll("*"));
    let allRanks = "";
    const hit = nodes.find((n) => /^all ranks$/i.test((n.innerText || "").trim()));
    if (hit) {
      let box = hit.parentElement;
      for (let i = 0; i < 8 && box; i++) {
        const t = box.innerText || "";
        if (/Battle Royale/i.test(t) && /Current/i.test(t) && t.length < 2500) {
          allRanks = t;
          break;
        }
        box = box.parentElement;
      }
      if (!allRanks && hit.parentElement) allRanks = hit.parentElement.innerText || "";
    }
    return { text, allRanks, title: document.title };
  });

  const ranked = parseAllRanks(dump.allRanks || dump.text);
  const life = parseOverview(dump.text);
  const builds = ranked.builds || null;

  if (!builds || !builds.rank) {
    const snippet = String(dump.allRanks || dump.text || "").replace(/\s+/g, " ").slice(0, 400);
    console.log("  [tracker] ranked_not_found for", name, "url=", target, "snippet=", snippet);
    throw new Error("ranked_not_found");
  }

  lastResult = {
    ok: true,
    provider: "fortnitetracker",
    epicName: name,
    profileUrl: target,
    ranked: {
      builds: builds
        ? { rank: builds.rank, progress: builds.progress || 0, elo: builds.elo, peak: builds.peak }
        : null,
      reload: ranked.reload || null,
      rocket: ranked.rocket || null,
    },
    lifetime: {
      wins: life.wins || 0,
      kills: life.kills || 0,
      kd: life.kd || 0,
      matches: life.matches || 0,
      deaths: life.kd > 0 && life.kills ? Math.round(life.kills / life.kd) : 0,
      winRate: life.matches > 0 ? Math.round((1000 * life.wins) / life.matches) / 10 : 0,
    },
    fetchedAt: new Date().toISOString(),
  };
  return lastResult;
}

async function closeBrowser() {
  try {
    if (page) await page.close().catch(() => {});
  } catch {}
  try {
    if (browser) await browser.close().catch(() => {});
  } catch {}
  page = null;
  browser = null;
  cookiesDone = false;
  loadedName = "";
}

function getLast() {
  return lastResult;
}

module.exports = {
  scrape,
  closeBrowser,
  getLast,
  parseAllRanks,
  normalizeRankLabel,
};
