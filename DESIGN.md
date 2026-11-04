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

Revised 2026-11-04 after Tim's review: the first version handed the whole identity to each client's color and Tim
disappeared. Tim now has his own ink, used the way good personal sites use one color: small, consistent, everywhere.

1. **Tim's own ink.** One accent, proof yellow, from the process inks a print shop runs (cyan, magenta, yellow, black):
   it's the highlighter on a printer's proof and the editor's text cursor, so it carries both halves of Tim's work. It
   appears in small places only: the cursor after a headline, the main button, link underlines, hover and focus, crop
   marks, the dot in the wordmark. Never a large fill except the portrait's print.
2. **The work is the hero, in its own colors.** Client sites, logos and photos keep their own colors inside their
   previews. A client's color appears on Tim's pages only as a small square marker beside its name.
3. **Print meets code.** The portrait is a halftone print in Tim's ink, framed with crop marks like a proof; the page
   background is a faint print screen of dots; headlines end in a text cursor; project names read like file names.
4. **Motion answers the visitor.** The dot screen swells toward the cursor (it never moves by itself); the build line
   sweeps down while a client's site loads in the preview window; nothing loops on its own except Reels, which have a
   pause button.
5. **Code is styling, never homework.** Monospace only where it's true (project ids, small captions). Everything a
   visitor must read is plain English.
6. **Proof next to every claim.** A service names the project it was done for; results name their source and date.

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
| `--color-proof-yellow` | `#FFE14D` | Proof yellow | Tim's ink: process yellow, the proof highlighter and the cursor |
| `--color-ash`    | `#9C978F` | Ash      | Secondary text                                             |
| `--color-graphite` | `#26241F` | Graphite | Hairline rules between sections and rows (decorative)    |
| `--color-pewter` | `#6B675F` | Pewter   | Form field and checkbox edges                              |
| `--color-soot`   | `#0A0A09` | Soot     | Raised surfaces: the build stage, form fields              |
| `--color-smoke`  | `#4A4741` | Smoke    | The decorative code behind the build. Never for real text  |
| `--color-flare`  | `#FF8A7A` | Flare    | Error messages only                                        |
| `--color-print-white` | `#FFFFFF` | Print white | Paper, when the resume is printed or saved as PDF only |
| `--color-print-gray`  | `#333333` | Print gray  | Secondary text on the printed resume only (12.6:1 on white) |

### Semantic tokens

Components use these, never the palette tokens directly (exception: the paper mat for client artwork drawn for light
backgrounds uses `--color-paper`).

| Token            | Value              | Use                                             |
| ---------------- | ------------------ | ----------------------------------------------- |
| `--bg`           | black              | Page background                                 |
| `--surface`      | soot               | Preview window, form fields                     |
| `--text`         | paper              | Primary text                                    |
| `--text-muted`   | ash                | Secondary text                                  |
| `--rule`         | graphite           | Hairlines                                       |
| `--field-border` | pewter             | Edges of form fields and checkboxes (3:1 rule)  |
| `--code`         | smoke              | Decorative code; the resting dots of the print screen |
| `--accent`       | proof yellow       | Main button, headline cursor, build line, link underlines, hover, crop marks |
| `--on-accent`    | black              | Text on the accent                              |
| `--focus`        | `--accent`         | Focus outlines                                  |
| `--error`        | flare              | Form errors                                     |

### Client colors

- Each project's brand color is `accent` in `src/data/projects.ts` (it belongs to the client, so it lives with the
  client's data). On Tim's pages it appears only as the small square marker beside the client's name (cards, project
  pages, the services' proof links) and as the In-progress tag's outline. It never recolors Tim's buttons or text.
- The build still checks each client color reaches 4.5:1 on black, so a marker or tag stays visible; for a dark brand
  color use the client's lighter tint (Fanzi: seafoam `#9ADBD4`, not the deep teal).

### Approved pairings

Measured with the WCAG formula. AA needs 4.5:1 for normal text, 3:1 for large text and for UI component edges.

| Text / element           | Background | Ratio | Use                              |
| ------------------------ | ---------- | ----- | -------------------------------- |
| paper                    | black      | 18.2  | All primary text                 |
| paper                    | soot       | 17.1  | Text in form fields              |
| ash                      | black      | 7.2   | Secondary text                   |
| ash                      | soot       | 6.8   | Placeholders                     |
| black                    | paper      | 18.2  | Ticked options                   |
| black                    | proof yellow | 16.1 | Main button, the portrait's print |
| proof yellow             | black      | 16.1  | Cursor, underlines, focus, crop marks |
| flare                    | black      | 9.2   | Error messages                   |
| Fanzi seafoam `#9ADBD4`, Christopher gold `#C7A46C`, AGSA tint `#FF4A4A`, Shawarma ember `#D9692A` | black | 13.5, 9.0, 6.2, 6.0 | Client markers only |
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
| **Print screen**   | A 22px grid of 1px dots behind every page, in smoke. Within 240px of the pointer they swell to 4px and take Tim's ink. Moves only with the pointer (fine pointers only); still on touch screens and with reduced motion. |
| **Preview window** | Opens over the page (the browser's own `<dialog>`: Escape and the backdrop close it). Nothing loads until it opens. While the client site loads, it's hidden and the build line sweeps down over a real excerpt of its code, 1.6s per sweep, `--ease-build`; the site appears when it has loaded. Desktop / Phone toggle; full screen on phones. |
| **Work cards**     | Hover or focus: a 2px ink outline, a "Browse the site" tag rises in, the screenshot scales 1.5%. |
| **Reels**          | Silent loops, load only near the screen, play only while visible; one Pause/Play button for all. Start paused under reduced motion. |
| **Primary button** | Hover darkens the fill 12%.                                                       |
| **Ghost button**   | Hover brightens the edge from graphite to ash.                                    |
| **Links**          | Underline in Tim's ink, 2px, offset 0.25–0.3em; text turns ink on hover.          |
| **404 cursor**     | Blinks four times, then rests (nothing blinks for more than five seconds).        |

### Reduced motion

With `prefers-reduced-motion: reduce`: the print screen stays still, the preview's line holds still instead of
sweeping, Reels start paused, no smooth scrolling, no transitions, the 404 cursor doesn't blink.

## Components

- **Header:** wordmark `timrios.dev` with the dot in Tim's ink, links right (the second one hides under 480px).
- **Footer:** the email address at `--text-2`, one line on what Tim does, a note on the yellow, the year.
- **PrintScreen:** the dot screen behind every page (see Interaction).
- **Hero:** the promise, ending in an ink cursor; Tim's portrait as a halftone proof.
- **Proof:** a figure framed by four crop marks in Tim's ink, with an optional two-part mono caption.
- **WorkGrid:** every project as a large card, two columns from `lg` with the second column dropped by `--space-10`
  so it reads as a spread. Screenshot opens the preview window; text: client marker and id, name, kind and place,
  summary, services in mono, "Read the story" and "Browse the site".
- **ProjectPreview:** the preview window (see Interaction). Shows the live site in a frame; a site that refuses
  framing (Fanzi, for now) shows its full-page capture, scrollable, with a note saying so.
- **ReelShelf:** Reels in phone frames, four across with alternate phones lower from `lg`, a swipe row below.
- **ServiceList:** four services, each with a proof link to its project, marked by a 2px rule in the client's color.
- **ProcessSteps:** five numbered steps; numbers in the display face, ash.
- **Closing:** the "Tell me about your business" invitation with the main button.
- **In-progress tag:** "In progress" in mono, outlined 1px in the client's color, beside the project id.
- **Img:** every image; builds WebP copies at several widths.
- **Buttons:** `.btn--primary` (ink fill, black text), `.btn--ghost` (graphite edge).

## Imagery

- **Tim's portrait:** `src/assets/images/tim/tim-rios-in-a-salon.jpg` (original), printed as a halftone with
  `npm run halftone` (black ink, 6px screen at 45°, levels 0.18–0.80) into `tim-rios-halftone.png`, shown on a
  proof-yellow card. Rerun the script if the ink or the photo changes; never edit the print by hand.
- **Client work only**, never stock. Screenshots are cropped to the first screen (1440×900 desktop, phone at
  1290×2796) from the case-study captures.
- **Image treatments** (`treatment` in `projects.ts`): `photo` is cropped to fill its frame; `artwork` (logos) is shown
  whole on soot; `artwork-on-light` is shown whole on a paper mat, for artwork drawn for light backgrounds (Fanzi's
  logo). Client artwork is never recolored or redrawn.
- **Wide** (`wide: true`): a design proof that needs room (Fanzi's wrap drawn on every side of the van) spans the
  gallery's full width at its own proportions, uncropped.
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
