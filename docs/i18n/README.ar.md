# تراكب تصنيف فورتنايت · GalaxyBunny Studio

محاكي التصنيف أصبح تراكب OBS محليًا. الرتبة والتقدم والجلسة تبقى على جهازك.

**اللغة:** [Français](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=fr) · [English](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=en) · [Español](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=es) · [Português](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=pt) · [Deutsch](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=de) · [Italiano](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=it) · [日本語](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ja) · [한국어](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ko) · [简体中文](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=zh) · [繁體中文](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=zh-TW) · [العربية](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ar) · [Русский](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ru) · [हिन्दी](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=hi) · [Türkçe](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=tr) · [Polski](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=pl) · [Nederlands](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=nl) · [Bahasa Indonesia](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=id) · [Tiếng Việt](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=vi) · [ไทย](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=th) · [Українська](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=uk) · [Svenska](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=sv) · [Čeština](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=cs) · [Română](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ro) · [Ελληνικά](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=el) · [Magyar](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=hu) · [Suomi](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=fi) · [Dansk](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=da) · [Norsk](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=no) · [עברית](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=he) · [Català](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ca) · [Bahasa Melayu](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=ms) · [Filipino](https://hanacherry.github.io/fortnite-ranked-overlay/?lang=tl)

## من المحاكي إلى التراكب

بدأ هذا المستودع كحاسبة نقاط تصنيف. أصبح الآن استوديو تراكب للبث. المحاكي الأصلي ما زال هنا بكل اللغات.

## استوديو تصنيف، وليس مجرد حاسبة

- **الرتبة والتقدم** — من Bronze III إلى Unreal Legends، بناء أو بلا بناء — يدويًا أو من ملف عام.
- **تراكب OBS** — شريط أو كامل أو مضغوط. خلفية شفافة، جاهز كمصدر متصفح.
- **مزامنة Fortnite Tracker** — قراءة اختيارية لملف عام. بدون اسم، يعمل الوضع اليدوي فورًا.
- **7 عوالم و6 شارات** — كلاسيكي، مجرة، نيون، صقيع، ملكي، بسيط، مجرة نجمية. شعار رتبتك لا يتغير.
- **خاص بالتصميم** — الخادم يستمع على 127.0.0.1 فقط. الاسم والسجل في data/ ويتجاهلهما Git.
- **جلسة مباشرة** — قتل وموت وسلسلة وتنبيهات الترقية أثناء البث.

## التشغيل في 4 خطوات

Node.js 18 أو أحدث. على ويندوز يكفي LANCER.bat بعد التثبيت.

```sh
git clone https://github.com/HanaCherry/fortnite-ranked-overlay.git
cd fortnite-ranked-overlay
npm install
npm start
```

http://127.0.0.1:8767

## OBS / Streamlabs

1. شغّل التطبيق واتركه مفتوحًا أثناء البث.
2. انسخ رابط التراكب من تبويب OBS.
3. أضف مصدر متصفح.
4. الصق الرابط. الخلفية شفافة افتراضيًا.

الحجم المقترح: 700 × 220 (شريط) · 1100 × 220 (كامل).

## محاكي التصنيف يبقى على الويب

قدّر النقاط من المركز والإقصاءات وقتلى نهاية المباراة ورتبة الخصوم. مجاني بلا تثبيت وبلغتك.

[افتح المحاكي](https://hanacherry.github.io/fortnite-ranked-overlay/simulateur.html?lang=ar)

## بيانات محلية

ملف config.json الموزع بلا حساب. الإعدادات في data/config.json والسجل في data/state.json. هذا المجلد لا يُنشر أبدًا.

---

فورتنايت ورسوم الرتب ملك Epic Games وأصحاب الحقوق. مشروع مستقل غير رسمي.
