# Fortnite Ranked Overlay · GalaxyBunny Studio

Ang ranked simulator ay naging local OBS overlay. Rank, progress, at session ay nananatili sa PC mo.

**Wika:** [Français](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=fr) · [English](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=en) · [Español](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=es) · [Português](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=pt) · [Deutsch](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=de) · [Italiano](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=it) · [日本語](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ja) · [한국어](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ko) · [简体中文](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=zh) · [繁體中文](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=zh-TW) · [العربية](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ar) · [Русский](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ru) · [हिन्दी](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=hi) · [Türkçe](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=tr) · [Polski](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=pl) · [Nederlands](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=nl) · [Bahasa Indonesia](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=id) · [Tiếng Việt](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=vi) · [ไทย](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=th) · [Українська](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=uk) · [Svenska](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=sv) · [Čeština](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=cs) · [Română](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ro) · [Ελληνικά](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=el) · [Magyar](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=hu) · [Suomi](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=fi) · [Dansk](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=da) · [Norsk](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=no) · [עברית](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=he) · [Català](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ca) · [Bahasa Melayu](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ms) · [Filipino](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=tl)

## Mula simulator tungo sa overlay

Nagsimula ang repo na ito bilang ranked points calculator. Ngayon ay overlay studio para sa mga streamer. Nandito pa rin ang orihinal na simulator, sa lahat ng wika.

## Isang ranked studio, hindi lang calculator

- **Rank at progress** — Mula Bronze III hanggang Unreal Legends, Builds o Zero Build — manual o mula sa public profile.
- **OBS overlay** — Banner, full, o compact. Transparent na background, handa bilang Browser source.
- **Fortnite Tracker sync** — Opsyonal na basahin ang public profile. Kahit walang username, agad gumagana ang manual mode.
- **7 mundo, 6 badge** — Classic, Galaxy, Neon, Frost, Royal, Minimal, Astral Galaxy. Hindi nagbabago ang emblem ng rank mo.
- **Pribado by design** — Ang server ay nakikinig lang sa 127.0.0.1. Username at history nasa data/, iniignore ng Git.
- **Live session** — Kills, deaths, streak, at rank-up toasts habang naka-stream.

## Tumakbo sa 4 na hakbang

Node.js 18 o mas bago. Sa Windows, sapat na ang LANCER.bat pagkatapos mag-install.

```sh
git clone https://github.com/HanaCherry/fortnite-ranked-overlay.git
cd fortnite-ranked-overlay
npm install
npm start
```

http://127.0.0.1:8767

## OBS / Streamlabs

1. Simulan ang app at hayaan itong bukas habang nagst-stream.
2. Kopyahin ang overlay URL mula sa OBS tab.
3. Magdagdag ng Browser source.
4. I-paste ang URL. Transparent ang background by default.

Suhestiyong sukat: 700 × 220 (banner) · 1100 × 220 (full).

## Nanatiling online ang ranked simulator

Tantyahin ang points mula sa placement, eliminations, late game, at rank ng kalaban. Libre, walang install, sa wika mo.

[Buksan ang simulator](https://hanacherry.github.io/fortnite-ranked-overlay/simulateur.html?lang=tl)

## Lokal na data

Walang account ang ipinamahaging config.json. Settings sa data/config.json, history sa data/state.json. Hindi kailanman nai-publish ang folder na iyon.

---

Ang Fortnite at rank artwork ay pag-aari ng Epic Games at ng mga may-ari. Independent, hindi opisyal na proyekto.

## Usage terms

The application remains free to use, including in monetized streams and videos. Installation, local builds, backups and configuration needed for that use are permitted. Reusing newly covered code in another project, modifying it, redistributing the application or selling copies requires HanaCherry's prior written permission through this repository's issues.

Previously granted rights are preserved: code already published under MIT remains under MIT, and third-party components keep their licenses. New covered original contributions follow the [free application use license](../../LICENSE). GitHub's viewing and forking rights are preserved.
