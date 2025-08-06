/* empty css                                    */
import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_BkcvDG7p.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_c2u_HCNh.mjs';
import { $ as $$DynamicForm } from '../../chunks/DynamicForm_DWr16pUC.mjs';
import { S as SITE_TITLE } from '../../chunks/consts_Db3kfyLr.mjs';
/* empty css                                         */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://proggsu.vercel.app");
const $$Attendance = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Attendance;
  const eventName = Astro2.url.searchParams.get("event") || "Programming Workshop";
  const eventDate = Astro2.url.searchParams.get("date") || "Today";
  const ATTENDANCE_FORMS = {
    "leetcode-workshop": "your-leetcode-workshop-form-id",
    "react-workshop": "your-react-workshop-form-id",
    "career-fair": "your-career-fair-form-id",
    "default": "your-default-attendance-form-id"
  };
  const eventType = Astro2.url.searchParams.get("type") || "default";
  const formId = ATTENDANCE_FORMS[eventType] || ATTENDANCE_FORMS.default;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${eventName} - Attendance | ${SITE_TITLE}`, "data-astro-cid-g4l4vwwo": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12" data-astro-cid-g4l4vwwo> <div class="container mx-auto px-4" data-astro-cid-g4l4vwwo> <!-- Event Header --> <div class="text-center mb-12" data-astro-cid-g4l4vwwo> <h1 class="text-4xl font-bold text-gray-900 mb-4" data-astro-cid-g4l4vwwo> ${eventName} </h1> <p class="text-xl text-gray-600 mb-2" data-astro-cid-g4l4vwwo> ${eventDate} </p> <p class="text-lg text-gray-500" data-astro-cid-g4l4vwwo>
Please check in to confirm your attendance
</p> </div> <!-- Dynamic Attendance Form --> ${renderComponent($$result2, "DynamicForm", $$DynamicForm, { "formId": formId, "title": "Event Check-In", "description": "Quick check-in to confirm your attendance and help us improve future events", "redirectUrl": "/events/thank-you", "showFormTitle": true, "data-astro-cid-g4l4vwwo": true })} <!-- Quick Links --> <div class="mt-12 text-center" data-astro-cid-g4l4vwwo> <div class="space-x-4" data-astro-cid-g4l4vwwo> <a href="/events" class="text-indigo-600 hover:text-indigo-800 underline" data-astro-cid-g4l4vwwo>
Back to Events
</a> <a href="/" class="text-indigo-600 hover:text-indigo-800 underline" data-astro-cid-g4l4vwwo>
Home
</a> </div> </div> </div> </main> ` })} `;
}, "/Users/joey/Desktop/ProgClubSite-1/src/pages/events/attendance.astro", void 0);

const $$file = "/Users/joey/Desktop/ProgClubSite-1/src/pages/events/attendance.astro";
const $$url = "/events/attendance";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Attendance,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
