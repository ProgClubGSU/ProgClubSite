# DESIGN.md — progsu.com

> This file describes **only** the design of **progsu.com** — the main site.
> It is the reference for any subdomain (blog.progsu.com, wiki.progsu.com, etc.) that should look like a visual extension of the main site.
> Do NOT import patterns from any other project in this repo.

---

## CRITICAL: What This Is NOT

Before building anything, internalize what the progsu.com design is **not**. These patterns come from other projects in this repo and must never appear in anything referencing this file:

| Pattern | Source to avoid | Why it's wrong |
|---|---|---|
| Constellation / starfield hero | wiki project | Not progsu.com |
| SVG constellation lines between nodes | wiki project | Not progsu.com |
| Glowing orbs / pulsing rings / nebula bloom | wiki project | Not progsu.com |
| Radial nebula gradient background | wiki project | Not progsu.com |
| Background color `#020205` or `#06060f` or any dark navy | wiki project | Background is pure `#000000` |
| `SF Mono` or any monospace font for body/nav | wiki project | Font is Helvetica Neue |
| Horizontal top nav with logo left + links right | wiki project | Nav is a fixed left sidebar |
| ALL CAPS labels / eyebrows (e.g. "40 GUIDES · 14 AUTHORS") | wiki project | All text is lowercase |
| Cyan accent color (`rgba(34,211,238)`) | wiki project | Only accent is purple glow |
| Lavender / indigo link colors (`text-indigo-400`) | wiki global.css | Links are `text-white/40` → `text-white` |
| `bg-gray-950` base color | wiki global.css | Background is `#000` always |
| Drifting starfield layers | wiki / blog hero | Not progsu.com |
| Search bar with purple border inside the hero | blog hero | Not a progsu.com pattern |
| Cluster nodes / satellite dots | wiki / blog hero | Not progsu.com |

---

## 1. Visual Theme & Atmosphere

**Mood:** Dark editorial meets Atlanta streetwear collective. High-fashion lookbook restraint, not a typical tech startup site. Confident, unhurried, premium.

**Density:** Ultra-low. Generous whitespace. Sections breathe at `6rem` vertical padding. Nothing competes for attention except the hero.

**Design philosophy:**
- Pure black canvas. The background is always `#000000` — not dark gray, not navy, not `#020205`.
- Text is white with opacity dialed down. Color comes from *absence*, not paint.
- One accent color — a purple glow — reserved exclusively for hover interactions. Never a fill.
- Two fonts in deliberate contrast: a grotesque sans for UI; a serif italic for names, titles, editorial moments.
- Everything is lowercase. No exceptions in nav, headings, body copy, or button labels.
- Motion is slow, cinematic, blurry on entry. Nothing bounces or pops.

---

## 2. Color Palette & Roles

| Token | Value | Role |
|---|---|---|
| `color-bg` | `#000000` | Page background — every section, every page |
| `color-surface-1` | `rgba(255,255,255,0.02)` | Subtle card surface |
| `color-surface-2` | `rgba(255,255,255,0.05)` | Slightly elevated card surface |
| `color-surface-3` | `rgba(255,255,255,0.06)` | Hover / active surface state |
| `color-surface-deep` | `rgba(30,27,38,0.85)` | Heavy glass card (events, modals) |
| `color-border-1` | `rgba(255,255,255,0.05)` | Hairline border |
| `color-border-2` | `rgba(255,255,255,0.10)` | Standard card / section border |
| `color-border-3` | `rgba(255,255,255,0.12)` | Elevated card border |
| `color-border-hover` | `rgba(255,255,255,0.25)` | Border on hover |
| `color-text-primary` | `#ffffff` | Active links, headings, selected state |
| `color-text-body` | `rgba(255,255,255,0.60)` | Default body copy |
| `color-text-secondary` | `rgba(255,255,255,0.55)` | Secondary descriptions |
| `color-text-muted` | `rgba(255,255,255,0.50)` | Tertiary body text |
| `color-text-dim` | `rgba(255,255,255,0.45)` | Links at rest, nav items |
| `color-text-ghost` | `rgba(255,255,255,0.40)` | Weakest text, labels |
| `color-text-faint` | `rgba(255,255,255,0.35)` | Footer, copyright |
| `color-accent` | `rgb(147,51,234)` | **Purple — text-shadow on hover ONLY. Never a fill.** |
| `color-accent-mid` | `rgba(147,51,234,0.60)` | Mid-spread of purple glow |
| `color-accent-far` | `rgba(147,51,234,0.25)` | Outer spread of purple glow |
| `color-scrollbar-track` | `#111111` | |
| `color-scrollbar-thumb` | `#333333` | |
| `color-scrollbar-hover` | `#555555` | |
| `color-selection-bg` | `#ffffff` | |
| `color-selection-text` | `#000000` | |

**The purple (`rgb(147,51,234)`) appears in exactly one context** — `text-shadow` on hover. Never background, never border, never static color.

---

## 3. Typography Rules

### Font Families

```css
/* All UI, body, labels, navigation, buttons */
font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;

/* Page titles, feature names, member names, post titles */
font-family: 'Noto Serif', Georgia, 'Times New Roman', serif;
```

Global override:
```css
* { font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif !important; }
```
Override select headings/names to serif via inline `style` attribute.

**Never use:** `SF Mono`, `Menlo`, `Cascadia Code`, `Fira Code`, or any monospace font for navigation, headings, labels, or body copy. Monospace is not part of this design.

### Type Hierarchy

| Role | Size | Weight | Style | Font | Case | Tracking |
|---|---|---|---|---|---|---|
| Hero wordmark | `5xl–8xl` responsive | bold 700 | italic | Serif | lowercase | `tracking-tight` |
| Page / section hero title | `4xl–5xl` | bold | italic | Serif | lowercase | `tracking-tight` |
| Section label heading | `2xl–3xl` | bold | normal | Sans | **lowercase** | `tracking-widest` |
| Feature sub-heading | `xl–2xl` | bold | italic | Serif | lowercase | default |
| Body / description | `base–lg` | light 300 | normal | Sans | sentence / lowercase | default |
| Nav links | `lg` | light 300 | normal | Sans | lowercase | default |
| CTA links | `sm` | normal | normal | Sans | lowercase | `tracking-widest` |
| Small labels / metadata | `xs–sm` | normal | normal | Sans | lowercase | `tracking-widest` |
| Tag chips | `xs` | normal | normal | Sans | lowercase | default |

**Cardinal rules:**
- Everything is lowercase (`.toLowerCase()` in templates)
- Body copy: `font-light` (weight 300), not regular
- Line height: `leading-relaxed` for all body paragraphs

---

## 4. Navigation

This is the **only** nav pattern used on progsu.com and all subdomains. Do not use a horizontal top bar.

### Desktop — Fixed Left Sidebar

```html
<nav style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 9999;">
  <div style="position: absolute; top: 50%; left: 2rem; transform: translateY(-50%); pointer-events: auto;
              display: flex; flex-direction: column; gap: 1.5rem;
              font-family: 'Helvetica Neue', sans-serif;">
    <a href="/" class="nav-link">home</a>
    <a href="/posts" class="nav-link">posts</a>
    <a href="https://progsu.com" class="nav-link">progsu.com</a>
  </div>
</nav>
```

Nav link style — at rest `rgba(255,255,255,0.40)`, hover `rgba(255,255,255,1)` + purple glow:
```css
.nav-link {
  font-size: 1rem;       /* text-lg equivalent */
  font-weight: 300;
  color: rgba(255,255,255,0.40);
  text-decoration: none;
  transition: color 0.3s;
}
```

Purple glow on hover (inline JS):
```
onmouseover: color → rgba(255,255,255,1), textShadow → '0 0 12px rgba(147,51,234,1), 0 0 30px rgba(147,51,234,0.6), 0 0 60px rgba(147,51,234,0.25)'
onmouseout:  color → rgba(255,255,255,0.40), textShadow → '0 0 8px rgba(147,51,234,0)'
```

### Mobile — Hamburger + Fullscreen Overlay

Button: `position: fixed; top: 1.25rem; right: 1.25rem; width: 2.5rem; height: 2.5rem; border-radius: 50%; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.08)`. Two `1px` white bars for the icon.

Overlay: `position: fixed; inset: 0; background: rgba(0,0,0,0.95); backdrop-filter: blur(12px)`. Links centered vertically at `font-size: 1.25rem; font-weight: 300`.

---

## 5. Hero Patterns

There are two hero patterns. Use the right one for the right context.

---

### 5A. Main Site Hero (progsu.com index only)

Full-screen (`min-h-screen`) with a 3D WebGL photo-tunnel as the background layer (Three.js + `@react-three/fiber`). Images travel in Z-depth toward the camera with a vintage film shader (desaturated, purple-cool tint, lifted blacks, vignette, animated film grain).

The wordmark sits over the gallery using `mix-blend-mode: exclusion`.

```html
<section style="min-h-screen; position: relative; display: flex; align-items: center; justify-content: center; overflow: hidden;">
  <!-- WebGL gallery fills absolute inset, z-index: 0 -->
  <div style="position: absolute; inset: 0; z-index: 0;"><!-- gallery --></div>

  <!-- mix-blend-exclusion overlay -->
  <div style="position: absolute; inset: 0; pointer-events: none; z-index: 10;
              mix-blend-mode: exclusion; color: #fff;
              display: flex; align-items: center; justify-content: center;">
    <div style="text-align: center; padding: 0 1rem; max-width: 32rem;">
      <h1 style="font-family: Georgia, serif; font-style: italic; font-weight: 700;
                 font-size: clamp(3rem, 8vw, 6rem); letter-spacing: -0.02em;">
        progsu
      </h1>
      <div style="font-family: 'Helvetica Neue', sans-serif; font-size: 0.75rem;
                  letter-spacing: 0.1em; text-transform: uppercase; opacity: 0.7; margin-top: 1.25rem;">
        /prāg ˌes ˈyü/ &nbsp; <em>noun</em>
      </div>
      <p style="font-family: Georgia, serif; font-size: 0.9rem; font-weight: 300;
                opacity: 0.6; margin-top: 0.75rem; line-height: 1.6;">
        builders &amp; dreamers of atl. a new generation of talent.
      </p>
    </div>
  </div>
</section>
```

**If WebGL is not available or not practical**, use the Subdomain Hero (5B) below — **never substitute a constellation/starfield/orb hero**.

---

### 5B. Subdomain / Blog / Inner-Page Hero ← USE THIS FOR blog.progsu.com

This is the correct hero for any subdomain or subpage. It is taken directly from the gitpaid and members page pattern on progsu.com. Simple, text-only, pure black.

```html
<section style="padding-top: 8rem; padding-bottom: 4rem; padding-left: 2rem; padding-right: 2rem;
                background: #000000;">
  <div style="max-width: 48rem; margin: 0 auto; text-align: center;" class="float-in">

    <!-- Wordmark: "progsu / blog" in serif italic -->
    <h1 style="font-family: 'Noto Serif', Georgia, serif; font-style: italic; font-weight: 700;
               font-size: clamp(2.5rem, 6vw, 3.5rem); letter-spacing: -0.02em; color: #fff; margin-bottom: 1rem;">
      progsu / blog
    </h1>

    <!-- Subdomain descriptor: lowercase, sans, muted -->
    <p style="font-family: 'Helvetica Neue', sans-serif; font-size: 1rem; font-weight: 300;
              color: rgba(255,255,255,0.50); line-height: 1.7; max-width: 40ch; margin: 0 auto;">
      short description of what this section does. lowercase. one sentence.
    </p>

  </div>
</section>
```

**What makes this correct:**
- Background is `#000000` — no gradients, no nebula, no tints
- Wordmark is serif + italic, same as `gitpaid`, `members`, etc.
- Description is `font-light`, `text-white/50`
- The `float-in` class adds the scroll-blur reveal
- No search bar, no constellation, no orbs, no stats counter in the hero

---

## 6. Component Patterns

### Section Heading
```html
<h2 class="text-2xl md:text-3xl font-bold text-white mb-8 tracking-widest text-center"
    style="font-family: 'Helvetica Neue', sans-serif;">
  section name
</h2>
```

### Feature Sub-heading (Serif Italic)
```html
<h3 class="text-2xl font-bold text-white italic"
    style="font-family: 'Noto Serif', Georgia, serif !important;">
  feature name
</h3>
```

### Body Paragraph
```html
<p class="text-white/60 leading-relaxed font-light"
   style="font-family: 'Helvetica Neue', sans-serif;">
  description text here
</p>
```

### Ghost Link (Purple Glow on Hover)
The primary link pattern. Used for nav, CTAs, back links, social links.
```html
<a href="/"
   class="text-white/40 hover:text-white text-sm tracking-widest transition-all duration-300"
   style="font-family: 'Helvetica Neue', sans-serif; text-shadow: 0 0 8px rgba(147,51,234,0);"
   onmouseover="this.style.textShadow='0 0 12px rgba(147,51,234,1), 0 0 30px rgba(147,51,234,0.6), 0 0 60px rgba(147,51,234,0.25)'"
   onmouseout="this.style.textShadow='0 0 8px rgba(147,51,234,0)'">
  link text
</a>
```

### CTA Link (Underline Style)
For primary calls-to-action ("join progsu →", "read more →").
```html
<a href="/"
   class="inline-block text-white border-b border-white/30 hover:border-white pb-1 text-sm tracking-widest transition-colors duration-300"
   style="font-family: 'Helvetica Neue', sans-serif;">
  action label →
</a>
```

### Button — Minimal
```html
<button class="bg-white/[0.06] hover:bg-white/[0.1] text-white/70 hover:text-white
               border border-white/10 hover:border-white/20
               px-4 py-2 text-xs tracking-widest rounded
               font-medium transition-all duration-300">
  button label
</button>
```

### Divider List Row (Post / Guide links) — the blog's primary content pattern
```html
<a href="/posts/slug" class="block group">
  <div class="flex items-start justify-between py-6 border-b border-white/10
              group-hover:border-white/25 transition-all duration-300">
    <div class="space-y-2 flex-1 min-w-0">
      <h2 class="text-white font-bold text-lg italic group-hover:text-white/90 transition-colors"
          style="font-family: 'Noto Serif', Georgia, serif !important;">
        post title in italic serif, lowercase
      </h2>
      <p class="text-white/55 text-sm leading-relaxed font-light"
         style="font-family: 'Helvetica Neue', sans-serif;">
        short description, lowercase
      </p>
      <time class="text-white/35 text-xs tracking-widest"
            style="font-family: 'Helvetica Neue', sans-serif;">
        may 23, 2025
      </time>
    </div>
    <span class="text-white/35 group-hover:text-white/60 text-sm ml-6 flex-shrink-0 transition-all duration-300">
      →
    </span>
  </div>
</a>
```

### Card — Hairline
```html
<div class="bg-white/[0.02] border border-white/5 rounded-lg p-6 my-4">
  <!-- content -->
</div>
```

### Card — Heavy Glass (Events, Modals)
```css
background: rgba(30, 27, 38, 0.85);
border: 1.5px solid rgba(255, 255, 255, 0.12);
border-radius: 1.5rem;
backdrop-filter: blur(8px);
box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.25);
```

### Callout / Alert
```html
<div class="border-l-2 border-blue-400/40 bg-blue-400/5 p-4 rounded-r-lg my-4">
  <h4 class="text-blue-300/80 font-semibold mb-2 text-sm">title</h4>
  <div class="text-blue-300/80 text-sm leading-relaxed">content</div>
</div>
```
Color variants: `blue` (info), `orange` (warning), `green` (success), `purple` (tip), `red` (danger).

### Tag / Specialty Chip
```html
<span class="px-2 py-1 text-xs rounded-full border border-white/10 text-white/40 bg-white/5">
  tag name
</span>
```

---

## 7. Layout Principles

### Max-Width Containers
```
Full sections:      max-w-5xl  (1024px)
Article / content:  max-w-4xl  (896px)
Focused text:       max-w-3xl  (768px)
Narrow CTA:         max-w-2xl  (672px)
```
All containers: `mx-auto`.

### Vertical Spacing
```
Standard section:   py-24  (6rem)
Tighter section:    py-16  (4rem)
Subpage hero:       pt-32 pb-16
Footer area:        py-8
```

### Horizontal Padding
```
All sections: px-8 (2rem)
```

### Content offset for left sidebar nav (desktop)
On pages with the sidebar nav, body content needs left offset to clear the nav:
```css
@media (min-width: 768px) {
  .page-content {
    padding-left: calc(160px + 3rem);
  }
}
```

### Grid Patterns
```
Three-column equal:    grid-cols-1 md:grid-cols-3 gap-8
Two-column split:      grid-cols-1 md:grid-cols-2 gap-12
Member grid:           grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16
Post / guide list:     single column, divider rows (no grid)
```

---

## 8. Animation System

### Float-In (Scroll Reveal) — every content block
```css
.float-in {
  opacity: 0;
  transform: translateY(40px);
  filter: blur(10px);
  transition: opacity 0.9s ease-out, transform 0.9s ease-out, filter 0.9s ease-out;
}
.float-in.visible {
  opacity: 1;
  transform: translateY(0);
  filter: blur(0);
}
```
```js
const observer = new IntersectionObserver(
  (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } }),
  { threshold: 0.15 }
);
document.querySelectorAll('.float-in').forEach(el => observer.observe(el));
```

### Purple Hover Glow — all interactive text links
```js
el.addEventListener('mouseover', () => {
  el.style.textShadow = '0 0 12px rgba(147,51,234,1), 0 0 30px rgba(147,51,234,0.6), 0 0 60px rgba(147,51,234,0.25)';
});
el.addEventListener('mouseout', () => {
  el.style.textShadow = '0 0 8px rgba(147,51,234,0)';
});
```

### Hero Title Pulse (wordmark only)
```css
.glow-pulse-title {
  animation: titlePulse 2.5s ease-in-out infinite;
}
@keyframes titlePulse {
  0%, 100% { text-shadow: 0 0 6px rgba(59,130,246,0.18), 0 0 12px rgba(255,255,255,0.10), 0 0 24px rgba(59,130,246,0.08); }
  50%       { text-shadow: 0 0 8px rgba(59,130,246,0.28), 0 0 18px rgba(255,255,255,0.16), 0 0 36px rgba(59,130,246,0.14); }
}
```

### Glitch Char (hover on individual letters of wordmark)
```css
.glitch-char { display: inline-block; transition: color 0.15s, transform 0.15s; cursor: default; }
.glitch-char:hover {
  color: #9333ea;
  text-shadow: 0 0 5px rgba(147,51,234,0.5), 0 0 10px rgba(147,51,234,0.3);
  transform: scale(1.05);
}
```

### Standard Durations
```
Color / opacity:   duration-300 (300ms)
Scroll reveal:     duration-900 (900ms, ease-out)
Modal enter/exit:  300ms ease
```

### Standard Hover Transforms
```
Card hover lift:     hover:-translate-y-1 hover:scale-[1.02]
Active press:        active:scale-95
```

---

## 9. Depth & Elevation

| Level | Usage | CSS |
|---|---|---|
| 0 — Flat | Text, nav links, divider rows | no shadow |
| 1 — Card | Standard glass cards | `box-shadow: 0 8px 32px 0 rgba(31,38,135,0.25)` |
| 2 — Pinned | Pinned/featured cards | `box-shadow: 0 20px 40px rgba(0,0,0,0.3), 0 0 0 3px rgba(255,255,255,0.8), 0 0 40px rgba(147,197,253,0.6), 0 0 80px rgba(147,197,253,0.3)` |

---

## 10. Footer Component

Every page ends the same way. The footer has two layers: a near-invisible binary string texture behind, and a single copyright line in front.

```html
<footer style="position: relative; overflow: hidden;
               border-top: 1px solid rgba(255,255,255,0.05);
               margin-top: 6rem; padding: 3rem 2rem; text-align: center;">

  <!-- Binary texture — decorative, not readable -->
  <div aria-hidden="true"
       style="position: absolute; inset: 0; pointer-events: none; user-select: none;
              overflow: hidden; opacity: 0.03;">
    <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
                font-size: 0.75rem; color: rgba(255,255,255,0.10);
                text-shadow: 0 0 5px rgba(255,255,255,0.10);
                white-space: nowrap; letter-spacing: 0.05em; line-height: 2;">
      1000001100000000101001011011110000000101000011000100111110110100101101101101011000111110111010010000010010101100011001111110010110011010000011001110001100111010010010010011000001001100001111100010100101001010101000000011101000010000000000011101101001010100110111110100001100010100001100010100010110001110001011000001011110010100101011101100001010011100100010000001010000100011111011010110000001010010100000110011000010100001110111101010110010111100111100011001000011011001110000000000101110110001101111101110011011100010111011010001000100101101101100110111010011010110010000101010010000100100110101101110101011011001000111100111001011101000101101001001001011011000011111001001100101110100000111000100010010100001111101100001001110011011111001111101001110000000010000100101101101011011111000011100000010110111001110000110110100110100110011101100000101011101001010111001000000101000010111110101100110000110110001101000101100001110000110110011001010001011011000110100000101111101000011110110100010011110
    </div>
  </div>

  <!-- Copyright line -->
  <p style="position: relative; z-index: 1;
            font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
            font-size: 0.75rem; letter-spacing: 0.12em;
            color: rgba(255,255,255,0.35);">
    &copy; 2025
    <a href="https://progsu.com"
       style="color: rgba(255,255,255,0.35); text-decoration: none;
              text-shadow: 0 0 8px rgba(147,51,234,0); transition: color 0.3s, text-shadow 0.3s;"
       onmouseover="this.style.color='rgba(255,255,255,1)';this.style.textShadow='0 0 12px rgba(147,51,234,1), 0 0 30px rgba(147,51,234,0.6), 0 0 60px rgba(147,51,234,0.25)';"
       onmouseout="this.style.color='rgba(255,255,255,0.35)';this.style.textShadow='0 0 8px rgba(147,51,234,0)';">
      progsu
    </a>
  </p>
</footer>
```

**On desktop with sidebar nav**, offset the footer left edge to clear the nav:
```css
@media (min-width: 768px) {
  footer { margin-left: 160px; }
}
```

**Rules:**
- Binary texture font: `'Helvetica Neue', Helvetica, Arial, sans-serif` — NOT `SF Mono` or any monospace
- Binary texture opacity: `0.03` — barely visible
- Copyright text: `rgba(255,255,255,0.35)`, `font-size: 0.75rem`, `letter-spacing: 0.12em`
- "progsu" link in copyright uses Ghost Link purple glow pattern
- `border-top: 1px solid rgba(255,255,255,0.05)` hairline separator

---

## 11. Post / Article Page Layout

The layout for an individual blog post or article page. All text is left-aligned within a constrained reading width.

```html
<article style="padding-top: 4rem;">

  <!-- Post header -->
  <header style="margin-bottom: 4rem; padding-bottom: 2.5rem;
                 border-bottom: 1px solid rgba(255,255,255,0.06);"
          class="float-in">

    <!-- Back link — Ghost Link pattern -->
    <a href="/"
       style="display: inline-block; margin-bottom: 2.5rem;
              font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
              font-size: 0.75rem; letter-spacing: 0.10em;
              color: rgba(255,255,255,0.40); text-decoration: none;
              text-shadow: 0 0 8px rgba(147,51,234,0);
              transition: color 0.3s, text-shadow 0.3s;"
       onmouseover="this.style.color='rgba(255,255,255,1)';this.style.textShadow='0 0 12px rgba(147,51,234,1), 0 0 30px rgba(147,51,234,0.6), 0 0 60px rgba(147,51,234,0.25)';"
       onmouseout="this.style.color='rgba(255,255,255,0.40)';this.style.textShadow='0 0 8px rgba(147,51,234,0)';">
      ← all posts
    </a>

    <!-- Date -->
    <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
                font-size: 0.70rem; letter-spacing: 0.12em;
                color: rgba(255,255,255,0.30); margin-bottom: 1rem;">
      may 23, 2025
    </div>

    <!-- Title: serif italic, lowercase -->
    <h1 style="font-family: 'Noto Serif', Georgia, serif; font-style: italic; font-weight: 700;
               font-size: clamp(1.75rem, 5vw, 2.75rem); letter-spacing: -0.02em;
               color: #ffffff; line-height: 1.2; margin-bottom: 1rem;">
      post title here, all lowercase
    </h1>

    <!-- Description / lede -->
    <p style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
              font-size: 1rem; font-weight: 300; line-height: 1.7;
              color: rgba(255,255,255,0.50); max-width: 52ch;">
      short description, lowercase, font-light.
    </p>
  </header>

  <!-- Prose body -->
  <div class="prose float-in"
       style="max-width: 68ch; line-height: 1.8;
              font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
              font-size: 1rem; font-weight: 300; color: rgba(255,255,255,0.60);">
    <!-- post content -->
  </div>

</article>
```

### Prose Body Styles (Tailwind Typography override)

If using `@tailwindcss/typography`, apply `prose prose-invert` and add these overrides:

```css
.prose { color: rgba(255,255,255,0.60); font-weight: 300; }
.prose h1, .prose h2, .prose h3 {
  font-family: 'Noto Serif', Georgia, serif !important;
  font-style: italic;
  font-weight: 700;
  color: #fff;
}
.prose p { color: rgba(255,255,255,0.60); font-weight: 300; line-height: 1.8; }
.prose a { color: rgba(255,255,255,0.70); text-decoration: underline; text-underline-offset: 3px; }
.prose a:hover { color: #fff; }
.prose strong { color: #fff; font-weight: 700; }
.prose code {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif !important;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 3px;
  padding: 0.1em 0.4em;
  font-size: 0.875em;
  color: rgba(255,255,255,0.80);
}
.prose blockquote {
  border-left: 2px solid rgba(255,255,255,0.15);
  color: rgba(255,255,255,0.50);
  font-style: italic;
  padding-left: 1.25rem;
}
```

**On desktop with sidebar nav**, offset article content:
```css
@media (min-width: 768px) {
  article {
    padding-left: calc(160px + 3rem);
    padding-right: 3rem;
  }
}
```

---

## 12b. Scrollbar & Browser Chrome

```css
::-webkit-scrollbar { width: 8px; }
::-webkit-scrollbar-track { background: #111; }
::-webkit-scrollbar-thumb { background: #333; border-radius: 4px; }
::-webkit-scrollbar-thumb:hover { background: #555; }

::selection { background: #fff; color: #000; }
::-moz-selection { background: #fff; color: #000; }
```

---

## 13. Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| `< 768px` | Sidebar nav hidden → hamburger top-right; single column layouts |
| `768px+` | Left sidebar nav appears; two-column grids unlock |
| `1024px+` | Three-column grids unlock |

Subpage content top padding:
```css
section:first-child { padding-top: 8rem; }     /* mobile — clears hamburger area */
@media (min-width: 768px) { section:first-child { padding-top: 8rem; } }
```

---

## 14. Copy Voice

- **All lowercase** — nav, headings, post titles, body, tags
- Short declarative sentences. Maximum one clause per sentence.
- Evocative, not descriptive: "thoughts from the builders. on code, career, and culture." Not: "Read our latest blog posts about technology."
- No exclamation points, emojis, or buzzwords
- Colons mid-sentence for rhythm: "built by the people who've done it."
- Dates lowercase: "may 23, 2025"

---

## 15. Do's and Don'ts

### Do
- `#000000` background — always, everywhere
- All text `.toLowerCase()`
- `font-light` (300) for body paragraphs
- `tracking-widest` on section headings and small labels
- Serif italic for page titles, post titles, feature names
- Left sidebar nav on desktop, hamburger overlay on mobile
- Float-in scroll animation on every major content block
- Purple glow via `text-shadow` on hover — never as a fill
- `border-b border-white/30 hover:border-white` for primary CTA links
- `transition-all duration-300` on every interactive element
- Divider list rows for blog post indexes (not card grids)
- `backdrop-filter: blur(8px)` on heavy glass cards

### Don't
- Don't use any background other than pure `#000000`
- Don't add gradients, nebula, or tint overlays to the background
- Don't use a horizontal top nav
- Don't use constellation, starfield, orb, or SVG-line heroes
- Don't use `SF Mono` or any monospace font for UI text
- Don't use purple as a fill, background, or static color
- Don't use `text-indigo-400` or any blue/indigo link color
- Don't use uppercase labels or ALL CAPS text anywhere
- Don't use `font-regular` (400) for body — use `font-light` (300)
- Don't use border-radius larger than `rounded-2xl` (1.5rem)
- Don't add colored fills to callout backgrounds (keep at 5% opacity max)
- Don't use icon libraries for nav — all nav items are text only
- Don't use drop shadows on flat text or standard buttons
- Don't add search bars inside the hero section

---

## 16. Agent Prompt Guide

### Quick Color Reference
```
Background:    #000
Text primary:  #fff
Text body:     rgba(255,255,255,0.60)
Text muted:    rgba(255,255,255,0.50)
Text dim:      rgba(255,255,255,0.40)
Accent:        rgb(147,51,234) — text-shadow hover only
Card surface:  rgba(255,255,255,0.02–0.06)
Card border:   rgba(255,255,255,0.05–0.12)
```

### Ready-to-Use Prompts

**"Build the blog home page"**
> Use DESIGN.md Section 5B for the hero (text-only, no constellation). Use the Divider List Row pattern from Section 6 for the post list. Nav is the fixed left sidebar from Section 4. Background `#000`. All text lowercase. Add `float-in` to each post row.

**"Build a blog post page"**
> Header: `pt-32 px-8 max-w-3xl mx-auto`. Title: italic Noto Serif `text-4xl font-bold`. Date + author: `text-xs tracking-widest text-white/35`. Body prose: `text-white/60 font-light leading-relaxed`. Back link at bottom uses Ghost Link pattern with purple glow.

**"Build a section"**
> `py-24 px-8 bg-black`. Heading: `text-2xl tracking-widest font-bold text-white text-center` in Helvetica Neue, lowercase. Body: `text-white/60 font-light leading-relaxed`. Wrap in `float-in` class.

**"Add links / navigation"**
> Ghost Link pattern: `text-white/40 hover:text-white text-sm tracking-widest`. On hover: `textShadow = '0 0 12px rgba(147,51,234,1), 0 0 30px rgba(147,51,234,0.6), 0 0 60px rgba(147,51,234,0.25)'`. Never use colored link text.

**"The hero looks like a space/constellation scene"**
> That is the wiki project's design — it does not belong here. Delete it. Replace with the Subdomain Hero from Section 5B: pure `#000000` background, centered serif italic h1, muted sans-serif description, `float-in` class, no background effects.
