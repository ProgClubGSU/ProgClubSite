import { c as createAstro, a as createComponent, m as maybeRenderHead, d as addAttribute, b as renderTemplate } from './astro/server_DQwDjssB.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://proggsu.vercel.app");
const $$ResourceButtons = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ResourceButtons;
  const { resources, class: extraClass = "" } = Astro2.props;
  const getButtonColor = (type) => {
    switch (type.toLowerCase()) {
      case "video":
        return "bg-blue-600 hover:bg-blue-700";
      case "slides":
        return "bg-green-600 hover:bg-green-700";
      case "recording":
        return "bg-purple-600 hover:bg-purple-700";
      case "article":
        return "bg-orange-600 hover:bg-orange-700";
      default:
        return "bg-gray-600 hover:bg-gray-700";
    }
  };
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`flex flex-wrap ${extraClass.includes("compact") ? "gap-1" : "gap-3"}`.trim(), "class")}> ${resources && resources.map((resource) => resource && typeof resource === "object" && resource.type ? resource.url ? renderTemplate`<a${addAttribute(resource.url, "href")} target="_blank"${addAttribute(`${getButtonColor(resource.type)} text-white ${extraClass.includes("compact") ? "px-2 py-1 text-xs" : "px-4 py-2"} rounded transition-colors`, "class")}> ${resource.label || resource.type} </a>` : renderTemplate`<span${addAttribute(`bg-gray-600 text-white ${extraClass.includes("compact") ? "px-2 py-1 text-xs" : "px-4 py-2"} rounded opacity-50`, "class")}> ${resource.label || resource.type} (Coming Soon)
</span>` : null)} </div>`;
}, "/Users/joey/Desktop/ProgClubSite-1/src/components/ResourceButtons.astro", void 0);

export { $$ResourceButtons as $ };
