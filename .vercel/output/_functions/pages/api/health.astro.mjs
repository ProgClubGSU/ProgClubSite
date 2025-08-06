export { renderers } from '../../renderers.mjs';

// Simple health check endpoint
async function GET() {
  return new Response(JSON.stringify({
    status: "healthy",
    timestamp: new Date().toISOString(),
    message: "Serverless functions are working properly"
  }), {
    headers: { 
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    },
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
