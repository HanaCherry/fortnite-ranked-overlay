# Fortnite Ranked Overlay · GalaxyBunny Studio

Ranked-simulatoren er nå et lokalt OBS-overlay. Rank, fremgang og økt blir på PC-en din.

**Språk:** [Français](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=fr) · [English](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=en) · [Español](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=es) · [Português](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=pt) · [Deutsch](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=de) · [Italiano](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=it) · [日本語](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ja) · [한국어](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ko) · [简体中文](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=zh) · [繁體中文](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=zh-TW) · [العربية](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ar) · [Русский](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ru) · [हिन्दी](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=hi) · [Türkçe](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=tr) · [Polski](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=pl) · [Nederlands](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=nl) · [Bahasa Indonesia](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=id) · [Tiếng Việt](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=vi) · [ไทย](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=th) · [Українська](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=uk) · [Svenska](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=sv) · [Čeština](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=cs) · [Română](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ro) · [Ελληνικά](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=el) · [Magyar](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=hu) · [Suomi](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=fi) · [Dansk](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=da) · [Norsk](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=no) · [עברית](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=he) · [Català](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ca) · [Bahasa Melayu](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ms) · [Filipino](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=tl)

## Fra simulator til overlay

Dette repoet startet som en ranked-poengkalkulator. Nå er det et overlay-studio for streamere. Originalsimulatoren blir her på alle språk.

## Et ranked-studio, ikke bare en kalkulator

- **Rank og fremgang** — Fra Bronze III til Unreal Legends, Builds eller Zero Build — manuelt eller fra en offentlig profil.
- **OBS-overlay** — Banner, full eller kompakt. Gjennomsiktig bakgrunn, klar som nettleserkilde.
- **Fortnite Tracker-synk** — Valgfri avlesning av offentlig profil. Uten navn virker manuell modus med en gang.
- **7 verdener, 6 merker** — Classic, Galaxy, Neon, Frost, Royal, Minimal, Astral Galaxy. Ranksymbolet endres ikke.
- **Privat by design** — Serveren lytter bare på 127.0.0.1. Navn og historikk ligger i data/, ignoreres av Git.
- **Live-økt** — Kills, deaths, streak og rank-up-toasts under streamen.

## I gang på 4 steg

Node.js 18 eller nyere. På Windows holder LANCER.bat etter installasjon.

```sh
git clone https://github.com/HanaCherry/fortnite-ranked-overlay.git
cd fortnite-ranked-overlay
npm install
npm start
```

http://127.0.0.1:8767

## OBS / Streamlabs

1. Start appen og la den være åpen under streamen.
2. Kopier overlay-URL-en fra OBS-fanen.
3. Legg til en nettleserkilde.
4. Lim inn URL-en. Bakgrunnen er gjennomsiktig som standard.

Foreslått størrelse: 700 × 220 (banner) · 1100 × 220 (full).

## Ranked-simulatoren blir værende på nett

Estimer poeng fra plassering, elimineringer, late game og motstander-rank. Gratis, ingen installasjon, på språket ditt.

[Åpne simulatoren](https://hanacherry.github.io/fortnite-ranked-overlay/simulateur.html?lang=no)

## Lokal data

Medfølgende config.json har ingen konto. Innstillinger i data/config.json, historikk i data/state.json. Mappen publiseres aldri.

---

Fortnite og rankgrafikk tilhører Epic Games og rettighetshaverne. Uavhengig, uoffisielt prosjekt.

## Usage terms

The application remains free to use, including in monetized streams and videos. Installation, local builds, backups and configuration needed for that use are permitted. Reusing newly covered code in another project, modifying it, redistributing the application or selling copies requires HanaCherry's prior written permission through this repository's issues.

Previously granted rights are preserved: code already published under MIT remains under MIT, and third-party components keep their licenses. New covered original contributions follow the [free application use license](../../LICENSE). GitHub's viewing and forking rights are preserved.
