---
title: "Customer Interview Synthesis"
slug: customer-interview-synthesis
category: research
date: 2026-11-04
excerpt: "Turns raw customer interviews into a weighted insight map with verbatim evidence, contradictions kept visible, and a short list of decisions the team can make."
creator: "F9XR Team"
license: "MIT"
version: "1.0.0"
tags: [research, interviews, synthesis, product, discovery]
usage: |
  Synthesize these interviews into themes, evidence, and decisions.

  Keep contradictions visible. Do not smooth them into one story. Quote the
  customer for every claim.

  Interviews:
  [paste transcripts or notes]
related_skills: [research-synthesis, data-story, competitor-teardown]
skill_file: |
  ---
  name: customer-interview-synthesis
  description: Synthesize customer interviews and discovery notes into themes, evidence, contradictions, and decisions. Use when the user asks to analyze interviews, find themes in user research, summarize discovery calls, build an insight map, or turn qualitative notes into product decisions.
  ---

  # Customer Interview Synthesis

  The job is not to summarize every call. It is to find the few patterns
  that survive contact with the evidence, including the evidence that
  disagrees.

  ## Workflow

  1. Read every transcript before tagging. Do not build the theme list from
     the first three calls.
  2. Tag each meaningful statement with a person, a job, and a verbatim
     quote. Keep the source attached.
  3. Cluster tags into themes. A theme needs at least two independent people.
  4. Count how many people said it, and note how strongly they said it.
  5. Keep contradictions as a separate section. Do not average them away.
  6. End with decisions the team can actually make this quarter.

  ## Tagging dimensions

  - Job to be done: what the person was trying to accomplish.
  - Trigger: what started the search.
  - Current workaround: what they do today, including spreadsheets and
    manual steps.
  - Pain: what costs time, money, trust, or status.
  - Switching force: what would make them change.
  - Objection: what stops them.
  - Language: the exact words they use for the problem.
  - Segment: role, company size, or maturity if known.

  ## Theme rules

  - Name the theme as a claim, not a topic. "Solo founders abandon setup
    before the first import" beats "Setup".
  - Attach the people and the quotes. One quote per person, more only when
    the wording changes.
  - Rate confidence: strong, mixed, weak.
  - Note the sample: how many interviews, which segments, and what is missing.
  - Separate what people said from what the team inferred.

  ## Contradictions

  List where people disagree, and say what the disagreement might depend on:
  segment, tooling, team size, or the question asked. A contradiction is a
  finding, not a problem to hide.

  ## Decision output

  For each decision, name the owner type, the evidence, and the smallest
  test. A decision without a next action is a summary.

  ## Report format

  ```
  Sample: 12 interviews, 8 solo, 4 teams.
  Top themes
  1. Claim. 7/12. Strong. Evidence: quote (person), quote (person).
  2. ...

  Contradictions
  - ...

  What we did not hear
  - ...

  Decisions
  1. Decision. Evidence. Next test. Success signal.
  ```

  Never invent a quote. Never merge two people into "customers said". If the
  notes are too thin for a theme, say so.
---

Interview synthesis goes wrong in two directions: a transcript summary that hides the pattern, or a confident story built from three loud voices. This skill keeps the person and the quote attached to every claim so the team can see the weight of the evidence.

Contradictions get their own section because they usually mark a segment difference, and that difference is often the product opportunity.

Pair it with Research Synthesis when the evidence includes reports and articles, or with Data Story Builder when the findings need a presentation.
