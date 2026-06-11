# Portfolio Design & Coding Guidelines

This is Doron Anhang's architectural-R&D portfolio. It's a single-page site built as one HTML file ([index.html](index.html)) — styled in editorial-print language, not "web app" language. Everything below is the rulebook for adding new elements; follow it so new work *looks like it was always there*.

When in doubt, scan an existing chapter (e.g. the Research project's "Context" or "Archetypes") for a precedent before inventing one. Reuse > recreate.

> **⚠️ Commit before big tasks.** This is a single-file site with uncommitted work living only in the working tree. Before starting any large or destructive task (a new project tab, a sweeping find-replace, a refactor), **prompt the user to commit and push first** — and don't run `git checkout`/`git restore` on `index.html` without confirming there's no uncommitted work to lose. A working-tree-only edit that was never staged is *not* recoverable through git.

---

## 1. The visual tone (read this first)

The whole site is styled like a **scholarly journal / monograph**, not a startup landing page. The voice is *measured, editorial, restrained*. Specific signals:

- **Two-font system, used semantically.** Serif (`var(--serif)`, Times New Roman) for *titles, names, voice* — anything that should feel "authored." Sans (`var(--sans)`, Assistant) for *labels, body copy, UI* — anything functional. Never mix them within the same role.
- **Gold (`#E6A855`) is a marker, not decoration.** It signals *"this is a structural cue"* — chapter numbers, eyebrows, the active state, takeaway arrows (→), section accents. If you add gold to something that isn't a structural cue, you've cheapened the rest of the gold on the page. Limit one or two gold elements per visual unit.
- **Density is editorial, not dashboard.** Body copy at 0.9–0.92rem, line-height 1.75–1.85. Lots of room to breathe. Avoid card grids that read like a SaaS dashboard.
- **Rules and borders do the structuring, not boxes.** Thin 1px rules (`var(--rule)`, `#e0dbd0`), dashed rules for sub-divisions, left-border color accents for category coding. Avoid drop shadows except as subtle hover affordance.
- **Color coding is project-internal, not global.** Caravan = green `#2A9D5C`, Mid-rise = red `#C0392B`, NKDT typologies = blue/orange/green. These colors *only* mean what they mean inside that project. Don't carry them across projects.

If a new element makes the page feel busier, brighter, or more "modern app," it's wrong — reduce contrast, thin the strokes, give it more whitespace, and try again.

---

## 2. Design tokens (the only ones, don't invent new ones)

Defined in `:root` at the top of [index.html](index.html#L13). Always reference via `var(--name)` — never hard-code these values.

### Color
| Token | Value | Use |
|---|---|---|
| `--bg` | `#f7f5f0` | Page background — warm off-white, the "paper" |
| `--bg2` | `#f0ede6` | Slightly darker paper — image slot backgrounds, group separators |
| `--white` | `#ffffff` | Pure white — rare, only true-card surfaces |
| `--gold` | `#E6A855` | The signal color (see §1) |
| `--gold-dim` | `rgba(230,168,85,0.15)` | Gold wash — active tab background, finding callout |
| `--ink` | `#2a2a28` | Headlines, strong emphasis — almost-black, never pure black |
| `--text` | `#808080` | Body copy default |
| `--text-light` | `#aaaaaa` | Meta, captions, "low-importance" text |
| `--rule` | `#e0dbd0` | All hairline rules and borders |
| `--card-bg` | `#fdfbf7` | Warm-paper card surface — `.pv-card`, `.pv-strip-item`, chart cards, lightbox frame |
| `--card-border` | `#e2dccd` | Hairline border that pairs with `--card-bg` |

The card surface tokens (`--card-bg` + `--card-border`) are their own micro-system; always reach for them together — never hard-code the hex pair.

**Project accent colors** (do not promote to root tokens):
- Caravan / scattered: `#2A9D5C`
- Mid-rise / corridor: `#C0392B`
- NKDT type A: `#3B7AC5`
- NKDT type B: `#D4860A`
- NKDT type C: `#2A9D5C`

**SVG / diagram palette** — *only* for SVG illustrations (participant flow, pipeline, scoring rubric, NKDT feedback loop, loneliness stats). Derived from `images/research/ariel_map.jpg` (Ariel campus map) and `images/nkdt/לוגו.png` (NKDT project logo). Treat this as the **canonical, fixed** palette for all SVGs in the project — reuse these exact hex values rather than picking new ones.

The palette is intentionally bold and saturated (closer to the construction-paper feel of the campus map than to muted infographic tones), but each color stays single-purpose so categories remain distinguishable.

| Family | Color | Hex | Use |
|---|---|---|---|
| **Cream / paper** | warm cream | `#F5E6D3` | primary card surface inside SVGs |
| | deeper cream | `#EBD7BD` | secondary surface, banded sections |
| | cream border | `#D4B998` | hairlines on cream cards |
| | warm white | `#FAF4E8` | neutral wash background |
| **Sand / gold** | sand gold | `#E8B872` | gold surface — boxes, accents (matches map roads) |
| | deep gold | `#B07A2A` | gold border, label text on sand |
| | dark gold | `#6B4A14` | deepest gold accent, used rarely |
| **Warm ink** | warm ink | `#3A3024` | titles, strong text inside SVGs (never pure black) |
| **Cobalt blue** | pale blue | `#D6E4F0` | blue card surface |
| | blue border | `#A8C2DC` | hairlines on blue cards |
| | mid blue | `#5A95C8` | blue accent fills |
| | cobalt blue | `#2E7CB8` | primary blue — the "true" blue from the map |
| | blue ink | `#0F4A82` | label text on blue surfaces |
| **Mint green** | pale green | `#DCEEDC` | green card surface |
| | mint green | `#6CB68A` | primary green — the map block green |
| | deep green | `#2A8550` | label text on green surfaces |
| **Coral red** | pale red | `#F5D9D2` | red card surface |
| | coral red | `#D45645` | primary red — the map block red |
| | deep red | `#8E2E20` | label text / dark red accent |
| | darkest red | `#6B2218` | rare, used only when needed for layering |
| **Lavender** | pale lavender | `#E8DFEE` | lavender card surface |
| | lavender | `#9B7FB8` | primary purple — the map purple |
| | purple | `#7A5FA3` | mid purple accent |
| | deep purple | `#5E4582` | label text on lavender surfaces |
| **Warm greys** | terrain grey | `#C9C0B2` | dividers, map-terrain feel |
| | mid grey | `#8E867A` | secondary text, low-importance labels |
| | body grey | `#5A554E` | body text inside SVGs |

**Rules for using the SVG palette:**
- **Pair colors within a family.** A blue card uses `#D6E4F0` surface, `#A8C2DC` border, `#0F4A82` text — not blues from different stops mixed randomly. The same applies to each family.
- **Each family means one thing per diagram.** Don't introduce a 6th category by inventing a teal or orange; if a diagram needs 4 categories, use blue + green + red + gold. If it needs 5, add lavender. Anything beyond that is a sign the diagram should be split.
- **The map's category meanings carry over.** Where the architecture diagrams use red for mid-rise and green for caravan, SVGs should too. NKDT's type A/B/C use blue/gold/green to match the page cards. Don't reassign these mid-project.
- **No drop shadows, no gradients.** Flat fills only — same as the campus map.
- **Match the warm-ink rule.** Text in SVGs uses `#3A3024` (warm ink) or `#5A554E` (body grey), never `#000000`. Even the darkest accent (`#6B2218`) is warm.
- **Don't introduce new hex values for SVGs.** If you need a tone that isn't in the table, propose adding it explicitly rather than slipping it in — it should be a deliberate addition to the palette, not a one-off.

### Type
- `--sans` — Assistant 300/400/500/600 from Google Fonts. Default body.
- `--serif` — Times New Roman, 400 only (italic via `<em>`). Used for titles and the author voice.

**Scale, by role** (don't invent in-between sizes):

| Role | Size | Family | Notes |
|---|---|---|---|
| Hero name | `clamp(2.4rem, 3.5vw, 3.8rem)` | serif | |
| Project detail title | `clamp(1.8rem, 3vw, 2.6rem)` | serif | |
| Chapter title | 1.6rem | serif | |
| Card / strip title | 1rem–1.05rem | serif | |
| Body copy | 0.9–0.92rem | sans | line-height 1.8–1.85 |
| Meta / sub-text | 0.72–0.78rem | sans | color `--text-light` |
| Eyebrows / labels | 0.62–0.72rem | sans, 600, uppercase, letter-spacing 0.08–0.14em | almost always gold |
| Captions | 0.66–0.72rem | sans | color `#7a7a74` |
| Tab number | 0.58rem | sans, 600 | gold, uppercase |

**Eyebrow recipe** (the gold uppercase label above every section, used everywhere):
```css
font-size: 0.68rem;
font-weight: 600;
text-transform: uppercase;
letter-spacing: 0.14em;
color: var(--gold);
```

### Spacing & layout
- Section side padding: **3.5rem** desktop, **1.5rem** mobile.
- Vertical breathing room between subsections: **1.5–1.75rem**.
- Image gap inside a stage: **0.55–0.75rem** (tight, gallery-like).
- Card internal padding: **12–16px** for head, **8–12px** for foot.
- Card border-radius: **6px** for cards and strip items, **0–3px** elsewhere. Never larger than 6px — sharper = more editorial.
- Card left-border accent: **4px** (3px in thumb variant).

### Motion
- Hover transitions: **0.15s** linear (color, border-color, background).
- Layout/state transitions: **0.25–0.35s** with `var(--ease-pane)`.
- Big slide animations (panel/pane swap): **`var(--pv-slide)`** (`0.6s`) with `var(--ease-pane)` (`cubic-bezier(0.4,0,0.2,1)`). These two tokens *are* the site's signature motion — always reference them; never hand-type the values.
- Programmatic scroll: eased with **ease-out cubic** (`1 - Math.pow(1-p, 3)`), duration clamped 300–700ms.

### Breakpoint
- One breakpoint at **720–900px** (`@media (max-width: 720px)` for project view, `(max-width: 900px)` for top-level). Don't add intermediate breakpoints unless the layout truly breaks.

---

## 3. CSS architecture & naming

Everything is in one `<style>` block in [index.html](index.html). That's intentional — keep it that way unless explicitly asked to split.

### Scoping prefixes
The CSS uses **per-project / per-component prefixes** to prevent cross-contamination. When adding new components, follow the same convention:

| Prefix | Scope |
|---|---|
| `.pv-*` | Project-view shell — chapter rails, sidebar, stage, cards, strip mode, edge-fade utility. Shared across all projects. |
| `.rs-*` | Research-project-specific (Student Dorms). Scoped further by `#detail-research` when needed. |
| `.nk-*` | NKDT-project-specific. Scoped further by `#detail-nkdt`. |
| `.tab-*`, `.proj-tabs-*` | Top tab bar |
| `.hero-*`, `.stack-*` | Hero section |
| `.kw-*` | Keyword chips |
| `.subsec-*`, `.detail-*` | Generic in-chapter content blocks |
| `.app-flow-*` | Research-project App chapter (participant-flow figure, expand hint) |
| `.wip-*` | Placeholder panel for projects that are still WIP |

**Rule:** if a style is project-specific, prefix it with the project's namespace (`rs-`, `nk-`, …) **and** scope it under `#detail-<project>` when there's any risk of collision. If it's a reusable building block usable by any project, use `pv-` and don't scope it.

### Modifier convention
BEM-ish dash-modifiers: `.pv-card--caravan`, `.pv-card--lightbox`, `.rs-viab-row--midrise`. State classes use `.is-` or `.active` / `.docked` / `.leaving`. Keep it consistent.

### Don't
- Don't introduce a CSS framework (no Tailwind, no Bootstrap).
- Don't add `!important` unless you're overriding a deeply scoped existing rule and there's no cleaner path. There are a few in the codebase; that's the ceiling.
- Don't add new CSS custom properties at `:root` for one-off values. Use the existing tokens, or use a literal value with a comment.
- Don't use Flexbox where a 1px rule + padding does the same job more editorially.

---

## 4. Component patterns (reuse these — don't invent new ones)

### `.pv-card` — the universal content card
The workhorse. Warm off-white surface, 4px gold left-border, serif title, optional dashed-rule separator, optional italic takeaway in the foot prefixed with a gold `→`. Used in the stage, strip, mobile inline imgs, and diagram cards.

Structure:
```html
<button class="pv-card pv-card--img pv-card--caravan pv-card--lightbox"
        data-lightbox="images/.../foo.jpg" data-lightbox-title="…">
  <div class="pv-card-head">
    <div class="pv-card-title">Title in serif</div>
    <div class="pv-card-sub">Optional sub-line, ~0.72rem.</div>
  </div>
  <div class="pv-card-rule"></div>
  <div class="pv-card-media"><img loading="lazy" src="…" alt="…"></div>
  <div class="pv-card-foot">
    <span class="pv-card-takeaway">The one-line "so what."</span>
    <span class="app-expand-hint">↗ click to expand</span>
  </div>
</button>
```

- Use `<button>` (not `<div>`) when the card is clickable for a lightbox — keyboard + a11y come for free.
- Add `.pv-card--lightbox` to any card that opens the lightbox on click — it carries the hover lift + cursor:pointer affordance.
- The **takeaway** is the single editorial sentence that tells the reader why this image matters. Always present. Always italic. Always introduced by the gold `→`. Never longer than one line on desktop.
- Color-code the left border with a `--<project-color>` modifier when comparing categories.
- The `.pv-card-foot` base already supplies `display: flex; justify-content: space-between; align-items: center; gap: 0.6rem` — variant overrides only need to tweak padding/gap, not redeclare the layout.

### `.rs-figure` / `.nk-figure` — captioned figures
Use when you want a plain image-with-caption (no card chrome, no takeaway). Border + cream background + small caption beneath. Reach for `pv-card` when the image is one of several in a comparison; reach for `rs-figure` when it's standalone supporting evidence.

### `.rs-metrics` — the 4-up KPI strip
Used for "study metrics" callouts (n participants, n datapoints, …). Big number, small label beneath, cream box. Grid responsively reduces 4→2 columns.

### `.rs-viab-row` — head-to-head comparison bar
The big serif score + horizontal bar + side stat + dashed-rule detail line. Used to compare two named entities (Caravan vs Mid-rise). Has a `--compact` variant for tighter rows. Don't use for single-entity stats; use `.rs-metric` for those.

### `.finding` — empirical-finding callout
Left-border gold, dim-gold background, gold uppercase label, ink-colored body. Use sparingly — at most one or two per project. It's the visual equivalent of bold-italic in a paper.

### `.kw` / `.kw-gold` — keyword chips
Always uppercase, always 1px outline, 0.62rem. `.kw-gold` is the "primary" variant — at most 2 per project, the others stay neutral.

### `.tab-btn` — project tab
Three-line layout: gold number, serif title, light sub-title. Always inside a `.tab-group-sep` group. Never style as a "button" — no fill, no border-radius, just a bottom-border that lights up gold when active.

### Strip mode (hero + thumbnails)
For chapters with **many** stage images that should swap interactively, use `data-stage-mode="strip"` and a `<template>` of `.pv-strip-item--img` or `.pv-strip-item--chart`. The JS in [index.html](index.html) builds the hero + thumb rail and animates swaps via FLIP. Don't try to roll a new image-swap mechanism — extend strip mode.

### `.pv-fade-x` — edge-fade utility for horizontal scroll containers
Any horizontal scroll container (project tabs, chapter chip rail, image swipe rows, chart strip) gets its leading/trailing-edge fade from this one class. The shared `.pv-fade-x` rule owns the mask gradient and its `.is-at-start` / `.is-at-end` state styles. Each container only sets `--fade-w` to tune the fade width (e.g. `4rem` for the tabs bar, `1rem` for the chip rail, default `1.5rem` for swipe rows). The `.is-at-start` / `.is-at-end` classes are toggled by `pvWireEdgeFade` based on scroll position. Apply via class statically (HTML) for static containers; add it in JS when the container is built dynamically.

### `.wip-panel` — placeholder for projects without case-study content yet
Don't write the panel HTML by hand. Instead declare `data-wip-sub="…"` on the empty `<section class="pv-chapter">`; `pvActivate` materializes the panel from a single template on first activation. Only the sub-line text varies between projects.

### Custom chapter layouts
A chapter can opt out of the default stack and define its own stage grid (e.g. `.pv-ctx-layout`, `.pv-arch-layout`, `.pv-app-stage`). These are in [index.html](index.html#L1418-L1476). When adding a new one:
- Define `.pv-<chapter>-layout` as the outer flex/grid container.
- Compose it out of `.pv-card`s — don't reinvent the card chrome.
- Add mobile inline overrides under `.pv-inline-imgs .pv-<chapter>-layout { … }` that replace `height:100%`/`flex:1` with explicit `min-height` values. The mobile inline section is the easy thing to forget.

---

## 5. Chapter structure (the data model)

Every project is a `.proj-detail` panel with `data-*` attributes describing the header, and a sequence of `.pv-chapter` sections. Chapters drive the sidebar rail, the stage, and the mobile chips — all built by JS from these markup attributes.

A chapter looks like:
```html
<section class="pv-chapter" id="ch-<slug>"
         data-title="Short Title for Rail"
         data-stage-ref="#ch-<slug>-template">  <!-- OR data-images='[…]' OR data-stage-mode="strip" -->
  <span class="pv-ch-num">01 — Topic</span>
  <h2 class="pv-ch-title">Long Title for Body</h2>
  <p>Body copy…</p>

  <template id="ch-<slug>-template">
    <!-- Whatever the stage should show. Wrap in .pv-<chapter>-layout if custom. -->
  </template>
</section>
```

Four ways to populate the stage:

1. **`data-stage-ref="#…-template"`** — custom layout, content cloned from a `<template>`. Use this when the stage isn't just a flat list of images.
2. **`data-images='[{"src":…, "title":…, "cap":…, "takeaway":…}, …]'`** — simple list of images, rendered as a vertical stack of `.pv-card`s. Use for "here are 2–3 supporting diagrams" chapters.
3. **`data-stage-mode="strip"` + template of `.pv-strip-item`s** — hero + thumbnail rail. Use when there are 4+ stage items the reader should browse interactively.
4. **`data-wip-sub="…"` on an empty chapter** — placeholder panel for projects whose case study isn't built out yet. `pvActivate` injects the panel from a single shared template; only the sub-line text varies per project.

Always supply a `.pv-card-takeaway` for every stage item. The takeaway is non-negotiable — it's how the editorial voice survives the visual stage.

---

## 6. Voice & copy guidelines

Body copy follows a specific register that should be preserved when adding text:

- **Architectural-research voice.** Measured, third-person, slightly formal. "The analysis revealed…", "Counter to conventional assumptions…", "The qualitative track scored…". Avoid first-person and avoid marketing copy.
- **Bold the load-bearing nouns**, not whole sentences. Use `<strong>` for the specific concept under discussion (`<strong>Sense of Community</strong>`, `<strong>Privacy-by-Design</strong>`) — never for emphasis-for-emphasis-sake.
- **Italicize for sub-concepts and book-style emphasis** via `<em>` (`<em>Membership</em>`, `<em>natural experiment</em>`). The serif's italic is part of the visual texture.
- **Numbers stay precise.** "3.9 / 5 (SD = 0.38, p < 0.01)", "0.106 km²", "47 days", "n = 22". Don't round for readability.
- **Section labels are short, gold, uppercase.** "01 — Context", "STUDY METRICS", "EMPIRICAL FINDING".
- **Takeaways are single italic sentences** prefixed by a gold `→`. Aim for the one thing the reader should remember if they only glance at the image.
- **Avoid emoji and avoid icons** — except the `↗` "expand" hint and the `→` takeaway arrow, which are part of the established palette.

---

## 7. Images

- Stored under `images/<project>/…` (e.g. `images/research/`, `images/nkdt/`). Cross-project shared assets go in `images/shared/`. Follow this when adding new images — don't dump in root.
- **Always `loading="lazy"`** on `<img>`.
- **Always a meaningful `alt`** — not "image" or empty. Architectural drawings get descriptive alts ("Building 101 floor plan"); diagrams get their semantic role ("Anonymisation architecture diagram").
- **Cap image heights.** Cards use `max-height: 240–280px` with `object-fit: contain`. Don't let images dominate text — they support it.
- For diagrams against the cream background, `mix-blend-mode: multiply` is used in a couple of places (NKDT type cards) to drop the white background. Reach for it when needed; don't use it broadly.
- **SVGs use the fixed palette in §2** ("SVG / diagram palette"). When creating, editing, or recoloring a diagram, pull hex values from that table — don't invent new ones, don't recolor with arbitrary picks. The palette is small on purpose so the diagram suite reads as one visual system. If you genuinely need a new tone, propose it as an addition to the table first.

---

## 8. JavaScript conventions

The JS lives in `<script>` blocks at the bottom of [index.html](index.html). It is plain ES5/ES6, no build step, no framework. Match the style:

- `const` for module-level constants, `var`/`let` inside functions (existing code mixes; lean `const`/`let` for new code).
- **Cubic ease-out** for any new programmatic scrolling: `1 - Math.pow(1-p, 3)`.
- Use `requestAnimationFrame` for any scroll/resize-driven layout work, with the `ticking` guard pattern.
- Listen for `scroll` with `{ passive: true }`.
- Re-position fixed/sticky elements via JS on `resize` (see `positionBanner`, `positionRail`). Don't try to do mixed-column sticky layouts purely in CSS — the existing code already learned why that breaks.
- Animation slide durations are exported as named constants (`PV_SLIDE_MS = 600`, etc.). If you add new motion, add a similarly named constant rather than scattering magic numbers.
- The `<template>` element is used heavily as the source of truth for stage content — clone its `.content`, don't re-render from strings.
- **Don't add a build tool, bundler, or package manager unless explicitly asked.** This is a hand-authored static site by design.

### Reuse these shared helpers — don't re-roll them
- **`pvWireEdgeFade(el)`** — toggles `.is-at-start` / `.is-at-end` on a scroll container based on `scrollLeft` so the shared `.pv-fade-x` mask gradient updates. Use for any new horizontal scroller.
- **`pvEnableDragScroll(el, { snap })`** — Pointer Events drag-to-scroll with axis lock and (optional) snap-to-child on release. The site's standard scroll-by-drag affordance for any chip / card row.
- **`pvWireHswipe(root)`** — auto-promotes a `.pv-inline-imgs` with 2+ direct card children to `.is-hswipe` on mobile, wires fade + drag + chart-strip click-to-lightbox. Call after appending inline-imgs content; you should rarely need to hand-wire individual scrollers.
- **`wireGalleryNav(opts)`** (lightbox IIFE) — shared gallery plumbing: prev/next clicks, counter, Esc/Arrow keys, horizontal swipe. Both the image lightbox and chart lightbox use it; any future lightbox variant should too.

---

## 9. Accessibility floor

Not perfect, but these are the patterns to preserve:
- Interactive elements are real `<button>`s (no `<div onclick>`).
- Navigation regions have `role="navigation"` + `aria-label`.
- The fixed banner has `aria-hidden="true"` when off-screen.
- All images have `alt`.
- Lightbox supports keyboard close + arrow nav.

Keep this floor; don't regress it.

---

## 10. Quick "am I doing it right?" checklist

Before declaring a new element done, run through:

- [ ] Uses `var(--…)` tokens — no hard-coded `#hex` or magic font-sizes outside the table in §2. Card surfaces use `--card-bg` + `--card-border`; pane animations use `--pv-slide` + `--ease-pane`.
- [ ] Serif for titles/voice, sans for everything else. No mixing within a role.
- [ ] Gold is used as a *signal*, max 1–2 instances per visual unit.
- [ ] Borders/rules do the structuring; no drop-shadows except subtle hover.
- [ ] Has a class prefix that matches its scope (`pv-` reusable, `rs-`/`nk-` project-specific).
- [ ] Body copy is 0.9–0.92rem with line-height 1.8+.
- [ ] If it's a card, it has a `.pv-card-takeaway` with the gold `→`. If it opens the lightbox, it carries `.pv-card--lightbox`.
- [ ] If it's a horizontal scroller, it carries `.pv-fade-x` (with its own `--fade-w`) and is wired by `pvWireEdgeFade` — don't write a new mask gradient.
- [ ] If it's a swipe/scroll row, it goes through `pvWireHswipe` / `pvEnableDragScroll`; if it's a lightbox variant, its nav goes through `wireGalleryNav` — don't re-roll those.
- [ ] If it's an image, it's `loading="lazy"` with a real `alt`, stored under `images/<project>/`.
- [ ] If it's an SVG diagram, every fill/stroke is from the §2 SVG palette — no off-palette hex values.
- [ ] If it's interactive, it's a `<button>` and has a visible hover state.
- [ ] If it's a placeholder chapter, it declares `data-wip-sub="…"` — don't hand-write the `.wip-panel` HTML.
- [ ] Mobile override exists if the layout uses `height:100%` or `flex:1`.
- [ ] Doesn't add a new top-level breakpoint, new `:root` token, or new framework.
- [ ] Reads like a journal page, not a SaaS dashboard.

If three or more boxes are unchecked, the element doesn't belong yet — adjust before merging it in.
