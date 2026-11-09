---
title: "Privacy Policy Writer"
slug: privacy-policy-writer
category: legal
date: 2026-11-09
excerpt: "Drafts a plain-language privacy policy from the actual data flows, and flags the gaps that need a lawyer or a product change."
creator: "F9XR Team"
license: "MIT"
version: "1.0.0"
tags: [privacy, policy, legal, gdpr, data protection]
usage: |
  Draft a privacy policy for this product.

  Base it only on the data I list. Mark every claim that needs verification.
  Keep the language plain. Flag missing retention periods, third parties, and
  legal bases instead of inventing them.

  Product, data collected, and vendors:
  [describe]
related_skills: [contract-review, security-review, localization-review]
skill_file: |
  ---
  name: privacy-policy-writer
  description: Draft or review a privacy policy from a description of real data flows. Use when the user asks for a privacy policy, data protection notice, GDPR or CCPA summary, or help making a policy readable.
  ---

  # Privacy Policy Writer

  A privacy policy is a factual description of what the product does with
  data. It is not a marketing page and not a legal incantation.

  ## Workflow

  1. Inventory the data: what is collected, how, from whom, and why.
  2. Trace each item to storage, processors, and retention.
  3. Map the user rights the product can actually honour.
  4. Draft in plain language, one topic per section.
  5. Mark every claim that has not been verified in the product or a vendor
     contract.
  6. Flag the gaps a lawyer must decide, instead of filling them.

  ## Sections

  - Who we are and how to contact us.
  - What we collect and whether it is required or optional.
  - Why we collect it, tied to a specific purpose.
  - Who we share it with, named by category and by processor where required.
  - How long we keep it, with a real retention rule.
  - How we protect it, without promising absolute security.
  - The rights a user has and how to exercise them.
  - Cookies and tracking, with a link to the controls.
  - Changes to the policy and how users are told.
  - Children, if the product can be used by them.

  ## Plain language rules

  - Short sentences. One idea each.
  - Name the data in the user's terms: "your email address", not "contact
    identifiers".
  - Use "we" and "you".
  - No "may", "from time to time", or "including but not limited to" when a
    precise statement is possible.
  - No promise the product cannot keep.

  ## What must be flagged

  - A retention period that has not been decided.
  - A processor that has not signed a data processing agreement.
  - A legal basis that depends on jurisdiction.
  - A transfer across regions without a stated mechanism.
  - A right the product cannot fulfil with its current tooling.
  - Analytics or advertising tags that the inventory does not mention.

  ## Rules

  - Never invent a vendor, a retention period, or a legal basis.
  - Never describe a practice the product does not follow.
  - Never promise "we never sell your data" unless the contracts and the
    product confirm it.
  - Do not present the draft as legal advice. Say what needs review.

  ## Output

  Return the draft, then a table of:
  - Claim, source of verification, and status.
  - Gap, why it matters, and who must decide.
---

Privacy policies are usually copied from a template and then diverge from the product. This skill works in the other direction: it starts from the data inventory and writes only what the inventory supports.

The verification table is the useful artifact. It turns a legal document into a list of product and vendor questions that someone can actually close.

Pair it with Security Review for the controls, or Contract Review for the processor agreements behind the claims.
