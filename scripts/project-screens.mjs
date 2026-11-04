// Crops a client's case-study screenshots into the images a project page uses, so every project's screens match:
// the first screen of each page (1440×900 desktop, 1290×2796 phone) and the old site's home page.
//
// Usage: npm run project-screens -- <id> [page …]
//   <id>   the project id, which is also the folder name in case-studies/ and src/assets/images/
//   page   pages to crop from screenshots/after/ (default: home). E.g. home menu story
// Reads  case-studies/<id>/screenshots/after/<page>-desktop.jpg and <page>-phone.jpg,
//        and the first case-studies/<id>/screenshots/before/home*-desktop.jpg, if any.
// Writes src/assets/images/<id>/site-<page>-desktop.jpg, site-home-phone.jpg and old-site-home-desktop.jpg.
// Needs ffmpeg (Homebrew). Cropping, not resizing: the build makes the smaller copies.
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, readdirSync } from "node:fs";

const [id, ...pages] = process.argv.slice(2);
if (!id) {
  console.error("Usage: npm run project-screens -- <id> [page …]");
  process.exit(1);
}
const shots = `case-studies/${id}/screenshots`;
const out = `src/assets/images/${id}`;
mkdirSync(out, { recursive: true });

/** Crops the top-left width×height of an image */
function crop(from, to, width, height) {
  if (!existsSync(from)) return console.warn(`Skipped (not found): ${from}`);
  execFileSync("ffmpeg", [
    "-loglevel",
    "error",
    "-y",
    "-i",
    from,
    "-vf",
    `crop=${width}:${height}:0:0`,
    "-q:v",
    "2",
    to,
  ]);
  console.log(to);
}

/** Phone captures are 1290 wide unless saved at half width (very tall pages); keep the iPhone's 1290:2796 shape */
function phoneHeight(file) {
  const width = Number(
    execFileSync("ffprobe", [
      "-v",
      "error",
      "-show_entries",
      "stream=width",
      "-of",
      "csv=p=0",
      file,
    ]).toString(),
  );
  return [width, Math.round((width * 2796) / 1290)];
}

for (const page of pages.length ? pages : ["home"]) {
  crop(`${shots}/after/${page}-desktop.jpg`, `${out}/site-${page}-desktop.jpg`, 1440, 900);
}

const phone = `${shots}/after/home-phone.jpg`;
if (existsSync(phone)) crop(phone, `${out}/site-home-phone.jpg`, ...phoneHeight(phone));

const before = existsSync(`${shots}/before`)
  ? readdirSync(`${shots}/before`).find((f) => /^home.*-desktop\.jpg$/.test(f))
  : undefined;
if (before) crop(`${shots}/before/${before}`, `${out}/old-site-home-desktop.jpg`, 1440, 900);
