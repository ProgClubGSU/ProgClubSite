// Central form configuration
// Add your Google Form IDs here to keep them organized

export interface FormConfig {
  id: string;
  name: string;
  description: string;
  formId: string;
  status: 'active' | 'draft' | 'archived';
  category: 'signup' | 'attendance' | 'feedback' | 'survey' | 'other';
}

export const FORMS: Record<string, FormConfig> = {
  // Main signup forms
  'interest-signup': {
    id: 'interest-signup',
    name: 'Interest/Signup Form',
    description: 'Main form for new member signups and interest collection',
    formId: process.env.GOOGLE_FORMS_ID || 'your-default-form-id',
    status: 'active',
    category: 'signup'
  },

  // Event attendance forms
  'leetcode-attendance': {
    id: 'leetcode-attendance',
    name: 'Leetcode Workshop Attendance',
    description: 'Check-in for leetcode workshop events',
    formId: 'your-leetcode-attendance-form-id',
    status: 'active',
    category: 'attendance'
  },
  
  'react-attendance': {
    id: 'react-attendance',
    name: 'React Workshop Attendance',
    description: 'Check-in for React workshop events',
    formId: 'your-react-attendance-form-id',
    status: 'draft',
    category: 'attendance'
  },
  
  'general-event-attendance': {
    id: 'general-event-attendance',
    name: 'General Event Attendance',
    description: 'Check-in for general club events',
    formId: 'your-general-attendance-form-id',
    status: 'active',
    category: 'attendance'
  },

  // Feedback forms
  'workshop-feedback': {
    id: 'workshop-feedback',
    name: 'Workshop Feedback',
    description: 'Post-workshop feedback and evaluation',
    formId: 'your-workshop-feedback-form-id',
    status: 'active',
    category: 'feedback'
  },
  
  'event-feedback': {
    id: 'event-feedback',
    name: 'Event Feedback',
    description: 'General event feedback and suggestions',
    formId: 'your-event-feedback-form-id',
    status: 'active',
    category: 'feedback'
  },
  
  'club-feedback': {
    id: 'club-feedback',
    name: 'Club Feedback',
    description: 'Overall club experience and improvement suggestions',
    formId: 'your-club-feedback-form-id',
    status: 'active',
    category: 'feedback'
  },

  // Surveys
  'skills-survey': {
    id: 'skills-survey',
    name: 'Programming Skills Survey',
    description: 'Annual survey to understand member skill levels',
    formId: 'your-skills-survey-form-id',
    status: 'draft',
    category: 'survey'
  },
  
  'career-interests': {
    id: 'career-interests',
    name: 'Career Interests Survey',
    description: 'Understanding member career goals and interests',
    formId: 'your-career-survey-form-id',
    status: 'draft',
    category: 'survey'
  }
};

// Helper functions
export function getForm(formId: string): FormConfig | null {
  return FORMS[formId] || null;
}

export function getFormsByCategory(category: FormConfig['category']): FormConfig[] {
  return Object.values(FORMS).filter(form => form.category === category);
}

export function getActiveFormIds(): string[] {
  return Object.values(FORMS)
    .filter(form => form.status === 'active')
    .map(form => form.id);
}

export function getFormIdByKey(key: string): string | null {
  const form = FORMS[key];
  return form ? form.formId : null;
}

// URL generators for different form types
export function getAttendanceUrl(eventType: string): string {
  return `/events/attendance?type=${eventType}`;
}

export function getFeedbackUrl(feedbackType: string): string {
  return `/forms/feedback?event=${feedbackType}`;
}

export function getSurveyUrl(surveyType: string): string {
  return `/surveys/${surveyType}`;
}