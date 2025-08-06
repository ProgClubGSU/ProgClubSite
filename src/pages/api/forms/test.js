import { google } from 'googleapis';

// Force server-side rendering for this API route in hybrid mode
export const prerender = false;

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
    let driveData = null;
    
    // Test Drive API first
    const drive = google.drive({ version: 'v3', auth });
    
    try {
      const driveResponse = await drive.files.get({
        fileId: formId,
        fields: 'id,name,mimeType'
      });
      
      driveData = driveResponse.data;
      console.log('Drive API response:', driveData);
    } catch (driveError) {
      console.log('Drive API error:', driveError.message);
    }
    
    // Test Forms API
    const forms = google.forms({ version: 'v1', auth });
    
    try {
      const formsResponse = await forms.forms.get({
        formId: formId,
      });
      
      console.log('Forms API response:', formsResponse.data);
      
      return new Response(JSON.stringify({
        success: true,
        formData: formsResponse.data,
        driveData: driveData
      }), {
        headers: { 'Content-Type': 'application/json' },
      });
      
    } catch (formsError) {
      console.log('Forms API error:', formsError.message);
      
      return new Response(JSON.stringify({
        error: 'Forms API failed',
        formsError: formsError.message,
        driveData: driveData
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    
  } catch (error) {
    console.error('Test error:', error);
    return new Response(JSON.stringify({ 
      error: 'Test failed',
      details: error.message 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
} 