/**
 * Badges ranked Fortnite — icônes officielles (dossier Nouveau dossier / Tracker CDN)
 * Mapping index Tracker:
 * 0 Unranked
 * 1-3 Bronze III→I · 4-6 Silver · 7-9 Gold · 10-12 Plat · 13-15 Diamond
 * 16-18 Elite III→I · 19-21 Champion III→I · 22 Unreal
 */
window.RANK_LOGOS = (() => {
  const COLORS = {
    Bronze: { glow: "#cd7f32" },
    Silver: { glow: "#c0c7d1" },
    Gold: { glow: "#f0c14b" },
    Platinum: { glow: "#7fd3e8" },
    Diamond: { glow: "#6ecbff" },
    Elite: { glow: "#ff4fd8" },
    Champion: { glow: "#ff5a3c" },
    Unreal: { glow: "#a8e7ff" },
    "Unreal Legends": { glow: "#ffc800" },
    Unranked: { glow: "#889" },
  };

  // Rank → fichier numéroté officiel
  const RANK_FILE = {
    Unranked: ["0.webp", "0.png", "trn_0.png", "unranked.webp", "unranked.png"],
    "Bronze III": ["1.png", "bronze_3.png"],
    "Bronze II": ["2.png", "bronze_2.png"],
    "Bronze I": ["3.png", "bronze_1.png"],
    Bronze: ["2.png", "bronze.png"],
    "Silver III": ["4.png", "silver_3.png"],
    "Silver II": ["5.png", "silver_2.png"],
    "Silver I": ["6.png", "silver_1.png"],
    Silver: ["5.png", "silver.png"],
    "Gold III": ["7.png", "gold_3.png"],
    "Gold II": ["8.png", "gold_2.png"],
    "Gold I": ["9.png", "gold_1.png"],
    Gold: ["8.png", "gold.png"],
    "Platinum III": ["10.png", "platinum_3.png"],
    "Platinum II": ["11.png", "platinum_2.png"],
    "Platinum I": ["12.png", "platinum_1.png"],
    Platinum: ["11.png", "platinum.png"],
    "Diamond III": ["13.png", "diamond_3.png"],
    "Diamond II": ["14.png", "diamond_2.png"],
    "Diamond I": ["15.png", "diamond_1.png"],
    Diamond: ["14.png", "diamond.png"],
    "Elite III": ["16.png", "elite_3.png"],
    "Elite II": ["17.png", "elite_2.png"],
    "Elite I": ["18.png", "elite_1.png"],
    Elite: ["18.png", "elite.png"],
    "Champion III": ["19.webp", "19.png", "champion_3.png"],
    "Champion II": ["20.png", "champion_2.png"],
    "Champion I": ["21.png", "champion_1.png"],
    Champion: ["21.png", "champion.png"],
    Unreal: ["22.webp", "22.png", "unreal.png", "unreal-legends.png"],
    "Unreal Legends": ["unreal-legends.png", "22.webp", "22.png", "unreal.png"],
  };

  function parse(rank) {
    const s = String(rank || "Unranked").trim();
    if (/unreal\s*legends/i.test(s)) {
      return { division: "Unreal", tier: null, rank: "Unreal Legends", file: "unreal-legends" };
    }
    if (/^unreal/i.test(s)) return { division: "Unreal", tier: null, rank: "Unreal", file: "unreal" };
    if (/^champion/i.test(s)) {
      const m = s.match(/champion\s*(III|II|I|3|2|1)?/i);
      let tier = null, tierN = null;
      if (m && m[1]) {
        const t = m[1].toUpperCase();
        if (t === "III" || t === "3") { tier = "III"; tierN = 3; }
        else if (t === "II" || t === "2") { tier = "II"; tierN = 2; }
        else { tier = "I"; tierN = 1; }
      }
      const rankName = tier ? `Champion ${tier}` : "Champion";
      return { division: "Champion", tier, tierN, rank: rankName, file: tierN ? `champion_${tierN}` : "champion" };
    }
    if (/^elite/i.test(s)) {
      const m = s.match(/elite\s*(III|II|I|3|2|1)?/i);
      let tier = null, tierN = null;
      if (m && m[1]) {
        const t = m[1].toUpperCase();
        if (t === "III" || t === "3") { tier = "III"; tierN = 3; }
        else if (t === "II" || t === "2") { tier = "II"; tierN = 2; }
        else { tier = "I"; tierN = 1; }
      }
      const rankName = tier ? `Elite ${tier}` : "Elite";
      return { division: "Elite", tier, tierN, rank: rankName, file: tierN ? `elite_${tierN}` : "elite" };
    }
    if (/^unranked/i.test(s)) return { division: "Unranked", tier: null, rank: "Unranked", file: "unranked" };
    const m = s.match(/^(Bronze|Silver|Gold|Platinum|Diamond)\s*(III|II|I|3|2|1)?/i);
    if (!m) return { division: "Unranked", tier: null, rank: s, file: "unranked" };
    const division = m[1][0].toUpperCase() + m[1].slice(1).toLowerCase();
    let tier = null;
    let tierN = null;
    if (m[2]) {
      const t = m[2].toUpperCase();
      if (t === "III" || t === "3") { tier = "III"; tierN = 3; }
      else if (t === "II" || t === "2") { tier = "II"; tierN = 2; }
      else { tier = "I"; tierN = 1; }
    }
    const rankName = tier ? `${division} ${tier}` : division;
    const file = tierN ? `${division.toLowerCase()}_${tierN}` : division.toLowerCase();
    return { division, tier, tierN, rank: rankName, file };
  }

  function localPngCandidates(parsed) {
    const base = "ranks/";
    const list = [];
    // Official numbered files first
    const key = parsed.rank;
    const files = RANK_FILE[key] || RANK_FILE[parsed.division] || RANK_FILE.Unranked;
    for (const f of files) list.push(base + f);
    // aliases
    if (parsed.tierN) {
      list.push(base + parsed.file + ".png");
      list.push(base + parsed.file + ".webp");
      list.push(base + parsed.division.toLowerCase() + "_" + parsed.tierN + ".png");
    }
    list.push(base + parsed.division.toLowerCase() + ".png");
    list.push(base + parsed.file + ".png");
    return list;
  }

  function fortniteSvg(division, tier) {
    // fallback simple si PNG absent
    const col = COLORS[division] || COLORS.Unranked;
    const uid = "r" + Math.random().toString(36).slice(2, 7);
    const label = tier || (division === "Unreal" ? "UR" : division.slice(0, 2).toUpperCase());
    return `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
      <defs><linearGradient id="${uid}" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="${col.glow}"/><stop offset="100%" stop-color="#222"/>
      </linearGradient></defs>
      <polygon points="64,10 110,36 110,92 64,118 18,92 18,36" fill="url(#${uid})" stroke="#fff" stroke-opacity="0.35"/>
      <text x="64" y="72" text-anchor="middle" fill="#fff" font-size="18" font-weight="900" font-family="Segoe UI">${label}</text>
    </svg>`;
  }

  function render(rank, opts = {}) {
    const parsed = parse(rank);
    const col = COLORS[parsed.division] || COLORS.Unranked;
    if (opts.iconUrl) {
      return {
        html: `<img src="${opts.iconUrl}" alt="${parsed.rank}" />`,
        color: col.glow,
        division: parsed.division,
        rank: parsed.rank,
        iconUrl: opts.iconUrl,
        candidates: localPngCandidates(parsed),
      };
    }
    return {
      html: fortniteSvg(parsed.division, parsed.tier),
      color: col.glow,
      division: parsed.division,
      rank: parsed.rank,
      iconUrl: null,
      candidates: localPngCandidates(parsed),
    };
  }

  return { parse, render, COLORS, RANK_FILE };
})();
