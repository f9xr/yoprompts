---
title: "Competitive Intel Brief"
slug: competitive-intel-brief
category: research
date: 2026-11-12
excerpt: "Turns public competitor signals into a dated brief that separates what is documented from what is inferred, with the questions only a customer call can answer."
creator: "F9XR Team"
license: "MIT"
version: "1.0.0"
tags: [research, competitive analysis, market, intelligence, product, strategy]
usage: |
  Build a competitive intel brief on these companies from public sources. Mark
  every claim as documented, inferred, or unknown, date each fact, and tell me
  what only a customer call could answer.

  Competitors, our product, and the decision this feeds:
  [paste names, links, pricing pages, changelogs]
related_skills: [competitor-teardown, pricing, research-synthesis]
skill_file: |
  ---
  name: competitive-intel-brief
  description: Assemble a dated competitive intelligence brief from public signals, separating documented fact from inference and naming the gaps that need primary research. Use when the user asks for competitor research, a market landscape, or a competitive positioning input.
  ---

  # Competitive Intel Brief

  Competitor research goes wrong in two ways: it treats marketing pages as
  fact, and it produces a document nobody dates. Fix both.

  ## Inputs

  Ask for, or derive:

  - The competitors, by exact product name
  - Our product and the segment we sell into
  - The decision this feeds: pricing, positioning, roadmap, sales enablement
  - Which sources the user can legally and ethically use
  - How current the answer must be
  - What the user already believes, so the brief can test it

  If the decision is missing, stop and ask. A landscape with no decision
  behind it becomes a document that is updated once and never read.

  ## Method

  1. **Source list before findings.** For each competitor: site, pricing page,
     docs, changelog, status page, public repo, job posts, filings, review
     sites, conference talks. Note the date you looked.
  2. **Harvest facts.** Every fact gets a source URL and a date. If a page has
     no date, say "undated" rather than guessing.
  3. **Separate the three registers.** Documented: it is on the record.
     Inferred: it follows from evidence, with the reasoning shown. Unknown:
     nobody has said.
  4. **Compare on axes the buyer uses**, not on a feature count. Pricing
     model, packaging, time to first value, integration surface, support
     model, and the claim they lead with.
  5. **Read the trajectory.** Changelogs, job posts, and pricing changes say
     more about direction than the homepage does.
  6. **Name the gaps.** List what only a customer call, a trial, or a lost
     deal review can answer.

  ## Checks

  - Prices include currency, billing period, seat or usage basis, and the date
  - Enterprise tiers are marked "contact sales", not estimated
  - Features are marked available, beta, or announced
  - Reviews are quoted with source and date, not as an average score
  - Anything from the competitor's own marketing is labelled as a claim
  - Absence of evidence is not evidence of absence: "no public pricing" is
    not "expensive"
  - No scraping behind a login, no fake accounts, no confidential material

  ## Output format

  ```
  As of: 2026-11-12

  The short version
  - three sentences a seller could repeat

  Competitor: <name>
  - Positioning claim: ... (source, date)
  - Pricing: ... (source, date)
  - Recent moves: ... (source, date)
  - Strengths: ... (documented/inferred)
  - Weaknesses: ... (documented/inferred)

  Where we win and lose
  - axis, our position, theirs, evidence

  Inferred, not documented
  - inference, evidence, what would confirm it

  Unknown
  - question, why it matters, how to answer it

  Sources
  - url, date accessed
  ```

  ## Rules

  - No fact without a source and a date.
  - No comparison table that scores features you have not verified.
  - Never present a competitor's marketing claim as their capability.
  - Do not estimate a private price and label it as pricing.
  - Say when two competitors are the same company, or the same product under
    a new name.
  - Keep the brief short enough to be re-dated and reused next quarter.
---

The dating discipline is the point. A brief with dates can be trusted at month six because the reader can see what has aged; a brief without them is either silently stale or re-researched from scratch.

Keeping inference visible is the second discipline. Sales teams repeat briefs as fact, so anything inferred has to be labelled where it is written, not in an appendix.

Pair it with Pricing for the packaging comparison and Research Synthesis when several sources disagree about the same market.
