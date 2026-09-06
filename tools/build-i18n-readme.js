"use strict";
const fs = require("node:fs");
const path = require("node:path");
const { I18N, LANGS } = require("../docs/i18n.js");
const root = path.resolve(__dirname, "..");
const outDir = path.join(root, "docs", "i18n");
fs.mkdirSync(outDir, { recursive: true });

const skip = new Set(["fr", "en"]);
const bar = LANGS.map((lang) => `[${lang.name}](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=${encodeURIComponent(lang.id)})`).join(" · ");

for (const lang of LANGS) {
  if (skip.has(lang.id)) continue;
  const t = I18N[lang.id];
  const body = `# ${t.metaTitle}

${t.heroLead}

**${t.chooseLang}:** ${bar}

## ${t.evoTitle}

${t.evoBody}

## ${t.featuresTitle}

- **${t.fRankT}** — ${t.fRankD}
- **${t.fOverlayT}** — ${t.fOverlayD}
- **${t.fSyncT}** — ${t.fSyncD}
- **${t.fStyleT}** — ${t.fStyleD}
- **${t.fPrivacyT}** — ${t.fPrivacyD}
- **${t.fLiveT}** — ${t.fLiveD}

## ${t.installTitle}

${t.installLead}

\`\`\`sh
git clone https://github.com/HanaCherry/fortnite-ranked-overlay.git
cd fortnite-ranked-overlay
npm install
npm start
\`\`\`

http://127.0.0.1:8767

## ${t.obsTitle}

1. ${t.obs1}
2. ${t.obs2}
3. ${t.obs3}
4. ${t.obs4}

${t.obsSize}

## ${t.simTitle}

${t.simLead}

[${t.simCta}](https://hanacherry.github.io/fortnite-ranked-overlay/simulateur.html?lang=${encodeURIComponent(lang.id)})

## ${t.privacyTitle}

${t.privacyBody}

---

${t.disclaimer}
`;
  const file = "README." + lang.id + ".md";
  fs.writeFileSync(path.join(outDir, file), body, "utf8");
}
console.log("wrote", LANGS.length - skip.size, "translated README files");
