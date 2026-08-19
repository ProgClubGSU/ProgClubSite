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
 * 🎯 OPTIONAL FIELDS: description, major, team, github, linkedin, specialties
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
  
  /** School major (optional) */
  major?: string;
  
  /** Team or domain within the club (e.g., Technology, Marketing, Events) (optional) */
  team?: string;
  
  /** Brief description of their contributions and background (optional) */
  description?: string;
  
  /** GitHub username or profile URL (optional - only include if verified/real) */
  github?: string;
  
  /** LinkedIn username or profile URL (optional - only include if verified/real) */
  linkedin?: string;
  
  /** Array of skills, interests, or specialties (optional) */
  specialties?: string[];

  /** Path to a headshot photo under /public (optional - falls back to initials avatar) */
  photo?: string;
}

/**
 * Organization structure: members grouped by academic year
 * Key format: "YYYY-YYYY" (e.g., "Fall 2025")
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
  // FALL 2026
  // =============================================================================
  "Fall 2026": [
    // PRESIDENTS
    {
      name: "Joey Zhang",
      photo: "/images/exec%20headshots/joey.jpg",
      role: "co-president",
      team: "president",
      linkedin: "https://linkedin.com/in/joeyzhangdev",
      github: "joeyzhang-dev",
      specialties: ["leadership", "tech", "outreach"]
    },
    {
      name: "Natasha Narine",
      photo: "/images/exec%20headshots/natasha.jpeg",
      role: "co-president",
      team: "president",
      linkedin: "https://www.linkedin.com/in/natasha-narine",
      github: "natashanarine",
      specialties: ["leadership", "growth", "ops"]
    },

    // C-SUITE
    {
      name: "Jared Beresford",
      photo: "/images/exec%20headshots/jared.png",
      role: "coo",
      team: "operations",
      linkedin: "https://www.linkedin.com/in/jaredberesford",
      github: "jsberesford",
      specialties: ["operations", "logistics", "finance"]
    },
    {
      name: "Liam Ellison",
      photo: "/images/exec%20headshots/liam.png",
      role: "cto",
      team: "development",
      linkedin: "liam-ellison",
      github: "liamellison02",
      specialties: ["engineering", "workshops", "programs"]
    },
    {
      name: "John Sang",
      photo: "/images/exec%20headshots/john.jpeg",
      role: "cto",
      team: "development",
      linkedin: "https://linkedin.com/in/johnsang-/",
      github: "JohnSang16",
      specialties: ["web dev", "operations", "full stack"]
    },
    {
      name: "Charan Peeriga",
      photo: "/images/exec%20headshots/charan.jpeg",
      role: "cmo",
      team: "growth",
      linkedin: "https://www.linkedin.com/in/cpeeriga",
      github: "CharanPeeriga",
      specialties: ["visual design", "branding", "graphics"]
    },
    {
      name: "Ishan Patel",
      photo: "/images/exec%20headshots/ishan.png",
      role: "cfo",
      team: "finance",
      linkedin: "https://www.linkedin.com/in/ishanpatel09/",
      specialties: ["budgeting", "finance", "records"]
    },
    {
      name: "Carter Tierney",
      photo: "/images/exec%20headshots/carter.jpeg",
      role: "cro",
      team: "outreach",
      linkedin: "https://linkedin.com/in/carter-tierney",
      specialties: ["outreach", "networking", "partnerships"]
    },

    // DEVELOPMENT
    {
      name: "Arhaan Keshwani",
      photo: "/images/exec%20headshots/arhaan.jpeg",
      role: "tech",
      team: "development",
      specialties: ["coding", "web dev", "engineering"]
    },
    {
      name: "Colby Threlkeld",
      photo: "/images/exec%20headshots/colby.jpeg",
      role: "tech",
      team: "development",
      specialties: ["coding", "web dev", "engineering"]
    },
    {
      name: "Luigi Fernandez",
      photo: "/images/exec%20headshots/luigi.jpeg",
      role: "tech",
      team: "development",
      specialties: ["coding", "web dev", "engineering"]
    },
    {
      name: "Manjunath Ande",
      photo: "/images/exec%20headshots/manjunauth.jpeg",
      role: "tech",
      team: "development",
      specialties: ["coding", "web dev", "engineering"]
    },
    {
      name: "Poorav Rawat",
      photo: "/images/exec%20headshots/poorav.jpeg",
      role: "tech",
      team: "development",
      linkedin: "https://www.linkedin.com/in/pooravrawat",
      github: "pooravrawat1",
      specialties: ["basketball", "soccer", "music"]
    },
    {
      name: "Uyiosa Nehikhuere",
      photo: "/images/exec%20headshots/uyiosa.jpeg",
      role: "tech",
      team: "development",
      specialties: ["coding", "web dev", "engineering"]
    },

    // FINANCE
    {
      name: "Camryn Odom",
      role: "finance",
      linkedin: "https://www.linkedin.com/in/camrynodom/",
      specialties: ["budgeting", "finance", "records"]
    },
    {
      name: "Dev Gajjar",
      photo: "/images/exec%20headshots/dev.jpeg",
      role: "finance",
      linkedin: "https://www.linkedin.com/in/gajjardev/",
      specialties: ["budgeting", "finance", "records"]
    },
    {
      name: "L’oreal Ray",
      photo: "/images/exec%20headshots/ori.jpg",
      role: "finance",
      linkedin: "http://linkedin.com/in/loreal-ray",
      github: "LorealRay",
      specialties: ["budgeting", "finance", "records"]
    },
    {
      name: "Sierra Mendelssohn",
      photo: "/images/exec%20headshots/sierra.jpeg",
      role: "finance",
      linkedin: "https://www.linkedin.com/in/sierra-mendelssohn-b38a26296/",
      github: "sierralm",
      specialties: ["budgeting", "finance", "records"]
    },
    {
      name: "Varshitha Karthik",
      photo: "/images/exec%20headshots/varshitha.png",
      role: "finance",
      linkedin: "https://www.linkedin.com/in/varshithakarthik/",
      github: "varshithakarthik",
      specialties: ["budgeting", "finance", "records"]
    },
    {
      name: "Viviana Gonzalez",
      photo: "/images/exec%20headshots/viviana.png",
      role: "finance",
      linkedin: "https://www.linkedin.com/in/viviana-gonzalez-a97552275/",
      github: "Vivianavvg",
      specialties: ["budgeting", "finance", "records"]
    },

    // GROWTH
    {
      name: "Abrar Sarwar",
      photo: "/images/exec%20headshots/abrar.png",
      role: "growth",
      specialties: ["analytics", "content", "strategy"]
    },
    {
      name: "Hanna Ibre",
      photo: "/images/exec%20headshots/hanna.jpeg",
      role: "social media",
      team: "growth",
      specialties: ["growth", "outreach", "engagement"]
    },
    {
      name: "Jamal Ford",
      photo: "/images/exec%20headshots/jamal.jpeg",
      role: "community",
      team: "growth",
      linkedin: "https://www.linkedin.com/in/jamalford/",
      github: "JamalFord",
      specialties: ["community", "discord", "engagement"]
    },
    {
      name: "Levi Purkey",
      photo: "/images/exec%20headshots/Levi.jpg",
      role: "content",
      team: "growth",
      linkedin: "https://www.linkedin.com/in/levipurkey/",
      specialties: ["content", "social", "storytelling"]
    },
    {
      name: "Michael Tewabe",
      photo: "/images/exec%20headshots/michael.jpeg",
      role: "growth",
      linkedin: "https://www.linkedin.com/in/michael-tewabe-7a3603293",
      github: "meeko0",
      specialties: ["growth", "outreach", "engagement"]
    },
    {
      name: "Raphael Omorose",
      photo: "/images/exec%20headshots/raphael.png",
      role: "content",
      team: "growth",
      linkedin: "https://linkedin.com/in/raphaelomorose",
      github: "OfficialEseosa",
      specialties: ["content", "social", "storytelling"]
    },
    {
      name: "Sankofa Melton",
      photo: "/images/exec%20headshots/sankofa.jpeg",
      role: "growth",
      linkedin: "https://www.linkedin.com/in/sankofa-m-093042262",
      specialties: ["growth", "content", "strategy"]
    },
    {
      name: "Victoria Agyare",
      photo: "/images/exec%20headshots/victoria.png",
      role: "growth",
      specialties: ["growth", "outreach", "engagement"]
    },

    // OPERATIONS
    {
      name: "Cor’layshia Cooper",
      photo: "/images/exec%20headshots/corlayshia.jpeg",
      role: "operations",
      linkedin: "https://www.linkedin.com/in/corlayshiac/",
      specialties: ["operations", "logistics", "planning"]
    },
    {
      name: "Eda Mai",
      photo: "/images/exec%20headshots/eda.png",
      role: "operations",
      linkedin: "https://www.linkedin.com/in/edamai/",
      specialties: ["setup", "supplies", "execution"]
    },
    {
      name: "Leslie Cruz Hernandez",
      photo: "/images/exec%20headshots/leslie.png",
      role: "operations",
      linkedin: "https://www.linkedin.com/in/lcruzh/",
      specialties: ["operations", "logistics", "planning"]
    },
    {
      name: "Neha Venkatesh",
      photo: "/images/exec%20headshots/neha.jpeg",
      role: "operations",
      linkedin: "https://www.linkedin.com/in/neha-venkatesh-146a322b5/",
      specialties: ["operations", "logistics", "planning"]
    },
    {
      name: "Phillip Sanchez",
      photo: "/images/exec%20headshots/phillip.jpeg",
      role: "operations",
      linkedin: "https://www.linkedin.com/in/phillip-sanchez-parra-2b4a652a8/",
      specialties: ["setup", "supplies", "execution"]
    },
    {
      name: "Sanaa Miller",
      role: "operations",
      linkedin: "https://www.linkedin.com/in/sanaa-miller-589158373/",
      github: "Smiller2424",
      specialties: ["setup", "supplies", "execution"]
    },
    {
      name: "Temi Alajogun",
      photo: "/images/exec%20headshots/temi.jpeg",
      role: "operations",
      linkedin: "https://www.linkedin.com/in/temialajogun/",
      specialties: ["events", "logistics", "planning"]
    },
  ],

  // =============================================================================
  // SPRING 2026
  // =============================================================================
  "Spring 2026": [
    // EXECUTIVE (priority 1 & C-suite)
    {
      name: "Joey Zhang",
      role: "President",
      major: "Math + CS",
      team: "Executive",
      description: "Leading progsu into its next chapter.",
      github: "joeyzhang-dev",
      linkedin: "joeyzhangdev",
      specialties: ["Leadership", "Growth", "Outreach"]
    },
    {
      name: "Natasha Narine",
      role: "Co-President",
      team: "Executive",
      description: "Responsible for awareness, engagement, and brand consistency across campus and online.",
      linkedin: "natasha-narine",
      specialties: ["Brand", "Design", "Marketing"]
    },
    {
      name: "Liam Ellison",
      role: "CTO",
      major: "Math + CS",
      team: "Development",
      description: "Owns technical and programmatic direction. Building learning experiences, technical events, and skill development pipelines.",
      github: "liamellison02",
      linkedin: "liam-ellison/",
      specialties: ["Engineering", "Workshops", "Programs"]
    },
    {
      name: "Jared Beresford",
      role: "COO",
      team: "Operations",
      description: "Keeps progsu running smoothly behind the scenes. Owns execution, finances, logistics, and systems.",
      linkedin: "jaredberesford",
      specialties: ["Operations", "Logistics", "Finance"]
    },
    {
      name: "Charan Peeriga",
      role: "CMO",
      team: "Growth",
      description: "Owns progsu's visual identity and design quality. Ensures everything looks intentional, clean, and on-brand.",
      linkedin: "cpeeriga",
      specialties: ["Visual Design", "Branding", "Graphics"]
    },

    // VP
    {
      name: "John Sang",
      role: "VP of Tech",
      major: "CS",
      team: "Development",
      description: "Leads technical team operations for progsu.",
      github: "JohnSang16",
      linkedin: "johnsang-/",
      specialties: ["Web Dev", "Operations", "Full Stack"]
    },

    // DIRECTORS (priority 7)
    {
      name: "Carter Tierney",
      role: "Director of Outreach",
      team: "Growth",
      description: "Drives student, org, and external outreach to grow attendance, partnerships, and visibility.",
      linkedin: "carter-tierney",
      specialties: ["Outreach", "Networking", "Partnerships"]
    },
    {
      name: "Jamal Ford",
      role: "Director of Community",
      team: "Growth",
      description: "Maintains internal health of the community. Ensures members feel welcomed, heard, and retained.",
      specialties: ["Community", "Discord", "Engagement"]
    },
    {
      name: "Abrar Sarwar",
      role: "Director of Analytics",
      team: "Growth",
      description: "Manages growth metrics and tracks performance across progsu's channels and initiatives.",
      specialties: ["Analytics", "Content", "Strategy"]
    },
    {
      name: "Nkano Bisong",
      role: "Director of Content",
      team: "Growth",
      description: "Leads content creation and runs progsu's podcast.",
      specialties: ["Content", "Podcast", "Film"]
    },
    {
      name: "Eda Mai",
      role: "Director of Logistics",
      team: "Operations",
      description: "Supports physical and operational needs for events and programs.",
      specialties: ["Setup", "Supplies", "Execution"]
    },

    // TEAM MEMBERS (priority 8)
    {
      name: "Fred Dai",
      role: "Content",
      team: "Growth",
      description: "Creates & distributes content that captures progsu's energy, events, and wins.",
      specialties: ["Social Media", "Content", "Storytelling"]
    },
    {
      name: "Ibe Mohammed Ali",
      role: "Tech",
      major: "Math + CS",
      team: "Development",
      description: "Building and maintaining progsu's github and projects, mentoring devs, and making sure things break less than my sleep schedule.",
      github: "ibeeeees",
      linkedin: "ibrahim-m-80947622a/",
      specialties: ["Coding", "Sports", "Trading", "Cooking", "Playing the Game"]
    },
    {
      name: "Taizo Rashid",
      role: "Program",
      team: "Development",
      description: "Designs and runs technical programs, workshops, and build-focused events.",
      specialties: ["Events", "Workshops", "Planning"]
    },
    {
      name: "Dev Gajjar",
      role: "Finance",
      team: "Operations",
      description: "Manages all money-related operations and financial integrity.",
      specialties: ["Budgeting", "Finance", "Records"]
    },
    {
      name: "Ishan Patel",
      role: "Finance",
      team: "Operations",
      description: "Manages all money-related operations and financial integrity.",
      specialties: ["Budgeting", "Finance", "Records"]
    },
    {
      name: "Temi Alajogun",
      role: "Event Management",
      team: "Operations",
      description: "Handles logistics and execution of events. Makes sure rooms, check-ins, and systems are planned.",
      linkedin: "temialajogun",
      specialties: ["Events", "Logistics", "Planning"]
    },
    {
      name: "Phillip Sanchez-Parra",
      role: "Logistics",
      team: "Operations",
      description: "Supports physical and operational needs for events and programs.",
      specialties: ["Setup", "Supplies", "Execution"]
    },

    // GENERAL MEMBERS (priority 11)
    {
      name: "Brian Johnson",
      role: "Member",
      major: "CS (M.S.)",
      github: "brianjohnson360",
      linkedin: "brianjohnson360",
      specialties: ["Making music", "Cooking", "Learning spanish", "Mobile development and AI/ML"]
    },
    {
      name: "Nina Kilidzhiyska",
      role: "Member",
      major: "CS",
      specialties: ["Web dev", "Music", "Dancing", "Reading"]
    },
    {
      name: "Poorav Rawat",
      role: "Member",
      major: "CS",
      github: "pooravrawat1",
      linkedin: "pooravrawat",
      specialties: ["Basketball", "Soccer", "Music", "Thrifting"]
    },
  ],

  // =============================================================================
  // FALL 2025
  // =============================================================================
  "Fall 2025": [
    // =============================================================================
    // LEADERSHIP - President & Vice Presidents
    // =============================================================================
    {
      name: "Joey Zhang",
      role: "President",
      major: "Math + CS",
      team: "Executive",
      description: "Current 5th President leading progsu into the future! Passionate about building community and helping fellow programmers grow. Math + CS @ GSU, building InfiniteMonke.",
      github: "joeyzhang-dev",
      linkedin: "joeyzhangdev",
      specialties: ["Leadership", "Bench Press", "Monkeytype", "Eating food", "Height: 6'5\""]
    },
    {
      name: "Liam Ellison",
      role: "Tech VP",
      major: "Math + CS",
      team: "Technology",
      description: "Head of Technology & Innovation. Doesn't like to talk about himself, but he hopes to be considered 'cracked' one day.",
      github: "liamellison02",
      linkedin: "liam-ellison/",
      specialties: ["Competitive Programming", "Poker", "Basketball", "Options Trading", "Drumming"]
    },
    {
      name: "Vaishnavi Adepu",
      role: "Ops VP",
      major: "Honors CS",
      team: "Operations",
      description: "Head of Operations. Loves cooking and dancing.",
      github: "naviadepu",
      linkedin: "vaishnavi-adepu444",
      specialties: ["Dancing", "Cooking", "Music"]
    },
    {
      name: "Natasha Narine",
      role: "Marketing VP",
      major: "CS",
      team: "Marketing",
      description: "",
      linkedin: "natasha-narine",
      specialties: ["UI/UX", "Graphic Design", "Nail Tech", "Photography", "Music"]
    },
    {
      name: "Arhaan Keshwani",
      role: "Startup VP",
      major: "CS",
      team: "Startup",
      description: "",
      specialties: ["Locked In"]
    },

    // =============================================================================
    // DIRECTORS & TEAM MEMBERS
    // =============================================================================
    {
      name: "Poorav Rawat",
      role: "Outreach Director",
      major: "CS",
      team: "Outreach",
      description: "A guy who loves to talk and build. Driving strategic outreach for the Progsu organization by connecting with campus partners, student organizations, and tech industry leaders.",
      github: "pooravrawat1",
      linkedin: "pooravrawat",
      specialties: ["Basketball", "Soccer", "Music", "Thrifting"]
    },
    {
      name: "Ibe Mohammed Ali",
      role: "Tech",
      major: "Math + CS",
      team: "Technology",
      description: "Building and maintaining progsu's github and projects, mentoring devs, and making sure things break less than my sleep schedule.",
      github: "ibeeeees",
      linkedin: "ibrahim-m-80947622a/",
      specialties: ["Coding", "Sports", "Trading", "Cooking", "Playing the Game"]
    },
    {
      name: "Brian Johnson",
      role: "Tech",
      major: "CS (M.S.)",
      team: "Technology",
      description: "",
      github: "brianjohnson360",
      linkedin: "brianjohnson360",
      specialties: ["Making music", "Cooking", "Learning spanish", "Mobile development and AI/ML"]
    },
    {
      name: "Darshit Shah",
      role: "Tech",
      major: "CS",
      team: "Technology",
      description: "",
      github: "shahh-darshit",
      linkedin: "shahh-darshit",
      specialties: ["Hiking", "Biking", "Badminton", "Cricket", "QuantF"]
    },
    {
      name: "Jared Beresford",
      role: "Startup",
      major: "CS",
      team: "Startup",
      description: "",
      github: "jsberesford",
      linkedin: "jaredberesford",
      specialties: ["PC Building", "Gaming", "Web Dev", "Mobile Dev", "Gym", "Trading", "Car Mods"]
    },
    {
      name: "Nina Kilidzhiyska",
      role: "Startup",
      major: "CS",
      team: "Startup",
      description: "",
      specialties: ["Web dev", "Music", "Dancing", "Reading"]
    },
    {
      name: "Jamal Ford",
      role: "Marketing - IRL",
      major: "CS",
      team: "Marketing",
      description: "Head of Membership.",
      github: "JamalFord",
      linkedin: "jamalford",
      specialties: ["Jump-roping", "Video games", "Anime","Python","Cybersecurity"]
    },
    {
      name: "Arturo Quiroz",
      role: "Marketing - Media",
      major: "CS",
      team: "Marketing",
      description: "",
      specialties: ["Photography","Video Games","Hands On Things"]
    },
    {
      name: "Kailee Smith",
      role: "Marketing - GFX",
      major: "CS",
      team: "Marketing",
      description: "",
      linkedin: "kailee-smith-19a759381",
      specialties: ["Drawing","Video games"]
    },
    {
      name: "Tyra Smith",
      role: "Marketing - GFX",
      major: "CS",
      team: "Marketing",
      description: "",
      linkedin: "tyra-smith-5529a4267",
      specialties: ["Reading", "Gaming", "Drawing", "Music"]
    },
    {
      name: "Charan Peeriga",
      role: "Marketing - GFX",
      major: "CS",
      team: "Marketing",
      description: "",
      github: "CharanPeeriga",
      linkedin: "cpeeriga",
      specialties: ["Cooking", "Video Games", "AI/ML", "UI/UX"]
    },
    {
      name: "Gregory James",
      role: "Outreach",
      major: "CIS",
      team: "Outreach",
      description: "",
      github: "qr-eg",
      linkedin: "gregory-james-560716237/",
      specialties: ["Making beats", "Playing soccer", "Learning how to code/script"]
    },

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
      description: "2nd President who transformed progsu from basic HackJams to comprehensive technical interview preparation. Led the club's evolution into a powerhouse for competitive programming and career development.",
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
      description: "Vice President during the second executive board era, helping to expand progsu's reach and member engagement.",
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
      description: "Director of Events who contributed to progsu's programming and community building efforts.",
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
      description: "Our fearless founder! Started progsu from an idea in March 2020 during the COVID-19 pandemic and built it into the thriving community it is today. True visionary and leader.",
      github: "ShantingLiu",
      linkedin: "jsliu",
      specialties: ["Club Founding", "Visionary Leadership", "Community Building"]
    },
    {
      name: "Andrew Huang",
      role: "Founding Academic Advisor",
      description: "Facebook Engineer In Residence (EIR) and founding academic advisor who provided crucial guidance and industry expertise during progsu's creation in 2020.",
      linkedin: "shidihuang",
      specialties: ["Industry Mentorship", "Academic Guidance", "Software Engineering"]
    },
    {
      name: "Shardul",
      role: "Founding VP",
      description: "Founding member and Vice President who worked closely with Jenny to establish progsu from its very beginning in March 2020. Now Developer Experience Solutions Architect @ Amazon Web Services.",
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
      description: "Founding member and Director of Events who co-organized the very first progsu events and helped establish event programming traditions.",
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
      description: "Founding member and Director of Technology (formerly called Tech Chair) who managed technical infrastructure from progsu's founding.",
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
      description: "Founding member who served from the founding period through 2023, contributing to progsu's growth and development.",
      specialties: ["Executive Leadership", "Strategic Planning", "Community Growth"]
    },
    {
      name: "Japnit",
      role: "Founding Member",
      description: "Founding member who served from the founding era through 2023, helping to build progsu's foundations.",
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
      description: "Server owner who managed progsu's Discord and online infrastructure, keeping the community connected.",
      specialties: ["Server Administration", "Community Management", "Discord Moderation"]
    }
  ]
};

/**
 * =============================================================================
 * PENDING / UNRELEASED MEMBERS
 * =============================================================================
 *
 * Members added here are NOT shown on the website yet.
 * To make a semester public, move it into membersByYear above.
 *
 * ⏳ Fall 2026 — goes live when the semester starts
 * =============================================================================
 */
export const pendingMembersByYear: MembersByYear = {
  "Fall 2026": [
    // DEVELOPMENT
    {
      name: "Luigi Fernandez",
      role: "Tech",
      team: "Development",
      linkedin: "luigi-fernandez-502647333",
      specialties: ["Education", "Web Dev"]
    },
    {
      name: "Colby Threlkeld",
      role: "Tech",
      team: "Development",
      linkedin: "colby-threlkeld",
      specialties: ["Frontend"]
    },

  ]
};
