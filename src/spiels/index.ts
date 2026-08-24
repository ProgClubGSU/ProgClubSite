export type Spiel = {
  slug: string;
  title: string;
  /** ISO date, YYYY-MM-DD */
  date: string;
  description?: string;
  /** The recording. Watched first. */
  videoUrl: string;
  /** Mirror of the recording, for when youtube is blocked or dead. */
  videoBackupUrl?: string;
  /** The deck. Presented second. */
  canvaUrl: string;
};

export const SPIELS: Spiel[] = [
  {
    slug: "fall-2026-intro",
    title: "fall 2026 intro",
    date: "2026-08-23",
    description:
      "what progsu is, what we build, and how to get involved this semester.",
    videoUrl: "https://www.youtube.com/watch?v=OltQSnt5CHc",
    videoBackupUrl:
      "https://drive.google.com/file/d/11iR9mNiVXWfvM0o_uMK96honc8hVA0QU/view?usp=drive_link",
    canvaUrl:
      "https://www.canva.com/design/DAHRQr3xU0Q/-ZV_TJ9AjUJY-t0vh9KHhA/view",
  },
];

/** Newest first. */
export function sortedSpiels(): Spiel[] {
  return [...SPIELS].sort((a, b) => b.date.localeCompare(a.date));
}

/** The spiel the page leads with. */
export function latestSpiel(): Spiel | undefined {
  return sortedSpiels()[0];
}

/** Parses the ISO date without timezone drift. */
export function formatSpielDate(date: string): string {
  const [year, month, day] = date.split("-").map(Number);
  if (!year || !month || !day) return date;
  return new Date(year, month - 1, day)
    .toLocaleDateString("en-us", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
    .toLowerCase();
}
