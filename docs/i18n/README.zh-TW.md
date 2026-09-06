# Fortnite 排名疊加層 · GalaxyBunny Studio

排名模擬器現已成為本機 OBS 疊加層。段位、進度與直播工作階段都留在你的電腦上。

**語言:** [Français](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=fr) · [English](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=en) · [Español](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=es) · [Português](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=pt) · [Deutsch](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=de) · [Italiano](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=it) · [日本語](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ja) · [한국어](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ko) · [简体中文](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=zh) · [繁體中文](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=zh-TW) · [العربية](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ar) · [Русский](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ru) · [हिन्दी](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=hi) · [Türkçe](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=tr) · [Polski](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=pl) · [Nederlands](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=nl) · [Bahasa Indonesia](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=id) · [Tiếng Việt](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=vi) · [ไทย](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=th) · [Українська](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=uk) · [Svenska](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=sv) · [Čeština](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=cs) · [Română](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ro) · [Ελληνικά](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=el) · [Magyar](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=hu) · [Suomi](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=fi) · [Dansk](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=da) · [Norsk](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=no) · [עברית](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=he) · [Català](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ca) · [Bahasa Melayu](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ms) · [Filipino](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=tl)

## 從模擬器到疊加層

本儲存庫起初是排名積分計算機。現在是面向實況主的疊加層工作室。原始模擬器仍在這裡，支援所有語言。

## 排名工作室，而不只是計算機

- **段位與進度** — 從青銅 III 到 Unreal Legends，建造或無建造——可手動或讀取公開資料。
- **OBS 疊加層** — 橫幅、完整或精簡。透明背景，可直接作為瀏覽器來源。
- **Fortnite Tracker 同步** — 可選讀取公開資料。沒有使用者名稱時，手動模式立即可用。
- **7 種世界，6 種徽章** — 經典、星系、霓虹、冰霜、皇家、極簡、星空星系。段位徽記維持不變。
- **預設私密** — 伺服器只監聽 127.0.0.1。使用者名稱與歷史在 data/ 中，Git 會忽略。
- **直播工作階段** — 擊殺、死亡、連勝與升段提示，於直播中顯示。

## 四步啟動

需要 Node.js 18 或更新版本。Windows 安裝後可用 LANCER.bat。

```sh
git clone https://github.com/HanaCherry/fortnite-ranked-overlay.git
cd fortnite-ranked-overlay
npm install
npm start
```

http://127.0.0.1:8767

## OBS / Streamlabs

1. 啟動應用程式，直播期間保持執行。
2. 在 OBS 分頁複製疊加層網址。
3. 新增瀏覽器來源。
4. 貼上網址。預設透明背景。

建議尺寸：700 × 220（橫幅）· 1100 × 220（完整）。

## 排名模擬器仍可線上使用

依名次、淘汰、殘局擊殺與對手段位估算積分。免費、無需安裝、支援你的語言。

[開啟模擬器](https://hanacherry.github.io/fortnite-ranked-overlay/simulateur.html?lang=zh-TW)

## 本機資料

隨專案提供的 config.json 不含帳號。設定寫入 data/config.json，歷史寫入 data/state.json。該資料夾不會被發布。

---

Fortnite 及段位視覺素材歸 Epic Games 及其權利人所有。本專案為獨立非官方作品。
