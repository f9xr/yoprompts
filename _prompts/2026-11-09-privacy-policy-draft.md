---
title: "Draft a privacy policy that matches the product"
title_tag: "Draft a privacy policy that matches the product"
slug: privacy-policy-draft
category: business
category_label: Business
difficulty: intermediate
tools: [chatgpt, claude]
read_time: 7
seo:
  type: "WebPage"
picks: []
related: [contract-review-brief, website-code-audit, seo-content-strategy]
skills: [privacy-policy-writer, contract-review]
art: workflow
tags: [privacy, policy, legal, gdpr, data protection, compliance]
excerpt: "Drafts a plain-language privacy policy from a data inventory and flags every claim that needs verification, a lawyer, or a product change."
prompt: |
  You are a privacy writer who works alongside lawyers. You are not a lawyer,
  and you do not present your output as legal advice. You write only what the
  data inventory supports.

  ## What I will give you
  - The product and who uses it:
  - The data collected, and how it is collected:
  - Why each item is collected:
  - Where it is stored, and for how long:
  - The processors and vendors that touch it:
  - The regions where users and servers are located:
  - The rights tooling that exists: export, delete, correct, opt out:
  - Cookies, analytics, and advertising tags:

  ## Produce in this order

  1. **Data inventory.** A table: data item, source, purpose, storage,
     processor, retention. Mark every cell you cannot confirm.

  2. **The policy.** Plain-language sections for: who we are, what we
     collect, why, who we share with, retention, security, rights, cookies,
     changes, and children if relevant.

  3. **Verification table.** For every factual claim in the policy: the claim,
     the source that verifies it, and the status. Anything unverified is
     flagged, not smoothed over.

  4. **Gaps.** The missing retention period, the unsigned processor
     agreement, the legal basis that depends on jurisdiction, the transfer
     mechanism, and the right the product cannot fulfil.

  5. **Questions for counsel.** The decisions that need a lawyer, phrased as
     questions with the facts attached.

  6. **User-facing summary.** A short version a normal person can read
     without a legal glossary.

  ## Rules
  - Never invent a vendor, a retention period, a legal basis, or a transfer
    mechanism.
  - Never describe a practice the product does not follow.
  - Never promise absolute security.
  - Do not write "we never sell your data" unless the contracts and the
    product confirm it.
  - Do not present the draft as legal advice.
  - Name the jurisdiction dependencies instead of picking one.
  - Keep sentences short and use "we" and "you".

  ## Before you finish
  Mark every sentence that is not supported by the inventory. If the draft
  has more flags than facts, say that the product needs a data review before
  a policy can be written.
workflow:
  - "Build the data inventory and mark unknowns"
  - "Draft the policy in plain language"
  - "Verify every factual claim"
  - "List the gaps and who must decide"
  - "Write the questions for counsel"
  - "Add a short user-facing summary"
output_preview: "A data inventory, a plain-language policy, a claim-by-claim verification table, a gap list, counsel questions, and a short summary for users."
how_to_use:
  - "List the data from the product, not from memory. Open the settings, the database schema, and the vendor dashboards before you run the prompt."
  - "Include the processors, even the ones that feel internal. An analytics tool or a support desk is a processor, and the policy has to name the category."
  - "Say which rights the product can actually fulfil today. A policy that promises deletion when the tooling cannot delete is worse than one that says the process is manual."
  - "Give the regions. The legal basis and transfer language depend on where users are, and the prompt will flag the dependency instead of guessing."
tips:
  - "The verification table is the real deliverable. It turns a legal document into a list of product and vendor questions someone can close."
  - "Retention is the section most policies get wrong. If there is no retention rule, say so and make it a gap rather than inventing a period."
  - "Keep the user-facing summary honest. A summary that promises more than the policy is a problem waiting for a regulator."
  - "Have counsel review the flagged items, not the whole draft. The table makes that review cheaper and more focused."
example_output: |
  DATA INVENTORY
  - Email address. Source: signup form. Purpose: account and notices.
    Storage: primary database. Processor: none. Retention: unknown, flagged.
  - Payment details. Source: checkout. Purpose: billing. Storage: payment
    processor only. Processor: Stripe. Retention: per processor agreement,
    flagged for confirmation.
  - Usage events. Source: app and website. Purpose: product analytics.
    Storage: analytics warehouse. Processor: PostHog. Retention: 24 months.

  POLICY EXCERPT
  We collect your email address when you create an account. We use it to sign
  you in and to send account notices. We do not use it for marketing unless
  you opt in.

  We use a payment processor to handle card details. We do not store your
  full card number on our servers.

  We keep usage events for 24 months so we can understand which features are
  used. You can ask us to delete your account and the data attached to it.

  VERIFICATION
  - "We do not store your full card number." Verified by the checkout flow
    and the processor integration. Status: confirmed.
  - "We keep usage events for 24 months." Source: warehouse retention
    setting. Status: confirmed.
  - "You can ask us to delete your account." Source: account settings has a
    delete action. Status: confirmed for account, unverified for analytics
    events.

  GAPS
  - Email retention has no rule. Owner: engineering.
  - Analytics events may retain the user id after account deletion. Owner:
    data.
  - The processor agreement for the support desk is not on file. Owner:
    operations.
  - The legal basis for analytics differs by region. Needs counsel.

  QUESTIONS FOR COUNSEL
  1. For EU users, is consent or legitimate interest the right basis for
     product analytics, given the data listed above?
  2. What transfer mechanism applies to the analytics warehouse in the US?
  3. Does the children's section apply if the product is available to
     schools?

  USER SUMMARY
  We collect your email to run your account, your payment details through a
  processor to bill you, and usage data to improve the product. You can
  export or delete your account data from settings. We keep usage data for
  24 months.
faq:
  - q: "Is this legal advice?"
    a: "No. It is a drafting aid that starts from your data inventory and flags the decisions a lawyer needs to make. The output is designed to make that review faster, not to replace it."
  - q: "Can it write a GDPR-compliant policy?"
    a: "It can draft the sections and flag the GDPR-specific decisions, but compliance depends on facts the prompt cannot verify, such as your legal basis, transfer mechanism, and processor agreements. It will name those instead of guessing."
  - q: "What if I do not know our retention periods?"
    a: "Say so. The prompt will mark retention as a gap and assign an owner rather than inventing a period. That gap is a real finding, and it is better to see it before publication."
  - q: "Should the policy name every vendor?"
    a: "Name the categories and, where the law requires it, the specific processors. The prompt will ask for the vendor list and keep the policy consistent with it, rather than naming a vendor the product does not use."
---
