# Fortnite Ranked Overlay · GalaxyBunny Studio

Ranked simülatörü artık yerel bir OBS overlay. Rütbe, ilerleme ve oturum bilgisayarında kalır.

**Dil:** [Français](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=fr) · [English](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=en) · [Español](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=es) · [Português](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=pt) · [Deutsch](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=de) · [Italiano](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=it) · [日本語](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ja) · [한국어](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ko) · [简体中文](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=zh) · [繁體中文](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=zh-TW) · [العربية](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ar) · [Русский](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ru) · [हिन्दी](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=hi) · [Türkçe](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=tr) · [Polski](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=pl) · [Nederlands](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=nl) · [Bahasa Indonesia](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=id) · [Tiếng Việt](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=vi) · [ไทย](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=th) · [Українська](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=uk) · [Svenska](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=sv) · [Čeština](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=cs) · [Română](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ro) · [Ελληνικά](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=el) · [Magyar](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=hu) · [Suomi](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=fi) · [Dansk](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=da) · [Norsk](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=no) · [עברית](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=he) · [Català](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ca) · [Bahasa Melayu](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ms) · [Filipino](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=tl)

## Simülatörden overlay’e

Bu depo ranked puan hesaplayıcı olarak başladı. Artık yayıncılar için overlay stüdyosu. Orijinal simülatör her dilde burada.

## Sadece hesap makinesi değil, ranked stüdyosu

- **Rütbe ve ilerleme** — Bronze III’ten Unreal Legends’e, Builds veya Zero Build — elle veya herkese açık profilden.
- **OBS overlay** — Banner, tam veya kompakt. Şeffaf arka plan, Tarayıcı kaynağı olarak hazır.
- **Fortnite Tracker senkronu** — İsteğe bağlı herkese açık profil okuma. Kullanıcı adı olmadan manuel mod hemen çalışır.
- **7 evren, 6 rozet** — Klasik, Galaxy, Neon, Buz, Royal, Minimal, Astral Galaxy. Rütbe simgen değişmez.
- **Tasarım gereği özel** — Sunucu yalnızca 127.0.0.1 dinler. Kullanıcı adı ve geçmiş data/ içinde, Git yok sayar.
- **Canlı oturum** — Yayın sırasında kill, death, seri ve rütbe atlama bildirimleri.

## 4 adımda çalışır

Node.js 18 veya üzeri. Windows’ta kurulumdan sonra LANCER.bat yeter.

```sh
git clone https://github.com/HanaCherry/fortnite-ranked-overlay.git
cd fortnite-ranked-overlay
npm install
npm start
```

http://127.0.0.1:8767

## OBS / Streamlabs

1. Uygulamayı başlat ve yayın boyunca açık tut.
2. OBS sekmesinden overlay URL’sini kopyala.
3. Tarayıcı kaynağı ekle.
4. URL’yi yapıştır. Varsayılan arka plan şeffaf.

Önerilen boyut: 700 × 220 (banner) · 1100 × 220 (tam).

## Ranked simülatörü çevrimiçi kalır

Sıralama, eleme, geç oyun ve rakip rütbesinden puan tahmini. Ücretsiz, kurulum yok, dilinde.

[Simülatörü aç](https://hanacherry.github.io/fortnite-ranked-overlay/simulateur.html?lang=tr)

## Yerel veriler

Dağıtılan config.json hesap içermez. Ayarlar data/config.json, geçmiş data/state.json. Bu klasör asla yayınlanmaz.

---

Fortnite ve rütbe görselleri Epic Games ve hak sahiplerine aittir. Bağımsız, resmi olmayan proje.

## Usage terms

The application remains free to use, including in monetized streams and videos. Installation, local builds, backups and configuration needed for that use are permitted. Reusing newly covered code in another project, modifying it, redistributing the application or selling copies requires HanaCherry's prior written permission through this repository's issues.

Previously granted rights are preserved: code already published under MIT remains under MIT, and third-party components keep their licenses. New covered original contributions follow the [free application use license](../../LICENSE). GitHub's viewing and forking rights are preserved.
