"use strict";
document.querySelectorAll('[data-local-url]').forEach(el => {
  el.textContent = location.origin + el.dataset.localUrl;
});
const copyButton = document.getElementById('copyOverlay');
if (copyButton) copyButton.addEventListener('click', async () => {
  const status = document.getElementById('copyStatus');
  try {
    await navigator.clipboard.writeText(location.origin + '/overlay.html');
    status.textContent = 'URL copiée';
  } catch {
    status.textContent = 'Sélectionnez l’URL ci-dessus pour la copier.';
  }
});
const navigation = [...document.querySelectorAll('.sidebar nav a')];
function markNavigation() {
  navigation.forEach(link => {
    const target = new URL(link.href);
    const currentPath = location.pathname === '/' ? '/control.html' : location.pathname;
    const active = target.pathname === currentPath && (target.hash === location.hash || (!location.hash && (!target.hash || target.hash === '#overview')));
    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
}
markNavigation();
window.addEventListener('hashchange', markNavigation);

// Decorative starfield, independent of the transparent OBS overlay.
(() => {
  const canvas = document.getElementById('galaxyStars');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  let width = 0, height = 0, stars = [], frame = 0, previous = 0, elapsed = 0;
  function resize() {
    width = innerWidth;
    height = innerHeight;
    const ratio = Math.min(devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    stars = Array.from({length: Math.min(300, Math.max(90, Math.round(width * height / 4200)))}, () => ({
      x: Math.random() * width, y: Math.random() * height,
      radius: 0.45 + Math.random() * 1.35,
      phase: Math.random() * Math.PI * 2,
      speed: 0.4 + Math.random() * 1.2,
      depth: 0.4 + Math.random(),
      color: ['225,231,255', '190,169,255', '255,201,240'][Math.floor(Math.random() * 3)]
    }));
    draw(0);
  }
  function draw(delta) {
    ctx.clearRect(0, 0, width, height);
    for (const star of stars) {
      star.x = (star.x + delta * star.depth * 3) % width;
      star.y = (star.y - delta * star.depth * 1.5 + height) % height;
      const alpha = 0.35 + (1 + Math.sin(elapsed * star.speed + star.phase)) * 0.3;
      ctx.fillStyle = `rgba(${star.color},${alpha})`;
      ctx.shadowColor = `rgba(${star.color},0.85)`;
      ctx.shadowBlur = star.radius > 1.3 ? 9 : 3;
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fill();
      if (star.radius > 1.65) {
        ctx.strokeStyle = `rgba(${star.color},${alpha * 0.45})`;
        ctx.lineWidth = 0.6;
        ctx.beginPath();
        ctx.moveTo(star.x - 4, star.y); ctx.lineTo(star.x + 4, star.y);
        ctx.moveTo(star.x, star.y - 4); ctx.lineTo(star.x, star.y + 4);
        ctx.stroke();
      }
    }
    ctx.shadowBlur = 0;
  }
  function tick(now) {
    const delta = previous ? Math.min((now - previous) / 1000, 0.05) : 0;
    previous = now;
    elapsed += delta;
    draw(delta);
    frame = requestAnimationFrame(tick);
  }
  function updateMotion() {
    cancelAnimationFrame(frame);
    previous = 0;
    if (!document.hidden && !reducedMotion.matches) frame = requestAnimationFrame(tick);
    else draw(0);
  }
  window.addEventListener('resize', resize);
  document.addEventListener('visibilitychange', updateMotion);
  reducedMotion.addEventListener('change', updateMotion);
  resize();
  updateMotion();
})();
