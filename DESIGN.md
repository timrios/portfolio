# DESIGN.md

The design system for timrios.dev, Tim Rios's portfolio. Every visual decision is recorded here. Components get these
values only through the CSS variables in `src/styles/global.css`. When a value changes, update this file first, then
the CSS, then the components.

History: version 1 (black and paper, client colors borrowed as the accent) and version 2 (black and proof yellow,
halftone portrait) were both rejected by Tim on 2026-11-04. Version 3 (Prussian blue, dark first, star band, Bricolage)
was set aside on 2026-11-06. Version 4, "Open for Business", below, was started fresh and designed at phone size first:
most visitors are on phones.

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

1. **Results first.** The first screen says what the owner gets (more customers) and shows real, finished work; the
   next shows real numbers, each tied to the kind of business it came from.
2. **The work brings the color.** Tim's frame is a live oak green family (see Color), quiet enough that client sites,
   logos and photos keep their own colors and are what the eye goes to.
3. **Phone first.** Every page is built and judged at phone size, then widened. What you act on sits under the thumb
   (the dock); the whole phone or Reel fits on one screen.
4. **Calm, with a job.** One set of timings (see Motion). Motion answers the visitor, or plays once. No breathing glows,
   no count-ups, no pointer-following. The only ambient things are the window light on desktop and the one Reel, which
   can be paused.
5. **Open after hours, daylight on request** (Tim, 2026-11-07). Both looks are complete; the site opens dark and remembers a
   visitor's switch.
6. **Proof next to every claim.** Results name their business and their source and date. DM Mono marks these proof tags.
7. **Built to be read by two people.** The copy speaks to owners; the discipline (one system, fast, accessible) is
   what an employer reads. A small door in the footer leads employers to the resume.

## Brand

- **Name:** Tim Rios. **Domain and email:** timrios.dev, hello@timrios.dev. **Text:** (210) 802-8851 (`site.ts`).
- **Voice:** plain, warm, confident, first person ("I"). Speaks to the owner's goals: customers, calls, bookings.
- **Logo (2026-11-05, redrawn 2026-11-06): the star dot.** `timrios.dev` with the dot replaced by a star. The letters
  are Mona Sans (weight 640, width 104) converted to outlines. The star is a five-point lone star for Texas: plump,
  softly cornered and leaning 10° forward, so it doesn't read as a rating star or a typed ★. Don't swap it for a
  four-point sparkle or an asterisk: both now read as AI product icons.
  - **Color:** on the oak plate, letters in paper and the star in marigold (the header's logo plate, in both looks).
    White or ink alone for one-color use.
  - **The star alone** is the small version: marigold on an oak tile for the favicon and profile pictures. It is also
    the site's one motif: the slider's grip, and the marker that turns when an answer opens.
  - **Files:** `src/assets/images/brand/` (SVG masters, PNG copies, profile picture); `public/` holds the favicons.
    The artwork is final vector art: edit the SVGs, never redraw it from a screenshot. AI never draws it.

## Color

**Live oak** (2026-11-06). The green of San Antonio's live oaks, on the warm limestone-and-paper of a shop window in
daylight, with one marigold accent for the thing to press. One hue is a family of three shades, each with a job:
**oak deep** carries whole bands and the menu plates, **oak** does links and figures, **limestone** is the page.

Two complete looks, **dark by default** (Tim, 2026-11-07). `html[data-theme]` holds the look; an inline script in the head applies the
visitor's saved choice, else dark, before the page paints. The dark look, "after hours", is the same hue at night, not
a neutral gray, so both looks are one brand. Colors are written in OKLCH in `global.css`.

### Palette

| Token                 | OKLCH                  | Hex       | Use                                         |
| --------------------- | ---------------------- | --------- | ------------------------------------------- |
| `--color-oak-deep`    | `31.5% 0.052 167`      | `#123A2C` | Menu plates, bands, buttons (light)         |
| `--color-oak-hi`      | `37.4% 0.061 167`      | `#1A4B3A` | Button hover (light)                        |
| `--color-oak`         | `49.6% 0.099 162`      | `#1B7350` | Links, figures, focus (light)               |
| `--color-marigold`    | `81.1% 0.153 82`       | `#F2B632` | The one thing to press; star; band figures  |
| `--color-limestone`   | `92.2% 0.018 89`       | `#EAE5D8` | Page (light)                                |
| `--color-sun`         | `97.8% 0.019 94`       | `#FCF8EA` | Window light (light)                        |
| `--color-sun-warmth`  | `91.4% 0.077 84`       | `#FBDFA8` | Morning and evening window light            |
| `--color-card`        | `99.4% 0.008 91`       | `#FFFDF7` | Cards and fields (light)                    |
| `--color-blank`       | `95.2% 0.018 89`       | `#F4EFE2` | Empty panels, the "before" note (light)     |
| `--color-ink`         | `24% 0.024 167`        | `#14231D` | Text (light); phone frames; slider tags     |
| `--color-soft`        | `43.4% 0.023 162`      | `#46554D` | Secondary text (light)                      |
| `--color-edge`        | `59.5% 0.025 135`      |           | Field edges (light)                         |
| `--color-paper`       | `96.7% 0.014 93`       | `#F7F4EA` | Text on oak; mat behind client artwork      |
| `--color-white`       | `100% 0 0`             | `#FFFFFF` | Slider seam and tags; white logo plates     |
| `--color-band-soft`   | `87.7% 0.018 148`      | `#CFDAD0` | Secondary text on deep bands                |
| `--color-edge-oak`    | `67.6% 0.044 163`      | `#7FA08F` | Field edges on deep bands                   |
| `--color-brick`       | `50% 0.182 30`         | `#B42318` | Errors (light)                              |
| `--color-night-page`  | `22.1% 0.027 170`      | `#0D1F19` | Page (dark)                                 |
| `--color-night`       | `17.7% 0.021 172`      | `#071410` | Menu plates and bands (dark)                |
| `--color-night-card`  | `26% 0.033 162`        | `#14291F` | Cards and fields (dark)                     |
| `--color-night-sun`   | `31.5% 0.04 164`       | `#1D382C` | Window light (dark)                         |
| `--color-night-warm`  | `34.2% 0.039 108`      | `#3A3A22` | Warm window light (dark)                    |
| `--color-cream`       | `94.9% 0.015 107`      | `#EFEFE4` | Text (dark)                                 |
| `--color-sage`        | `79.5% 0.02 153`       | `#B3C0B6` | Secondary text (dark)                       |
| `--color-mint`        | `78.2% 0.116 160`      | `#6FCF9F` | Links, figures, buttons (dark)              |
| `--color-mint-hi`     | `82.5% 0.104 160`      | `#86DBAF` | Button hover (dark)                         |
| `--color-on-mint`     | `17.7% 0.022 168`      | `#07140F` | Text on mint                                |
| `--color-edge-night`  | `59.5% 0.032 163`      | `#6E8579` | Field edges (dark)                          |
| `--color-coral`       | `75.8% 0.145 29`       | `#FF8A7A` | Errors (dark)                               |
| `--color-black`, `--color-print-white`, `--color-print-gray` | | | Resume print only |

### Semantic tokens

Components use these, never the palette tokens directly (exceptions: the paper mat, the print colors, phone frames, and
the slider's handle and tags, which sit on client screenshots in both looks).

| Token            | Light       | Dark        | Inside `.on-deep` | Use                              |
| ---------------- | ----------- | ----------- | ----------------- | -------------------------------- |
| `--bg`           | limestone   | night page  | oak deep (dark: night) | Page / band background      |
| `--band`         | blank       | night card  |                   | Pale panels, tags                |
| `--surface`      | card        | night card  |                   | Cards, preview window, fields    |
| `--text`         | ink         | cream       | paper (dark: cream) | Text                           |
| `--text-muted`   | soft        | sage        | band soft         | Secondary text                   |
| `--rule`         | ink 16%     | cream 18%   | paper 16%         | Hairlines (decorative)           |
| `--field-border` | edge        | edge night  | edge oak          | Field and toggle edges (3:1)     |
| `--accent`       | oak         | mint        | marigold          | Links, figures, focus            |
| `--action`       | oak deep    | mint        | marigold          | Primary buttons                  |
| `--action-hi`    | oak hi      | mint hi     | marigold, lighter | Primary button hover             |
| `--on-action`    | paper       | on mint     | ink               | Text on primary buttons          |
| `--plate`        | oak deep    | night       |                   | The menu plates and dock         |
| `--marigold`, `--on-marigold` | marigold, ink | same | same     | "Text me" and the star, every look |
| `--error`        | brick       | coral       |                   | Errors                           |
| `--code`         | soft        | sage        |                   | Code behind the loading preview  |
| `--shadow`       | oak-tinted, soft | black, deeper |             | Cards and screenshots            |

`.on-deep` switches the tokens above for everything inside an oak surface (results band, "Sound familiar?", closing).
A fine grain over the page (an inline SVG on `html`) keeps the window light from banding.

`--cloud` is the soft shade a slow cloud drifts across that light on desktop, set for each look. `--sun-shadow-x` is set by `WindowLight` from the time in San Antonio, and shadows use `var(--sun-shadow-x, 0px)` so they lean with the sun on desktop and sit straight on phones.

### Client colors

Each project's `accent` in `projects.ts` appears only as the small square marker beside the client's name, with a
1px `--field-border` edge. It's decorative: the name beside it carries the meaning.

### Approved pairings

| Text / element     | On                               | Ratio           |
| ------------------ | -------------------------------- | --------------- |
| ink                | limestone / card / sun           | 13.0 / 16.0 / 15.3 |
| soft               | limestone / blank / sun / card   | 6.3 / 6.9 / 7.4 / 7.7 |
| oak (links, figures) | limestone / sun / card         | 4.6 / 5.5 / 5.7 |
| paper              | oak deep / oak                   | 11.4 / 5.3      |
| marigold           | oak deep / night                 | 6.9 / 10.3      |
| ink on marigold    | "Text me", closing button        | 8.9             |
| band soft          | oak deep / night                 | 8.8 / 13.1      |
| edge               | limestone / blank / sun / card   | 3.2 / 3.5 / 3.8 / 3.9 |
| edge oak           | oak deep / night                 | 4.4 / 6.6       |
| brick              | limestone / card                 | 5.2 / 6.5       |
| cream              | night page / night card / night sun / night | 14.8 / 13.3 / 11.0 / 16.2 |
| sage               | night page / night card / night sun | 9.1 / 8.1 / 6.7 |
| mint               | night page / night card / night sun | 9.0 / 8.1 / 6.7 |
| on mint on mint    | button (dark)                    | 9.9             |
| edge night         | night page / night card          | 4.3 / 3.9       |
| coral              | night page / night card          | 7.5 / 6.7       |

## Typography

| Token            | Font                                       | Role                                     |
| ---------------- | ------------------------------------------ | ---------------------------------------- |
| `--font-display` | **Mona Sans** (variable), fallback system-ui | Headlines                              |
| `--font-body`    | **Mona Sans**                              | Body, nav, buttons, forms                |
| `--font-mono`    | **DM Mono**                                | Proof tags only: sources, the address bar, before/after tags; resume dates |

**Why:** Mona Sans has the width and weight axes to set a headline as a line of words rather than a slab, and stays
friendly at body size. Self-hosted through Astro's font API from files subset to the characters the site uses, so
nothing waits on a third party (the variable file is about 116 KB and is preloaded).

- Headlines (h1, h2): weight 540, width 98%, letter-spacing −0.03em, line-height 1.02. The home headline is two lines
  that never wrap by themselves.
- h3: weight 560, letter-spacing −0.022em, line-height 1.1. Body: weight 400, line-height 1.5 (600 for emphasis and
  buttons, 620 for a selected choice).

### Type scale

| Token           | Phones                      | From `lg`                       | Use                           |
| --------------- | --------------------------- | ------------------------------- | ----------------------------- |
| `--text-display`| `clamp(2.1rem, 11.4vw, 3.25rem)` | `clamp(2.75rem, 5.2vw, 7rem)` | Page titles, home headline  |
| `--text-1`      | 2.25rem                     | `clamp(2.5rem, 3.6vw, 3.5rem)`  | Result figures                |
| `--text-2`      | `clamp(2rem, 9vw, 2.5rem)`  | `clamp(2.5rem, 3.6vw, 3.75rem)` | Section headings              |
| `--text-3`      | 1.625rem                    | same                            | Project names, owner problems |
| `--text-4`      | 1.125rem                    | same                            | Card and step titles, outcome lines |
| `--text-lede`   | 1.0625rem                   | 1.1875rem                       | Intros                        |
| `--text-fig`    | 1.625rem                    | 1.875rem                        | The opening's result figure   |
| `--text-body`   | 1.0625rem                   | same                            | Body                          |
| `--text-ui`     | 1rem                        | same                            | Buttons, fields, steps        |
| `--text-small`  | 0.9375rem                   | same                            | Captions, labels              |
| `--text-mono`   | 0.8125rem                   | same                            | Proof tags                    |

- Line length: body max 38rem. No all-caps labels, no arrows on buttons, no single highlighted word in a headline.

## Layout

- **Content width:** `--content-max` 120rem (2026-11-06: wide enough that sections line up with the hero's left edge at every common desktop width); `--content-narrow` 38rem. **Gutters:** `--gutter`, 1.25rem on phones,
  growing to `clamp(1.25rem, 4.45vw, 5rem)` from `lg`.
- **Section spacing:** `--section`, `clamp(3.25rem, 8vw, 6rem)`.
- **Bottom of every page on phones:** room for the dock, `--dock` 3.75rem plus the safe area.

```
Home (phone)                         Home (desktop, from lg)
┌───────────────────────┐            ┌──────────────────────────────────────────────┐
│ [timrios★dev]         │ scrolls    │ [timrios★dev]          [Work How About Text] │ pinned plates
│ More customers        │ away       │ More customers         what I do             │
│ for your business.    │            │ for your business.     ┌ window: address bar ─┤
│ what I do             │            │ what's holding you..   │ finished site, whole │
│ [ask box]             │            │ [ask box]         ┌──┐ │                      │
│ ┌────┐ See the site   │            │ see the site for a│ph│ │                      │
│ │ ph │ [Groomer ]     │            │ [▣][▣][▣][▣]      │on│ │                      │
│ │ on │ [Stylist ]     │            │ result, source    └──┘ └──────────────────────┤
│ │ e  │ result         │            ├──── Results band ────────────────────────────┤
│ └────┘                │            │ the sections below, widened                  │
│ Results band          │            └──────────────────────────────────────────────┘
│ Before and afters     │
│ Reel, never > screen  │
│ Sound familiar? (one  │
│   open at a time)     │
│ Steps on a rail       │
│ Closing, footer       │
│ [Menu][Free quote][Text]│ dock, pinned
└───────────────────────┘
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

## Breakpoints

Mobile-first; write these directly in `@media` rules.

| Name | Min width |
| ---- | --------- |
| `sm` | 640px     |
| `md` | 768px     |
| `lg` | 1024px    |
| `xl` | 1280px    |

## Shape and elevation

| Token             | Value   | Used on                                       |
| ----------------- | ------- | --------------------------------------------- |
| `--radius-plate`  | 14px    | Menu plates, dock, buttons, the ask box       |
| `--radius-inner`  | 11px    | Things inside a plate or box                  |
| `--radius-card`   | 16px    | Cards, the before/after, the preview window   |
| `--radius-screen` | 8px     | Screenshots, thumbnails                       |
| `--radius-tag`    | 6px     | Before and after tags, small thumbnails       |
| `--radius-phone`  | 26px    | Phone frames (inner screen 21px)              |
| `--radius-pill`   | 999px   | Round controls: the slider's grip             |

`--shadow` lifts screenshots and phones off the page; it's softer in light, deeper in dark. Buttons are soft-cornered
plates, not pills: the same material as the menu.

## Interaction and motion

One set of timings, used everywhere, all on one curve, `--ease` (`cubic-bezier(.2,.7,.2,1)`):

| Token        | Value  | Used for                                      |
| ------------ | ------ | --------------------------------------------- |
| `--t-fast`   | 150ms  | Hover, press, selected states                 |
| `--t-base`   | 220ms  | Swapping a picture or result, dock, accordion |
| `--t-sweep`  | 520ms  | The theme reveal, a slider moving by itself   |

| Element            | Behavior                                                                          |
| ------------------ | --------------------------------------------------------------------------------- |
| **Window light**   | Behind every page, panes of sunlight fall across the page, like a shop window. Desktop only: it follows the real sun over San Antonio (angle, height, warmth) and drifts very slowly. Phones get a still version, with no script and no animation. |
| **Before/after wipe** | The work cards wait in their "before" state below the fold and wipe to today's sites once, half a second after coming into view. Skipped if the visitor has pressed the switch, if the cards are already on screen at load, and under reduced motion. |
| **Page change**    | A project's name travels from its work card to the project page's heading; everything else cross-fades (`@view-transition`, inline in `BaseLayout` because Chromium skips it when it's in a stylesheet being revalidated; `--t-sweep`). The name moves, not the screenshot: a blown-up screenshot blurs across the page. Browsers without it load the page normally. |
| **Sound familiar answers** | Slide open with `::details-content` and `interpolate-size`, at `--t-base`; elsewhere they simply appear. |
| **Step rail**      | Fills with `--action` as the steps scroll past (`animation-timeline: view()`), step by step on desktop. Elsewhere, and under reduced motion, a plain `--rule` line. |
| **Dock (phones)**  | Menu and Text me sit under the thumb. "Free quote" joins once the question box scrolls away. The dock steps aside for the keyboard and for the closing band. The logo scrolls away at the top. |
| **Menu sheet**     | A native dialog rising from the bottom; closes by the backdrop, Close, Escape, or a link. Every modal dialog (this sheet and the preview window) contains scroll gestures so the page behind doesn't move (`dialog:modal` and `dialog::backdrop` in `global.css`; Chrome and Firefox honor it, Safari doesn't yet). |
| **Hero switcher**  | One choice drives everything: the picture, the name, the result. Results sit stacked in one space, so nothing jumps. |
| **Work switch**    | Before and After wipe all four cards left to right (`clip-path`, `--t-sweep`), 60ms apart, so they read as one gesture. Instant, with no stagger, under reduced motion. |
| **Before/after**   | On project pages, a range slider wipes between the old and new site (`clip-path`). Press, then slide; arrow keys work. On touch, a sideways swipe moves it and an up-and-down swipe scrolls the page; it moves by finger travel, so nothing jumps. Starts at 50%. Without an old site, the "before" is a short note. |
| **Links in text**   | The `.tap` utility gives a link inside text a 44px target with no change to its line spacing. |
| **Theme toggle**   | Switches with a circular reveal from the button (View Transitions), `--t-sweep`; instant where unsupported. |
| **Preview window** | Opens the client's live site. |
| **Reels**          | One featured silent loop, never taller than the screen, plays only while visible; stills switch it; a pause button stops it. Paused under reduced motion. |
| **Ask box**        | The field's placeholder types the five real owner problems once, then rests on the first; focus stops it. What they type (or nothing) goes to the contact form, prefilled. |
| **Sound familiar?**| One answer open at a time (native `details`); the star turns 72° as it opens. |
| **Buttons**        | Hover lightens slightly (`--action-hi`), never while disabled (the form's "Sending…"). |
| **Links**          | Underlined in the accent, 1px; 2px on hover.                                      |
| **Header (desktop)** | Two solid plates pinned at the top, the logo and the menu, so the page shows between them. |

### Reduced motion

With `prefers-reduced-motion: reduce`: the window light holds still, the ask box shows one static example, the theme
switches instantly, Reels start paused, and there is no smooth scrolling, page-change transition, answer slide, step-rail
fill or loading sweep. There is no blanket rule: each animation has its own path. Movement (the dock sliding, the star
turning, the before/after wipe, a thumbnail or card lifting) is instant; colour, shadow and opacity fades stay, since they
move nothing. A new animation must add its own path, either inside `prefers-reduced-motion: no-preference` or with a
`reduce` rule that removes the movement.

## Components

- **Header:** phones: the logo plate, which scrolls away. Desktop: the logo plate, and a plate with links, the theme
  toggle and "Text me" in marigold.
- **Dock:** phones only: Menu, Free quote, Text me; holds the menu sheet (Home first, because the logo scrolls away on
  phones; then the links and the theme toggle). Desktop needs no Home link: its logo stays pinned.
- **Footer:** name and city, email, text number, year, and the door for employers (the resume and `/how-this-site-was-built/`): "Hiring a developer?" with the
  resume. The year line also holds "Privacy Policy", small (`--text-mono`), regular weight and muted, since it is rarely visited.
- **WindowLight:** the fixed panes of light behind every page. Hidden in print.
- **HomeHero:** the headline, what Tim does, the ask box, then the work. Phones: a real phone beside its switcher.
  Desktop: the offset window with a phone, thumbnails under the ask box. Finished sites only, whole, never a before
  on the first screen. The desktop column is three groups, not an even list: the headline; the ask box with its note
  (`--space-3` apart); the work (switcher, result, source). A hairline in `--rule` opens the work group, with
  `--hero-gap` either side of it (`--space-5` to `--space-6`, by screen height). "Read the story" sits beside the result
  figure on desktop, so it stays on the first screen on short laptops; on phones it follows the source line.
- **AskBox:** a labeled field with typed examples and a "Get a free quote" button, posting to `/contact/?need=…`, which
  prefills the message.
- **Contact page:** phones: the intro and Text me card, the form, then "What happens next", stacked. Desktop (from
  1024px): the intro beside the form (5fr / 7fr), then "What happens next" as its own row across the page: the heading
  and "Or email" on the left, the three steps three across on the right, each under a `--rule` hairline, lined up with
  the form's column. The steps used to sit under the intro, where they hung below the form once it got shorter.
- **Contact form fields** (2026-11-07): the label sits inside the top of its box, always visible and small
  (`--text-small`, `--text-muted`), with the typed text under it. The `<label>` is the box: it carries the
  `--surface` fill, the `--field-border` edge and `--radius-screen`; the input inside has no edge of its own, and the
  focus outline goes round the whole box (`:focus-within`), so a tap anywhere in it focuses the field. No floating
  labels: an empty floating label looks like typed text or a placeholder, and it needs motion. Boxes sit
  `--space-3` apart. Only what's needed to reply is asked: name, business (optional), email or phone (one is
  required, grouped under one legend), what they need, and the message; the message placeholder asks for a website
  or Instagram link instead of a separate field. Fewer fields shortens the form more than any styling does.
  **Errors** are checked by the page's script before anything is sent (the browser's own check is off): words under
  the field in `--error` (5.2:1 light, 7.5:1 dark), the box edge in `--error`, `aria-invalid`, and focus moves to the
  first problem. A typed email or phone is checked when the visitor leaves the field; an error clears as soon as it's
  fixed. Email needs a dot and an ending after the @; a US phone needs its area code (10 digits, or 11 starting with
  1), and a number starting with + may have 8 to 15 digits. The messages live in `site.ts` → `contact.errors`.
- **ResultsBand:** home: the featured results (`band` text in `projects.ts`), each naming its kind of business, two
  across on phones. Project pages: that project's results and source.
- **WorkGrid:** the home page's "Four different looks": every project at once, so the variety shows without a tap. Phone
  captures in 4:5 frames, two across on phones and four across from `md`, each with its short name, kind, outcome and
  "Read the story" (the whole card is the link). One Before/After switch on an oak plate, the selected side in marigold,
  drives all of them. An old site without a capture is an empty frame: its short note inside a dashed `--field-border`
  rectangle, so the emptiness is the point. Browsing a site and dragging the slider belong to the project pages.
- **CompareSlider:** the before/after slider on project pages: phone captures in a 4:5 frame on phones, desktop captures
  on desktop. The grip is the star on oak. Without an old site, a short note instead.
- **LogoRow:** "Businesses I've worked with": each client's real logo on the background it was designed for (white or
  ink, in either look), linking to the project. On About.
- **Project page:** kind and place with the client marker, name, summary, facts (what I did, the site, Instagram),
  "Browse the site" (opens **ProjectPreview**); the results band with its source; the before story with the CompareSlider and the phone view;
  each section with a service tag, text, points (accent dots) and gallery (Fanzi's social section shows its Reels);
  the client's quote (when approved); the next project as a card with its screenshot; the closing band.
- **Questions:** the home page's "Before you ask" section, from `questions.ts`: one raised sheet, question left and answer right, stacked on phones. Plain rows rather than a second accordion, because these answers should be read without opening anything.
- **Quotes:** client quotes from `quotes.ts`, as cards, three across from `lg`, stacked on phones. Drafts show labeled "Draft, awaiting the client's OK" until the
  site opens to search engines; after that, only `approved` quotes appear. On the home page the cards also break up the
  plain stretch between "Four different looks" and the Reel.
- **FeaturedReel:** one Reel in a phone, its story beside it (below on phones), stills to switch to the others, a pause
  button. Home and project pages.
- **ServiceList** ("Sound familiar?"): an oak band of the owner's problems, one answer open at a time, each with what
  Tim does and a proof link.
- **ProcessSteps:** phones: numbered circles on a compact rail down the left. Desktop: five columns.
- **Closing:** heading, "Text me" in marigold, free-plan button; the dock steps aside for it.
- **ProjectPreview:** the preview window.
- **ThemeToggle:** a round icon button in the desktop plate, and a labeled row in the menu sheet ("After-hours look" /
  "Daylight look").
- **Img:** every image; builds WebP copies.

## Imagery

- **Client work only.** Screenshots are cropped from case-study captures (1440×900 desktop, 1290×2796 phone). On a
  phone, client sites appear as phone captures in a phone frame, never as shrunken desktops.
- **Image treatments** (`treatment` in `projects.ts`): `photo` crops to fill; `artwork` shows whole on the surface;
  `artwork-on-light` shows whole on a paper mat. `wide` spans a gallery. Client artwork is never recolored.
- **No photo of Tim** on the home page (his choice): the work is the face.
- **Tim's portrait (2026-11-07): an illustrated character in his signature style, on the About page only.** It is
  `brand/tim-portrait.jpg`, set as a framed picture (card radius, system shadow, a hairline edge), never a cut-out:
  it keeps its own pale cream ground so the green jacket doesn't disappear into the dark look's green. Phones: under
  the heading at 13rem wide; from 768px a right-hand column beside the text. Alt text describes the illustration. The
  style, the master file and how to make other pictures of Tim are in `~/Projects/dev-setup/knowledge/Tim's
  signature art style (Nov 2026).md`: read it before making any new picture of him. AI art of Tim stays in that
  style; his logo and star are never AI-drawn (see Brand).

## Accessibility

- Only the approved pairings. A visible 2px focus outline (accent) with 2px offset everywhere.
- "Skip to content" first. Every form field labeled; required fields marked in words (a group where one of two is needed says so in its legend).
- 44×44px minimum targets. Color never carries meaning alone.
- The slider is a real `<input type="range">` with a label. The toggle states its current look.
- Reduced motion respected (see above).
