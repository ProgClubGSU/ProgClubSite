export type Spiel = {
  slug: string;
  title: string;
  /** ISO date, YYYY-MM-DD */
  date: string;
  canvaUrl: string;
  description?: string;
};

export const SPIELS: Spiel[] = [
  {
    slug: "fall-2026-intro",
    title: "fall 2026 intro",
    date: "2026-08-23",
    canvaUrl:
      "https://www.canva.com/design/DAHRQr3xU0Q/-ZV_TJ9AjUJY-t0vh9KHhA/view",
    description:
      "What progsu is, what we build, and how to get involved this semester.",
  },
];

export function getSpiel(slug: string): Spiel | undefined {
  return SPIELS.find((spiel) => spiel.slug === slug);
}

/**
 * Canva view URLs become embeds by adding a valueless `embed` param.
 * Any existing query string or hash on the source URL is preserved.
 */
export function toEmbedUrl(canvaUrl: string, startSlide?: number): string {
  const [beforeHash] = canvaUrl.split("#");
  const [path, query = ""] = beforeHash.split("?");
  const params = query.split("&").filter((part) => part.length > 0);

  if (!params.some((part) => part === "embed" || part.startsWith("embed="))) {
    params.push("embed");
  }

  const base = params.length > 0 ? `${path}?${params.join("&")}` : path;
  return startSlide && startSlide > 1 ? `${base}#${startSlide}` : base;
}

/** Parses the ISO date without timezone drift. */
export function formatSpielDate(date: string): string {
  const [year, month, day] = date.split("-").map(Number);
  if (!year || !month || !day) return date;
  return new Date(year, month - 1, day).toLocaleDateString("en-us", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
