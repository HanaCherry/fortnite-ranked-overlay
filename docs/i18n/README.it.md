# Overlay Ranked Fortnite · GalaxyBunny Studio

Il simulatore ranked diventa un overlay OBS locale. Rank, progresso e sessione restano sul tuo PC.

**Lingua:** [Français](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=fr) · [English](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=en) · [Español](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=es) · [Português](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=pt) · [Deutsch](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=de) · [Italiano](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=it) · [日本語](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ja) · [한국어](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ko) · [简体中文](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=zh) · [繁體中文](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=zh-TW) · [العربية](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ar) · [Русский](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ru) · [हिन्दी](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=hi) · [Türkçe](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=tr) · [Polski](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=pl) · [Nederlands](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=nl) · [Bahasa Indonesia](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=id) · [Tiếng Việt](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=vi) · [ไทย](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=th) · [Українська](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=uk) · [Svenska](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=sv) · [Čeština](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=cs) · [Română](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ro) · [Ελληνικά](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=el) · [Magyar](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=hu) · [Suomi](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=fi) · [Dansk](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=da) · [Norsk](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=no) · [עברית](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=he) · [Català](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ca) · [Bahasa Melayu](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ms) · [Filipino](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=tl)

## Dal simulatore all’overlay

Questo repository è nato come calcolatore di punti ranked. Ora è uno studio overlay per streamer. Il simulatore originale resta qui, in tutte le lingue.

## Uno studio ranked, non solo un calcolatore

- **Rank e progresso** — Da Bronzo III a Unreal Legends, Builds o Zero Build — manuale o da profilo pubblico.
- **Overlay OBS** — Banner, completo o compatto. Sfondo trasparente, pronto come sorgente Browser.
- **Sync Fortnite Tracker** — Lettura opzionale di un profilo pubblico. Senza nickname, la modalità manuale funziona subito.
- **7 mondi, 6 badge** — Classico, Galaxy, Neon, Gelo, Royal, Minimal, Galassia astrale. Il simbolo del rank non cambia.
- **Privato per progettazione** — Il server ascolta solo 127.0.0.1. Nickname e cronologia stanno in data/, ignorati da Git.
- **Sessione live** — Kill, death, streak e toast di rank up durante lo stream.

## Pronto in 4 passi

Node.js 18 o superiore. Su Windows basta LANCER.bat dopo l’installazione.

```sh
git clone https://github.com/HanaCherry/fortnite-ranked-overlay.git
cd fortnite-ranked-overlay
npm install
npm start
```

http://127.0.0.1:8767

## OBS / Streamlabs

1. Avvia l’app e lasciala aperta durante lo stream.
2. Copia l’URL dell’overlay dalla scheda OBS.
3. Aggiungi una sorgente Browser.
4. Incolla l’URL. Sfondo trasparente di default.

Dimensione consigliata: 700 × 220 (banner) · 1100 × 220 (completo).

## Il simulatore ranked resta online

Stima i punti da piazzamento, eliminazioni, late game e rank avversario. Gratis, senza installazione, nella tua lingua.

[Apri il simulatore](https://hanacherry.github.io/fortnite-ranked-overlay/simulateur.html?lang=it)

## Dati locali

Il config.json distribuito non contiene account. Impostazioni in data/config.json, cronologia in data/state.json. Quella cartella non viene mai pubblicata.

---

Fortnite e le grafiche dei rank appartengono a Epic Games e ai rispettivi titolari. Progetto indipendente non ufficiale.
