# Overlay Fortnite Ranked · GalaxyBunny Studio

Ranked simulátor je teď místní OBS overlay. Rank, postup i relace zůstanou na vašem PC.

**Jazyk:** [Français](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=fr) · [English](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=en) · [Español](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=es) · [Português](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=pt) · [Deutsch](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=de) · [Italiano](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=it) · [日本語](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ja) · [한국어](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ko) · [简体中文](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=zh) · [繁體中文](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=zh-TW) · [العربية](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ar) · [Русский](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ru) · [हिन्दी](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=hi) · [Türkçe](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=tr) · [Polski](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=pl) · [Nederlands](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=nl) · [Bahasa Indonesia](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=id) · [Tiếng Việt](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=vi) · [ไทย](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=th) · [Українська](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=uk) · [Svenska](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=sv) · [Čeština](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=cs) · [Română](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ro) · [Ελληνικά](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=el) · [Magyar](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=hu) · [Suomi](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=fi) · [Dansk](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=da) · [Norsk](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=no) · [עברית](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=he) · [Català](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ca) · [Bahasa Melayu](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ms) · [Filipino](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=tl)

## Od simulátoru k overlayi

Toto repo začalo jako kalkulačka ranked bodů. Teď je to overlay studio pro streamery. Původní simulátor tu zůstává ve všech jazycích.

## Ranked studio, nejen kalkulačka

- **Rank a postup** — Od Bronze III po Unreal Legends, Builds nebo Zero Build — ručně nebo z veřejného profilu.
- **OBS overlay** — Banner, plný nebo kompaktní. Průhledné pozadí, připraveno jako zdroj Prohlížeč.
- **Synchronizace Fortnite Tracker** — Volitelné čtení veřejného profilu. Bez jména ruční režim funguje hned.
- **7 světů, 6 odznaků** — Classic, Galaxy, Neon, Mráz, Royal, Minimal, Astral Galaxy. Emblém ranku se nemění.
- **Soukromé od návrhu** — Server poslouchá jen 127.0.0.1. Jméno a historie jsou v data/, Git je ignoruje.
- **Živá relace** — Killy, deathy, série a toasty postupu během streamu.

## Spuštění ve 4 krocích

Node.js 18 nebo novější. Ve Windows po instalaci stačí LANCER.bat.

```sh
git clone https://github.com/HanaCherry/fortnite-ranked-overlay.git
cd fortnite-ranked-overlay
npm install
npm start
```

http://127.0.0.1:8767

## OBS / Streamlabs

1. Spusťte aplikaci a nechte ji běžet během streamu.
2. Zkopírujte URL overlaye na kartě OBS.
3. Přidejte zdroj Prohlížeč.
4. Vložte URL. Pozadí je ve výchozím stavu průhledné.

Doporučená velikost: 700 × 220 (banner) · 1100 × 220 (plný).

## Ranked simulátor zůstává online

Odhadněte body podle umístění, eliminací, late game a ranku soupeřů. Zdarma, bez instalace, ve vašem jazyce.

[Otevřít simulátor](https://hanacherry.github.io/fortnite-ranked-overlay/simulateur.html?lang=cs)

## Místní data

Dodávaný config.json neobsahuje účet. Nastavení v data/config.json, historie v data/state.json. Tato složka se nikdy nezveřejňuje.

---

Fortnite a grafika ranků patří Epic Games a držitelům práv. Nezávislý neoficiální projekt.
