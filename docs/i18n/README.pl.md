# Overlay Fortnite Ranked · GalaxyBunny Studio

Symulator ranked stał się lokalnym overlayem OBS. Rang, postęp i sesja zostają na Twoim PC.

**Język:** [Français](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=fr) · [English](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=en) · [Español](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=es) · [Português](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=pt) · [Deutsch](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=de) · [Italiano](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=it) · [日本語](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ja) · [한국어](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ko) · [简体中文](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=zh) · [繁體中文](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=zh-TW) · [العربية](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ar) · [Русский](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ru) · [हिन्दी](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=hi) · [Türkçe](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=tr) · [Polski](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=pl) · [Nederlands](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=nl) · [Bahasa Indonesia](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=id) · [Tiếng Việt](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=vi) · [ไทย](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=th) · [Українська](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=uk) · [Svenska](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=sv) · [Čeština](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=cs) · [Română](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ro) · [Ελληνικά](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=el) · [Magyar](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=hu) · [Suomi](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=fi) · [Dansk](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=da) · [Norsk](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=no) · [עברית](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=he) · [Català](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ca) · [Bahasa Melayu](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ms) · [Filipino](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=tl)

## Od symulatora do overlayu

To repozytorium zaczynało jako kalkulator punktów ranked. Teraz to studio overlayu dla streamerów. Oryginalny symulator zostaje tutaj, we wszystkich językach.

## Studio ranked, nie tylko kalkulator

- **Rang i postęp** — Od Bronze III do Unreal Legends, Builds lub Zero Build — ręcznie albo z profilu publicznego.
- **Overlay OBS** — Baner, pełny lub kompaktowy. Przezroczyste tło, gotowe jako źródło Przeglądarka.
- **Synchronizacja Fortnite Tracker** — Opcjonalny odczyt profilu publicznego. Bez nicku tryb ręczny działa od razu.
- **7 światów, 6 odznak** — Classic, Galaxy, Neon, Mróz, Royal, Minimal, Astral Galaxy. Symbol rangi się nie zmienia.
- **Prywatne z założenia** — Serwer nasłuchuje tylko 127.0.0.1. Nick i historia są w data/, Git je pomija.
- **Sesja na żywo** — Kille, deathy, passa i toasty awansu podczas streamu.

## Gotowe w 4 krokach

Node.js 18 lub nowszy. W Windows po instalacji wystarczy LANCER.bat.

```sh
git clone https://github.com/HanaCherry/fortnite-ranked-overlay.git
cd fortnite-ranked-overlay
npm install
npm start
```

http://127.0.0.1:8767

## OBS / Streamlabs

1. Uruchom aplikację i zostaw włączoną podczas streamu.
2. Skopiuj URL overlayu z karty OBS.
3. Dodaj źródło Przeglądarka.
4. Wklej URL. Tło domyślnie przezroczyste.

Sugerowany rozmiar: 700 × 220 (baner) · 1100 × 220 (pełny).

## Symulator ranked zostaje online

Oszacuj punkty z miejsca, eliminacji, late game i rangi przeciwników. Za darmo, bez instalacji, w Twoim języku.

[Otwórz symulator](https://hanacherry.github.io/fortnite-ranked-overlay/simulateur.html?lang=pl)

## Dane lokalne

Dostarczany config.json nie zawiera konta. Ustawienia w data/config.json, historia w data/state.json. Ten folder nigdy nie jest publikowany.

---

Fortnite i grafiki rang należą do Epic Games i właścicieli praw. Niezależny, nieoficjalny projekt.

## Usage terms

The application remains free to use, including in monetized streams and videos. Installation, local builds, backups and configuration needed for that use are permitted. Reusing newly covered code in another project, modifying it, redistributing the application or selling copies requires HanaCherry's prior written permission through this repository's issues.

Previously granted rights are preserved: code already published under MIT remains under MIT, and third-party components keep their licenses. New covered original contributions follow the [free application use license](../../LICENSE). GitHub's viewing and forking rights are preserved.
