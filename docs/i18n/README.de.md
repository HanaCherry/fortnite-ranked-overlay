# Fortnite Ranked Overlay · GalaxyBunny Studio

Der Ranked-Simulator wird zum lokalen OBS-Overlay. Rang, Fortschritt und Session bleiben auf deinem PC.

**Sprache:** [Français](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=fr) · [English](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=en) · [Español](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=es) · [Português](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=pt) · [Deutsch](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=de) · [Italiano](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=it) · [日本語](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ja) · [한국어](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ko) · [简体中文](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=zh) · [繁體中文](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=zh-TW) · [العربية](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ar) · [Русский](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ru) · [हिन्दी](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=hi) · [Türkçe](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=tr) · [Polski](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=pl) · [Nederlands](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=nl) · [Bahasa Indonesia](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=id) · [Tiếng Việt](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=vi) · [ไทย](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=th) · [Українська](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=uk) · [Svenska](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=sv) · [Čeština](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=cs) · [Română](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ro) · [Ελληνικά](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=el) · [Magyar](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=hu) · [Suomi](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=fi) · [Dansk](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=da) · [Norsk](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=no) · [עברית](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=he) · [Català](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ca) · [Bahasa Melayu](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ms) · [Filipino](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=tl)

## Vom Simulator zum Overlay

Dieses Repo begann als Ranked-Punkte-Rechner. Es ist jetzt ein Overlay-Studio für Streamer. Der Original-Simulator bleibt hier, in allen Sprachen.

## Ein Ranked-Studio, nicht nur ein Rechner

- **Rang & Fortschritt** — Von Bronze III bis Unreal Legends, Builds oder Zero Build — manuell oder über ein öffentliches Profil.
- **OBS-Overlay** — Banner, voll oder kompakt. Transparenter Hintergrund, bereit als Browserquelle.
- **Fortnite-Tracker-Sync** — Optionales Auslesen eines öffentlichen Profils. Ohne Namen läuft der manuelle Modus sofort.
- **7 Welten, 6 Abzeichen** — Classic, Galaxy, Neon, Frost, Royal, Minimal, Astral-Galaxie. Dein Rangsymbol bleibt gleich.
- **Privat by Design** — Der Server lauscht nur auf 127.0.0.1. Name und Verlauf liegen in data/, von Git ignoriert.
- **Live-Session** — Kills, Deaths, Streak und Rank-up-Toasts während des Streams.

## In 4 Schritten startklar

Node.js 18 oder neuer. Unter Windows reicht LANCER.bat nach der Installation.

```sh
git clone https://github.com/HanaCherry/fortnite-ranked-overlay.git
cd fortnite-ranked-overlay
npm install
npm start
```

http://127.0.0.1:8767

## OBS / Streamlabs

1. App starten und während des Streams geöffnet lassen.
2. Overlay-URL im OBS-Tab kopieren.
3. Browserquelle hinzufügen.
4. URL einfügen. Hintergrund standardmäßig transparent.

Empfohlene Größe: 700 × 220 (Banner) · 1100 × 220 (voll).

## Der Ranked-Simulator bleibt online

Punkte aus Platzierung, Eliminations, Late Game und Gegner-Rang schätzen. Kostenlos, ohne Installation, in deiner Sprache.

[Simulator öffnen](https://hanacherry.github.io/fortnite-ranked-overlay/simulateur.html?lang=de)

## Lokale Daten

Die mitgelieferte config.json enthält kein Konto. Einstellungen in data/config.json, Verlauf in data/state.json. Dieser Ordner wird nie veröffentlicht.

---

Fortnite und Ranggrafiken gehören Epic Games und den jeweiligen Rechteinhabern. Unabhängiges, inoffizielles Projekt.
