const SITE_TITLE = "progsu";
const SITE_DESCRIPTION = "Georgia State University's Programming Club - Join us for coding, events, and community!";
const ABOUT_ME = "progsu is a student-run organization at Georgia State University dedicated to coding, learning, and building a supportive tech community. We host workshops, hackathons, and social events for all skill levels!";
const DISCORD_LINK = "https://discord.gg/BgKg9gskM2";
const NAV_LINKS = [
  {
    title: "Events"
  },
  {
    title: "Resources"
  },
  {
    title: "About",
    children: [
      {
        title: "Members"
      },
      {
        title: "History"
      }
    ]
  },
  {
    title: "Join",
    href: "interest"
  }
];

export { ABOUT_ME as A, DISCORD_LINK as D, NAV_LINKS as N, SITE_TITLE as S, SITE_DESCRIPTION as a };
