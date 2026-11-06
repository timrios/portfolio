// Measures the phone problems a screenshot can't show, on every page in the sitemap, using the browser engine iPhones
// use. It simulates a phone, so it doesn't replace trying the site on a real one. Uses the globally installed Playwright
// (`npm install -g playwright`, then `npx playwright install webkit`), which isn't a project dependency.
//
// Usage: npm run phone-check [-- <base-url>]
//   base-url defaults to http://localhost:4321. Astro only builds its sitemap, so use `npm run build && npm run preview`.
// Exits with an error if it finds a problem, so it can sit alongside `npm run check`.
import { execSync } from "node:child_process";
import { createRequire } from "node:module";

const require = createRequire(execSync("npm root -g").toString().trim() + "/");
const { webkit, devices } = require("playwright");

const DEFAULT_BASE = "http://localhost:4321";
const base = (process.argv.slice(2).find((a) => !a.startsWith("--")) ?? DEFAULT_BASE).replace(/\/$/, "");

let response = await fetch(`${base}/sitemap.xml`);
if (!response.ok) response = await fetch(`${base}/sitemap-0.xml`);
if (!response.ok) throw new Error(`No sitemap at ${base}. Is the server running, on a build rather than dev?`);
const paths = [...(await response.text()).matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => new URL(m[1]).pathname);

const browser = await webkit.launch();
let problems = 0;

// The smallest common iPhone first: most overflow shows up there
for (const [name, device] of [
  ["iPhone SE", devices["iPhone SE (3rd gen)"] ?? devices["iPhone SE"]],
  ["iPhone 13", devices["iPhone 13"]],
]) {
  const context = await browser.newContext(device);
  for (const path of paths) {
    const page = await context.newPage();
    const errors = [];
    page.on("pageerror", (e) => errors.push(e.message));
    await page.goto(base + path, { waitUntil: "load" });
    // Let anything sliding in finish, or it gets measured mid-way
    await page.waitForTimeout(600);

    const found = await page.evaluate(() => {
      const shown = (el) => el.getClientRects().length > 0 && getComputedStyle(el).visibility !== "hidden";
      const label = (el) => (el.getAttribute("aria-label") || el.textContent || el.tagName).trim().slice(0, 40);
      const size = (el) => {
        const r = el.getBoundingClientRect();
        return [Math.round(r.width), Math.round(r.height)];
      };
      return {
        // Sideways scroll also fights every vertical swipe on iPhone
        overflow: document.documentElement.scrollWidth - window.innerWidth,
        small: [...document.querySelectorAll("a, button, summary, select, label:has(input)")]
          .filter(shown)
          .map((el) => [label(el), ...size(el)])
          .filter(([, w, h]) => w > 0 && (w < 44 || h < 44)),
        // iPhones zoom the whole page when someone taps a field with smaller text
        zoomingFields: [...document.querySelectorAll("input:not([type=range],[type=hidden],[type=checkbox],[type=radio]), select, textarea")]
          .filter(shown)
          .filter((el) => parseFloat(getComputedStyle(el).fontSize) < 16)
          .map((el) => el.name || el.id || label(el)),
      };
    });

    const report = [];
    if (found.overflow > 0) report.push(`slides sideways by ${found.overflow}px`);
    for (const [text, w, h] of found.small) report.push(`target under 44px: "${text}" ${w}×${h}`);
    for (const text of found.zoomingFields) report.push(`field under 16px: "${text}"`);
    for (const message of errors) report.push(`script error: ${message}`);

    if (report.length) {
      problems += report.length;
      console.log(`${name} ${path}\n  ${report.join("\n  ")}`);
    }
    await page.close();
  }
  await context.close();
}

await browser.close();
console.log(problems ? `\n${problems} problem(s) on ${paths.length} pages.` : `No problems on ${paths.length} pages.`);
process.exitCode = problems ? 1 : 0;
