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
    const drive = google.drive({ version: 'v3', auth });
    
    // Search for Google Forms
    const searchResponse = await drive.files.list({
      q: "mimeType='application/vnd.google-apps.form'",
      fields: 'files(id,name,webViewLink)',
      pageSize: 10
    });
    
    console.log('Found forms:', searchResponse.data.files);
    
    return new Response(JSON.stringify({
      success: true,
      forms: searchResponse.data.files
    }), {
      headers: { 'Content-Type': 'application/json' },
    });
    
  } catch (error) {
    console.error('Search error:', error);
    return new Response(JSON.stringify({ 
      error: 'Search failed',
      details: error.message 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
} 