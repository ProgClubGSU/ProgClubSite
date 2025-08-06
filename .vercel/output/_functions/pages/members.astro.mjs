/* empty css                                 */
import { c as createAstro, a as createComponent, m as maybeRenderHead, d as addAttribute, r as renderComponent, F as Fragment, b as renderTemplate, e as renderScript } from '../chunks/astro/server_BkcvDG7p.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_c2u_HCNh.mjs';
import { $ as $$Section } from '../chunks/Section_Ccnb_uPN.mjs';
import { $ as $$Breadcrumb } from '../chunks/Breadcrumb_BSAyM0W5.mjs';
/* empty css                                   */
import 'clsx';
import { D as DISCORD_LINK } from '../chunks/consts_Db3kfyLr.mjs';
export { renderers } from '../renderers.mjs';

function isPresidentRole(role) {
  const roleLC = role.toLowerCase();
  return roleLC.includes("president") && !roleLC.includes("vice president");
}
function isFoundingPresident(role) {
  return role.toLowerCase().includes("founding president");
}
function getRolePriority(role) {
  const priorities = {
    // === PRESIDENTIAL ROLES (Highest Priority) ===
    "President": 1,
    "Founding President": 1,
    "2nd President": 1,
    "3rd President": 1,
    "4th President": 1,
    "5th President": 1,
    // === ADVISOR ROLES ===
    "Founding Academic Advisor": 2,
    "Academic Advisor": 3,
    // === LEADERSHIP ROLES ===
    "Vice President": 4,
    "Founding VP": 4,
    "Founding Member": 5,
    // === OFFICER ROLES ===
    "Secretary": 6,
    "Secretary/Librarian": 6,
    "Librarian": 6,
    "Treasurer": 7,
    // === DIRECTOR/LEAD ROLES ===
    "Director of Events": 8,
    "Director of Technology": 8,
    "Tech Chair": 8,
    "Event Lead": 8,
    // === EXECUTIVE & GENERAL ROLES ===
    "Exec": 9,
    "Server Owner": 10,
    "Member": 11
  };
  return priorities[role] || 99;
}
function sortMembersByRole(membersByYear) {
  const sorted = {};
  for (const [year, members] of Object.entries(membersByYear)) {
    sorted[year] = [...members].sort((a, b) => {
      const priorityA = getRolePriority(a.role);
      const priorityB = getRolePriority(b.role);
      return priorityA - priorityB;
    });
  }
  return sorted;
}
function isSimpleListRole(role) {
  return role === "Founding Member" || role === "Exec";
}
function separateMembersByDisplayType(members) {
  const fullCardMembers = [];
  const liteCardMembers = [];
  const listMembers = [];
  members.forEach((member) => {
    if (isSimpleListRole(member.role)) {
      listMembers.push(member);
    } else if (shouldGetFullAnimatedCard(member.role)) {
      fullCardMembers.push(member);
    } else {
      liteCardMembers.push(member);
    }
  });
  return { fullCardMembers, liteCardMembers, listMembers };
}
function getPlaceholderDescription(role) {
  if (isFoundingPresident(role)) {
    return "Founding President of PROGgsu. More details about their incredible journey coming soon...";
  } else if (isPresidentRole(role)) {
    return "President of PROGgsu leading the club to new heights. More information coming soon...";
  } else if (role.toLowerCase().includes("founding")) {
    return "Founding member of PROGgsu who helped establish our amazing community. More details coming soon...";
  } else if (role.toLowerCase().includes("advisor")) {
    return "Academic advisor who provided invaluable guidance to PROGgsu. More information coming soon...";
  } else if (role.toLowerCase().includes("exec")) {
    return "Executive member who contributed to PROGgsu's leadership and growth. More information coming soon...";
  } else {
    return "Valued member of PROGgsu. More information coming soon...";
  }
}
function shouldGetFullAnimatedCard(role) {
  const importantRoles = [
    "President",
    "Founding President",
    "2nd President",
    "3rd President",
    "4th President",
    "5th President",
    "Vice President",
    "Founding VP",
    "Academic Advisor",
    "Founding Academic Advisor"
  ];
  return importantRoles.includes(role);
}

const $$Astro$2 = createAstro("https://proggsu.vercel.app");
const $$MemberCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$MemberCard;
  const { member, year } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`group relative overflow-hidden rounded-2xl liquid-glass shadow-xl transition-all duration-700 ease-out hover:scale-[1.025] hover:translate-y-[-6px] ${isFoundingPresident(member.role) ? "bg-gradient-to-br from-violet-500/[0.18] via-purple-400/[0.12] to-pink-400/[0.10] border-2 border-violet-400/50 hover:border-violet-300/70 hover:shadow-violet-400/40 founding-president-glow" : isPresidentRole(member.role) ? "bg-gradient-to-br from-amber-500/[0.15] via-yellow-400/[0.10] to-amber-400/[0.08] border-2 border-amber-400/40 hover:border-amber-300/60 hover:shadow-amber-400/30 president-glow" : "bg-gradient-to-br from-white/[0.12] via-white/[0.08] to-white/[0.04] border border-white/20 hover:border-white/40 hover:shadow-purple-500/20"}`, "class")} data-astro-cid-6qtsqqpf> <!-- Liquid Glass Background Effects --> <div${addAttribute(`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl ${isFoundingPresident(member.role) ? "bg-gradient-to-br from-violet-400/18 via-purple-400/10 to-pink-400/15" : isPresidentRole(member.role) ? "bg-gradient-to-br from-amber-400/15 via-yellow-400/8 to-amber-300/12" : "bg-gradient-to-br from-purple-400/10 via-blue-500/5 to-cyan-400/10"}`, "class")} data-astro-cid-6qtsqqpf></div> <!-- Floating Liquid Bubbles --> <div${addAttribute(`absolute top-4 right-4 w-20 h-20 rounded-full blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500 liquid-float ${isFoundingPresident(member.role) ? "bg-gradient-to-br from-violet-400/30 to-pink-500/30" : isPresidentRole(member.role) ? "bg-gradient-to-br from-amber-400/25 to-yellow-500/25" : "bg-gradient-to-br from-purple-400/20 to-blue-500/20"}`, "class")} data-astro-cid-6qtsqqpf></div> <div${addAttribute(`absolute bottom-8 left-6 w-14 h-14 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-700 liquid-float ${isFoundingPresident(member.role) ? "bg-gradient-to-br from-violet-400/25 to-purple-400/25" : isPresidentRole(member.role) ? "bg-gradient-to-br from-amber-400/20 to-yellow-400/20" : "bg-gradient-to-br from-cyan-400/15 to-purple-500/15"}`, "class")} style="animation-delay: 2s;" data-astro-cid-6qtsqqpf></div>  ${isFoundingPresident(member.role) ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-6qtsqqpf": true }, { "default": ($$result2) => renderTemplate`<div class="absolute top-8 right-16 opacity-0 group-hover:opacity-90 transition-opacity duration-500 sparkle-glare sparkle-1" style="animation-delay: 0.2s;" data-astro-cid-6qtsqqpf> <div class="sparkle-cross sparkle-md bg-violet-200" data-astro-cid-6qtsqqpf></div> </div> <div class="absolute top-14 left-10 opacity-0 group-hover:opacity-85 transition-opacity duration-500 sparkle-glare sparkle-2" style="animation-delay: 0.6s;" data-astro-cid-6qtsqqpf> <div class="sparkle-cross sparkle-sm bg-purple-200" data-astro-cid-6qtsqqpf></div> </div> <div class="absolute bottom-14 right-4 opacity-0 group-hover:opacity-80 transition-opacity duration-500 sparkle-glare sparkle-3" style="animation-delay: 1.0s;" data-astro-cid-6qtsqqpf> <div class="sparkle-cross sparkle-md bg-pink-300" data-astro-cid-6qtsqqpf></div> </div> <div class="absolute top-20 right-6 opacity-0 group-hover:opacity-85 transition-opacity duration-500 sparkle-glare sparkle-4" style="animation-delay: 1.4s;" data-astro-cid-6qtsqqpf> <div class="sparkle-cross sparkle-xs bg-violet-300" data-astro-cid-6qtsqqpf></div> </div> <div class="absolute bottom-20 left-6 opacity-0 group-hover:opacity-75 transition-opacity duration-500 sparkle-glare sparkle-5" style="animation-delay: 1.8s;" data-astro-cid-6qtsqqpf> <div class="sparkle-cross sparkle-sm bg-purple-200" data-astro-cid-6qtsqqpf></div> </div> <div class="absolute top-12 left-16 opacity-0 group-hover:opacity-70 transition-opacity duration-500 sparkle-glare sparkle-6" style="animation-delay: 2.2s;" data-astro-cid-6qtsqqpf> <div class="sparkle-cross sparkle-xs bg-pink-200" data-astro-cid-6qtsqqpf></div> </div> <div class="absolute bottom-8 right-14 opacity-0 group-hover:opacity-80 transition-opacity duration-500 sparkle-glare sparkle-7" style="animation-delay: 2.6s;" data-astro-cid-6qtsqqpf> <div class="sparkle-cross sparkle-sm bg-violet-300" data-astro-cid-6qtsqqpf></div> </div> <div class="absolute top-16 right-16 opacity-0 group-hover:opacity-65 transition-opacity duration-500 sparkle-glare sparkle-8" style="animation-delay: 3.0s;" data-astro-cid-6qtsqqpf> <div class="sparkle-cross sparkle-xs bg-purple-300" data-astro-cid-6qtsqqpf></div> </div> <div class="absolute top-6 left-14 opacity-0 group-hover:opacity-60 transition-opacity duration-500 sparkle-glare sparkle-1" style="animation-delay: 3.4s;" data-astro-cid-6qtsqqpf> <div class="sparkle-cross sparkle-xs bg-pink-200" data-astro-cid-6qtsqqpf></div> </div> <div class="absolute bottom-6 left-16 opacity-0 group-hover:opacity-75 transition-opacity duration-500 sparkle-glare sparkle-2" style="animation-delay: 3.8s;" data-astro-cid-6qtsqqpf> <div class="sparkle-cross sparkle-sm bg-violet-200" data-astro-cid-6qtsqqpf></div> </div> <div class="absolute top-24 left-8 opacity-0 group-hover:opacity-55 transition-opacity duration-500 sparkle-glare sparkle-3" style="animation-delay: 4.2s;" data-astro-cid-6qtsqqpf> <div class="sparkle-cross sparkle-xs bg-purple-300" data-astro-cid-6qtsqqpf></div> </div> <div class="absolute bottom-16 right-16 opacity-0 group-hover:opacity-70 transition-opacity duration-500 sparkle-glare sparkle-4" style="animation-delay: 4.6s;" data-astro-cid-6qtsqqpf> <div class="sparkle-cross sparkle-md bg-pink-300" data-astro-cid-6qtsqqpf></div> </div> ` })}` : isPresidentRole(member.role) ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-6qtsqqpf": true }, { "default": ($$result2) => renderTemplate`<div class="absolute top-10 right-14 opacity-0 group-hover:opacity-80 transition-opacity duration-500 sparkle-glare sparkle-1" style="animation-delay: 0.4s;" data-astro-cid-6qtsqqpf> <div class="sparkle-cross sparkle-sm bg-amber-200" data-astro-cid-6qtsqqpf></div> </div> <div class="absolute top-16 left-12 opacity-0 group-hover:opacity-70 transition-opacity duration-500 sparkle-glare sparkle-2" style="animation-delay: 0.9s;" data-astro-cid-6qtsqqpf> <div class="sparkle-cross sparkle-xs bg-yellow-200" data-astro-cid-6qtsqqpf></div> </div> <div class="absolute bottom-16 right-6 opacity-0 group-hover:opacity-60 transition-opacity duration-500 sparkle-glare sparkle-3" style="animation-delay: 1.4s;" data-astro-cid-6qtsqqpf> <div class="sparkle-cross sparkle-md bg-amber-300" data-astro-cid-6qtsqqpf></div> </div> <div class="absolute top-24 right-8 opacity-0 group-hover:opacity-75 transition-opacity duration-500 sparkle-glare sparkle-4" style="animation-delay: 1.9s;" data-astro-cid-6qtsqqpf> <div class="sparkle-cross sparkle-xs bg-yellow-300" data-astro-cid-6qtsqqpf></div> </div> <div class="absolute bottom-24 left-8 opacity-0 group-hover:opacity-65 transition-opacity duration-500 sparkle-glare sparkle-5" style="animation-delay: 2.3s;" data-astro-cid-6qtsqqpf> <div class="sparkle-cross sparkle-sm bg-amber-200" data-astro-cid-6qtsqqpf></div> </div> <div class="absolute top-14 left-16 opacity-0 group-hover:opacity-55 transition-opacity duration-500 sparkle-glare sparkle-6" style="animation-delay: 2.8s;" data-astro-cid-6qtsqqpf> <div class="sparkle-cross sparkle-xs bg-yellow-200" data-astro-cid-6qtsqqpf></div> </div> <div class="absolute bottom-10 right-12 opacity-0 group-hover:opacity-70 transition-opacity duration-500 sparkle-glare sparkle-7" style="animation-delay: 3.2s;" data-astro-cid-6qtsqqpf> <div class="sparkle-cross sparkle-sm bg-amber-300" data-astro-cid-6qtsqqpf></div> </div> <div class="absolute top-20 right-16 opacity-0 group-hover:opacity-50 transition-opacity duration-500 sparkle-glare sparkle-8" style="animation-delay: 3.6s;" data-astro-cid-6qtsqqpf> <div class="sparkle-cross sparkle-xs bg-yellow-300" data-astro-cid-6qtsqqpf></div> </div> ` })}` : null} <!-- Floating Role Badge --> <div class="absolute top-4 left-4 z-20" data-astro-cid-6qtsqqpf> <div${addAttribute(`px-3 py-1.5 rounded-full liquid-glass shadow-lg transition-shadow duration-300 ${isFoundingPresident(member.role) ? "bg-gradient-to-r from-violet-500/50 to-pink-500/50 border border-violet-400/60 hover:shadow-violet-500/50" : isPresidentRole(member.role) ? "bg-gradient-to-r from-amber-500/40 to-yellow-500/40 border border-amber-400/50 hover:shadow-amber-500/40" : "bg-gradient-to-r from-purple-500/30 to-blue-500/30 border border-purple-400/40 hover:shadow-purple-500/30"}`, "class")} data-astro-cid-6qtsqqpf> <div class="flex items-center gap-1.5" data-astro-cid-6qtsqqpf> ${isFoundingPresident(member.role) ? renderTemplate`<svg class="w-3 h-3 text-violet-200" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-6qtsqqpf> <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" data-astro-cid-6qtsqqpf></path> </svg>` : isPresidentRole(member.role) ? renderTemplate`<svg class="w-3 h-3 text-amber-300" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-6qtsqqpf> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" data-astro-cid-6qtsqqpf></path> </svg>` : null} <span${addAttribute(`text-xs font-medium uppercase tracking-wide ${isFoundingPresident(member.role) ? "text-violet-200" : isPresidentRole(member.role) ? "text-amber-200" : "text-white/90"}`, "class")} data-astro-cid-6qtsqqpf> ${member.role} </span> </div> </div> </div> <!-- Liquid Glass Morphing Shape --> <div${addAttribute(`absolute top-0 right-0 w-32 h-32 transform translate-x-8 -translate-y-8 group-hover:scale-125 transition-transform duration-700 liquid-morph ${isFoundingPresident(member.role) ? "bg-gradient-to-bl from-violet-300/[0.22] to-transparent" : isPresidentRole(member.role) ? "bg-gradient-to-bl from-amber-300/[0.18] to-transparent" : "bg-gradient-to-bl from-white/[0.15] to-transparent"}`, "class")} data-astro-cid-6qtsqqpf></div> <!-- Member Info --> <div class="relative p-4 pt-12 z-10" data-astro-cid-6qtsqqpf> <!-- Name and Description --> <div class="mb-4" data-astro-cid-6qtsqqpf> <h3${addAttribute(`text-lg font-bold mb-2 transition-colors duration-500 drop-shadow-lg ${isFoundingPresident(member.role) ? "text-violet-100 group-hover:text-violet-50" : isPresidentRole(member.role) ? "text-amber-100 group-hover:text-amber-50" : "text-white group-hover:text-cyan-300"}`, "class")} data-astro-cid-6qtsqqpf> ${member.name} </h3> ${member.description ? renderTemplate`<p${addAttribute(`text-xs font-sans text-white/90 leading-relaxed ${isFoundingPresident(member.role) ? "" : isPresidentRole(member.role) ? "" : ""}`, "class")} data-astro-cid-6qtsqqpf> ${member.description} </p>` : renderTemplate`<p${addAttribute(`text-xs font-sans text-white/90 leading-relaxed italic`, "class")} data-astro-cid-6qtsqqpf> ${getPlaceholderDescription(member.role)} </p>`} </div> <!-- Specialties Tags --> ${member.specialties && member.specialties.length > 0 ? renderTemplate`<div class="mb-4" data-astro-cid-6qtsqqpf> <p${addAttribute(`text-[10px] uppercase tracking-wide mb-2 font-medium ${isFoundingPresident(member.role) ? "text-violet-300" : isPresidentRole(member.role) ? "text-amber-300" : "text-cyan-300"}`, "class")} data-astro-cid-6qtsqqpf>Specialties</p> <div class="flex flex-wrap gap-1.5" data-astro-cid-6qtsqqpf> ${member.specialties.map((specialty) => renderTemplate`<span${addAttribute(`px-2 py-1 text-[10px] rounded-full border border-white/20 text-white/90 backdrop-blur-sm transition-all duration-300 shadow ${isFoundingPresident(member.role) ? "bg-gradient-to-r from-violet-400/20 to-pink-400/20 hover:from-violet-400/30 hover:to-pink-400/30" : isPresidentRole(member.role) ? "bg-gradient-to-r from-amber-400/20 to-yellow-400/20 hover:from-amber-400/30 hover:to-yellow-400/30" : "bg-gradient-to-r from-purple-500/20 to-blue-500/20 hover:from-purple-500/30 hover:to-blue-500/30"}`, "class")} data-astro-cid-6qtsqqpf> ${specialty} </span>`)} </div> </div>` : renderTemplate`<div class="mb-4" data-astro-cid-6qtsqqpf> <p${addAttribute(`text-[10px] uppercase tracking-wide mb-2 font-medium ${isFoundingPresident(member.role) ? "text-violet-300/60" : isPresidentRole(member.role) ? "text-amber-300/60" : "text-cyan-300/60"}`, "class")} data-astro-cid-6qtsqqpf>Specialties</p> <div class="flex flex-wrap gap-1.5" data-astro-cid-6qtsqqpf> <span${addAttribute(`px-2 py-1 text-[10px] rounded-full border border-white/10 text-white/40 backdrop-blur-sm transition-all duration-300 shadow italic ${isFoundingPresident(member.role) ? "bg-gradient-to-r from-violet-400/10 to-pink-400/10" : isPresidentRole(member.role) ? "bg-gradient-to-r from-amber-400/10 to-yellow-400/10" : "bg-gradient-to-r from-purple-500/10 to-blue-500/10"}`, "class")} data-astro-cid-6qtsqqpf>
Information coming soon
</span> </div> </div>`} <!-- Social Links --> <div class="flex gap-2 mt-auto" data-astro-cid-6qtsqqpf> <!-- GitHub Button --> ${member.github ? renderTemplate`<a${addAttribute(`https://github.com/${member.github}`, "href")} target="_blank" rel="noopener noreferrer" class="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-gray-600/30 to-gray-700/30 border border-white/20 text-white/90 hover:from-gray-500/40 hover:to-gray-600/40 hover:text-white hover:border-white/40 transition-all duration-300 text-[10px] backdrop-blur-sm shadow hover:shadow-lg hover:scale-105" data-astro-cid-6qtsqqpf> <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-6qtsqqpf> <path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clip-rule="evenodd" data-astro-cid-6qtsqqpf></path> </svg>
GitHub
</a>` : renderTemplate`<div class="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-gray-800/20 to-gray-900/20 border border-white/10 text-white/40 transition-all duration-300 text-[10px] backdrop-blur-sm shadow cursor-not-allowed opacity-60" data-astro-cid-6qtsqqpf> <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-6qtsqqpf> <path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clip-rule="evenodd" data-astro-cid-6qtsqqpf></path> </svg>
GitHub
</div>`} <!-- LinkedIn Button --> ${member.linkedin ? renderTemplate`<a${addAttribute(`https://linkedin.com/in/${member.linkedin}`, "href")} target="_blank" rel="noopener noreferrer" class="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-600/30 to-blue-700/30 border border-white/20 text-white/90 hover:from-blue-500/40 hover:to-blue-600/40 hover:text-white hover:border-white/40 transition-all duration-300 text-[10px] backdrop-blur-sm shadow hover:shadow-lg hover:scale-105" data-astro-cid-6qtsqqpf> <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-6qtsqqpf> <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" data-astro-cid-6qtsqqpf></path> </svg>
LinkedIn
</a>` : renderTemplate`<div class="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-800/20 to-blue-900/20 border border-white/10 text-white/40 transition-all duration-300 text-[10px] backdrop-blur-sm shadow cursor-not-allowed opacity-60" data-astro-cid-6qtsqqpf> <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-6qtsqqpf> <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" data-astro-cid-6qtsqqpf></path> </svg>
LinkedIn
</div>`} </div> </div> <!-- Liquid Glass Bottom Glow --> <div${addAttribute(`absolute bottom-0 left-0 right-0 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-b-3xl ${isFoundingPresident(member.role) ? "bg-gradient-to-t from-violet-400/18 via-purple-400/10 to-transparent" : isPresidentRole(member.role) ? "bg-gradient-to-t from-amber-400/15 via-yellow-400/8 to-transparent" : "bg-gradient-to-t from-purple-500/10 via-blue-500/5 to-transparent"}`, "class")} data-astro-cid-6qtsqqpf></div> <!-- Ambient Light Effect --> <div${addAttribute(`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl ${isFoundingPresident(member.role) ? "bg-gradient-to-br from-violet-400/10 via-transparent to-pink-300/10" : isPresidentRole(member.role) ? "bg-gradient-to-br from-amber-400/8 via-transparent to-amber-300/8" : "bg-gradient-to-br from-cyan-400/5 via-transparent to-purple-500/5"}`, "class")} data-astro-cid-6qtsqqpf></div> </div> `;
}, "/Users/joey/Desktop/ProgClubSite-1/src/components/MemberCard.astro", void 0);

const $$Astro$1 = createAstro("https://proggsu.vercel.app");
const $$LiteMemberCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$LiteMemberCard;
  const { member, year } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="group relative overflow-hidden rounded-2xl bg-white/[0.08] border border-white/20 hover:border-white/30 shadow-lg transition-colors duration-300"> <!-- Simple hover background effect --> <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl bg-white/[0.03]"></div> <!-- NO sparkle effects for performance --> <!-- Simple Role Badge (same position as original) --> <div class="absolute top-4 left-4 z-20"> <div class="px-3 py-1.5 rounded-full bg-purple-500/20 border border-purple-400/30 shadow"> <div class="flex items-center gap-1.5"> <span class="text-xs font-medium uppercase tracking-wide text-white/90"> ${member.role} </span> </div> </div> </div> <!-- Simple decorative shape (minimal) --> <div class="absolute top-0 right-0 w-32 h-32 transform translate-x-8 -translate-y-8 bg-white/[0.08] rounded-full"></div> <!-- Member Info (exact same structure as original) --> <div class="relative p-4 pt-12 z-10"> <!-- Name and Description --> <div class="mb-4"> <h3 class="text-lg font-bold mb-2 transition-colors duration-300 text-white group-hover:text-cyan-300 drop-shadow-lg"> ${member.name} </h3> ${member.description ? renderTemplate`<p class="text-xs font-sans text-white/90 leading-relaxed"> ${member.description} </p>` : renderTemplate`<p class="text-xs font-sans text-white/90 leading-relaxed italic"> ${getPlaceholderDescription(member.role)} </p>`} </div> <!-- Specialties Tags (exact same structure) --> ${member.specialties && member.specialties.length > 0 ? renderTemplate`<div class="mb-4"> <p class="text-[10px] uppercase tracking-wide mb-2 font-medium text-cyan-300">Specialties</p> <div class="flex flex-wrap gap-1.5"> ${member.specialties.map((specialty) => renderTemplate`<span class="px-2 py-1 text-[10px] rounded-full border border-white/20 text-white/90 bg-purple-500/15 hover:bg-purple-500/25 transition-colors duration-200"> ${specialty} </span>`)} </div> </div>` : renderTemplate`<div class="mb-4"> <p class="text-[10px] uppercase tracking-wide mb-2 font-medium text-cyan-300/60">Specialties</p> <div class="flex flex-wrap gap-1.5"> <span class="px-2 py-1 text-[10px] rounded-full border border-white/10 text-white/40 bg-purple-500/10 italic">
Information coming soon
</span> </div> </div>`} <!-- Social Links (exact same structure) --> <div class="flex gap-2 mt-auto"> <!-- GitHub Button --> ${member.github ? renderTemplate`<a${addAttribute(`https://github.com/${member.github}`, "href")} target="_blank" rel="noopener noreferrer" class="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-600/20 border border-white/20 text-white/90 hover:bg-gray-500/30 hover:text-white transition-colors duration-200 text-[10px] shadow"> <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clip-rule="evenodd"></path> </svg>
GitHub
</a>` : renderTemplate`<div class="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-800/15 border border-white/10 text-white/40 text-[10px] cursor-not-allowed opacity-60"> <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clip-rule="evenodd"></path> </svg>
GitHub
</div>`} <!-- LinkedIn Button --> ${member.linkedin ? renderTemplate`<a${addAttribute(`https://linkedin.com/in/${member.linkedin}`, "href")} target="_blank" rel="noopener noreferrer" class="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-600/20 border border-white/20 text-white/90 hover:bg-blue-500/30 hover:text-white transition-colors duration-200 text-[10px] shadow"> <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"> <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"></path> </svg>
LinkedIn
</a>` : renderTemplate`<div class="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-800/15 border border-white/10 text-white/40 text-[10px] cursor-not-allowed opacity-60"> <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"> <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"></path> </svg>
LinkedIn
</div>`} </div> </div> </div>`;
}, "/Users/joey/Desktop/ProgClubSite-1/src/components/LiteMemberCard.astro", void 0);

const membersByYear = {
  // =============================================================================
  // CURRENT LEADERSHIP (2025-2027)
  // =============================================================================
  "2025-2027": [
    {
      name: "Joey Zhang",
      role: "5th President",
      description: "Current 5th President leading PROGgsu into the future! Passionate about building community and helping fellow programmers grow. Math + CS @ GSU, building InfiniteMonke.",
      github: "joeyzhang-dev",
      linkedin: "joeyzhangdev",
      specialties: ["Leadership", "Bench Press", "Monkeytype", "Eating food", `Height: 6'5"`]
    },
    {
      name: "Evan Anderson",
      role: "Vice President",
      description: "Vice President serving under Joey Zhang's leadership, bringing a unique blend of creative and technical skills to help guide PROGgsu's continued growth.",
      linkedin: "evan-anderson636",
      specialties: ["Fashion Design", "Cooking", "App Dev", "Data Analytics"]
    },
    {
      name: "Ibe Mohammed Ali",
      role: "Director of Technology",
      description: "Building and maintaining PROGgsu’s github and projects, mentoring devs, and making sure things break less than my sleep schedule.",
      github: "ibeeeees",
      specialties: ["Software Development", "Mentorship", "Debugging at 2 AM", "Good Ball"]
    }
  ],
  // =============================================================================
  // TRANSITION PERIOD (2023-2025) 
  // Ethan (3rd President) → Prahbir (4th President) leadership transition
  // =============================================================================
  "2023-2025": [
    {
      name: "Ethan Munji",
      role: "3rd President",
      description: "3rd President who served during Fall 2023. His leadership period was cut short due to a skateboarding accident, but his contributions helped maintain club momentum during his tenure.",
      github: "xMunji",
      specialties: ["Leadership", "Software Engineering", "Team Building", "Community Engagement", "Skateboarding"]
    },
    {
      name: "Prahbir Virk",
      role: "4th President",
      description: "4th President who stepped in during Fall 2023 when Ethan was unable to continue, demonstrating leadership and commitment to the club during a challenging transition period.",
      github: "PrahbirVirk",
      linkedin: "Prahbirvirk",
      specialties: ["Leadership", "Project Management", "Software Development", "Crisis Management"]
    }
  ],
  // =============================================================================
  // BEETHOVEN ERA (2021-2023)
  // 2nd President period with major club transformations and growth
  // =============================================================================
  "2021-2023": [
    {
      name: "Beethoven",
      role: "2nd President",
      description: "2nd President who transformed PROGgsu from basic HackJams to comprehensive technical interview preparation. Led the club's evolution into a powerhouse for competitive programming and career development.",
      specialties: ["Technical Interviews", "Competitive Programming", "Leadership", "Mentorship"],
      github: "beesmalley"
    },
    {
      name: "John Martin",
      role: "Academic Advisor",
      description: "Facebook Engineer In Residence (EIR) who served as Academic Advisor from 2021-2022. Worked closely with Beethoven and the second executive board to expand club programming and industry partnerships.",
      specialties: ["Industry Mentorship", "Academic Guidance", "Facebook/Meta Partnerships"],
      linkedin: "ilovecodereview"
    },
    {
      name: "Batya Zamansky",
      role: "Academic Advisor",
      description: "Facebook Engineer In Residence (EIR) who served as Academic Advisor from 2022-2023. Continued the tradition of industry guidance before pursuing her career as Senior Software Engineer at Meta.",
      specialties: ["Industry Mentorship", "Software Engineering", "Career Guidance"]
    },
    {
      name: "Cierra",
      role: "Vice President",
      description: "Vice President during the second executive board era, helping to expand PROGgsu's reach and member engagement.",
      specialties: ["Leadership", "Member Engagement", "Strategic Planning"]
    },
    {
      name: "Sara Edwards",
      role: "Director of Events",
      description: "Director of Events who organized innovative programming events and workshops during the club's growth period.",
      specialties: ["Event Planning", "Workshop Development", "Community Outreach"]
    },
    {
      name: "Humi",
      role: "Exec"
    },
    {
      name: "Owen",
      role: "Exec"
    },
    {
      name: "Adrian",
      role: "Exec"
    },
    {
      name: "JenniferA",
      role: "Exec"
    },
    {
      name: "Nyima",
      role: "Director of Events",
      description: "Director of Events who contributed to PROGgsu's programming and community building efforts.",
      specialties: ["Event Coordination", "Program Development", "Team Leadership"]
    },
    {
      name: "Srikumar",
      role: "Exec"
    }
  ],
  // =============================================================================
  // THE FOUNDING ERA (2020-2021) 
  // Jenny Liu's founding presidency and the original team that started it all
  // =============================================================================
  "2020-2021": [
    {
      name: "Jenny Liu",
      role: "Founding President",
      description: "Our fearless founder! Started PROGgsu from an idea in March 2020 during the COVID-19 pandemic and built it into the thriving community it is today. True visionary and leader.",
      github: "ShantingLiu",
      linkedin: "jsliu",
      specialties: ["Club Founding", "Visionary Leadership", "Community Building"]
    },
    {
      name: "Andrew Huang",
      role: "Founding Academic Advisor",
      description: "Facebook Engineer In Residence (EIR) and founding academic advisor who provided crucial guidance and industry expertise during PROGgsu's creation in 2020.",
      linkedin: "shidihuang",
      specialties: ["Industry Mentorship", "Academic Guidance", "Software Engineering"]
    },
    {
      name: "Shardul",
      role: "Founding VP",
      description: "Founding member and Vice President who worked closely with Jenny to establish PROGgsu from its very beginning in March 2020. Now Developer Experience Solutions Architect @ Amazon Web Services.",
      github: "5herlocked",
      linkedin: "shardul-vaidya",
      specialties: ["Event Planning", "Logistics", "Team Coordination", "Cloud Architecture"]
    },
    {
      name: "Ikenna",
      role: "Secretary/Librarian",
      description: "Founding member and Secretary/Librarian who helped establish club documentation and organizational systems from day one.",
      specialties: ["Documentation", "Organization", "Communication"]
    },
    {
      name: "Adithya",
      role: "Director of Events",
      description: "Founding member and Director of Events who co-organized the very first PROGgsu events and helped establish event programming traditions.",
      specialties: ["Event Planning", "Workshop Organization", "Community Engagement"]
    },
    {
      name: "Beethoven",
      role: "Director of Events",
      description: "Founding member and Director of Events (originally 'Bee') who partnered with Adithya to create engaging programming events from the club's inception.",
      github: "beesmalley",
      specialties: ["Event Coordination", "Workshop Development", "Leadership Development"]
    },
    {
      name: "Gyan",
      role: "Director of Technology",
      description: "Founding member and Director of Technology (formerly called Tech Chair) who managed technical infrastructure from PROGgsu's founding.",
      specialties: ["Technical Infrastructure", "Web Development", "System Administration"]
    },
    {
      name: "Anish Ganga",
      role: "Director of Technology",
      description: "Founding member and Director of Technology who partnered with Gyan to establish the club's technology foundations from the beginning.",
      specialties: ["Technical Infrastructure", "Software Development", "System Design"]
    },
    {
      name: "Shain Dholakiya",
      role: "Founding Member",
      description: "Founding member who served from the founding period through 2023, contributing to PROGgsu's growth and development.",
      specialties: ["Executive Leadership", "Strategic Planning", "Community Growth"]
    },
    {
      name: "Japnit",
      role: "Founding Member",
      description: "Founding member who served from the founding era through 2023, helping to build PROGgsu's foundations.",
      specialties: ["Executive Leadership", "Community Building", "Program Development"]
    },
    {
      name: "Rebecca",
      role: "Founding Member"
    },
    {
      name: "Tawfiq",
      role: "Founding Member"
    },
    {
      name: "Elisha",
      role: "Founding Member"
    },
    {
      name: "Austin",
      role: "Founding Member"
    },
    {
      name: "Dagm",
      role: "Server Owner",
      description: "Server owner who managed PROGgsu's Discord and online infrastructure, keeping the community connected.",
      specialties: ["Server Administration", "Community Management", "Discord Moderation"]
    }
  ]
};

const $$Astro = createAstro("https://proggsu.vercel.app");
const $$Members = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Members;
  const sortedMembers = sortMembersByRole(membersByYear);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Members - progsu", "description": "Meet the amazing members of progsu across the years. From founding members to current leadership, discover the people building GSU's programming community.", "data-astro-cid-hu6ywz6e": true }, { "breadcrumb": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "breadcrumb" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="mb-6 mt-2" data-astro-cid-hu6ywz6e> <nav class="flex items-center gap-2 text-white/80 text-sm" aria-label="Breadcrumb" data-astro-cid-hu6ywz6e> <a href="/" class="hover:underline" data-astro-cid-hu6ywz6e>Home</a> <span data-astro-cid-hu6ywz6e>/</span> ${renderComponent($$result3, "Breadcrumb", $$Breadcrumb, { "title": "Members", "data-astro-cid-hu6ywz6e": true })} </nav> </div> ` })}`, "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Section", $$Section, { "title": "Our Amazing Members", "className": "pt-16", "data-astro-cid-hu6ywz6e": true }, { "default": ($$result3) => renderTemplate` <div class="max-w-7xl mx-auto" data-astro-cid-hu6ywz6e> <div class="text-center mb-12" data-astro-cid-hu6ywz6e> <p class="text-white/80 text-lg mt-6 max-w-3xl mx-auto leading-relaxed" data-astro-cid-hu6ywz6e>
Meet the incredible people who make progsu possible! From our founding members who started this journey
          to our current leadership team, each person contributes to building GSU's vibrant programming community.
</p> </div> <!-- Tab Navigation --> <div class="flex flex-wrap justify-center mb-12 gap-3" data-astro-cid-hu6ywz6e> ${Object.keys(sortedMembers).map((year, index) => renderTemplate`<button${addAttribute(`tab-btn px-4 md:px-6 py-2 md:py-3 rounded-lg border transition-all duration-300 font-medium text-sm md:text-base ${index === 0 ? "bg-purple-600 text-white border-purple-600 shadow-lg shadow-purple-600/30" : "bg-transparent text-white border-white/30 hover:border-purple-400 hover:bg-purple-600/20 hover:text-purple-200"}`, "class")}${addAttribute(year, "data-tab")}${addAttribute(`tab-${year}`, "id")} role="tab"${addAttribute(index === 0 ? "true" : "false", "aria-selected")}${addAttribute(`panel-${year}`, "aria-controls")} data-astro-cid-hu6ywz6e> ${year} </button>`)} </div> <!-- Tab Content --> ${Object.entries(sortedMembers).map(([year, members], index) => {
    const { fullCardMembers, liteCardMembers, listMembers } = separateMembersByDisplayType(members);
    return renderTemplate`<div${addAttribute(`tab-content ${index === 0 ? "block" : "hidden"}`, "class")}${addAttribute(year, "data-tab-content")} role="tabpanel"${addAttribute(`panel-${year}`, "id")}${addAttribute(`tab-${year}`, "aria-labelledby")} data-astro-cid-hu6ywz6e> <!-- Member Count --> <div class="text-center mb-8" data-astro-cid-hu6ywz6e> <p class="text-white/70 text-lg" data-astro-cid-hu6ywz6e> ${members.length} amazing member${members.length !== 1 ? "s" : ""} </p> </div> <!-- Full Animated Cards (Presidents, VPs, Advisors) --> ${fullCardMembers.length > 0 && renderTemplate`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8" data-astro-cid-hu6ywz6e> ${fullCardMembers.map((member) => renderTemplate`${renderComponent($$result3, "MemberCard", $$MemberCard, { "member": member, "year": year, "data-astro-cid-hu6ywz6e": true })}`)} </div>`} <!-- Lite Cards (Mid-level roles) --> ${liteCardMembers.length > 0 && renderTemplate`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8" data-astro-cid-hu6ywz6e> ${liteCardMembers.map((member) => renderTemplate`${renderComponent($$result3, "LiteMemberCard", $$LiteMemberCard, { "member": member, "year": year, "data-astro-cid-hu6ywz6e": true })}`)} </div>`} <!-- Simple Member List (Basic roles) --> ${listMembers.length > 0 && renderTemplate`<div class="mt-8 mb-16" data-astro-cid-hu6ywz6e> <h3 class="text-xl font-semibold text-white mb-6 text-center" data-astro-cid-hu6ywz6e>
Additional Members
</h3> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto" data-astro-cid-hu6ywz6e> ${listMembers.map((member) => renderTemplate`<div class="bg-white/5 border border-white/10 rounded-lg p-4 backdrop-blur-sm hover:bg-white/10 transition-all duration-300" data-astro-cid-hu6ywz6e> <div class="flex items-center gap-3" data-astro-cid-hu6ywz6e> <div class="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold text-sm" data-astro-cid-hu6ywz6e> ${member.name.charAt(0)} </div> <div data-astro-cid-hu6ywz6e> <h4 class="text-white font-medium text-sm" data-astro-cid-hu6ywz6e>${member.name}</h4> <p class="text-white/60 text-xs" data-astro-cid-hu6ywz6e>${member.role}</p> </div> </div> </div>`)} </div> </div>`} </div>`;
  })} <!-- Call to Action --> <div class="text-center mt-16 py-12 px-8 rounded-2xl border border-white/20 bg-gradient-to-br from-white/[0.08] via-white/[0.05] to-white/[0.02] backdrop-blur-md" data-astro-cid-hu6ywz6e> <h3 class="text-3xl font-bold text-white mb-4 glow-pulse-title" data-astro-cid-hu6ywz6e>
Want to Join Our Team?
</h3> <p class="text-white/80 text-lg mb-6 max-w-2xl mx-auto" data-astro-cid-hu6ywz6e>
We're always looking for passionate programmers to join our community! Whether you're a beginner 
          or experienced developer, there's a place for you in progsu.
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center" data-astro-cid-hu6ywz6e> <a href="/events" class="px-8 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg" data-astro-cid-hu6ywz6e>
Check Out Our Events
</a> <a${addAttribute(String(DISCORD_LINK), "href")} target="_blank" class="px-8 py-3 rounded-lg border border-white/30 text-white hover:bg-white/10 font-medium transition-all duration-300 hover:scale-105" data-astro-cid-hu6ywz6e> <span data-astro-cid-hu6ywz6e>❤️ Join Our Discord</span> </a> </div> </div> </div> ` })} ` })}  ${renderScript($$result, "/Users/joey/Desktop/ProgClubSite-1/src/pages/members.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/joey/Desktop/ProgClubSite-1/src/pages/members.astro", void 0);

const $$file = "/Users/joey/Desktop/ProgClubSite-1/src/pages/members.astro";
const $$url = "/members";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Members,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
