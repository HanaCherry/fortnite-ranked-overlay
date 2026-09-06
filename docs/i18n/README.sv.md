# Fortnite Ranked Overlay · GalaxyBunny Studio

Ranked-simulatorn är nu en lokal OBS-overlay. Rank, progress och session stannar på din PC.

**Språk:** [Français](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=fr) · [English](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=en) · [Español](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=es) · [Português](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=pt) · [Deutsch](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=de) · [Italiano](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=it) · [日本語](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ja) · [한국어](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ko) · [简体中文](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=zh) · [繁體中文](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=zh-TW) · [العربية](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ar) · [Русский](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ru) · [हिन्दी](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=hi) · [Türkçe](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=tr) · [Polski](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=pl) · [Nederlands](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=nl) · [Bahasa Indonesia](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=id) · [Tiếng Việt](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=vi) · [ไทย](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=th) · [Українська](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=uk) · [Svenska](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=sv) · [Čeština](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=cs) · [Română](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ro) · [Ελληνικά](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=el) · [Magyar](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=hu) · [Suomi](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=fi) · [Dansk](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=da) · [Norsk](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=no) · [עברית](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=he) · [Català](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ca) · [Bahasa Melayu](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ms) · [Filipino](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=tl)

## Från simulator till overlay

Detta repo började som en ranked-poängkalkylator. Nu är det en overlay-studio för streamers. Originalsimulatorn finns kvar här på alla språk.

## En ranked-studio, inte bara en kalkylator

- **Rank och progress** — Från Bronze III till Unreal Legends, Builds eller Zero Build — manuellt eller från en publik profil.
- **OBS-overlay** — Banner, full eller kompakt. Transparent bakgrund, redo som webbläsarkälla.
- **Fortnite Tracker-synk** — Valfri avläsning av publik profil. Utan namn fungerar manuellt läge direkt.
- **7 världar, 6 emblem** — Classic, Galaxy, Neon, Frost, Royal, Minimal, Astral Galaxy. Ranksymbolen ändras inte.
- **Privat by design** — Servern lyssnar bara på 127.0.0.1. Namn och historik ligger i data/, ignoreras av Git.
- **Live-session** — Kills, deaths, streak och rank-up-toasts under streamen.

## Igång på 4 steg

Node.js 18 eller nyare. På Windows räcker LANCER.bat efter installation.

```sh
git clone https://github.com/HanaCherry/fortnite-ranked-overlay.git
cd fortnite-ranked-overlay
npm install
npm start
```

http://127.0.0.1:8767

## OBS / Streamlabs

1. Starta appen och lämna den öppen under streamen.
2. Kopiera overlay-URL:en från OBS-fliken.
3. Lägg till en webbläsarkälla.
4. Klistra in URL:en. Transparent bakgrund som standard.

Föreslagen storlek: 700 × 220 (banner) · 1100 × 220 (full).

## Ranked-simulatorn stannar online

Uppskatta poäng från placering, elimineringar, late game och motståndar-rank. Gratis, ingen installation, på ditt språk.

[Öppna simulatorn](https://hanacherry.github.io/fortnite-ranked-overlay/simulateur.html?lang=sv)

## Lokal data

Medföljande config.json har inget konto. Inställningar i data/config.json, historik i data/state.json. Den mappen publiceras aldrig.

---

Fortnite och rankgrafik tillhör Epic Games och rättighetsinnehavarna. Oberoende, inofficiellt projekt.
