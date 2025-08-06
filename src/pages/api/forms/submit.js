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
    // For now, we'll use a simplified approach that logs the data
    // In production, you would map these to actual Google Forms entry IDs
    
    // Validate required fields
    if (!formData.name || !formData.email) {
      return new Response(JSON.stringify({
        success: false,
        error: 'Missing required fields: name and email are required'
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    
    // Log the form data for debugging
    console.log('Form submission data:', {
      formId,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      interests: formData.interests
    });
    
    // For development/testing, we'll just return success
    // In production, you would submit to Google Forms here
    return new Response(JSON.stringify({ 
      success: true, 
      message: "Form submitted successfully (development mode)",
      submittedData: formData,
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