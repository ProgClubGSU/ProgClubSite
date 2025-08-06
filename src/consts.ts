export const SITE_TITLE = "progsu";
export const SITE_DESCRIPTION = "Georgia State University's Programming Club - Join us for coding, events, and community!";

export const KNOWN_TECH =
  `Astro,Tailwindcss,Svelte,Nextjs,Javascript,Typescript,Python,SCSS,CSS,HTML,HTMX,Astro,Tailwindcss,Svelte,Nextjs,Javascript,Typescript,Python,SCSS,CSS,HTML,HTMX`.split(
    ",",
  );
export const ABOUT_ME = "progsu is a student-run organization at Georgia State University dedicated to coding, learning, and building a supportive tech community. We host workshops, hackathons, and social events for all skill levels!";
export const GITHUB_USERNAME = "ArnavK-09";
export const QUOTE = "everyone is welcome";
// Centralized social links for easy editing
export const DISCORD_LINK = "https://discord.gg/BgKg9gskM2";
export const SOCIAL_LINKS = {
  discord: DISCORD_LINK,
  // Add more as needed, e.g.:
  // github: "https://github.com/ProgClubGSU",
  // linkedin: "https://linkedin.com/in/your-profile",
};

// Google Form URL for joining the club
export const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdIuhYbn3uP0_3k9bAF7bhtqMaQTkGQLD9-lmY6NKgrumGqXw/viewform";
export const NAV_LINKS: Array<{ title: string; href?: string; children?: Array<{ title: string; href?: string }> }> = [
  {
    title: "Events",
  },
  {
    title: "Resources",
  },
  {
    title: "About",
    children: [
      {
        title: "Members",
      },
      {
        title: "History",
      },
    ],
  },
  {
    title: "Join",
    href: GOOGLE_FORM_URL,
  },
];

// Force deployment update - July 20, 2025
export const DEPLOYMENT_VERSION = "1.0.2";
