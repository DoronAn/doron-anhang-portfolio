# Portfolio Design & Coding Guidelines (v2)

This is Doron Anhang's architectural-R&D portfolio: a single-page, **data-driven** static site. It's styled in editorial-print language, not "web app" language. Everything below is the rulebook for adding or changing things; follow it so new work *looks like it was always there*.

The site is **two files**:

- **[projects.js](projects.js)** — the single source of truth. One global object, `window.SITE_DATA`, holding the identity block, the category→color map, every project's copy/images/chart data, and the Chart.js specs. **This is where content lives.** Adding or editing a project means editing this file — never hand-writing HTML.
- **[index.html](index.html)** — all CSS (one `<style>` block) and all JS (one `<script>` block). It renders the entire site from `SITE_DATA` in a single render loop. No framework, no build step, no dependencies except Chart.js (lazy-loaded from CDN, research project only).

> **It's `.js`, not `.json`, on purpose.** `projects.js` is essentially JSON wrapped in `window.SITE_DATA = { … }`. A real `.json` file would require `fetch()`, which browsers block between local files — so the site would render blank when opened from disk (`file://`). The `.js` wrapper loads identically from disk and from a server. Editing experience is the same as JSON; it also tolerates comments (used for field docs and the project template at the bottom of the file).

When in doubt, copy an existing project entry (or the commented template at the bottom of `projects.js`) before inventing a new shape. **Reuse > recreate.**

> **⚠️ Commit before big tasks.** Uncommitted work lives only in the working tree. Before any large or destructive task (promoting a branch, a sweeping find-replace, a refactor), **prompt the user to commit first** — and never `git checkout`/`restore` a tracked file without confirming there's nothing unsaved. A working-tree edit that was never staged is *not* recoverable through git.

---

## 1. The visual tone (read this first)

The site is styled like a **scholarly journal / monograph that grew up** — measured, editorial, restrained, but confident. It is *not* a startup landing page. Specific signals:

- **Two-font system, used semantically.** Sans (`var(--sans)`, **Archivo**) for *everything visible* — headlines, titles, body. Mono (`var(--mono)`, **JetBrains Mono**) for *labels, metadata, numbers, UI chrome* — anything that reads as an instrument label. Never mix the two within one role. Weight carries the hierarchy: Archivo 800 for headlines/titles (uppercase), 300–400 for body, 500–600 for emphasis.
- **The palette is muted on purpose.** This is the *matured* NKDT-logo palette — desaturated and deepened so the four brand colors read as upholstery, not toy blocks. Color is **category-coding**, not decoration: each of the four disciplines owns one color, and that color appears only as a thin accent (a strip's left edge, a chip dot, an `<em>` in a headline, a figure's left border). If you add color to something that isn't carrying category meaning or a structural cue, you've cheapened the rest of it.
- **Density is editorial, not dashboard.** Body copy ~0.91rem, line-height 1.7+. Generous whitespace. Avoid card grids that read like a SaaS dashboard.
- **Rules and borders do the structuring, not boxes.** Hairlines (`var(--hair)`), 2px ink rules for major divisions, left-border color accents for category coding. Avoid drop shadows except as a subtle hover lift.
- **The hero outline-stroke is the one flourish.** The headline's `.alt` words use a transparent fill with an ink stroke. That's the signature move; don't replicate it elsewhere — emphasis everywhere else is the category-color `<em>` or a weight change.

If a new element makes the page feel busier, brighter, or more "modern app," it's wrong — desaturate, thin the strokes, add whitespace, and try again.

---

## 2. Design tokens (the only ones — don't invent new ones)

Defined in `:root` at the top of [index.html](index.html). Always reference via `var(--name)`; never hard-code these values.

### Color
| Token | Value | Use |
|---|---|---|
| `--ivory` | `#F6F1E7` | Page background — warm paper |
| `--ivory2` | `#EFE8D9` | Slightly deeper paper — image/diagram backgrounds, thumb wells |
| `--ink` | `#211E19` | Headlines, strong text, 2px structural rules — warm near-black, never pure black |
| `--warm-gray` | `#6E675B` | Body-adjacent meta, labels, captions |
| `--hair` | `#DCD3C2` | All hairline rules and borders |
| `--bronze` | `#A8814C` | **Digital** category + default accent (matured gold) |
| `--sage` | `#65805F` | **Design** category (matured green) |
| `--slate` | `#33526B` | **Research** category (matured blue) |
| `--clay` | `#9E4B3C` | **Architecture** category (matured red) |

**Category → color** is the load-bearing system. It's declared once in `SITE_DATA.categories` and flows everywhere via the per-strip `--acc` custom property:

| Category | Token | Meaning |
|---|---|---|
| `research` | `--slate` | Studies, surveys, spatial analysis |
| `architecture` | `--clay` | Housing, urban, interior projects |
| `design` | `--sage` | Objects, fabrication, craft |
| `digital` | `--bronze` | Software, automation, data tooling |

A strip sets `style="--acc:<category color>"`; everything inside (left edge, panel kicker, figure borders, chart bars, the `→` takeaway) inherits `var(--acc)`. **Don't hard-code a category hex** — read it from `SITE_DATA.categories[cat].color` (data) or `var(--acc)` (CSS).

### Type
- `--sans` — **Archivo** 300/400/500/600/800, Google Fonts. Everything visible.
- `--mono` — **JetBrains Mono** 400/500. Labels, metadata, numbers, UI chrome.

**Scale, by role** (don't invent in-between sizes):

| Role | Size | Family / weight | Notes |
|---|---|---|---|
| Hero headline | `clamp(2.5rem,5vw,4.2rem)` | sans 800, uppercase | `.alt` words = outline stroke |
| Strip / panel / chapter title | `clamp(1.5rem,2.3vw,2.1rem)` → `1.3rem` | sans 800 (titles) / 600 (chapter) | uppercase for strip+panel |
| Fact / metric number | `1.5–1.6rem` | sans 800 | |
| Body copy | `~0.91rem` | sans 300/400, color `#494337` | line-height 1.7+ |
| Kicker / eyebrow | `0.6–0.68rem` | mono, uppercase, letter-spacing 0.2–0.26em | category-colored |
| Label / tag / meta / caption | `0.58–0.66rem` | mono, uppercase, letter-spacing 0.1–0.22em | color `--warm-gray` |
| Takeaway (`→ …`) | `~0.75rem` | sans italic | gold/accent arrow prefix |

**Kicker recipe** (the mono category-colored label above panels & chapters):
```css
font-family: var(--mono);
font-size: 0.62rem;
letter-spacing: 0.26em;
text-transform: uppercase;
color: var(--acc, var(--bronze));
```

### Spacing & layout
- Page gutter via `.grid`: `max-width:1240px`, side padding **2.5rem** desktop / **1.3rem** mobile.
- Strip heights: **158px** default · **96px** when open (slim banner) · **46px** when dimmed/filtered-out.
- Card / figure border-radius: small (**0–3px**) — sharper reads more editorial. Pills (buttons, tags) are the only fully-rounded things. Lightbox images use **8px**.
- Figure/chart left-border accent: **3px**, category-colored.

### Motion
- Tokens: `--ease` = `cubic-bezier(.4,0,.2,1)`, `--dur` = `.55s`. Hover/state transitions use these.
- **All programmatic scrolling goes through `glideTo()`** — a custom tween using **easeInOutCubic** that forces `behavior:'instant'` per frame (so it isn't fought by CSS `scroll-behavior:smooth`). Never call `scrollIntoView`/`scrollTo({behavior:'smooth'})` for project navigation; use `glideTo` / `glideToStrip`. Durations in use: **850ms** (open/close glide), **1100ms** (full-project reveal nudge of ~520px).
- Image hover zoom on strip covers: slow **2.2s** ease. Panel hero/thumb swap: **180ms** crossfade.

### Breakpoints
- Main breakpoint **880px**; a secondary tweak at **560px** (figure grid). Don't add intermediate breakpoints unless the layout truly breaks.

### SVG / diagram palette (legacy research diagrams — still fixed)
The research project's diagrams (`images/research/d1…d5*.svg`, `images/nkdt/*.svg`) were authored in a **bold, saturated** palette derived from the Ariel campus map and the NKDT logo. They were **not** recolored for v2, and they remain canonical. When creating, editing, or recoloring any diagram, pull hex values from this table — don't invent new ones, don't recolor with arbitrary picks. The palette is small on purpose so the diagram suite reads as one system.

| Family | Hex(es) | Use |
|---|---|---|
| Cream / paper | `#F5E6D3` surface · `#EBD7BD` band · `#D4B998` border · `#FAF4E8` wash | card surfaces inside SVGs |
| Sand / gold | `#E8B872` · `#B07A2A` border · `#6B4A14` deepest | gold surfaces/accents (map roads) |
| Warm ink | `#3A3024` | titles/strong text in SVGs (never pure black) |
| Cobalt blue | `#D6E4F0` · `#A8C2DC` · `#5A95C8` · `#2E7CB8` · `#0F4A82` | blue family (surface→ink) |
| Mint green | `#DCEEDC` · `#6CB68A` · `#2A8550` | green family |
| Coral red | `#F5D9D2` · `#D45645` · `#8E2E20` · `#6B2218` | red family |
| Lavender | `#E8DFEE` · `#9B7FB8` · `#7A5FA3` · `#5E4582` | purple family |
| Warm greys | `#C9C0B2` · `#8E867A` · `#5A554E` | dividers, secondary/body text |

Rules: pair colors **within a family** (surface+border+text), one family = one category per diagram, flat fills only (no gradients/shadows), text uses warm ink `#3A3024` or body grey `#5A554E` (never `#000`). Note: the *page* palette (§ above) is muted; the *SVG* palette is saturated. They are deliberately different systems — don't cross them.

---

## 3. The data model (`projects.js` / `SITE_DATA`)

`window.SITE_DATA` has four top-level keys: `identity`, `categories`, `projects[]`, `chartSpecs`.

### A project entry
```js
{
  id: "nkdt",                 // unique slug → URL hash (#nkdt) and element ids
  cat: "architecture",        // research | architecture | design | digital → drives --acc
  title: "NKDT // …",         // full title (long form)
  stripTitle: "NKDT — …",     // the title shown on the index strip
  stripSub: "One-line hook",  // optional sub-line under the strip title
  year: "2022",
  eyebrow: "B.Arch Final Project · Ariel University, 2022",
  meta: "Supervisor: … · …",  // shown in the full-project header (HTML allowed: links)
  kw: ["Keyword", …],         // keyword chips in the panel
  cover: { src:"images/…", pos:"center 55%", contain:false },  // strip cover; omit/null → parchment "ghost number" strip
  wip: false,                 // true → no full view; panel shows wipNote
  wipNote: "…",               // shown when wip:true

  summary: {                  // the ~70vh panel (always present)
    kicker: "…",              // mono category-colored label
    headline: 'Question with one <em>accent</em> word.',  // <em> renders in --acc
    paras: ["…", "…"],
    facts: [{ v:"3", l:"Typologies" }, …],   // big-number counters (optional)
    images: [{ src, cap, pos?, contain? }, …]  // hero + thumb stage (first = hero)
  },

  chapters: [                 // the full-project long-form (null → panel only / WIP)
    {
      num: "01",
      title: "Chapter title",
      html: `<p>…</p>`,       // body HTML — see content blocks below
      figures: [{ src, title?, cap, takeaway?, wide?, contain?, pos?, accent? }, …],
      charts: [ … ]           // Chart.js cards (research only) — see chartSpecs
    }, …
  ]
}
```

### Rules for the data
- **`id` is the contract.** It's the hash route, the element id (`strip-<id>`, `ch-<id>-<num>`), and the gallery key. Keep it unique and URL-safe.
- **Image paths are root-relative** (`"images/<project>/…"`). The renderer passes them through `src()` untouched. Store assets under `images/<project>/`; shared ones under `images/shared/`.
- **`cover` optional.** No cover → the strip renders a parchment band with a large outlined "ghost number" (used for WIP / text-first projects). Use `pos` to tune the crop (`object-position`), `contain:true` for diagrams that shouldn't be cropped.
- **`<em>` in a `headline` renders in the category color** — that's the panel's emphasis device (the hero's outline-stroke is reserved for the top of the page).
- **Every figure should carry a `takeaway`** — the single italic sentence (rendered with a `→` prefix) telling the reader why the image matters. This is how the editorial voice survives the visual stage. Non-negotiable, same as v1.
- **WIP projects:** set `wip:true` + `wipNote`, `cover:null`, `chapters:null`. The four studio projects (acre, telaviv, nomad, kibbutz) are currently WIP placeholders — don't silently "fill" them with invented content.
- **To add a project:** copy the commented template at the bottom of `projects.js`, fill it, drop images under `images/<id>/`. No HTML, no index.html edits.

`identity` holds the hero (dossier id, kicker, outline-stroke headline, statement, the spec list with category dots, contact). `chartSpecs` holds the three research charts' label/data/axis config (see §5).

---

## 4. Render & interaction architecture (`index.html`)

One render loop builds the whole index from `SITE_DATA.projects`; there is no per-project markup. Key functions (all in the single `<script>`):

- **`renderStrip(p, idx)`** — builds one project's strip + panel + full view from its data entry. Registers its lightbox gallery in `GALLERIES[id]`.
- **`openProject` / `closeProject` / `closeWithScroll` / `clearFull`** — the open/close state machine.
- **`setFilter` / `applyDim`** — category filtering; non-matching strips get `.dim`.
- **`glideTo` / `glideToStrip`** — the scroll tween (see §2 Motion). Use these, not native smooth-scroll.
- **`syncFromHash`** + `popstate` — deep-linking (`#nkdt`) and browser-back support.
- **lightbox IIFE** — `openLB` + wheel-zoom-around-cursor + drag-pan + gallery prev/next + keyboard nav.
- **`loadCharts` / `initCharts`** — lazy-load Chart.js from CDN and draw the research charts on first open.

### The interaction ladder (four states per project)
1. **Dimmed** (46px, desaturated) — a project filtered out by the category filter. Set via `.dim`.
2. **Strip** (158px) — the default. Cover image, category-colored left edge, the floating text band, hover zoom + "Open —" cue.
3. **Panel** (~70vh) — opens on click. Kicker, `<em>`-accent headline, paragraphs, keyword chips, fact counters, a hero+thumbnail image **stage** (thumb click swaps the hero), and a **Full project** button.
4. **Full** — chapters with a sticky left **chapter rail** (IntersectionObserver highlights the current one), figure cards, charts. A hollow **floating Close** pill sits bottom-right the whole time.

Behaviors to preserve: opening **glides the strip's top edge to the top of the viewport**; "Full project" toggles to **"Minimize project"** and gives a gentle downward nudge (it doesn't jump to the content); **closing glides the banner to the top first, then collapses** (so content disappears below the fold, no lurch); filtering collapses non-matching strips in place; only one project is open at a time.

**Don't** reach for these patterns when extending: a real framework, a build step, a second data file, native smooth-scroll for navigation, or per-project hand-written HTML. The render loop + data entry is the extension path.

---

## 5. Component vocabulary (reuse — don't invent)

All built by `renderStrip` from data; you mostly add **data**, not markup. The CSS classes, for reference when styling:

- **`.strip` / `.strip-bar` / `.strip-info`** — the index row. `.strip-info` is the floating text band (mono number, tag pill, title, year, inline "Open —" cue), inset evenly from both edges, floating above the strip's bottom so the cover color shows below it.
- **`.panel`** — the ~70vh summary. `.panel-kicker`, `.panel h3` (with `<em>` accent), `.panel-sum` paragraphs, `.kws` chips, `.panel-facts` counters, `.panel-cta`.
- **`.stage` / `.stage-hero` / `.stage-thumbs`** — the panel's image area: one hero + a thumb rail; clicking a thumb crossfades it into the hero. Clicking the hero opens the lightbox.
- **`.figcard`** — a full-project figure: title, caption, image, and a `.fc-take` line prefixed with the accent `→`. `wide:true` spans the grid; `accent:"var(--…)"` overrides the left border. Opens the lightbox.
- **`.chartcard` + `.viab` rows** — a chart with optional head-to-head score bars above it (`viab` = named entity, big score, fill bar, side stat). Research only.
- **Content blocks usable in chapter `html`:** `.note` (accent-bordered callout with a mono label — the "finding" equivalent), `.metrics` (4-up KPI strip), `.pillars` (3-up concept cards), `.moves` (numbered move list), `.pubs` (publication list). Style them with `--acc`/`--pc` so they inherit the project color.
- **`.float-close`** — the hollow bottom-right close pill (visible only while a project is fully open).
- **lightbox** (`.lb*`) — zoom/pan/gallery image viewer; 8px rounded images; keyboard + arrow nav.

The **`→` takeaway** is the one editorial element that must appear on every figure. Always italic, always accent-arrow-prefixed, one line.

---

## 6. Voice & copy guidelines

The copy register is the same architectural-research voice as v1 — preserve it when adding text:

- **Architectural-research voice.** Measured, third-person, lightly formal. "The analysis revealed…", "Counter to conventional assumptions…". Avoid marketing copy. First-person is acceptable only where the original used it (e.g. the Yahoo role bullets, the ring "made for my wife").
- **Bold the load-bearing nouns**, not whole sentences. `<strong>` for the specific concept under discussion (`<strong>Sense of Community</strong>`), never emphasis-for-emphasis.
- **Italicize sub-concepts** via `<em>` (`<em>natural experiment</em>`). In panel headlines, `<em>` also carries the category color — so reserve it there for the one or two words that should pop.
- **Numbers stay precise.** "3.9 / 5 (SD = 0.38, p < 0.01)", "0.106 km²", "47 days", "n = 22". Don't round for readability.
- **Avoid emoji and icons** — except the `→` takeaway arrow, the `↗` external-link/expand hint, and the `◷` WIP clock, which are part of the established set.
- **Separators are semantic** — the glyph signals what kind of label you're reading. Keep these consistent (carried from v1, adapted to the data fields):
  - **`stripTitle`**: spaced em dash. `NKDT — Architecture as a Dynamic System`.
  - **`title` (long form)**: double slash. `NKDT // Architecture as a Dynamic System`.
  - **Chapter `num`**: a bare two-digit string, `"01"`. (Date ranges that sit in a number slot, like `2015 – 2023`, use a spaced en dash.)
  - **Captions, takeaways, figure titles, `.panel-sub`-style lines**: colon for "label: detail". `Type A: Urban Corridor`.
  - **Mid-sentence asides in body copy**, plus `<title>` and eyebrows: spaced en dash (`–`).
  - **Numeric ranges** (`1–5`, `0.033 km²`): en dash, no surrounding spaces — these are values, not separators.
  - **Code comments**: spaced en dash (`–`).

---

## 7. Images

- Stored under `images/<project>/…` (`images/research/`, `images/nkdt/`, `images/design/`). Shared assets in `images/shared/`. Follow this — don't dump in root.
- The renderer adds `loading="lazy"` (and eager for the first two covers) and `decoding="async"` automatically; if you ever hand-write an `<img>`, keep `loading="lazy"`.
- **Always a meaningful `alt`/title** — drawings get descriptive alts ("Building 101 floor plan"); diagrams get their semantic role.
- **Use `contain:true`** in data for diagrams/plans that must not be cropped (renders `object-fit:contain` on parchment); use `pos` to tune photographic crops.
- **Cap heights via the existing classes** — images support the text, they don't dominate it.
- **SVG diagrams use the fixed saturated palette in §2.** Don't invent new diagram hex values; if you genuinely need a new tone, propose adding it to the table first.

---

## 8. JavaScript conventions

Plain ES6 in one `<script>`, no build, no framework. Match the style:

- `const`/`let`; arrow functions; template literals for the render strings.
- **All navigation scrolling uses `glideTo`/`glideToStrip`** (easeInOutCubic, `behavior:'instant'` internally). Don't reintroduce `scrollIntoView({behavior:'smooth'})` for project nav — it fights the tween and feels jumpy. A new glide cancels the previous one (`glideGen`).
- Scroll/observe work uses **IntersectionObserver** (chapter rail) — don't poll scroll position for that.
- The lightbox, filter, hash-routing, and chart-loading are **singletons** wired once after the render loop. Extend them; don't spin up parallel mechanisms.
- **Chart.js is lazy-loaded from CDN on first open of the research project** and guarded against double-init (`dataset.done`). Any new charted project follows the same `chartSpecs` + `initCharts` path.
- **Don't add a build tool, bundler, package manager, or second runtime dependency** unless explicitly asked. This is a hand-authored static site by design.

---

## 9. Accessibility floor

Preserve these:
- Interactive elements are real `<button>`s / `<a>`s (no `<div onclick>`).
- `:focus-visible` outlines are defined globally — don't remove them.
- Strip bars carry `aria-expanded`; the lightbox is a `role="dialog"` with keyboard close + arrow nav.
- Every image has a real `alt`.
- `prefers-reduced-motion` is honored for smooth-scroll (kept narrow so the deliberate hover/zoom still reads). Keep that scope; don't globally kill transitions (an earlier version did and it silently broke the hover zoom).

---

## 10. Quick "am I doing it right?" checklist

- [ ] Content went into **`projects.js`**, not hand-written HTML.
- [ ] Uses `var(--…)` tokens / `--acc` — no hard-coded category hex or off-scale font sizes.
- [ ] Archivo for visible type, JetBrains Mono for labels/meta/numbers. No mixing within a role.
- [ ] Color carries **category meaning** or a structural cue — not decoration. Muted page palette, not the saturated SVG palette.
- [ ] Borders/rules structure the layout; no drop shadows except a subtle hover lift.
- [ ] Every figure has a `takeaway` with the accent `→`.
- [ ] Navigation scrolling uses `glideTo`/`glideToStrip`, never native smooth-scroll.
- [ ] Images are root-relative under `images/<project>/`, with real `alt`; diagrams use `contain:true`.
- [ ] SVG diagrams use the fixed §2 saturated palette — no off-palette hex.
- [ ] WIP projects use `wip:true` + `wipNote` — not invented content.
- [ ] Separators follow §6 (em-dash stripTitle, `//` long title, colon captions, en-dash ranges).
- [ ] No new framework, build tool, top-level breakpoint, or `:root` token.
- [ ] Reads like a journal page that grew up, not a SaaS dashboard.

If three or more boxes are unchecked, adjust before merging.
