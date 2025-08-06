import { c as createAstro, a as createComponent, m as maybeRenderHead, e as renderScript, b as renderTemplate, d as addAttribute } from './astro/server_BkcvDG7p.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                              */

const $$Astro = createAstro("https://proggsu.vercel.app");
const $$DynamicForm = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$DynamicForm;
  const {
    formId,
    redirectUrl = "/thank-you",
    title,
    description,
    showFormTitle = true
  } = Astro2.props;
  let formStructure = null;
  let formError = null;
  try {
    const apiUrl = false ? `http://localhost:4321/api/forms/get-structure?formId=${formId}` : `${Astro2.site}api/forms/get-structure?formId=${formId}`;
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
  return renderTemplate`${maybeRenderHead()}<div class="dynamic-form-container" data-astro-cid-jp4cvj5z> <div class="form-wrapper" data-astro-cid-jp4cvj5z> ${showFormTitle && renderTemplate`<h2 class="form-title" data-astro-cid-jp4cvj5z> ${title || formStructure?.info?.title || "Form"} </h2>`} ${(description || formStructure?.info?.description) && renderTemplate`<p class="form-description" data-astro-cid-jp4cvj5z> ${description || formStructure.info.description} </p>`} ${formError ? renderTemplate`<div class="error-fallback" data-astro-cid-jp4cvj5z> <h3 data-astro-cid-jp4cvj5z>Form temporarily unavailable</h3> <p data-astro-cid-jp4cvj5z>Please try again later or contact us directly.</p> </div>` : renderTemplate`<form${addAttribute(`dynamic-form-${formId}`, "id")} class="dynamic-form" novalidate onsubmit="return false;" data-astro-cid-jp4cvj5z> ${formStructure?.items?.map((item) => {
    const question = item.questionItem?.question;
    if (!question) return null;
    const questionId = question.questionId;
    const title2 = item.title;
    const isRequired = question.required;
    const description2 = item.description;
    const isEmail = title2.toLowerCase().includes("email");
    const isPhone = title2.toLowerCase().includes("phone");
    title2.toLowerCase().includes("name");
    return renderTemplate`<div class="form-group" data-astro-cid-jp4cvj5z> <label class="form-label" data-astro-cid-jp4cvj5z> ${title2} ${isRequired && renderTemplate`<span class="required" data-astro-cid-jp4cvj5z>*</span>`} </label> ${description2 && renderTemplate`<p class="field-description" data-astro-cid-jp4cvj5z>${description2}</p>`} ${question.choiceQuestion ? renderTemplate`<div${addAttribute(question.choiceQuestion.type === "CHECKBOX" ? "checkbox-group" : "radio-group", "class")} data-astro-cid-jp4cvj5z> ${question.choiceQuestion.options.map((option) => renderTemplate`<label class="choice-item" data-astro-cid-jp4cvj5z> <input${addAttribute(question.choiceQuestion.type === "CHECKBOX" ? "checkbox" : "radio", "type")}${addAttribute(`question-${questionId}`, "name")}${addAttribute(option.value, "value")}${addAttribute(questionId, "data-question-id")} class="form-choice"${addAttribute(isRequired && question.choiceQuestion.type === "RADIO", "required")} data-astro-cid-jp4cvj5z> <span class="choice-label" data-astro-cid-jp4cvj5z>${option.value}</span> </label>`)} </div>` : renderTemplate`<input${addAttribute(isEmail ? "email" : isPhone ? "tel" : "text", "type")}${addAttribute(`field-${questionId}`, "id")}${addAttribute(`question-${questionId}`, "name")}${addAttribute(questionId, "data-question-id")} class="form-input"${addAttribute(isEmail ? "Enter your email" : isPhone ? "Enter your phone number" : `Enter ${title2.toLowerCase()}`, "placeholder")}${addAttribute(isRequired, "required")} data-astro-cid-jp4cvj5z>`} <div class="error-message" data-astro-cid-jp4cvj5z></div> </div>`;
  })} <button type="submit" class="submit-btn"${addAttribute(formId, "data-form-id")}${addAttribute(redirectUrl, "data-redirect")} data-astro-cid-jp4cvj5z> <span class="btn-text" data-astro-cid-jp4cvj5z>Submit</span> <span class="btn-loading" data-astro-cid-jp4cvj5z>Submitting...</span> </button> </form>`} </div> </div>  ${renderScript($$result, "/Users/joey/Desktop/ProgClubSite-1/src/components/DynamicForm.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/joey/Desktop/ProgClubSite-1/src/components/DynamicForm.astro", void 0);

export { $$DynamicForm as $ };
