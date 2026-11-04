# DESIGN.md

The design system for timrios.dev, Tim Rios's portfolio. Every visual decision is recorded here. Components get these
values only through the CSS variables in `src/styles/global.css`. When a value changes, update this file first, then
the CSS, then the components.

History: version 1 (black and paper, client colors borrowed as the accent) and version 2 (black and proof yellow,
halftone portrait) were both rejected by Tim on 2026-11-04: the first handed his identity to his clients, the second
felt claustrophobic and dated ("1999"), and neither would make a business owner hire him. Version 3, below, starts
from what convinces a buyer.

## The brief

- **Subject:** Tim Rios designs websites, brand identities (logos, packaging, vehicle wraps, signs), Google and Apple
  Maps listings and social media for local businesses, so everything a customer sees looks like one business.
- **Audience:** owners of local businesses of every kind (groomers, stylists, gyms, restaurants, food trucks). Mostly
  on phones. Not designers: they hire someone who will get them more customers and is easy to work with.
- **Main job:** get the owner to reach out: text Tim, or send the form. No prices; typical timing is stated (2 to 4
  weeks for most websites).
- **Tim's direction (2026-11-04):** the work speaks for itself, Tim is not the face of it. Results over personality.
  Clean, open, never claustrophobic. Diverse: show he adapts to any kind of business. Tasteful effects, each with a job.
- **Benchmarks Tim likes:** patrickgibbs.dev and rubenmarcus.dev: the buyer's problem as the headline, practical facts
  (timing) up front, proof (numbers, clients) before personality, generous space, calm type.

## Principles

1. **Results first.** The first screen says what the owner gets (more customers) and shows real work; the next shows
   real numbers, each tied to the kind of business it came from.
2. **The work brings the color.** Tim's frame is quiet: white (or graphite) and one blue. Client sites, logos and photos
   keep their own colors and are what the eye goes to.
3. **Room to breathe.** Normal-width type at moderate sizes, wide margins, generous section spacing. Nothing fills the
   screen edge to edge.
4. **Effects with a job.** Every effect explains something or answers the visitor: the before/after slider shows the
   change, the numbers count up once to draw the eye to results, the collage responds to the pointer to invite a closer
   look, the theme switch shows what changed. Nothing loops on its own except Reels, which can be paused.
5. **The visitor chooses light or dark.** Both looks are complete; the site starts in the device's own setting and
   remembers a choice.
6. **Proof next to every claim.** Results name their business and, on project pages, their source and date.

## Brand

- **Name:** Tim Rios. **Domain and email:** timrios.dev, hello@timrios.dev. **Text:** (210) 802-8851 (`site.ts`).
- **Voice:** plain, warm, confident, first person ("I"). Speaks to the owner's goals: customers, calls, bookings.
- **Logo:** not designed yet. The header shows the wordmark `timrios.dev` in the body face, weight 700.

## Color

Two complete looks. `html[data-theme]` holds the visitor's choice; with none, the device setting decides
(`prefers-color-scheme`). An inline script in the head applies a saved choice before the page paints, so there's no
flash of the wrong look.

### Palette

| Token                  | Hex       | Name        | Look  | Use                                   |
| ---------------------- | --------- | ----------- | ----- | ------------------------------------- |
| `--color-white`        | `#FFFFFF` | White       | Light | Page, cards                           |
| `--color-mist`         | `#F3F4F6` | Mist        | Light | Bands (results, closing), tags        |
| `--color-ink`          | `#111418` | Ink         | Light | Text                                  |
| `--color-slate`        | `#5A626D` | Slate       | Light | Secondary text                        |
| `--color-haze`         | `#E3E6EA` | Haze        | Light | Hairlines (decorative)                |
| `--color-steel`        | `#8A929C` | Steel       | Light | Form field edges                      |
| `--color-cobalt`       | `#2747D8` | Cobalt      | Light | Accent: buttons, links, focus         |
| `--color-brick`        | `#B42318` | Brick       | Light | Errors                                |
| `--color-graphite`     | `#111317` | Graphite    | Dark  | Page                                  |
| `--color-carbon`       | `#171A1F` | Carbon      | Dark  | Bands                                 |
| `--color-charcoal`     | `#1B1E24` | Charcoal    | Dark  | Cards, form fields                    |
| `--color-frost`        | `#ECEEF1` | Frost       | Dark  | Text                                  |
| `--color-pewter`       | `#9AA1AC` | Pewter      | Dark  | Secondary text                        |
| `--color-seam`         | `#262A31` | Seam        | Dark  | Hairlines (decorative)                |
| `--color-iron`         | `#6B7280` | Iron        | Dark  | Form field edges                      |
| `--color-periwinkle`   | `#8FA8FF` | Periwinkle  | Dark  | Accent                                |
| `--color-night`        | `#0C0F14` | Night       | Dark  | Text on the accent                    |
| `--color-coral`        | `#FF8A7A` | Coral       | Dark  | Errors                                |
| `--color-paper`        | `#F2EEE6` | Paper       | Both  | Mat behind client artwork drawn for light backgrounds |
| `--color-black`        | `#000000` | Black       | Print | Resume print                          |
| `--color-print-white`  | `#FFFFFF` | Print white | Print | Resume print                          |
| `--color-print-gray`   | `#333333` | Print gray  | Print | Resume print, secondary text          |

### Semantic tokens

Components use these, never the palette tokens directly (exceptions: the paper mat and the print colors).

| Token            | Light   | Dark       | Use                                   |
| ---------------- | ------- | ---------- | ------------------------------------- |
| `--bg`           | white   | graphite   | Page                                  |
| `--band`         | mist    | carbon     | Results band, closing, tags           |
| `--surface`      | white   | charcoal   | Cards, preview window, form fields    |
| `--text`         | ink     | frost      | Text                                  |
| `--text-muted`   | slate   | pewter     | Secondary text                        |
| `--rule`         | haze    | seam       | Hairlines                             |
| `--field-border` | steel   | iron       | Form field and toggle edges (3:1)     |
| `--accent`       | cobalt  | periwinkle | Primary buttons, links, focus, step numbers |
| `--on-accent`    | white   | night      | Text on the accent                    |
| `--focus`        | accent  | accent     | Focus outlines                        |
| `--error`        | brick   | coral      | Form errors                           |
| `--shadow`       | soft    | deeper     | Screenshots and cards                 |
| `--code`         | slate   | pewter     | Decorative code behind the preview's build line, at low opacity |

### Client colors

Each project's `accent` in `projects.ts` appears only as the small square marker beside the client's name, with a
1px `--field-border` edge so light colors (Fanzi's seafoam) stay visible on white. It's decorative: the name beside it
carries the meaning. The build still checks each client color reaches 4.5:1 on black.

### Approved pairings

| Text / element    | Background | Light | Dark  |
| ----------------- | ---------- | ----- | ----- |
| text              | bg         | 18.5  | 16.0  |
| text              | band       | 16.8  | 15.0  |
| text-muted        | bg         | 6.2   | 7.1   |
| text-muted        | band/card  | 5.6   | 6.4   |
| on-accent         | accent     | 7.1   | 8.4   |
| accent (links)    | bg         | 7.1   | 8.2   |
| field-border      | bg         | 3.2   | 3.9   |
| error             | bg         | 6.6   | 8.1   |
| **Never:** rule (1.3) for anything a visitor must see | | | |

## Typography

| Token            | Font                                                   | Role                          |
| ---------------- | ------------------------------------------------------ | ----------------------------- |
| `--font-display` | **Bricolage Grotesque** (variable), fallback system-ui | Headlines, normal width       |
| `--font-body`    | **Bricolage Grotesque**, text optical size             | Body, nav, buttons, forms     |
| `--font-mono`    | **Fragment Mono**                                      | Decorative code; resume dates |

**Why:** the same Bricolage, now at its normal width and weight 650: friendly, confident and roomy, where the
condensed 800 shouted. Self-hosted through Astro's font API.

- Headlines: `"opsz" 64, "wdth" 100`, weight 650, letter-spacing −0.022em, line-height 1.08.
- h3: weight 650, letter-spacing −0.01em. Body: `"opsz" 14`, weight 400 (600 for emphasis and buttons).

### Type scale

| Token           | Size                          | Use                          |
| --------------- | ----------------------------- | ---------------------------- |
| `--text-display`| `clamp(2.5rem, 4.6vw, 4rem)`  | Page titles, home headline   |
| `--text-1`      | `clamp(2.2rem, 3.6vw, 3rem)`  | Result figures               |
| `--text-2`      | `clamp(1.9rem, 3vw, 2.6rem)`  | Section headings             |
| `--text-3`      | 1.25rem                       | Card and step titles         |
| `--text-lede`   | 1.1875rem                     | Intros                       |
| `--text-body`   | 1.0625rem                     | Body                         |
| `--text-small`  | 0.9375rem                     | Captions, labels             |
| `--text-mono`   | 0.875rem                      | Code                         |

- Line length: body max 38rem. No all-caps labels, no arrows on buttons, no single highlighted word in a headline.

## Layout

- **Content width:** `--content-max` 76rem; `--content-narrow` 38rem. **Gutters:** 1.25rem phones, 2rem from `md`.
- **Section spacing:** `--section`, `clamp(4rem, 8vw, 6rem)`.
- **Hero (from `lg`):** text 5 parts, collage 7 parts. The text keeps the content column's left edge; the collage
  runs wider, toward the right edge of the window. The hero is sized to its content (not the full window height), so
  the results band shows at the bottom of the first screen on a typical laptop.

```
Home (desktop)
┌──────────────────────────────────────────────────────────────┐
│ timrios.dev       Work  How it works  About  [toggle] [Text]  │
│ More customers for your           ┌ collage: client sites,  ┐ │
│ business, starting with how it    │ a phone, the vans;      │ │
│ looks online.                     │ shifts with the pointer │ │
│ business types, two buttons, timing note                    │ │
├──── Results band: four numbers, each tied to a kind of business ┤
├──── Before and after: a slider per project │ name, outcome, links ┤
├──── What clients say (approved quotes only) ──────────────────┤
├──── Reels: phones on a shelf, one pause button ───────────────┤
├──── Sound familiar?: four owner problems, what Tim does ──────┤
├──── How it works: numbered steps, timing ─────────────────────┤
├──── Closing band: heading, free plan, text number ────────────┤
└──── Footer ───────────────────────────────────────────────────┘
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

Mobile-first; write these directly in `@media` rules.

| Name | Min width |
| ---- | --------- |
| `sm` | 640px     |
| `md` | 768px     |
| `lg` | 1024px    |
| `xl` | 1280px    |

## Shape and elevation

| Token             | Value   | Used on                                  |
| ----------------- | ------- | ---------------------------------------- |
| `--radius-pill`   | 999px   | Buttons, the theme toggle, tags          |
| `--radius-card`   | 12px    | Cards, the preview window                |
| `--radius-screen` | 8px     | Screenshots                              |

`--shadow` lifts screenshots and the collage off the page; it's softer in light, deeper in dark.

## Interaction and motion

| Element            | Behavior                                                                          |
| ------------------ | --------------------------------------------------------------------------------- |
| **Collage**        | Each piece shifts up to 14px with the pointer, at its own depth, and settles back when the pointer leaves. Fine pointers only. |
| **Client glow**    | Behind the collage, a soft blur of the featured clients' own colors (their `accent` in `projects.ts`), stronger in light (0.8) than dark (0.45) so it reads on white. It drifts slowly with the pointer, the deepest layer. |
| **Results**        | Each figure counts up from zero once, over 1.2s, when the band first comes into view. The final value is in the HTML, so screen readers and no-script see it. |
| **Before/after**   | A range slider wipes between the old and new site (`clip-path`); arrow keys move it. Starts at 50%. |
| **Theme toggle**   | Switches with a circular reveal from the button (View Transitions), 0.5s; instant where unsupported. |
| **Preview window** | Opens the client's live site; the build line sweeps over its code while it loads. |
| **Reels**          | Silent loops, play only while visible, one pause button.                          |
| **Buttons**        | Hover darkens the accent slightly; ghost buttons gain a stronger edge.            |
| **Links**          | Underline in the accent, 2px.                                                     |

### Reduced motion

With `prefers-reduced-motion: reduce`: no collage movement, figures appear at their value, the theme switches
instantly, the preview's line holds still, Reels start paused.

## Components

- **Header:** wordmark, links, the theme toggle, and a "Text" pill button with the number.
- **Footer:** name and city, email, text number, year.
- **HomeHero:** headline, business types, two buttons, timing note; the client collage.
- **ResultsBand:** home: the featured results (`band` text in `projects.ts`), each naming its kind of business. Project
  pages: that project's results and source. One row for up to four; more wrap in rows of three.
- **BeforeAfter:** one row per project on the home page: the **CompareSlider**, name, kind, the outcome line, "Read the
  story" and "Browse the site" (opens **ProjectPreview**).
- **CompareSlider:** the before/after slider (or a "before" description when there's no old site); home and project pages.
- **LogoRow:** "Businesses I've worked with": each client's real logo on the background it was designed for (white or
  ink, in either look), linking to the project. On About.
- **Project page:** kind and place with the client marker, name, summary, facts (what I did, the site, Instagram),
  "Browse the site"; the results band with its source; the before story with the CompareSlider and the phone view;
  each section with a service pill, text, points (accent dots) and gallery (Fanzi's social section shows its Reels);
  the client's quote (when approved); the next project as a card with its screenshot; the closing band.
- **Quotes:** client quotes from `quotes.ts`. Only `approved` quotes appear on the live site; drafts show in local
  development only, labeled "Draft, awaiting the client's OK".
- **ReelShelf:** Reels in phone frames.
- **ServiceList** ("Sound familiar?"): each service as the owner's problem, what Tim does, and a proof link.
- **ProcessSteps:** numbered steps, numbers in the accent.
- **Closing:** heading, free-plan button, text button.
- **ProjectPreview:** the preview window.
- **ThemeToggle:** a pill switch; `aria-pressed` reflects dark.
- **Img:** every image; builds WebP copies.

## Imagery

- **Client work only.** Screenshots are cropped from case-study captures (1440×900 desktop, 1290×2796 phone).
- **Image treatments** (`treatment` in `projects.ts`): `photo` crops to fill; `artwork` shows whole on the surface;
  `artwork-on-light` shows whole on a paper mat. `wide` spans a gallery. Client artwork is never recolored.
- **No photo of Tim** on the home page (his choice): the work is the face.

## Accessibility

- Only the approved pairings. A visible 2px focus outline (accent) with 2px offset everywhere.
- "Skip to content" first. Every form field labeled; required fields marked in words.
- 44×44px minimum targets. Color never carries meaning alone.
- The slider is a real `<input type="range">` with a label. The toggle states its current look.
- Reduced motion respected (see above).
