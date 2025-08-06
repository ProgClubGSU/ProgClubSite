import { google } from 'googleapis';
export { renderers } from '../../../renderers.mjs';

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: "progsu-forms-service@progsu.iam.gserviceaccount.com",
    private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC3ntXewIeUnyMW\nJnIlhCuX+En/YuG9k5fZB2f1vtzAXOXeCVY3wnPxvvZzA7b6uCEyEQtzYVztgHmc\njSorLsjhZYIhRHUIcKVWJos6d+6zrUT8DrecpHBnrkx476s8PK25e7KXxTaK/lqg\n+JoED2S5AFyQNy5DLrGkqrUzYctjb15Ak5qaB4FpHNcqOr9OSXw4NRkZz6fVKDVP\n574wGyHY0Nckqykaf+CuKC4skvnvIkWWP5mzBFzP+f1/wANdHB3dXLq6iHbzULRl\n/wUF5/xjox4ekNJQheRgLhEOWkZkRluXxlpr1Q9Szf0SkkdTj8PmO3VhDZYaKH1K\nWUAtBoYrAgMBAAECggEATYAHys2+K9eDCp1NflIryCeuq9EDcG10INEEau+U4sgS\n6UVNk5lKMJWmFWNS/r1qnWQeTiOhAklAivf1/WXwuVmLtBjdwKMy1YrNJu9p24Jd\nZHmdu8qX+trRQhX+Ux1VQb1Y4sAFRmMWw2xKLT6GB6OEbgYsS4TQy6yVcEttedjX\nau87QSpZQhsf09iZuBbLUJ+bUIqEa+wOosD9CLaeKvTqt5KGHBKse3/wltouX3Wr\nA2DtkynDi8R8XD9DXNQ2ycQpqZi+aWm6tA2ptKJFtTljKmOvlp9+VnW3P1o+D1pf\nixjYK/xhvxUExzLQTJUVO8W5DZfYVxlggwFdIuakaQKBgQDhP1OzPlOot98C34Gu\nP0B9bdB/QrxcS0lNUfZrzE2XmcPiqOkoxKG8p1cFsGRz/Q5LcqYpiabWF3Jne8Om\n63THUsk7ANx2R8d/Rmn1XnFwdMIxwf9gH/g7KrEk3q0zibb8J26JrrUPVg9dpr2B\n9HyfYelkU+94sucKMf5FfYcfjQKBgQDQsJiqcq+mal0oYdsxiX3Hero6WLz5krIK\n4nyg8GNea0KxKKDFFtgEoeNq0SJ4o/A/sHNKMnWz6Fl1VsZAU6J5ODn45IvOAdrt\nYZ807h/fCZ/ZMl39LVA6LaFMDqQJe3Y8yLuqAjByykVBUxZYviy3NWBpz+gYNjwr\nK/Vb6kcSlwKBgB0+uKJUHE6SmPzpgg/anIfsgx6Szpv5FmpYkvMKEqT1TO6X2bX2\nWb2ByJWvgktg9sMq/pH0ElpHrw3qjsuUVJQwlnn3sagVx7wpq0Y1Xeso7bHCK2MS\no4sjDt7nnntLjRuODxcHPPDhzprtNDu0P539+2yQTU5RhBfZx9bD5pBdAoGAWjIJ\nOZnpys4rxzlMCEP5Zc7oUDFsM52wb73lyZU8DWHkaDc8DRLLeG0TomYTNPr96jj0\nCzx13LTufSVs9/5tuWCQxb7ZocbxfSl1KuZERhydxrzbHIKKKyrvjLTDNwnyV2EW\nourhT6uWdR5ZCS/gmaprKjBeiqBeLvaHzBscbq8CgYB9ok95BYhLlJnl3lHZWZ43\nhZ++k71Zq/H0426q5fO9rNzCEKqr4T8+rwVaBefpNpkWYdMY8JwmrPfGPu92c4+0\nGkh2ZvamNRPPCFYD9tdzLX+h9Cv1h23KZbIpLjTsm47s3Bm7SNBJPl9Hzytv0UZH\nYJ/Zw+3dfj/JBQ/AunTRsw==\n-----END PRIVATE KEY-----\n".replace(/\\n/g, "\n")
  },
  scopes: [
    "https://www.googleapis.com/auth/forms.responses",
    "https://www.googleapis.com/auth/drive.readonly"
  ]
});
async function POST({ request }) {
  try {
    const requestData = await request.json();
    const { formId: requestFormId, ...formData } = requestData;
    const formId = requestFormId || "1lFW-AA8zqo2WmOT6pdZ7iXupxlL8AS8tnzPvhmUjfSI";
    const forms = google.forms({ version: "v1", auth });
    const responses = [];
    if (formData.name) {
      responses.push({
        questionId: "2e479368",
        textAnswers: {
          answers: [{ value: formData.name }]
        }
      });
    }
    if (formData.email) {
      responses.push({
        questionId: "7f606ef0",
        textAnswers: {
          answers: [{ value: formData.email }]
        }
      });
    }
    if (formData.interests && formData.interests.length > 0) {
      responses.push({
        questionId: "569d1903",
        textAnswers: {
          answers: formData.interests.map((interest) => ({ value: interest }))
        }
      });
    }
    if (formData.phone) {
      responses.push({
        questionId: "7ce06e66",
        textAnswers: {
          answers: [{ value: formData.phone }]
        }
      });
    }
    if (formData.smsConsent) {
      responses.push({
        questionId: "16386da6",
        textAnswers: {
          answers: [{ value: formData.smsConsent }]
        }
      });
    }
    const formUrl = `https://docs.google.com/forms/d/e/1FAIpQLSdIuhYbn3uP0_3k9bAF7bhtqMaQTkGQLD9-lmY6NKgrumGqXw/formResponse`;
    const submitFormData = new FormData();
    if (formData.name) {
      submitFormData.append("entry.776442728", formData.name);
    }
    if (formData.email) {
      submitFormData.append("entry.2137026288", formData.email);
    }
    if (formData.interests && formData.interests.length > 0) {
      formData.interests.forEach((interest) => {
        submitFormData.append("entry.1453136131", interest);
      });
    }
    if (formData.phone) {
      submitFormData.append("entry.2095083110", formData.phone);
    }
    if (formData.smsConsent) {
      submitFormData.append("entry.372796838", formData.smsConsent);
    }
    const response = await fetch(formUrl, {
      method: "POST",
      body: submitFormData,
      mode: "no-cors"
      // Required for cross-origin form submission
    });
    const mockResponse = {
      data: {
        responseId: "mock-response-" + Date.now()
      }
    };
    return new Response(JSON.stringify({
      success: true,
      responseId: mockResponse.data.responseId
    }), {
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Error submitting form:", error);
    return new Response(JSON.stringify({
      error: "Failed to submit form",
      details: error.message
    }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
