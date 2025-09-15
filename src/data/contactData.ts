import { DISCORD_LINK, GITHUB_LINK, INSTAGRAM_LINK, LINKEDIN_LINK} from "@/consts";

// Define the structure for contact data

export interface ContactMethod {
  platform: string;
  handle: string;
  url: string;
  icon: string;
  description: string;
  primary?: boolean;
}

export interface ContactInfo {
  socialMedia: ContactMethod[];
  officialChannels: ContactMethod[];
}

export const contactData: ContactInfo = {
  socialMedia: [
    {
      platform: "Discord",
      handle: "progsu",
      url: DISCORD_LINK, 
      icon: "discord",
      description: "Join our community chat",
      primary: true
    },
    {
        platform: "Instagram",
        handle: "@progclubgsu",
        url: INSTAGRAM_LINK,
        icon: "instagram",
        description: "Follow us on Instagram",
        primary: false

    },
    {
        platform: "LinkedIn",
        handle: "Prog Club GSU",
        url: LINKEDIN_LINK,
        icon: "linkedin",
        description: "Connect with us on LinkedIn",
        primary: false
    },
    {
        platform: "GitHub",
        handle: "ProgClubGSU",
        url: GITHUB_LINK,
        icon: "github",
        description: "Check out our repositories on GitHub",
        primary: false
    }
  ],
  officialChannels: []
};