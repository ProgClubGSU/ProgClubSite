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
}

export interface ResourceCategory {
  id: string;
  title: string;
  icon: string;
  resources: Resource[];
}

const jobBoards: Resource[] = [
  {
    title: "LinkedIn Jobs",
    description: "The most popular job board for tech positions with robust filtering and networking features",
    url: "https://www.linkedin.com/jobs/"
  },
  {
    title: "Indeed",
    description: "Comprehensive job search engine with millions of listings across all industries",
    url: "https://www.indeed.com/"
  },
  {
    title: "Levels.fyi Internships",
    description: "Curated list of tech internships with salary data and company reviews",
    url: "https://www.levels.fyi/internships/"
  }
];

const interviewPrep: Resource[] = [
  {
    title: "LeetCode",
    description: "Practice coding interview questions with a massive database of problems",
    url: "https://leetcode.com/"
  },
  {
    title: "NeetCode",
    description: "Curated list of 150 essential LeetCode problems with video explanations",
    url: "https://neetcode.io/"
  },
  {
    title: "Tech Interview Handbook",
    description: "Free comprehensive guide covering algorithms, system design, and behavioral interviews",
    url: "https://www.techinterviewhandbook.org/"
  }
];

const resumePortfolio: Resource[] = [
  {
    title: "Overleaf",
    description: "LaTeX editor for creating professional, ATS-friendly resumes",
    url: "https://www.overleaf.com/"
  },
  {
    title: "GitHub",
    description: "Showcase your projects and contributions with a professional developer portfolio",
    url: "https://github.com/"
  }
];

const learningPlatforms: Resource[] = [
  {
    title: "NeetCode YouTube",
    description: "Clear video explanations for coding interview problems and DSA concepts",
    url: "https://www.youtube.com/@NeetCode"
  },
  {
    title: "TechLead",
    description: "Career advice and interview tips from an ex-Google/ex-Facebook tech lead",
    url: "https://www.youtube.com/@TechInterviewPro"
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
