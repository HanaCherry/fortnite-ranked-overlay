"use strict";
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const { spawn } = require("node:child_process");
const { once } = require("node:events");

const root = path.resolve(__dirname, "..");
const outDir = path.join(root, "docs", "assets");
fs.mkdirSync(outDir, { recursive: true });

async function launchBrowser() {
  const { chromium } = require("playwright-core");
  const attempts = [{ channel: "msedge" }, { channel: "chrome" }, {}];
  let last;
  for (const opts of attempts) {
    try {
      return await chromium.launch({ ...opts, headless: true });
    } catch (err) {
      last = err;
    }
  }
  throw last || new Error("Aucun navigateur pour les captures");
}

(async () => {
  const data = fs.mkdtempSync(path.join(os.tmpdir(), "ranked-docs-"));
  const child = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: { ...process.env, PORT: "0", RANKED_DATA_DIR: data },
    stdio: ["ignore", "pipe", "pipe"],
  });
  const origin = await new Promise((resolve, reject) => {
    let output = "";
    const timer = setTimeout(() => reject(new Error("startup timeout")), 8000);
    child.stdout.on("data", (chunk) => {
      output += chunk;
      const match = output.match(/http:\/\/127\.0\.0\.1:(\d+)\/control/);
      if (match) {
        clearTimeout(timer);
        resolve("http://127.0.0.1:" + match[1]);
      }
    });
    child.on("error", reject);
    child.on("exit", (code) => {
      clearTimeout(timer);
      reject(new Error("server exited " + code + "\n" + output));
    });
  });

  const post = async (route, body) => {
    const response = await fetch(origin + route, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (!response.ok) throw new Error(route + " " + response.status);
  };

  await post("/api/overlay", {
    layout: "banner",
    themeStyle: "bunny",
    badgeStyle: "bunny",
    showLogo: true,
    showRankName: true,
    showProgress: true,
    showLiveKills: true,
    showLiveDeaths: true,
    showLiveStreak: true,
    showToasts: false,
    transparent: true,
    scale: 1,
  });
  await post("/api/ranked", { mode: "builds", active: true, rank: "Diamond III", progress: 72 });

  const browser = await launchBrowser();
  try {
    const dashboard = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    await dashboard.goto(origin + "/control.html", { waitUntil: "networkidle", timeout: 20000 });
    await dashboard.waitForTimeout(1200);
    await dashboard.screenshot({
      path: path.join(outDir, "dashboard.png"),
      type: "png",
    });

    const overlayCss = `
      html, body {
        background: radial-gradient(ellipse at 18% 0%, #3a1d6a, #070513 55%) !important;
      }
      .wrap {
        inset: 24px auto auto 24px !important;
        transform-origin: top left !important;
      }
    `;

    const overlay = await browser.newPage({ viewport: { width: 900, height: 280 } });
    await overlay.goto(origin + "/overlay.html", { waitUntil: "networkidle", timeout: 20000 });
    await overlay.addStyleTag({ content: overlayCss });
    await overlay.waitForTimeout(800);
    const banner = overlay.locator(".banner").first();
    await banner.screenshot({ path: path.join(outDir, "overlay.png"), type: "png" });

    const compact = await browser.newPage({ viewport: { width: 640, height: 240 } });
    await compact.goto(origin + "/overlay-compact.html", { waitUntil: "networkidle", timeout: 20000 });
    await compact.addStyleTag({ content: overlayCss });
    await compact.waitForTimeout(800);
    const compactRoot = compact.locator(".wrap, .banner, body > *").first();
    await compactRoot.screenshot({ path: path.join(outDir, "overlay-compact.png"), type: "png" });
  } finally {
    await browser.close();
    child.kill();
    await once(child, "exit").catch(() => {});
    fs.rmSync(data, { recursive: true, force: true });
  }
  console.log("captures written to docs/assets");
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
