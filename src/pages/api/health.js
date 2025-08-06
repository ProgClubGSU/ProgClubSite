// Simple health check endpoint
export async function GET() {
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