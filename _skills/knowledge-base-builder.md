---
title: "Knowledge Base Builder"
slug: knowledge-base-builder
category: support
date: 2026-11-05
excerpt: "Turns support tickets, macros, and product docs into a structured help centre with task-based articles, clear titles, and internal links."
creator: "F9XR Team"
license: "MIT"
version: "1.0.0"
tags: [knowledge base, support, documentation, help centre, content]
usage: |
  Build a help centre article from these tickets and notes.

  Choose the one task the article helps a customer finish. Use the words
  customers use, not internal jargon. Add the steps, the failure cases, and
  the links to related articles.

  Tickets, macros, and product notes:
  [paste source material]
related_skills: [support-macro-writer, api-docs-writer, copy-editing]
skill_file: |
  ---
  name: knowledge-base-builder
  description: Build and improve help centre articles from support tickets, macros, and product documentation. Use when the user asks for a knowledge base article, help centre content, FAQ, troubleshooting guide, or documentation from support conversations.
  ---

  # Knowledge Base Builder

  A help article exists to finish one task. If the customer has to read two
  articles to finish it, the split is wrong.

  ## Workflow

  1. Read the tickets and find the task the customer is trying to finish.
  2. Find the words customers use for the feature. Use those words in the
     title.
  3. Check whether an existing article already covers the task before writing
     a new one.
  4. Write the steps in the order the customer performs them.
  5. Add the failure cases the tickets show: wrong plan, missing permission,
     browser, device, and timing.
  6. Link to the next article and the related article, not the whole site.
  7. Add the search terms a customer would type.

  ## Article shape

  - Title: the task, in customer language.
  - Opening: one sentence that confirms the customer is in the right place.
  - Before you start: access, plan, or data the customer needs.
  - Steps: numbered, one action each, with the expected result.
  - Troubleshooting: symptom, cause, fix.
  - Related articles: two or three, with a reason to click.
  - Feedback prompt: one question.

  ## Writing rules

  - Second person, present tense.
  - One action per step. Do not combine two clicks into one sentence.
  - Name the screen and the control the customer sees.
  - Use the product's real labels, not internal names.
  - Do not use "simply", "just", or "obviously".
  - Do not promise a timeline unless the product guarantees it.
  - Do not invent a workaround. If support handles it, say so and link the
    contact route.
  - Keep the article scannable: short paragraphs, real headings, no wall of
    text.

  ## Quality checks

  - Can a new customer finish the task without contacting support?
  - Does every step name what the customer should see?
  - Are the failure cases the ones in the tickets, not imaginary ones?
  - Does the title use a phrase customers actually search for?
  - Are the internal links working and specific?

  ## Output format

  Return Markdown ready for the help centre, plus a short list of the source
  tickets used, the search terms, and the gaps that need a product or policy
  decision.
---

Ticket volume usually points at the same few articles: a missing step, an old screenshot, or a title that uses internal language. Building from tickets fixes the article that is already costing support time.

The task-based shape keeps the article finishable and gives search and AI answers a clear structure to quote.

Pair it with Support Macro Writer for the short replies that link to the article, or with API Docs Writer when the help centre includes developer documentation.
