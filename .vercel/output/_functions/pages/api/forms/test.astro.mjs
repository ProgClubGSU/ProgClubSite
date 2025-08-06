export { renderers } from '../../../renderers.mjs';

// Simplified test endpoint
async function GET({ url }) {
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

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
