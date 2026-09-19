# Fortnite 排位叠加层 · GalaxyBunny Studio

排位模拟器现已成为本地 OBS 叠加层。段位、进度和直播会话都留在你的电脑上。

**语言:** [Français](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=fr) · [English](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=en) · [Español](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=es) · [Português](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=pt) · [Deutsch](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=de) · [Italiano](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=it) · [日本語](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ja) · [한국어](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ko) · [简体中文](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=zh) · [繁體中文](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=zh-TW) · [العربية](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ar) · [Русский](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ru) · [हिन्दी](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=hi) · [Türkçe](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=tr) · [Polski](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=pl) · [Nederlands](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=nl) · [Bahasa Indonesia](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=id) · [Tiếng Việt](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=vi) · [ไทย](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=th) · [Українська](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=uk) · [Svenska](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=sv) · [Čeština](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=cs) · [Română](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ro) · [Ελληνικά](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=el) · [Magyar](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=hu) · [Suomi](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=fi) · [Dansk](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=da) · [Norsk](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=no) · [עברית](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=he) · [Català](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ca) · [Bahasa Melayu](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ms) · [Filipino](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=tl)

## 从模拟器到叠加层

本仓库起初是排位积分计算器。现在是面向主播的叠加层工作室。原始模拟器仍在这里，支持所有语言。

## 排位工作室，而不只是计算器

- **段位与进度** — 从青铜 III 到 Unreal Legends，建造或无建造——可手动或读取公开资料。
- **OBS 叠加层** — 横幅、完整或紧凑。透明背景，可直接用作浏览器源。
- **Fortnite Tracker 同步** — 可选读取公开资料。没有用户名时，手动模式立即可用。
- **7 种世界，6 种徽章** — 经典、星系、霓虹、冰霜、皇家、极简、星空星系。段位徽记保持不变。
- **默认私密** — 服务器只监听 127.0.0.1。用户名和历史在 data/ 中，Git 会忽略。
- **直播会话** — 击杀、死亡、连胜以及升段提示，在直播中显示。

## 四步启动

需要 Node.js 18 或更高。Windows 安装后可用 LANCER.bat。

```sh
git clone https://github.com/HanaCherry/fortnite-ranked-overlay.git
cd fortnite-ranked-overlay
npm install
npm start
```

http://127.0.0.1:8767

## OBS / Streamlabs

1. 启动应用，直播期间保持运行。
2. 在 OBS 标签复制叠加层网址。
3. 添加浏览器源。
4. 粘贴网址。默认透明背景。

建议尺寸：700 × 220（横幅）· 1100 × 220（完整）。

## 排位模拟器仍可在线使用

根据名次、淘汰、残局击杀和对手段位估算积分。免费、无需安装、支持你的语言。

[打开模拟器](https://hanacherry.github.io/fortnite-ranked-overlay/simulateur.html?lang=zh)

## 本地数据

随项目提供的 config.json 不含账号。设置写入 data/config.json，历史写入 data/state.json。该文件夹不会被发布。

---

Fortnite 及段位视觉素材归 Epic Games 及其权利人所有。本项目为独立非官方作品。

## Usage terms

The application remains free to use, including in monetized streams and videos. Installation, local builds, backups and configuration needed for that use are permitted. Reusing newly covered code in another project, modifying it, redistributing the application or selling copies requires HanaCherry's prior written permission through this repository's issues.

Previously granted rights are preserved: code already published under MIT remains under MIT, and third-party components keep their licenses. New covered original contributions follow the [free application use license](../../LICENSE). GitHub's viewing and forking rights are preserved.
