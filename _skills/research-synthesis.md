---
title: "Research Synthesis"
slug: research-synthesis
category: research
date: 2026-11-01
featured: true
excerpt: "Turns a stack of sources into a decision brief with claims, evidence, confidence levels, contradictions, and open questions."
creator: "F9XR Team"
license: "MIT"
version: "1.0.0"
tags: [research, synthesis, sources, analysis, brief]
usage: |
  Use the research-synthesis skill to turn these sources into a one-page
  decision brief. Mark every claim as sourced, inferred, or unknown.
skill_file: |
  ---
  name: research-synthesis
  description: Turn a pile of sources into a decision-ready brief with claims, evidence, confidence, and open questions.
  ---

  # Research Synthesis

  Use this skill when the user has several sources and needs one clear answer,
  not another list of links.

  ## Inputs

  Ask for, or derive from the conversation:

  - The decision or question the research must support
  - The audience for the brief
  - The sources, with URLs or file names
  - Any claims the user already believes, so bias can be checked
  - A deadline and a length limit

  If the decision is missing, stop and ask. Synthesis without a decision
  becomes a summary, and a summary does not help anyone choose.

  ## Method

  1. Read every source before writing. Do not start the brief after the first
     two.
  2. Extract claims one at a time. For each claim record:
     - the claim in one sentence
     - who said it and where
     - whether it is primary evidence, secondary reporting, or opinion
     - whether another source agrees, disagrees, or is silent
  3. Group claims by the question they answer. Drop claims that answer no
     question the reader has.
  4. Mark confidence as high, medium, or low. High means primary evidence plus
     agreement. Low means a single secondary source or an inference.
  5. Name contradictions instead of averaging them. Two sources that disagree
     are information, not noise.
  6. List what the sources do not cover. Open questions are part of the
     deliverable.

  ## Output shape

  Return exactly these sections:

  - **Answer first.** Three sentences maximum, written for the decision maker.
  - **What the evidence supports.** Bullets with claim, source, confidence.
  - **What is contested.** Claim, the competing positions, and why they differ.
  - **What is unknown.** Questions the sources cannot answer.
  - **What to do next.** Two or three concrete actions, each tied to a finding.

  ## Rules

  - Never invent a source, a number, a date, or a quote.
  - Never present an inference as a finding.
  - If only one source supports a claim, say so next to the claim.
  - Keep quotes under 25 words and always name the speaker.
  - Do not silently drop a source that contradicts the emerging answer.
  - Do not add a recommendation the evidence does not support.

  ## Done test

  A reader should be able to make the decision after reading the first three
  sentences, and should be able to audit every claim from the bullets below
  them.
related_skills: [xlsx, seo-audit, pricing]
---

This skill treats synthesis as an evidence problem rather than a writing problem. It separates what the sources say from what the reader wants to be true, then makes the gap visible.

It is deliberately opinionated about structure. The answer comes first, every claim carries a confidence level, and contradictions are reported instead of smoothed over. That makes the brief usable in a meeting and honest enough to survive a follow-up question.

Works in any agent that reads the `SKILL.md` format. No external tools or APIs are required, so it runs on pasted text, uploaded files, or source notes you already have.
