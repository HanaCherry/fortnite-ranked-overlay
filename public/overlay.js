(() => {
  "use strict";

  const params = new URLSearchParams(location.search);
  const API =
    location.origin && location.origin !== "null"
      ? location.origin
      : "http://127.0.0.1:8767";
  const pollMs = Math.max(1200, Number(params.get("poll") || 1500));

  const $ = (id) => document.getElementById(id);
  let seenEvents = new Set();
  let firstLoad = true;
  let lastIconKey = "";
  let lastMatchKills = 0;
  let starsBanner = null;
  let starsFull = null;
  let lastDivision = "";

  function fmt(n) {
    n = Number(n) || 0;
    if (n >= 1e6) return (n / 1e6).toFixed(1).replace(/\.0$/, "") + "M";
    if (n >= 10000) return (n / 1000).toFixed(1).replace(/\.0$/, "") + "k";
    return String(Math.round(n * 100) / 100);
  }

  function divisionOf(rank) {
    if (window.RANK_LOGOS) return window.RANK_LOGOS.parse(rank || "Unranked").division;
    const s = String(rank || "Unranked");
    const m = s.match(/^(Bronze|Silver|Gold|Platinum|Diamond|Elite|Champion|Unreal)/i);
    return m ? m[1][0].toUpperCase() + m[1].slice(1).toLowerCase() : "Unranked";
  }

  async function resolveIcon(logo) {
    const candidates = logo.candidates || [];
    for (const rel of candidates) {
      const url = API + "/" + rel.replace(/^\//, "") + "?v=3";
      try {
        const r = await fetch(url, { cache: "no-store" });
        if (r.ok) {
          const buf = await r.arrayBuffer();
          const u8 = new Uint8Array(buf.slice(0, 4));
          // PNG or WebP (RIFF....WEBP)
          const isPng = u8[0] === 0x89 && u8[1] === 0x50 && u8[2] === 0x4e && u8[3] === 0x47;
          const u8b = new Uint8Array(buf.slice(0, 12));
          const isWebp =
            u8b[0] === 0x52 &&
            u8b[1] === 0x49 &&
            u8b[2] === 0x46 &&
            u8b[3] === 0x46 &&
            u8b[8] === 0x57 &&
            u8b[9] === 0x45;
          if (isPng || isWebp || rel.endsWith(".webp") || rel.endsWith(".png")) {
            return {
              html: `<img src="${url}" alt="${logo.rank || "rank"}" draggable="false" />`,
              color: logo.color,
            };
          }
        }
      } catch {}
    }
    return { html: logo.html, color: logo.color };
  }

  function ensureStars(division) {
    if (!window.RankStars) return;
    if (!starsBanner && $("stars")) {
      starsBanner = window.RankStars.create($("stars"), division);
    }
    if (!starsFull && $("starsFull")) {
      starsFull = window.RankStars.create($("starsFull"), division);
    }
    if (division !== lastDivision) {
      lastDivision = division;
      starsBanner && starsBanner.setDivision(division);
      starsFull && starsFull.setDivision(division);
    }
  }

  function toast(ev) {
    const box = $("toasts");
    if (!box) return;
    const el = document.createElement("div");
    el.className = "toast " + (ev.type || "");
    let text = "Update";
    if (ev.type === "rank_up") text = `▲ RANK UP · ${ev.from} → ${ev.to}`;
    else if (ev.type === "rank_down") text = `▼ ${ev.from} → ${ev.to}`;
    else if (ev.type === "rank_progress") text = `${ev.rank} · ${ev.to}%`;
    else if (ev.type === "win") text = `🏆 +${ev.delta} WIN`;
    else if (ev.type === "kills") text = `💀 +${ev.delta || 1} KILL · ${ev.match != null ? ev.match : ""}`;
    else if (ev.type === "death") text = `☠️ Death`;
    else if (ev.type === "sim_match") {
      const sign = Number(ev.delta) > 0 ? "+" : "";
      text = `${sign}${ev.delta}% · Top ${ev.placement} · ${ev.eliminations} elims`;
    }
    el.textContent = text;
    box.prepend(el);
    setTimeout(() => el.remove(), 3800);
  }

  function killFx() {
    const banner = $("banner");
    const box = $("liveKillsBox");
    banner && banner.classList.remove("kill-pop");
    box && box.classList.remove("pop");
    void (banner && banner.offsetWidth);
    banner && banner.classList.add("kill-pop");
    box && box.classList.add("pop");
    starsBanner && starsBanner.killBurst();
    starsFull && starsFull.killBurst();
    setTimeout(() => {
      banner && banner.classList.remove("kill-pop");
      box && box.classList.remove("pop");
    }, 600);
  }

  function applyOpts(ov) {
    ov = ov || {};
    const layout = params.get("layout") || ov.layout || "banner";
    const pos = params.get("pos") || ov.position || "bottom-right";
    const transparent = params.has("transparent")
      ? params.get("transparent") !== "0"
      : ov.transparent !== false;

    document.body.className = "layout-" + layout;
    document.body.classList.add("theme-" + (ov.themeStyle || "classic"), "badge-" + (ov.badgeStyle || "fortnite"));
    document.body.classList.toggle("is-preview", params.get("preview") === "1");
    // Cases à cocher : false = cacher l’élément
    document.body.classList.toggle("hide-logo", ov.showLogo === false);
    document.body.classList.toggle("hide-stars", ov.showStars === false);
    document.body.classList.toggle("hide-glow", ov.showGlow === false);
    document.body.classList.toggle("hide-rank-name", ov.showRankName === false);
    document.body.classList.toggle("hide-mode", ov.showModeLabel === false);
    document.body.classList.toggle("hide-progress", ov.showProgress === false);
    document.body.classList.toggle("hide-live", ov.showLiveKills === false && ov.showLiveDeaths === false && ov.showLiveStreak === false);
    document.body.classList.toggle("hide-live-kills", ov.showLiveKills === false);
    document.body.classList.toggle("hide-live-deaths", ov.showLiveDeaths === false);
    document.body.classList.toggle("hide-live-streak", ov.showLiveStreak === false);
    document.body.classList.toggle("hide-stats", ov.showStats === false);
    document.body.classList.toggle("hide-profile", ov.showProfileName === false);
    document.body.classList.toggle("hide-toasts", ov.showToasts === false);

    $("wrap").className = "wrap " + pos;
    document.documentElement.style.setProperty("--scale", String(ov.scale || 1));
    document.documentElement.style.setProperty("--opacity", String(ov.opacity != null ? ov.opacity : 1));

    $("banner").classList.toggle("glass", !transparent && layout === "banner");
    $("card").classList.toggle("transparent-bg", !!transparent && layout !== "banner");
  }

  async function apply(data) {
    if (!data) return;
    const ov = Object.assign(
      {
        layout: "banner",
        transparent: true,
        showLogo: true,
        showStars: true,
        showGlow: true,
        showRankName: true,
        showModeLabel: true,
        showProgress: true,
        showStats: false,
        showProfileName: false,
        showLiveKills: true,
        showLiveDeaths: true,
        showLiveStreak: true,
        showToasts: true,
        celebrateRankUp: true,
      },
      data.overlay || {}
    );
    applyOpts(ov);

    const r = data.ranked || {};
    const div = divisionOf(r.rank);
    if (ov.showStars !== false) ensureStars(div);

    const logo = window.RANK_LOGOS
      ? window.RANK_LOGOS.render(r.rank || "Unranked", { iconStyle: ov.iconStyle || "fortnite" })
      : { html: "", color: r.color || "#f0c14b", candidates: [] };

    document.documentElement.style.setProperty("--rank", logo.color || r.color || "#f0c14b");

    const key = (r.rank || "") + "|" + (ov.iconStyle || "");
    if (key !== lastIconKey) {
      lastIconKey = key;
      const resolved = await resolveIcon(logo);
      if ($("logo")) $("logo").innerHTML = resolved.html || "";
      if ($("logoBanner")) $("logoBanner").innerHTML = resolved.html || "";
    }

    const rankText = r.rank || "Unranked";
    $("rankLabel") && ($("rankLabel").textContent = rankText);
    $("rankBanner").textContent = rankText;

    const modeLabel =
      data.activeMode === "zero_build" ? "Ranked Zero Build" : "Ranked Builds";
    $("mode") && ($("mode").textContent = modeLabel);
    $("subBanner").textContent =
      (data.epicName || "—") + " · " + modeLabel;

    const prog = Math.max(0, Math.min(100, Number(r.progress) || 0));
    $("bar") && ($("bar").style.width = prog + "%");
    $("barBanner").style.width = prog + "%";
    $("progressText") && ($("progressText").textContent = prog + "%");
    $("pctBanner").textContent = prog + "%";

    $("name") && ($("name").textContent = data.epicName || "—");

    // Live kills (match) — auto Overwolf/hotkeys
    const live = data.live || {};
    const mk = live.matchKills != null ? live.matchKills : 0;
    const md = live.matchDeaths != null ? live.matchDeaths : 0;
    const st = live.streak != null ? live.streak : 0;
    $("liveKills").textContent = fmt(mk);
    $("liveDeaths").textContent = fmt(md);
    $("liveStreak").textContent = fmt(st);

    if (!firstLoad && mk > lastMatchKills) {
      killFx();
    }
    lastMatchKills = mk;

    // Full panel lifetime/session stats
    const useSession =
      (ov.statsSource || "lifetime") === "session" || params.get("stats") === "session";
    const stats = useSession ? data.session || {} : data.lifetime || {};
    if ($("profileSub")) {
      $("profileSub").textContent = useSession ? "Session stream" : "Stats profil";
    }
    if ($("sWins")) $("sWins").textContent = fmt(stats.wins);
    if ($("sKills")) $("sKills").textContent = fmt(stats.kills);
    if ($("sKd"))
      $("sKd").textContent = stats.kd != null ? Number(stats.kd).toFixed(2) : "0.00";
    const wr =
      stats.winRate != null
        ? Number(stats.winRate)
        : stats.matches > 0
          ? (100 * stats.wins) / stats.matches
          : 0;
    if ($("sWinRate")) $("sWinRate").textContent = (Math.round(wr * 10) / 10) + "%";
    if ($("sMatches")) $("sMatches").textContent = fmt(stats.matches);

    const pill = $("livePill");
    const src = $("source");
    if (pill && src) {
      pill.className = "live-pill";
      if (live.lastEvent === "kill" || live.lastKillAt) {
        pill.classList.add("ok");
        src.textContent = "Kills live";
      } else if ((data.source === "fortnite-api" || data.source === "tracker") && !data.lastError) {
        pill.classList.add("ok");
        src.textContent = data.source === "tracker" ? "Tracker" : "Live";
      } else if (data.lastError) {
        pill.classList.add("manual");
        src.textContent = "Rank OK · kills via Overwolf/F9";
      } else {
        pill.classList.add("manual");
        src.textContent = "live";
      }
    }

    // Events
    const events = data.events || [];
    if (!firstLoad) {
      for (const ev of events) {
        if (!ev.id || seenEvents.has(ev.id)) continue;
        seenEvents.add(ev.id);
        if (["rank_up", "rank_down", "rank_progress", "win", "kills", "death", "sim_match"].includes(ev.type)) {
          if (ov.showToasts !== false) toast(ev);
          if (ev.type === "rank_up" && ov.celebrateRankUp !== false) {
            if (ov.showStars !== false) {
              starsBanner && starsBanner.rankUpBurst();
              starsFull && starsFull.rankUpBurst();
            }
            $("banner").classList.remove("pulse");
            void $("banner").offsetWidth;
            $("banner").classList.add("pulse");
          }
          if (ev.type === "kills") killFx();
        }
      }
    } else {
      events.forEach((ev) => ev.id && seenEvents.add(ev.id));
      firstLoad = false;
    }
  }

  async function tick() {
    try {
      const r = await fetch(API + "/api/state?t=" + Date.now(), { cache: "no-store" });
      if (!r.ok) throw new Error("http");
      await apply(await r.json());
    } catch {
      if ($("source")) {
        $("source").textContent = "Offline";
        $("livePill") && ($("livePill").className = "live-pill err");
      }
    }
  }

  // init stars early
  ensureStars("Gold");
  tick();
  setInterval(tick, pollMs);
})();
