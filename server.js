/**
 * Fortnite Ranked — overlay temps réel
 * GalaxyBunny Studio
 *
 * - Lecture du profil public Fortnite Tracker
 * - Ranked Build / ZB géré en local (manuel + sync panel)
 * - Session live (deltas kills/wins depuis le début du stream)
 * - Overlay OBS : http://127.0.0.1:8767/overlay.html
 * - Contrôle : http://127.0.0.1:8767/control.html
 */

"use strict";

const http = require("http");
const fs = require("fs");
const path = require("path");
const { URL } = require("url");
const trackerLive = require("./tracker-live");

const ROOT = __dirname;
const PUBLIC = path.join(ROOT, "public");
const DATA = process.env.RANKED_DATA_DIR ? path.resolve(process.env.RANKED_DATA_DIR) : path.join(ROOT, "data");
const DEFAULT_CONFIG_PATH = path.join(ROOT, "config.json");
const CONFIG_PATH = path.join(DATA, "config.json");
const STATE_PATH = path.join(DATA, "state.json");

const RANK_LADDER = [
  "Bronze III", "Bronze II", "Bronze I",
  "Silver III", "Silver II", "Silver I",
  "Gold III", "Gold II", "Gold I",
  "Platinum III", "Platinum II", "Platinum I",
  "Diamond III", "Diamond II", "Diamond I",
  "Elite III", "Elite II", "Elite I",
  "Champion III", "Champion II", "Champion I",
  "Unreal",
  "Unreal Legends",
];

const RANK_COLORS = {
  Bronze: "#cd7f32",
  Silver: "#c0c7d1",
  Gold: "#f0c14b",
  Platinum: "#7fd3e8",
  Diamond: "#6ecbff",
  Elite: "#b388ff",
  Champion: "#ff6b9d",
  Unreal: "#ff3cac",
  "Unreal Legends": "#ffc800",
};

// ─── IO ───────────────────────────────────────────────────

function readJson(file, fallback) {
  try {
    return JSON.parse(fs.readFileSync(file, "utf8"));
  } catch {
    return fallback;
  }
}

function writeJson(file, obj) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, JSON.stringify(obj, null, 2), "utf8");
}

function loadConfig() {
  const defaults = readJson(DEFAULT_CONFIG_PATH, {});
  const local = readJson(CONFIG_PATH, {});
  const cfg = { ...defaults, ...local, overlay: { ...defaults.overlay, ...local.overlay } };
  delete cfg.api; // Ignore legacy optional connection settings.
  cfg.overlay = Object.assign(
    {
      layout: "banner",
      transparent: true,
      showLogo: true,
      showStars: true,
      showGlow: true,
      showRankName: true,
      showModeLabel: true,
      showProgress: true,
      showLiveKills: true,
      showLiveDeaths: true,
      showLiveStreak: true,
      showStats: false,
      showProfileName: false,
      showToasts: true,
      celebrateRankUp: true,
      statsSource: "session",
      position: "bottom-right",
      opacity: 1,
      scale: 1,
      iconStyle: "fortnite",
    },
    cfg.overlay || {}
  );
  return cfg;
}

function loadState() {
  return readJson(STATE_PATH, {});
}

function saveState(state) {
  writeJson(STATE_PATH, state);
}

// ─── Rank helpers ─────────────────────────────────────────

function parseRank(rankStr) {
  if (!rankStr || typeof rankStr !== "string") {
    return { division: "Unranked", tier: null, rank: "Unranked" };
  }
  const s = rankStr.trim();
  if (/unreal\s*legends/i.test(s)) {
    return { division: "Unreal", tier: null, rank: "Unreal Legends" };
  }
  if (/^unreal/i.test(s)) return { division: "Unreal", tier: null, rank: "Unreal" };
  const roman = (t) => {
    if (!t) return null;
    const u = String(t).toUpperCase();
    if (u === "III" || u === "3") return 3;
    if (u === "II" || u === "2") return 2;
    if (u === "I" || u === "1") return 1;
    return null;
  };
  const tierLabel = (n) => (n === 3 ? "III" : n === 2 ? "II" : n === 1 ? "I" : null);
  // Elite / Champion with optional III/II/I
  let m = s.match(/^(Elite|Champion)\s*(III|II|I|3|2|1)?/i);
  if (m) {
    const division = m[1][0].toUpperCase() + m[1].slice(1).toLowerCase();
    const tier = roman(m[2]);
    const rank = tier ? `${division} ${tierLabel(tier)}` : division === "Elite" ? "Elite I" : "Champion I";
    return { division, tier, rank };
  }
  m = s.match(/^(Bronze|Silver|Gold|Platinum|Diamond)\s*(III|II|I|3|2|1)?/i);
  if (!m) return { division: s, tier: null, rank: s };
  const division = m[1][0].toUpperCase() + m[1].slice(1).toLowerCase();
  const tier = roman(m[2]);
  const rank = tier ? `${division} ${tierLabel(tier)}` : division;
  return { division, tier, rank };
}

function rankIndex(rankStr) {
  const p = parseRank(rankStr);
  const i = RANK_LADDER.findIndex((r) => r.toLowerCase() === p.rank.toLowerCase());
  return i;
}

function rankColor(rankStr) {
  const p = parseRank(rankStr);
  if (p.rank === "Unreal Legends") return RANK_COLORS["Unreal Legends"];
  return RANK_COLORS[p.division] || "#ff8ec8";
}

function pushEvent(state, type, payload) {
  state.events = state.events || [];
  state.events.unshift({
    id: Date.now() + Math.random().toString(36).slice(2, 7),
    t: new Date().toISOString(),
    type,
    ...payload,
  });
  state.events = state.events.slice(0, 40);
}

function pushHistory(state, snapshot) {
  state.history = state.history || [];
  state.history.unshift({ t: new Date().toISOString(), ...snapshot });
  state.history = state.history.slice(0, 100);
}

// ─── Session / merge ──────────────────────────────────────

function ensureSession(state) {
  if (!state.session) state.session = {};
  if (!state.session.startedAt) {
    state.session.startedAt = new Date().toISOString();
    state.session.baseline = null;
  }
}

function recomputeSession(state) {
  ensureSession(state);
  const life = state.lifetime || {};
  if (!state.session.baseline) {
    state.session.baseline = {
      wins: life.wins || 0,
      kills: life.kills || 0,
      deaths: life.deaths || 0,
      matches: life.matches || 0,
    };
  }
  const b = state.session.baseline;
  const wins = Math.max(0, (life.wins || 0) - (b.wins || 0));
  const kills = Math.max(0, (life.kills || 0) - (b.kills || 0));
  const deaths = Math.max(0, (life.deaths || 0) - (b.deaths || 0));
  const matches = Math.max(0, (life.matches || 0) - (b.matches || 0));
  state.session.wins = wins;
  state.session.kills = kills;
  state.session.deaths = deaths;
  state.session.matches = matches;
  state.session.kd = deaths > 0 ? Number((kills / deaths).toFixed(2)) : kills;
}

function applyLifetime(state, lifetime, opts = {}) {
  const prev = { ...(state.lifetime || {}) };
  state.lifetime = lifetime;
  recomputeSession(state);

  const dKills = (lifetime.kills || 0) - (prev.kills || 0);
  const dWins = (lifetime.wins || 0) - (prev.wins || 0);
  const dMatches = (lifetime.matches || 0) - (prev.matches || 0);

  if (opts.announce && (dKills > 0 || dWins > 0 || dMatches > 0) && prev.kills != null) {
    if (dWins > 0) pushEvent(state, "win", { delta: dWins, total: lifetime.wins });
    if (dKills > 0) pushEvent(state, "kills", { delta: dKills, total: lifetime.kills });
    if (dMatches > 0 && dWins === 0) pushEvent(state, "match", { delta: dMatches });
  }
}

function setRanked(state, mode, rank, progress) {
  mode = mode === "zero_build" ? "zero_build" : "builds";
  state.ranked = state.ranked || {};
  const prev = state.ranked[mode] || {};
  const parsed = parseRank(rank);
  const prog = Math.max(0, Math.min(100, Number(progress) || 0));
  state.ranked[mode] = {
    rank: parsed.rank,
    progress: prog,
    division: parsed.division,
    tier: parsed.tier,
    color: rankColor(parsed.rank),
  };

  const prevIdx = rankIndex(prev.rank);
  const nextIdx = rankIndex(parsed.rank);
  if (prev.rank && prevIdx >= 0 && nextIdx > prevIdx) {
    pushEvent(state, "rank_up", { mode, from: prev.rank, to: parsed.rank, progress: prog });
  } else if (prev.rank && prevIdx >= 0 && nextIdx < prevIdx) {
    pushEvent(state, "rank_down", { mode, from: prev.rank, to: parsed.rank, progress: prog });
  } else if (prev.rank === parsed.rank && prev.progress != null && prog !== prev.progress) {
    pushEvent(state, "rank_progress", {
      mode,
      rank: parsed.rank,
      from: prev.progress,
      to: prog,
      delta: prog - prev.progress,
    });
  }
}

// ─── Poller ───────────────────────────────────────────────

let config = loadConfig();
let state = loadState();
let polling = false;
let lastPollAt = 0;

function withTimeout(promise, ms, label) {
  return Promise.race([
    promise,
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error(label || "timeout")), ms)
    ),
  ]);
}

async function pollOnce(opts = {}) {
  if (polling) {
    if (!opts.wait && !opts.refresh) return loadState();
    const start = Date.now();
    while (polling && Date.now() - start < 50000) {
      await new Promise((r) => setTimeout(r, 250));
    }
    if (polling) return loadState();
  }
  polling = true;
  config = loadConfig();
  state = loadState();
  ensureSession(state);

  const name = String(config.epicName || "").trim();
  if (!name) {
    state.lastError = "missing_epic_name";
    state.source = "manual";
    saveState(state);
    polling = false;
    return state;
  }
  const prevTracked = state.epicName || "";
  const switchedPlayer = prevTracked && prevTracked.toLowerCase() !== name.toLowerCase();
  if (switchedPlayer) {
    state.session = { startedAt: new Date().toISOString(), baseline: null };
    state.live = null;
    state.events = [];
  }

  try {

    // 1) Profil public fortnitetracker.com (vrai ranked + %)
    try {
      const live = await withTimeout(
        trackerLive.scrape(name, { refresh: !!opts.refresh, force: !!opts.refresh }),
        40000,
        "tracker_timeout"
      );
      if (live && live.ok && live.ranked && live.ranked.builds && live.ranked.builds.rank) {
        const b = live.ranked.builds;
        setRanked(state, "builds", b.rank, b.progress);
        if (live.lifetime && (live.lifetime.kills || live.lifetime.wins)) {
          const prevK = (state.lifetime && state.lifetime.kills) || 0;
          const jump = Math.abs((live.lifetime.kills || 0) - prevK);
          applyLifetime(state, live.lifetime, {
            announce: !switchedPlayer && jump > 0 && jump < 25,
          });
        }
        state.epicName = live.epicName || name;
        state.source = "fortnitetracker";
        state.lastError = null;
        state.lastFetch = live.fetchedAt;
        state.trackerLive = {
          elo: b.elo,
          peak: b.peak,
          reload: live.ranked.reload || null,
          fetchedAt: live.fetchedAt,
        };
        pushHistory(state, {
          source: "fortnitetracker",
          kills: (live.lifetime && live.lifetime.kills) || 0,
          wins: (live.lifetime && live.lifetime.wins) || 0,
          kd: (live.lifetime && live.lifetime.kd) || 0,
          rank: b.rank,
          progress: b.progress,
        });
        for (const mode of ["builds", "zero_build"]) {
          if (state.ranked && state.ranked[mode]) {
            state.ranked[mode].color = rankColor(state.ranked[mode].rank);
          }
        }
        saveState(state);
        lastPollAt = Date.now();
        polling = false;
        return state;
      }
    } catch (e) {
      const msg = "tracker_live: " + String(e.message || e);
      console.log("  [tracker]", name, msg);
      state.lastError = msg;
      state.source = "error";
      state.lastFetch = new Date().toISOString();
      if (switchedPlayer) {
        state.trackerLive = null;
      }
      saveState(state);
      lastPollAt = Date.now();
      polling = false;
      return state;
    }

    state.lastError = "tracker_rank_unavailable";
    state.source = "manual";
    state.lastFetch = new Date().toISOString();
  } catch (e) {
    state.lastError = String(e.message || e);
    state.lastFetch = new Date().toISOString();
  }

  // normalize ranked colors
  for (const mode of ["builds", "zero_build"]) {
    if (state.ranked && state.ranked[mode]) {
      state.ranked[mode].color = rankColor(state.ranked[mode].rank);
    }
  }

  saveState(state);
  lastPollAt = Date.now();
  polling = false;
  return state;
}

function pollDelayMs() {
  const sec = Number((loadConfig() || {}).pollSeconds);
  return Math.max(10, Number.isFinite(sec) ? sec : 15) * 1000;
}

function startPoller() {
  pollOnce().catch(() => {});
  const loop = () => {
    setTimeout(async () => {
      try {
        await pollOnce();
      } catch {}
      loop();
    }, pollDelayMs());
  };
  loop();
}

// ─── HTTP server ──────────────────────────────────────────

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".webp": "image/webp",
};

function send(res, code, body, type = "application/json; charset=utf-8") {
  const buf = Buffer.isBuffer(body) ? body : Buffer.from(body == null ? "" : String(body), "utf8");
  res.writeHead(code, {
    "Content-Type": type,
    "Content-Length": buf.length,
    "Access-Control-Allow-Origin": "*",
    "Cache-Control": "no-store",
  });
  res.end(buf);
}

function sendJson(res, code, obj) {
  send(res, code, JSON.stringify(obj), "application/json; charset=utf-8");
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let data = "";
    req.on("data", (c) => {
      data += c;
      if (data.length > 2e6) {
        reject(new Error("body_too_large"));
        req.destroy();
      }
    });
    req.on("end", () => resolve(data));
    req.on("error", reject);
  });
}

function ensureLive(s) {
  if (!s.live) {
    s.live = {
      matchKills: 0,
      matchDeaths: 0,
      matchAssists: 0,
      sessionKills: 0,
      sessionDeaths: 0,
      sessionAssists: 0,
      sessionWins: 0,
      streak: 0,
      lastKillAt: null,
      lastEvent: null,
    };
  }
  return s.live;
}

function applyLiveAction(state, action, value) {
  const live = ensureLive(state);
  const a = String(action || "").toLowerCase();
  if (a === "kill") {
    if (value != null && !isNaN(Number(value)) && Number(value) >= 0) {
      const v = Number(value);
      const delta = Math.max(0, v - (live.matchKills || 0));
      live.matchKills = v;
      live.sessionKills = (live.sessionKills || 0) + (delta || 1);
    } else {
      live.matchKills = (live.matchKills || 0) + 1;
      live.sessionKills = (live.sessionKills || 0) + 1;
    }
    live.streak = (live.streak || 0) + 1;
    live.lastKillAt = new Date().toISOString();
    live.lastEvent = "kill";
    pushEvent(state, "kills", { delta: 1, total: live.matchKills, match: live.matchKills, session: live.sessionKills });
  } else if (a === "death") {
    if (value != null && !isNaN(Number(value)) && Number(value) >= 0) {
      live.matchDeaths = Number(value);
    } else {
      live.matchDeaths = (live.matchDeaths || 0) + 1;
    }
    live.sessionDeaths = (live.sessionDeaths || 0) + 1;
    live.streak = 0;
    live.lastEvent = "death";
    pushEvent(state, "death", { match: live.matchDeaths });
  } else if (a === "assist") {
    live.matchAssists = (live.matchAssists || 0) + 1;
    live.sessionAssists = (live.sessionAssists || 0) + 1;
    live.lastEvent = "assist";
  } else if (a === "win") {
    live.sessionWins = (live.sessionWins || 0) + 1;
    live.lastEvent = "win";
    pushEvent(state, "win", { delta: 1, total: live.sessionWins });
  } else if (a === "reset" || a === "match_end" || a === "new_match") {
    live.matchKills = 0;
    live.matchDeaths = 0;
    live.matchAssists = 0;
    live.streak = 0;
    live.lastEvent = a;
  } else if (a === "session_reset") {
    live.sessionKills = 0;
    live.sessionDeaths = 0;
    live.sessionAssists = 0;
    live.sessionWins = 0;
    live.matchKills = 0;
    live.matchDeaths = 0;
    live.matchAssists = 0;
    live.streak = 0;
    live.lastEvent = "session_reset";
  }
  live.kd =
    live.matchDeaths > 0
      ? Number((live.matchKills / live.matchDeaths).toFixed(2))
      : live.matchKills;
  return live;
}

function publicState(s) {
  const cfg = loadConfig();
  const mode = s.activeMode || cfg.defaultMode || "builds";
  const ranked = (s.ranked && s.ranked[mode]) || { rank: "Unranked", progress: 0 };
  const live = ensureLive(s);
  return {
    epicName: s.epicName || cfg.epicName,
    accountId: s.accountId,
    profileUrl: cfg.profileUrl,
    lastFetch: s.lastFetch,
    lastError: s.lastError,
    source: s.source,
    activeMode: mode,
    ranked,
    rankedAll: s.ranked || {},
    lifetime: s.lifetime || {},
    season: s.season || {},
    session: s.session || {},
    live,
    events: (s.events || []).slice(0, 12),
    pollSeconds: cfg.pollSeconds,
    overlay: cfg.overlay || {},
    trackerLive: s.trackerLive || null,
    serverTime: new Date().toISOString(),
    rankLadder: RANK_LADDER,
    theme: cfg.theme || "sakura",
  };
}

async function handleApi(req, res, u) {
  const p = u.pathname;

  if (req.method === "OPTIONS") {
    res.writeHead(204, {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    });
    return res.end();
  }

  if (p === "/api/ping") {
    return sendJson(res, 200, { ok: true, port: config.port || 8767 });
  }

  if (p === "/api/state" && req.method === "GET") {
    state = loadState();
    return sendJson(res, 200, publicState(state));
  }

  if (p === "/api/config" && req.method === "GET") {
    const c = loadConfig();
    return sendJson(res, 200, c);
  }

  if (p === "/api/poll" && (req.method === "POST" || req.method === "GET")) {
    await pollOnce({ refresh: u.searchParams.get("refresh") === "1" });
    state = loadState();
    return sendJson(res, 200, { ok: true, state: publicState(state) });
  }

  if (p === "/api/tracker-sync" && (req.method === "POST" || req.method === "GET")) {
    await pollOnce({ refresh: true, wait: true });
    state = loadState();
    return sendJson(res, 200, {
      ok: true,
      tracker: trackerLive.getLast(),
      state: publicState(state),
    });
  }

  if (p === "/api/push" && (req.method === "POST" || req.method === "GET")) {
    let body = {};
    if (req.method === "POST") {
      const raw = await readBody(req);
      try {
        body = JSON.parse(raw || "{}");
      } catch {
        body = {};
      }
    }
    const action = body.action || u.searchParams.get("action") || "";
    const valueRaw = body.value != null ? body.value : u.searchParams.get("value");
    const value = valueRaw != null && valueRaw !== "" ? Number(valueRaw) : null;
    state = loadState();
    applyLiveAction(state, action, value);
    // Optional: set rank from push
    if (body.rank) {
      const mode = body.mode === "zero_build" ? "zero_build" : state.activeMode || "builds";
      setRanked(state, mode, body.rank, body.progress != null ? body.progress : undefined);
    }
    saveState(state);
    return sendJson(res, 200, { ok: true, live: state.live, state: publicState(state) });
  }

  if (p === "/api/session/reset" && req.method === "POST") {
    state = loadState();
    ensureSession(state);
    const life = state.lifetime || {};
    state.session.startedAt = new Date().toISOString();
    state.session.baseline = {
      wins: life.wins || 0,
      kills: life.kills || 0,
      deaths: life.deaths || 0,
      matches: life.matches || 0,
    };
    recomputeSession(state);
    pushEvent(state, "session_reset", {});
    saveState(state);
    return sendJson(res, 200, { ok: true, session: state.session });
  }

  if (p === "/api/ranked" && req.method === "POST") {
    const raw = await readBody(req);
    let body;
    try {
      body = JSON.parse(raw || "{}");
    } catch {
      return sendJson(res, 400, { ok: false, error: "bad_json" });
    }
    state = loadState();
    const mode = body.mode === "zero_build" ? "zero_build" : "builds";
    if (body.active) state.activeMode = mode;
    if (body.rank != null) setRanked(state, mode, body.rank, body.progress != null ? body.progress : (state.ranked[mode] && state.ranked[mode].progress) || 0);
    else if (body.progress != null && state.ranked && state.ranked[mode]) {
      setRanked(state, mode, state.ranked[mode].rank, body.progress);
    }
    if (body.activeMode) state.activeMode = body.activeMode === "zero_build" ? "zero_build" : "builds";
    saveState(state);
    return sendJson(res, 200, { ok: true, state: publicState(state) });
  }

  if (p === "/api/overlay" && req.method === "POST") {
    const raw = await readBody(req);
    let body;
    try {
      body = JSON.parse(raw || "{}");
    } catch {
      return sendJson(res, 400, { ok: false, error: "bad_json" });
    }
    const c = readJson(CONFIG_PATH, {});
    c.overlay = Object.assign({}, c.overlay || {}, body);
    // coerce types
    const o = c.overlay;
    if (!["classic","galaxy","neon","frost","royal","minimal","bunny"].includes(o.themeStyle)) o.themeStyle = "classic";
    if (!["fortnite","orbit","shield","crystal","medal","bunny"].includes(o.badgeStyle)) o.badgeStyle = "fortnite";
    for (const b of [
      "transparent",
      "showLogo",
      "showStars",
      "showGlow",
      "showRankName",
      "showModeLabel",
      "showProgress",
      "showLiveKills",
      "showLiveDeaths",
      "showLiveStreak",
      "showStats",
      "showProfileName",
      "showToasts",
      "celebrateRankUp",
    ]) {
      if (o[b] != null) o[b] = !!o[b];
    }
    if (o.opacity != null) o.opacity = Math.max(0.15, Math.min(1, Number(o.opacity) || 1));
    if (o.scale != null) o.scale = Math.max(0.5, Math.min(2, Number(o.scale) || 1));
    if (o.layout && !["banner", "full", "compact"].includes(o.layout)) o.layout = "banner";
    if (o.statsSource && !["lifetime", "session"].includes(o.statsSource)) o.statsSource = "lifetime";
    writeJson(CONFIG_PATH, c);
    config = loadConfig();
    return sendJson(res, 200, { ok: true, overlay: config.overlay, state: publicState(loadState()) });
  }

  if (p === "/api/config" && req.method === "POST") {
    const raw = await readBody(req);
    let body;
    try {
      body = JSON.parse(raw || "{}");
    } catch {
      return sendJson(res, 400, { ok: false, error: "bad_json" });
    }
    const c = readJson(CONFIG_PATH, {});
    const prevName = c.epicName;
    if (body.epicName != null && String(body.epicName).trim()) {
      c.epicName = String(body.epicName).trim();
    }
    // alias: pseudo Tracker
    if (body.pseudo != null && String(body.pseudo).trim()) {
      c.epicName = String(body.pseudo).trim();
    }
    if (body.pollSeconds != null) c.pollSeconds = Math.max(10, Number(body.pollSeconds) || 15);
    if (body.defaultMode) c.defaultMode = body.defaultMode === "zero_build" ? "zero_build" : "builds";
    if (body.profileUrl) c.profileUrl = String(body.profileUrl);
    // auto profile URL when name changes
    if (c.epicName && (body.epicName || body.pseudo || !c.profileUrl)) {
      c.profileUrl =
        "https://fortnitetracker.com/profile/all/" + encodeURIComponent(c.epicName);
    }
    if (body.overlay && typeof body.overlay === "object") {
      c.overlay = Object.assign({}, c.overlay || {}, body.overlay);
    }
    writeJson(CONFIG_PATH, c);
    config = loadConfig();
    state = loadState();
    if (c.epicName) state.epicName = c.epicName;
    saveState(state);
    // re-poll if name changed
    if (c.epicName && c.epicName !== prevName) {
      await pollOnce();
    }
    return sendJson(res, 200, {
      ok: true,
      epicName: config.epicName,
      profileUrl: config.profileUrl,
      overlay: config.overlay,
      state: publicState(loadState()),
    });
  }

  if (p === "/api/events/clear" && req.method === "POST") {
    state = loadState();
    state.events = [];
    saveState(state);
    return sendJson(res, 200, { ok: true });
  }

  return sendJson(res, 404, { ok: false, error: "not_found" });
}

function serveStatic(req, res, u) {
  let rel = u.pathname === "/" ? "/control.html" : u.pathname;
  rel = decodeURIComponent(rel).replace(/\.\./g, "");
  const file = path.join(PUBLIC, rel);
  if (!file.startsWith(PUBLIC)) return send(res, 403, "forbidden", "text/plain");
  if (!fs.existsSync(file) || fs.statSync(file).isDirectory()) {
    return send(res, 404, "not found", "text/plain");
  }
  const ext = path.extname(file).toLowerCase();
  const type = MIME[ext] || "application/octet-stream";
  send(res, 200, fs.readFileSync(file), type);
}

const server = http.createServer(async (req, res) => {
  try {
    const u = new URL(req.url || "/", `http://127.0.0.1`);
    if (u.pathname.startsWith("/api/")) {
      await handleApi(req, res, u);
    } else {
      serveStatic(req, res, u);
    }
  } catch (e) {
    sendJson(res, 500, { ok: false, error: String(e.message || e) });
  }
});

let PORT = Number(process.env.PORT || config.port || 8767);

server.listen(PORT, "127.0.0.1", () => {
  PORT = server.address().port;
  console.log("");
  console.log("  ══════════════════════════════════════════════");
  console.log("   Fortnite Ranked · GalaxyBunny Studio");
  console.log("  ══════════════════════════════════════════════");
  console.log(`   Joueur   : ${config.epicName || "(aucun pseudo)"}`);
  console.log(`   Poll     : ${Math.max(10, Number(config.pollSeconds) || 15)}s`);
  console.log(`   Overlay  : http://127.0.0.1:${PORT}/overlay.html`);
  console.log(`   Contrôle : http://127.0.0.1:${PORT}/control.html`);
  console.log(`   Tracker  : lecture live fortnitetracker.com`);
  console.log(`   Compact  : http://127.0.0.1:${PORT}/overlay-compact.html`);
  console.log(`   Profil   : ${config.profileUrl || ""}`);
  console.log("  ══════════════════════════════════════════════");
  console.log("");
  startPoller();
});

function shutdown() {
  try {
    trackerLive.closeBrowser();
  } catch {}
  process.exit(0);
}
process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
