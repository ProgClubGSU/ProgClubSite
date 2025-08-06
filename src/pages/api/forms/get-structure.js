import { google } from 'googleapis';

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

export async function GET({ url }) {
  try {
    // Check if environment variables are available
    if (!import.meta.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || !import.meta.env.GOOGLE_PRIVATE_KEY) {
      console.error('Missing Google service account credentials');
      return new Response(JSON.stringify({ 
        error: 'Service configuration error',
        details: 'Google service account credentials not configured'
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Get formId from query params or use default
    const urlParams = new URL(url).searchParams;
    const formId = urlParams.get('formId') || import.meta.env.GOOGLE_FORMS_ID;
    
    if (!formId) {
      return new Response(JSON.stringify({ 
        error: 'Form ID not provided',
        details: 'No form ID specified in query params or environment'
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const forms = google.forms({ version: 'v1', auth });
    
    const response = await forms.forms.get({
      formId: formId,
    });
    
    return new Response(JSON.stringify(response.data), {
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