// Google Forms structure fetching endpoint for dynamic form rendering
export const prerender = false; // Server-rendered for dynamic form structure

export async function GET({ url }) {
  try {
    // Get formId from query params
    const urlParams = new URL(url).searchParams;
    const formId = urlParams.get('formId') || process.env.GOOGLE_FORMS_ID;
    
    if (!formId) {
      return new Response(JSON.stringify({
        error: 'No form ID provided',
        details: 'Form ID must be provided in query params or GOOGLE_FORMS_ID environment variable'
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

        // Mock form structure for development/testing
    // In production, you would use the Google Forms API to fetch real structure
    const mockFormStructure = {
      formId: formId,
      info: {
        title: "Contact Form",
        description: "Please fill out this form to get in touch with us."
      },
      items: [
        {
          itemId: "name_field",
          title: "Full Name",
          description: "",
          questionItem: {
            question: {
              questionId: "name_field",
              required: true,
              textQuestion: {
                type: "SHORT_ANSWER"
              }
            }
          }
        },
        {
          itemId: "email_field", 
          title: "Email Address",
          description: "",
          questionItem: {
            question: {
              questionId: "email_field",
              required: true,
              textQuestion: {
                type: "SHORT_ANSWER"
              }
            }
          }
        },
        {
          itemId: "interests_field",
          title: "What are you interested in?",
          description: "Select all that apply",
          questionItem: {
            question: {
              questionId: "interests_field",
              required: false,
              choiceQuestion: {
                type: "CHECKBOX",
                options: [
                  { value: "Workshops" },
                  { value: "Networking Events" },
                  { value: "Tech Talks" },
                  { value: "Coding Competitions" },
                  { value: "Career Development" }
                ]
              }
            }
          }
        },
        {
          itemId: "phone_field",
          title: "Phone Number", 
          description: "Optional - for important updates",
          questionItem: {
            question: {
              questionId: "phone_field",
              required: false,
              textQuestion: {
                type: "SHORT_ANSWER"
              }
            }
          }
        }
      ]
    };
    
    // TODO: Replace with actual Google Forms API call when you need real form structure
    // For now, return the mock structure for development
    console.log('Returning mock form structure for formId:', formId);
    
    return new Response(JSON.stringify(mockFormStructure), {
      headers: { 'Content-Type': 'application/json' },
    });
    
  } catch (error) {
    console.error('Error fetching form structure:', error);
    return new Response(JSON.stringify({ 
      error: 'Failed to fetch form structure', 
      details: error.message 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}