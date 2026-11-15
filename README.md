# timrios.dev

The source of [timrios.dev](https://timrios.dev), my portfolio site: real client work (websites, brands, local
search, social media) shown to local business owners, so they get in touch through the contact form. Built with Astro
and TypeScript, deployed to Cloudflare Workers from this repo on every push to `main`. The code is public so anyone
can see how it's made; the content and client work are mine and my clients'.

This README is a map for whoever continues the project, human or AI. It says where everything is and where the
project stands. The rules for making changes are in `CLAUDE.md` and the visual design system is in `DESIGN.md`.

**The raw case-study material is private** (2026-11-14): `case-studies/` is its own private repo,
`timrios/portfolio-notes`, kept at the same path and git-ignored here, so client notes, numbers that aren't published
and business terms never reach this public repo. It also holds the original site plan and brand brief
(`case-studies/site-plan.md`). Commit and push notes from inside `case-studies/`.

## Start here

1. **`CLAUDE.md`**: project rules, including what may be published from a case study. Read it before editing anything.
2. **`DESIGN.md`**: the design system (live oak green, daylight and after-hours looks, phone first).
3. **`case-studies/site-plan.md`** (private notes repo): why the site is the way it is.

## Where everything is

```
portfolio/
├── README.md, CLAUDE.md, DESIGN.md
├── case-studies/          ← PRIVATE notes repo (git-ignored here): raw notes and screenshots per client, site plan
│   ├── fanzi-pet/
│   ├── hair-by-christopher/
│   ├── shawarma-way/
│   ├── agsa-flyers/
│   └── miros-wings/
├── _compare/              ← throwaway mockups and reference shots while deciding (not in git; emptied once decided)
├── scripts/
│   ├── project-screens.mjs← crops a client's screenshots into the site's images
│   └── resume-pdf.mjs     ← the resume as a PDF
├── public/                ← files that need a fixed address
└── src/                   ← the site
```

| Need to…                                   | Look in                                                       |
| ------------------------------------------ | ------------------------------------------------------------- |
| Change wording on the home, contact or 404 page | `src/data/site.ts`                                       |
| Add or change a client project             | `src/data/projects.ts` (and its images in `src/assets/images/<client>/`) |
| Change the services or the "How it works" steps | `src/data/services.ts`, `src/data/process.ts`            |
| Change a color, font or spacing value      | `DESIGN.md`, then `src/styles/global.css`                     |
| Change how a section looks or works        | `src/components/`                                             |
| Change where the contact form sends to     | `formEndpoint` in `src/data/site.ts` (Formspree)              |
| Record a client milestone                  | `case-studies/<client>/notes.md`                              ||

## Adding to a case study

- Add a line to the client's `notes.md` whenever a milestone lands: a launch, a Reel the client loves, good numbers,
  a before/after.
- Website screenshots: `npm run client-shots -- case-studies/<client>/screenshots/after home=https://… grooming=https://…`
  (phone and desktop, full page; needs Playwright installed globally). Convert to JPEG to keep the repo small.
  If a site's bot protection (a Cloudflare "Verify you are human" page) blocks the capture, don't try to get around
  it: use the newest Internet Archive copy (`https://web.archive.org/web/<timestamp>if_/<url>`, where `if_` hides the
  archive's toolbar), or take the shots by hand in Brave: open the page, ⌥⌘I, ⌘⇧M (Responsive, width 1440;
  turn Shields off for the site first), then ⌘⇧P → "Capture full size screenshot". Trim any blank space below the
  footer and scale to 1440 wide before converting to JPEG. Check every shot: a blocked one is a small,
  single-screen image of the verification page. A phone shot taller than 65,535 pixels won't fit in a JPEG: save it
  at half width.
- Internet Archive captures (when a client's site has changed or is gone, as with AGSA): list a site's yearly
  captures with `https://web.archive.org/cdx/search/cdx?url=<domain>/&output=txt&fl=timestamp&collapse=timestamp:4`,
  look at several years, and capture the cleanest one. Captures can lose images (an empty slideshow box) or open with
  a pop-up over the page. The Archive is sometimes offline for a while; try again later.
- Big media (Reels, raw footage) stays where it lives (`~/Movies/<Client>/`); notes point to it.
- To show a project on the site, write its public copy into `src/data/projects.ts` (see `CLAUDE.md` → Case studies).

### Adding a new client project

The whole life of a project, from the first day to the portfolio page. Steps 1–3 happen in every client project
(they're in Tim's global instructions too); steps 4–8 put it on the site.

1. **Day one:** create `case-studies/<id>/notes.md` (`<id>` is kebab-case, like `fanzi-pet`; it becomes the page
   address `/work/<id>/`). Capture the "before": the current site with `npm run client-shots` into
   `screenshots/before/`, and the social profiles.
2. **As work happens:** add a dated line to `notes.md` for every milestone, decision and number.
3. **When the new site is up** (live or a development preview): capture `screenshots/after/` the same way.
4. **Screens for the site:** `npm run project-screens -- <id> home menu` crops the first screen of each page named
   (desktop), the home page on a phone, and the old site's home page into `src/assets/images/<id>/`.
5. **Brand work and photos:** add the client's logo, packaging, wraps or signs to `src/assets/images/<id>/`
   (full size; from the client's project or Tim's design files), each with a `treatment`
   (`photo`, `artwork`, `artwork-on-light`; `wide` for a design proof).
6. **The entry:** copy an existing project in `src/data/projects.ts` and rewrite it from the notes, in plain English.
   - `accent`: the client's brand color. The build refuses one darker than 4.5:1 on black, with a message saying
     to use the client's lighter tint.
   - `status`: `in-progress` with the preview address, or `live` with the real domain.
   - `code`: a real excerpt (15–20 lines) of the client site's hero markup, shown behind the preview window while it loads.
   - Results need a `source` with the month the numbers were read.
7. **Proof:** if this project is a better example of a service, point that service in `src/data/services.ts` at it.
   Update the home page's work intro (`site.ts` → `workIntro`) if it names the kinds of businesses.
8. **Check and look:** `npm run check`, then `npm run shots` and look at the home page and the new project page at
   phone and desktop sizes. Commit and push (pushing deploys).

### When there are more projects

The home page shows every project as a before/after, and every project is a choice in the hero's switcher. That works up to
about five. Past that (decided 2026-11-04, build it when the sixth project arrives):

- Add `featured: true` to the best three to five projects. Only those appear in the switcher and as before/afters on
  the home page, followed by a "See all work" link.
- Add a `/work/` page listing every project, newest first, so the range of businesses stays visible, with simple
  filters by kind of business and by service (website, brand, social media, local search).
- Project pages and the "Next project" links stay as they are.

### Clients

| Client | Folder | On the site |
|---|---|---|
| Fanzi Pet | `case-studies/fanzi-pet/` | Yes |
| Hair By Christopher | `case-studies/hair-by-christopher/` | Yes |
| ShawarmaWay | `case-studies/shawarma-way/` | Yes, in progress |
| Acrobatic Gymnastics of San Antonio | `case-studies/agsa-flyers/` | Yes, as a past project |
| Miro's Wings (food truck) | `case-studies/miros-wings/` | Not yet |

## Running the site

Requires Node 24 (`.node-version`).

```
npm install
npm run dev          # local dev server at http://localhost:4321
npm run check        # type check + production build
npm run shots        # screenshot every page as phones and desktops (needs global Playwright and a running server)
npm run phone-check  # measure sideways scroll, small targets and small fields on every page (needs a running server)
npm run format       # Prettier
npm run resume-pdf   # the resume as a PDF for employers, with the phone from .env (needs a running server)
```

`npm run shots` reads the page list from the built sitemap, so run it against `npm run build && npm run preview`
(or pass the address: `npm run shots -- http://localhost:4322`).

### Social preview

The home page's link preview is `src/assets/images/social/home.jpg`: the first 1200×630 of the home page at double
resolution, with reduced motion so the question box rests on its first example. Retake it whenever the hero changes. Project pages use
the client's desktop screenshot.

### Deploying (Cloudflare Workers)

Live at https://timrios.dev. Cloudflare builds and deploys on every push (Workers & Pages → `timrios` → Settings →
Build). Pushes to `main` deploy the site; other branches create a preview.

| Setting                              | Value                                                                     |
| ------------------------------------ | ------------------------------------------------------------------------- |
| Build command                        | `npm run build`                                                           |
| Deploy command                       | `npx wrangler deploy`                                                     |
| Non-production branch deploy command | `npx wrangler preview` (turn on builds for non-production branches)       |
| Environment variable                 | `SITE_INDEXABLE=true`, only once timrios.dev points at the Worker         |

- `wrangler.jsonc` is the Worker config. Its `name` must match the Worker's name in the Cloudflare dashboard.
- The site is static, so the Worker only serves files from `dist/`; there is no server code.
- **Branch previews need the `previews` block in `wrangler.jsonc`** (already there, empty).
- **Don't switch the branch deploy command to `npx wrangler versions upload`.** It fails with the misleading "The
  name in your wrangler.jsonc file must match the name of your Worker".
- **Pushes stopped triggering builds?** Disconnect and reconnect the repo in Settings → Build, check the build and
  deploy commands against this table, then push a new commit. "Retry build" only rebuilds the last commit.
- **Email:** timrios.dev's mail is hosted outside Cloudflare. Never change the domain's mail records (MX, SPF, DKIM
  and the mail host's verification record), and keep Cloudflare Email Routing off: it would take over the mail.
- **Search engines:** `robots.txt` disallows everything unless the build has `SITE_INDEXABLE=true`. It is set, so
  timrios.dev is open to search engines (2026-11-07).
- **The `workers.dev` address is switched off** (Worker → Settings → Domains & Routes, 2026-11-07), and branch preview
  URLs are off too. Turn one on only when needed. As a backstop, `public/_headers` marks that address `noindex`, so
  timrios.dev stays the only indexable copy if it is ever re-enabled. Update the rule if the Worker moves accounts.

## Status

The task list (to do, in progress, recently completed) and the older finished tasks are kept private, in the notes
repo: `case-studies/STATUS.md` and `case-studies/DONE.md`.

## Decisions already made

Don't reopen these without asking Tim.

- **Name and domain:** Tim Rios at timrios.dev; hello@timrios.dev.
- **No prices or packages** on the site; every job is quoted to fit.
- **Business terms** (payment, upkeep, ownership): what clients see is in `src/data/questions.ts` ("Before you ask"); the decisions behind them are in the private notes repo.
- **Look:** "Open for Business" (DESIGN.md, 2026-11-06). Results first, the work speaks for itself (no photo of Tim on the home page). Live oak green family with one marigold accent; opens light, with "after hours" dark by the visitor's choice. Client colors appear only as small markers. Earlier looks were rejected or set aside: borrowed client color, proof yellow, olive (read as a wellness site), Prussian blue with a star band.
- **Contact:** text (210) 802-8851, or the form. Timing stated: most websites in 2 to 4 weeks. No prices.
- **Framework:** Astro, static; contact form through Formspree. No Tailwind, React, UI kits or animation libraries: nothing added unless it brings a real benefit, never to pad a resume (Tim, 2026-11-04). Motion uses the browser's own CSS and small scripts.
- **Every site gets its own elements** (Tim, 2026-11-04): no shared component kit across client sites; each one's pieces come from that business.
- **Hosting:** Cloudflare Workers, Worker name `timrios`, deployed from GitHub on every push to `main`.
- **Launched for search** (2026-11-07): `SITE_INDEXABLE=true` is set and the sitemap is submitted. Before that, the site was
  treated as a development site with search engines blocked (Tim, 2026-11-04).
- **What's public:** client permission is assumed for case-study material; Tim names any exceptions.

## Repository

- GitHub: https://github.com/timrios/portfolio (public since 2026-11-14; recreated that day so no old history with private notes survives on GitHub; branch `main`, protected by the "Protect main" ruleset). Case-study notes: https://github.com/timrios/portfolio-notes (private), checked out at `case-studies/`. The key and commit identity come from `~/.ssh/config` and `~/.gitconfig`.
