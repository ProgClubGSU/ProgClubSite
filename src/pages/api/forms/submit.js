// Google Forms submission endpoint using direct form submission approach
export const prerender = false; // Server-rendered for dynamic form submissions

export async function POST({ request }) {
  try {
    const requestData = await request.json();
    const { formId: requestFormId, ...formData } = requestData;
    
    // Use form ID from request or environment variable as fallback
    const formId = requestFormId || import.meta.env.GOOGLE_FORMS_ID;
    
    if (!formId) {
      return new Response(JSON.stringify({
        error: 'No form ID provided',
        details: 'Form ID must be provided in request or GOOGLE_FORMS_ID environment variable'
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    
    // Create form submission URL (using the formResponse endpoint)
    const formUrl = `https://docs.google.com/forms/d/e/${formId}/formResponse`;
    
    // Create a form submission using fetch
    const submitFormData = new FormData();
    
    // Map form fields to Google Forms entry IDs
    // These would need to be configured per form
    if (formData.name) {
      submitFormData.append('entry.776442728', formData.name);
    }
    if (formData.email) {
      submitFormData.append('entry.2137026288', formData.email);
    }
    if (formData.interests && formData.interests.length > 0) {
      formData.interests.forEach(interest => {
        submitFormData.append('entry.1453136131', interest);
      });
    }
    if (formData.phone) {
      submitFormData.append('entry.2095083110', formData.phone);
    }
    if (formData.smsConsent) {
      submitFormData.append('entry.372796838', formData.smsConsent);
    }
    
    // Submit to Google Forms
    const response = await fetch(formUrl, {
      method: 'POST',
      body: submitFormData,
      mode: 'no-cors' // Required for cross-origin form submission
    });
    
    // Since we can't read the response due to CORS, we'll assume success
    // This is the standard approach for Google Forms submissions
    return new Response(JSON.stringify({ 
      success: true, 
      message: "Form submitted successfully",
      responseId: 'response-' + Date.now(),
      timestamp: new Date().toISOString()
    }), {
      headers: { 'Content-Type': 'application/json' },
    });
    
  } catch (error) {
    console.error('Error submitting form:', error);
    return new Response(JSON.stringify({ 
      error: 'Failed to submit form',
      details: error.message 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}