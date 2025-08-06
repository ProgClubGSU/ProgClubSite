import { google } from 'googleapis';

// Force server-side rendering for this API route in hybrid mode
export const prerender = false;

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: import.meta.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: import.meta.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  },
  scopes: [
    'https://www.googleapis.com/auth/forms.responses',
    'https://www.googleapis.com/auth/drive.readonly'
  ],
});

export async function GET({ url }) {
  try {
    const forms = google.forms({ version: 'v1', auth });
    
    // Check available methods on responses
    console.log('Available methods on forms.forms.responses:', Object.keys(forms.forms.responses));
    
    // Check if there's a create method or similar
    const responseMethods = Object.keys(forms.forms.responses);
    console.log('Response methods:', responseMethods);
    
    return new Response(JSON.stringify({
      success: true,
      responseMethods: responseMethods
    }), {
      headers: { 'Content-Type': 'application/json' },
    });
    
  } catch (error) {
    console.error('Debug error:', error);
    return new Response(JSON.stringify({ 
      error: 'Debug failed',
      details: error.message 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
} 