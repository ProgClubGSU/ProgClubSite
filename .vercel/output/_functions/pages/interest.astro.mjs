/* empty css                                 */
import { c as createAstro, a as createComponent, r as renderComponent, e as renderScript, b as renderTemplate, m as maybeRenderHead, d as addAttribute, F as Fragment } from '../chunks/astro/server_BkcvDG7p.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_c2u_HCNh.mjs';
import { S as SITE_TITLE } from '../chunks/consts_Db3kfyLr.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://proggsu.vercel.app");
const $$Interest = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Interest;
  let formStructure = null;
  let formError = null;
  try {
    const apiUrl = false ? "http://localhost:4321/api/forms/get-structure" : `${Astro2.site}api/forms/get-structure`;
    const response = await fetch(apiUrl);
    if (response.ok) {
      formStructure = await response.json();
    } else {
      throw new Error(`API returned ${response.status}`);
    }
  } catch (error) {
    console.error("Failed to fetch form structure:", error);
    formError = error.message;
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Join ${SITE_TITLE}`, "description": "Join our programming club and connect with fellow developers", "data-astro-cid-kuuuxn24": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto px-4 py-8" data-astro-cid-kuuuxn24> <!-- Page Header --> <div class="text-center mb-12" data-astro-cid-kuuuxn24> <h1 class="text-5xl md:text-6xl font-bold mb-4 glow-pulse-title" data-astro-cid-kuuuxn24>
Join <span class="text-purple-400" data-astro-cid-kuuuxn24>${SITE_TITLE}</span> </h1> <p class="text-xl text-white/80 max-w-2xl mx-auto" data-astro-cid-kuuuxn24>
Ready to dive into programming? Fill out our interest form and join our community of developers!
</p> </div> <!-- Styled Form Container --> <div class="relative overflow-hidden rounded-2xl backdrop-blur-xl shadow-2xl border border-white/20 bg-gradient-to-br from-white/[0.08] via-white/[0.05] to-white/[0.02] p-8" data-astro-cid-kuuuxn24> <!-- Glass effect overlay --> <div class="absolute inset-0 bg-gradient-to-br from-white/[0.1] via-transparent to-transparent opacity-60" data-astro-cid-kuuuxn24></div> <!-- Subtle glow effect --> <div class="absolute inset-0 bg-gradient-to-br from-purple-400/5 via-transparent to-blue-400/5 opacity-80 rounded-2xl" data-astro-cid-kuuuxn24></div> <div class="relative z-10" data-astro-cid-kuuuxn24> <h2 class="text-2xl font-bold mb-6 text-white drop-shadow-sm border-b border-white/20 pb-3" data-astro-cid-kuuuxn24> ${formStructure?.info?.title || "2025 progsu Signup"} </h2> ${formStructure?.info?.description && renderTemplate`<p class="text-white/80 mb-6 leading-relaxed" data-astro-cid-kuuuxn24> ${formStructure.info.description} </p>`} <!-- Error State --> ${formError && renderTemplate`<div class="mb-6 p-4 rounded-lg bg-red-500/20 border border-red-500/50" data-astro-cid-kuuuxn24> <h3 class="font-semibold text-red-300 mb-2" data-astro-cid-kuuuxn24>Unable to load form</h3> <p class="text-red-200 text-sm" data-astro-cid-kuuuxn24>
There was an issue loading the form structure. Please try refreshing the page.
</p> <details class="mt-2" data-astro-cid-kuuuxn24> <summary class="text-red-300 text-xs cursor-pointer" data-astro-cid-kuuuxn24>Technical details</summary> <p class="text-red-400/80 text-xs mt-1 font-mono" data-astro-cid-kuuuxn24>${formError}</p> </details> </div>`} <!-- Dynamic Form --> ${formStructure && renderTemplate`<form id="join-form" class="space-y-6" novalidate onsubmit="return false;" data-astro-cid-kuuuxn24> ${formStructure.items?.map((item, index) => {
    const question = item.questionItem?.question;
    if (!question) return null;
    const isRequired = question.required;
    const title = item.title;
    const description = item.description;
    const questionId = question.questionId;
    const fieldId = `field-${questionId}`;
    if (question.textQuestion) {
      const isEmail = title.toLowerCase().includes("email");
      const isPhone = title.toLowerCase().includes("phone");
      return renderTemplate`<div class="form-group" data-astro-cid-kuuuxn24> <label${addAttribute(fieldId, "for")} class="form-label" data-astro-cid-kuuuxn24> ${title}${isRequired && " *"} </label> ${description && renderTemplate`<p class="text-sm text-white/60 mb-2" data-astro-cid-kuuuxn24>${description}</p>`} <input${addAttribute(isEmail ? "email" : isPhone ? "tel" : "text", "type")}${addAttribute(fieldId, "id")}${addAttribute(questionId, "data-question-id")}${addAttribute(isRequired, "required")} class="form-input"${addAttribute(
        isEmail ? "your.email@gsu.edu" : isPhone ? "4045551234" : `Enter your ${title.toLowerCase()}`,
        "placeholder"
      )}${addAttribute(isRequired ? isEmail ? "email" : isPhone ? "phone" : "required" : isPhone ? "phone" : "", "data-validate")} data-astro-cid-kuuuxn24> ${isPhone && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-kuuuxn24": true }, { "default": async ($$result3) => renderTemplate` <p class="text-sm text-white/60 mt-2" data-astro-cid-kuuuxn24>
Want text reminders about PROGgsu events, workshops, and tech opportunities? 
                          Enter your number and opt in below. We'll only text about programming club activities. No spam ever.
</p> <p class="text-xs text-yellow-400/70 mt-1" data-astro-cid-kuuuxn24>
💡 Tip: Enter just the digits (e.g., 4045551234) for best compatibility
</p> ` })}`} <div class="error-message"${addAttribute(`${fieldId}-error`, "id")} data-astro-cid-kuuuxn24></div> </div>`;
    }
    if (question.choiceQuestion) {
      const isCheckbox = question.choiceQuestion.type === "CHECKBOX";
      const options = question.choiceQuestion.options || [];
      return renderTemplate`<div class="form-group" data-astro-cid-kuuuxn24> <label class="form-label" data-astro-cid-kuuuxn24> ${title}${isRequired && " *"} </label> ${description && renderTemplate`<p class="text-sm text-white/60 mb-2" data-astro-cid-kuuuxn24>${description}</p>`} <div${addAttribute(isCheckbox ? "checkbox-group" : "radio-group", "class")}${addAttribute(`${fieldId}-group`, "id")} data-astro-cid-kuuuxn24> ${options.map((option, optionIndex) => {
        const inputType = isCheckbox ? "checkbox" : "radio";
        const name = isCheckbox ? `question_${questionId}` : `question_${questionId}`;
        const inputId = `${fieldId}-option-${optionIndex}`;
        return renderTemplate`<label class="checkbox-item" data-astro-cid-kuuuxn24> <input${addAttribute(inputType, "type")}${addAttribute(inputId, "id")}${addAttribute(name, "name")}${addAttribute(option.value, "value")} class="form-checkbox"${addAttribute(questionId, "data-question-id")} data-astro-cid-kuuuxn24> <span class="checkbox-label" data-astro-cid-kuuuxn24>${option.value}</span> </label>`;
      })} </div> <div class="error-message"${addAttribute(`${fieldId}-error`, "id")} data-astro-cid-kuuuxn24></div> </div>`;
    }
    return null;
  })} <!-- Submit Button --> <div class="form-group" data-astro-cid-kuuuxn24> <button type="button" class="submit-btn" id="submit-btn" data-astro-cid-kuuuxn24> <span class="btn-text" data-astro-cid-kuuuxn24>Submit Application</span> <span class="btn-glow" data-astro-cid-kuuuxn24></span> </button> </div> </form>`} <!-- Fallback Form (if API fails) --> ${!formStructure && !formError && renderTemplate`<div class="text-center py-8" data-astro-cid-kuuuxn24> <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-400 mx-auto mb-4" data-astro-cid-kuuuxn24></div> <p class="text-white/60" data-astro-cid-kuuuxn24>Loading form...</p> </div>`} <!-- Fallback message for when JavaScript is disabled --> <noscript> <div class="mt-4 p-4 bg-red-500/20 border border-red-500/50 rounded-lg" data-astro-cid-kuuuxn24> <p class="text-red-300 text-center" data-astro-cid-kuuuxn24>JavaScript is required for this form to work properly. Please enable JavaScript in your browser.</p> </div> </noscript> <!-- Additional Info --> <div class="mt-8 p-6 rounded-xl bg-white/[0.05] border border-white/10" data-astro-cid-kuuuxn24> <h3 class="text-lg font-semibold mb-3 text-purple-300" data-astro-cid-kuuuxn24>What happens next?</h3> <ul class="space-y-2 text-white/80" data-astro-cid-kuuuxn24> <li class="flex items-start gap-2" data-astro-cid-kuuuxn24> <span class="text-purple-400 mt-1" data-astro-cid-kuuuxn24>→</span> <span data-astro-cid-kuuuxn24>We'll review your application and get back to you within 48 hours</span> </li> <li class="flex items-start gap-2" data-astro-cid-kuuuxn24> <span class="text-purple-400 mt-1" data-astro-cid-kuuuxn24>→</span> <span data-astro-cid-kuuuxn24>Join our Discord server to connect with other members</span> </li> <li class="flex items-start gap-2" data-astro-cid-kuuuxn24> <span class="text-purple-400 mt-1" data-astro-cid-kuuuxn24>→</span> <span data-astro-cid-kuuuxn24>Attend our next meeting and start building amazing projects</span> </li> </ul> </div> </div> </div> </div> ` })}  ${renderScript($$result, "/Users/joey/Desktop/ProgClubSite-1/src/pages/interest.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/joey/Desktop/ProgClubSite-1/src/pages/interest.astro", void 0);
const $$file = "/Users/joey/Desktop/ProgClubSite-1/src/pages/interest.astro";
const $$url = "/interest";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Interest,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
