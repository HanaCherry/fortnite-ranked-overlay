# Overlay Fortnite Ranked · GalaxyBunny Studio

Trình mô phỏng ranked trở thành overlay OBS local. Rank, tiến trình và phiên ở lại trên máy bạn.

**Ngôn ngữ:** [Français](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=fr) · [English](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=en) · [Español](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=es) · [Português](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=pt) · [Deutsch](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=de) · [Italiano](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=it) · [日本語](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ja) · [한국어](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ko) · [简体中文](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=zh) · [繁體中文](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=zh-TW) · [العربية](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ar) · [Русский](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ru) · [हिन्दी](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=hi) · [Türkçe](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=tr) · [Polski](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=pl) · [Nederlands](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=nl) · [Bahasa Indonesia](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=id) · [Tiếng Việt](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=vi) · [ไทย](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=th) · [Українська](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=uk) · [Svenska](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=sv) · [Čeština](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=cs) · [Română](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ro) · [Ελληνικά](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=el) · [Magyar](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=hu) · [Suomi](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=fi) · [Dansk](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=da) · [Norsk](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=no) · [עברית](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=he) · [Català](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ca) · [Bahasa Melayu](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ms) · [Filipino](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=tl)

## Từ mô phỏng đến overlay

Kho này bắt đầu như máy tính điểm ranked. Giờ là studio overlay cho streamer. Trình mô phỏng gốc vẫn ở đây, mọi ngôn ngữ.

## Studio ranked, không chỉ máy tính điểm

- **Rank & tiến trình** — Từ Bronze III đến Unreal Legends, Builds hoặc Zero Build — thủ công hoặc từ hồ sơ công khai.
- **Overlay OBS** — Banner, đầy đủ hoặc gọn. Nền trong suốt, sẵn sàng làm nguồn Trình duyệt.
- **Đồng bộ Fortnite Tracker** — Đọc hồ sơ công khai tùy chọn. Không cần tên, chế độ thủ công chạy ngay.
- **7 thế giới, 6 huy hiệu** — Classic, Galaxy, Neon, Frost, Royal, Minimal, Astral Galaxy. Biểu tượng rank không đổi.
- **Riêng tư theo thiết kế** — Máy chủ chỉ lắng nghe 127.0.0.1. Tên và lịch sử nằm trong data/, Git bỏ qua.
- **Phiên trực tiếp** — Kill, death, streak và toast lên rank trong lúc stream.

## Chạy trong 4 bước

Node.js 18 trở lên. Trên Windows, LANCER.bat đủ sau khi cài.

```sh
git clone https://github.com/HanaCherry/fortnite-ranked-overlay.git
cd fortnite-ranked-overlay
npm install
npm start
```

http://127.0.0.1:8767

## OBS / Streamlabs

1. Chạy ứng dụng và để mở khi stream.
2. Sao chép URL overlay từ tab OBS.
3. Thêm nguồn Trình duyệt.
4. Dán URL. Nền mặc định trong suốt.

Kích thước gợi ý: 700 × 220 (banner) · 1100 × 220 (đầy đủ).

## Trình mô phỏng ranked vẫn trực tuyến

Ước lượng điểm từ thứ hạng, hạ gục, cuối trận và rank đối thủ. Miễn phí, không cài, bằng ngôn ngữ của bạn.

[Mở mô phỏng](https://hanacherry.github.io/fortnite-ranked-overlay/simulateur.html?lang=vi)

## Dữ liệu local

config.json đi kèm không có tài khoản. Cài đặt ở data/config.json, lịch sử ở data/state.json. Thư mục đó không bao giờ được đăng.

---

Fortnite và hình rank thuộc Epic Games và chủ sở hữu. Dự án độc lập, không chính thức.

## Usage terms

The application remains free to use, including in monetized streams and videos. Installation, local builds, backups and configuration needed for that use are permitted. Reusing newly covered code in another project, modifying it, redistributing the application or selling copies requires HanaCherry's prior written permission through this repository's issues.

Previously granted rights are preserved: code already published under MIT remains under MIT, and third-party components keep their licenses. New covered original contributions follow the [free application use license](../../LICENSE). GitHub's viewing and forking rights are preserved.
