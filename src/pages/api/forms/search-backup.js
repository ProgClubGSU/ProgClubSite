// Temporary simplified version for testing
export async function GET({ url }) {
  try {
    // Simple response to test if the endpoint works
    const testResponse = {
      success: true,
      message: "Search endpoint is working",
      timestamp: new Date().toISOString(),
      forms: [
        {
          id: "test-form-1",
          name: "Test Form 1", 
          webViewLink: "https://forms.google.com/test1"
        },
        {
          id: "test-form-2", 
          name: "Test Form 2",
          webViewLink: "https://forms.google.com/test2"
        }
      ]
    };
    
    console.log('Search backup endpoint called');
    
    return new Response(JSON.stringify(testResponse), {
      headers: { 'Content-Type': 'application/json' },
    });
    
  } catch (error) {
    console.error('Search backup error:', error);
    return new Response(JSON.stringify({ 
      error: 'Search backup failed',
      details: error.message 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}