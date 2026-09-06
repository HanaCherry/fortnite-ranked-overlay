# Fortnite Ranked Overlay · GalaxyBunny Studio

A ranked szimulátor most helyi OBS overlay. Rang, haladás és munkamenet a gépeden marad.

**Nyelv:** [Français](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=fr) · [English](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=en) · [Español](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=es) · [Português](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=pt) · [Deutsch](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=de) · [Italiano](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=it) · [日本語](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ja) · [한국어](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ko) · [简体中文](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=zh) · [繁體中文](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=zh-TW) · [العربية](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ar) · [Русский](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ru) · [हिन्दी](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=hi) · [Türkçe](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=tr) · [Polski](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=pl) · [Nederlands](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=nl) · [Bahasa Indonesia](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=id) · [Tiếng Việt](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=vi) · [ไทย](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=th) · [Українська](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=uk) · [Svenska](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=sv) · [Čeština](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=cs) · [Română](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ro) · [Ελληνικά](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=el) · [Magyar](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=hu) · [Suomi](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=fi) · [Dansk](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=da) · [Norsk](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=no) · [עברית](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=he) · [Català](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ca) · [Bahasa Melayu](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ms) · [Filipino](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=tl)

## Szimulátorból overlay

Ez a repo ranked pontkalkulátorként indult. Most streamerek overlay stúdiója. Az eredeti szimulátor itt marad, minden nyelven.

## Ranked stúdió, nem csak számológép

- **Rang és haladás** — Bronze III-tól Unreal Legendsig, Builds vagy Zero Build — kézzel vagy nyilvános profilból.
- **OBS overlay** — Banner, teljes vagy kompakt. Átlátszó háttér, böngészőforrásként kész.
- **Fortnite Tracker szinkron** — Opcionális nyilvános profilolvasás. Név nélkül a kézi mód azonnal működik.
- **7 világ, 6 jelvény** — Classic, Galaxy, Neon, Fagy, Royal, Minimal, Astral Galaxy. A rang jelképe nem változik.
- **Alapból privát** — A szerver csak a 127.0.0.1-et hallgatja. Név és előzmény a data/ mappában, a Git kihagyja.
- **Élő munkamenet** — Killek, deathek, széria és rangemelés-toasztok stream közben.

## 4 lépésben indul

Node.js 18 vagy újabb. Windowson telepítés után elég a LANCER.bat.

```sh
git clone https://github.com/HanaCherry/fortnite-ranked-overlay.git
cd fortnite-ranked-overlay
npm install
npm start
```

http://127.0.0.1:8767

## OBS / Streamlabs

1. Indítsd az appot, és hagyd nyitva stream közben.
2. Másold ki az overlay URL-t az OBS lapról.
3. Adj hozzá Böngésző forrást.
4. Illeszd be az URL-t. Az alapértelmezett háttér átlátszó.

Javasolt méret: 700 × 220 (banner) · 1100 × 220 (teljes).

## A ranked szimulátor online marad

Becüld a pontokat helyezés, elimináció, late game és ellenfélrang alapján. Ingyenes, telepítés nélkül, a nyelveden.

[Szimulátor megnyitása](https://hanacherry.github.io/fortnite-ranked-overlay/simulateur.html?lang=hu)

## Helyi adatok

A szállított config.json nem tartalmaz fiókot. Beállítások: data/config.json, előzmény: data/state.json. Ez a mappa sosem kerül közzétételre.

---

A Fortnite és a ranggrafika az Epic Games és a jogtulajdonosoké. Független, nem hivatalos projekt.
