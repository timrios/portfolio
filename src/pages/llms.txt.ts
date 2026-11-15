// /llms.txt: a plain-text summary for AI assistants (https://llmstxt.org), built from the same data as the site
import type { APIRoute } from "astro";
import { site } from "../data/site";
import { projects } from "../data/projects";
import { services } from "../data/services";

const page = (path: string) =>
  new URL(path, site.domain.startsWith("http") ? site.domain : `https://${site.domain}`).href;

export const GET: APIRoute = () => {
  const text = `# ${site.name}

> ${site.description}

Based in ${site.city}, ${site.region}. Every job is quoted to fit, so there is no price list. Contact: ${site.email}, or text ${site.phone}.

## What I do

${services.map((s) => `- ${s.name}: ${s.text}`).join("\n")}

## Work

${projects.map((p) => `- [${p.name}](${page(`/work/${p.id}/`)}): ${p.business}. ${p.summary}`).join("\n")}

## Pages

- [About](${page("/about/")}): background and how I work
- [Resume](${page("/resume/")})
- [Contact](${page("/contact/")}): contact form, or text ${site.phone}
- [Privacy Policy](${page("/privacy-policy/")})
`;

  return new Response(text, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
