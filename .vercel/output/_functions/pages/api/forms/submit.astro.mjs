export { renderers } from '../../../renderers.mjs';

// Simplified submit endpoint for testing
async function POST({ request }) {
  try {
    const requestData = await request.json();
    
    // Log the submission for debugging
    console.log('Form submission received:', requestData);
    
    // Return success response
    return new Response(JSON.stringify({
      success: true,
      message: "Form submission received successfully",
      submittedData: requestData,
      timestamp: new Date().toISOString()
    }), {
      headers: { 'Content-Type': 'application/json' },
    });
    
  } catch (error) {
    console.error('Submit error:', error);
    return new Response(JSON.stringify({ 
      error: 'Submission failed',
      details: error.message 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
