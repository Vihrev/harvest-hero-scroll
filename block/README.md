# actiTIME hero demo — `<actitime-hero-demo>`

Animated timesheet for the hero of the actiTIME vs Harvest landing (`/harvest-alternative`).
It is one self-contained web component: markup, styles and animation live inside Shadow DOM,
so site CSS does not affect the block and the block does not affect the site.

Live demo: https://vihrev.github.io/harvest-hero-scroll/block/demo.html

## What it does

1. The week fills in: the hours, the daily waves and the task progress bars.
2. The app window moves right, and a white panel with 4 feature cards slides in on the left.
3. Each card plays its action: timer, task progress, timesheet approval, invoice $3,200.
4. The last frame holds for 7 s, then everything returns smoothly to the first frame and loops.

The animation starts when the block is at least 25% visible and pauses when it scrolls out of view.
If the user has "reduce motion" enabled, the block shows the finished frame without animation.

## Install

1. Copy `actitime-hero-demo.js` into the site's static files, for example `/js/actitime-hero-demo.js`.
2. Load GSAP 3 **before** the component (any 3.x works; 3.12.5 is tested):

   ```html
   <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
   <script src="/js/actitime-hero-demo.js" defer></script>
   ```

   If the site already loads GSAP, do not load it twice.
3. Put the tag where the demo should appear, under the hero heading and buttons:

   ```html
   <div class="hero__demo">
     <actitime-hero-demo></actitime-hero-demo>
   </div>
   ```

The block takes the full width of its container and scales the whole scene to fit.
Its height follows the width automatically (about 0.46 × width).
The design is built for 1890 px; on wider containers it does not scale up.
Recommended container width: up to 1640 px.

## Attributes

| Attribute | Default | What it does |
|---|---|---|
| `hold="7"` | `7` | Seconds to hold the last frame before looping |
| `static` | — | No animation: always show the finished frame (for example, for a screenshot) |

## Fonts

The block uses **Montserrat** (cards) and **Roboto** (app UI). If the page has no
`link[data-actitime-hero-fonts]`, the component adds the Google Fonts stylesheet itself.
If the site serves these fonts locally, add an empty marker so the component skips Google Fonts:

```html
<link data-actitime-hero-fonts rel="preload" href="/fonts/montserrat.woff2" as="font" crossorigin>
```

## Background

The block itself is transparent. The lilac background with faint stripes belongs to the hero section.
CSS from the Figma `Bg` layer:

```css
.hero {
  background:
    repeating-linear-gradient(90deg, rgba(255,255,255,.5) 0 1px, transparent 1px 6px),
    linear-gradient(180deg, #fff 31.4%, rgba(255,255,255,.24) 66.8%),
    radial-gradient(ellipse 69.4% 63.3% at 49% 36.7%, #fff 0%, #f2ddff 100%) #f2ddff;
}
```

## Mobile

On narrow screens the scene scales down as a whole, so on phones the text in the timesheet gets small.
If a separate mobile version is needed, hide the block below 768 px and show a static image:

```css
@media (max-width: 767px) { actitime-hero-demo { display: none; } }
```

The Figma mockups for 1280 / 768 / 468 are in the "Promotion: Update advertising landing pages" page, Section 1.

## Files

- `actitime-hero-demo.js` — the component; this is the only file the site needs.
- `demo.html` — a page with an example hero section.
- `README.md` — this file.

The component is generated from `auto.html` by `build-block.cjs` (`node build-block.cjs`).
Do not edit `actitime-hero-demo.js` by hand: change `auto.html` and rebuild.
