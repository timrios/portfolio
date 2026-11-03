// Full-page screenshots of a list of URLs at phone and desktop sizes, for case studies.
// Uses the globally installed Playwright (see ~/Projects/project-starter/scripts/shots.mjs).
//   node shots.mjs <output folder> <name>=<url> [<name>=<url> …]
import { execSync } from "node:child_process";
import { mkdirSync } from "node:fs";
import { createRequire } from "node:module";
const require = createRequire(execSync("npm root -g").toString().trim() + "/");
const { chromium, devices } = require("playwright");
const [out, ...pairs] = process.argv.slice(2);
mkdirSync(out, { recursive: true });
const sizes = { phone: devices["iPhone 15 Pro Max"], desktop: { viewport: { width: 1440, height: 900 } } };
const browser = await chromium.launch();
for (const [size, options] of Object.entries(sizes)) {
  const context = await browser.newContext({ ...options, reducedMotion: "reduce" });
  const page = await context.newPage();
  for (const pair of pairs) {
    const [name, url] = [pair.slice(0, pair.indexOf("=")), pair.slice(pair.indexOf("=") + 1)];
    await page.goto(url, { waitUntil: "networkidle", timeout: 90000 }).catch(() => {});
    // Let lazy images load before the full-page capture
    await page.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 600) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 120)); } window.scrollTo(0, 0); });
    await page.waitForTimeout(800);
    await page.screenshot({ path: `${out}/${name}-${size}.png`, fullPage: true });
    console.log(`${name}-${size}`);
  }
  await context.close();
}
await browser.close();
