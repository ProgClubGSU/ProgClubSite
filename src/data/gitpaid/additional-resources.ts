/**
 * Additional Resources Configuration
 *
 * External resources organized by category.
 * These appear in the "Additional Resources" section at the bottom of /gitpaid
 *
 * To add a new resource:
 * 1. Find the appropriate category array below (or create a new one)
 * 2. Add a new object with title, description, and url
 * 3. Make sure url starts with https:// for external links
 *
 * To add a new category:
 * 1. Create a new ResourceCategory object
 * 2. Add it to the additionalResources array at the bottom
 */

export interface Resource {
  title: string;
  description: string;
  url: string;
  tier: 'S+' | 'S' | 'A' | 'B' | 'C';
}

export interface ResourceCategory {
  id: string;
  title: string;
  icon: string;
  resources: Resource[];
}

const jobBoards: Resource[] = [
  {
    title: "zero2sudo",
    description: "Instagram insider with rapid internship updates, company-specific tips, and live application tracking",
    url: "https://www.instagram.com/zero2sudo/?hl=en",
    tier: "S+"
  },
  {
    title: "LinkedIn Jobs",
    description: "The most popular job board for tech positions with robust filtering and networking features",
    url: "https://www.linkedin.com/jobs/",
    tier: "S"
  },
  {
    title: "Indeed",
    description: "Comprehensive job search engine with millions of listings across all industries",
    url: "https://www.indeed.com/",
    tier: "C"
  },
  {
    title: "Levels.fyi Internships",
    description: "Curated list of tech internships with salary data and company reviews",
    url: "https://www.levels.fyi/internships/",
    tier: "C"
  },
  {
    title: "Wellfound (formerly AngelList)",
    description: "Startup job board connecting talent with early-stage companies and venture-backed startups",
    url: "https://wellfound.com/",
    tier: "C"
  },
  {
    title: "Startup Search / Board",
    description: "Discover startup opportunities and explore jobs at growing companies",
    url: "https://www.startupboard.io/",
    tier: "C"
  },
  {
    title: "Handshake",
    description: "College recruiting platform + has networking/recruiter events",
    url: "https://www.joinhandshake.com/",
    tier: "A"
  },
  {
    title: "Y Combinator Job Board",
    description: "Work at YC-backed startups and high-growth companies",
    url: "https://www.ycombinator.com/jobs",
    tier: "A"
  },
  {
    title: "SubscriptionIntern",
    description: "Gauranteed personal internship, usually for startups (often unpaid)",
    url: "https://subscriptionintern.com/",
    tier: "B"
  },
  {
    title: "pittcsc x simplify job repo",
    description: "OG github repo for tech roles, but updated very slowly (few days late)",
    url: "https://github.com/SimplifyJobs/Summer2026-Internships",
    tier: "A"
  },
  {
    title: "vansh x ouckah job repo",
    description: "frequently and quickly updated list of tech internships!",
    url: "https://github.com/vanshb03/Summer2026-Internships",
    tier: "S"
  }
];

const interviewPrep: Resource[] = [
  {
    title: "LeetCode",
    description: "Practice coding interview questions with a massive database of problems",
    url: "https://leetcode.com/",
    tier: "S"
  },
  {
    title: "NeetCode",
    description: "Curated list of 150 essential LeetCode problems with video explanations",
    url: "https://neetcode.io/",
    tier: "S+"
  },
  {
    title: "GeeksforGeeks",
    description: "Comprehensive tutorials, practice problems, and interview preparation resources",
    url: "https://www.geeksforgeeks.org/",
    tier: "A"
  },
  {
    title: "Tech Interview Handbook",
    description: "Free comprehensive guide covering algorithms, system design, and behavioral interviews",
    url: "https://www.techinterviewhandbook.org/",
    tier: "A"
  }
];

const resumePortfolio: Resource[] = [
  {
    title: "Jake's Resume",
    description: "Most popular LaTeX resume template in tech, clean single-page format",
    url: "https://www.overleaf.com/latex/templates/jakes-resume/syzfjbzwjncs",
    tier: "S+"
  },
  {
    title: "GitHub",
    description: "Showcase your projects and contributions with a professional developer portfolio",
    url: "https://github.com/",
    tier: "S"
  },
  {
    title: "GitHub Pages",
    description: "Free hosting for portfolio sites directly from your GitHub repositories",
    url: "https://pages.github.com/",
    tier: "A"
  },
  {
    title: "Vercel",
    description: "Deploy portfolio sites for free with automatic deployments from Git",
    url: "https://vercel.com/",
    tier: "S+"
  },
  {
    title: "Netlify",
    description: "Free hosting platform for static sites and portfolios with continuous deployment",
    url: "https://www.netlify.com/",
    tier: "A"
  }
];

const learningPlatforms: Resource[] = [
  {
    title: "NeetCode YouTube",
    description: "Clear video explanations for coding interview problems and DSA concepts",
    url: "https://www.youtube.com/@NeetCode",
    tier: "S+"
  },
  {
    title: "TheOdinProject",
    description: "Free + Guided full stack web development curriculum",
    url: "https://www.theodinproject.com/",
    tier: "S"
  }
];

// Export all categories
export const additionalResources: ResourceCategory[] = [
  {
    id: "job-boards",
    title: "Job Boards",
    icon: "",
    resources: jobBoards
  },
  {
    id: "interview-prep",
    title: "Interview Preparation",
    icon: "",
    resources: interviewPrep
  },
  {
    id: "resume-portfolio",
    title: "Resume & Portfolio Tools",
    icon: "",
    resources: resumePortfolio
  },
  {
    id: "learning-platforms",
    title: "Learning Platforms",
    icon: "",
    resources: learningPlatforms
  }
];
