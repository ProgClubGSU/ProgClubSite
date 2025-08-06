import { c as createAstro, a as createComponent, d as addAttribute, r as renderScript, b as renderTemplate, u as unescapeHTML, f as renderComponent, m as maybeRenderHead, F as Fragment, g as renderHead, e as renderSlot } from './astro/server_DQwDjssB.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */
import { S as SITE_TITLE, a as SITE_DESCRIPTION, N as NAV_LINKS } from './consts_Db3kfyLr.mjs';

const $$Astro$6 = createAstro("https://proggsu.vercel.app");
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/Users/joey/Desktop/ProgClubSite-1/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/joey/Desktop/ProgClubSite-1/node_modules/astro/components/ClientRouter.astro", void 0);

const criticalCSS = "/* Critical CSS - Inlined for fast initial render */\n\n@font-face {\n  font-family: \"VCR\";\n  src: url(\"/fonts/VCRosdNEUE.ttf\") format(\"truetype\");\n  font-style: normal;\n  font-display: swap;\n}\n\n/* Essential Tailwind base styles */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\nhtml {\n  font-family: \"VCR\", ui-monospace, SFMono-Regular, \"SF Mono\", Consolas, \"Liberation Mono\", Menlo, monospace;\n  line-height: 1.5;\n  -webkit-text-size-adjust: 100%;\n  -moz-tab-size: 4;\n    -o-tab-size: 4;\n       tab-size: 4;\n}\n\n/* Essential base styles */\nbody {\n  font-family: \"VCR\", monospace !important;\n  background: #000;\n  color: #fff;\n  margin: 0;\n  padding: 0;\n  overflow-x: hidden;\n  line-height: inherit;\n}\n\n/* Essential layout styles */\nh1, h2, h3, h4, h5, h6 {\n  font-size: inherit;\n  font-weight: inherit;\n  margin: 0;\n}\n\np {\n  margin: 0;\n}\n\n/* Basic flexbox and grid support */\n.flex {\n  display: flex;\n}\n\n.grid {\n  display: grid;\n}\n\n.hidden {\n  display: none;\n}\n\n/* Essential spacing utilities */\n.w-full {\n  width: 100%;\n}\n\n.h-full {\n  height: 100%;\n}\n\n.text-white {\n  color: #fff;\n}\n\n.bg-black {\n  background-color: #000;\n}\n\n/* Basic layout styles for header and main content */\nheader {\n  position: fixed;\n  top: 0;\n  width: 100vw;\n  z-index: 9999;\n}\n\nmain {\n  padding-top: 8rem;\n}\n\n@media (min-width: 640px) {\n  main {\n    padding-top: 7rem;\n  }\n}\n\n@media (min-width: 768px) {\n  main {\n    padding-top: 5rem;\n  }\n}\n\n/* Essential scrollbar styles */\n::-webkit-scrollbar {\n  width: 8px;\n}\n\n::-webkit-scrollbar-track {\n  background: #111;\n}\n\n::-webkit-scrollbar-thumb {\n  background: #333;\n  border-radius: 4px;\n}\n\n::-webkit-scrollbar-thumb:hover {\n  background: #555;\n}\n\n/* Basic selection styles */\n::-moz-selection {\n  background: #fff;\n  color: #000;\n}\n::selection {\n  background: #fff;\n  color: #000;\n}\n\n::-moz-selection {\n  background: #fff;\n  color: #000;\n}\n\n/* Prevent layout shift for images */\nimg {\n  max-width: 100%;\n  height: auto;\n  display: block;\n}\n\n/* Essential grid and flexbox utilities for events page */\n.grid-cols-1 {\n  grid-template-columns: repeat(1, minmax(0, 1fr));\n}\n\n.gap-4 {\n  gap: 1rem;\n}\n\n.gap-6 {\n  gap: 1.5rem;\n}\n\n.px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n\n.py-4 {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n\n.mb-4 {\n  margin-bottom: 1rem;\n}\n\n.mb-6 {\n  margin-bottom: 1.5rem;\n}\n\n.mb-8 {\n  margin-bottom: 2rem;\n}\n\n.text-center {\n  text-align: center;\n}\n\n/* Essential responsive grid for events */\n@media (min-width: 640px) {\n  .sm\\:grid-cols-2 {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n\n@media (min-width: 1024px) {\n  .lg\\:grid-cols-3 {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n} ";

const $$Astro$5 = createAstro("https://proggsu.vercel.app");
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const {
    title = SITE_TITLE,
    description = SITE_DESCRIPTION,
    image = "/embed_preview.png"
  } = Astro2.props;
  return renderTemplate`<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/png" href="/lighthouse.png"><meta name="generator"${addAttribute(Astro2.generator, "content")}><link rel="sitemap" href="/sitemap-index.xml"><!-- DNS prefetch for external domains --><link rel="dns-prefetch" href="//fonts.googleapis.com"><!-- Resource hints for better performance --><link rel="preconnect" href="https://proggsu.vercel.app"><!-- Font preloads with higher priority and fallback --><link rel="preload" href="/fonts/VCRosdNEUE.ttf" as="font" type="font/ttf" crossorigin="anonymous"><!-- Critical CSS inlined for immediate render --><style>${unescapeHTML(criticalCSS)}</style><!-- Prevent FOUC with CSS that hides content until fonts are loaded --><!-- Font loading optimization script -->${renderScript($$result, "/Users/joey/Desktop/ProgClubSite-1/src/components/BaseHead.astro?astro&type=script&index=0&lang.ts")}<!-- Non-critical styles are loaded via DeferredStyles component --><!-- Canonical URL --><link rel="canonical"${addAttribute(canonicalURL, "href")}><!-- Primary Meta Tags --><title>${title}</title><meta name="title"${addAttribute(title, "content")}><meta name="description"${addAttribute(description, "content")}><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(new URL(image, Astro2.url), "content")}><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:site_name" content="progsu - GSU Programming Club"><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(Astro2.url, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(new URL(image, Astro2.url), "content")}><!-- Discord specific --><meta property="og:image:alt" content="progsu - Georgia State University Programming Club"><!-- View Transitions  -->${renderComponent($$result, "ClientRouter", $$ClientRouter, { "data-astro-cid-y4licvga": true })}<!-- Performance hints --><meta name="theme-color" content="#000000"><meta name="color-scheme" content="dark"><!-- Prefetch important pages --><link rel="prefetch" href="/events"><link rel="prefetch" href="/resources">`;
}, "/Users/joey/Desktop/ProgClubSite-1/src/components/BaseHead.astro", void 0);

const $$Astro$4 = createAstro("https://proggsu.vercel.app");
const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Navbar;
  return renderTemplate`${maybeRenderHead()}<nav class="w-full !z-[9999] py-5 px-4 bg-black/50 backdrop-blur-sm relative" data-astro-cid-5blmo7yk> <div class="w-full flex justify-between items-center" data-astro-cid-5blmo7yk> <!-- Logo --> <a href="/" data-astro-cid-5blmo7yk> <div id="logo" class="pt-2 pb-1 !grid !place-items-center select-none leading-none hover:bg-black bg-white scale-110 hover:text-white text-black px-4 transition-all ease-in-out" data-astro-cid-5blmo7yk> ${SITE_TITLE} </div> </a> <!-- Desktop Navigation --> <div class="hidden md:flex items-center gap-4" data-astro-cid-5blmo7yk> <div data-astro-cid-5blmo7yk>/</div> ${NAV_LINKS.map((link) => {
    const href = link.href ?? link.title.toLowerCase().replaceAll(" ", "-");
    const pathname = Astro2.url.pathname.replace(
      "/",
      ""
    );
    const subpath = pathname.match(/[^\/]+/g);
    const isActive = href === pathname || href === "/" + (subpath?.[0] || "");
    const isExternalLink = href.startsWith("http://") || href.startsWith("https://");
    const finalHref = isExternalLink ? href : `/${href}`;
    if (link.children && link.children.length > 0) {
      return renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-5blmo7yk": true }, { "default": ($$result2) => renderTemplate` <div class="relative group" data-astro-cid-5blmo7yk> <button${addAttribute(["hover:bg-white hover:text-black transition-all ease-in-out px-2 max-w-fit flex items-center gap-1", [{ "bg-white text-black": isActive }]], "class:list")} data-astro-cid-5blmo7yk> <div data-astro-cid-5blmo7yk>${link.title}</div> <svg class="w-3 h-3 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-5blmo7yk> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-astro-cid-5blmo7yk></path> </svg> </button> <div class="absolute top-full left-0 mt-1 bg-black/95 backdrop-blur-md border border-white/20 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[120px] z-50" data-astro-cid-5blmo7yk> ${link.children.map((child) => {
        const childHref = child.href ?? child.title.toLowerCase().replaceAll(" ", "-");
        const childPathname = Astro2.url.pathname.replace("/", "");
        const childSubpath = childPathname.match(/[^\/]+/g);
        const childIsActive = childHref === childPathname || childHref === "/" + (childSubpath?.[0] || "");
        const childIsExternalLink = childHref.startsWith("http://") || childHref.startsWith("https://");
        const childFinalHref = childIsExternalLink ? childHref : `/${childHref}`;
        return renderTemplate`<a${addAttribute(["block hover:bg-white hover:text-black transition-all ease-in-out px-3 py-2 text-sm whitespace-nowrap", [{ "bg-white text-black": childIsActive }]], "class:list")}${addAttribute(childFinalHref, "href")}${addAttribute(childIsExternalLink ? "_blank" : void 0, "target")}${addAttribute(childIsExternalLink ? "noopener noreferrer" : void 0, "rel")} data-astro-cid-5blmo7yk> ${child.title} </a>`;
      })} </div> </div> <div data-astro-cid-5blmo7yk>/</div> ` })}`;
    }
    return renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-5blmo7yk": true }, { "default": ($$result2) => renderTemplate` <a${addAttribute(["hover:bg-white hover:text-black transition-all ease-in-out px-2 max-w-fit", [{ "bg-white text-black": isActive }]], "class:list")}${addAttribute(finalHref, "href")}${addAttribute(isExternalLink ? "_blank" : void 0, "target")}${addAttribute(isExternalLink ? "noopener noreferrer" : void 0, "rel")} data-astro-cid-5blmo7yk> <div data-astro-cid-5blmo7yk> ${link.title === "Join" ? renderTemplate`<span data-astro-cid-5blmo7yk><span aria-label="love" role="img" data-astro-cid-5blmo7yk>❤️</span> Join</span>` : link.title} </div> </a> <div data-astro-cid-5blmo7yk>/</div> ` })}`;
  })} </div> <!-- Mobile Hamburger Button --> <button id="hamburger-btn" class="md:hidden flex justify-center items-center w-8 h-8 text-white hover:bg-white/10 rounded transition-colors relative z-10" aria-label="Toggle mobile menu" aria-expanded="false" data-astro-cid-5blmo7yk> <div class="relative w-6 h-4 flex flex-col justify-center items-center" data-astro-cid-5blmo7yk> <span class="hamburger-line absolute w-6 h-0.5 bg-white origin-center" style="top: 0;" data-astro-cid-5blmo7yk></span> <span class="hamburger-line absolute w-6 h-0.5 bg-white origin-center" style="top: 50%; transform: translateY(-50%);" data-astro-cid-5blmo7yk></span> <span class="hamburger-line absolute w-6 h-0.5 bg-white origin-center" style="bottom: 0;" data-astro-cid-5blmo7yk></span> </div> </button> </div> <!-- Mobile Dropdown Menu --> <div id="mobile-menu" class="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md transform translate-y-0 scale-y-0 origin-top opacity-0 transition-all duration-300 ease-out pointer-events-none overflow-hidden" aria-hidden="true" data-astro-cid-5blmo7yk> <div class="px-4 py-6 space-y-3" data-astro-cid-5blmo7yk> ${NAV_LINKS.map((link) => {
    const href = link.href ?? link.title.toLowerCase().replaceAll(" ", "-");
    const pathname = Astro2.url.pathname.replace(
      "/",
      ""
    );
    const subpath = pathname.match(/[^\/]+/g);
    const isActive = href === pathname || href === "/" + (subpath?.[0] || "");
    const isExternalLink = href.startsWith("http://") || href.startsWith("https://");
    const finalHref = isExternalLink ? href : `/${href}`;
    if (link.children && link.children.length > 0) {
      return renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-5blmo7yk": true }, { "default": ($$result2) => renderTemplate` <button class="mobile-nav-link mobile-dropdown-btn w-full hover:bg-white hover:text-black transition-all ease-in-out px-4 py-3 rounded text-lg text-center flex items-center justify-center gap-2" tabindex="-1"${addAttribute(link.title.toLowerCase(), "data-dropdown-target")} data-astro-cid-5blmo7yk> <span data-astro-cid-5blmo7yk>${link.title}</span> <svg class="w-4 h-4 transition-transform mobile-dropdown-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-5blmo7yk> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-astro-cid-5blmo7yk></path> </svg> </button> <div class="mobile-dropdown-content overflow-hidden transition-all duration-300 max-h-0"${addAttribute(link.title.toLowerCase(), "data-dropdown")} data-astro-cid-5blmo7yk> <div class="py-2 space-y-1" data-astro-cid-5blmo7yk> ${link.children.map((child) => {
        const childHref = child.href ?? child.title.toLowerCase().replaceAll(" ", "-");
        const childPathname = Astro2.url.pathname.replace("/", "");
        const childSubpath = childPathname.match(/[^\/]+/g);
        const childIsActive = childHref === childPathname || childHref === "/" + (childSubpath?.[0] || "");
        const childIsExternalLink = childHref.startsWith("http://") || childHref.startsWith("https://");
        const childFinalHref = childIsExternalLink ? childHref : `/${childHref}`;
        return renderTemplate`<a${addAttribute(["mobile-nav-link block hover:bg-white hover:text-black transition-all ease-in-out px-8 py-2 rounded text-base mx-2", [{ "bg-white text-black": childIsActive }]], "class:list")}${addAttribute(childFinalHref, "href")}${addAttribute(childIsExternalLink ? "_blank" : void 0, "target")}${addAttribute(childIsExternalLink ? "noopener noreferrer" : void 0, "rel")} tabindex="-1" data-astro-cid-5blmo7yk> ${child.title} </a>`;
      })} </div> </div> ` })}`;
    }
    return renderTemplate`<a${addAttribute(["mobile-nav-link block hover:bg-white hover:text-black transition-all ease-in-out px-4 py-3 rounded text-lg text-center", [{ "bg-white text-black": isActive }]], "class:list")}${addAttribute(finalHref, "href")}${addAttribute(isExternalLink ? "_blank" : void 0, "target")}${addAttribute(isExternalLink ? "noopener noreferrer" : void 0, "rel")} tabindex="-1" data-astro-cid-5blmo7yk> ${link.title === "Join" ? renderTemplate`<span data-astro-cid-5blmo7yk><span aria-label="love" role="img" data-astro-cid-5blmo7yk>❤️</span> Join</span>` : link.title} </a>`;
  })} </div> </div> </nav>  ${renderScript($$result, "/Users/joey/Desktop/ProgClubSite-1/src/components/Navbar.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/joey/Desktop/ProgClubSite-1/src/components/Navbar.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const today = /* @__PURE__ */ new Date();
  return renderTemplate`${maybeRenderHead()}<div class="h-28 overflow-hidden"> <div class="hero-bg">
1000001100000000101001011011110000000101000011000100111110110100101101101101011000111110111010010000010010101100011001111110010110011010000011001110001100111010010010010011000001001100001111100010100101001010101000000011101000010000000000011101101001010100110111110100001100010100001100010100010110001110001011000001011110010100101011101100001010011100100010000001010000100011111011010110000001010010100000110011000010100001110111101010110010111100111100011001000011011001110000000000101110110001101111101110011011100010111011010001000100101101101100110111010011010110010000101010010000100100110101101110101011011001000111100111001011101000101101001001001011011000011111001001100101110100000111000100010010100001111101100001001110011011111001111101001110000000010000100101101101011011111000011100000010110111001110000110110100110100110011101100000101011101001010111001000000101000010111110101100110000110110001101000101100001110000110110011001010001011011000110100000101111101000011110110100010011110
</div> </div> <section id="footer" class="w-full grid relative place-items-center text-center py-4 bg-white/[0.001]"> <div class="px-6 py-2 rounded-lg bg-white/5 text-white/60 text-sm font-normal">
&copy; ${today.getFullYear()} ${SITE_TITLE}. All rights reserved.
</div> </section>`;
}, "/Users/joey/Desktop/ProgClubSite-1/src/components/Footer.astro", void 0);

const $$Astro$3 = createAstro("https://proggsu.vercel.app");
const $$DeferredStyles = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$DeferredStyles;
  return renderTemplate`<!-- This component handles loading of non-critical CSS after DOM is ready -->${renderScript($$result, "/Users/joey/Desktop/ProgClubSite-1/src/components/DeferredStyles.astro?astro&type=script&index=0&lang.ts")} `;
}, "/Users/joey/Desktop/ProgClubSite-1/src/components/DeferredStyles.astro", void 0);

const $$Astro$2 = createAstro("https://proggsu.vercel.app");
const $$Index$1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$1;
  const propsStr = JSON.stringify(Astro2.props);
  const paramsStr = JSON.stringify(Astro2.params);
  return renderTemplate`${renderComponent($$result, "vercel-speed-insights", "vercel-speed-insights", { "data-props": propsStr, "data-params": paramsStr, "data-pathname": Astro2.url.pathname })} ${renderScript($$result, "/Users/joey/Desktop/ProgClubSite-1/node_modules/@vercel/speed-insights/dist/astro/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/joey/Desktop/ProgClubSite-1/node_modules/@vercel/speed-insights/dist/astro/index.astro", void 0);

const $$Astro$1 = createAstro("https://proggsu.vercel.app");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index;
  const propsStr = JSON.stringify(Astro2.props);
  const paramsStr = JSON.stringify(Astro2.params);
  return renderTemplate`${renderComponent($$result, "vercel-analytics", "vercel-analytics", { "data-props": propsStr, "data-params": paramsStr, "data-pathname": Astro2.url.pathname })} ${renderScript($$result, "/Users/joey/Desktop/ProgClubSite-1/node_modules/@vercel/analytics/dist/astro/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/joey/Desktop/ProgClubSite-1/node_modules/@vercel/analytics/dist/astro/index.astro", void 0);

const $$Astro = createAstro("https://proggsu.vercel.app");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title = SITE_TITLE, description = SITE_DESCRIPTION, hideHomeButton = false } = Astro2.props;
  Astro2.url.pathname === "/";
  return renderTemplate`<html lang="en" class="!overflow-x-hidden no-fouc"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description })}${renderHead()}</head> <body class="bg-black text-white tracking-wide !overflow-x-hidden"> <header class="fixed top-0 w-screen z-[9999]">${renderComponent($$result, "Navbar", $$Navbar, {})}</header> <main class="pt-32 sm:pt-28 md:pt-20">  <div class="max-w-7xl mx-auto px-4"> ${renderSlot($$result, $$slots["breadcrumb"])} </div> ${renderSlot($$result, $$slots["default"])} </main> <footer class="w-screen bottom-0 overflow-x-hidden">${renderComponent($$result, "Footer", $$Footer, {})}</footer> <!-- Cursor glow element --> <div id="cursor-glow" class="cursor-glow"></div> <!-- Background glow effect --> <div id="bg-glow" class="fixed inset-0 pointer-events-none z-0 opacity-0 transition-opacity duration-300"></div> <!-- Load non-critical styles after page render --> ${renderComponent($$result, "DeferredStyles", $$DeferredStyles, {})} <!-- Vercel Speed Insights --> ${renderComponent($$result, "SpeedInsights", $$Index$1, {})} <!-- Vercel Analytics --> ${renderComponent($$result, "Analytics", $$Index, {})} ${renderScript($$result, "/Users/joey/Desktop/ProgClubSite-1/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts")}</body></html>`;
}, "/Users/joey/Desktop/ProgClubSite-1/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
