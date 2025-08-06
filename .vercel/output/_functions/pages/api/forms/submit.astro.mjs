export { renderers } from '../../../renderers.mjs';

const prerender = false;
async function POST({ request }) {
  try {
    const requestData = await request.json();
    const { formId: requestFormId, ...formData } = requestData;
    const formId = requestFormId || "1lFW-AA8zqo2WmOT6pdZ7iXupxlL8AS8tnzPvhmUjfSI";
    if (!formId) ;
    const formUrl = `https://docs.google.com/forms/d/e/${formId}/formResponse`;
    const submitFormData = new FormData();
    if (formData.name) {
      submitFormData.append("entry.776442728", formData.name);
    }
    if (formData.email) {
      submitFormData.append("entry.2137026288", formData.email);
    }
    if (formData.interests && formData.interests.length > 0) {
      formData.interests.forEach((interest) => {
        submitFormData.append("entry.1453136131", interest);
      });
    }
    if (formData.phone) {
      submitFormData.append("entry.2095083110", formData.phone);
    }
    if (formData.smsConsent) {
      submitFormData.append("entry.372796838", formData.smsConsent);
    }
    const response = await fetch(formUrl, {
      method: "POST",
      body: submitFormData,
      mode: "no-cors"
      // Required for cross-origin form submission
    });
    return new Response(JSON.stringify({
      success: true,
      message: "Form submitted successfully",
      responseId: "response-" + Date.now(),
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    }), {
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Error submitting form:", error);
    return new Response(JSON.stringify({
      error: "Failed to submit form",
      details: error.message
    }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
