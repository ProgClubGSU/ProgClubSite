/**
 * progirls team roster.
 * Mirrors the shape of the /members card data (name, role, tags, socials, photo).
 * `role` shows each member's progsu team (matching their Fall 2026 role).
 */
export interface ProgirlsMember {
  name: string;
  role: string;
  tags: string[];
  linkedin?: string | null;
  github?: string | null;
  photo?: string;
}

export const progirlsTeam: ProgirlsMember[] = [
  {
    name: "Natasha Narine",
    role: "president",
    tags: ["leadership", "growth", "ops"],
    linkedin: "https://www.linkedin.com/in/natasha-narine",
    github: "https://github.com/natashanarine",
    photo: "/images/exec%20headshots/natasha.jpeg",
  },
  {
    name: "Temi Alajogun",
    role: "operations",
    tags: ["events", "logistics", "planning"],
    linkedin: "https://www.linkedin.com/in/temialajogun/",
    github: null,
    photo: "/images/exec%20headshots/temi.jpeg",
  },
  {
    name: "Eda Mai",
    role: "operations",
    tags: ["setup", "supplies", "execution"],
    linkedin: "https://www.linkedin.com/in/edamai/",
    github: null,
    photo: "/images/exec%20headshots/eda.png",
  },
  {
    name: "Leslie Cruz Hernandez",
    role: "operations",
    tags: ["operations", "logistics", "planning"],
    linkedin: "https://www.linkedin.com/in/lcruzh/",
    github: null,
    photo: "/images/exec%20headshots/leslie.png",
  },
  {
    name: "Cor’layshia Cooper",
    role: "operations",
    tags: ["operations", "logistics", "planning"],
    linkedin: "https://www.linkedin.com/in/corlayshiac/",
    github: null,
    photo: "/images/exec%20headshots/corlayshia.jpeg",
  },
  {
    name: "Camryn Odom",
    role: "finance",
    tags: ["budgeting", "finance", "records"],
    linkedin: "https://www.linkedin.com/in/camrynodom/",
    github: null,
  },
  {
    name: "Hanna Ibre",
    role: "growth",
    tags: ["growth", "outreach", "engagement"],
    linkedin: null,
    github: null,
    photo: "/images/exec%20headshots/hanna.jpeg",
  },
  {
    name: "Victoria Agyare",
    role: "growth",
    tags: ["growth", "outreach", "engagement"],
    linkedin: null,
    github: null,
    photo: "/images/exec%20headshots/victoria.png",
  },
];
