# Fortnite Ranked オーバーレイ · GalaxyBunny Studio

ランクシミュレーターがローカル OBS オーバーレイになりました。ランク・進捗・セッションはすべて PC 内に残ります。

**言語:** [Français](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=fr) · [English](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=en) · [Español](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=es) · [Português](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=pt) · [Deutsch](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=de) · [Italiano](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=it) · [日本語](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ja) · [한국어](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ko) · [简体中文](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=zh) · [繁體中文](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=zh-TW) · [العربية](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ar) · [Русский](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ru) · [हिन्दी](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=hi) · [Türkçe](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=tr) · [Polski](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=pl) · [Nederlands](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=nl) · [Bahasa Indonesia](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=id) · [Tiếng Việt](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=vi) · [ไทย](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=th) · [Українська](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=uk) · [Svenska](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=sv) · [Čeština](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=cs) · [Română](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ro) · [Ελληνικά](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=el) · [Magyar](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=hu) · [Suomi](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=fi) · [Dansk](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=da) · [Norsk](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=no) · [עברית](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=he) · [Català](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ca) · [Bahasa Melayu](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ms) · [Filipino](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=tl)

## シミュレーターからオーバーレイへ

このリポジトリはランクポイント計算機として始まりました。いまは配信者向けオーバーレイスタジオです。元のシミュレーターはここに、すべての言語で残っています。

## 計算機ではなく、ランク用スタジオ

- **ランクと進捗** — Bronze III から Unreal Legends まで。ビルド / ゼロビルド。手動でも公開プロフィールでも。
- **OBS オーバーレイ** — バナー、フル、コンパクト。透明背景でブラウザソースにそのまま。
- **Fortnite Tracker 同期** — 公開プロフィールの任意読み取り。ユーザー名なしでも手動モードはすぐ使えます。
- **7つの世界、6つのバッジ** — クラシック、ギャラクシー、ネオン、フロスト、ロイヤル、ミニマル、星の銀河。ランクの紋章はそのまま。
- **設計からプライベート** — サーバーは 127.0.0.1 のみ。ユーザー名と履歴は data/ にあり、Git から除外されます。
- **ライブセッション** — キル、デス、ストリーク、ランクアップのトーストを配信中に表示。

## 4ステップで起動

Node.js 18 以上。Windows ではインストール後 LANCER.bat で十分です。

```sh
git clone https://github.com/HanaCherry/fortnite-ranked-overlay.git
cd fortnite-ranked-overlay
npm install
npm start
```

http://127.0.0.1:8767

## OBS / Streamlabs

1. アプリを起動し、配信中は開いたままにします。
2. OBS タブからオーバーレイ URL をコピー。
3. ブラウザソースを追加。
4. URL を貼り付け。背景はデフォルトで透明です。

推奨サイズ：700 × 220（バナー）· 1100 × 220（フル）。

## ランクシミュレーターはウェブに残ります

順位、キル、終盤キル、相手ランクからポイントを見積もります。無料、インストール不要、あなたの言語で。

[シミュレーターを開く](https://hanacherry.github.io/fortnite-ranked-overlay/simulateur.html?lang=ja)

## ローカルデータ

配布される config.json にアカウントはありません。設定は data/config.json、履歴は data/state.json。このフォルダは公開されません。

---

Fortnite およびランクビジュアルの権利は Epic Games と各権利者に帰属します。非公式の独立プロジェクトです。

## Usage terms

The application remains free to use, including in monetized streams and videos. Installation, local builds, backups and configuration needed for that use are permitted. Reusing newly covered code in another project, modifying it, redistributing the application or selling copies requires HanaCherry's prior written permission through this repository's issues.

Previously granted rights are preserved: code already published under MIT remains under MIT, and third-party components keep their licenses. New covered original contributions follow the [free application use license](../../LICENSE). GitHub's viewing and forking rights are preserved.
