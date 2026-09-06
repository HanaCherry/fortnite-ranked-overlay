/**
 * Animations d'étoiles autour du badge — style par division ranked
 */
window.RankStars = (() => {
  const PRESETS = {
    Bronze: { color: "#e8a06a", density: 10, speed: 0.6, size: 1.4, spark: 0.3 },
    Silver: { color: "#e8eef6", density: 14, speed: 0.75, size: 1.5, spark: 0.45 },
    Gold: { color: "#ffd76a", density: 18, speed: 0.9, size: 1.7, spark: 0.65 },
    Platinum: { color: "#9fe8ff", density: 22, speed: 1.0, size: 1.8, spark: 0.75 },
    Diamond: { color: "#7ad0ff", density: 26, speed: 1.15, size: 1.9, spark: 0.85 },
    Elite: { color: "#c9a0ff", density: 30, speed: 1.25, size: 2.0, spark: 0.95 },
    Champion: { color: "#ff7eb3", density: 34, speed: 1.35, size: 2.1, spark: 1.0 },
    Unreal: { color: "#ff4fd8", density: 42, speed: 1.55, size: 2.3, spark: 1.2 },
    Unranked: { color: "#aab", density: 8, speed: 0.5, size: 1.2, spark: 0.2 },
  };

  function create(canvas, division) {
    if (!canvas) return null;
    const ctx = canvas.getContext("2d");
    let w = canvas.width;
    let h = canvas.height;
    let cx = w / 2;
    let cy = h / 2;
    let stars = [];
    let preset = PRESETS[division] || PRESETS.Unranked;
    let raf = 0;
    let burst = 0;
    let running = true;

    function spawn(n) {
      for (let i = 0; i < n; i++) {
        const ang = Math.random() * Math.PI * 2;
        const dist = 28 + Math.random() * 42;
        stars.push({
          ang,
          dist,
          base: dist,
          spin: (0.004 + Math.random() * 0.012) * (Math.random() < 0.5 ? 1 : -1) * preset.speed,
          size: (0.6 + Math.random() * 1.4) * preset.size,
          tw: Math.random() * Math.PI * 2,
          tws: 0.04 + Math.random() * 0.08,
          alpha: 0.35 + Math.random() * 0.65,
          life: 1,
        });
      }
    }

    function setDivision(div) {
      preset = PRESETS[div] || PRESETS.Unranked;
      stars = [];
      spawn(preset.density);
    }

    function killBurst() {
      burst = 1;
      spawn(10 + Math.floor(preset.spark * 14));
    }

    function rankUpBurst() {
      burst = 1.4;
      spawn(18 + Math.floor(preset.spark * 22));
    }

    function frame() {
      if (!running) return;
      ctx.clearRect(0, 0, w, h);
      // soft aura
      const grd = ctx.createRadialGradient(cx, cy, 18, cx, cy, 70);
      grd.addColorStop(0, hexA(preset.color, 0.22 + burst * 0.2));
      grd.addColorStop(0.55, hexA(preset.color, 0.08));
      grd.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = grd;
      ctx.beginPath();
      ctx.arc(cx, cy, 72, 0, Math.PI * 2);
      ctx.fill();

      for (const s of stars) {
        s.ang += s.spin * (1 + burst * 0.8);
        s.tw += s.tws;
        s.dist = s.base + Math.sin(s.tw) * 3 + burst * 8;
        const x = cx + Math.cos(s.ang) * s.dist;
        const y = cy + Math.sin(s.ang) * s.dist;
        const a = s.alpha * (0.55 + 0.45 * Math.sin(s.tw * 1.3)) * (0.7 + burst * 0.5);
        drawStar(ctx, x, y, s.size, preset.color, a);
      }

      // keep density
      if (stars.length > preset.density + 20) {
        stars = stars.slice(-preset.density - 8);
      }
      burst *= 0.92;
      if (burst < 0.02) burst = 0;

      raf = requestAnimationFrame(frame);
    }

    setDivision(division || "Unranked");
    frame();

    return {
      setDivision,
      killBurst,
      rankUpBurst,
      destroy() {
        running = false;
        cancelAnimationFrame(raf);
      },
    };
  }

  function hexA(hex, a) {
    const h = hex.replace("#", "");
    const full = h.length === 3 ? h.split("").map((c) => c + c).join("") : h;
    const n = parseInt(full, 16);
    const r = (n >> 16) & 255;
    const g = (n >> 8) & 255;
    const b = n & 255;
    return `rgba(${r},${g},${b},${a})`;
  }

  function drawStar(ctx, x, y, size, color, alpha) {
    ctx.save();
    ctx.translate(x, y);
    ctx.globalAlpha = Math.max(0, Math.min(1, alpha));
    ctx.fillStyle = color;
    ctx.shadowColor = color;
    ctx.shadowBlur = 8 * size;
    ctx.beginPath();
    for (let i = 0; i < 5; i++) {
      const a = (i * 4 * Math.PI) / 5 - Math.PI / 2;
      const r = i % 2 === 0 ? size * 2.2 : size * 0.9;
      const px = Math.cos(a) * r;
      const py = Math.sin(a) * r;
      if (i === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.closePath();
    ctx.fill();
    // core
    ctx.shadowBlur = 0;
    ctx.globalAlpha *= 0.9;
    ctx.fillStyle = "#fff";
    ctx.beginPath();
    ctx.arc(0, 0, size * 0.35, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  return { create, PRESETS };
})();
