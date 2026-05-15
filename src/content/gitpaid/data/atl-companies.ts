interface MonthYear {
  month: number; // 1–12
  year: number;
}

interface SeasonData {
  opens: MonthYear;
  closes: MonthYear;
}

interface Company {
  name: string;
  exec: boolean;
  description: string;
  careersUrl: string;
  seasons: {
    fall2026?: SeasonData;
    spring2027?: SeasonData;
    summer2027?: SeasonData;
  };
}

export const companies: Company[] = [
  // ProgSU Exec tier
  {
    name: "The Home Depot",
    exec: true,
    description:
      "One of the world's largest home improvement retailers with a major tech hub in Atlanta; actively recruits GSU students and has a strong pipeline from intern to full-time.",
    careersUrl: "https://careers.homedepot.com",
    seasons: {
      fall2026:   { opens: { month: 2, year: 2026 }, closes: { month: 5, year: 2026 } },
      spring2027: { opens: { month: 8, year: 2026 }, closes: { month: 11, year: 2026 } },
      summer2027: { opens: { month: 9, year: 2026 }, closes: { month: 1, year: 2027 } },
    },
  },
  {
    name: "Cox Automotive",
    exec: true,
    description:
      "Atlanta-based automotive services company (Kelley Blue Book, Autotrader, Manheim) with a large engineering org and a consistent track record of hiring ATL-area students.",
    careersUrl: "https://jobs.coxenterprises.com/en/career-areas/technology/",
    seasons: {
      fall2026:   { opens: { month: 3, year: 2026 }, closes: { month: 6, year: 2026 } },
      summer2027: { opens: { month: 7, year: 2026 }, closes: { month: 10, year: 2026 } },
    },
  },
  {
    name: "Norfolk Southern",
    exec: true,
    description:
      "Major freight railroad company headquartered in Atlanta with a growing tech division focused on logistics, data engineering, and operations software.",
    careersUrl: "https://jobs.nscorp.com",
    seasons: {
      fall2026:   { opens: { month: 1, year: 2026 }, closes: { month: 4, year: 2026 } },
      spring2027: { opens: { month: 7, year: 2026 }, closes: { month: 10, year: 2026 } },
      summer2027: { opens: { month: 8, year: 2026 }, closes: { month: 11, year: 2026 } },
    },
  },
  {
    name: "FanDuel",
    exec: true,
    description:
      "Leading sports betting and fantasy sports platform with a significant Atlanta engineering hub, known for fast product cycles and competitive compensation.",
    careersUrl: "https://www.fanduel.com/careers",
    seasons: {
      summer2027: { opens: { month: 9, year: 2026 }, closes: { month: 2, year: 2027 } },
    },
  },
  {
    name: "Intuit",
    exec: true,
    description:
      "Financial software company (TurboTax, QuickBooks, Credit Karma) with an Atlanta office and a competitive internship program with strong return-offer rates.",
    careersUrl: "https://careers.intuit.com",
    seasons: {
      summer2027: { opens: { month: 7, year: 2026 }, closes: { month: 10, year: 2026 } },
    },
  },
  {
    name: "BlackRock",
    exec: true,
    description:
      "World's largest asset management firm with an Atlanta tech hub focused on building and maintaining the Aladdin investment platform.",
    careersUrl: "https://careers.blackrock.com",
    seasons: {
      summer2027: { opens: { month: 6, year: 2026 }, closes: { month: 10, year: 2026 } },
    },
  },
  {
    name: "IBM",
    exec: true,
    description:
      "Global technology and consulting company with a major Atlanta presence and diverse roles spanning cloud infrastructure, AI, and enterprise consulting.",
    careersUrl: "https://www.ibm.com/employment",
    seasons: {
      fall2026:   { opens: { month: 2, year: 2026 }, closes: { month: 5, year: 2026 } },
      spring2027: { opens: { month: 8, year: 2026 }, closes: { month: 11, year: 2026 } },
      summer2027: { opens: { month: 8, year: 2026 }, closes: { month: 12, year: 2026 } },
    },
  },
  {
    name: "Uber",
    exec: true,
    description:
      "Ride-sharing and delivery platform with distributed engineering teams; ATL-based students have landed roles here through remote and hybrid pipelines.",
    careersUrl: "https://www.uber.com/us/en/careers",
    seasons: {
      summer2027: { opens: { month: 8, year: 2026 }, closes: { month: 11, year: 2026 } },
    },
  },
  // FAANG tier
  {
    name: "Google",
    exec: false,
    description:
      "Operates a large Atlanta office with engineering and business roles; one of the most competitive targets, but GSU's proximity to the office gives you a real networking edge.",
    careersUrl: "https://careers.google.com",
    seasons: {
      summer2027: { opens: { month: 7, year: 2026 }, closes: { month: 9, year: 2026 } },
    },
  },
  {
    name: "Amazon",
    exec: false,
    description:
      "Major ATL presence through AWS and retail tech operations; SDE internships and new grad roles are among the first to open each cycle — apply early.",
    careersUrl: "https://www.amazon.jobs",
    seasons: {
      fall2026:   { opens: { month: 2, year: 2026 }, closes: { month: 5, year: 2026 } },
      spring2027: { opens: { month: 7, year: 2026 }, closes: { month: 10, year: 2026 } },
      summer2027: { opens: { month: 7, year: 2026 }, closes: { month: 9, year: 2026 } },
    },
  },
  {
    name: "Microsoft",
    exec: false,
    description:
      "Atlanta office focused on Azure and enterprise software, with structured campus recruiting and a well-regarded internship program.",
    careersUrl: "https://careers.microsoft.com",
    seasons: {
      summer2027: { opens: { month: 8, year: 2026 }, closes: { month: 10, year: 2026 } },
    },
  },
  {
    name: "Meta",
    exec: false,
    description:
      "ATL office is primarily sales and operations, but campus recruiting here feeds into competitive engineering internship pipelines at other locations — top-tier comp and strong conversion rates.",
    careersUrl: "https://www.metacareers.com",
    seasons: {
      summer2027: { opens: { month: 8, year: 2026 }, closes: { month: 10, year: 2026 } },
    },
  },
  // Fortune 500 tier
  {
    name: "Delta Air Lines",
    exec: false,
    description:
      "Atlanta-based airline with a fast-growing internal tech division working on ML, data engineering, and mobile development for one of the world's busiest hubs.",
    careersUrl: "https://delta.avature.net/en_US/careers",
    seasons: {
      fall2026:   { opens: { month: 2, year: 2026 }, closes: { month: 5, year: 2026 } },
      spring2027: { opens: { month: 8, year: 2026 }, closes: { month: 11, year: 2026 } },
      summer2027: { opens: { month: 9, year: 2026 }, closes: { month: 12, year: 2026 } },
    },
  },
  {
    name: "Global Payments",
    exec: false,
    description:
      "Fintech company headquartered in Atlanta with software engineering, data, and cybersecurity roles across its payments infrastructure.",
    careersUrl: "https://jobs.globalpayments.com/en/",
    seasons: {
      summer2027: { opens: { month: 9, year: 2026 }, closes: { month: 1, year: 2027 } },
    },
  },
  {
    name: "NCR Voyix",
    exec: false,
    description:
      "ATL-based enterprise tech company powering retail and banking software; actively recruits from GSU for software engineering and data roles.",
    careersUrl: "https://www.ncrvoyix.com/careers",
    seasons: {
      fall2026:   { opens: { month: 2, year: 2026 }, closes: { month: 5, year: 2026 } },
      summer2027: { opens: { month: 8, year: 2026 }, closes: { month: 12, year: 2026 } },
    },
  },
  {
    name: "UPS",
    exec: false,
    description:
      "Logistics giant with a large Atlanta tech team focused on supply chain automation, data engineering, and mobile development.",
    careersUrl: "https://www.jobs-ups.com",
    seasons: {
      fall2026:   { opens: { month: 2, year: 2026 }, closes: { month: 5, year: 2026 } },
      spring2027: { opens: { month: 7, year: 2026 }, closes: { month: 10, year: 2026 } },
      summer2027: { opens: { month: 9, year: 2026 }, closes: { month: 1, year: 2027 } },
    },
  },
];
