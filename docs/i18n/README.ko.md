# Fortnite Ranked 오버레이 · GalaxyBunny Studio

랭크 시뮬레이터가 로컬 OBS 오버레이가 되었습니다. 랭크, 진행도, 세션은 PC에만 남습니다.

**언어:** [Français](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=fr) · [English](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=en) · [Español](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=es) · [Português](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=pt) · [Deutsch](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=de) · [Italiano](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=it) · [日本語](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ja) · [한국어](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ko) · [简体中文](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=zh) · [繁體中文](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=zh-TW) · [العربية](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ar) · [Русский](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ru) · [हिन्दी](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=hi) · [Türkçe](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=tr) · [Polski](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=pl) · [Nederlands](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=nl) · [Bahasa Indonesia](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=id) · [Tiếng Việt](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=vi) · [ไทย](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=th) · [Українська](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=uk) · [Svenska](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=sv) · [Čeština](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=cs) · [Română](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ro) · [Ελληνικά](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=el) · [Magyar](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=hu) · [Suomi](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=fi) · [Dansk](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=da) · [Norsk](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=no) · [עברית](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=he) · [Català](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ca) · [Bahasa Melayu](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ms) · [Filipino](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=tl)

## 시뮬레이터에서 오버레이로

이 저장소는 랭크 포인트 계산기로 시작했습니다. 지금은 스트리머용 오버레이 스튜디오입니다. 원래 시뮬레이터는 모든 언어로 여기에 남아 있습니다.

## 계산기가 아닌 랭크 스튜디오

- **랭크와 진행도** — Bronze III부터 Unreal Legends까지. 빌드 또는 제로 빌드. 수동이나 공개 프로필.
- **OBS 오버레이** — 배너, 전체, 컴팩트. 투명 배경, 브라우저 소스로 바로 사용.
- **Fortnite Tracker 동기화** — 공개 프로필 선택 읽기. 닉네임 없이도 수동 모드가 바로 됩니다.
- **7가지 세계, 6가지 뱃지** — 클래식, 갤럭시, 네온, 프로스트, 로열, 미니멀, 아스트랄 갤럭시. 랭크 문양은 그대로입니다.
- **설계부터 비공개** — 서버는 127.0.0.1만 수신합니다. 닉네임과 기록은 data/에 있으며 Git에서 무시됩니다.
- **라이브 세션** — 킬, 데스, 스트릭, 랭크 업 토스트를 방송 중에 표시합니다.

## 4단계로 시작

Node.js 18 이상. Windows에서는 설치 후 LANCER.bat이면 충분합니다.

```sh
git clone https://github.com/HanaCherry/fortnite-ranked-overlay.git
cd fortnite-ranked-overlay
npm install
npm start
```

http://127.0.0.1:8767

## OBS / Streamlabs

1. 앱을 켜고 방송하는 동안 켜 두세요.
2. OBS 탭에서 오버레이 URL을 복사하세요.
3. 브라우저 소스를 추가하세요.
4. URL을 붙여 넣으세요. 기본 배경은 투명합니다.

권장 크기: 700 × 220 (배너) · 1100 × 220 (전체).

## 랭크 시뮬레이터는 웹에 그대로

순위, 처치, 후반 처치, 상대 랭크로 포인트를 추정합니다. 무료, 설치 없음, 내 언어로.

[시뮬레이터 열기](https://hanacherry.github.io/fortnite-ranked-overlay/simulateur.html?lang=ko)

## 로컬 데이터

배포되는 config.json에는 계정이 없습니다. 설정은 data/config.json, 기록은 data/state.json. 이 폴더는 게시되지 않습니다.

---

Fortnite와 랭크 아트워크는 Epic Games와 각 권리자에게 있습니다. 비공식 독립 프로젝트입니다.
