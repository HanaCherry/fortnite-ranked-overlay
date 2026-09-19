# Overlay Ranked de Fortnite · GalaxyBunny Studio

El simulador ranked ara és un overlay OBS local. Rang, progrés i sessió es queden al teu PC.

**Llengua:** [Français](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=fr) · [English](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=en) · [Español](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=es) · [Português](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=pt) · [Deutsch](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=de) · [Italiano](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=it) · [日本語](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ja) · [한국어](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ko) · [简体中文](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=zh) · [繁體中文](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=zh-TW) · [العربية](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ar) · [Русский](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ru) · [हिन्दी](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=hi) · [Türkçe](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=tr) · [Polski](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=pl) · [Nederlands](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=nl) · [Bahasa Indonesia](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=id) · [Tiếng Việt](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=vi) · [ไทย](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=th) · [Українська](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=uk) · [Svenska](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=sv) · [Čeština](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=cs) · [Română](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ro) · [Ελληνικά](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=el) · [Magyar](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=hu) · [Suomi](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=fi) · [Dansk](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=da) · [Norsk](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=no) · [עברית](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=he) · [Català](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ca) · [Bahasa Melayu](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ms) · [Filipino](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=tl)

## Del simulador a l’overlay

Aquest repositori va començar com a calculadora de punts ranked. Ara és un estudi d’overlay per a streamers. El simulador original es queda aquí, en totes les llengües.

## Un estudi ranked, no només una calculadora

- **Rang i progrés** — De Bronze III a Unreal Legends, Builds o Zero Build — manual o des d’un perfil públic.
- **Overlay OBS** — Bàner, complet o compacte. Fons transparent, llest com a font Navegador.
- **Sincronització Fortnite Tracker** — Lectura opcional d’un perfil públic. Sense nom, el mode manual funciona de seguida.
- **7 mons, 6 insígnies** — Clàssic, Galaxy, Neó, Gel, Royal, Minimal, Galàxia astral. L’emblema del rang no canvia.
- **Privat per disseny** — El servidor només escolta a 127.0.0.1. Nom i historial a data/, ignorats per Git.
- **Sessió en directe** — Kills, deaths, ratxa i toasts de pujada de rang durant l’stream.

## A punt en 4 passos

Node.js 18 o superior. A Windows, LANCER.bat n’hi ha prou després d’instal·lar.

```sh
git clone https://github.com/HanaCherry/fortnite-ranked-overlay.git
cd fortnite-ranked-overlay
npm install
npm start
```

http://127.0.0.1:8767

## OBS / Streamlabs

1. Engega l’app i deixa-la oberta durant l’stream.
2. Copia l’URL de l’overlay a la pestanya OBS.
3. Afegeix una font Navegador.
4. Enganxa l’URL. Fons transparent per defecte.

Mida suggerida: 700 × 220 (bàner) · 1100 × 220 (complet).

## El simulador ranked es queda en línia

Estima punts per col·locació, eliminacions, late game i rang rival. Gratis, sense instal·lar, en la teva llengua.

[Obrir el simulador](https://hanacherry.github.io/fortnite-ranked-overlay/simulateur.html?lang=ca)

## Dades locals

El config.json distribuït no té cap compte. Ajustos a data/config.json, historial a data/state.json. Aquesta carpeta no es publica mai.

---

Fortnite i l’art dels rangs pertanyen a Epic Games i als titulars. Projecte independent no oficial.

## Usage terms

The application remains free to use, including in monetized streams and videos. Installation, local builds, backups and configuration needed for that use are permitted. Reusing newly covered code in another project, modifying it, redistributing the application or selling copies requires HanaCherry's prior written permission through this repository's issues.

Previously granted rights are preserved: code already published under MIT remains under MIT, and third-party components keep their licenses. New covered original contributions follow the [free application use license](../../LICENSE). GitHub's viewing and forking rights are preserved.
