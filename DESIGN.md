# DESIGN.md

The design system for timrios.dev, Tim Rios's portfolio. Every visual decision is recorded here. Components get these
values only through the CSS variables in `src/styles/global.css`. When a value changes, update this file first, then
the CSS, then the components.

## The brief

- **Subject:** Tim Rios designs websites, brand identities (logos, packaging, vehicle wraps, signs) and social media
  for local businesses, so everything a customer sees looks like one business. Every project looks different,
  because each is designed from the client's own business.
- **Audience:** owners of local businesses (groomers, stylists, restaurants, food trucks) who need a new website and
  often a brand to match. Mostly on phones, arriving from a referral, a card or a search. Not designers: they want
  proof it worked for a business like theirs, and a person they can trust.
- **Main job:** send the contact form. No prices or packages anywhere; every job is quoted to fit.
- **Personality (Tim's words, Nov 2026):** **sharp**, attention to the finest details; **bold**, touches that make a
  statement even on mundane things; **premium**, quality, care and time in every facet. A dark, code-editor feel,
  techy without being generic tech. Clean, every element purposeful and chosen, never just inserted.
- **Materials of this world:** the code editor (a cursor, file names, code being built), and print (paper, ink traps,
  the van wraps and bags Tim designs).

## Principles

1. **The work is the hero.** The client's site, logo and photos carry the color and the richness. Tim's frame stays
   black and paper.
2. **Borrowed color (signature).** Tim has no accent color of his own. The accent is the brand color of the client on
   screen: the build line, the active-project cursor and the main button turn Fanzi's seafoam while Fanzi shows,
   Christopher's gold while he shows. The color proves that every project is unique.
3. **One signature motion: the build.** On the home page, a real client site builds down the screen over its own code.
   It plays once on arrival and again when a visitor picks a project. Nothing else on the site moves on its own.
4. **Code is styling, never homework.** Monospace appears only where it's true: project ids (`fanzi-pet`), which read
   like file names, and the decorative code behind the build. Everything a visitor must read is plain English.
5. **Proof next to every claim.** A service names the project it was done for; results name their source and date.

## Brand

- **Name:** Tim Rios. **Domain and email:** timrios.dev, hello@timrios.dev.
- **Voice:** plain, warm, confident, first person ("I"). Short sentences in sentence case. No jargon, no hype.
- **Logo:** not designed yet (Tim will design it). Until then the header shows the wordmark `timrios.dev` set in the
  display face, condensed 700. When the logo arrives it replaces the wordmark in `Header.astro` only.

## Color

### Palette

| Token            | Hex       | Name     | Where it comes from                                        |
| ---------------- | --------- | -------- | ---------------------------------------------------------- |
| `--color-black`  | `#000000` | Black    | The editor at night; true black, not a tinted near-black   |
| `--color-paper`  | `#F2EEE6` | Paper    | Warm paper white: Tim designs for print too                |
| `--color-ash`    | `#9C978F` | Ash      | Secondary text                                             |
| `--color-graphite` | `#26241F` | Graphite | Hairline rules between sections and rows (decorative)    |
| `--color-pewter` | `#6B675F` | Pewter   | Form field and checkbox edges                              |
| `--color-soot`   | `#0A0A09` | Soot     | Raised surfaces: the build stage, form fields              |
| `--color-smoke`  | `#4A4741` | Smoke    | The decorative code behind the build. Never for real text  |
| `--color-flare`  | `#FF8A7A` | Flare    | Error messages only                                        |

### Semantic tokens

Components use these, never the palette tokens directly (exception: the paper mat for client artwork drawn for light
backgrounds uses `--color-paper`).

| Token            | Value              | Use                                             |
| ---------------- | ------------------ | ----------------------------------------------- |
| `--bg`           | black              | Page background                                 |
| `--surface`      | soot               | Build stage, form fields                        |
| `--text`         | paper              | Primary text                                    |
| `--text-muted`   | ash                | Secondary text                                  |
| `--rule`         | graphite           | Hairlines                                       |
| `--field-border` | pewter             | Edges of form fields and checkboxes (3:1 rule)  |
| `--code`         | smoke              | Decorative code                                 |
| `--accent`       | paper, or borrowed | Main button, active-project cursor, build line, link underlines |
| `--on-accent`    | black              | Text on the accent                              |
| `--focus`        | `--accent`         | Focus outlines                                  |
| `--error`        | flare              | Form errors                                     |

### Borrowed accent

- Each project's brand color is `accent` in `src/data/projects.ts` (it belongs to the client, so it lives with the
  client's data, not in the palette). Pages set it on `<body>`; project rows and links set it locally.
- **Rule for a new client's color:** it must reach **4.5:1 against black**, because it fills the main button under
  black text and colors result figures. If the client's main color is too dark, use their lighter brand tint (Fanzi:
  seafoam `#9ADBD4`, not the deep teal).
- Pages without a client (contact, 404) use paper as the accent.

### Approved pairings

Measured with the WCAG formula. AA needs 4.5:1 for normal text, 3:1 for large text and for UI component edges.

| Text / element           | Background | Ratio | Use                              |
| ------------------------ | ---------- | ----- | -------------------------------- |
| paper                    | black      | 18.2  | All primary text                 |
| paper                    | soot       | 17.1  | Text in form fields              |
| ash                      | black      | 7.2   | Secondary text                   |
| ash                      | soot       | 6.8   | Placeholders                     |
| black                    | paper      | 18.2  | Main button (no client), ticked options |
| flare                    | black      | 9.2   | Error messages                   |
| black / Fanzi seafoam `#9ADBD4` | either way | 13.5 | Fanzi accent                |
| black / Christopher gold `#C7A46C` | either way | 9.0 | Christopher accent         |
| pewter edge              | black      | 3.7   | Form field and checkbox edges    |
| **Never:** smoke (2.1) or graphite (1.4) for text or for anything a visitor must see | | | |

## Typography

| Token            | Font                                                       | Role                          |
| ---------------- | ---------------------------------------------------------- | ----------------------------- |
| `--font-display` | **Bricolage Grotesque** (variable), fallback system-ui     | Headlines, condensed and heavy |
| `--font-body`    | **Bricolage Grotesque**, text optical size                 | Body, nav, buttons, forms     |
| `--font-mono`    | **Fragment Mono**, fallback ui-monospace                   | Project ids, small data labels, decorative code |

**Why:** Bricolage condensed at 800 is bold and premium at headline size, and its ink traps (notches where strokes
meet, a print-craft detail) are visible up close: "sharp" in the literal sense. At small sizes its text optical size
reads plainly. Fragment Mono is a quiet monospace for the editor details.

**Loading:** self-hosted from `src/assets/fonts/` through Astro's font API (local provider), so no text waits on a
third party. Bricolage is one variable file with three axes, set with `font-variation-settings`:
- Headlines: `"opsz" 96, "wdth" 75`, weight 800.
- h3 and small headings: `"opsz" 32, "wdth" 85`, weight 700.
- Body: `"opsz" 14`, normal width, weight 400 (600 for emphasis and buttons).

### Type scale

| Token           | Size                          | Font                           | Use                        |
| --------------- | ----------------------------- | ------------------------------ | -------------------------- |
| `--text-display`| `clamp(3.25rem, 8.2vw, 9rem)` | display 800, line-height 0.88  | Home headline, page titles |
| `--text-1`      | `clamp(2.75rem, 6.4vw, 6.5rem)` | display 800, line-height 0.9 | Closing heading, next project |
| `--text-2`      | `clamp(2.125rem, 4.2vw, 3.75rem)` | display 800, line-height 0.95 | Section headings, result figures |
| `--text-3`      | 1.5rem                        | display 700, line-height 1.15  | Card and step titles       |
| `--text-lede`   | 1.1875rem                     | body 400, line-height 1.6      | Intros                     |
| `--text-body`   | 1.0625rem                     | body 400, line-height 1.6      | Body                       |
| `--text-small`  | 0.9375rem                     | body 400                       | Captions, labels           |
| `--text-mono`   | 0.875rem                      | mono 400                       | Project ids, service tags  |

- Line length: body text max 38rem (`--content-narrow`).
- No all-caps labels, no letter-spaced eyebrows, no arrows appended to links or buttons, no single highlighted word in
  a headline.

## Layout

- **Content width:** `--content-max` 90rem; `--content-narrow` 38rem for reading.
- **Gutters:** 1.25rem on phones, 2.5rem from `md`.
- **Section padding:** `--section`, `clamp(4.5rem, 10vw, 8.5rem)`; project-page blocks use `--space-9`.
- **Hairlines** separate sections and rows. Everything aligns to the left edge of the content column.

```
Home (desktop)
┌───────────────────────────────────────────────────────────┐
│ timrios.dev                        Work  How it works  Contact │
│ I make local businesses                                     │
│ look as good as they are.            (display, full width)  │
│ ┌ lede ─────────┐  ┌ build stage: client site over its code ┐ │
│ │ buttons       │  │                                        │ │
│ │ ▌fanzi-pet    │  │                                        │ │
│ │  hair-by-…    │  └ caption: name, kind · services ────────┘ │
├──────────────── Work: one row per project (text │ screens) ──┤
├──────────────── Services: 4 columns, each with proof ────────┤
├──────────────── How it works: 5 numbered steps ──────────────┤
├──────────────── Closing: heading, text, button ──────────────┤
└──────────────── Footer: email (large), note, © ──────────────┘

Project page: id, title, lede, facts row → desktop + phone screens →
blocks (label column │ heading, text, points, gallery) for Before, each
service and Results → next project → closing.
```

## Spacing

| Token        | Value   |
| ------------ | ------- |
| `--space-1`  | 0.25rem |
| `--space-2`  | 0.5rem  |
| `--space-3`  | 0.75rem |
| `--space-4`  | 1rem    |
| `--space-5`  | 1.5rem  |
| `--space-6`  | 2rem    |
| `--space-7`  | 2.5rem  |
| `--space-8`  | 3rem    |
| `--space-9`  | 4.5rem  |
| `--space-10` | 7rem    |

## Breakpoints

Mobile-first. CSS variables can't be used inside media queries, so write these values directly in `@media` rules and
keep them in sync with this table.

| Name | Min width |
| ---- | --------- |
| `sm` | 640px     |
| `md` | 768px     |
| `lg` | 1024px    |
| `xl` | 1280px    |

## Shape and elevation

Sharp by default: square corners say "precise".

| Token             | Value | Used on                                        |
| ----------------- | ----- | ---------------------------------------------- |
| `--radius-none`   | 0     | Buttons, fields, checkboxes, everything else    |
| `--radius-screen` | 3px   | Screenshots and the build stage (like a screen) |

No drop shadows. The only glow is the build line's, in the borrowed accent. A phone screenshot overlapping a desktop
one is separated by a 0.5rem ring of the page background.

## Interaction and motion

| Element            | Behavior                                                                          |
| ------------------ | --------------------------------------------------------------------------------- |
| **The build**      | `--hide` animates 100% → 0% over 2.6s, `--ease-build` `cubic-bezier(0.65, 0, 0.35, 1)`; a 2px accent line with a glow leads the reveal. Once on arrival, again on each project pick. Never loops. |
| **Accent change**  | Buttons and the build line ease to the new client color over 0.6s.                |
| **Primary button** | Hover darkens the fill 12%.                                                       |
| **Ghost button**   | Hover brightens the edge from graphite to ash.                                    |
| **Links**          | Underline in the accent, 2px, offset 0.25–0.3em.                                  |
| **404 cursor**     | Blinks four times, then rests (nothing blinks for more than five seconds).        |

### Reduced motion

With `prefers-reduced-motion: reduce`: no build (the site shows finished), no smooth scrolling, no transitions, the
404 cursor doesn't blink. Color changes still happen instantly.

## Components

- **Header:** wordmark left, three links right (the middle one hides under 480px).
- **Footer:** the email address at `--text-2`, one line on what Tim does, the borrowed-color note, the year.
- **BuildHero:** home opening (see Principles 3). The project list is a set of toggle buttons (`aria-pressed`); the
  active one shows a text cursor in the client's color.
- **ProjectRow:** one per project on the home page: id with color cursor, name, business and place, summary, service
  tags in mono, link to the project page; desktop screenshot with the phone screenshot overlapping its corner.
- **ServiceList:** four services, each with a proof link to the project it comes from, marked by a 2px accent rule.
- **ProcessSteps:** five numbered steps; numbers in the display face, ash.
- **Closing:** the "Tell me about your business" invitation with the main button.
- **Img:** every image; builds WebP copies at several widths.
- **Buttons:** `.btn--primary` (accent fill, black text), `.btn--ghost` (graphite edge).

## Imagery

- **Client work only**, never stock. Screenshots are cropped to the first screen (1440×900 desktop, phone at
  1290×2796) from the case-study captures.
- **Image treatments** (`treatment` in `projects.ts`): `photo` is cropped to fill its frame; `artwork` (logos) is shown
  whole on soot; `artwork-on-light` is shown whole on a paper mat, for artwork drawn for light backgrounds (Fanzi's
  logo). Client artwork is never recolored or redrawn.
- Every image has alt text describing what it shows; screenshots inside links that repeat a text link are hidden from
  screen readers.

## Accessibility

- Only the approved pairings above.
- A visible 2px focus outline (in the accent) with a 2px offset on every interactive element.
- "Skip to content" is the first focusable element.
- Every form field has a `<label>`; required fields say "(required)" and carry `aria-required`.
- Minimum touch target 44×44px.
- Ticked options are filled **and** show a check mark, so state never rests on color alone.
- Respect `prefers-reduced-motion` (see above).
