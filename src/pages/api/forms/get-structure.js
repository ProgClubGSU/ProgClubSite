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
    const formId = import.meta.env.GOOGLE_FORMS_ID;
    const forms = google.forms({ version: 'v1', auth });
    
    const response = await forms.forms.get({
      formId: formId,
    });
    
    return new Response(JSON.stringify(response.data), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching form structure:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch form structure', details: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
} 