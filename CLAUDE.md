# CLAUDE.md

Instructions for Claude Code (and anyone else) making changes to this project. Read this file before every change, even small ones. Read `DESIGN.md` too for any visual change, and `~/Projects/dev-setup/knowledge/web/Web work rules.md` for design work (it says when to add the design lessons). A copy or data edit needs only this file. Work on this site happens in separate sessions, so these files are what keeps it consistent.

## Project

Tim Rios's portfolio site, timrios.dev: real client work (websites, brands, local search, social media) shown to local business owners, to win new clients through the contact form. This repo is public; the raw case-study material lives in `case-studies/`, a separate private repo checked out at that path and git-ignored here. Never copy notes, unpublished numbers, prices or business terms into tracked files.

- **Framework:** Astro (static), chosen because the site has no accounts or database; the contact form posts to Formspree. See "Choosing the stack" in `~/Projects/project-starter/README.md`.
- **TypeScript** throughout, in strict mode.
- `DESIGN.md` is the single source of truth for colors, fonts, spacing and UI patterns.
- `AGENTS.md` is Astro's own note for coding agents (running the dev server in the background, docs links).

## Directory structure

```
CLAUDE.md            ← project rules (this file)
DESIGN.md            ← visual design system
README.md            ← project map, status and decisions
case-studies/        ← PRIVATE notes repo (timrios/portfolio-notes, git-ignored here): raw notes and screenshots per
                       client, site-plan.md (the plan and brand brief), STATUS.md and DONE.md (the task list). NEVER published or imported by the site
_compare/            ← throwaway mockups and reference shots while deciding (git-ignored; emptied once decided)
scripts/
  shots.mjs          ← screenshots of every page of this site, phone and desktop
  phone-check.mjs    ← measures sideways scroll, small targets and small fields on every page
  client-shots.mjs   ← screenshots of a client's live site, for case studies
  project-screens.mjs← crops a client's screenshots into the site's images
  resume-pdf.mjs     ← the resume as a PDF
src/
  pages/             ← routes (index, work/[id], about, contact, resume, how-this-site-was-built, 404, robots.txt)
  components/        ← reusable UI components
  layouts/           ← BaseLayout (head, header, footer)
  utils/             ← helpers (image lookup)
  data/              ← all site content
  styles/            ← global CSS and design tokens
  assets/images/     ← images used by the site, one folder per client plus social/ and brand/ (Tim's logo files and his illustrated portrait)
  assets/fonts/      ← self-hosted font files
public/              ← only files that need a fixed address (favicons; media/reels/: the Reel clips; _headers: browser caching rules)
```

### What goes where

| Directory            | Contains                                                         | Does not contain                                     |
| -------------------- | ---------------------------------------------------------------- | ---------------------------------------------------- |
| `src/pages/`         | One file per URL. A page loads data and composes components      | Reusable components, helpers, hard-coded content     |
| `src/components/`    | Reusable UI pieces, including the header and footer              | Page-specific one-offs, hard-coded content           |
| `src/utils/`         | Helpers                                                          | UI components                                        |
| `src/data/`          | Content files                                                    | Logic, markup                                        |
| `src/styles/`        | Global CSS: reset, base element styles, tokens from `DESIGN.md`  | Component-specific styles                            |
| `src/assets/images/` | Site images, grouped by client (`fanzi-pet/`), plus `social/`    | Images loaded from external URLs                     |
| `case-studies/`      | Raw notes (`notes.md`) and full-page screenshots per client      | Anything the site imports                            |

## Data rules

1. **All content lives in `src/data/`.** Components get content through props or by importing data. Never hard-code copy in a component or page. What each file holds, and the rules specific to it (quotes, build-notes figures, resume phone number), are in `src/data/README.md`; read it before editing a data file.
2. **A fact lives in exactly one file.** The email address is in `site.ts`; copy that mentions it uses `{email}`, filled in by the page.
3. **Key and value conventions:** keys in `camelCase`; each record has a stable kebab-case `id`; `null` for a missing value, not `""`.
4. **One subject per file**, named in kebab-case after its content.
5. Every data file is validated with zod at build time, so a malformed edit fails the build instead of breaking the live site.
6. Before adding a new data file, check whether an existing one should hold the data instead.

### Case studies and what may be published

- Raw material goes in `case-studies/<client>/notes.md` (see `README.md` → Adding to a case study). Public copy in `projects.ts` is written fresh from it, plain English, never pasted.
- **Client permission is assumed** for case-study material (numbers, results, quotes, revenue growth as a percentage), unless Tim marks an item as off-limits in the client's notes.
- **Never published:** actual revenue amounts, customer details, Tim's internal tools and costs, and private research told as the client's mistakes. Old sites are shown kindly, as a starting point.
- **Unfinished client work may be shown** (Tim, 2026-11-04): set `status: "in-progress"` and point `liveUrl` at the development preview; the site marks it "In progress" and labels the link "Preview". At the client's launch, switch to `status: "live"` and the real domain. AI placeholder photos on a preview are named as placeholders in the copy and captions.
- Every result names its source and the month it was read (`results.source`).
- Customer and client quotes are used word for word; trim with "…", never reword.

## Component rules

- One component per file, named in `PascalCase`, with typed props.
- Use only the CSS variables from `src/styles/global.css` for colors, fonts, spacing and radii. Never raw hex values or pixel font sizes. Exceptions: a client's brand color comes from `projects.ts` and is set as `--client` inline, for its marker; the before/after slider's handle and tags use the white and ink palette tokens directly, because they sit on client screenshots in both looks.
- **Two looks.** Every color must come from a semantic token so it works in light and dark (`html[data-theme]`, DESIGN.md → Color). Check new pairings in both.
- Components are presentational: they take props (or read data) and render.
- Use `Img` for every image.
- **Sizes:** build at phone size first, then widen. `.only-phone` and `.only-wide` (global) keep something at one size, and a lazy image inside them isn't downloaded at the other. `.tap` gives a link inside text a 44px target without moving its lines.
- **Site-wide pieces in `BaseLayout`:** `Dock` (the phone menu; it hides for the closing band, the keyboard and printing), `WindowLight` (still on phones, follows the San Antonio sun on desktop) and the `#star` symbol, placed with `Star`.

## Page rules

- Every page sets its own title, description and social preview image. The home preview is `src/assets/images/social/home.jpg`, a capture of the home page's opening; retake it when the hero changes (README → Social preview).
- Project pages are generated from `projects.ts` at `/work/<id>/`; the social preview is the client's desktop screenshot.
- The 404 page is `noindex` and out of the sitemap.
- Search engines are open (`SITE_INDEXABLE=true`, launched 2026-11-07); `robots.txt` (`src/pages/robots.txt.ts`) disallows everything unless the build has `SITE_INDEXABLE=true`.

## Integrations and secrets

- **Formspree:** delivers contact-form messages to hello@timrios.dev. The form address is public by design (`formEndpoint` in `site.ts`); there are no secret keys.
- **Email:** hello@timrios.dev is hosted outside Cloudflare. Never change the domain's mail records, and keep Cloudflare Email Routing off: it would take over the domain's mail.
- Never commit `.env` or `.dev.vars` files. Keep `.env.example` up to date with every variable name and no values.

## Images

- Store every image in `src/assets/images/<client>/`. Never hotlink.
- Add full-size originals; the build makes compressed WebP copies. Screenshots are cropped (not resized) from the case-study captures. The social preview stays JPG.
- File names are kebab-case and descriptive.
- Every image has meaningful alt text. A screenshot inside a link that repeats a text link has `alt=""` and the link is hidden from screen readers.
- Choose each image's `treatment` (DESIGN.md → Imagery). Client artwork is never recolored or redrawn.
- **Pictures of Tim** (his portrait or any new one) follow his signature illustration style: read `~/Projects/dev-setup/knowledge/Tim's signature art style (Nov 2026).md` first. The portrait is on the About page only, framed, never cut out (DESIGN.md → Imagery).
- Client brand files come from that client's project (Fanzi: `~/Projects/FanziPet/src/assets/images/` and `social/ai-style/refs/`).

## Workflow for changes

1. Read `CLAUDE.md`. For a visual change also read `DESIGN.md`; for design work also read `~/Projects/dev-setup/knowledge/web/Web work rules.md`, which says when the design lessons and catalogue are needed. A copy or data edit needs only `CLAUDE.md`.
2. **Content change:** edit the files in `src/data/`.
3. **New client project:** follow `README.md` → Adding a new client project (notes, `npm run project-screens`, images, the `projects.ts` entry; the build checks the accent against black). Past five projects, build the plan in README → When there are more projects.
4. **Visual change:** update `DESIGN.md` first, then the CSS variables, then the components.
5. Reuse existing components, layouts and tokens before creating new ones.
6. When you add a convention, data file or design token, record it in this file or `DESIGN.md` in the same change.
7. Run `npm run check` and fix every error before calling a change done. Before testing against a server, check whether it is `astro dev` or `astro preview`: preview serves the last build, so it needs `npm run build` first. For visual changes, also run `npm run shots` and `npm run phone-check` against a running server and look at the screenshots in `screenshots/`.
8. Before calling any change done, check the private task list, `case-studies/STATUS.md`, for a matching task (or one the change partly finishes) and tick it, moving it to **Recently completed**, in the same change (older finished tasks live in `DONE.md`). Do this even when the task wasn't what you were asked about by name.
9. Use the `frontend-design` skill for any UI work.
