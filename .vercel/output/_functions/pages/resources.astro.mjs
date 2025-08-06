/* empty css                                 */
import { a as createComponent, f as renderComponent, b as renderTemplate, d as addAttribute, u as unescapeHTML, F as Fragment, m as maybeRenderHead } from '../chunks/astro/server_DQwDjssB.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CHzNjozZ.mjs';
import { $ as $$Section } from '../chunks/Section_CtG7W4D-.mjs';
import { $ as $$Breadcrumb } from '../chunks/Breadcrumb_BcJ_qQxb.mjs';
import { $ as $$ResourceButtons } from '../chunks/ResourceButtons_DLC8cYGY.mjs';
import { g as getEvents, r as renderPortableText } from '../chunks/sanity_BijJ_opN.mjs';
import { D as DISCORD_LINK } from '../chunks/consts_Db3kfyLr.mjs';
export { renderers } from '../renderers.mjs';

const $$Resources = createComponent(async ($$result, $$props, $$slots) => {
  const events = await getEvents();
  const currentEvents = events.filter((event) => {
    if (event.date?.isTBD || !event.date?.value) return false;
    const eventDate = new Date(event.date.value);
    const now = /* @__PURE__ */ new Date();
    return eventDate > new Date(now.getTime() - 6 * 30 * 24 * 60 * 60 * 1e3);
  });
  const upcomingEvents = [
    {
      title: "Technical Interview Prep Workshop",
      description: "Comprehensive guide to technical interviews, common questions, and problem-solving strategies.",
      date: "FALL 2025",
      slug: "technical-interview-prep",
      resources: []
    },
    {
      title: "Project Portfolio Building Session",
      description: "Learn how to showcase your projects effectively and build a compelling portfolio.",
      date: "FALL 2025",
      slug: "portfolio-building",
      resources: []
    },
    {
      title: "Networking & Professional Branding",
      description: "Master LinkedIn optimization, networking strategies, and building your professional brand.",
      date: "FALL 2025",
      slug: "networking-branding",
      resources: []
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Resources" }, { "breadcrumb": async ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "breadcrumb" }, { "default": async ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="mb-6 mt-2"> <nav class="flex items-center gap-2 text-white/80 text-sm" aria-label="Breadcrumb"> <a href="/" class="hover:underline">Home</a> <span>/</span> ${renderComponent($$result3, "Breadcrumb", $$Breadcrumb, { "title": "Resources" })} </nav> </div> ` })}`, "default": async ($$result2) => renderTemplate`  ${renderComponent($$result2, "Section", $$Section, { "title": "Resources", "className": "pt-16" }, { "default": async ($$result3) => renderTemplate` <div class="w-full grid place-items-center"> <div class="max-w-6xl w-full space-y-12"> <!-- Current Events --> <div class="space-y-6"> <h2 class="text-3xl font-bold text-center mb-8">Fall 2025</h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"> ${currentEvents.map((event) => renderTemplate`<div class="bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/20 rounded-lg p-6"> <h3 class="text-xl font-semibold mb-3">${event.title}</h3> <div class="prose prose-invert prose-sm mb-4 line-clamp-2">${unescapeHTML(renderPortableText(event.description))}</div> ${renderComponent($$result3, "ResourceButtons", $$ResourceButtons, { "resources": event.resources || [] })} </div>`)} </div> </div> <!-- Upcoming Resources --> <div class="space-y-6"> <h2 class="text-3xl font-bold text-center mb-8">Upcoming Resources</h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"> ${upcomingEvents.map((event) => renderTemplate`<div class="bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/20 rounded-lg p-6"> <h3 class="text-xl font-semibold mb-3">${event.title}</h3> <p class="text-white/80 mb-4 line-clamp-2">${event.description}</p> <div class="flex flex-wrap gap-3"> <span class="bg-yellow-600 text-white px-4 py-2 rounded"> ${event.date} </span> ${renderComponent($$result3, "ResourceButtons", $$ResourceButtons, { "resources": event.resources })} </div> </div>`)} </div> </div> <!-- Resource Categories --> <div class="space-y-6"> <h2 class="text-3xl font-bold text-center mb-8">Resource Categories</h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> <!-- Interview Prep --> <div class="bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/20 rounded-lg p-6"> <h3 class="text-lg font-semibold mb-3">Interview Prep</h3> <p class="text-white/80 mb-4">Data Structures, Algorithms, and Technical Interview Resources</p> <div class="space-y-2"> <div class="flex items-center gap-2"> <span class="w-2 h-2 bg-white rounded-full"></span> <span class="text-sm text-white/70">DSA Review Materials</span> </div> <div class="flex items-center gap-2"> <span class="w-2 h-2 bg-white rounded-full"></span> <span class="text-sm text-white/70">Common Interview Questions</span> </div> <div class="flex items-center gap-2"> <span class="w-2 h-2 bg-white rounded-full"></span> <span class="text-sm text-white/70">Problem-Solving Strategies</span> </div> </div> </div> <!-- Career Development --> <div class="bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/20 rounded-lg p-6"> <h3 class="text-lg font-semibold mb-3">Career Development</h3> <p class="text-white/80 mb-4">Resume building, networking, and career planning resources</p> <div class="space-y-2"> <div class="flex items-center gap-2"> <span class="w-2 h-2 bg-white rounded-full"></span> <span class="text-sm text-white/70">Resume Templates</span> </div> <div class="flex items-center gap-2"> <span class="w-2 h-2 bg-white rounded-full"></span> <span class="text-sm text-white/70">LinkedIn Optimization</span> </div> <div class="flex items-center gap-2"> <span class="w-2 h-2 bg-white rounded-full"></span> <span class="text-sm text-white/70">Networking Strategies</span> </div> </div> </div> <!-- Technical Skills --> <div class="bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/20 rounded-lg p-6"> <h3 class="text-lg font-semibold mb-3">Technical Skills</h3> <p class="text-white/80 mb-4">Programming languages, frameworks, and development tools</p> <div class="space-y-2"> <div class="flex items-center gap-2"> <span class="w-2 h-2 bg-white rounded-full"></span> <span class="text-sm text-white/70">Python Tutorials</span> </div> <div class="flex items-center gap-2"> <span class="w-2 h-2 bg-white rounded-full"></span> <span class="text-sm text-white/70">Web Development</span> </div> <div class="flex items-center gap-2"> <span class="w-2 h-2 bg-white rounded-full"></span> <span class="text-sm text-white/70">Git & GitHub</span> </div> </div> </div> <!-- Projects & Portfolio --> <div class="bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/20 rounded-lg p-6"> <h3 class="text-lg font-semibold mb-3">Projects & Portfolio</h3> <p class="text-white/80 mb-4">Project ideas, portfolio building, and showcase resources</p> <div class="space-y-2"> <div class="flex items-center gap-2"> <span class="w-2 h-2 bg-white rounded-full"></span> <span class="text-sm text-white/70">Project Ideas</span> </div> <div class="flex items-center gap-2"> <span class="w-2 h-2 bg-white rounded-full"></span> <span class="text-sm text-white/70">Portfolio Templates</span> </div> <div class="flex items-center gap-2"> <span class="w-2 h-2 bg-white rounded-full"></span> <span class="text-sm text-white/70">Showcase Examples</span> </div> </div> </div> <!-- Hackathons & Competitions --> <div class="bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/20 rounded-lg p-6"> <h3 class="text-lg font-semibold mb-3">Hackathons & Competitions</h3> <p class="text-white/80 mb-4">Competitive programming and hackathon resources</p> <div class="space-y-2"> <div class="flex items-center gap-2"> <span class="w-2 h-2 bg-white rounded-full"></span> <span class="text-sm text-white/70">Competition Platforms</span> </div> <div class="flex items-center gap-2"> <span class="w-2 h-2 bg-white rounded-full"></span> <span class="text-sm text-white/70">Hackathon Tips</span> </div> <div class="flex items-center gap-2"> <span class="w-2 h-2 bg-white rounded-full"></span> <span class="text-sm text-white/70">Team Formation</span> </div> </div> </div> <!-- Industry Connections --> <div class="bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/20 rounded-lg p-6"> <h3 class="text-lg font-semibold mb-3">Industry Connections</h3> <p class="text-white/80 mb-4">Guest speakers, company visits, and industry insights</p> <div class="space-y-2"> <div class="flex items-center gap-2"> <span class="w-2 h-2 bg-white rounded-full"></span> <span class="text-sm text-white/70">Guest Speaker Recordings</span> </div> <div class="flex items-center gap-2"> <span class="w-2 h-2 bg-white rounded-full"></span> <span class="text-sm text-white/70">Company Visit Resources</span> </div> <div class="flex items-center gap-2"> <span class="w-2 h-2 bg-white rounded-full"></span> <span class="text-sm text-white/70">Industry Insights</span> </div> </div> </div> </div> </div> <!-- Quick Links --> <div class="space-y-6"> <h2 class="text-3xl font-bold text-center mb-8">Quick Links</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <div class="bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/20 rounded-lg p-6"> <h3 class="text-lg font-semibold mb-3">External Resources</h3> <div class="space-y-3"> <a href="https://leetcode.com" target="_blank" class="block text-white/80 hover:text-white transition-colors">→ LeetCode (Practice Problems)</a> <a href="https://github.com/ProgClubGSU" target="_blank" class="block text-white/80 hover:text-white transition-colors">→ GitHub</a> <span class="block text-gray-500 cursor-not-allowed select-none">→ LinkedIn (Coming Soon)</span> <span class="block text-gray-500 cursor-not-allowed select-none">→ HackerRank (Coming Soon)</span> </div> </div> <div class="bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/20 rounded-lg p-6"> <h3 class="text-lg font-semibold mb-3">Club Resources</h3> <div class="space-y-3"> <a href="/events" class="block text-white/80 hover:text-white transition-colors">→ All Events</a> <a${addAttribute(String(DISCORD_LINK), "href")} target="_blank" class="block text-white/80 hover:text-white transition-colors">→ Discord Server</a> <span class="block text-gray-500 cursor-not-allowed select-none">→ Meeting Schedule (Coming Soon)</span> <span class="block text-gray-500 cursor-not-allowed select-none">→ Contact Information (Coming Soon)</span> </div> </div> </div> </div> </div> </div> ` })} ` })}`;
}, "/Users/joey/Desktop/ProgClubSite-1/src/pages/resources.astro", void 0);

const $$file = "/Users/joey/Desktop/ProgClubSite-1/src/pages/resources.astro";
const $$url = "/resources";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Resources,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
