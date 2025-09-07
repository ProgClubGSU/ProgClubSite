/**
 * =============================================================================
 * PROGCLUBGSU MEMBER DATA MANAGEMENT
 * =============================================================================
 * 
 * This file contains all member information organized by academic year.
 * Future club officers can easily add/edit member information here.
 * 
 * 🚀 QUICK START FOR FUTURE EDITORS:
 * 1. Find the academic year section you want to edit
 * 2. Add/modify member objects with the required fields
 * 3. Social links: Only include REAL links, others will show "Coming Soon"
 * 4. Save the file - changes appear automatically on the website!
 * 
 * 📋 REQUIRED FIELDS: name, role
 * 🎯 OPTIONAL FIELDS: description, github, linkedin, specialties
 * 
 * 🔍 HOW TO ADD NEW MEMBERS:
 * - Copy an existing member object structure
 * - Fill in their information (name and role are required)
 * - Add to the appropriate academic year section
 * 
 * 🗓️ HOW TO ADD NEW ACADEMIC YEARS:
 * - Add new key like "2027-2029" to membersByYear object
 * - Add members array with member objects
 * - The website will automatically display the new section
 * 
 * ⚡ SPECIAL ROLES (get special styling):
 * - "Founding President" (Jenny Liu - gets violet sparkles)
 * - "President", "2nd President", "3rd President", etc. (get golden sparkles)
 * - "Founding Member", "Founding Academic Advisor" (special priority)
 * - All other roles get standard styling
 * 
 * 💡 TIPS:
 * - Keep descriptions concise but informative
 * - Use consistent role naming (see existing examples)
 * - Specialties should be relevant skills/interests
 * - GitHub usernames: just the username, not full URL
 * - LinkedIn: can be username or full URL
 * =============================================================================
 */

/**
 * Individual member data structure
 * All fields except name and role are optional
 */
export interface Member {
  /** Full name of the member (required) */
  name: string;
  
  /** Official role/position in the club (required) */
  role: string;
  
  /** Brief description of their contributions and background (optional) */
  description?: string;
  
  /** GitHub username or profile URL (optional - only include if verified/real) */
  github?: string;
  
  /** LinkedIn username or profile URL (optional - only include if verified/real) */
  linkedin?: string;
  
  /** Array of skills, interests, or specialties (optional) */
  specialties?: string[];
}

/**
 * Organization structure: members grouped by academic year
 * Key format: "YYYY-YYYY" (e.g., "2025-2027")
 */
export interface MembersByYear {
  [academicYear: string]: Member[];
}

/**
 * =============================================================================
 * MEMBER DATA BY ACADEMIC YEAR
 * =============================================================================
 * 
 * ⚠️  EDITING INSTRUCTIONS:
 * - Keep members within their correct academic year section
 * - Maintain chronological order (newest years first)
 * - Copy the structure of existing entries when adding new members
 * - Test changes by running `npm run dev` and checking /members page
 * - Items ommited will have a default "coming soon" placeholder
 * =============================================================================
 */
export const membersByYear: MembersByYear = {
  // =============================================================================
  // CURRENT LEADERSHIP (2025-2027)
  // =============================================================================
  "2025-2027": [
    {
      name: "Joey Zhang",
      role: "5th President",
      description: "Current 5th President leading PROGgsu into the future! Passionate about building community and helping fellow programmers grow. Math + CS @ GSU, building InfiniteMonke.",
      github: "joeyzhang-dev",
      linkedin: "joeyzhangdev",
      specialties: ["Leadership", "Bench Press", "Monkeytype", "Eating food", "Height: 6'5\""]
    },
    {
      name: "Evan Anderson",
      role: "Vice President",
      description: "Vice President serving under Joey Zhang's leadership, bringing a unique blend of creative and technical skills to help guide PROGgsu's continued growth.",
      linkedin: "evan-anderson636",
      specialties: ["Fashion Design", "Cooking", "App Dev", "Data Analytics"]
    },
    {
      name: "Ibe Mohammed Ali",
      role: "Director of Technology",
      description: "Building and maintaining PROGgsu’s github and projects, mentoring devs, and making sure things break less than my sleep schedule.",
      github: "ibeeeees",
      specialties: ["Software Development", "Mentorship", "Debugging at 2 AM", "Good Ball"]
    },
    {
      name: "Poorav Rawat",
      role: "Director of Innovation and Outreach",
      description: "A guy who loves to talk and build. Driving strategic outreach for the Progsu organization by connecting with campus partners, student organizations, and tech industry leaders.",
      github: "pooravrawat1",
      linkedin: "pooravrawat",
      specialties: ["Leadership", "Soccer and Basketball", "Thrifting","Creativity","Height: NOT 6'5\""]
    },
    {
      name: "Brian Johnson",
      role: "Director of Technology",
      description: "Building and maintaining PROGgsu’s github and projects, mentoring devs,",
      github: "brianjohnson360",
      specialties: ["Making Music", "Cooking", "Learning Spanish", "Mobile dev and AI/ML"]
    }

  ],
  
  // =============================================================================
  // TRANSITION PERIOD (2023-2025) 
  // Ethan (3rd President) → Prahbir (4th President) leadership transition
  // =============================================================================
  "2023-2025": [
    {
      name: "Ethan Munji",
      role: "3rd President",
      description: "3rd President who served during Fall 2023. His leadership period was cut short due to a skateboarding accident, but his contributions helped maintain club momentum during his tenure.",
      github: "xMunji",
      specialties: ["Leadership", "Software Engineering", "Team Building", "Community Engagement", "Skateboarding"]
    },
    {
      name: "Prahbir Virk",
      role: "4th President",
      description: "4th President who stepped in during Fall 2023 when Ethan was unable to continue, demonstrating leadership and commitment to the club during a challenging transition period.",
      github: "PrahbirVirk",
      linkedin: "Prahbirvirk",
      specialties: ["Leadership", "Project Management", "Software Development", "Crisis Management"]
    }
  ],

  // =============================================================================
  // BEETHOVEN ERA (2021-2023)
  // 2nd President period with major club transformations and growth
  // =============================================================================
  "2021-2023": [
    {
      name: "Beethoven",
      role: "2nd President",
      description: "2nd President who transformed PROGgsu from basic HackJams to comprehensive technical interview preparation. Led the club's evolution into a powerhouse for competitive programming and career development.",
      specialties: ["Technical Interviews", "Competitive Programming", "Leadership", "Mentorship"],
      github: "beesmalley"
    },
    {
      name: "John Martin",
      role: "Academic Advisor",
      description: "Facebook Engineer In Residence (EIR) who served as Academic Advisor from 2021-2022. Worked closely with Beethoven and the second executive board to expand club programming and industry partnerships.",
      specialties: ["Industry Mentorship", "Academic Guidance", "Facebook/Meta Partnerships"],
      linkedin: "ilovecodereview"
    },
    {
      name: "Batya Zamansky",
      role: "Academic Advisor",
      description: "Facebook Engineer In Residence (EIR) who served as Academic Advisor from 2022-2023. Continued the tradition of industry guidance before pursuing her career as Senior Software Engineer at Meta.",
      specialties: ["Industry Mentorship", "Software Engineering", "Career Guidance"]
    },
    {
      name: "Cierra",
      role: "Vice President",
      description: "Vice President during the second executive board era, helping to expand PROGgsu's reach and member engagement.",
      specialties: ["Leadership", "Member Engagement", "Strategic Planning"]
    },
    {
      name: "Sara Edwards",
      role: "Director of Events",
      description: "Director of Events who organized innovative programming events and workshops during the club's growth period.",
      specialties: ["Event Planning", "Workshop Development", "Community Outreach"]
    },
    {
      name: "Humi",
      role: "Exec"
    },
    {
      name: "Owen",
      role: "Exec"
    },
    {
      name: "Adrian",
      role: "Exec"
    },
    {
      name: "JenniferA",
      role: "Exec"
    },
    {
      name: "Nyima",
      role: "Director of Events",
      description: "Director of Events who contributed to PROGgsu's programming and community building efforts.",
      specialties: ["Event Coordination", "Program Development", "Team Leadership"]
    },
    {
      name: "Srikumar",
      role: "Exec"
    }
    ],

  // =============================================================================
  // THE FOUNDING ERA (2020-2021) 
  // Jenny Liu's founding presidency and the original team that started it all
  // =============================================================================
  "2020-2021": [
    {
      name: "Jenny Liu",
      role: "Founding President", 
      description: "Our fearless founder! Started PROGgsu from an idea in March 2020 during the COVID-19 pandemic and built it into the thriving community it is today. True visionary and leader.",
      github: "ShantingLiu",
      linkedin: "jsliu",
      specialties: ["Club Founding", "Visionary Leadership", "Community Building"]
    },
    {
      name: "Andrew Huang",
      role: "Founding Academic Advisor",
      description: "Facebook Engineer In Residence (EIR) and founding academic advisor who provided crucial guidance and industry expertise during PROGgsu's creation in 2020.",
      linkedin: "shidihuang",
      specialties: ["Industry Mentorship", "Academic Guidance", "Software Engineering"]
    },
    {
      name: "Shardul",
      role: "Founding VP",
      description: "Founding member and Vice President who worked closely with Jenny to establish PROGgsu from its very beginning in March 2020. Now Developer Experience Solutions Architect @ Amazon Web Services.",
      github: "5herlocked",
      linkedin: "shardul-vaidya",
      specialties: ["Event Planning", "Logistics", "Team Coordination", "Cloud Architecture"]
    },
    {
      name: "Ikenna",
      role: "Secretary/Librarian",
      description: "Founding member and Secretary/Librarian who helped establish club documentation and organizational systems from day one.",
      specialties: ["Documentation", "Organization", "Communication"]
    },
    {
      name: "Adithya",
      role: "Director of Events",
      description: "Founding member and Director of Events who co-organized the very first PROGgsu events and helped establish event programming traditions.",
      specialties: ["Event Planning", "Workshop Organization", "Community Engagement"]
    },
    {
      name: "Beethoven",
      role: "Director of Events", 
      description: "Founding member and Director of Events (originally 'Bee') who partnered with Adithya to create engaging programming events from the club's inception.",
      github: "beesmalley",
      specialties: ["Event Coordination", "Workshop Development", "Leadership Development"]
    },
    {
      name: "Gyan",
      role: "Director of Technology",
      description: "Founding member and Director of Technology (formerly called Tech Chair) who managed technical infrastructure from PROGgsu's founding.",
      specialties: ["Technical Infrastructure", "Web Development", "System Administration"]
    },
    {
      name: "Anish Ganga",
      role: "Director of Technology",
      description: "Founding member and Director of Technology who partnered with Gyan to establish the club's technology foundations from the beginning.",
      specialties: ["Technical Infrastructure", "Software Development", "System Design"]
    },
    {
      name: "Shain Dholakiya",
      role: "Founding Member",
      description: "Founding member who served from the founding period through 2023, contributing to PROGgsu's growth and development.",
      specialties: ["Executive Leadership", "Strategic Planning", "Community Growth"]
    },
    {
      name: "Japnit",
      role: "Founding Member",
      description: "Founding member who served from the founding era through 2023, helping to build PROGgsu's foundations.",
      specialties: ["Executive Leadership", "Community Building", "Program Development"]
    },
    {
      name: "Rebecca",
      role: "Founding Member"
    },
    {
      name: "Tawfiq",
      role: "Founding Member"
    },
    {
      name: "Elisha",
      role: "Founding Member"
    },
    {
      name: "Austin",
      role: "Founding Member"
    },
    {
      name: "Dagm",
      role: "Server Owner",
      description: "Server owner who managed PROGgsu's Discord and online infrastructure, keeping the community connected.",
      specialties: ["Server Administration", "Community Management", "Discord Moderation"]
    }
  ]
}; 