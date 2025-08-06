export { renderers } from '../../renderers.mjs';

async function GET({ url }) {
  try {
    const testData = {
      success: true,
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      nodeVersion: process.version,
      environment: process.env.NODE_ENV || "not-set",
      hasGoogleEnv: true,
      platform: process.platform,
      arch: process.arch
    };
    console.log("Simple debug test successful:", testData);
    return new Response(JSON.stringify(testData), {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache"
      }
    });
  } catch (error) {
    console.error("Simple debug error:", error);
    return new Response(JSON.stringify({
      error: "Debug failed",
      message: error.message,
      stack: error.stack
    }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
