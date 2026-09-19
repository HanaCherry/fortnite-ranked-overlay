# Overlay Ranked de Fortnite · GalaxyBunny Studio

El simulador ranked es ahora un overlay local para OBS. Rango, progreso y sesión en vivo se quedan en tu PC.

**Idioma:** [Français](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=fr) · [English](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=en) · [Español](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=es) · [Português](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=pt) · [Deutsch](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=de) · [Italiano](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=it) · [日本語](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ja) · [한국어](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ko) · [简体中文](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=zh) · [繁體中文](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=zh-TW) · [العربية](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ar) · [Русский](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ru) · [हिन्दी](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=hi) · [Türkçe](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=tr) · [Polski](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=pl) · [Nederlands](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=nl) · [Bahasa Indonesia](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=id) · [Tiếng Việt](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=vi) · [ไทย](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=th) · [Українська](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=uk) · [Svenska](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=sv) · [Čeština](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=cs) · [Română](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ro) · [Ελληνικά](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=el) · [Magyar](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=hu) · [Suomi](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=fi) · [Dansk](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=da) · [Norsk](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=no) · [עברית](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=he) · [Català](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ca) · [Bahasa Melayu](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ms) · [Filipino](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=tl)

## Del simulador al overlay

Este repositorio nació como calculadora de puntos ranked. Ahora es un estudio de overlay para streamers. El simulador original sigue aquí, en todos los idiomas.

## Un estudio ranked, no solo una calculadora

- **Rango y progreso** — De Bronce III a Unreal Legends, Builds o Zero Build — manual o desde un perfil público.
- **Overlay OBS** — Banner, completo o compacto. Fondo transparente, listo como fuente de navegador.
- **Sincronización Fortnite Tracker** — Lectura opcional de un perfil público. Sin usuario, el modo manual funciona al instante.
- **7 mundos, 6 insignias** — Clásico, Galaxy, Neón, Escarcha, Royal, Minimal, Galaxia astral. El emblema de tu rango no cambia.
- **Privado por diseño** — El servidor escucha solo en 127.0.0.1. Usuario e historial viven en data/, ignorado por Git.
- **Sesión en vivo** — Kills, deaths, racha y toasts de subida de rango durante el stream.

## Listo en 4 pasos

Node.js 18 o superior. En Windows, LANCER.bat basta después de instalar.

```sh
git clone https://github.com/HanaCherry/fortnite-ranked-overlay.git
cd fortnite-ranked-overlay
npm install
npm start
```

http://127.0.0.1:8767

## OBS / Streamlabs

1. Inicia la app y déjala abierta mientras haces stream.
2. Copia la URL del overlay en la pestaña OBS.
3. Añade una fuente Navegador.
4. Pega la URL. Fondo transparente por defecto.

Tamaño sugerido: 700 × 220 (banner) · 1100 × 220 (completo).

## El simulador ranked sigue en línea

Estima puntos según colocación, eliminaciones, late game y rango rival. Gratis, sin instalar, en tu idioma.

[Abrir el simulador](https://hanacherry.github.io/fortnite-ranked-overlay/simulateur.html?lang=es)

## Datos locales

El config.json del proyecto no incluye ninguna cuenta. Ajustes en data/config.json, historial en data/state.json. Esa carpeta nunca se publica.

---

Fortnite y el arte de rangos pertenecen a Epic Games y a sus titulares. Proyecto independiente no oficial.

## Usage terms

The application remains free to use, including in monetized streams and videos. Installation, local builds, backups and configuration needed for that use are permitted. Reusing newly covered code in another project, modifying it, redistributing the application or selling copies requires HanaCherry's prior written permission through this repository's issues.

Previously granted rights are preserved: code already published under MIT remains under MIT, and third-party components keep their licenses. New covered original contributions follow the [free application use license](../../LICENSE). GitHub's viewing and forking rights are preserved.
