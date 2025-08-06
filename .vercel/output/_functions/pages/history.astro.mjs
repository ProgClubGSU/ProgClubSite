/* empty css                                 */
import { a as createComponent, f as renderComponent, b as renderTemplate, d as addAttribute, F as Fragment, m as maybeRenderHead } from '../chunks/astro/server_DQwDjssB.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CHzNjozZ.mjs';
import { $ as $$Section } from '../chunks/Section_CtG7W4D-.mjs';
import { $ as $$Breadcrumb } from '../chunks/Breadcrumb_BcJ_qQxb.mjs';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const clubStats = {
  yearsStrong: "5+",
  studentsHelped: "800+",
  corePrograms: "4",
  majorMilestones: "25+"
};
const keyAchievements = [
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
const didYouKnowFacts = [
  "PROGgsu was founded during the COVID-19 pandemic, proving that great communities can emerge from challenging times!",
  "We had a unique co-presidency period where Prahbir and Ethan shared leadership duties - a first in club history!",
  'Our "Holy Trinity" programs (DSA, Mocks, Competitive Programming) have helped dozens of students land internships at top tech companies.',
  "Andrew Huang, a Facebook Engineer in Residence, was our founding academic advisor who helped establish our foundation.",
  "We transformed from basic HackJams to comprehensive interview prep, revolutionizing how GSU students approach technical interviews."
];
const clubTimeline = {
  // =============================================================================
  // FOUNDING ERA (March 2020 - Spring 2021)
  // Jenny Liu's visionary leadership establishes PROGgsu during the pandemic
  // =============================================================================
  founding: [
    {
      date: "March 2020",
      title: "Plot Twist: Pandemic Sparks Programming Paradise",
      description: "Jenny Liu founded PROGgsu during the global pandemic, creating GSU's premier programming community from the ground up.",
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
      description: "Launched the three core programs that would define PROGgsu: Data Structures & Algorithms prep, mock interviews, and competitive programming.",
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
      description: "Discord community exploded to over 400 active members, establishing PROGgsu as the go-to programming community at GSU.",
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
      description: "Beethoven (2nd President) transformed PROGgsu from basic HackJams to comprehensive technical interview preparation, revolutionizing the club's impact.",
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
      description: "Joey Zhang doesn't just lead—he rebrands, reboots, and re-energizes! As the 5th President, Joey launches a full-on club renaissance: new look, new vibe, and a tidal wave of student activity. If there's a spark of energy on campus, it's probably Joey lighting the fire. The most proactive president yet—PROGgsu's future is now running on pure caffeine and Joey's vision.",
      type: "milestone"
    },
    {
      date: "2025",
      title: "The Rebirth: Ctrl+Alt+Refresh",
      description: "PROGgsu gets a glow-up! New website, fresh branding, and a total event overhaul. It's not just a rebrand—it's a full system reboot. Members are still trying to figure out if they joined a club or accidentally walked into a tech startup. Welcome to the new era, where even the logo has more energy!",
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

const $$History = createComponent(($$result, $$props, $$slots) => {
  const timelineEvents = [
    // Founding Era Events
    ...clubTimeline.founding.map((event) => ({
      ...event,
      details: [
        // Add some contextual details based on the event
        ...event.title.includes("Founded") ? [
          "Founded by Jenny Liu during COVID-19 pandemic",
          "Andrew Huang (Facebook EIR) became founding academic advisor",
          "Established founding team with key members",
          "Built community from a vision during unprecedented times"
        ] : event.title.includes("Structured Events") ? [
          "CS Jeopardy became a flagship event",
          "Technical interview prep launched",
          "Resume workshops drew 25+ attendees",
          "Consistent weekly programming established"
        ] : event.title.includes("Registration") ? [
          "Began official university recognition process",
          "Charter development initiated",
          "PIN registration completed",
          "Foundation for official status laid"
        ] : [
          "Significant milestone in club development",
          "Community impact and growth achieved",
          "Foundation building activities completed"
        ]
      ],
      milestone: event.type === "founding" || event.type === "milestone"
    })),
    // Early Development Events  
    ...clubTimeline.earlyDevelopment.map((event) => ({
      ...event,
      details: [
        ...event.title.includes("Charter") ? [
          "Achieved official RSO (Registered Student Organization) status",
          "Secured university recognition and support",
          "Established formal organizational structure",
          "Gained access to campus resources and funding"
        ] : event.title.includes("Programming") ? [
          "Weekly programming challenges implemented",
          "Study groups for data structures and algorithms",
          "Peer learning and collaboration emphasized",
          "Technical skill development prioritized"
        ] : event.title.includes("Community") ? [
          "Discord server established as central hub",
          "Regular member engagement activities",
          "Mentorship programs launched",
          "Inclusive community culture developed"
        ] : [
          "Important development milestone achieved",
          "Community growth and engagement increased",
          "Programming focus strengthened"
        ]
      ],
      milestone: event.type === "milestone"
    })),
    // Growth Era Events
    ...clubTimeline.growth.map((event) => ({
      ...event,
      details: [
        ...event.title.includes("Holy Trinity") ? [
          "Data Structures & Algorithms prep launched",
          "Mock technical interviews introduced",
          "Competitive programming events established",
          "Comprehensive technical skill development"
        ] : event.title.includes("Recognition") ? [
          "SAFC (Student Activity Fee Committee) funding secured",
          "Official university partnership established",
          "Campus programming organization leadership",
          "Resources and support systems gained"
        ] : event.title.includes("400+") ? [
          "Discord community grew to 400+ active members",
          "Regular weekly programming activities",
          "Strong peer learning network established",
          "Campus programming community leadership"
        ] : [
          "Significant growth milestone achieved",
          "Programming community impact expanded",
          "Technical programs strengthened"
        ]
      ],
      milestone: event.type === "milestone" || event.type === "achievement"
    })),
    // Current Era Events
    ...clubTimeline.currentEra.map((event) => ({
      ...event,
      details: [
        ...event.title.includes("Beethoven") ? [
          "2nd President leadership transition",
          "Transformed club from HackJams to interview prep",
          "Expanded Discord to 400+ members",
          "Established competitive programming focus"
        ] : event.title.includes("Ethan") ? [
          "3rd President during Fall 2023",
          "Proved that skateboarding is indeed a presidential specialty",
          "Demonstrated that even club leaders aren't immune to plot twists",
          "Left a memorable (if brief) mark on progsu history"
        ] : event.title.includes("Prahbir") ? [
          "4th President who stepped in during Fall 2023",
          "Demonstrated leadership during challenging transition",
          "Ensured club continuity and stability",
          "Led club through to 2025 with dedication"
        ] : event.title.includes("Joey") ? [
          "5th President leading club into the future",
          "Building on legacy of 4 previous presidents",
          "Continued innovation and community building",
          "Leading progsu into its next chapter"
        ] : event.title.includes("Five-President") || event.title.includes("Legacy") ? [
          "5+ years of continuous operation",
          "Successful leadership transitions through challenges: Jenny \u2192 Beethoven \u2192 Ethan \u2192 Prahbir \u2192 Joey",
          "Proven resilience and adaptability",
          "Strong foundation for future growth"
        ] : [
          "Current era milestone achieved",
          "Leadership and community growth",
          "Continued programming excellence"
        ]
      ],
      milestone: event.type === "milestone" || event.type === "achievement"
    }))
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "History - progsu", "description": "Discover the journey of progsu from its founding to today. Explore our milestones, achievements, and the growth of GSU's programming community.", "data-astro-cid-tal57otx": true }, { "breadcrumb": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "breadcrumb" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="mb-6 mt-2" data-astro-cid-tal57otx> <nav class="flex items-center gap-2 text-white/80 text-sm" aria-label="Breadcrumb" data-astro-cid-tal57otx> <a href="/" class="hover:underline" data-astro-cid-tal57otx>Home</a> <span data-astro-cid-tal57otx>/</span> ${renderComponent($$result3, "Breadcrumb", $$Breadcrumb, { "title": "History", "data-astro-cid-tal57otx": true })} </nav> </div> ` })}`, "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Section", $$Section, { "title": "Our Journey", "className": "pt-16", "data-astro-cid-tal57otx": true }, { "default": ($$result3) => renderTemplate` <div class="max-w-7xl mx-auto" data-astro-cid-tal57otx> <div class="text-center mb-12" data-astro-cid-tal57otx> <p class="text-white/80 text-lg mt-6 max-w-3xl mx-auto leading-relaxed" data-astro-cid-tal57otx>
From a visionary idea during the COVID-19 pandemic to a thriving community with proven programs, 
          discover how progsu has evolved since March 2020 to become Georgia State University's premier programming organization.
</p> </div> <!-- Stats Cards Section --> <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10" data-astro-cid-tal57otx> <div class="text-center p-4 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-xl glass-card" data-astro-cid-tal57otx> <div class="text-2xl font-bold text-white mb-1" data-astro-cid-tal57otx>${clubStats.yearsStrong}</div> <div class="text-xs text-white/60" data-astro-cid-tal57otx>Years Strong</div> </div> <div class="text-center p-4 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-xl glass-card" data-astro-cid-tal57otx> <div class="text-2xl font-bold text-white mb-1" data-astro-cid-tal57otx>${clubStats.studentsHelped}</div> <div class="text-xs text-white/60" data-astro-cid-tal57otx>Students Helped</div> </div> <div class="text-center p-4 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-xl glass-card" data-astro-cid-tal57otx> <div class="text-2xl font-bold text-white mb-1" data-astro-cid-tal57otx>${clubStats.corePrograms}</div> <div class="text-xs text-white/60" data-astro-cid-tal57otx>Core Programs</div> </div> <div class="text-center p-4 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-xl glass-card" data-astro-cid-tal57otx> <div class="text-2xl font-bold text-white mb-1" data-astro-cid-tal57otx>${clubStats.majorMilestones}</div> <div class="text-xs text-white/60" data-astro-cid-tal57otx>Major Milestones</div> </div> </div> <!-- Separator --> <div class="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-10" data-astro-cid-tal57otx></div> <!-- Key Achievements | Did You Know Section --> <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16" data-astro-cid-tal57otx> <!-- Key Achievements --> <div class="rounded-2xl border border-white/15 bg-white/[0.04] backdrop-blur-2xl p-8 glass-card shadow-xl" data-astro-cid-tal57otx> <h3 class="text-2xl font-bold text-white mb-6 tracking-tight" data-astro-cid-tal57otx>Key Achievements</h3> <div class="space-y-5" data-astro-cid-tal57otx> ${keyAchievements.map((item) => {
    const colorClasses = {
      purple: "bg-purple-400",
      blue: "bg-blue-400",
      green: "bg-green-400",
      amber: "bg-amber-400",
      red: "bg-red-400",
      cyan: "bg-cyan-400"
    };
    const circleClass = colorClasses[item.color] || "bg-white";
    return renderTemplate`<div class="flex items-start gap-4" data-astro-cid-tal57otx> <div${addAttribute(`w-3 h-3 rounded-full mt-2 ${circleClass}`, "class")} data-astro-cid-tal57otx></div> <div data-astro-cid-tal57otx> <h4 class="text-white font-semibold text-lg leading-snug" data-astro-cid-tal57otx>${item.title}</h4> <p class="text-white/70 text-base leading-relaxed" data-astro-cid-tal57otx>${item.description}</p> </div> </div>`;
  })} </div> </div> <!-- Did You Know? --> <div class="rounded-2xl border border-white/15 bg-white/[0.04] backdrop-blur-2xl p-8 glass-card shadow-xl" data-astro-cid-tal57otx> <h3 class="text-2xl font-bold text-white mb-6 tracking-tight" data-astro-cid-tal57otx>Did You Know?</h3> <div class="space-y-5" data-astro-cid-tal57otx> ${didYouKnowFacts.map((fact) => renderTemplate`<div class="p-5 rounded-xl bg-white/[0.07] border border-white/15" data-astro-cid-tal57otx> <p class="text-white/90 text-base leading-relaxed" data-astro-cid-tal57otx>${fact}</p> </div>`)} </div> </div> </div> <!-- Separator --> <div class="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-16" data-astro-cid-tal57otx></div> <!-- Timeline Section --> <div class="mb-12" data-astro-cid-tal57otx> <h2 class="text-2xl font-bold text-white text-center mb-8 glow-pulse-title" data-astro-cid-tal57otx>Our Timeline</h2> <!-- Vertical Timeline Container --> <div class="relative px-4 md:px-0" data-astro-cid-tal57otx> <!-- Central Timeline Line - responsive positioning --> <div class="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 bg-gradient-to-b from-white/30 via-white/20 to-white/30 rounded-full" style="height: calc(100% - 2rem); top: 1rem;" data-astro-cid-tal57otx></div> <!-- Timeline Events --> ${timelineEvents.map((event, index) => {
    const staggerPatterns = [
      "items-center mb-12",
      // Standard spacing
      "items-center -mt-12 mb-8",
      // Significant overlap
      "items-center mt-16 mb-6",
      // Large gap down
      "items-center -mt-8 mb-10",
      // Medium overlap
      "items-center mt-20 mb-4",
      // Very large gap
      "items-center -mt-16 mb-8",
      // Large overlap
      "items-center mt-6 mb-14"
      // Small gap, larger bottom
    ];
    const staggerClass = staggerPatterns[index % staggerPatterns.length];
    return renderTemplate`<div${addAttribute(`relative flex ${staggerClass} timeline-entrance md:${index % 2 === 0 ? "justify-start" : "justify-end"} justify-start`, "class")} data-astro-cid-tal57otx> <!-- Timeline Dot - responsive positioning --> <div${addAttribute(`absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-20 w-4 h-4 rounded-full border-2 border-black ${event.milestone ? "bg-white shadow-lg shadow-white/30" : "bg-white/60 shadow-lg shadow-white/20"} transition-all duration-300 hover:scale-125`, "class")} data-astro-cid-tal57otx></div> <!-- Event Card - responsive width and positioning --> <div${addAttribute(`pl-16 md:pl-0 w-full md:w-5/12 group ${index % 2 === 0 ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"}`, "class")} data-astro-cid-tal57otx> <div class="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:border-white/20 timeline-card glass-card" data-astro-cid-tal57otx> <!-- Glass effect overlay --> <div class="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" data-astro-cid-tal57otx></div> <!-- Card Header --> <div class="relative px-4 py-3 bg-gradient-to-r from-white/[0.08] to-white/[0.04] backdrop-blur-sm border-b border-white/10" data-astro-cid-tal57otx> <div class="flex items-center justify-between" data-astro-cid-tal57otx> <span class="text-sm font-bold text-white/90 uppercase tracking-wide" data-astro-cid-tal57otx> ${event.date} </span> <div class="w-2 h-2 rounded-full bg-white/40" data-astro-cid-tal57otx></div> </div> </div> <!-- Card Content --> <div class="relative p-4 z-10" data-astro-cid-tal57otx> <h3 class="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-white/90 transition-colors duration-300" data-astro-cid-tal57otx> ${event.title} ${event.milestone && renderTemplate`<span class="ml-2 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-white/10 border border-white/20 text-white/80" data-astro-cid-tal57otx>
Milestone
</span>`} </h3> <p class="text-white/70 text-sm mb-4 leading-relaxed" data-astro-cid-tal57otx> ${event.description} </p> <!-- Event Details --> <div class="space-y-2" data-astro-cid-tal57otx> <h4 class="text-xs text-white/60 uppercase tracking-wide font-medium" data-astro-cid-tal57otx>Highlights</h4> <ul class="space-y-1" data-astro-cid-tal57otx> ${event.details.map((detail) => renderTemplate`<li class="flex items-start gap-2 text-xs text-white/60" data-astro-cid-tal57otx> <span class="text-white/40 mt-0.5" data-astro-cid-tal57otx>•</span> <span data-astro-cid-tal57otx>${detail}</span> </li>`)} </ul> </div> </div> <!-- Connection Line to Timeline - responsive --> <div${addAttribute(`absolute top-6 left-0 -translate-x-full w-8 h-px bg-gradient-to-l from-white/20 to-transparent md:${index % 2 === 0 ? "right-0 translate-x-full" : "left-0 -translate-x-full"} md:w-12 md:bg-gradient-to-r md:${index % 2 === 0 ? "from-white/20 to-transparent" : "from-transparent to-white/20"}`, "class")} data-astro-cid-tal57otx></div> <!-- Subtle tint effect --> <div class="absolute inset-0 bg-gradient-to-br from-blue-500/[0.02] via-transparent to-purple-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" data-astro-cid-tal57otx></div> </div> </div> </div>`;
  })} </div> </div> <!-- Separator --> <div class="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-10" data-astro-cid-tal57otx></div> <!-- Future Vision --> <div class="text-center py-8 px-6 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl glass-card" data-astro-cid-tal57otx> <h3 class="text-2xl font-bold text-white mb-3 glow-pulse-title" data-astro-cid-tal57otx>
The Future is Bright
</h3> <p class="text-white/70 text-base mb-5 max-w-3xl mx-auto leading-relaxed" data-astro-cid-tal57otx>
As we continue to grow, our mission remains the same: fostering an inclusive environment where every student 
          can learn, create, and thrive in the world of programming. Join us as we write the next chapter of our story!
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center" data-astro-cid-tal57otx> <a href="/members" class="px-8 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-white/20 hover:border-white/30" data-astro-cid-tal57otx>
Meet Our Team
</a> <a href="/events" class="px-8 py-3 rounded-lg border border-white/20 text-white hover:bg-white/5 font-medium transition-all duration-300 hover:scale-105 backdrop-blur-sm" data-astro-cid-tal57otx>
Upcoming Events
</a> </div> </div> </div> ` })} ` })} `;
}, "/Users/joey/Desktop/ProgClubSite-1/src/pages/history.astro", void 0);

const $$file = "/Users/joey/Desktop/ProgClubSite-1/src/pages/history.astro";
const $$url = "/history";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$History,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
