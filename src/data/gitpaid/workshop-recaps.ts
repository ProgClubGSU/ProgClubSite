/**
 * gitPAID Workshop Recaps
 *
 * Data for past gitPAID workshop events.
 * Each event includes details, materials, and resources shared during the workshop.
 */

export interface WorkshopMaterial {
  title: string;
  description: string;
  url: string;
  type: 'pdf' | 'link' | 'slides';
}

export interface WorkshopEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  hosts: string[];
  description: string;
  topics: string[];
  flyer?: string;
  recapPhotos?: { src: string; alt: string }[];
  materials: WorkshopMaterial[];
  practiceProblems: {
    title: string;
    url: string;
    difficulty: 'Easy' | 'Medium' | 'Hard';
  }[];
}

export const workshopRecaps: WorkshopEvent[] = [
  {
    id: "crack-the-code-feb-2026",
    title: "Crack the Code: LeetCode & DSA Workshop",
    date: "February 25, 2026",
    time: "5:30 - 7:30 PM",
    location: "CLSO Room 150",
    hosts: ["Liam", "Taizo", "Ibe"],
    description:
      "Improve your DSA and LeetCode skills at this workshop taught by experienced students who landed high-value internships. Includes a Q&A about interviews from top companies like BlackRock, JPMorgan, WellsFargo, Github, and Capital One.",
    topics: [
      "Mock Interviews",
      "LeetCode Problem Solving",
      "Data Structures & Algorithms",
      "Technical Interview Tips",
    ],
    flyer: "/gitpaid/events/crack-the-code-feb2026.png",
    recapPhotos: [
      { src: "/gitpaid/events/recap-approaching-problems.jpg", alt: "Students approaching new problems during the workshop" },
      { src: "/gitpaid/events/recap-approaching-concepts.jpg", alt: "Students approaching new concepts together" },
      { src: "/gitpaid/events/recap-collage.jpg", alt: "Collage of workshop moments" },
      { src: "/gitpaid/events/recap-glad-you-came.jpg", alt: "We're glad you came - stay tuned for more workshops" },
    ],
    materials: [
      {
        title: "Workshop Worksheet",
        description: "Practice problems covered during the workshop (Contains Duplicate & Two Sum)",
        url: "/gitpaid/events/crack-the-code-worksheet.pdf",
        type: "pdf",
      },
      {
        title: "Technical Interview Rubric - 3Sum",
        description: "Interview evaluation rubric covering brute force, two-pointer, and hash set approaches",
        url: "/gitpaid/events/3sum-rubric.pdf",
        type: "pdf",
      },
    ],
    practiceProblems: [
      {
        title: "Contains Duplicate",
        url: "https://leetcode.com/problems/contains-duplicate/",
        difficulty: "Easy",
      },
      {
        title: "Two Sum",
        url: "https://leetcode.com/problems/two-sum/",
        difficulty: "Easy",
      },
      {
        title: "3Sum",
        url: "https://leetcode.com/problems/3sum/",
        difficulty: "Medium",
      },
    ],
  },
];
