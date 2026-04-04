/**
 * =============================================================================
 * PROGCLUBGSU HISTORICAL TIMELINE DATA
 * =============================================================================
 * 
 * This file contains the club's historical timeline data used by history.astro
 * Future club officers can add new milestones and achievements here.
 * 
 * 🚀 QUICK START FOR FUTURE EDITORS:
 * 1. Find the appropriate timeline section (founding, earlyDevelopment, growth, currentEra)
 * 2. Add new timeline events using the existing structure
 * 3. Update club stats at the top when numbers change
 * 4. Save the file - changes appear automatically on /history page!
 * 
 * 📊 TIMELINE SECTIONS:
 * - founding: March 2020 - Spring 2021 (Jenny's founding era)
 * - earlyDevelopment: 2021-2023 (Beethoven's transformation era)  
 * - growth: 2023-2025 (Ethan → Prahbir transition period)
 * - currentEra: 2025+ (Joey's current leadership)
 * 
 * 🎯 EVENT TYPES:
 * - "milestone": Major club achievements or changes
 * - "achievement": Specific accomplishments or recognitions
 * - "partnership": New collaborations or relationships
 * 
 * 💡 WRITING TIPS:
 * - Keep titles creative but professional
 * - Descriptions should be 1-2 sentences max
 * - Include specific dates when possible
 * - Maintain chronological order within sections
 * =============================================================================
 */

/**
 * Individual timeline event structure
 */
export interface TimelineEvent {
  /** Event date (can be specific date, year, or period like "Fall 2023") */
  date: string;
  
  /** Creative, memorable title for the event */
  title: string;
  
  /** Brief 1-2 sentence description of what happened */
  description: string;
  
  /** Type of event for categorization and potential styling */
  type: "milestone" | "achievement" | "partnership";
}

/**
 * Overall club history structure organized by development phases
 */
export interface ClubHistory {
  /** Founding period events (March 2020 - Spring 2021) */
  founding: TimelineEvent[];
  
  /** Early development period (2021-2023) */
  earlyDevelopment: TimelineEvent[];
  
  /** Growth period events (2023-2025) */
  growth: TimelineEvent[];
  
  /** Current era events (2025+) */
  currentEra: TimelineEvent[];
}

/**
 * =============================================================================
 * CLUB STATISTICS
 * =============================================================================
 * 
 * ⚠️  UPDATE THESE NUMBERS REGULARLY:
 * - Discord members: Check server member count
 * - Students helped: Estimate from event attendance and programs
 * - Core programs: Count active ongoing initiatives
 * - Major milestones: Update as club achieves new goals
 * =============================================================================
 */
export const clubStats = {
  yearsStrong: "5+",
  studentsHelped: "1500+", 
  corePrograms: "4",
  majorMilestones: "25+"
};

/**
 * =============================================================================
 * KEY ACHIEVEMENTS DATA (for /history page)
 * =============================================================================
 *
 * Edit this array to update the "Key Achievements" section on the history page.
 * Each item should have a title and a description.
 * =============================================================================
 */
export interface KeyAchievement {
  title: string;
  description: string;
  color: string; // e.g. 'purple', 'blue', etc. for the dot
}

export const keyAchievements: KeyAchievement[] = [
  {
    title: "5+ Years Strong",
    description: "Continuous operation since March 2020",
    color: "purple"
  },
  {
    title: "100+ Students Helped",
    description: "Through interview prep and programming guidance",
    color: "blue"
  },
  {
    title: "6 Core Programs",
    description: "DSA prep, mock interviews, competitive programming",
    color: "green"
  },
  {
    title: "5 Presidents",
    description: "Successful leadership transitions",
    color: "amber"
  },
  {
    title: "Official Recognition",
    description: "RSO status and SAFC funding secured",
    color: "red"
  },
  {
    title: "1100+ Discord Members",
    description: "Active programming community built",
    color: "cyan"
  }
];

/**
 * =============================================================================
 * DID YOU KNOW FACTS DATA (for /history page)
 * =============================================================================
 *
 * Edit this array to update the "Did You Know?" section on the history page.
 * Each item is a single fact string.
 * =============================================================================
 */
export const didYouKnowFacts: string[] = [
  "progsu was founded during the COVID-19 pandemic, proving that great communities can emerge from challenging times!",
  "We had a unique co-presidency period where Prahbir and Ethan shared leadership duties - a first in club history!",
  "Our \"Holy Trinity\" programs (DSA, Mocks, Competitive Programming) have helped dozens of students land internships at top tech companies.",
  "Andrew Huang, a Facebook Engineer in Residence, was our founding academic advisor who helped establish our foundation.",
  "We transformed from basic HackJams to comprehensive interview prep, revolutionizing how GSU students approach technical interviews."
];

/**
 * =============================================================================
 * TIMELINE DATA BY DEVELOPMENT PHASE
 * =============================================================================
 * 
 * ⚠️  EDITING INSTRUCTIONS:
 * - Add new events in chronological order within each section
 * - Keep event titles creative but professional
 * - Ensure descriptions are concise and impactful
 * - Test changes by checking the /history page
 * =============================================================================
 */ 
export const clubTimeline: ClubHistory = {
  // =============================================================================
  // FOUNDING ERA (March 2020 - Spring 2021)
  // Jenny Liu's visionary leadership establishes progsu during the pandemic
  // =============================================================================
  founding: [
    {
      date: "March 2020",
      title: "Plot Twist: Pandemic Sparks Programming Paradise",
      description: "Jenny Liu founded progsu during the global pandemic, creating GSU's premier programming community from the ground up.",
      type: "milestone"
    },
    {
      date: "Fall 2020",
      title: "The Great Launch: CS Jeopardy and Friends",
      description: "Launched inaugural programming events including CS Jeopardy, technical interview prep, and resume workshops with 25+ regular attendees.",
      type: "achievement"
    },
    {
      date: "October 2020",
      title: "Paperwork Adventures Begin",
      description: "Began official university recognition process with charter development and PIN registration.",
      type: "milestone"
    }
  ],

  // =============================================================================
  // EARLY DEVELOPMENT (2021-2023)
  // Building foundations and establishing core programs
  // =============================================================================
  earlyDevelopment: [
    {
      date: "Spring 2021",
      title: "Victory Lap: Official Recognition Achieved",
      description: "Achieved official university recognition as a registered student organization with approved charter and officer structure.",
      type: "milestone"
    },
    {
      date: "Fall 2021",
      title: "The Weekly Grind: Programming Challenges Era",
      description: "Established consistent weekly programming activities including data structures practice and algorithm challenges.",
      type: "achievement"
    },
    {
      date: "Spring 2022",
      title: "Community Building: The Discord Dynasty",
      description: "Expanded community engagement through Discord server and regular programming discussions, building strong member connections.",
      type: "achievement"
    }
  ],

  // =============================================================================
  // GROWTH PERIOD (2023-2025)
  // Major program expansion and community explosion
  // =============================================================================
  growth: [
    {
      date: "Fall 2022",
      title: "The Holy Trinity: DSA, Mocks & Competitive Chaos",
      description: "Launched the three core programs that would define progsu: Data Structures & Algorithms prep, mock interviews, and competitive programming.",
      type: "achievement"
    },
    {
      date: "Spring 2023",
      title: "Level Up: SAFC Recognition & Funding",
      description: "Secured Student Activity Fee Committee funding and full university partnership status, gaining access to resources and official support.",
      type: "achievement"
    },
    {
      date: "2022-2023",
      title: "The 400+ Club: Discord Community Explosion",
      description: "Discord community exploded to over 400 active members, establishing progsu as the go-to programming community at GSU.",
      type: "milestone"
    }
  ],

  // =============================================================================
  // CURRENT ERA (2025+)
  // Presidential transitions and modern leadership
  // =============================================================================
  currentEra: [
    {
      date: "2021-2023",
      title: "Beethoven's Revolution: From HackJams to Interview Mastery",
      description: "Beethoven (2nd President) transformed progsu from basic HackJams to comprehensive technical interview preparation, revolutionizing the club's impact.",
      type: "milestone"
    },
    {
      date: "Fall 2023",
      title: "The Great Skateboard Plot Twist: Ethan's Brief but Memorable Reign",
      description: "Ethan Munji's 3rd Presidential tenure proved that sometimes life has other plans - showcasing that even presidents need to watch out for rogue skateboards and cars.",
      type: "milestone"
    },
    {
      date: "Fall 2023-2025", 
      title: "Prahbir Steps Up: 4th President's Emergency Leadership",
      description: "Prahbir Virk stepped in as 4th President during Fall 2023 when circumstances required a leadership transition, demonstrating dedication and ensuring club continuity through to 2025.",
      type: "milestone"
    },
    {
      date: "2025-Present",
      title: "Joey's Era: The Fifth Element of Leadership",
      description: "Joey Zhang doesn't just lead—he rebrands, reboots, and re-energizes! As the 5th President, Joey launches a full-on club renaissance: new look, new vibe, and a tidal wave of student activity. If there's a spark of energy on campus, it's probably Joey lighting the fire. The most proactive president yet—progsu's future is now running on pure caffeine and Joey's vision.",
      type: "milestone"
    },
    {
      date: "2025",
      title: "The Rebirth: Ctrl+Alt+Refresh",
      description: "progsu gets a glow-up! New website, fresh branding, and a total event overhaul. It's not just a rebrand—it's a full system reboot. Members are still trying to figure out if they joined a club or accidentally walked into a tech startup. Welcome to the new era, where even the logo has more energy!",
      type: "achievement"
    },
    {
      date: "2020-Present",
      title: "The Five-President Legacy: Resilience Through Challenges",
      description: "5+ years demonstrating successful leadership transitions and resilient community building through various challenges: Jenny → Beethoven → Ethan → Prahbir → Joey.",
      type: "achievement"
    }
  ]
}; 