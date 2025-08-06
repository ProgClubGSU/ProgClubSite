export { renderers } from '../../../renderers.mjs';

// Forms search endpoint - returns configured forms
const prerender = false; // Server-rendered for dynamic queries

// Inline forms configuration to avoid TypeScript import issues
const FORMS = {
  'interest-signup': {
    id: 'interest-signup',
    name: 'Interest/Signup Form',
    description: 'Main form for new member signups and interest collection',
    formId: process.env.GOOGLE_FORMS_ID || 'your-default-form-id',
    status: 'active',
    category: 'signup'
  },
  'leetcode-attendance': {
    id: 'leetcode-attendance',
    name: 'Leetcode Workshop Attendance',
    description: 'Check-in for leetcode workshop events',
    formId: 'your-leetcode-attendance-form-id',
    status: 'active',
    category: 'attendance'
  },
  'workshop-feedback': {
    id: 'workshop-feedback',
    name: 'Workshop Feedback',
    description: 'Post-workshop feedback and evaluation',
    formId: 'your-workshop-feedback-form-id',
    status: 'active',
    category: 'feedback'
  }
};

async function GET({ url }) {
  try {
    const searchParams = new URL(url).searchParams;
    const category = searchParams.get('category');
    const status = searchParams.get('status') || 'active';
    
    // Filter forms based on query parameters
    let forms = Object.values(FORMS);
    
    if (category) {
      forms = forms.filter(form => form.category === category);
    }
    
    if (status) {
      forms = forms.filter(form => form.status === status);
    }
    
    // Transform to API response format
    const formsList = forms.map(form => ({
      id: form.id,
      name: form.name,
      description: form.description,
      category: form.category,
      status: form.status,
      webViewLink: `https://forms.google.com/d/${form.formId}/viewform`
    }));
    
    return new Response(JSON.stringify({
      success: true,
      message: "Forms retrieved successfully",
      timestamp: new Date().toISOString(),
      forms: formsList,
      total: formsList.length
    }), {
      headers: { 'Content-Type': 'application/json' },
    });
    
  } catch (error) {
    console.error('Search error:', error);
    return new Response(JSON.stringify({ 
      error: 'Search failed',
      details: error.message 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
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
