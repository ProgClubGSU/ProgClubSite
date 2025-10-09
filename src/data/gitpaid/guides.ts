/**
 * gitPAID Guides Configuration
 *
 * These are the main in-depth guides written by progsu.
 * Each guide is a markdown file in src/content/gitpaid/
 *
 * To add a new guide:
 * 1. Create a new .md file in src/content/gitpaid/
 * 2. Add an entry to the appropriate category array below
 * 3. Set the URL to match your markdown file slug: /gitpaid/your-file-name
 */

export interface Guide {
  title: string;
  description: string;
  url: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  impact: 'high' | 'multiplier' | 'essential';
}

export const gettingInterviewGuides: Guide[] = [
  {
    title: "Resume Guide",
    description: "Step-by-step guide to writing a technical resume that gets interviews",
    url: "/gitpaid/resume-guide",
    difficulty: "beginner",
    impact: "high"
  },
  {
    title: "LinkedIn Optimization",
    description: "Optimize your LinkedIn profile for tech recruiting and networking",
    url: "#", // Replace with your actual link when ready
    difficulty: "beginner",
    impact: "high"
  },
  {
    title: "Getting Referrals",
    description: "How to find and request referrals for tech positions",
    url: "/gitpaid/referrals-guide",
    difficulty: "intermediate",
    impact: "multiplier"
  }
];

export const passingInterviewGuides: Guide[] = [
  {
    title: "DSA & LeetCode Strategy",
    description: "Efficient approach to data structures, algorithms, and coding interviews",
    url: "#", // Replace with your actual link when ready
    difficulty: "intermediate",
    impact: "essential"
  }
];
