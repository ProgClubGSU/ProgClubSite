// Simplified test endpoint
export async function GET({ url }) {
  try {
    const testData = {
      success: true,
      message: "Test endpoint is working",
      timestamp: new Date().toISOString(),
      nodeVersion: process.version,
      platform: process.platform
    };
    
    console.log('Test endpoint called successfully');
    
    return new Response(JSON.stringify(testData), {
      headers: { 'Content-Type': 'application/json' },
    });
    
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