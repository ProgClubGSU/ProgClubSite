// Simple debug endpoint to test serverless function basics
export async function GET({ url }) {
  try {
    const testData = {
      success: true,
      timestamp: new Date().toISOString(),
      nodeVersion: process.version,
      environment: import.meta.env.NODE_ENV || 'not-set',
      hasGoogleEnv: !!(import.meta.env.GOOGLE_SERVICE_ACCOUNT_EMAIL),
      platform: process.platform,
      arch: process.arch
    };
    
    console.log('Simple debug test successful:', testData);
    
    return new Response(JSON.stringify(testData), {
      headers: { 
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache'
      },
    });
    
  } catch (error) {
    console.error('Simple debug error:', error);
    return new Response(JSON.stringify({ 
      error: 'Debug failed',
      message: error.message,
      stack: error.stack
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}