export async function GET() {
  const debugInfo = {
    timestamp: new Date().toISOString(),
    environment: import.meta.env.MODE,
    hasGoogleServiceAccountEmail: !!import.meta.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    hasGooglePrivateKey: !!import.meta.env.GOOGLE_PRIVATE_KEY,
    hasGoogleFormsId: !!import.meta.env.GOOGLE_FORMS_ID,
    googleFormsId: import.meta.env.GOOGLE_FORMS_ID || 'not-set',
    // Don't expose the actual credentials for security
    serviceAccountEmailPrefix: import.meta.env.GOOGLE_SERVICE_ACCOUNT_EMAIL ? 
      import.meta.env.GOOGLE_SERVICE_ACCOUNT_EMAIL.substring(0, 10) + '...' : 'not-set',
    privateKeyLength: import.meta.env.GOOGLE_PRIVATE_KEY ? 
      import.meta.env.GOOGLE_PRIVATE_KEY.length : 0
  };

  return new Response(JSON.stringify(debugInfo, null, 2), {
    headers: { 'Content-Type': 'application/json' },
  });
} 