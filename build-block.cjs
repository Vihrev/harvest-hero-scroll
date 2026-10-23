// Builds block/actitime-hero-demo.js — the auto-play hero demo (auto.html) packed into one
// web component with Shadow DOM, so its styles never clash with the site and vice versa.
// Re-run after editing auto.html:  node build-block.cjs
const fs = require("fs");
const path = require("path");

const src = fs.readFileSync(path.join(__dirname, "auto.html"), "utf8");
const cut = (from, to, s = src) => {
  const a = s.indexOf(from); const b = s.indexOf(to, a + from.length);
  if (a < 0 || b < 0) throw new Error(`marker not found: ${a < 0 ? from : to}`);
  return s.slice(a + from.length, b);
};

// ---- CSS: only the app window, the table and the feature cards (no site header / hero copy / page bg)
const css = `
  :host { display: block; position: relative; width: 100%; --ink: #0d1e40; color: var(--ink); font-family: "Montserrat", sans-serif; }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  .viewport { position: relative; width: 100%; height: 640px; }
  .scaler { position: absolute; left: 50%; top: 0; width: 1890px; height: 900px; transform-origin: 50% 0; }
  #stage { position: absolute; left: 145px; top: 48px; width: 1600px; height: 780px; }
` + cut("/* ---------- actiTIME window ---------- */", "  .after {");

// ---- markup: the scene inside .sticky
const html = `<div class="viewport">${cut('<div class="sticky">', '\n    </div>\n  </section>')}</div>`;

// ---- script: the page script, rewired to the shadow root and the host element
let js = cut("\n<script>\n", "\n</script>");
const swap = (from, to) => { if (!js.includes(from)) throw new Error("script marker not found: " + from.slice(0, 60)); js = js.replace(from, to); };
swap("const q = (s) => document.querySelector(s);", "const q = (s) => root.querySelector(s);");
// scale to the element's own width, not the window's
js = js.replace(/const fit = \(\) => \{[\s\S]*?\n  fit\(\); addEventListener\("resize", fit\);/, `const fit = () => { const w = host.clientWidth || 1200; const s = (sceneScale = Math.min(1, w / 1890));
    q("#scaler").style.transform = \`translateX(-50%) scale(\${s})\`;
    q(".viewport").style.height = Math.round((48 + 780 + 40) * s) + "px"; };
  fit(); new ResizeObserver(fit).observe(host);`);
// the page-background sync belongs to the site, not to the block
js = js.replace(/  const syncBg = \(\) => \{[\s\S]*?syncBg\(\); addEventListener\("resize", syncBg\);\n/, "");
swap("  gsap.registerPlugin(ScrollTrigger);\n", "");
swap("const HOLD = 3,", 'const HOLD = parseFloat(host.getAttribute("hold")) || 3,');
// render seeks immediately (no lazy first render) so `static` / reduced-motion frames are complete at once
swap('defaults: { ease: "none" }, repeat: -1', 'defaults: { ease: "none", lazy: false }, repeat: -1');
// start when visible, pause when scrolled away; reduced motion → show the finished state
js = js.replace(/  \/\/ start once the fonts are in[\s\S]*$/, `  const STORY_END = 4.6; // timeline time of the finished frame (before the outro)
  const still = host.hasAttribute("static") || matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.fonts.ready.then(() => {
    stackCards();
    if (still) { tl.pause(STORY_END); renderTable(5); return; }
    let started = false;
    new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { if (!started) { started = true; gsap.delayedCall(0.4, () => tl.play(0)); } else tl.resume(); }
      else if (started) tl.pause();
    }, { threshold: 0.25 }).observe(host);
  });`);

const out = `/*! actiTIME hero demo — <actitime-hero-demo> web component. Built from auto.html by build-block.cjs; edit the source, not this file. */
(() => {
  if (customElements.get("actitime-hero-demo")) return;
  const CSS = ${JSON.stringify(css)};
  const HTML = ${JSON.stringify(html)};

  // fonts used inside the block (Montserrat for cards, Roboto for the app UI)
  if (!document.querySelector('link[data-actitime-hero-fonts]')) {
    const l = document.createElement("link"); l.rel = "stylesheet"; l.dataset.actitimeHeroFonts = "";
    l.href = "https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&family=Roboto:wght@400;500;600&display=swap";
    document.head.appendChild(l);
  }

  class ActitimeHeroDemo extends HTMLElement {
    connectedCallback() {
      if (this.shadowRoot) return;
      if (!window.gsap) { console.error("<actitime-hero-demo>: load GSAP 3 before this script"); return; }
      const host = this, root = this.attachShadow({ mode: "open" });
      root.innerHTML = "<style>" + CSS + "</style>" + HTML;
${js.split("\n").map((l) => "    " + l).join("\n")}
    }
  }
  customElements.define("actitime-hero-demo", ActitimeHeroDemo);
})();
`;
fs.mkdirSync(path.join(__dirname, "block"), { recursive: true });
fs.writeFileSync(path.join(__dirname, "block", "actitime-hero-demo.js"), out);
console.log("block/actitime-hero-demo.js", (out.length / 1024).toFixed(1) + " KB");
