---
title: "Support Macro Writer"
slug: support-macro-writer
category: support
date: 2026-11-04
excerpt: "Writes help-centre articles and reply macros that solve the problem in the first screen, with the escalation path built in."
creator: "F9XR Team"
license: "MIT"
version: "1.0.0"
tags: [support, help-centre, macro, customer, writing]
usage: |
  Write a help-centre article and a reply macro for this issue.

  Put the fix in the first screen. Include the escalation path and what the
  customer should see if it worked.

  Issue and product details:
  [paste tickets or notes]
related_skills: [copy-editing, internal-comms, api-docs-writer]
skill_file: |
  ---
  name: support-macro-writer
  description: Write help-centre articles and customer support reply macros. Use when the user asks for support macros, canned responses, help-centre articles, troubleshooting guides, or clearer customer replies.
  ---

  # Support Macro Writer

  A support article exists to end the conversation. Put the fix first and
  make success visible.

  ## Workflow

  1. State the customer's problem in their words.
  2. Give the shortest working fix in the first screen.
  3. Add the check that proves it worked.
  4. Add the fallback when the fix does not work.
  5. Add the escalation path: what to send, where, and the expected response.
  6. Cut every sentence that does not help solve or escalate.

  ## Help-centre article

  ```
  Title: [Problem] [action]
  First line: one sentence naming the fix.

  Fix
  1. Step.
  2. Step.
  3. Step.

  Check it worked
  What the customer should see.

  If it still fails
  The next diagnostic step.

  Escalate
  What to send us and where.
  ```

  Title rules: include the words the customer searches for. "Connect a custom
  domain" beats "Domain configuration guidance".

  ## Reply macro

  - Greet once.
  - Restate the issue in one sentence to show understanding.
  - Give the fix, numbered.
  - Say what to expect.
  - Offer the escalation path without making the customer ask.
  - Sign off with a name, not a team.

  Keep the macro short enough to read on a phone. If it needs three screens,
  link to the article instead.

  ## Tone

  - Plain, calm, specific.
  - No apology loop. Apologize once if warranted, then solve.
  - No "kindly", "please be informed", or "as per our previous email".
  - No blame: "the system rejected the file" not "you uploaded the wrong file".
  - No false certainty. If the outcome is unknown, say what happens next.

  ## Recovery patterns

  - **Duplicate charge**: confirm, state the refund timeline, give the
    reference number.
  - **Access lost**: verify identity, restore access, explain how to prevent
    it next time.
  - **Integration down**: state the known issue, give the workaround, give the
    status link.
  - **Data question**: answer with the exact policy, not a summary of it.

  ## Quality pass

  - The first line contains the fix or the answer.
  - Every step is an action, not a description.
  - The success state is visible.
  - The escalation path has an owner and a channel.
  - The macro makes sense without the ticket above it.
  - No placeholder brackets left in the reply.

  ## Output

  Return the article and the macro separately, both ready to paste. Flag any
  policy detail you had to assume.
---

Support writing fails when it explains the system instead of solving the problem. The customer is already frustrated; the first screen should contain the fix.

The escalation path is written into the macro because customers should not have to ask twice. The success check matters because it closes the loop without another message.

Pair it with Copy Editing for the final language pass, or with Internal Comms when the same issue needs a broader announcement.
