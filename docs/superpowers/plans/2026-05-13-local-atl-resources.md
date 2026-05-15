# Local ATL Resources Guide Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create `src/content/gitpaid/local-atl-resources.mdx` — a curated list of 16 Atlanta-area tech companies ordered by tier priority, each with a description and hiring timeline.

**Architecture:** Single MDX file in the existing gitpaid content collection. No new components or routes needed — the existing `[...slug].astro` page template renders it automatically. Company tiers are conveyed via inline text badges, not separate sections.

**Tech Stack:** Astro content collections, MDX, YAML frontmatter

---

## File Map

| Action | Path |
|--------|------|
| Create | `src/content/gitpaid/local-atl-resources.mdx` |

---

### Task 1: Create the MDX file

**Files:**
- Create: `src/content/gitpaid/local-atl-resources.mdx`

- [ ] **Step 1: Create the file with the following exact content**

```mdx
---
title: "Local ATL Resources"
description: "Atlanta-area tech companies worth targeting as a GSU CS student"
type: "career"
difficulty: "beginner"
impact: "high"
publishDate: 2026-05-13T00:00:00.000Z
lastUpdated: 2026-05-13T00:00:00.000Z
---

# Local ATL Resources

Atlanta is one of the fastest-growing tech hubs in the country — and as a GSU student, you're already in the middle of it. Local companies tend to have shorter recruiting cycles, easier access to in-person networking, and strong incentives to convert interns to full-time. The companies below are ordered by how much of an edge you have as an ATL-based student.

---

1. **The Home Depot** `[ProgSU Exec]`
   One of the world's largest home improvement retailers with a major tech hub in Atlanta; actively recruits GSU students and has a strong pipeline from intern to full-time.
   *Hiring timeline: Summer internships open Oct–Jan*

2. **Cox Automotive** `[ProgSU Exec]`
   Atlanta-based automotive services company (Kelley Blue Book, Autotrader, Manheim) with a large engineering org and a consistent track record of hiring ATL-area students.
   *Hiring timeline: Summer internships open Aug–Nov*

3. **Norfolk Southern** `[ProgSU Exec]`
   Major freight railroad company headquartered in Atlanta with a growing tech division focused on logistics, data engineering, and operations software.
   *Hiring timeline: Summer internships open Sep–Dec*

4. **FanDuel** `[ProgSU Exec]`
   Leading sports betting and fantasy sports platform with a significant Atlanta engineering hub, known for fast product cycles and competitive compensation.
   *Hiring timeline: Summer internships open Oct–Feb*

5. **Intuit** `[ProgSU Exec]`
   Financial software company (TurboTax, QuickBooks, Credit Karma) with an Atlanta office and a competitive internship program with strong return-offer rates.
   *Hiring timeline: Summer internships open Aug–Nov*

6. **BlackRock** `[ProgSU Exec]`
   World's largest asset management firm with an Atlanta tech hub focused on building and maintaining the Aladdin investment platform.
   *Hiring timeline: Summer internships open Jul–Nov*

7. **IBM** `[ProgSU Exec]`
   Global technology and consulting company with a major Atlanta presence and diverse roles spanning cloud infrastructure, AI, and enterprise consulting.
   *Hiring timeline: Summer internships open Sep–Jan*

8. **Uber** `[ProgSU Exec]`
   Ride-sharing and delivery platform with an Atlanta engineering office offering software engineering and data science roles.
   *Hiring timeline: Summer internships open Sep–Dec*

9. **Google** `[FAANG]`
   Operates a large Atlanta office with engineering and business roles; one of the most competitive targets, but GSU's proximity to the office gives you a real networking edge.
   *Hiring timeline: Summer internships open Aug–Oct*

10. **Amazon** `[FAANG]`
    Major ATL presence through AWS and retail tech operations; SDE internships and new grad roles are among the first to open each cycle — apply early.
    *Hiring timeline: Summer internships open Aug–Oct*

11. **Microsoft** `[FAANG]`
    Atlanta office focused on Azure and enterprise software, with structured campus recruiting and a well-regarded internship program.
    *Hiring timeline: Summer internships open Sep–Nov*

12. **Meta** `[FAANG]`
    Atlanta office focused on engineering and operations; internships are highly competitive but offer top-tier compensation and a strong conversion rate.
    *Hiring timeline: Summer internships open Sep–Nov*

13. **Delta Air Lines** `[Fortune 500]`
    Atlanta-based airline with a fast-growing internal tech division working on ML, data engineering, and mobile development for one of the world's busiest hubs.
    *Hiring timeline: Summer internships open Oct–Jan*

14. **Global Payments** `[Fortune 500]`
    Fintech company headquartered in Atlanta with software engineering, data, and cybersecurity roles across its payments infrastructure.
    *Hiring timeline: Summer internships open Oct–Feb*

15. **NCR Voyix** `[Fortune 500]`
    ATL-based enterprise tech company powering retail and banking software; actively recruits from GSU for software engineering and data roles.
    *Hiring timeline: Summer internships open Sep–Jan*

16. **UPS** `[Fortune 500]`
    Logistics giant with a large Atlanta tech team focused on supply chain automation, data engineering, and mobile development.
    *Hiring timeline: Summer internships open Oct–Feb*
```

- [ ] **Step 2: Verify the file is in the right location**

```bash
ls src/content/gitpaid/local-atl-resources.mdx
```

Expected: file listed with no error.

- [ ] **Step 3: Start the dev server and verify the guide renders**

```bash
npm run dev
```

Navigate to `http://localhost:4321/gitpaid` and confirm "Local ATL Resources" appears in the guide list. Click through and verify:
- Title and description display correctly
- All 16 company entries render
- Backtick badges render inline
- Numbered list is properly formatted
- Navigation sidebar shows the guide

- [ ] **Step 4: Stop the dev server and commit**

```bash
git add src/content/gitpaid/local-atl-resources.mdx
git commit -m "feat: add local ATL resources guide to gitpaid"
```
