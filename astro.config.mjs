// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://timrios.dev",
  trailingSlash: "always",
  // Self-hosted from src/assets/fonts so no text waits on a third party. Bricolage is one variable file carrying
  // the weight, width and optical-size axes the headlines use; see DESIGN.md → Typography.
  fonts: [
    {
      provider: fontProviders.local(),
      name: "Bricolage Grotesque",
      cssVariable: "--font-bricolage",
      fallbacks: ["system-ui", "sans-serif"],
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/bricolage-grotesque-variable-latin.woff2"],
            weight: "200 800",
            stretch: "75% 100%",
            style: "normal",
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: "Fragment Mono",
      cssVariable: "--font-fragment-mono",
      fallbacks: ["ui-monospace", "monospace"],
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/fragment-mono-400-latin.woff2"],
            weight: "400",
            style: "normal",
          },
        ],
      },
    },
  ],
  // The thank-you and 404 pages aren't for search engines
  integrations: [sitemap({ filter: (page) => !/\/(thank-you|404)\/$/.test(page) })],
});
