// Turns a photo into a halftone print: dots of one ink on transparent paper, bigger where the photo is darker, the
// way newspapers print photos. Made for Tim's portrait (print is part of his work), and rerun if the ink changes.
// Not AI: every dot is measured from the photo's own brightness.
//
// Usage: npm run halftone -- <photo> <output.png> [--crop x,y,w,h] [--width 1200] [--cell 11] [--ink #hex] [--angle 45]
//        [--levels 0.15,0.82]  brightness below the first prints solid ink, above the second stays bare paper
// Uses the globally installed Playwright (a browser canvas does the drawing).
import { execSync } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";
import { extname } from "node:path";
import { createRequire } from "node:module";

const require = createRequire(execSync("npm root -g").toString().trim() + "/");
const { chromium } = require("playwright");

const [input, output, ...rest] = process.argv.slice(2);
if (!input || !output) {
  console.error("Usage: npm run halftone -- <photo> <output.png> [--crop x,y,w,h] [--width 1200] [--cell 11] [--ink #hex]");
  process.exit(1);
}
const opt = Object.fromEntries(
  rest.reduce((pairs, arg, i, all) => (arg.startsWith("--") ? [...pairs, [arg.slice(2), all[i + 1]]] : pairs), []),
);
const type = { ".png": "image/png", ".webp": "image/webp" }[extname(input).toLowerCase()] ?? "image/jpeg";
// A data URL keeps the browser from treating the photo as off-limits ("tainted") for reading its pixels
const photo = `data:${type};base64,${readFileSync(input).toString("base64")}`;

const browser = await chromium.launch();
const page = await browser.newPage();
const png = await page.evaluate(
  async ({ photo, crop, width, cell, ink, angle, levels }) => {
    const [black, white] = levels.split(",").map(Number);
    const img = new Image();
    img.src = photo;
    await img.decode();
    const [cx, cy, cw, ch] = crop ? crop.split(",").map(Number) : [0, 0, img.width, img.height];
    const height = Math.round((width * ch) / cw);
    // Read the photo's brightness at the output size
    const src = Object.assign(document.createElement("canvas"), { width, height });
    const sctx = src.getContext("2d", { willReadFrequently: true });
    sctx.drawImage(img, cx, cy, cw, ch, 0, 0, width, height);
    const data = sctx.getImageData(0, 0, width, height).data;
    const lum = (x, y) => {
      const i = (Math.min(height - 1, Math.max(0, y | 0)) * width + Math.min(width - 1, Math.max(0, x | 0))) * 4;
      return (0.2126 * data[i] + 0.7152 * data[i + 1] + 0.0722 * data[i + 2]) / 255;
    };
    const out = Object.assign(document.createElement("canvas"), { width, height });
    const ctx = out.getContext("2d");
    ctx.fillStyle = ink;
    // Dots sit on a grid turned to the classic 45° screen angle
    const a = (angle * Math.PI) / 180, cos = Math.cos(a), sin = Math.sin(a);
    const reach = Math.hypot(width, height);
    for (let u = -reach; u < reach; u += cell) {
      for (let v = -reach; v < reach; v += cell) {
        const x = width / 2 + u * cos - v * sin, y = height / 2 + u * sin + v * cos;
        if (x < -cell || y < -cell || x > width + cell || y > height + cell) continue;
        // Average a few samples per cell; darker means more ink. A gentle curve keeps light skin from filling in.
        let dark = 0;
        for (const [dx, dy] of [[0, 0], [-cell / 4, -cell / 4], [cell / 4, -cell / 4], [-cell / 4, cell / 4], [cell / 4, cell / 4]]) dark += 1 - lum(x + dx, y + dy);
        // Levels, as in photo editing: near-white walls stay paper, near-black prints solid
        const light = 1 - dark / 5;
        dark = Math.min(1, Math.max(0, (white - light) / (white - black)));
        dark = Math.pow(dark, 1.1);
        const r = (cell / 2) * Math.sqrt(dark) * 1.18;
        if (r < 0.35) continue;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    return out.toDataURL("image/png");
  },
  { photo, crop: opt.crop ?? null, width: Number(opt.width ?? 1200), cell: Number(opt.cell ?? 11), ink: opt.ink ?? "#000", angle: Number(opt.angle ?? 45), levels: opt.levels ?? "0.15,0.82" },
);
await browser.close();
writeFileSync(output, Buffer.from(png.split(",")[1], "base64"));
console.log(output);
