/* empty css                                    */
import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, u as unescapeHTML, d as addAttribute } from '../../chunks/astro/server_BkcvDG7p.mjs';
import 'kleur/colors';
import { r as renderPortableText, g as getEvents } from '../../chunks/sanity_BijJ_opN.mjs';
import { $ as $$Layout } from '../../chunks/Layout_Cr1Eyl0T.mjs';
import { $ as $$ResourceButtons } from '../../chunks/ResourceButtons_BrcOEKaA.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://proggsu.vercel.app");
async function getStaticPaths() {
  const events = await getEvents();
  return events.map((event) => ({
    params: { slug: event.slug.current },
    props: { event }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { event } = Astro2.props;
  const descriptionHtml = renderPortableText(event.description);
  function getEventStatus(date) {
    if (!date) return "tbd";
    const now = /* @__PURE__ */ new Date();
    const eventDate2 = new Date(date);
    if (isNaN(eventDate2.getTime())) return "tbd";
    eventDate2.setHours(0, 0, 0, 0);
    const today = new Date(now);
    today.setHours(0, 0, 0, 0);
    if (eventDate2 < today) return "past";
    if (eventDate2.getTime() === today.getTime()) return "active";
    return "upcoming";
  }
  const eventDate = event.date?.isTBD ? null : event.date?.value ? new Date(event.date.value) : null;
  getEventStatus(eventDate);
  const formattedDate = event.date?.isTBD ? "TBD" : eventDate ? eventDate.toLocaleDateString(void 0, {
    year: "numeric",
    month: "long",
    day: "numeric"
  }) : "TBA";
  const locationText = event.location?.isTBD ? "TBD" : typeof event.location === "string" ? event.location : event.location?.value || "TBA";
  const timeText = event.time?.isTBD ? "TBD" : typeof event.time === "string" ? event.time : event.time?.value || null;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "hideHomeButton": true, "data-astro-cid-k76zweri": true }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="max-w-4xl mx-auto px-4 mb-6 mt-2" data-astro-cid-k76zweri> <nav class="flex items-center gap-2 text-white/80 text-sm" aria-label="Breadcrumb" data-astro-cid-k76zweri> <a href="/" class="hover:underline" data-astro-cid-k76zweri>Home</a> <span data-astro-cid-k76zweri>/</span> <a href="/events" class="hover:underline" data-astro-cid-k76zweri>Events</a> <span data-astro-cid-k76zweri>/</span> <span class="text-white" data-astro-cid-k76zweri>${event.title}</span> </nav> </div>  <div class="max-w-4xl mx-auto mb-8 px-4" data-astro-cid-k76zweri> <div class="text-center mb-8" data-astro-cid-k76zweri> <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight break-words" data-astro-cid-k76zweri> ${event.title} </h1> ${event.description && typeof event.description === "string" && renderTemplate`<p class="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto" data-astro-cid-k76zweri> ${event.description} </p>`} </div> <!-- Event Meta Information --> <div class="bg-white/5 border border-white/10 rounded-lg sm:rounded-xl p-3 sm:p-4 backdrop-blur-sm mb-6" data-astro-cid-k76zweri> <div class="grid grid-cols-1 sm:grid-cols-3 gap-4" data-astro-cid-k76zweri> <!-- Date --> <div class="text-center" data-astro-cid-k76zweri> <div class="flex items-center justify-center gap-1.5 mb-2" data-astro-cid-k76zweri> <svg class="w-4 h-4 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-k76zweri> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2z" data-astro-cid-k76zweri></path> </svg> <span class="text-xs text-white/70 uppercase tracking-wide font-medium" data-astro-cid-k76zweri>Date</span> </div> <div class="text-sm sm:text-base font-semibold text-white" data-astro-cid-k76zweri> ${formattedDate} </div> </div> <!-- Time --> <div class="text-center" data-astro-cid-k76zweri> <div class="flex items-center justify-center gap-1.5 mb-2" data-astro-cid-k76zweri> <svg class="w-4 h-4 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-k76zweri> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-k76zweri></path> </svg> <span class="text-xs text-white/70 uppercase tracking-wide font-medium" data-astro-cid-k76zweri>Time</span> </div> <div class="text-sm sm:text-base font-semibold text-white" data-astro-cid-k76zweri> ${timeText || "TBA"} </div> </div> <!-- Location --> <div class="text-center" data-astro-cid-k76zweri> <div class="flex items-center justify-center gap-1.5 mb-2" data-astro-cid-k76zweri> <svg class="w-4 h-4 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-k76zweri> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" data-astro-cid-k76zweri></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" data-astro-cid-k76zweri></path> </svg> <span class="text-xs text-white/70 uppercase tracking-wide font-medium" data-astro-cid-k76zweri>Location</span> </div> <div class="text-sm sm:text-base font-semibold text-white break-words px-2" data-astro-cid-k76zweri> ${locationText} </div> </div> </div> </div> </div>  <div class="max-w-4xl mx-auto mb-6 px-4" data-astro-cid-k76zweri> <div class="bg-white/5 border border-white/10 rounded-lg sm:rounded-xl p-3 sm:p-4 backdrop-blur-sm" data-astro-cid-k76zweri> <h2 class="text-base sm:text-lg font-bold text-white mb-3 flex items-center gap-2" data-astro-cid-k76zweri> <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-k76zweri> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" data-astro-cid-k76zweri></path> </svg>
Resources
</h2> ${event.resources && event.resources.length > 0 ? renderTemplate`${renderComponent($$result2, "ResourceButtons", $$ResourceButtons, { "resources": event.resources, "data-astro-cid-k76zweri": true })}` : renderTemplate`<p class="text-xs sm:text-sm text-white/60 italic" data-astro-cid-k76zweri>No resources available for this event.</p>`} </div> </div>  ${event.description && typeof event.description === "object" && descriptionHtml && renderTemplate`<div class="max-w-4xl mx-auto mb-6 px-4" data-astro-cid-k76zweri> <div class="bg-white/5 border border-white/10 rounded-lg sm:rounded-xl p-3 sm:p-4 backdrop-blur-sm" data-astro-cid-k76zweri> <div class="mb-4" data-astro-cid-k76zweri> <h2 class="text-base sm:text-lg font-bold text-white mb-3" data-astro-cid-k76zweri>Event Details</h2> <!-- Special Tags --> ${event.specialTags && event.specialTags.length > 0 && renderTemplate`<div class="flex flex-wrap gap-2 mb-4" data-astro-cid-k76zweri> ${event.specialTags.map((tag) => renderTemplate`<span${addAttribute(`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium border 
                  ${tag.color === "blue" ? "bg-blue-500/20 border-blue-400/30 text-blue-300" : ""}
                  ${tag.color === "green" ? "bg-green-500/20 border-green-400/30 text-green-300" : ""}
                  ${tag.color === "red" ? "bg-red-500/20 border-red-400/30 text-red-300" : ""}
                  ${tag.color === "yellow" ? "bg-yellow-500/20 border-yellow-400/30 text-yellow-300" : ""}
                  ${tag.color === "purple" ? "bg-purple-500/20 border-purple-400/30 text-purple-300" : ""}
                  ${tag.color === "pink" ? "bg-pink-500/20 border-pink-400/30 text-pink-300" : ""}
                  ${tag.color === "indigo" ? "bg-indigo-500/20 border-indigo-400/30 text-indigo-300" : ""}
                  ${tag.color === "gray" ? "bg-gray-500/20 border-gray-400/30 text-gray-300" : ""}
                  ${tag.color === "teal" ? "bg-teal-500/20 border-teal-400/30 text-teal-300" : ""}
                  ${tag.color === "orange" ? "bg-orange-500/20 border-orange-400/30 text-orange-300" : ""}
                `, "class")} data-astro-cid-k76zweri> ${tag.name} </span>`)} </div>`} </div> <div class="prose prose-sm sm:prose-base md:prose-lg prose-invert max-w-none [&>*:last-child]:mb-0" data-astro-cid-k76zweri>${unescapeHTML(descriptionHtml)}</div> </div> </div>`} ${event.gallery && event.gallery.length > 0 && renderTemplate`<div class="max-w-4xl mx-auto mb-6 px-4" data-astro-cid-k76zweri> <h2 class="text-base sm:text-lg font-bold text-white mb-3" data-astro-cid-k76zweri>Event Gallery</h2> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3" data-astro-cid-k76zweri> ${event.gallery.map((image) => renderTemplate`<div class="group cursor-pointer rounded-lg overflow-hidden bg-white/5 border border-white/10" data-astro-cid-k76zweri> <img${addAttribute(image.asset?.url, "src")}${addAttribute(image.alt || "Event gallery image", "alt")} class="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" data-astro-cid-k76zweri> </div>`)} </div> </div>`} ${event.post && renderTemplate`<div class="max-w-4xl mx-auto mb-6 px-4" data-astro-cid-k76zweri> <div class="bg-white/5 border border-white/10 rounded-lg sm:rounded-xl p-3 sm:p-4 backdrop-blur-sm" data-astro-cid-k76zweri> <h2 class="text-base sm:text-lg font-bold text-white mb-3" data-astro-cid-k76zweri>Event Recap</h2> <div class="prose prose-sm sm:prose-base prose-invert max-w-none" data-astro-cid-k76zweri> <div data-astro-cid-k76zweri>${unescapeHTML(renderPortableText(event.post))}</div> </div> </div> </div>`} <div class="max-w-4xl mx-auto px-4 mt-8 mb-8" data-astro-cid-k76zweri> <div class="text-center" data-astro-cid-k76zweri> <a href="/events" class="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105" data-astro-cid-k76zweri> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-k76zweri> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" data-astro-cid-k76zweri></path> </svg>
Return to All Events
</a> </div> </div> ` })} `;
}, "/Users/joey/Desktop/ProgClubSite-1/src/pages/events/[...slug].astro", void 0);

const $$file = "/Users/joey/Desktop/ProgClubSite-1/src/pages/events/[...slug].astro";
const $$url = "/events/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
