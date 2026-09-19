# Overlay Fortnite Ranked · GalaxyBunny Studio

Simulator ranked kini overlay OBS lokal. Rank, progres, dan sesi tetap di PC Anda.

**Bahasa:** [Français](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=fr) · [English](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=en) · [Español](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=es) · [Português](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=pt) · [Deutsch](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=de) · [Italiano](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=it) · [日本語](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ja) · [한국어](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ko) · [简体中文](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=zh) · [繁體中文](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=zh-TW) · [العربية](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ar) · [Русский](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ru) · [हिन्दी](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=hi) · [Türkçe](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=tr) · [Polski](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=pl) · [Nederlands](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=nl) · [Bahasa Indonesia](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=id) · [Tiếng Việt](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=vi) · [ไทย](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=th) · [Українська](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=uk) · [Svenska](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=sv) · [Čeština](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=cs) · [Română](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ro) · [Ελληνικά](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=el) · [Magyar](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=hu) · [Suomi](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=fi) · [Dansk](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=da) · [Norsk](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=no) · [עברית](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=he) · [Català](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ca) · [Bahasa Melayu](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ms) · [Filipino](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=tl)

## Dari simulator ke overlay

Repositori ini dimulai sebagai kalkulator poin ranked. Kini menjadi studio overlay untuk streamer. Simulator asli tetap di sini, dalam semua bahasa.

## Studio ranked, bukan sekadar kalkulator

- **Rank & progres** — Dari Bronze III hingga Unreal Legends, Builds atau Zero Build — manual atau dari profil publik.
- **Overlay OBS** — Banner, penuh, atau ringkas. Latar transparan, siap sebagai sumber Browser.
- **Sinkron Fortnite Tracker** — Pembacaan profil publik opsional. Tanpa nama, mode manual langsung jalan.
- **7 dunia, 6 lencana** — Classic, Galaxy, Neon, Frost, Royal, Minimal, Astral Galaxy. Emblem rank tidak berubah.
- **Privat sejak desain** — Server hanya mendengarkan 127.0.0.1. Nama dan riwayat di data/, diabaikan Git.
- **Sesi langsung** — Kill, death, streak, dan toast naik rank selama stream.

## Siap dalam 4 langkah

Node.js 18 atau lebih baru. Di Windows, LANCER.bat cukup setelah instal.

```sh
git clone https://github.com/HanaCherry/fortnite-ranked-overlay.git
cd fortnite-ranked-overlay
npm install
npm start
```

http://127.0.0.1:8767

## OBS / Streamlabs

1. Jalankan aplikasi dan biarkan terbuka selama stream.
2. Salin URL overlay dari tab OBS.
3. Tambah sumber Browser.
4. Tempel URL. Latar default transparan.

Ukuran saran: 700 × 220 (banner) · 1100 × 220 (penuh).

## Simulator ranked tetap daring

Perkirakan poin dari penempatan, eliminasi, late game, dan rank lawan. Gratis, tanpa pasang, dalam bahasa Anda.

[Buka simulator](https://hanacherry.github.io/fortnite-ranked-overlay/simulateur.html?lang=id)

## Data lokal

config.json yang dikirim tanpa akun. Pengaturan di data/config.json, riwayat di data/state.json. Folder itu tidak pernah dipublikasikan.

---

Fortnite dan artwork rank milik Epic Games dan pemegang hak. Proyek independen tidak resmi.

## Usage terms

The application remains free to use, including in monetized streams and videos. Installation, local builds, backups and configuration needed for that use are permitted. Reusing newly covered code in another project, modifying it, redistributing the application or selling copies requires HanaCherry's prior written permission through this repository's issues.

Previously granted rights are preserved: code already published under MIT remains under MIT, and third-party components keep their licenses. New covered original contributions follow the [free application use license](../../LICENSE). GitHub's viewing and forking rights are preserved.
