/* empty css                                 */
import { c as createAstro, a as createComponent, m as maybeRenderHead, r as renderComponent, e as renderScript, b as renderTemplate } from '../chunks/astro/server_ncwxtDV0.mjs';
import 'kleur/colors';
import { g as getEvents } from '../chunks/sanity_BijJ_opN.mjs';
import '../chunks/index_CVC0tT_4.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_BOxEsUKp.mjs';
import { S as SITE_TITLE, A as ABOUT_ME } from '../chunks/consts_Db3kfyLr.mjs';
import { $ as $$Section } from '../chunks/Section_nY4FSCjW.mjs';
import { s as sortEventsByPriority, a as separateEventsByDisplayType, $ as $$BlogPostCard } from '../chunks/eventUtils_DWGEVX8I.mjs';
import { $ as $$Layout } from '../chunks/Layout_CMInvgMo.mjs';
export { renderers } from '../renderers.mjs';

const HeroImg = new Proxy({"src":"/_astro/hero.BtK30mYS.png","width":455,"height":465,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/joey/Desktop/ProgClubSite-1/src/hero.png";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro("https://proggsu.vercel.app");
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Hero;
  return renderTemplate`${maybeRenderHead()}<div class="hero-bg hidden md:block h-screen hero-bg-animate absolute top-0"></div> <section class="h-screen !z-[20] relative w-full grid grid-cols-1 grid-rows-1 sm:grid-cols-2 md:grid-cols-2 gap-4 items-center" id="hero"> <div class="grid place-items-center"> <div class="text-center -mt-10"> <h1 class="font-bold text-7xl glitch-title" data-text="{\`<\${SITE_TITLE} />\`}">${`<${SITE_TITLE} />`}</h1> <h2 class="text-2xl opacity-95 text-white">
do cool stuff. build cool sh*t
</h2> </div> </div> <div> ${renderComponent($$result, "Image", $$Image, { "alt": "Hero", "src": HeroImg, "class": "brightness-200 w-full scale-90 invert" })} </div> </section> ${renderScript($$result, "/Users/joey/Desktop/ProgClubSite-1/src/components/Hero.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/joey/Desktop/ProgClubSite-1/src/components/Hero.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const rawEvents = await getEvents();
  function getPlainTextExcerpt(description) {
    if (typeof description === "string") return description;
    if (!description || !Array.isArray(description)) return "";
    return description.filter((block) => block._type === "block").map(
      (block) => block.children?.filter((child) => child._type === "span")?.map((span) => span.text)?.join("") || ""
    ).join(" ").substring(0, 150) + "...";
  }
  function getEventStatus(date) {
    if (!date) return "upcoming";
    const now = /* @__PURE__ */ new Date();
    const eventDate = new Date(date);
    eventDate.setHours(0, 0, 0, 0);
    const today = new Date(now);
    today.setHours(0, 0, 0, 0);
    if (eventDate < today) return "past";
    if (eventDate.getTime() === today.getTime()) return "active";
    return "upcoming";
  }
  const events = rawEvents.map((event) => ({
    ...event,
    slug: { current: event.slug.current }
  }));
  const sortedEvents = sortEventsByPriority(events);
  const { fullCardEvents, liteCardEvents } = separateEventsByDisplayType(sortedEvents);
  const homePageEvents = [...fullCardEvents, ...liteCardEvents].slice(0, 4);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": SITE_TITLE }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Section", $$Section, { "title": "Events", "className": "bg-gradient-to-b from-black/70 from-[5%] to-black via-black" }, { "default": async ($$result3) => renderTemplate`${homePageEvents.length > 0 ? renderTemplate`${maybeRenderHead()}<div class="w-full grid grid-cols-1 md:grid-cols-2 gap-6"> ${homePageEvents.map((event) => {
    const eventDate = event.date?.isTBD ? null : event.date?.value ? new Date(event.date.value) : null;
    return renderTemplate`${renderComponent($$result3, "BlogPostCard", $$BlogPostCard, { "slug": event.slug.current, "title": event.title, "excerpt": getPlainTextExcerpt(event.description), "date": eventDate, "time": event.time?.isTBD ? null : event.time?.value, "location": event.location?.isTBD ? null : event.location?.value, "status": getEventStatus(eventDate), "pinned": event.pinned || false, "specialTags": event.specialTags || [], "resources": event.resources })}`;
  })} </div>` : renderTemplate`<div class="text-center py-12"> <p class="text-white/60 text-lg">No upcoming events at the moment. Check back soon!</p> </div>`}<div class="w-full flex justify-center mt-8"> <a href="/events" class="relative inline-flex items-center px-8 py-4 text-white font-medium rounded-xl transition-all duration-500 ease-out hover:scale-105 group overflow-hidden backdrop-blur-md border border-white/20 bg-gradient-to-br from-white/[0.08] via-white/[0.05] to-white/[0.02] shadow-lg hover:shadow-2xl hover:border-white/40"> <!-- Glass effect overlay --> <div class="absolute inset-0 bg-gradient-to-br from-white/[0.1] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div> <!-- Subtle glow effect on hover --> <div class="absolute inset-0 bg-gradient-to-br from-green-400/5 via-transparent to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div> <!-- Content --> <span class="relative z-10 mr-2 text-green-400 group-hover:text-green-300 transition-colors duration-300 drop-shadow-sm">❯</span> <span class="relative z-10 group-hover:text-green-100 transition-colors duration-300">See All Events</span> </a> </div> ` })} ${renderComponent($$result2, "Section", $$Section, { "title": "About" }, { "default": async ($$result3) => renderTemplate` <div class="w-full grid place-items-center"> <div class="max-w-4xl text-xl md:text-lg opacity-90 text-center justify-evenly"> <p>${ABOUT_ME}</p> </div> </div> ` })} ` })}`;
}, "/Users/joey/Desktop/ProgClubSite-1/src/pages/index.astro", void 0);

const $$file = "/Users/joey/Desktop/ProgClubSite-1/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
