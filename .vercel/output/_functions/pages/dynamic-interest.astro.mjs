/* empty css                                 */
import { a as createComponent, g as renderHead, r as renderScript, b as renderTemplate } from '../chunks/astro/server_DQwDjssB.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                            */
export { renderers } from '../renderers.mjs';

const $$DynamicInterest = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en" data-astro-cid-2c5jo7vq> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Dynamic progsu Interest Form</title>${renderHead()}</head> <body data-astro-cid-2c5jo7vq> <div class="container" data-astro-cid-2c5jo7vq> <div id="loading" class="loading" data-astro-cid-2c5jo7vq> <h2 data-astro-cid-2c5jo7vq>Loading dynamic form...</h2> <p data-astro-cid-2c5jo7vq>Fetching latest form structure from Google Forms API</p> </div> <div id="form-container" style="display: none;" data-astro-cid-2c5jo7vq> <!-- Dynamic form will be inserted here --> </div> </div> ${renderScript($$result, "/Users/joey/Desktop/ProgClubSite-1/src/pages/dynamic-interest.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "/Users/joey/Desktop/ProgClubSite-1/src/pages/dynamic-interest.astro", void 0);

const $$file = "/Users/joey/Desktop/ProgClubSite-1/src/pages/dynamic-interest.astro";
const $$url = "/dynamic-interest";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$DynamicInterest,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
