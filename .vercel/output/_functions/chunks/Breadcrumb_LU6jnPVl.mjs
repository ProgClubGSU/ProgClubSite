import { c as createAstro, a as createComponent, m as maybeRenderHead, b as renderTemplate } from './astro/server_ncwxtDV0.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://proggsu.vercel.app");
const $$Breadcrumb = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Breadcrumb;
  const { title = "Title" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg-white flex items-center justify-center leading-none pt-2 pb-1 text-center select-none rounded-2xl px-5 font-semibold text-black w-fit"> <span>${title}</span> </div>`;
}, "/Users/joey/Desktop/ProgClubSite-1/src/components/Breadcrumb.astro", void 0);

export { $$Breadcrumb as $ };
