---
title: "Competitor Teardown"
slug: competitor-teardown
category: business
date: 2026-11-01
excerpt: "Compares competitors on positioning, pricing, proof, and gaps using public pages only, and separates observed facts from inference."
creator: "F9XR Team"
license: "MIT"
version: "1.0.0"
tags: [competitors, positioning, pricing, strategy, research]
usage: |
  Use the competitor-teardown skill on these three sites. Compare positioning,
  pricing, proof, and gaps, and mark what is observed versus inferred.
skill_file: |
  ---
  name: competitor-teardown
  description: Compare competitors on positioning, pricing, proof, and gaps from public pages, separating observed facts from inference.
  ---

  # Competitor Teardown

  Use this skill when a team needs an honest comparison of competitors, not a
  feature grid copied from marketing pages.

  ## Inputs

  - The competitors to compare, with URLs
  - Your own product and the audience you serve
  - The decision this teardown supports
  - Any access limits, such as pages behind a demo request

  Use public pages only unless the user supplies authorised material. Do not
  create accounts, request demos, or guess at private pricing.

  ## Method

  1. Record what each page actually says before interpreting it. Keep quotes
     short and exact.
  2. Compare four axes:
     - **Positioning.** Who they say it is for, and the problem they name.
     - **Pricing.** Public tiers, limits, and what triggers an upgrade.
     - **Proof.** Case studies, numbers, logos, guarantees, and whether the
       proof is verifiable.
     - **Gaps.** What the page does not address, and who that leaves out.
  3. Mark every line as observed or inferred. Observed means it is on the page.
     Inferred means you concluded it.
  4. Identify the claim all competitors make. That claim is no longer a
     differentiator.
  5. Find one thing your product can say that is true, specific, and not
     already repeated by everyone else.

  ## Output shape

  - **Comparison table.** Competitor, audience, promise, pricing model, proof.
  - **What is table stakes.** The claims everyone makes.
  - **Where each competitor is weak.** With the evidence for the weakness.
  - **Observed versus inferred.** A short list of the inferences.
  - **The opening.** One positioning sentence your product can defend.

  ## Rules

  - Never invent pricing, customer counts, funding, or roadmap details.
  - Never present an inference as a quote or a fact.
  - Never claim a competitor is failing without evidence.
  - Do not compare on features that none of the public pages mention.
  - Keep the comparison useful for a decision, not exhaustive.
  - Date the research. Pricing and positioning change.

  ## Done test

  A reader can point to the exact page behind every observed claim, and can
  separate the team's judgement from the competitor's words.
related_skills: [pricing, copywriting, marketing-skills]
---

This skill is deliberately narrow. It compares public positioning, pricing, proof, and gaps, and it labels inference so the teardown does not quietly become a set of assumptions.

The strongest output is usually the table stakes section. Once every competitor promises the same thing, the team can stop repeating it and look for a claim that is both true and unused.

Works in any `SKILL.md` agent. Use it with a search MCP server for faster source collection, but verify every claim against the page itself.
