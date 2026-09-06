# Оверлей Fortnite Ranked · GalaxyBunny Studio

Симулятор ранкеду став локальним оверлеєм OBS. Ранг, прогрес і сесія лишаються на вашому ПК.

**Мова:** [Français](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=fr) · [English](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=en) · [Español](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=es) · [Português](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=pt) · [Deutsch](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=de) · [Italiano](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=it) · [日本語](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ja) · [한국어](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ko) · [简体中文](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=zh) · [繁體中文](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=zh-TW) · [العربية](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ar) · [Русский](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ru) · [हिन्दी](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=hi) · [Türkçe](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=tr) · [Polski](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=pl) · [Nederlands](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=nl) · [Bahasa Indonesia](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=id) · [Tiếng Việt](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=vi) · [ไทย](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=th) · [Українська](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=uk) · [Svenska](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=sv) · [Čeština](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=cs) · [Română](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ro) · [Ελληνικά](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=el) · [Magyar](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=hu) · [Suomi](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=fi) · [Dansk](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=da) · [Norsk](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=no) · [עברית](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=he) · [Català](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ca) · [Bahasa Melayu](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ms) · [Filipino](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=tl)

## Від симулятора до оверлея

Репозиторій починався як калькулятор очок ранкеду. Тепер це студія оверлея для стрімерів. Оригінальний симулятор лишається тут усіма мовами.

## Студія ранкеду, а не лише калькулятор

- **Ранг і прогрес** — Від Bronze III до Unreal Legends, Builds або Zero Build — вручну чи з публічного профілю.
- **Оверлей OBS** — Банер, повний або компактний. Прозорий фон, готовий як джерело Браузер.
- **Синхронізація Fortnite Tracker** — Необов’язкове читання публічного профілю. Без ніка ручний режим працює одразу.
- **7 світів, 6 значків** — Classic, Galaxy, Neon, Frost, Royal, Minimal, Astral Galaxy. Емблема рангу не змінюється.
- **Приватно за задумом** — Сервер слухає лише 127.0.0.1. Нік і історія в data/, Git їх ігнорує.
- **Жива сесія** — Вбивства, смерті, серія й тости підвищення рангу під час стріму.

## Запуск за 4 кроки

Node.js 18 або новіший. У Windows після встановлення достатньо LANCER.bat.

```sh
git clone https://github.com/HanaCherry/fortnite-ranked-overlay.git
cd fortnite-ranked-overlay
npm install
npm start
```

http://127.0.0.1:8767

## OBS / Streamlabs

1. Запустіть програму й не закривайте її під час стріму.
2. Скопіюйте URL оверлея у вкладці OBS.
3. Додайте джерело Браузер.
4. Вставте URL. Фон за замовчуванням прозорий.

Рекомендований розмір: 700 × 220 (банер) · 1100 × 220 (повний).

## Симулятор ранкеду лишається онлайн

Оцініть очки за місцем, елімінаціями, пізньою грою й рангом суперників. Безкоштовно, без встановлення, вашою мовою.

[Відкрити симулятор](https://hanacherry.github.io/fortnite-ranked-overlay/simulateur.html?lang=uk)

## Локальні дані

Постачаний config.json без облікового запису. Налаштування в data/config.json, історія в data/state.json. Цю теку ніколи не публікують.

---

Fortnite і графіка рангів належать Epic Games та правовласникам. Незалежний неофіційний проєкт.
