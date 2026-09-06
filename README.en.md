<p align="center">
  <img src="public/brand/studio-logo.png" alt="GalaxyBunny Studio" width="120">
</p>

<h1 align="center">Fortnite Ranked Overlay</h1>
<p align="center"><strong>GalaxyBunny Studio</strong> · fortnite-ranked-overlay</p>

<p align="center">
  Local overlay for <strong>OBS</strong> and <strong>Streamlabs</strong> — rank, progress, and live session.<br>
  The ranked points simulator stays online, in every language.
</p>

<p align="center">
  <a href="https://hanacherry.github.io/fortnite-ranked-overlay/?lang=en"><img src="https://img.shields.io/badge/site-multilingual-8670ef?style=for-the-badge" alt="Site"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-c9bcff?style=for-the-badge" alt="MIT"></a>
  <a href="package.json"><img src="https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge" alt="Node.js 18+"></a>
</p>

<p align="center">
  <a href="README.md">Français</a> ·
  <a href="README.en.md">English</a> ·
  <a href="https://hanacherry.github.io/fortnite-ranked-overlay/?lang=en">All languages on the site</a>
</p>

<p align="center">
  <a href="https://hanacherry.github.io/fortnite-ranked-overlay/?lang=en">Presentation site</a>
  ·
  <a href="https://hanacherry.github.io/fortnite-ranked-overlay/simulateur.html?lang=en">Points simulator</a>
</p>

<p align="center">
  <img src="docs/assets/hero-banner.jpg" alt="GalaxyBunny Studio — ranked overlay" width="900">
</p>

## From simulator to overlay

This repository started as a **ranked points calculator**. It is now a **streaming overlay studio**: local dashboard, transparent OBS overlay, galaxy themes, and optional public Fortnite Tracker sync.

The original simulator remains [online](https://hanacherry.github.io/fortnite-ranked-overlay/simulateur.html?lang=en), free, in 32 languages.

## Preview

<p align="center">
  <img src="docs/assets/dashboard.png" alt="GalaxyBunny Studio dashboard" width="900">
</p>

<p align="center">
  <img src="docs/assets/overlay.png" alt="Banner overlay Diamond III" width="420">
  &nbsp;
  <img src="docs/assets/overlay-compact.png" alt="Compact overlay" width="380">
</p>

## Features

- **Rank & progress** — Bronze III → Unreal Legends, Builds or Zero Build, manual or from a public profile
- **OBS / Streamlabs overlay** — banner, full, or compact, transparent background
- **Live session** — kills, deaths, streak, rank-up toasts
- **Appearance** — 7 styles (Classic, Galaxy, Neon, Frost, Royal, Minimal, Astral Galaxy) and 6 badge finishes
- **Private by design** — the server listens on `127.0.0.1` only
- **Web simulator** — ranked point estimates without installing Node.js

## Quick start

Install [Node.js 18+](https://nodejs.org), then:

```sh
git clone https://github.com/HanaCherry/fortnite-ranked-overlay.git
cd fortnite-ranked-overlay
npm install
npm start
```

Open `http://127.0.0.1:8767`. The app starts **with no username**; manual mode works immediately.

On Windows, `LANCER.bat` also starts the server. `LANCER-SILENCIEUX.vbs` starts it without a console after dependencies are installed.

Add your own Epic username in **Profil Epic** only if you want to sync a public profile.

## OBS / Streamlabs

1. Start the app and leave it running while you stream.
2. Copy the overlay URL from the **OBS / Streamlabs** tab.
3. Add a **Browser** source.
4. Paste the URL. The background is transparent by default.

Suggested size: **700 × 220** (banner) · **1100 × 220** (full).

| Page | Path |
|---|---|
| Dashboard | `/control.html` |
| Overlay | `/overlay.html` |
| Compact overlay | `/overlay-compact.html` |

## Sync

Public-profile readout uses `playwright-core` and an installed Edge or Chrome browser. This dependency is optional: manual features work without it. Site restrictions, private profiles, and layout changes can block sync. Data is not guaranteed real-time. Default interval is 30 seconds.

## Local data

Shipped `config.json` contains no account. Your settings are stored separately:

- `data/config.json` — username and local preferences
- `data/state.json` — stats and session history

The `data/` folder is created automatically and **fully ignored by Git**. Do not force-add it.

```sh
npm test
npm run export:github
```

Tests cover a clean start, local settings isolation, and rank updates. A publishable export lands in `dist/github/`.

## Identity

Logo: GalaxyBunny Studio. Fortnite and rank artwork belong to Epic Games and their respective owners. This is an independent project and is **not** an official Epic Games product.
