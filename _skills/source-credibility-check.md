---
title: "Source Credibility Check"
title_tag: "Source Credibility Check — AI agent skill for Research"
slug: source-credibility-check
category: research
date: 2026-11-12
excerpt: "Grades the sources behind a claim: who is really saying it, whether they could know, what they gain, and how much of the claim survives when the weakest sources are removed."
creator: "F9XR Team"
license: "MIT"
version: "1.0.0"
tags: [research, sources, credibility, verification, evidence, fact-checking]
usage: |
  Check the sources behind this claim. For each one: who published it, could
  they know, what do they gain, and is it primary or repeating someone else.
  Then tell me what is left of the claim if I remove the weak sources.

  Claim and sources:
  [paste claim, links, or quoted text]
related_skills: [research-synthesis, ai-slop-scan, data-story]
skill_file: |
  ---
  name: source-credibility-check
  description: Grade sources behind a claim by provenance, competence, interest and independence, then state how much of the claim survives without the weakest ones. Use when the user wants to verify a claim, check citations, or judge whether a source can be trusted.
  ---

  # Source Credibility Check

  Most bad research is not invented, it is circular. Ten articles that all
  cite the same unsourced paragraph look like ten sources.

  ## Inputs

  Ask for, or derive:

  - The exact claim, in one sentence, with its numbers and dates
  - Where the claim came from: an article, a report, a deck, a model output
  - Every source offered in support, with links or citations
  - What decision depends on the claim, and how much being wrong costs
  - The time window: does the claim need to be current?

  If the claim is vague, fix the wording first. "Most teams struggle with X"
  cannot be checked; "62% of teams report X in 2025" can.

  ## Method

  1. **Decompose.** Split the claim into the parts that need separate
     support: a number, a causal link, a trend, a quote.
  2. **Trace to origin.** Follow each citation until it stops. Note where it
     stops, because that is the real source.
  3. **Test independence.** Two sources that share an author, an owner, a
     funder, or a press release are one source.
  4. **Grade each source** on four axes: provenance, competence, interest,
     independence.
  5. **Check the fit.** A source can be excellent and still not support this
     claim, if it measured something else, a different population, or a
     different year.
  6. **Re-score the claim** with the weak sources removed. State plainly what
     remains.

  ## Grading axes

  - **Provenance.** Named author, method, raw data available, published where
    corrections happen. Anonymous aggregation with no method scores lowest.
  - **Competence.** Did they have access to the data, the expertise, and the
    sample size to know this? A vendor survey of their own customers is weak
    evidence about a market.
  - **Interest.** What do they gain if the reader believes it? A study funded
    by the beneficiary is not worthless, but it needs independent
    corroboration.
  - **Independence.** Is this original reporting or measurement, or a
    rewrite of someone else's? Repeat coverage adds no weight.

  ## Output format

  ```
  Claim (restated precisely)
  ...

  Sources
  | # | Source | Origin | Provenance | Competence | Interest | Independent |
  | 1 | ...    | ...    | strong/partial/weak | ... | ... | yes/no |

  Circularity
  - sources 2, 4 and 5 trace back to source 1

  Fit
  - source measures ..., claim says ...: supports / partly / does not

  Verdict
  - with all sources: ...
  - without weak sources: ...
  - strongest surviving version of the claim: ...

  What would settle it
  - the check, dataset, or interview that would move this from medium to high
  ```

  ## Rules

  - Never grade a source without saying what it is evidence of.
  - A primary source can be wrong. Note method problems even when provenance
    is good.
  - Do not average contradictory sources. Say which is better evidence and
    why.
  - Say "unknown" rather than inferring an author's motive.
  - Numbers need a date, a population, and a definition. Without them, mark
    the number as unusable.
  - Do not soften the verdict to be agreeable. If the claim does not survive,
    say so in the first line.
---

The common failure this fixes is counting. Five articles citing one press release read as five confirmations, and a claim can travel for years on a single unreplicated number.

Grading on competence and interest separately is deliberate: a well-sourced, methodologically sound study from a party that benefits is still usable evidence, just not sufficient on its own.

Pair it with Research Synthesis once the sources are graded, and with AI Slop Scan when the text itself looks generated.
