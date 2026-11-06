// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://timrios.dev",
  trailingSlash: "always",
  // Self-hosted from src/assets/fonts so no text waits on a third party. Mona Sans is one variable file carrying the
  // weight and width axes the headlines use; both files are subset to the site's characters. See DESIGN.md → Typography.
  fonts: [
    {
      provider: fontProviders.local(),
      name: "Mona Sans",
      cssVariable: "--font-mona-sans",
      fallbacks: ["system-ui", "sans-serif"],
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/mona-sans-variable-latin.woff2"],
            weight: "200 900",
            stretch: "75% 125%",
            style: "normal",
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: "DM Mono",
      cssVariable: "--font-dm-mono",
      fallbacks: ["ui-monospace", "monospace"],
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/dm-mono-400-latin.woff2"],
            weight: "400",
            style: "normal",
          },
          {
            src: ["./src/assets/fonts/dm-mono-500-latin.woff2"],
            weight: "500",
            style: "normal",
          },
        ],
      },
    },
  ],
  // The thank-you and 404 pages aren't for search engines
  integrations: [sitemap({ filter: (page) => !/\/(thank-you|404)\/$/.test(page) })],
});
