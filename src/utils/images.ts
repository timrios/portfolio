import type { ImageMetadata } from "astro";
import { getImage } from "astro:assets";

const images = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/images/**/*.{jpg,jpeg,png,webp,avif}",
  {
    eager: true,
  },
);

/** Look up an image in src/assets/images/ by its path there, e.g. "fanzi-pet/logo.webp" */
export function asset(path: string): ImageMetadata {
  const image = images[`../assets/images/${path}`];
  if (!image) throw new Error(`Image not found: src/assets/images/${path}`);
  return image.default;
}

/** URL of a resized copy, for places that need a plain link (social previews) */
export async function imageUrl(path: string, width = 1600, format: "webp" | "jpg" = "webp") {
  const src = asset(path);
  const image = await getImage({ src, width: Math.min(width, src.width), format });
  return image.src;
}
