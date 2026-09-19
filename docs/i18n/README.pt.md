# Overlay Ranked do Fortnite · GalaxyBunny Studio

O simulador ranked vira um overlay local para OBS. Rank, progresso e sessão ficam no seu PC.

**Idioma:** [Français](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=fr) · [English](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=en) · [Español](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=es) · [Português](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=pt) · [Deutsch](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=de) · [Italiano](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=it) · [日本語](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ja) · [한국어](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ko) · [简体中文](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=zh) · [繁體中文](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=zh-TW) · [العربية](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ar) · [Русский](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ru) · [हिन्दी](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=hi) · [Türkçe](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=tr) · [Polski](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=pl) · [Nederlands](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=nl) · [Bahasa Indonesia](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=id) · [Tiếng Việt](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=vi) · [ไทย](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=th) · [Українська](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=uk) · [Svenska](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=sv) · [Čeština](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=cs) · [Română](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ro) · [Ελληνικά](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=el) · [Magyar](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=hu) · [Suomi](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=fi) · [Dansk](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=da) · [Norsk](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=no) · [עברית](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=he) · [Català](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ca) · [Bahasa Melayu](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ms) · [Filipino](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=tl)

## Do simulador ao overlay

Este repositório começou como calculadora de pontos ranked. Agora é um estúdio de overlay para streamers. O simulador original continua aqui, em todos os idiomas.

## Um estúdio ranked, não só uma calculadora

- **Rank e progresso** — De Bronze III a Unreal Legends, Builds ou Zero Build — manual ou por perfil público.
- **Overlay OBS** — Banner, completo ou compacto. Fundo transparente, pronto como fonte de Navegador.
- **Sync Fortnite Tracker** — Leitura opcional de perfil público. Sem nick, o modo manual já funciona.
- **7 mundos, 6 distintivos** — Clássico, Galaxy, Neon, Gelo, Royal, Minimal, Galáxia astral. O símbolo do rank não muda.
- **Privado por design** — O servidor escuta só em 127.0.0.1. Nick e histórico ficam em data/, ignorado pelo Git.
- **Sessão ao vivo** — Kills, deaths, streak e toasts de rank up durante a live.

## Pronto em 4 passos

Node.js 18 ou mais. No Windows, LANCER.bat basta após instalar.

```sh
git clone https://github.com/HanaCherry/fortnite-ranked-overlay.git
cd fortnite-ranked-overlay
npm install
npm start
```

http://127.0.0.1:8767

## OBS / Streamlabs

1. Inicie o app e deixe aberto durante a live.
2. Copie a URL do overlay na aba OBS.
3. Adicione uma fonte Navegador.
4. Cole a URL. Fundo transparente por padrão.

Tamanho sugerido: 700 × 220 (banner) · 1100 × 220 (completo).

## O simulador ranked continua online

Estime pontos por colocação, eliminações, late game e rank dos oponentes. Grátis, sem instalar, no seu idioma.

[Abrir o simulador](https://hanacherry.github.io/fortnite-ranked-overlay/simulateur.html?lang=pt)

## Dados locais

O config.json distribuído não tem conta. Ajustes em data/config.json, histórico em data/state.json. Essa pasta nunca é publicada.

---

Fortnite e as artes de rank pertencem à Epic Games e aos respectivos donos. Projeto independente, não oficial.

## Usage terms

The application remains free to use, including in monetized streams and videos. Installation, local builds, backups and configuration needed for that use are permitted. Reusing newly covered code in another project, modifying it, redistributing the application or selling copies requires HanaCherry's prior written permission through this repository's issues.

Previously granted rights are preserved: code already published under MIT remains under MIT, and third-party components keep their licenses. New covered original contributions follow the [free application use license](../../LICENSE). GitHub's viewing and forking rights are preserved.
