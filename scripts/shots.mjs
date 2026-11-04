// Screenshots every page in the sitemap at phone and desktop sizes, for checking visual changes.
// Uses the globally installed Playwright (`npm install -g playwright`, then
// `npx playwright install chromium`), which isn't a project dependency.
//
// Usage: npm run shots [-- <base-url>] [--only=/,/menu] [--reduced-motion]
//   base-url defaults to http://localhost:4321 (start the dev server first; change DEFAULT_BASE for your framework).
// Writes to screenshots/ (git-ignored): <page>-<size>.png, a full-page shot per page and size,
// plus <page>-<size>-scrolled.png showing the first screen after scrolling 300px, which is
// where scroll-linked motion and sticky headers show.
import { execSync } from "node:child_process";
import { mkdirSync } from "node:fs";
import { createRequire } from "node:module";

const require = createRequire(execSync("npm root -g").toString().trim() + "/");
const { chromium, devices } = require("playwright");

// The dev server's address: Astro uses 4321, Next.js 3000.
const DEFAULT_BASE = "http://localhost:4321";

const args = process.argv.slice(2);
const base = (args.find((a) => !a.startsWith("--")) ?? DEFAULT_BASE).replace(/\/$/, "");
const only = args
  .find((a) => a.startsWith("--only="))
  ?.slice(7)
  .split(",");
const reducedMotion = args.includes("--reduced-motion") ? "reduce" : "no-preference";

const sizes = {
  "iphone-pro-max": devices["iPhone 15 Pro Max"],
  "iphone-se": devices["iPhone SE (3rd gen)"] ?? devices["iPhone SE"],
  "desktop-1440": { viewport: { width: 1440, height: 900 } },
  "desktop-1920": { viewport: { width: 1920, height: 1080 } },
};

// The sitemap lists the canonical domain; swap it for the server being checked.
// Astro writes the page list to sitemap-0.xml (sitemap-index.xml only points to it)
const sitemap = await (await fetch(`${base}/sitemap-0.xml`)).text();
const paths = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)]
  .map(([, loc]) => new URL(loc).pathname)
  .filter((path) => !only || only.includes(path));

mkdirSync("screenshots", { recursive: true });
const browser = await chromium.launch();

for (const [sizeName, device] of Object.entries(sizes)) {
  const context = await browser.newContext({ ...device, reducedMotion });
  const page = await context.newPage();
  for (const path of paths) {
    const name = `${path === "/" ? "home" : path.slice(1).replace(/\/$/, "").replaceAll("/", "-")}-${sizeName}`;
    await page.goto(base + path, { waitUntil: "networkidle" });
    await waitForImagesOnScreen(page);
    await page.mouse.wheel(0, 300);
    await page.waitForTimeout(500);
    await page.screenshot({ path: `screenshots/${name}-scrolled.png` });

    // Load every lazy image (including ones off to the side in swipe rails), then shoot the
    // full page from the top.
    await page.evaluate(() => {
      document.querySelectorAll('img[loading="lazy"]').forEach((img) => (img.loading = "eager"));
      // "instant": the site scrolls smoothly, and a half-finished scroll misplaces sticky bars.
      scrollTo({ top: 0, behavior: "instant" });
    });
    await waitForImagesOnScreen(page, true);
    await page.screenshot({ path: `screenshots/${name}.png`, fullPage: true });
    console.log(`screenshots/${name}.png`);
  }
  await context.close();
}
await browser.close();

/** Waits for visible images to load. Lazy and display:none images never load, so skip them. */
async function waitForImagesOnScreen(page, wholePage = false) {
  await page.waitForFunction((all) => {
    return [...document.images]
      .filter((img) => {
        const r = img.getBoundingClientRect();
        return img.checkVisibility() && (all || (r.bottom > 0 && r.top < innerHeight));
      })
      .every((img) => img.complete && img.naturalWidth > 0);
  }, wholePage);
}
