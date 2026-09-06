# Fortnite Ranked Overlay · GalaxyBunny Studio

De ranked-simulator is nu een lokale OBS-overlay. Rank, voortgang en sessie blijven op je pc.

**Taal:** [Français](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=fr) · [English](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=en) · [Español](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=es) · [Português](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=pt) · [Deutsch](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=de) · [Italiano](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=it) · [日本語](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ja) · [한국어](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ko) · [简体中文](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=zh) · [繁體中文](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=zh-TW) · [العربية](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ar) · [Русский](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ru) · [हिन्दी](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=hi) · [Türkçe](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=tr) · [Polski](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=pl) · [Nederlands](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=nl) · [Bahasa Indonesia](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=id) · [Tiếng Việt](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=vi) · [ไทย](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=th) · [Українська](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=uk) · [Svenska](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=sv) · [Čeština](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=cs) · [Română](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ro) · [Ελληνικά](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=el) · [Magyar](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=hu) · [Suomi](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=fi) · [Dansk](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=da) · [Norsk](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=no) · [עברית](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=he) · [Català](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ca) · [Bahasa Melayu](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ms) · [Filipino](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=tl)

## Van simulator naar overlay

Deze repo begon als ranked-puntencalculator. Nu is het een overlay-studio voor streamers. De originele simulator blijft hier, in alle talen.

## Een ranked-studio, geen rekenmachine alleen

- **Rank en voortgang** — Van Bronze III tot Unreal Legends, Builds of Zero Build — handmatig of via een openbaar profiel.
- **OBS-overlay** — Banner, volledig of compact. Transparante achtergrond, klaar als Browserbron.
- **Fortnite Tracker-sync** — Optionele uitlezing van een openbaar profiel. Zonder naam werkt de handmatige modus meteen.
- **7 werelden, 6 badges** — Classic, Galaxy, Neon, Frost, Royal, Minimal, Astral Galaxy. Je rankembleem blijft hetzelfde.
- **Privé by design** — De server luistert alleen op 127.0.0.1. Naam en geschiedenis staan in data/, Git negeert ze.
- **Live sessie** — Kills, deaths, streak en rank-up-toasts tijdens de stream.

## Klaar in 4 stappen

Node.js 18 of nieuwer. Op Windows volstaat LANCER.bat na installatie.

```sh
git clone https://github.com/HanaCherry/fortnite-ranked-overlay.git
cd fortnite-ranked-overlay
npm install
npm start
```

http://127.0.0.1:8767

## OBS / Streamlabs

1. Start de app en laat hem open tijdens de stream.
2. Kopieer de overlay-URL in het OBS-tabblad.
3. Voeg een Browserbron toe.
4. Plak de URL. Achtergrond standaard transparant.

Aanbevolen formaat: 700 × 220 (banner) · 1100 × 220 (volledig).

## De ranked-simulator blijft online

Schat punten op plaatsing, eliminaties, late game en tegenstanderrank. Gratis, geen installatie, in jouw taal.

[Open de simulator](https://hanacherry.github.io/fortnite-ranked-overlay/simulateur.html?lang=nl)

## Lokale gegevens

De meegeleverde config.json bevat geen account. Instellingen in data/config.json, geschiedenis in data/state.json. Die map wordt nooit gepubliceerd.

---

Fortnite en rankartwork zijn van Epic Games en de rechthebbenden. Onafhankelijk, onofficieel project.
