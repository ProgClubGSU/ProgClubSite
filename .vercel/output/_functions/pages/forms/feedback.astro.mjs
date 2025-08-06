/* empty css                                    */
import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_BkcvDG7p.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_c2u_HCNh.mjs';
import { $ as $$DynamicForm } from '../../chunks/DynamicForm_DWr16pUC.mjs';
import { S as SITE_TITLE } from '../../chunks/consts_Db3kfyLr.mjs';
/* empty css                                       */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://proggsu.vercel.app");
const $$Feedback = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Feedback;
  const eventType = Astro2.url.searchParams.get("event") || "general";
  const FEEDBACK_FORMS = {
    "workshop": "your-workshop-feedback-form-id",
    "meeting": "your-meeting-feedback-form-id",
    "event": "your-event-feedback-form-id",
    "general": "your-general-feedback-form-id"
  };
  const formId = FEEDBACK_FORMS[eventType] || FEEDBACK_FORMS.general;
  const titles = {
    "workshop": "Workshop Feedback",
    "meeting": "Meeting Feedback",
    "event": "Event Feedback",
    "general": "General Feedback"
  };
  const descriptions = {
    "workshop": "Help us improve our workshops by sharing your experience",
    "meeting": "Share your thoughts about today's meeting",
    "event": "Tell us how we can make our events even better",
    "general": "We value your feedback and suggestions"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${titles[eventType]} | ${SITE_TITLE}`, "data-astro-cid-plkrouzk": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-12" data-astro-cid-plkrouzk> <div class="container mx-auto px-4" data-astro-cid-plkrouzk> <!-- Header --> <div class="text-center mb-12" data-astro-cid-plkrouzk> <h1 class="text-4xl font-bold text-gray-900 mb-4" data-astro-cid-plkrouzk>
We Want Your Feedback!
</h1> <p class="text-xl text-gray-600" data-astro-cid-plkrouzk>
Your input helps us create better experiences for everyone
</p> </div> <!-- Dynamic Feedback Form --> ${renderComponent($$result2, "DynamicForm", $$DynamicForm, { "formId": formId, "title": titles[eventType], "description": descriptions[eventType], "redirectUrl": "/forms/thank-you", "showFormTitle": true, "data-astro-cid-plkrouzk": true })} <!-- Additional Info --> <div class="mt-12 bg-white/50 backdrop-blur-sm rounded-lg p-6 text-center" data-astro-cid-plkrouzk> <h3 class="text-lg font-semibold text-gray-800 mb-2" data-astro-cid-plkrouzk>
Other Feedback Forms
</h3> <div class="space-x-4" data-astro-cid-plkrouzk> <a href="/forms/feedback?event=workshop" class="text-emerald-600 hover:text-emerald-800 underline" data-astro-cid-plkrouzk>
Workshop Feedback
</a> <a href="/forms/feedback?event=meeting" class="text-emerald-600 hover:text-emerald-800 underline" data-astro-cid-plkrouzk>
Meeting Feedback
</a> <a href="/forms/feedback?event=event" class="text-emerald-600 hover:text-emerald-800 underline" data-astro-cid-plkrouzk>
Event Feedback
</a> </div> </div> </div> </main> ` })} `;
}, "/Users/joey/Desktop/ProgClubSite-1/src/pages/forms/feedback.astro", void 0);

const $$file = "/Users/joey/Desktop/ProgClubSite-1/src/pages/forms/feedback.astro";
const $$url = "/forms/feedback";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Feedback,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
