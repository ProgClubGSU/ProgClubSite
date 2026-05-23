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
- One accent color — a purple glow — reserved exclusively for hover interactions on page-level links. Never a fill. **Nav links do NOT use purple glow.**
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
| `color-text-body` | `rgba(255,255,255,0.60)` | Default body copy / nav links at rest |
| `color-text-secondary` | `rgba(255,255,255,0.55)` | Secondary descriptions |
| `color-text-muted` | `rgba(255,255,255,0.50)` | Tertiary body text |
| `color-text-dim` | `rgba(255,255,255,0.45)` | Back links at rest |
| `color-text-ghost` | `rgba(255,255,255,0.40)` | Weakest links, labels |
| `color-text-faint` | `rgba(255,255,255,0.35)` | Timestamps, arrows |
| `color-accent` | `rgb(147,51,234)` | **Purple — text-shadow on hover ONLY. Never a fill.** |
| `color-accent-mid` | `rgba(147,51,234,0.60)` | Mid-spread of purple glow |
| `color-accent-far` | `rgba(147,51,234,0.25)` | Outer spread of purple glow |
| `color-scrollbar-track` | `#111111` | |
| `color-scrollbar-thumb` | `#333333` | |
| `color-scrollbar-hover` | `#555555` | |
| `color-selection-bg` | `#ffffff` | |
| `color-selection-text` | `#000000` | |

**The purple (`rgb(147,51,234)`) appears in exactly one context** — `text-shadow` on hover for page-level links (back links, CTAs, social links). **Never on nav links, never as a background, never as a static color.**

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
Override select headings/names to serif via inline `style` attribute (or `style="font-family: 'Noto Serif', Georgia, serif !important;"`).

**Never use:** `SF Mono`, `Menlo`, `Cascadia Code`, `Fira Code`, or any monospace font for navigation, headings, labels, or body copy. Monospace is not part of this design.

### Type Hierarchy

| Role | Tailwind size | Weight | Style | Font | Case | Tracking |
|---|---|---|---|---|---|---|
| Hero wordmark | `text-5xl`–`text-8xl` responsive | `font-bold` | italic | Serif | lowercase | `tracking-tight` |
| Page / section hero title | `text-4xl md:text-5xl` | `font-bold` | italic | Serif | lowercase | `tracking-tight` |
| Section label heading | `text-2xl md:text-3xl` | `font-bold` | normal | Sans | **lowercase** | `tracking-widest` |
| Feature sub-heading | `text-xl`–`text-2xl` | `font-bold` | italic | Serif | lowercase | default |
| Body / description | `text-base md:text-lg` | `font-light` | normal | Sans | sentence / lowercase | default |
| Nav links | `text-lg` | `font-light` | normal | Sans | lowercase | default |
| CTA / back links | `text-sm` | normal | normal | Sans | lowercase | `tracking-widest` |
| Small labels / metadata | `text-xs` | normal | normal | Sans | lowercase | `tracking-widest` |
| Tag chips | `text-xs` | normal | normal | Sans | lowercase | default |

**Cardinal rules:**
- Everything is lowercase (`.toLowerCase()` in templates)
- Body copy: `font-light` (weight 300), not regular
- Line height: `leading-relaxed` for all body paragraphs

---

## 4. Navigation

This is the **only** nav pattern used on progsu.com and all subdomains. Do not use a horizontal top bar.

### Desktop — Fixed Left Sidebar

The nav is full-viewport with `pointer-events-none` on the container so it doesn't block page clicks. Only the links div re-enables pointer events.

**Nav links use CSS-only hover (`hover:text-white`) — no purple glow.** Purple glow is reserved for page-level links, not navigation.

```astro
<nav class="fixed top-0 left-0 w-full h-full pointer-events-none !z-[9999]">

  <!-- Desktop links -->
  <div class="absolute top-1/2 left-4 md:left-8 transform -translate-y-1/2 pointer-events-auto">
    <div class="hidden md:flex flex-col space-y-4"
         style="font-family: 'Helvetica Neue', sans-serif;">

      <!-- Regular link — at rest text-white/60, hover text-white -->
      <a class="text-white/60 hover:text-white text-lg font-light nav-link block
                transition-colors duration-150"
         href="/">
        home
      </a>

      <!-- Active link: text-white added via class:list -->
      <a class:list={[{ "text-white": isActive }]}
         class="text-white/60 hover:text-white text-lg font-light nav-link block"
         href="/members">
        members
      </a>

      <!-- Dropdown nav item (optional) -->
      <div class="relative group nav-link">
        <div class="text-white/60 hover:text-white text-lg font-light flex items-center gap-1 cursor-pointer">
          guides <span class="text-xs opacity-60">▼</span>
        </div>
        <div class="absolute left-0 top-8 bg-black/90 backdrop-blur-sm border border-white/10
                    rounded-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible
                    transition-all duration-200 min-w-[140px] z-50">
          <a class="block px-4 py-2 text-white/60 hover:text-white hover:bg-white/5
                    text-sm font-light transition-colors duration-150"
             href="/guides/sub">
            sub item
          </a>
        </div>
      </div>

    </div>
  </div>

  <!-- Mobile hamburger button -->
  <div class="md:hidden absolute top-4 right-4 pointer-events-auto">
    <button id="mobile-menu-btn"
            class="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full
                   flex items-center justify-center transition-colors duration-300"
            aria-label="Toggle mobile menu">
      <div class="w-4 h-4 flex flex-col justify-center items-center">
        <span class="w-3 h-0.5 bg-white mb-1"></span>
        <span class="w-3 h-0.5 bg-white mb-1"></span>
        <span class="w-3 h-0.5 bg-white"></span>
      </div>
    </button>
  </div>

  <!-- Mobile fullscreen overlay -->
  <div id="mobile-menu"
       class="md:hidden fixed inset-0 bg-black/95 backdrop-blur-md
              opacity-0 invisible transition-all duration-300 pointer-events-none"
       style="font-family: 'Helvetica Neue', sans-serif;">

    <!-- Close button (X) -->
    <button id="mobile-menu-close"
            class="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20
                   rounded-full flex items-center justify-center transition-colors duration-300"
            aria-label="Close mobile menu">
      <div class="w-4 h-4 flex flex-col justify-center items-center">
        <span class="w-3 h-0.5 bg-white rotate-45 absolute"></span>
        <span class="w-3 h-0.5 bg-white -rotate-45 absolute"></span>
      </div>
    </button>

    <!-- Mobile links — centered, text-xl (larger than desktop) -->
    <div class="flex flex-col items-center justify-center h-full space-y-8">
      <a class="text-white/60 hover:text-white text-xl font-light
                transition-colors duration-300 mobile-nav-link"
         href="/">
        home
      </a>
      <!-- etc. -->
    </div>
  </div>
</nav>

<script>
  document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('mobile-menu-btn');
    const close = document.getElementById('mobile-menu-close');
    const menu = document.getElementById('mobile-menu');

    const openMenu = () => {
      menu?.classList.remove('opacity-0', 'invisible', 'pointer-events-none');
      menu?.classList.add('opacity-100', 'visible', 'pointer-events-auto');
    };
    const closeMenu = () => {
      menu?.classList.remove('opacity-100', 'visible', 'pointer-events-auto');
      menu?.classList.add('opacity-0', 'invisible', 'pointer-events-none');
    };

    btn?.addEventListener('click', () => menu?.classList.contains('opacity-100') ? closeMenu() : openMenu());
    close?.addEventListener('click', closeMenu);
    menu?.querySelectorAll('.mobile-nav-link').forEach(l => l.addEventListener('click', closeMenu));
    menu?.addEventListener('click', e => { if (e.target === menu) closeMenu(); });
  });
</script>
```

**Summary of exact classes:**
- Nav container: `fixed top-0 left-0 w-full h-full pointer-events-none !z-[9999]`
- Links wrapper: `absolute top-1/2 left-4 md:left-8 transform -translate-y-1/2 pointer-events-auto`
- Links inner: `hidden md:flex flex-col space-y-4`
- Desktop link: `text-white/60 hover:text-white text-lg font-light nav-link block`
- Mobile button: `w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-300`
- Three hamburger bars: `<span class="w-3 h-0.5 bg-white mb-1">` × 2, then `<span class="w-3 h-0.5 bg-white">`
- Mobile overlay: `md:hidden fixed inset-0 bg-black/95 backdrop-blur-md opacity-0 invisible transition-all duration-300 pointer-events-none`
- Mobile links: `text-xl font-light` (bigger than desktop's `text-lg`)

---

## 5. Hero Patterns

There are two hero patterns. Use the right one for the right context.

---

### 5A. Main Site Hero (progsu.com index only)

Full-screen (`min-h-screen`) with a 3D WebGL photo-tunnel as the background layer (Three.js + `@react-three/fiber`). Images travel in Z-depth toward the camera with a vintage film shader (desaturated, purple-cool tint, lifted blacks, vignette, animated film grain).

The wordmark sits over the gallery using `mix-blend-mode: exclusion`.

There is also a scroll animation: the `#hero-progsu` wordmark transitions from horizontal in the hero to vertical as a sidebar label as the user scrolls down, using `position: fixed` and `rotate(-90deg)`.

```html
<section style="min-height: 100vh; position: relative; display: flex; align-items: center; justify-content: center; overflow: hidden;">
  <!-- WebGL gallery fills absolute inset, z-index: 0 -->
  <div style="position: absolute; inset: 0; z-index: 0;"><!-- Three.js gallery --></div>

  <!-- mix-blend-exclusion wordmark overlay -->
  <div style="position: absolute; inset: 0; pointer-events: none; z-index: 10;
              mix-blend-mode: exclusion; color: #fff;
              display: flex; align-items: center; justify-content: center;">
    <div style="text-align: center; padding: 0 1rem; max-width: 32rem;">
      <h1 id="hero-progsu"
          style="font-family: Georgia, serif; font-style: italic; font-weight: 700;
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

This is the correct hero for any subdomain or subpage. Taken directly from the gitpaid/members/history page pattern on progsu.com. Simple, text-only, pure black.

```astro
<!-- Exact Astro/Tailwind from progsu.com source (history.astro pattern) -->
<section class="pt-32 pb-16 px-8">
  <div class="max-w-3xl mx-auto text-center float-in">

    <h1 class="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight italic"
        style="font-family: 'Noto Serif', Georgia, serif !important;">
      progsu / blog
    </h1>

    <p class="text-base md:text-lg text-white/50 leading-relaxed font-light max-w-2xl mx-auto"
       style="font-family: 'Helvetica Neue', sans-serif;">
      short description of what this section does. lowercase. one sentence.
    </p>

  </div>
</section>
```

**What makes this correct:**
- Background is `#000000` — no gradients, no nebula, no tints
- Outer section: `pt-32 pb-16 px-8` (not `pt-24`, not `py-24`)
- Inner div: `max-w-3xl mx-auto text-center float-in`
- h1: `text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight italic` + serif inline style
- p: `text-base md:text-lg text-white/50 leading-relaxed font-light max-w-2xl mx-auto`
- No search bar, no constellation, no orbs, no stats counter in the hero

---

## 6. Component Patterns

### Section Heading
```astro
<h2 class="text-2xl md:text-3xl font-bold text-white mb-8 tracking-widest text-center"
    style="font-family: 'Helvetica Neue', sans-serif;">
  section name
</h2>
```

### Feature Sub-heading (Serif Italic)
```astro
<h3 class="text-2xl font-bold text-white italic"
    style="font-family: 'Noto Serif', Georgia, serif !important;">
  feature name
</h3>
```

### Body Paragraph
```astro
<p class="text-white/60 leading-relaxed font-light"
   style="font-family: 'Helvetica Neue', sans-serif;">
  description text here
</p>
```

### Ghost Link — Page-Level (Purple Glow on Hover)
Used for back links, CTAs, social links. **Not used for nav links.**
```astro
<a href="/"
   class="text-white/45 hover:text-white text-sm tracking-widest transition-all duration-300"
   style="text-shadow: 0 0 8px rgba(147,51,234,0);"
   onmouseover="this.style.color='rgba(255,255,255,1)';this.style.textShadow='0 0 12px rgba(147,51,234,1), 0 0 30px rgba(147,51,234,0.6), 0 0 60px rgba(147,51,234,0.25)';"
   onmouseout="this.style.color='rgba(255,255,255,0.45)';this.style.textShadow='0 0 8px rgba(147,51,234,0)';">
  ← back
</a>
```

### Back Link + Subpage Inline Copyright
Subpages (contact, members, history, gitpaid) use an inline copyright instead of the Footer component. Placed at the bottom of the page content:
```astro
<div class="py-8 text-center">
  <a href="/"
     class="text-white/45 hover:text-white text-sm tracking-widest transition-all duration-300"
     style="text-shadow: 0 0 8px rgba(147,51,234,0);"
     onmouseover="this.style.color='rgba(255,255,255,1)';this.style.textShadow='0 0 12px rgba(147,51,234,1), 0 0 30px rgba(147,51,234,0.6), 0 0 60px rgba(147,51,234,0.25)';"
     onmouseout="this.style.color='rgba(255,255,255,0.45)';this.style.textShadow='0 0 8px rgba(147,51,234,0)';">
    ← back to progsu.com
  </a>
  <p class="text-white/50 text-xs mt-6 tracking-widest"
     style="font-family: 'Helvetica Neue', sans-serif;">
    &copy; 2025 progsu
  </p>
</div>
```

### White Glow — Highlighted Text Callout
Used for emphasizing key stats or phrases inline within body text:
```astro
<span class="text-white"
      style="text-shadow: 0 0 20px rgba(255,255,255,0.3), 0 0 40px rgba(255,255,255,0.1);">
  1500+ builders
</span>
```

### CTA Link (Underline Style)
For primary calls-to-action ("join progsu →", "read more →"):
```astro
<a href="/"
   class="inline-block text-white border-b border-white/30 hover:border-white pb-1
          text-sm tracking-widest transition-colors duration-300"
   style="font-family: 'Helvetica Neue', sans-serif;">
  action label →
</a>
```

### Button — Minimal
```astro
<button class="bg-white/[0.06] hover:bg-white/[0.1] text-white/70 hover:text-white
               border border-white/10 hover:border-white/20
               px-4 py-2 text-xs tracking-widest rounded
               font-medium transition-all duration-300">
  button label
</button>
```

### Divider List Row (Post / Guide links) — blog's primary content pattern
```astro
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
```astro
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
```astro
<div class="border-l-2 border-blue-400/40 bg-blue-400/5 p-4 rounded-r-lg my-4">
  <h4 class="text-blue-300/80 font-semibold mb-2 text-sm">title</h4>
  <div class="text-blue-300/80 text-sm leading-relaxed">content</div>
</div>
```
Color variants: `blue` (info), `orange` (warning), `green` (success), `purple` (tip), `red` (danger).

### Tag / Specialty Chip
```astro
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

Add `float-in` class to any element that should animate in on scroll.

**CSS:**
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

**Astro script — must use `astro:page-load` for view transitions:**
```astro
<script>
  function initFloatIn() {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      }),
      { threshold: 0.15 }
    );
    document.querySelectorAll('.float-in').forEach(el => observer.observe(el));
  }
  // astro:page-load fires on initial load AND after every client-side navigation
  document.addEventListener('astro:page-load', initFloatIn);
</script>
```

### Purple Hover Glow — page-level links only (NOT nav links)
Applied to back links, CTAs, social links. Inline `onmouseover` / `onmouseout`:
```js
onmouseover="this.style.textShadow='0 0 12px rgba(147,51,234,1), 0 0 30px rgba(147,51,234,0.6), 0 0 60px rgba(147,51,234,0.25)'"
onmouseout="this.style.textShadow='0 0 8px rgba(147,51,234,0)'"
```
Always also set `style="text-shadow: 0 0 8px rgba(147,51,234,0);"` on the element as baseline so the transition has a starting value.

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

In Astro template (maps each letter to a span):
```astro
{["p","r","o","g","s","u"].map(char => (
  <span class="glitch-char">{char}</span>
))}
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

The footer has two parts stacked vertically: a binary string texture block, then a copyright pill.

```astro
<!-- Part 1: Binary texture block (height fixed, overflows hidden) -->
<div class="h-28 overflow-hidden">
  <div class="hero-bg" aria-hidden="true">
    1000001100000000101001011011110000000101000011000100111110110100...
  </div>
</div>

<!-- Part 2: Copyright pill -->
<section id="footer"
         class="w-full grid relative place-items-center text-center py-4 bg-white/[0.001]">
  <div class="px-6 py-2 rounded-lg bg-white/5 text-white/60 text-sm font-normal">
    &copy; {new Date().getFullYear()} progsu. All rights reserved.
  </div>
</section>
```

The `.hero-bg` CSS class (from `animations.css`):
```css
.hero-bg {
  font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif; /* NOT monospace */
  font-size: 2rem;
  color: rgba(255,255,255,0.1);
  text-shadow: 0 0 5px rgba(255,255,255,0.1);
  opacity: 0.03;
  word-wrap: break-word;
  user-select: none;
  -webkit-user-select: none;
}
```

**Key details:**
- Binary texture: `font-size: 2rem`, `opacity: 0.03` — renders as a large unreadable mass of digits
- Binary texture container: `h-28 overflow-hidden` (Tailwind) — clips to a fixed band
- Binary texture font: `'Helvetica Neue'` — NOT monospace
- Copyright: inside a **pill** — `px-6 py-2 rounded-lg bg-white/5`
- Copyright text: `text-white/60 text-sm font-normal` — no purple glow, no link
- No `border-top` separator above footer
- No left margin offset (footer is full-width, not inside the nav-offset content area)

**Subpages (contact, members, history, gitpaid) do NOT use the Footer component.** They use the inline copyright pattern from Section 6 instead.

---

## 11. Post / Article Page Layout

The layout for an individual blog post or article page. All text is left-aligned within a constrained reading width.

```astro
<article style="padding-top: 4rem;">

  <header class="float-in"
          style="margin-bottom: 4rem; padding-bottom: 2.5rem;
                 border-bottom: 1px solid rgba(255,255,255,0.06);">

    <!-- Back link: Ghost Link pattern with purple glow -->
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

    <!-- Date: tiny, tracked, muted -->
    <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
                font-size: 0.70rem; letter-spacing: 0.12em;
                color: rgba(255,255,255,0.30); margin-bottom: 1rem;">
      may 23, 2025
    </div>

    <!-- Title: serif italic, lowercase, clamp -->
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
       style="max-width: 68ch; line-height: 1.8;">
    <!-- post content slot -->
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

## 12. Timeline + Stats Patterns

### Vertical Timeline (from history.astro)
Used for year-by-year history pages:
```astro
<div class="relative">
  <!-- Center vertical line -->
  <div class="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2"></div>

  <!-- Timeline item -->
  <div class="relative flex items-start gap-8 mb-12 float-in">
    <!-- Dot on the center line -->
    <div class="absolute left-1/2 -translate-x-1/2 mt-1.5">
      <!-- Milestone dot (purple): -->
      <div class="w-2 h-2 rounded-full bg-purple-400"></div>
      <!-- Regular dot: -->
      <div class="w-2 h-2 rounded-full bg-white/30"></div>
    </div>

    <!-- Content (left or right side depending on layout) -->
    <div class="w-1/2 pr-8 text-right">
      <div class="text-xs text-white/45 tracking-widest mb-1">2022</div>
      <h3 class="text-white font-bold italic"
          style="font-family: 'Noto Serif', Georgia, serif !important;">
        milestone name
      </h3>
      <p class="text-white/55 text-sm font-light leading-relaxed">
        description
      </p>
    </div>
  </div>
</div>
```

### Stats Row (from history.astro)
Horizontal key numbers displayed center-aligned:
```astro
<div class="flex justify-center items-center gap-12 md:gap-20 float-in">
  <div class="text-center">
    <div class="text-2xl md:text-3xl font-light text-white">42</div>
    <div class="text-xs text-white/45 tracking-widest"
         style="font-family: 'Helvetica Neue', sans-serif;">
      members
    </div>
  </div>
  <div class="text-center">
    <div class="text-2xl md:text-3xl font-light text-white">12</div>
    <div class="text-xs text-white/45 tracking-widest"
         style="font-family: 'Helvetica Neue', sans-serif;">
      events
    </div>
  </div>
</div>
```

---

## 13. Sponsor Strip (SocialProof)

The infinite-scrolling sponsor logo strip used on the main page. Fades in/out at edges via CSS mask.

```astro
<div class="relative w-full py-16 overflow-hidden">
  <!-- Optional sparkle backdrop: purple dots, low density -->

  <p class="text-center text-white/45 text-xs tracking-[0.3em] uppercase mb-10"
     style="font-family: 'Helvetica Neue', sans-serif;">
    trusted by builders backed by
  </p>

  <!-- Infinite scroll strip with edge fade masks -->
  <div class="relative overflow-hidden
              [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]
              [-webkit-mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">

    <!-- Logo track (animated via rAF JS) -->
    <div class="flex w-max whitespace-nowrap items-center will-change-transform">
      <!-- Two copies of the logo set for seamless looping -->
      {[0, 1].map(() => (
        <div class="flex items-center">
          {logos.map(logo => (
            <div class="mx-10 flex-shrink-0 flex items-center justify-center">
              <img src={logo.src} alt={logo.name}
                   class="h-7 w-auto object-contain brightness-0 invert opacity-30 hover:opacity-60 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      ))}
    </div>

  </div>
</div>
```

**Key details:**
- Label: `text-white/45 text-xs tracking-[0.3em] uppercase` — Helvetica Neue
- Logos: `brightness-0 invert opacity-30 hover:opacity-60` — all rendered as white silhouettes
- Fade masks: CSS `[mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]`
- Animation: `requestAnimationFrame` loop, ~42.5s per full cycle, `will-change-transform` on the track
- Sparkle component (optional): `color="#a855f7"`, `density={300}`, `speed={0.3}`, `opacity={0.5}`

---

## 14. Event Card (EventArticleCard)

Card used in event listing grids. Fixed minimum height, status badge, inline metadata with SVG icons.

```astro
<div class="w-full min-h-64 bg-white/5 border border-white/10 rounded-xl p-4
            hover:bg-white/10 transition-all duration-300 hover:shadow-lg overflow-hidden">
  <a href={`/events/${slug}`} class="block h-full">
    <div class="h-full flex flex-col min-h-56">

      <!-- Status badge row -->
      <div class="flex items-center justify-between mb-2">
        <div class="flex items-center gap-1">
          {pinned && (
            <span class="bg-yellow-500/20 border border-yellow-400/30 text-yellow-300
                         px-1.5 py-0.5 rounded-full text-xs font-medium">📌</span>
          )}
          <!-- Status: upcoming=blue, active=green, past=gray, tbd=yellow -->
          <span class="bg-blue-500/20 border border-blue-400/30 text-blue-400
                       px-1.5 py-0.5 rounded-full text-xs font-medium">
            Upcoming
          </span>
        </div>
        {featured && (
          <span class="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30
                       text-purple-300 px-1.5 py-0.5 rounded-full text-xs font-medium">⭐</span>
        )}
      </div>

      <!-- Title -->
      <h3 class="text-lg font-bold text-white leading-tight mb-3 line-clamp-2 break-words">
        event title (not forced lowercase here)
      </h3>

      <!-- Date / location with SVG icons -->
      <div class="space-y-1 text-xs text-white/80">
        <div class="flex items-center gap-1">
          <!-- calendar SVG icon -->
          <span>May 23, 2025 • 6:00 PM</span>
        </div>
        <div class="flex items-center gap-1">
          <!-- pin SVG icon -->
          <span class="truncate">Atlanta, GA</span>
        </div>
      </div>

      <!-- Excerpt -->
      <p class="text-white/70 text-xs leading-relaxed line-clamp-2 break-words">
        short event description
      </p>

      <!-- Tags -->
      <div class="flex flex-wrap gap-1 mt-auto pt-1">
        <span class="bg-purple-500/20 border border-purple-400/30 text-purple-300
                     px-1.5 py-0.5 rounded-full text-xs">
          hackathon
        </span>
      </div>

      <!-- Card footer -->
      <div class="flex-shrink-0 pt-3 border-t border-white/10 mt-3">
        <div class="flex items-center justify-between">
          <div class="text-xs text-white/60">3 resources</div>
          <div class="flex items-center gap-1 text-blue-300 text-xs">
            <span>Read More</span>
            <!-- chevron SVG -->
          </div>
        </div>
      </div>

    </div>
  </a>
</div>
```

**Status badge color map:**
| Status | Badge classes |
|---|---|
| `upcoming` | `bg-blue-500/20 border-blue-400/30 text-blue-400` |
| `active` (today) | `bg-green-500/20 border-green-400/30 text-green-400` |
| `past` | `bg-gray-500/20 border-gray-400/30 text-gray-400` |
| `tbd` | `bg-yellow-500/20 border-yellow-400/30 text-yellow-400` |

---

## 15. Member Card (MemberCard)

Complex component with role-based gradient borders, liquid glass blur, and sparkle animations.

### Card shell — role-based gradient border
```astro
<div class={`group relative overflow-hidden rounded-2xl transition-all duration-700 ease-out
             hover:scale-[1.025] hover:translate-y-[-6px]
             ${isFoundingPresident ? 'bg-gradient-to-br from-violet-500/[0.18] via-purple-400/[0.12] to-pink-400/[0.10] border-2 border-violet-400/50' :
               isPresident       ? 'bg-gradient-to-br from-amber-500/[0.15] via-yellow-400/[0.10] to-amber-400/[0.08] border-2 border-amber-400/40' :
               isCsuite          ? 'bg-gradient-to-br from-indigo-500/[0.14] via-blue-400/[0.09] to-indigo-400/[0.07] border border-indigo-400/40' :
                                   'bg-gradient-to-br from-white/[0.12] via-white/[0.08] to-white/[0.04] border border-white/20'
             }`}>
```

### Liquid glass effect
```css
.liquid-glass {
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
}
```

### Role badge (top-left floating pill)
```astro
<div class="absolute top-4 left-4 z-20">
  <div class="px-3 py-1.5 rounded-full liquid-glass shadow-lg">
    <span class="text-xs font-medium uppercase tracking-wide text-white/90">
      {member.role}
    </span>
  </div>
</div>
```

### Member info area
```astro
<div class="relative p-4 pt-16 z-10">
  <h3 class="text-lg font-bold mb-2 text-white group-hover:text-cyan-300 transition-colors duration-500">
    {member.name}
  </h3>
  <p class="text-xs text-white/80 mb-2">Major: {member.major}</p>
  <p class="text-xs text-white/90 leading-relaxed">{member.description}</p>

  <!-- Specialty tags -->
  <div class="flex flex-wrap gap-1.5 mb-4">
    <span class="px-2 py-1 text-[10px] rounded-full border border-white/20 text-white/90
                 bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm">
      specialty
    </span>
  </div>

  <!-- Social links -->
  <div class="flex gap-2">
    <a href="https://github.com/handle" target="_blank"
       class="flex items-center gap-1.5 px-3 py-1.5 rounded-full
              bg-gradient-to-r from-gray-600/30 to-gray-700/30 border border-white/20
              text-white/90 hover:text-white hover:border-white/40
              text-[10px] backdrop-blur-sm transition-all duration-300 hover:scale-105">
      <!-- GitHub SVG --> GitHub
    </a>
    <a href="https://linkedin.com/in/handle" target="_blank"
       class="flex items-center gap-1.5 px-3 py-1.5 rounded-full
              bg-gradient-to-r from-blue-600/30 to-blue-700/30 border border-white/20
              text-white/90 hover:text-white hover:border-white/40
              text-[10px] backdrop-blur-sm transition-all duration-300 hover:scale-105">
      <!-- LinkedIn SVG --> LinkedIn
    </a>
  </div>
</div>
```

**Role hierarchy for styling:**
1. Founding President → violet/pink gradient, extra sparkle animations
2. Presidents → amber/gold gradient, golden sparkle animations  
3. C-Suite → indigo/blue gradient, pulse glow
4. Standard members → white/purple gradient, basic hover

---

## 16. Scrollbar & Browser Chrome

```css
::-webkit-scrollbar { width: 8px; }
::-webkit-scrollbar-track { background: #111; }
::-webkit-scrollbar-thumb { background: #333; border-radius: 4px; }
::-webkit-scrollbar-thumb:hover { background: #555; }

::selection { background: #fff; color: #000; }
::-moz-selection { background: #fff; color: #000; }
```

---

## 17. Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| `< 768px` | Sidebar nav hidden → hamburger top-right; single column layouts |
| `768px+` | Left sidebar nav appears; two-column grids unlock |
| `1024px+` | Three-column grids unlock |

Global top padding (from `critical.css`):
```css
main { padding-top: 8rem; }           /* mobile */
@media (min-width: 640px)  { main { padding-top: 7rem; } }
@media (min-width: 768px)  { main { padding-top: 5rem; } }
```

---

## 18. Copy Voice

- **All lowercase** — nav, headings, post titles, body, tags
- Short declarative sentences. Maximum one clause per sentence.
- Evocative, not descriptive: "thoughts from the builders. on code, career, and culture." Not: "Read our latest blog posts about technology."
- No exclamation points, emojis, or buzzwords
- Colons mid-sentence for rhythm: "built by the people who've done it."
- Dates lowercase: "may 23, 2025"

---

## 19. Do's and Don'ts

### Do
- `#000000` background — always, everywhere
- All text `.toLowerCase()`
- `font-light` (300) for body paragraphs
- `tracking-widest` on section headings and small labels
- Serif italic for page titles, post titles, feature names
- Left sidebar nav on desktop, hamburger overlay on mobile
- Float-in scroll animation on every major content block
- Purple glow via `text-shadow` on hover — page-level links only, never nav links
- `border-b border-white/30 hover:border-white` for primary CTA links
- `transition-all duration-300` on every interactive element
- Divider list rows for blog post indexes (not card grids)
- `backdrop-filter: blur(8px)` on heavy glass cards
- `document.addEventListener('astro:page-load', ...)` for any DOM-querying JS

### Don't
- Don't use any background other than pure `#000000`
- Don't add gradients, nebula, or tint overlays to the background
- Don't use a horizontal top nav
- Don't use constellation, starfield, orb, or SVG-line heroes
- Don't use `SF Mono` or any monospace font for UI text
- Don't use purple as a fill, background, or static color
- Don't use `text-indigo-400` or any blue/indigo as a link color (that's a wiki pattern)
- Don't use uppercase labels or ALL CAPS text anywhere
- Don't use `font-regular` (400) for body — use `font-light` (300)
- Don't use border-radius larger than `rounded-2xl` (1.5rem)
- Don't add colored fills to callout backgrounds (keep at 5% opacity max)
- Don't use icon libraries for nav — all nav items are text only
- Don't add search bars inside the hero section
- Don't add purple glow to nav links — nav uses CSS-only `hover:text-white`
- Don't use `document.addEventListener('DOMContentLoaded', ...)` alone — always pair with `astro:page-load`

---

## 20. Agent Prompt Guide

### Quick Color Reference
```
Background:    #000
Text primary:  #fff
Text body:     rgba(255,255,255,0.60)   → text-white/60
Text muted:    rgba(255,255,255,0.50)   → text-white/50
Text dim:      rgba(255,255,255,0.45)   → text-white/45
Text ghost:    rgba(255,255,255,0.40)   → text-white/40
Accent:        rgb(147,51,234) — text-shadow hover only, page links only
Card surface:  rgba(255,255,255,0.02–0.06)
Card border:   rgba(255,255,255,0.05–0.12)
```

### Ready-to-Use Prompts

**"Build the blog home page"**
> Use DESIGN.md Section 5B for the hero (text-only, `pt-32 pb-16 px-8`, `max-w-3xl mx-auto text-center float-in`, no constellation). Use the Divider List Row pattern from Section 6 for the post list. Nav is the fixed left sidebar from Section 4 — nav links use `hover:text-white` only, no purple glow. Background `#000`. All text lowercase. Add `float-in` to each post row. Wire up float-in with `document.addEventListener('astro:page-load', ...)`.

**"Build a blog post page"**
> Header: `pt-32 px-8 max-w-3xl mx-auto`. Back link: Ghost Link pattern with purple glow (see Section 6). Title: italic Noto Serif `text-4xl font-bold tracking-tight`. Date: `text-xs tracking-widest text-white/30`. Body prose: `text-white/60 font-light leading-relaxed max-w-[68ch]`. Use Section 11 for the exact article layout.

**"Build a section"**
> `py-24 px-8 bg-black`. Heading: `text-2xl tracking-widest font-bold text-white text-center` in Helvetica Neue, lowercase. Body: `text-white/60 font-light leading-relaxed`. Wrap in `float-in` class.

**"Add links / navigation"**
> Nav links: `text-white/60 hover:text-white text-lg font-light` — CSS only, no inline JS. Page-level links (back, CTAs): Ghost Link pattern with `onmouseover` textShadow purple glow (see Section 6). Never use colored link text.

**"The hero looks like a space/constellation scene"**
> That is the wiki project's design — it does not belong here. Delete it. Replace with the Subdomain Hero from Section 5B: `<section class="pt-32 pb-16 px-8"><div class="max-w-3xl mx-auto text-center float-in">` with an italic Noto Serif h1 and muted Helvetica Neue description. No background effects, no canvas, no WebGL.

**"The float-in animation isn't working after page navigation"**
> You're missing the `astro:page-load` event listener. Replace `DOMContentLoaded` with `document.addEventListener('astro:page-load', initFloatIn)` — Astro's view transitions don't re-fire `DOMContentLoaded` on client-side navigation.
