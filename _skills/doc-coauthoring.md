---
title: "Doc Coauthoring"
slug: doc-coauthoring
category: writing
date: 2026-10-28
excerpt: "A structured collaboration workflow for drafting a document with an agent: context, decisions, review, and reader testing."
creator: "Anthropic"
license: "Apache-2.0"
repo_url: "https://github.com/anthropics/skills/tree/main/skills/doc-coauthoring"
tags: [writing, collaboration, drafting, review, workflow]
usage: |
  Use the doc-coauthoring skill to help me write a design doc. Start by
  interviewing me for context before drafting anything.
install: |
  npx skills add anthropics/skills@doc-coauthoring
---

Doc Coauthoring treats writing as a sequence of decisions rather than a single generation. It gathers context, agrees on the argument and structure, drafts section by section, and then tests the result against the questions a real reader would ask.

The workflow is deliberately slower at the start. Most bad documents are not badly written; they answer the wrong question or skip the evidence that would make the claim credible.

Use it for design docs, proposals, reports, and long articles where the thinking matters as much as the prose. It works best when the agent can ask questions and you answer them.
