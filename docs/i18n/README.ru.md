# Оверлей Fortnite Ranked · GalaxyBunny Studio

Симулятор ранкеда стал локальным оверлеем OBS. Ранг, прогресс и сессия остаются на вашем ПК.

**Язык:** [Français](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=fr) · [English](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=en) · [Español](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=es) · [Português](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=pt) · [Deutsch](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=de) · [Italiano](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=it) · [日本語](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ja) · [한국어](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ko) · [简体中文](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=zh) · [繁體中文](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=zh-TW) · [العربية](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ar) · [Русский](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ru) · [हिन्दी](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=hi) · [Türkçe](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=tr) · [Polski](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=pl) · [Nederlands](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=nl) · [Bahasa Indonesia](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=id) · [Tiếng Việt](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=vi) · [ไทย](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=th) · [Українська](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=uk) · [Svenska](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=sv) · [Čeština](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=cs) · [Română](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ro) · [Ελληνικά](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=el) · [Magyar](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=hu) · [Suomi](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=fi) · [Dansk](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=da) · [Norsk](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=no) · [עברית](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=he) · [Català](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ca) · [Bahasa Melayu](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ms) · [Filipino](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=tl)

## От симулятора к оверлею

Репозиторий начинался как калькулятор очков ранкеда. Теперь это студия оверлея для стримеров. Оригинальный симулятор остаётся здесь на всех языках.

## Студия ранкеда, а не просто калькулятор

- **Ранг и прогресс** — От Bronze III до Unreal Legends, Builds или Zero Build — вручную или с публичного профиля.
- **Оверлей OBS** — Баннер, полный или компактный. Прозрачный фон, готов как источник Браузер.
- **Синхронизация Fortnite Tracker** — Опциональное чтение публичного профиля. Без ника ручной режим работает сразу.
- **7 миров, 6 значков** — Classic, Galaxy, Neon, Frost, Royal, Minimal, Astral Galaxy. Эмблема ранга не меняется.
- **Приватно по задумке** — Сервер слушает только 127.0.0.1. Ник и история в data/, Git их игнорирует.
- **Живая сессия** — Убийства, смерти, серия и тосты повышения ранга во время стрима.

## Запуск за 4 шага

Node.js 18 или новее. В Windows после установки достаточно LANCER.bat.

```sh
git clone https://github.com/HanaCherry/fortnite-ranked-overlay.git
cd fortnite-ranked-overlay
npm install
npm start
```

http://127.0.0.1:8767

## OBS / Streamlabs

1. Запустите приложение и не закрывайте его во время стрима.
2. Скопируйте URL оверлея во вкладке OBS.
3. Добавьте источник Браузер.
4. Вставьте URL. Фон по умолчанию прозрачный.

Рекомендуемый размер: 700 × 220 (баннер) · 1100 × 220 (полный).

## Симулятор ранкеда остаётся онлайн

Оцените очки по месту, элиминациям, поздней игре и рангу соперников. Бесплатно, без установки, на вашем языке.

[Открыть симулятор](https://hanacherry.github.io/fortnite-ranked-overlay/simulateur.html?lang=ru)

## Локальные данные

Поставляемый config.json без аккаунта. Настройки в data/config.json, история в data/state.json. Эта папка никогда не публикуется.

---

Fortnite и графика рангов принадлежат Epic Games и правообладателям. Независимый неофициальный проект.

## Usage terms

The application remains free to use, including in monetized streams and videos. Installation, local builds, backups and configuration needed for that use are permitted. Reusing newly covered code in another project, modifying it, redistributing the application or selling copies requires HanaCherry's prior written permission through this repository's issues.

Previously granted rights are preserved: code already published under MIT remains under MIT, and third-party components keep their licenses. New covered original contributions follow the [free application use license](../../LICENSE). GitHub's viewing and forking rights are preserved.
