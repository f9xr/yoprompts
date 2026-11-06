---
title: "Review a contract before you sign it"
slug: contract-review-brief
category: business
category_label: Business
difficulty: intermediate
tools: [chatgpt, claude, gemini]
read_time: 8
seo:
  type: "WebPage"
picks: []
related: [pricing-and-positioning, cold-email-writer, fact-check-my-claim]
art: workflow
tags: [contract, legal, risk, negotiation, business, agreements]
excerpt: "Reads a commercial contract and returns the deal summary, the clauses that create exposure, and the language to negotiate."
prompt: |
  You are a commercial contracts reviewer. You read for exposure, not for
  completeness. You are not a lawyer and you do not give legal advice.

  ## What I will give you

  - The contract text, or the clauses I am worried about
  - Who the parties are and what each one provides
  - The deal value and term
  - The jurisdiction and governing law, if known
  - What I am willing to trade and what I cannot accept

  If the jurisdiction is unknown, mark jurisdiction-specific issues as needing
  a qualified lawyer.

  ## Workflow

  1. Summarise the deal in five sentences or fewer.
  2. List each party's obligations with any deadline.
  3. Review risk allocation: indemnity, liability cap, warranty, insurance,
     and termination.
  4. Review data, IP, confidentiality, and exit terms.
  5. Rank findings as high, medium, or low exposure.
  6. For each high finding, quote the clause and suggest replacement language.
  7. List the questions to ask before signing.

  ## Clauses to flag

  - Unlimited liability or a cap far above the annual fee.
  - Broad indemnity with no fault threshold.
  - Auto-renewal with a short notice window.
  - One-sided termination or unilateral change rights.
  - Payment terms over 60 days with no interest.
  - A warranty that the service will be error-free or fit for any purpose.
  - IP assignment that captures pre-existing material.
  - Data rights that allow training or resale.
  - Audit rights with no notice or cost limit.
  - Exclusivity or non-compete that outlives the term.

  ## Output format

  Return a table: clause, current language, risk, exposure, suggested change.
  Then a short negotiation priority list and the questions to ask. End with
  the items that need a lawyer in the relevant jurisdiction.
workflow:
  - "Summarise the deal and the parties in plain language"
  - "List every obligation and deadline"
  - "Rank risk allocation clauses by exposure"
  - "Draft narrow replacement language for the top findings"
  - "Separate commercial judgment from legal advice"
output_preview: "A plain-language deal summary, a ranked risk table with quoted clauses, negotiation language, and a short list of items for a lawyer."
how_to_use:
  - "Paste the whole agreement if you can. Clause interactions matter more than any single sentence."
  - "Tell it what you cannot accept. That turns a generic review into a negotiation plan."
  - "Use the output to prepare questions for a lawyer, not to replace one."
tips:
  - "The riskiest clauses are often the ordinary ones: auto-renewal, payment terms, and data use."
  - "Ask for the smallest acceptable change. A narrow redline gets accepted more often than a rewrite."
  - "Mark every assumption about the business context. The same clause can be fine in one deal and fatal in another."
  - "Keep the negotiation list to three items. A list of twenty gets ignored."
example_output: |
  DEAL SUMMARY
  Vendor provides a hosted analytics platform for 12 months. Fees are billed
  annually in advance. Either party may terminate for material breach after
  30 days' cure.

  HIGH EXPOSURE
  Clause 9.2 - Indemnity
  Current: Customer indemnifies vendor for all claims arising from use.
  Risk: Covers vendor's own negligence.
  Change: Limit to claims arising from customer data or customer breach.

  NEGOTIATION PRIORITIES
  1. Narrow the indemnity.
  2. Cap liability at 12 months of fees.
  3. Add a data deletion commitment on exit.
faq:
  - q: "Is this legal advice?"
    a: "No. It is a commercial review that helps you prepare questions. A qualified lawyer in the relevant jurisdiction must review anything that creates real exposure."
  - q: "Can it tell whether a clause is enforceable?"
    a: "It should not. Enforceability depends on jurisdiction, case law, and context. The prompt flags the issue and routes it to a lawyer."
  - q: "What if the contract is long?"
    a: "Paste it in sections or start with the risk allocation, data, and termination clauses. Those three usually contain the exposure."
  - q: "Should I use it for employment contracts?"
    a: "Use extra care. Employment law is jurisdiction-specific and often mandatory. Treat the output as a checklist for a lawyer, not as a decision."
---
A contract review is useful when it ranks exposure instead of listing every clause. The prompt keeps the output to the three or four findings that can actually change the deal.

It also draws a hard line between commercial judgment and legal advice, so the document cannot be mistaken for a legal opinion.

Pair it with Pricing and Positioning when the deal value is part of the negotiation, or with Fact Check My Claim when a vendor makes a claim you need to verify.
