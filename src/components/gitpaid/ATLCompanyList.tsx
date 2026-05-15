import { useState } from "react";
import { companies } from "@/content/gitpaid/data/atl-companies";

type Season = "fall2026" | "spring2027" | "summer2027";

const SEASON_LABELS: Record<Season, string> = {
  fall2026:   "Fall 2026",
  spring2027: "Spring 2027",
  summer2027: "Summer 2027",
};

const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

function isOpenNow(season: { opens: { month: number; year: number }; closes: { month: number; year: number } }): boolean {
  const now = new Date();
  const today = now.getFullYear() * 12 + (now.getMonth() + 1);
  const open  = season.opens.year  * 12 + season.opens.month;
  const close = season.closes.year * 12 + season.closes.month;
  return today >= open && today <= close;
}

function formatWindow(season: { opens: { month: number; year: number }; closes: { month: number; year: number } }): string {
  return `Opens ${MONTHS[season.opens.month - 1]} ${season.opens.year} – ${MONTHS[season.closes.month - 1]} ${season.closes.year}`;
}

export default function ATLCompanyList() {
  const [active, setActive] = useState<Season>("fall2026");

  return (
    <div>
      <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
        {(Object.keys(SEASON_LABELS) as Season[]).map((s) => (
          <button
            key={s}
            onClick={() => setActive(s)}
            style={{
              padding: "0.375rem 0.875rem",
              borderRadius: "9999px",
              fontSize: "0.875rem",
              fontWeight: 500,
              border: "1px solid",
              cursor: "pointer",
              background: active === s ? "#7c3aed" : "transparent",
              color: active === s ? "#fff" : "#9ca3af",
              borderColor: active === s ? "#7c3aed" : "#374151",
            }}
          >
            {SEASON_LABELS[s]}
          </button>
        ))}
      </div>

      {companies.map((company, i) => {
        const seasonData = company.seasons[active];
        const open = seasonData ? isOpenNow(seasonData) : false;
        return (
          <div key={company.name}>
            {i > 0 && <hr style={{ borderColor: "#1f2937", margin: "1.25rem 0" }} />}
            <div style={{ opacity: seasonData ? 1 : 0.4 }}>
              <p style={{ fontWeight: 700, marginBottom: "0.25rem" }}>
                {company.name}
                {company.exec && (
                  <span style={{ color: "#7c3aed", marginLeft: "0.5rem" }}>★</span>
                )}
                {open && (
                  <span
                    style={{
                      marginLeft: "0.625rem",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      padding: "0.125rem 0.5rem",
                      borderRadius: "9999px",
                      background: "#052e16",
                      color: "#4ade80",
                      border: "1px solid #166534",
                      verticalAlign: "middle",
                    }}
                  >
                    Open Now
                  </span>
                )}
              </p>
              <p style={{ color: "#d1d5db", marginBottom: "0.25rem" }}>
                {company.description}
              </p>
              <p style={{ color: "#9ca3af", fontSize: "0.875rem", marginBottom: "0.375rem" }}>
                <em>
                  {seasonData ? formatWindow(seasonData) : "No timeline data for this season"}
                </em>
              </p>
              <a
                href={company.careersUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#7c3aed", fontSize: "0.875rem" }}
              >
                View careers →
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
