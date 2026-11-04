import type { APIRoute } from "astro";

// Search engines stay out until launch: the Cloudflare build sets SITE_INDEXABLE=true once timrios.dev points here,
// so the workers.dev preview is never indexed.
export const GET: APIRoute = ({ site }) => {
  const indexable = process.env.SITE_INDEXABLE === "true";
  const body = indexable
    ? `User-agent: *\nAllow: /\n\nSitemap: ${new URL("sitemap-index.xml", site).href}\n`
    : "User-agent: *\nDisallow: /\n";
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
