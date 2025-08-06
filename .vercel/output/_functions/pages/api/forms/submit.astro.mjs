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
    if (!formData.name || !formData.email) {
      return new Response(JSON.stringify({
        success: false,
        error: "Missing required fields: name and email are required"
      }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    console.log("Form submission data:", {
      formId,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      interests: formData.interests
    });
    return new Response(JSON.stringify({
      success: true,
      message: "Form submitted successfully (development mode)",
      submittedData: formData,
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
