# Overlay Fortnite Ranked · GalaxyBunny Studio

Ο προσομοιωτής ranked έγινε τοπικό overlay OBS. Rank, πρόοδος και συνεδρία μένουν στον υπολογιστή σου.

**Γλώσσα:** [Français](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=fr) · [English](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=en) · [Español](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=es) · [Português](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=pt) · [Deutsch](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=de) · [Italiano](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=it) · [日本語](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ja) · [한국어](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ko) · [简体中文](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=zh) · [繁體中文](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=zh-TW) · [العربية](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ar) · [Русский](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ru) · [हिन्दी](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=hi) · [Türkçe](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=tr) · [Polski](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=pl) · [Nederlands](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=nl) · [Bahasa Indonesia](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=id) · [Tiếng Việt](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=vi) · [ไทย](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=th) · [Українська](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=uk) · [Svenska](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=sv) · [Čeština](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=cs) · [Română](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ro) · [Ελληνικά](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=el) · [Magyar](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=hu) · [Suomi](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=fi) · [Dansk](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=da) · [Norsk](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=no) · [עברית](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=he) · [Català](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ca) · [Bahasa Melayu](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ms) · [Filipino](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=tl)

## Από προσομοιωτή σε overlay

Το αποθετήριο ξεκίνησε ως υπολογιστής πόντων ranked. Τώρα είναι στούντιο overlay για streamers. Ο αρχικός προσομοιωτής μένει εδώ, σε όλες τις γλώσσες.

## Στούντιο ranked, όχι απλώς υπολογιστής

- **Rank και πρόοδος** — Από Bronze III έως Unreal Legends, Builds ή Zero Build — χειροκίνητα ή από δημόσιο προφίλ.
- **Overlay OBS** — Banner, πλήρες ή συμπαγές. Διαφανές φόντο, έτοιμο ως πηγή Browser.
- **Συγχρονισμός Fortnite Tracker** — Προαιρετική ανάγνωση δημόσιου προφίλ. Χωρίς όνομα, η χειροκίνητη λειτουργία δουλεύει αμέσως.
- **7 κόσμοι, 6 σήματα** — Classic, Galaxy, Neon, Frost, Royal, Minimal, Astral Galaxy. Το έμβλημα rank δεν αλλάζει.
- **Ιδιωτικό by design** — Ο διακομιστής ακούει μόνο στο 127.0.0.1. Όνομα και ιστορικό στο data/, τα αγνοεί το Git.
- **Ζωντανή συνεδρία** — Kills, deaths, streak και toast ανόδου rank κατά το stream.

## Έτοιμο σε 4 βήματα

Node.js 18 ή νεότερο. Στα Windows αρκεί το LANCER.bat μετά την εγκατάσταση.

```sh
git clone https://github.com/HanaCherry/fortnite-ranked-overlay.git
cd fortnite-ranked-overlay
npm install
npm start
```

http://127.0.0.1:8767

## OBS / Streamlabs

1. Ξεκίνα την εφαρμογή και άφησέ την ανοιχτή στο stream.
2. Αντίγραψε το URL overlay από την καρτέλα OBS.
3. Πρόσθεσε πηγή Browser.
4. Επικόλλησε το URL. Διαφανές φόντο από προεπιλογή.

Προτεινόμενο μέγεθος: 700 × 220 (banner) · 1100 × 220 (πλήρες).

## Ο προσομοιωτής ranked μένει online

Υπολόγισε πόντους από θέση, αποκλεισμούς, late game και rank αντιπάλων. Δωρεάν, χωρίς εγκατάσταση, στη γλώσσα σου.

[Άνοιγμα προσομοιωτή](https://hanacherry.github.io/fortnite-ranked-overlay/simulateur.html?lang=el)

## Τοπικά δεδομένα

Το διανεμόμενο config.json δεν έχει λογαριασμό. Ρυθμίσεις στο data/config.json, ιστορικό στο data/state.json. Ο φάκελος δεν δημοσιεύεται ποτέ.

---

Το Fortnite και τα γραφικά rank ανήκουν στην Epic Games και στους δικαιούχους. Ανεξάρτητο, μη επίσημο έργο.

## Usage terms

The application remains free to use, including in monetized streams and videos. Installation, local builds, backups and configuration needed for that use are permitted. Reusing newly covered code in another project, modifying it, redistributing the application or selling copies requires HanaCherry's prior written permission through this repository's issues.

Previously granted rights are preserved: code already published under MIT remains under MIT, and third-party components keep their licenses. New covered original contributions follow the [free application use license](../../LICENSE). GitHub's viewing and forking rights are preserved.
