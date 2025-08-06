import { google } from 'googleapis';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: "progsu-forms-service@progsu.iam.gserviceaccount.com",
    private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC3ntXewIeUnyMW\nJnIlhCuX+En/YuG9k5fZB2f1vtzAXOXeCVY3wnPxvvZzA7b6uCEyEQtzYVztgHmc\njSorLsjhZYIhRHUIcKVWJos6d+6zrUT8DrecpHBnrkx476s8PK25e7KXxTaK/lqg\n+JoED2S5AFyQNy5DLrGkqrUzYctjb15Ak5qaB4FpHNcqOr9OSXw4NRkZz6fVKDVP\n574wGyHY0Nckqykaf+CuKC4skvnvIkWWP5mzBFzP+f1/wANdHB3dXLq6iHbzULRl\n/wUF5/xjox4ekNJQheRgLhEOWkZkRluXxlpr1Q9Szf0SkkdTj8PmO3VhDZYaKH1K\nWUAtBoYrAgMBAAECggEATYAHys2+K9eDCp1NflIryCeuq9EDcG10INEEau+U4sgS\n6UVNk5lKMJWmFWNS/r1qnWQeTiOhAklAivf1/WXwuVmLtBjdwKMy1YrNJu9p24Jd\nZHmdu8qX+trRQhX+Ux1VQb1Y4sAFRmMWw2xKLT6GB6OEbgYsS4TQy6yVcEttedjX\nau87QSpZQhsf09iZuBbLUJ+bUIqEa+wOosD9CLaeKvTqt5KGHBKse3/wltouX3Wr\nA2DtkynDi8R8XD9DXNQ2ycQpqZi+aWm6tA2ptKJFtTljKmOvlp9+VnW3P1o+D1pf\nixjYK/xhvxUExzLQTJUVO8W5DZfYVxlggwFdIuakaQKBgQDhP1OzPlOot98C34Gu\nP0B9bdB/QrxcS0lNUfZrzE2XmcPiqOkoxKG8p1cFsGRz/Q5LcqYpiabWF3Jne8Om\n63THUsk7ANx2R8d/Rmn1XnFwdMIxwf9gH/g7KrEk3q0zibb8J26JrrUPVg9dpr2B\n9HyfYelkU+94sucKMf5FfYcfjQKBgQDQsJiqcq+mal0oYdsxiX3Hero6WLz5krIK\n4nyg8GNea0KxKKDFFtgEoeNq0SJ4o/A/sHNKMnWz6Fl1VsZAU6J5ODn45IvOAdrt\nYZ807h/fCZ/ZMl39LVA6LaFMDqQJe3Y8yLuqAjByykVBUxZYviy3NWBpz+gYNjwr\nK/Vb6kcSlwKBgB0+uKJUHE6SmPzpgg/anIfsgx6Szpv5FmpYkvMKEqT1TO6X2bX2\nWb2ByJWvgktg9sMq/pH0ElpHrw3qjsuUVJQwlnn3sagVx7wpq0Y1Xeso7bHCK2MS\no4sjDt7nnntLjRuODxcHPPDhzprtNDu0P539+2yQTU5RhBfZx9bD5pBdAoGAWjIJ\nOZnpys4rxzlMCEP5Zc7oUDFsM52wb73lyZU8DWHkaDc8DRLLeG0TomYTNPr96jj0\nCzx13LTufSVs9/5tuWCQxb7ZocbxfSl1KuZERhydxrzbHIKKKyrvjLTDNwnyV2EW\nourhT6uWdR5ZCS/gmaprKjBeiqBeLvaHzBscbq8CgYB9ok95BYhLlJnl3lHZWZ43\nhZ++k71Zq/H0426q5fO9rNzCEKqr4T8+rwVaBefpNpkWYdMY8JwmrPfGPu92c4+0\nGkh2ZvamNRPPCFYD9tdzLX+h9Cv1h23KZbIpLjTsm47s3Bm7SNBJPl9Hzytv0UZH\nYJ/Zw+3dfj/JBQ/AunTRsw==\n-----END PRIVATE KEY-----\n".replace(/\\n/g, "\n")
  },
  scopes: [
    "https://www.googleapis.com/auth/forms.body.readonly",
    "https://www.googleapis.com/auth/drive.readonly"
  ]
});
async function GET({ url }) {
  try {
    const drive = google.drive({ version: "v3", auth });
    const searchResponse = await drive.files.list({
      q: "mimeType='application/vnd.google-apps.form'",
      fields: "files(id,name,webViewLink)",
      pageSize: 10
    });
    console.log("Found forms:", searchResponse.data.files);
    return new Response(JSON.stringify({
      success: true,
      forms: searchResponse.data.files
    }), {
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Search error:", error);
    return new Response(JSON.stringify({
      error: "Search failed",
      details: error.message
    }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
