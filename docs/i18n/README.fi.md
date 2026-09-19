# Fortnite Ranked Overlay · GalaxyBunny Studio

Ranked-simulaattori on nyt paikallinen OBS-overlay. Rankki, edistyminen ja sessio pysyvät koneellasi.

**Kieli:** [Français](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=fr) · [English](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=en) · [Español](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=es) · [Português](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=pt) · [Deutsch](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=de) · [Italiano](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=it) · [日本語](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ja) · [한국어](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ko) · [简体中文](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=zh) · [繁體中文](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=zh-TW) · [العربية](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ar) · [Русский](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ru) · [हिन्दी](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=hi) · [Türkçe](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=tr) · [Polski](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=pl) · [Nederlands](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=nl) · [Bahasa Indonesia](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=id) · [Tiếng Việt](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=vi) · [ไทย](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=th) · [Українська](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=uk) · [Svenska](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=sv) · [Čeština](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=cs) · [Română](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ro) · [Ελληνικά](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=el) · [Magyar](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=hu) · [Suomi](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=fi) · [Dansk](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=da) · [Norsk](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=no) · [עברית](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=he) · [Català](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ca) · [Bahasa Melayu](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ms) · [Filipino](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=tl)

## Simulaattorista overlayksi

Tämä repo alkoi ranked-pistelaskurina. Nyt se on streamereiden overlay-studio. Alkuperäinen simulaattori on täällä kaikilla kielillä.

## Ranked-studio, ei vain laskin

- **Rankki ja edistyminen** — Bronze III:sta Unreal Legendsiin, Builds tai Zero Build — käsin tai julkisesta profiilista.
- **OBS-overlay** — Banner, täysi tai kompakti. Läpinäkyvä tausta, valmis selainlähteeksi.
- **Fortnite Tracker -synkronointi** — Valinnainen julkisen profiilin luku. Ilman nimeä manuaalitila toimii heti.
- **7 maailmaa, 6 merkkiä** — Classic, Galaxy, Neon, Frost, Royal, Minimal, Astral Galaxy. Rankin tunnus ei muutu.
- **Yksityinen suunnittelusta** — Palvelin kuuntelee vain 127.0.0.1. Nimi ja historia ovat data/-kansiossa, Git ohittaa ne.
- **Live-sessio** — Killit, deathit, putki ja rank-up-toastit striimin aikana.

## Käyntiin 4 vaiheessa

Node.js 18 tai uudempi. Windowsissa LANCER.bat riittää asennuksen jälkeen.

```sh
git clone https://github.com/HanaCherry/fortnite-ranked-overlay.git
cd fortnite-ranked-overlay
npm install
npm start
```

http://127.0.0.1:8767

## OBS / Streamlabs

1. Käynnistä sovellus ja pidä se auki striimin ajan.
2. Kopioi overlay-URL OBS-välilehdeltä.
3. Lisää selainlähde.
4. Liitä URL. Tausta on oletuksena läpinäkyvä.

Suositeltu koko: 700 × 220 (banner) · 1100 × 220 (täysi).

## Ranked-simulaattori pysyy verkossa

Arvioi pisteet sijoituksesta, elimineistä, late gamesta ja vastustajien rankista. Ilmainen, ei asennusta, kielelläsi.

[Avaa simulaattori](https://hanacherry.github.io/fortnite-ranked-overlay/simulateur.html?lang=fi)

## Paikallinen data

Toimitettu config.json ei sisällä tiliä. Asetukset data/config.json, historia data/state.json. Kansiota ei koskaan julkaista.

---

Fortnite ja rankkigrafiikka kuuluvat Epic Gamesille ja oikeudenhaltijoille. Riippumaton, epävirallinen projekti.

## Usage terms

The application remains free to use, including in monetized streams and videos. Installation, local builds, backups and configuration needed for that use are permitted. Reusing newly covered code in another project, modifying it, redistributing the application or selling copies requires HanaCherry's prior written permission through this repository's issues.

Previously granted rights are preserved: code already published under MIT remains under MIT, and third-party components keep their licenses. New covered original contributions follow the [free application use license](../../LICENSE). GitHub's viewing and forking rights are preserved.
