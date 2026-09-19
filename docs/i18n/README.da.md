# Fortnite Ranked Overlay · GalaxyBunny Studio

Ranked-simulatoren er nu et lokalt OBS-overlay. Rank, fremgang og session bliver på din pc.

**Sprog:** [Français](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=fr) · [English](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=en) · [Español](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=es) · [Português](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=pt) · [Deutsch](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=de) · [Italiano](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=it) · [日本語](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ja) · [한국어](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ko) · [简体中文](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=zh) · [繁體中文](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=zh-TW) · [العربية](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ar) · [Русский](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ru) · [हिन्दी](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=hi) · [Türkçe](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=tr) · [Polski](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=pl) · [Nederlands](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=nl) · [Bahasa Indonesia](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=id) · [Tiếng Việt](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=vi) · [ไทย](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=th) · [Українська](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=uk) · [Svenska](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=sv) · [Čeština](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=cs) · [Română](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ro) · [Ελληνικά](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=el) · [Magyar](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=hu) · [Suomi](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=fi) · [Dansk](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=da) · [Norsk](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=no) · [עברית](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=he) · [Català](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ca) · [Bahasa Melayu](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ms) · [Filipino](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=tl)

## Fra simulator til overlay

Dette repo startede som en ranked-pointberegner. Nu er det et overlay-studie til streamere. Den originale simulator bliver her på alle sprog.

## Et ranked-studie, ikke bare en lommeregner

- **Rank og fremgang** — Fra Bronze III til Unreal Legends, Builds eller Zero Build — manuelt eller fra en offentlig profil.
- **OBS-overlay** — Banner, fuld eller kompakt. Gennemsigtig baggrund, klar som browserkilde.
- **Fortnite Tracker-synk** — Valgfri aflæsning af offentlig profil. Uden navn virker manuel tilstand med det samme.
- **7 verdener, 6 badges** — Classic, Galaxy, Neon, Frost, Royal, Minimal, Astral Galaxy. Dit rank-emblem ændres ikke.
- **Privat by design** — Serveren lytter kun på 127.0.0.1. Navn og historik ligger i data/, ignoreres af Git.
- **Live-session** — Kills, deaths, streak og rank-up-toasts under streamen.

## Kørende på 4 trin

Node.js 18 eller nyere. På Windows er LANCER.bat nok efter installation.

```sh
git clone https://github.com/HanaCherry/fortnite-ranked-overlay.git
cd fortnite-ranked-overlay
npm install
npm start
```

http://127.0.0.1:8767

## OBS / Streamlabs

1. Start appen og lad den køre under streamen.
2. Kopiér overlay-URL’en fra OBS-fanen.
3. Tilføj en browserkilde.
4. Indsæt URL’en. Baggrund er gennemsigtig som standard.

Foreslået størrelse: 700 × 220 (banner) · 1100 × 220 (fuld).

## Ranked-simulatoren bliver online

Estimer point fra placering, elimineringer, late game og modstander-rank. Gratis, ingen installation, på dit sprog.

[Åbn simulatoren](https://hanacherry.github.io/fortnite-ranked-overlay/simulateur.html?lang=da)

## Lokale data

Medfølgende config.json har ingen konto. Indstillinger i data/config.json, historik i data/state.json. Mappen udgives aldrig.

---

Fortnite og rank-grafik tilhører Epic Games og rettighedshaverne. Uafhængigt, uofficielt projekt.

## Usage terms

The application remains free to use, including in monetized streams and videos. Installation, local builds, backups and configuration needed for that use are permitted. Reusing newly covered code in another project, modifying it, redistributing the application or selling copies requires HanaCherry's prior written permission through this repository's issues.

Previously granted rights are preserved: code already published under MIT remains under MIT, and third-party components keep their licenses. New covered original contributions follow the [free application use license](../../LICENSE). GitHub's viewing and forking rights are preserved.
