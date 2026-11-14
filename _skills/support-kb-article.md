---
title: "Support KB Article"
title_tag: "Support KB Article — AI agent skill for Support"
slug: support-kb-article
category: support
date: 2026-11-12
excerpt: "Turns a recurring ticket into a help-centre article that answers the question in the first sentence and states the cause before the workaround."
creator: "F9XR Team"
license: "MIT"
version: "1.0.0"
tags: [support, documentation, help center, troubleshooting, self-service]
usage: |
  Turn these tickets into a help-centre article.

  Answer the question in the first sentence. Give the cause before the fix.
  Use the customer's words for the problem and the product's words for the
  UI. Do not invent a solution the tickets do not show.

  Tickets and current article (if any):
  [paste]
related_skills: [support-macro-writer, knowledge-base-builder, bug-triage]
skill_file: |
  ---
  name: support-kb-article
  description: Write or rewrite help-centre articles from support tickets, including the cause, the fix, and the cases where the article does not apply. Use when the user asks for a knowledge base article, help doc, troubleshooting guide, or a self-service answer to a recurring ticket.
  ---

  # Support KB Article

  A support article exists to end the conversation, not to demonstrate
  completeness. The reader is already frustrated and has one question.

  ## Workflow

  1. Find the question behind the tickets. It is usually not the subject line.
  2. Answer it in the first sentence.
  3. State the cause in plain language.
  4. Give the shortest fix that works, numbered.
  5. List the cases where this article is the wrong answer.
  6. Add the escalation path for people it does not help.

  ## Structure

  ### Title

  Match how customers search: "Reset a password" beats "Account access
  management". Include the product area if the product has several.

  ### Answer first

  One or two sentences. "You can change the billing email in Settings >
  Billing. The change takes effect on the next invoice." No preamble about
  how important the feature is.

  ### Cause

  Explain what happened in the customer's terms, without blaming them.
  "The import stopped because the file had a duplicate header row" is
  useful. "Invalid input" is not.

  ### Steps

  Numbered, one action each, with the exact label the UI shows. Name the
  screen before the button. Keep the platform differences in separate
  sections rather than interleaved.

  ### When this does not apply

  This section saves more tickets than any other. Name the error messages,
  plan limits, or account states where the article fails and link to the
  right place.

  ### Escalation

  What to include when contacting support: account id, timestamp, error
  text, what was already tried. This is the difference between one reply and
  four.

  ## Writing rules

  - Use the customer's vocabulary for the problem and the product's for the
    interface.
  - Short sentences. No "simply", "just", or "obviously".
  - No exclamation marks and no apology theatre.
  - Screenshots only when the UI is hard to describe.
  - Do not document a workaround as the fix when a bug is open; say the bug
    is open and give the workaround.
  - Do not promise a timeline.

  ## Review pass

  - Does the first sentence answer the question?
  - Can someone with no context follow the steps?
  - Are the UI labels exact?
  - Is the failure case covered?
  - Would this article have prevented the tickets it came from?

  ## Output

  ```
  Title

  Answer

  Cause

  Steps
  1. ...

  Does not apply when
  - ...

  Still stuck
  - What to send support.
  ```
---

Support articles usually fail in the first two sentences, where the writer explains the feature instead of answering the question. This skill forces the answer to the top and puts the exclusions in their own section.

The escalation block is deliberate: an article that ends with "contact support" and no checklist creates a second ticket anyway.

Pair it with Support Macro Writer for the in-ticket reply, or Knowledge Base Builder when the whole help centre needs structure.
