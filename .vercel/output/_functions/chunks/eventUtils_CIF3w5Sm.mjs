import { c as createAstro, a as createComponent, m as maybeRenderHead, d as addAttribute, f as renderComponent, F as Fragment, b as renderTemplate } from './astro/server_DQwDjssB.mjs';
import 'kleur/colors';
/* empty css                         */

const $$Astro = createAstro("https://proggsu.vercel.app");
const $$BlogPostCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogPostCard;
  const { title, slug, excerpt, date, time, location, status = "upcoming", pinned = false, specialTags = [], resources } = Astro2.props;
  function getEventStatus(date2) {
    if (!date2) return "upcoming";
    const now = /* @__PURE__ */ new Date();
    const eventDate = new Date(date2);
    eventDate.setHours(0, 0, 0, 0);
    const today = new Date(now);
    today.setHours(0, 0, 0, 0);
    if (eventDate < today) return "past";
    if (eventDate.getTime() === today.getTime()) return "active";
    return "upcoming";
  }
  const eventStatus = status || getEventStatus(date);
  const statusConfig = {
    upcoming: {
      text: "UPCOMING",
      color: "text-green-400",
      bgColor: "bg-green-400/20",
      borderColor: "border-green-400/30"
    },
    active: {
      text: "TODAY",
      color: "text-yellow-400",
      bgColor: "bg-yellow-400/20",
      borderColor: "border-yellow-400/30"
    },
    past: {
      text: "PAST",
      color: "text-gray-400",
      bgColor: "bg-gray-400/20",
      borderColor: "border-gray-400/30"
    },
    tbd: {
      text: "TBD",
      color: "text-orange-400",
      bgColor: "bg-orange-400/20",
      borderColor: "border-orange-400/30"
    }
  };
  const currentStatus = statusConfig[eventStatus] || statusConfig.upcoming;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`w-full mx-auto relative pb-5 overflow-hidden transition-all duration-300 ease-out cursor-pointer group h-64 rounded-xl shadow-lg hover:shadow-xl ${pinned ? "bg-gradient-to-br from-amber-500/[0.15] via-yellow-400/[0.10] to-amber-400/[0.08] border-2 border-amber-400/40 hover:border-amber-300/60 hover:shadow-amber-400/25 pinned-event-glow" : "border border-white/20 bg-gradient-to-br from-white/[0.08] via-white/[0.05] to-white/[0.02] hover:border-white/40"}`, "class")} data-astro-cid-f45vxlzk> <!-- Liquid Glass Background Effects --> <div${addAttribute(`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-xl ${pinned ? "bg-gradient-to-br from-amber-400/15 via-yellow-400/8 to-amber-300/12" : "bg-gradient-to-br from-white/[0.1] via-transparent to-transparent"}`, "class")} data-astro-cid-f45vxlzk></div>  ${pinned && renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-f45vxlzk": true }, { "default": ($$result2) => renderTemplate` <div class="absolute top-3 right-4 w-16 h-16 bg-gradient-to-br from-amber-400/25 to-yellow-500/25 rounded-full opacity-30 liquid-float" data-astro-cid-f45vxlzk></div> <div class="absolute bottom-6 left-4 w-12 h-12 bg-gradient-to-br from-amber-400/20 to-yellow-400/20 rounded-full opacity-20 liquid-float" style="animation-delay: 1.5s;" data-astro-cid-f45vxlzk></div> <div class="absolute top-8 right-14 opacity-0 group-hover:opacity-80 transition-opacity duration-500 sparkle-glare sparkle-1" style="animation-delay: 0.3s;" data-astro-cid-f45vxlzk> <div class="sparkle-cross sparkle-sm bg-amber-200" data-astro-cid-f45vxlzk></div> </div> <div class="absolute top-14 left-12 opacity-0 group-hover:opacity-70 transition-opacity duration-500 sparkle-glare sparkle-2" style="animation-delay: 0.8s;" data-astro-cid-f45vxlzk> <div class="sparkle-cross sparkle-xs bg-yellow-200" data-astro-cid-f45vxlzk></div> </div> <div class="absolute bottom-14 right-6 opacity-0 group-hover:opacity-60 transition-opacity duration-500 sparkle-glare sparkle-3" style="animation-delay: 1.3s;" data-astro-cid-f45vxlzk> <div class="sparkle-cross sparkle-md bg-amber-300" data-astro-cid-f45vxlzk></div> </div> <div class="absolute top-20 right-8 opacity-0 group-hover:opacity-75 transition-opacity duration-500 sparkle-glare sparkle-4" style="animation-delay: 1.8s;" data-astro-cid-f45vxlzk> <div class="sparkle-cross sparkle-xs bg-yellow-300" data-astro-cid-f45vxlzk></div> </div> <div class="absolute bottom-20 left-8 opacity-0 group-hover:opacity-65 transition-opacity duration-500 sparkle-glare sparkle-5" style="animation-delay: 2.2s;" data-astro-cid-f45vxlzk> <div class="sparkle-cross sparkle-sm bg-amber-200" data-astro-cid-f45vxlzk></div> </div> <div class="absolute top-12 left-20 opacity-0 group-hover:opacity-55 transition-opacity duration-500 sparkle-glare sparkle-6" style="animation-delay: 2.7s;" data-astro-cid-f45vxlzk> <div class="sparkle-cross sparkle-xs bg-yellow-200" data-astro-cid-f45vxlzk></div> </div> <div class="absolute bottom-8 right-12 opacity-0 group-hover:opacity-70 transition-opacity duration-500 sparkle-glare sparkle-7" style="animation-delay: 3.1s;" data-astro-cid-f45vxlzk> <div class="sparkle-cross sparkle-sm bg-amber-300" data-astro-cid-f45vxlzk></div> </div> <div class="absolute top-16 right-20 opacity-0 group-hover:opacity-50 transition-opacity duration-500 sparkle-glare sparkle-8" style="animation-delay: 3.5s;" data-astro-cid-f45vxlzk> <div class="sparkle-cross sparkle-xs bg-yellow-300" data-astro-cid-f45vxlzk></div> </div> ` })}`}  ${pinned && renderTemplate`<div class="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-amber-300/[0.18] to-transparent transform translate-x-6 -translate-y-6 group-hover:scale-125 transition-transform duration-700 liquid-morph" data-astro-cid-f45vxlzk></div>`} <!-- Browser window header with glass effect --> <div${addAttribute(`relative flex items-center justify-start px-4 py-3 backdrop-blur-sm border-b ${pinned ? "bg-gradient-to-r from-amber-500/[0.20] to-yellow-500/[0.12] border-amber-400/30" : "bg-gradient-to-r from-white/[0.15] to-white/[0.08] border-white/20"}`, "class")} data-astro-cid-f45vxlzk> <div class="flex space-x-2" data-astro-cid-f45vxlzk> <div class="w-3 h-3 rounded-full bg-black/80 group-hover:bg-red-500 transition-all duration-300 shadow-sm" data-astro-cid-f45vxlzk></div> <div class="w-3 h-3 rounded-full bg-black/80 group-hover:bg-yellow-500 transition-all duration-300 shadow-sm" data-astro-cid-f45vxlzk></div> <div class="w-3 h-3 rounded-full bg-black/80 group-hover:bg-green-500 transition-all duration-300 shadow-sm" data-astro-cid-f45vxlzk></div> </div> <!-- Browser tab indicator --> <div${addAttribute(`ml-4 h-1 w-16 rounded-full transition-all duration-300 ${pinned ? "bg-gradient-to-r from-amber-400/60 to-yellow-500/60 group-hover:from-amber-400 group-hover:to-yellow-500" : "bg-gradient-to-r from-blue-400/60 to-purple-400/60 group-hover:from-blue-400 group-hover:to-purple-400"}`, "class")} data-astro-cid-f45vxlzk></div> </div> <!-- Content area with enhanced glass effect --> <div class="relative p-6 tracking-wider z-10" data-astro-cid-f45vxlzk> <a${addAttribute(`/events/${slug}`, "href")} class="block group" data-astro-cid-f45vxlzk> <!-- Title and Status Row --> <div class="flex items-start justify-between mb-3" data-astro-cid-f45vxlzk> <h2${addAttribute(`text-xl font-medium text-white transition-colors duration-300 drop-shadow-sm flex-1 ${pinned ? "group-hover:text-amber-200" : "group-hover:text-blue-300"}`, "class")} data-astro-cid-f45vxlzk> <span${addAttribute(`text-white/70 mr-2 transition-colors duration-300 ${pinned ? "group-hover:text-amber-300" : "group-hover:text-blue-400"}`, "class")} data-astro-cid-f45vxlzk>❯</span> ${title} </h2> <!-- Status and Pinned Badge Row --> <div class="flex items-center gap-2" data-astro-cid-f45vxlzk> <!-- Status Badge --> <div${addAttribute(`px-1.5 py-0.5 rounded text-xs font-bold uppercase tracking-wide ${currentStatus.bgColor} ${currentStatus.borderColor} border ${currentStatus.color} backdrop-blur-sm`, "class")} data-astro-cid-f45vxlzk> ${currentStatus.text} </div> <!-- Pinned Badge --> ${pinned && renderTemplate`<div class="px-2 py-0.5 rounded-full bg-gradient-to-r from-amber-500/40 to-yellow-500/40 border border-amber-400/50 shadow-lg transition-shadow duration-300" data-astro-cid-f45vxlzk> <div class="flex items-center gap-1" data-astro-cid-f45vxlzk> <svg class="w-3 h-3 text-amber-200" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-f45vxlzk> <path d="M3 3.5A1.5 1.5 0 014.5 2h11A1.5 1.5 0 0117 3.5v11A1.5 1.5 0 0115.5 16h-5.379a1.5 1.5 0 01-1.06-.44L3 9.5v-6z" data-astro-cid-f45vxlzk></path> </svg> <span class="text-xs font-medium text-amber-200 uppercase tracking-wide" data-astro-cid-f45vxlzk>PINNED</span> </div> </div>`} </div> </div> <!-- Event Info Cards - Date, Time, Location --> <div class="flex gap-2 mb-4" data-astro-cid-f45vxlzk> <!-- Date Card --> <div class="flex items-center gap-1 px-2 py-1 rounded-md bg-white/[0.1] border border-white/20 backdrop-blur-sm" data-astro-cid-f45vxlzk> <svg xmlns="http://www.w3.org/2000/svg"${addAttribute(`h-3 w-3 ${pinned ? "text-amber-300" : "text-purple-300"}`, "class")} fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-f45vxlzk><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" data-astro-cid-f45vxlzk></path></svg> <span class="text-xs font-medium text-white drop-shadow-sm" data-astro-cid-f45vxlzk>${date ? date.toLocaleDateString("en-us", { month: "short", day: "numeric" }) : "TBD"}</span> </div> <!-- Time Card --> <div class="flex items-center gap-1 px-2 py-1 rounded-md bg-white/[0.1] border border-white/20 backdrop-blur-sm" data-astro-cid-f45vxlzk> <svg xmlns="http://www.w3.org/2000/svg"${addAttribute(`h-3 w-3 ${pinned ? "text-amber-300" : "text-purple-300"}`, "class")} fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-f45vxlzk><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-f45vxlzk></path></svg> <span class="text-xs font-medium text-white drop-shadow-sm" data-astro-cid-f45vxlzk>${time || "TBD"}</span> </div> <!-- Location Card --> <div class="flex items-center gap-1 px-2 py-1 rounded-md bg-white/[0.1] border border-white/20 backdrop-blur-sm" data-astro-cid-f45vxlzk> <svg xmlns="http://www.w3.org/2000/svg"${addAttribute(`h-3 w-3 ${pinned ? "text-amber-300" : "text-purple-300"}`, "class")} fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-f45vxlzk><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 12.414a4 4 0 10-1.414 1.414l4.243 4.243a1 1 0 001.414-1.414z" data-astro-cid-f45vxlzk></path></svg> <span class="text-xs font-medium text-white drop-shadow-sm line-clamp-1" data-astro-cid-f45vxlzk>${location || "TBD"}</span> </div> </div> <p class="text-white/80 text-sm font-thin mb-4 line-clamp-3 leading-relaxed" data-astro-cid-f45vxlzk>${excerpt}</p> <!-- Special Tags Row - Moved to bottom --> ${specialTags && specialTags.length > 0 && renderTemplate`<div class="flex flex-wrap gap-1 mt-auto" data-astro-cid-f45vxlzk> ${specialTags.filter((tag) => tag.isActive).map((tag) => {
    const colorClasses = {
      purple: "bg-purple-400/20 border-purple-400/30 text-purple-300",
      blue: "bg-blue-400/20 border-blue-400/30 text-blue-300",
      green: "bg-green-400/20 border-green-400/30 text-green-300",
      yellow: "bg-yellow-400/20 border-yellow-400/30 text-yellow-300",
      red: "bg-red-400/20 border-red-400/30 text-red-300",
      orange: "bg-orange-400/20 border-orange-400/30 text-orange-300",
      pink: "bg-pink-400/20 border-pink-400/30 text-pink-300",
      teal: "bg-teal-400/20 border-teal-400/30 text-teal-300"
    };
    const tagColor = colorClasses[tag.color] || colorClasses.purple;
    return renderTemplate`<span${addAttribute(`px-1.5 py-0.5 rounded text-xs font-medium ${tagColor} backdrop-blur-sm`, "class")} data-astro-cid-f45vxlzk> ${tag.name} </span>`;
  })} </div>`} </a> </div> <!-- Liquid Glass Bottom Glow --> <div${addAttribute(`absolute bottom-0 left-0 right-0 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-b-xl ${pinned ? "bg-gradient-to-t from-amber-400/15 via-yellow-400/8 to-transparent" : "bg-gradient-to-t from-purple-500/10 via-blue-500/5 to-transparent"}`, "class")} data-astro-cid-f45vxlzk></div> <!-- Ambient Light Effect --> <div${addAttribute(`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-xl ${pinned ? "bg-gradient-to-br from-amber-400/8 via-transparent to-amber-300/8" : "bg-gradient-to-br from-blue-400/5 via-transparent to-purple-400/5"}`, "class")} data-astro-cid-f45vxlzk></div> </div> `;
}, "/Users/joey/Desktop/ProgClubSite-1/src/components/BlogPostCard.astro", void 0);

function shouldGetFullAnimatedCard(event) {
  if (event.pinned) {
    return true;
  }
  const eventStatus = getEventStatus(event.date?.value ? new Date(event.date.value) : null);
  if (eventStatus === "active") {
    return true;
  }
  if (event.specialTags && event.specialTags.length > 0) {
    const importantTags = event.specialTags.some(
      (tag) => tag.isActive && (tag.name.toLowerCase().includes("featured") || tag.name.toLowerCase().includes("special") || tag.name.toLowerCase().includes("highlight"))
    );
    if (importantTags) {
      return true;
    }
  }
  return false;
}
function isSimpleListEvent(event) {
  const eventDate = event.date?.value ? new Date(event.date.value) : null;
  const eventStatus = getEventStatus(eventDate);
  if (eventStatus === "past") {
    return true;
  }
  if (!event.description || Array.isArray(event.description) && event.description.length === 0) {
    return true;
  }
  return false;
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
function separateEventsByDisplayType(events) {
  const fullCardEvents = [];
  const liteCardEvents = [];
  const listEvents = [];
  events.forEach((event) => {
    if (isSimpleListEvent(event)) {
      listEvents.push(event);
    } else if (shouldGetFullAnimatedCard(event)) {
      fullCardEvents.push(event);
    } else {
      liteCardEvents.push(event);
    }
  });
  return { fullCardEvents, liteCardEvents, listEvents };
}
function getEventPriority(event) {
  const eventStatus = getEventStatus(event.date?.value ? new Date(event.date.value) : null);
  if (event.pinned) return 1e3;
  if (eventStatus === "active") return 900;
  if (eventStatus === "upcoming" && event.specialTags && event.specialTags.length > 0) {
    return 800;
  }
  if (eventStatus === "upcoming") return 500;
  return 100;
}
function sortEventsByPriority(events) {
  return events.sort((a, b) => {
    const priorityA = getEventPriority(a);
    const priorityB = getEventPriority(b);
    if (priorityA !== priorityB) {
      return priorityB - priorityA;
    }
    const dateA = a.date?.value ? new Date(a.date.value) : /* @__PURE__ */ new Date(0);
    const dateB = b.date?.value ? new Date(b.date.value) : /* @__PURE__ */ new Date(0);
    return dateB.getTime() - dateA.getTime();
  });
}

export { $$BlogPostCard as $, separateEventsByDisplayType as a, sortEventsByPriority as s };
