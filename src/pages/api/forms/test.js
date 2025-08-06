import { google } from 'googleapis';

export async function GET() {
  try {
    // Check if environment variables are available
    if (!import.meta.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || !import.meta.env.GOOGLE_PRIVATE_KEY) {
      return new Response(JSON.stringify({ 
        success: false,
        error: 'Missing environment variables',
        details: 'Google service account credentials not configured'
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: import.meta.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: import.meta.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      },
      scopes: [
        'https://www.googleapis.com/auth/forms.body.readonly',
        'https://www.googleapis.com/auth/drive.readonly'
      ],
    });

    const forms = google.forms({ version: 'v1', auth });
    
    // Test with a simple API call
    const formId = import.meta.env.GOOGLE_FORMS_ID;
    if (!formId) {
      return new Response(JSON.stringify({ 
        success: false,
        error: 'No form ID configured'
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const response = await forms.forms.get({
      formId: formId,
    });

    return new Response(JSON.stringify({ 
      success: true,
      formTitle: response.data.info?.title,
      formDescription: response.data.info?.description,
      questionCount: response.data.items?.length || 0
    }), {
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Google Forms API test error:', error);
    return new Response(JSON.stringify({ 
      success: false,
      error: 'API test failed',
      details: error.message,
      code: error.code
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
} 