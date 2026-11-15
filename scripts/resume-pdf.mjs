// Saves the resume page as a PDF to send to employers, using the page's print layout. Adds the phone number from
// RESUME_PHONE in .env (never committed, never on the public page).
//
// Usage: npm run resume-pdf [-- <base-url> <output.pdf>]
//   base-url defaults to http://localhost:4321 (a running dev or preview server)
//   output   defaults to resume/Tim-Rios-resume.pdf (git-ignored)
// Uses the globally installed Playwright, like ~/Tools/site-checks/shots.mjs.
import { execSync } from "node:child_process";
import { mkdirSync } from "node:fs";
import { dirname } from "node:path";
import { createRequire } from "node:module";

const require = createRequire(execSync("npm root -g").toString().trim() + "/");
const { chromium } = require("playwright");

const [base = "http://localhost:4321", out = "resume/Tim-Rios-resume.pdf"] = process.argv.slice(2);
const phone = process.env.RESUME_PHONE;
if (!phone) console.warn("No RESUME_PHONE in .env: the PDF will have no phone number.");

const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto(`${base.replace(/\/$/, "")}/resume/`, { waitUntil: "networkidle" });
await page.evaluate(() => document.fonts.ready);
if (phone) {
  await page.evaluate((number) => {
    const slot = document.querySelector("[data-phone]");
    if (slot) slot.textContent = number;
  }, phone);
}
mkdirSync(dirname(out), { recursive: true });
await page.pdf({ path: out, format: "Letter", preferCSSPageSize: true, printBackground: true });
await browser.close();
console.log(out);
