# Overlay Fortnite Ranked · GalaxyBunny Studio

Simulatorul ranked este acum un overlay OBS local. Rangul, progresul și sesiunea rămân pe PC-ul tău.

**Limbă:** [Français](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=fr) · [English](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=en) · [Español](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=es) · [Português](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=pt) · [Deutsch](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=de) · [Italiano](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=it) · [日本語](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ja) · [한국어](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ko) · [简体中文](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=zh) · [繁體中文](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=zh-TW) · [العربية](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ar) · [Русский](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ru) · [हिन्दी](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=hi) · [Türkçe](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=tr) · [Polski](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=pl) · [Nederlands](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=nl) · [Bahasa Indonesia](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=id) · [Tiếng Việt](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=vi) · [ไทย](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=th) · [Українська](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=uk) · [Svenska](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=sv) · [Čeština](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=cs) · [Română](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ro) · [Ελληνικά](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=el) · [Magyar](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=hu) · [Suomi](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=fi) · [Dansk](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=da) · [Norsk](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=no) · [עברית](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=he) · [Català](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ca) · [Bahasa Melayu](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ms) · [Filipino](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=tl)

## De la simulator la overlay

Acest depozit a început ca un calculator de puncte ranked. Acum e un studio de overlay pentru streameri. Simulatorul original rămâne aici, în toate limbile.

## Un studio ranked, nu doar un calculator

- **Rang și progres** — De la Bronze III la Unreal Legends, Builds sau Zero Build — manual sau dintr-un profil public.
- **Overlay OBS** — Banner, complet sau compact. Fundal transparent, gata ca sursă Browser.
- **Sincronizare Fortnite Tracker** — Citire opțională a unui profil public. Fără nume, modul manual funcționează imediat.
- **7 lumi, 6 insigne** — Classic, Galaxy, Neon, Îngheț, Royal, Minimal, Astral Galaxy. Emblema rangului nu se schimbă.
- **Privat prin design** — Serverul ascultă doar pe 127.0.0.1. Numele și istoricul sunt în data/, ignorate de Git.
- **Sesiune live** — Kill-uri, death-uri, serie și toast-uri de rank up în timpul streamului.

## Pornire în 4 pași

Node.js 18 sau mai nou. Pe Windows, LANCER.bat e suficient după instalare.

```sh
git clone https://github.com/HanaCherry/fortnite-ranked-overlay.git
cd fortnite-ranked-overlay
npm install
npm start
```

http://127.0.0.1:8767

## OBS / Streamlabs

1. Pornește aplicația și las-o deschisă în timpul streamului.
2. Copiază URL-ul overlay-ului din fila OBS.
3. Adaugă o sursă Browser.
4. Lipește URL-ul. Fundal transparent implicit.

Dimensiune sugerată: 700 × 220 (banner) · 1100 × 220 (complet).

## Simulatorul ranked rămâne online

Estimează punctele din plasare, eliminări, late game și rangul adversarilor. Gratuit, fără instalare, în limba ta.

[Deschide simulatorul](https://hanacherry.github.io/fortnite-ranked-overlay/simulateur.html?lang=ro)

## Date locale

config.json livrat nu conține cont. Setări în data/config.json, istoric în data/state.json. Folderul nu este publicat niciodată.

---

Fortnite și grafica rangurilor aparțin Epic Games și titularilor de drepturi. Proiect independent, neoficial.
