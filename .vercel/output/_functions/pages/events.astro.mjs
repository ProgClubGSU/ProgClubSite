/* empty css                                 */
import { c as createAstro, a as createComponent, m as maybeRenderHead, d as addAttribute, b as renderTemplate, f as renderComponent, F as Fragment } from '../chunks/astro/server_DQwDjssB.mjs';
import 'kleur/colors';
import { g as getEvents } from '../chunks/sanity_BijJ_opN.mjs';
import { s as sortEventsByPriority, a as separateEventsByDisplayType, $ as $$BlogPostCard } from '../chunks/eventUtils_CIF3w5Sm.mjs';
import 'clsx';
/* empty css                                 */
import { $ as $$Section } from '../chunks/Section_CtG7W4D-.mjs';
import { $ as $$Layout } from '../chunks/Layout_CHzNjozZ.mjs';
import { $ as $$Breadcrumb } from '../chunks/Breadcrumb_BcJ_qQxb.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://proggsu.vercel.app");
const $$EventArticleCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$EventArticleCard;
  const {
    slug,
    title,
    excerpt,
    date,
    time,
    location,
    status,
    pinned = false,
    specialTags = [],
    resources,
    featured = false
  } = Astro2.props;
  const formattedDate = date ? date.toLocaleDateString("en-us", {
    month: "short",
    day: "numeric",
    year: "numeric"
  }) : null;
  const statusConfig = {
    upcoming: { color: "text-blue-400", bg: "bg-blue-500/20", border: "border-blue-400/30", text: "Upcoming" },
    active: { color: "text-green-400", bg: "bg-green-500/20", border: "border-green-400/30", text: "Today" },
    past: { color: "text-gray-400", bg: "bg-gray-500/20", border: "border-gray-400/30", text: "Past" },
    tbd: { color: "text-yellow-400", bg: "bg-yellow-500/20", border: "border-yellow-400/30", text: "TBD" }
  };
  const statusStyle = statusConfig[status] || statusConfig.upcoming;
  return renderTemplate`${maybeRenderHead()}<div class="w-full min-h-64 bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300 hover:shadow-lg overflow-hidden" data-astro-cid-iob76hj4> <a${addAttribute(`/events/${slug}`, "href")} class="block h-full" data-astro-cid-iob76hj4> <div class="h-full flex flex-col min-h-56" data-astro-cid-iob76hj4> <!-- Header: Badges and Title --> <div class="flex-shrink-0" data-astro-cid-iob76hj4> <!-- Top Row: Status and Featured badges --> <div class="flex items-center justify-between mb-2" data-astro-cid-iob76hj4> <div class="flex items-center gap-1" data-astro-cid-iob76hj4> ${pinned && renderTemplate`<span class="bg-yellow-500/20 border border-yellow-400/30 text-yellow-300 px-1.5 py-0.5 rounded-full text-xs font-medium" data-astro-cid-iob76hj4>
📌
</span>`} <span${addAttribute(`${statusStyle.bg} ${statusStyle.border} ${statusStyle.color} px-1.5 py-0.5 rounded-full text-xs font-medium`, "class")} data-astro-cid-iob76hj4> ${statusStyle.text} </span> </div> ${featured && renderTemplate`<span class="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 text-purple-300 px-1.5 py-0.5 rounded-full text-xs font-medium" data-astro-cid-iob76hj4>
⭐
</span>`} </div> <!-- Title - responsive line clamping --> <h3 class="text-lg font-bold text-white leading-tight mb-3 line-clamp-2 break-words" data-astro-cid-iob76hj4> ${title} </h3> </div> <!-- Body: Event details and excerpt - flexible height --> <div class="flex-1 flex flex-col space-y-2 min-h-0" data-astro-cid-iob76hj4> <!-- Event Info --> ${(formattedDate || location) && renderTemplate`<div class="space-y-1 text-xs text-white/80 flex-shrink-0" data-astro-cid-iob76hj4> ${formattedDate && renderTemplate`<div class="flex items-center gap-1" data-astro-cid-iob76hj4> <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-iob76hj4> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" data-astro-cid-iob76hj4></path> </svg> <span data-astro-cid-iob76hj4>${formattedDate}</span> ${time && renderTemplate`<span data-astro-cid-iob76hj4>• ${time}</span>`} </div>`} ${location && renderTemplate`<div class="flex items-center gap-1" data-astro-cid-iob76hj4> <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-iob76hj4> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 12.414a4 4 0 10-1.414 1.414l4.243 4.243a1 1 0 001.414-1.414z" data-astro-cid-iob76hj4></path> </svg> <span class="truncate" data-astro-cid-iob76hj4>${location}</span> </div>`} </div>`} <!-- Excerpt - adaptive --> ${excerpt && renderTemplate`<div class="flex-1 min-h-0" data-astro-cid-iob76hj4> <p class="text-white/70 text-xs leading-relaxed line-clamp-2 break-words" data-astro-cid-iob76hj4> ${excerpt} </p> </div>`} <!-- Tags - flexible positioning --> ${specialTags.length > 0 && renderTemplate`<div class="flex flex-wrap gap-1 mt-auto pt-1 flex-shrink-0" data-astro-cid-iob76hj4> ${specialTags.slice(0, 2).map((tag) => renderTemplate`<span class="bg-purple-500/20 border border-purple-400/30 text-purple-300 px-1.5 py-0.5 rounded-full text-xs" data-astro-cid-iob76hj4> ${typeof tag === "string" ? tag : tag?.title || tag?.name || String(tag)} </span>`)} ${specialTags.length > 2 && renderTemplate`<span class="bg-white/10 text-white/70 px-1.5 py-0.5 rounded-full text-xs" data-astro-cid-iob76hj4>
+${specialTags.length - 2} </span>`} </div>`} </div> <!-- Footer - always at bottom with consistent spacing --> <div class="flex-shrink-0 pt-3 border-t border-white/10 mt-3" data-astro-cid-iob76hj4> <div class="flex items-center justify-between" data-astro-cid-iob76hj4> <div class="text-xs text-white/60" data-astro-cid-iob76hj4> ${resources && resources.length > 0 && `${resources.length} resource${resources.length !== 1 ? "s" : ""}`} </div> <div class="flex items-center gap-1 text-blue-300 text-xs" data-astro-cid-iob76hj4> <span data-astro-cid-iob76hj4>Read More</span> <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-iob76hj4> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-astro-cid-iob76hj4></path> </svg> </div> </div> </div> </div> </a> </div> `;
}, "/Users/joey/Desktop/ProgClubSite-1/src/components/EventArticleCard.astro", void 0);

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
    if (!date) return "tbd";
    const now = /* @__PURE__ */ new Date();
    const eventDate = new Date(date);
    if (isNaN(eventDate.getTime())) return "tbd";
    eventDate.setHours(0, 0, 0, 0);
    const today = new Date(now);
    today.setHours(0, 0, 0, 0);
    if (eventDate < today) return "past";
    if (eventDate.getTime() === today.getTime()) return "active";
    return "upcoming";
  }
  function groupEventsByTime(events2) {
    const now = /* @__PURE__ */ new Date();
    const today = new Date(now);
    today.setHours(0, 0, 0, 0);
    const thisWeek = new Date(today);
    thisWeek.setDate(today.getDate() + 7);
    const thisMonth = new Date(today);
    thisMonth.setMonth(today.getMonth() + 1);
    const groups = {
      featured: [],
      thisWeek: [],
      thisMonth: [],
      upcoming: [],
      past: []
    };
    events2.forEach((event) => {
      const eventDate = event.date?.isTBD ? null : event.date?.value ? new Date(event.date.value) : null;
      const status = getEventStatus(eventDate);
      const hasFeaturedTag = event.specialTags && event.specialTags.some(
        (tag) => typeof tag === "string" && tag.toLowerCase() === "featured" || typeof tag === "object" && (tag?.name?.toLowerCase() === "featured" || tag?.title?.toLowerCase() === "featured")
      );
      if (event.pinned || status === "active" || hasFeaturedTag) {
        groups.featured.push(event);
      } else if (status === "past") {
        groups.past.push(event);
      } else if (status === "tbd") {
        groups.upcoming.push(event);
      } else if (eventDate && eventDate <= thisWeek) {
        groups.thisWeek.push(event);
      } else if (eventDate && eventDate <= thisMonth) {
        groups.thisMonth.push(event);
      } else if (status === "upcoming") {
        groups.upcoming.push(event);
      }
    });
    return groups;
  }
  const events = rawEvents.map((event) => ({
    ...event,
    slug: { current: event.slug.current }
  }));
  const sortedEvents = sortEventsByPriority(events);
  const eventGroups = groupEventsByTime(sortedEvents);
  separateEventsByDisplayType(sortedEvents);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Events" }, { "breadcrumb": async ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "breadcrumb" }, { "default": async ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="mb-6 mt-2"> <nav class="flex items-center gap-2 text-white/80 text-sm" aria-label="Breadcrumb"> <a href="/" class="hover:underline">Home</a> <span>/</span> ${renderComponent($$result3, "Breadcrumb", $$Breadcrumb, { "title": "Events" })} </nav> </div> ` })}`, "default": async ($$result2) => renderTemplate`  ${renderComponent($$result2, "Section", $$Section, { "title": "Events", "className": "pt-16" }, { "default": async ($$result3) => renderTemplate`  <div class="max-w-4xl mx-auto mb-12"> <div class="text-center mb-8"> <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">Programming Club Events</h1> <p class="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
Join us for workshops, hackathons, guest speakers, and networking events. 
          Beginner or an experienced developer, there's something for everyone.
</p> </div> <!-- Quick Stats --> <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"> <div class="bg-white/5 border border-white/10 rounded-lg p-6 text-center backdrop-blur-sm"> <div class="text-3xl font-bold text-green-400 mb-2">${eventGroups.thisWeek.length + eventGroups.thisMonth.length + eventGroups.upcoming.length}</div> <div class="text-white/70">Upcoming Events</div> </div> <div class="bg-white/5 border border-white/10 rounded-lg p-6 text-center backdrop-blur-sm"> <div class="text-3xl font-bold text-blue-400 mb-2">${eventGroups.featured.length}</div> <div class="text-white/70">Featured Events</div> </div> <div class="bg-white/5 border border-white/10 rounded-lg p-6 text-center backdrop-blur-sm"> <div class="text-3xl font-bold text-purple-400 mb-2">${eventGroups.past.length}</div> <div class="text-white/70">Past Events</div> </div> </div> </div>  ${eventGroups.featured.length > 0 && renderTemplate`<div class="mb-16"> <div class="max-w-4xl mx-auto"> <h2 class="text-3xl font-bold text-white mb-8 text-center border-b border-white/20 pb-4"> <span class="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
Featured Events
</span> </h2> <div class="grid grid-cols-1 lg:grid-cols-2 gap-8"> ${eventGroups.featured.map((event) => {
    const eventDate = event.date?.isTBD ? null : event.date?.value ? new Date(event.date.value) : null;
    return renderTemplate`${renderComponent($$result3, "BlogPostCard", $$BlogPostCard, { "slug": event.slug.current, "title": event.title, "excerpt": getPlainTextExcerpt(event.description), "date": eventDate, "time": event.time?.isTBD ? null : event.time?.value, "location": event.location?.isTBD ? null : event.location?.value, "status": getEventStatus(eventDate), "pinned": event.pinned || false, "specialTags": event.specialTags || [], "resources": event.resources })}`;
  })} </div> </div> </div>`} ${eventGroups.thisWeek.length > 0 && renderTemplate`<div class="mb-16"> <div class="max-w-4xl mx-auto"> <h2 class="text-3xl font-bold text-white mb-8 text-center border-b border-white/20 pb-4"> <span class="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
This Week
</span> </h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> ${eventGroups.thisWeek.map((event) => {
    const eventDate = event.date?.isTBD ? null : event.date?.value ? new Date(event.date.value) : null;
    return renderTemplate`${renderComponent($$result3, "EventArticleCard", $$EventArticleCard, { "slug": event.slug.current, "title": event.title, "excerpt": getPlainTextExcerpt(event.description), "date": eventDate, "time": event.time?.isTBD ? null : event.time?.value, "location": event.location?.isTBD ? null : event.location?.value, "status": getEventStatus(eventDate), "pinned": event.pinned || false, "specialTags": event.specialTags || [], "resources": event.resources })}`;
  })} </div> </div> </div>`} ${eventGroups.thisMonth.length > 0 && renderTemplate`<div class="mb-16"> <div class="max-w-4xl mx-auto"> <h2 class="text-3xl font-bold text-white mb-8 text-center border-b border-white/20 pb-4"> <span class="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
This Month
</span> </h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> ${eventGroups.thisMonth.map((event) => {
    const eventDate = event.date?.isTBD ? null : event.date?.value ? new Date(event.date.value) : null;
    return renderTemplate`${renderComponent($$result3, "EventArticleCard", $$EventArticleCard, { "slug": event.slug.current, "title": event.title, "excerpt": getPlainTextExcerpt(event.description), "date": eventDate, "time": event.time?.isTBD ? null : event.time?.value, "location": event.location?.isTBD ? null : event.location?.value, "status": getEventStatus(eventDate), "pinned": event.pinned || false, "specialTags": event.specialTags || [], "resources": event.resources })}`;
  })} </div> </div> </div>`} ${eventGroups.upcoming.length > 0 && renderTemplate`<div class="mb-16"> <div class="max-w-4xl mx-auto"> <h2 class="text-3xl font-bold text-white mb-8 text-center border-b border-white/20 pb-4"> <span class="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
Upcoming Events
</span> </h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> ${eventGroups.upcoming.map((event) => {
    const eventDate = event.date?.isTBD ? null : event.date?.value ? new Date(event.date.value) : null;
    return renderTemplate`${renderComponent($$result3, "EventArticleCard", $$EventArticleCard, { "slug": event.slug.current, "title": event.title, "excerpt": getPlainTextExcerpt(event.description), "date": eventDate, "time": event.time?.isTBD ? null : event.time?.value, "location": event.location?.isTBD ? null : event.location?.value, "status": getEventStatus(eventDate), "pinned": event.pinned || false, "specialTags": event.specialTags || [], "resources": event.resources })}`;
  })} </div> </div> </div>`} ${eventGroups.past.length > 0 && renderTemplate`<div class="mb-16"> <div class="max-w-4xl mx-auto"> <h2 class="text-3xl font-bold text-white mb-8 text-center border-b border-white/20 pb-4"> <span class="bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text text-transparent">
Past Events
</span> </h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> ${eventGroups.past.map((event) => {
    const eventDate = event.date?.isTBD ? null : event.date?.value ? new Date(event.date.value) : null;
    return renderTemplate`<a${addAttribute(`/events/${event.slug.current}`, "href")} class="group bg-white/5 border border-white/10 rounded-lg p-4 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-lg"> <div class="flex items-start justify-between mb-2"> <h3 class="text-white font-medium text-sm group-hover:text-blue-300 transition-colors duration-300 flex-1 mr-3"> ${event.title} </h3> <div class="flex items-center gap-2 text-xs text-white/60"> ${eventDate && renderTemplate`<span class="bg-gray-400/20 border border-gray-400/30 px-1.5 py-0.5 rounded text-gray-400"> ${eventDate.toLocaleDateString("en-us", { month: "short", day: "numeric" })} </span>`} </div> </div> ${event.description && renderTemplate`<p class="text-white/60 text-xs line-clamp-2 leading-relaxed"> ${getPlainTextExcerpt(event.description)} </p>`} <div class="flex items-center justify-between mt-3"> <div class="flex items-center gap-3 text-xs text-white/50"> ${event.time && !event.time.isTBD && renderTemplate`<span class="flex items-center gap-1"> <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> ${event.time.value} </span>`} ${event.location && !event.location.isTBD && renderTemplate`<span class="flex items-center gap-1"> <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 12.414a4 4 0 10-1.414 1.414l4.243 4.243a1 1 0 001.414-1.414z"></path> </svg> ${event.location.value} </span>`} </div> <span class="text-xs text-blue-300 group-hover:text-blue-200 transition-colors duration-300">
View Details →
</span> </div> </a>`;
  })} </div> </div> </div>`} <div class="max-w-4xl mx-auto text-center"> <div class="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8 backdrop-blur-sm"> <h3 class="text-2xl font-bold text-white mb-4">Stay Updated</h3> <p class="text-white/80 mb-6">
Don't miss out on our upcoming events! Follow us on social media or join our mailing list to get notified about new events.
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> <a href="/contact" class="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300">
Contact Us
</a> <a href="/about" class="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 border border-white/20">
Learn More
</a> </div> </div> </div> ` })} ` })}`;
}, "/Users/joey/Desktop/ProgClubSite-1/src/pages/events/index.astro", void 0);

const $$file = "/Users/joey/Desktop/ProgClubSite-1/src/pages/events/index.astro";
const $$url = "/events";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
