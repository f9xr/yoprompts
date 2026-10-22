---
title: "Skill Creator"
slug: skill-creator
category: meta
date: 2026-10-22
featured: true
excerpt: "An interactive guide for writing, testing, and improving SKILL.md files, including eval runs, benchmark comparison, and description optimization."
creator: "Anthropic"
license: "Apache-2.0"
repo_url: "https://github.com/anthropics/skills/tree/main/skills/skill-creator"
tags: [meta, skill authoring, evals, productivity]
usage: |
  npx skills add anthropics/skills@skill-creator
---

Skill Creator walks through the authoring loop instead of generating a file and stopping. It captures intent, interviews for edge cases, drafts the SKILL.md, writes realistic test prompts, and runs each one with and without the skill so the two outputs can be compared.

The review step produces qualitative output and a quantitative benchmark with pass rate, time, and token deltas. Feedback then drives the next revision, and the loop repeats until the skill holds up beyond the original examples.

It also includes a separate description optimization pass, since the front matter description is the main trigger for whether an agent reaches for a skill at all.
