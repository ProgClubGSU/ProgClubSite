import { c as createAstro, a as createComponent, m as maybeRenderHead, d as addAttribute, o as renderSlot, b as renderTemplate } from './astro/server_ncwxtDV0.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://proggsu.vercel.app");
const $$Section = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Section;
  const { title = "Section", full_screen = false, className = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(title.toLowerCase().replaceAll(" ", ""), "id")}${addAttribute(`${full_screen ? "h-screen" : ""} px-4 py-10 w-screen !overflow-x-hidden ${className}`, "class")}> <div class="w-full grid place-items-center"> <h2 class="text-4xl md:text-6xl text-center">${`<${title} />`}</h2> </div> <div class="w-full mt-10 px-4"> ${renderSlot($$result, $$slots["default"])} </div> </section>`;
}, "/Users/joey/Desktop/ProgClubSite-1/src/components/Section.astro", void 0);

export { $$Section as $ };
