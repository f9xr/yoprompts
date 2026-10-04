---
title: "Research any topic systematically"
slug: deep-research-synthesis
category: research
category_label: Research
difficulty: intermediate
tools: [perplexity, chatgpt, claude, gemini]
# Measured from rendered page length at ~200 wpm; all six prompt
# pages are within 5% of each other, so they all land on 7.
read_time: 7
# jekyll-seo-tag types every dated collection document as BlogPosting.
# These are evergreen prompt pages, not blog posts; WebPage is the correct
# container type, with HowTo/FAQPage supplied by _layouts/prompt.html.
seo:
  type: "WebPage"
picks: [essential, weekly]
# Every prompt sits in its own category, so the layout's
# same-category fallback can never match. These are curated.
related: [code-review-audit, seo-content-strategy]
art: chart
tags: [research, analysis, due diligence, synthesis, decision making]
excerpt: "A research prompt that separates what is known, what is claimed and what nobody has established, and shows its own uncertainty."
prompt: |
  You are a research analyst. You are known for two habits: separating what
  is established from what is merely asserted, and stating plainly when the
  evidence does not support a conclusion.

  ## What I will give you
  - The question I am trying to answer:
  - Why the answer changes a decision I have to make:
  - What I already know, so you do not repeat it:
  - Constraints on time and depth:

  ## Work through this in order

  1. **Restate the question.** Rephrase it as the precise question you will
     actually answer, and list any hidden assumptions inside my version.
     If one of those assumptions is wrong, the whole answer is wrong.

  2. **Map the landscape.** What are the competing positions? Name them, and
     say what evidence would distinguish them. If there is a consensus, say
     what the consensus rests on.

  3. **Evidence table.** For each claim you rely on, classify it as
     established (multiple independent sources), single-source, contested,
     or asserted without support. Flag every claim you are inferring rather
     than citing.

  4. **The answer.** Give the direct answer to my question first, in two
     sentences, before any qualification. Then the reasoning, then the
     qualification.

  5. **What would change this.** Name the single piece of new information
     most likely to reverse your conclusion, and tell me how to look for it.

  6. **What I did not do.** Name the branches you could not cover and why.

  ## Rules
  - You have no browsing unless a tool is attached. Where you lack a source,
    say "unverified" rather than producing a plausible citation.
  - Never invent a study, a statistic, or a URL.
  - Prefer "the evidence does not support either position" to picking a side
    when the evidence is genuinely split.
  - Distinguish what is true from what is popular.
  - If the answer is that the question is badly formed, say that as the
    answer.
workflow:
  - "Sharpen the question and expose its assumptions"
  - "Name the competing positions"
  - "Classify every claim by evidence strength"
  - "Lead with the direct answer"
  - "State what would reverse it"
output_preview: "A reframed question, competing positions, an evidence table with claims classified, a two-sentence answer, and one named fact that would overturn it."
how_to_use:
  - "Be specific about the decision the answer feeds. Without this the prompt cannot judge which uncertainties actually matter."
  - "Include what you already know. Repeating your existing understanding is the most common failure mode."
  - "If you use Perplexity or another browsing tool, check its citations by opening two of them before trusting the rest."
  - "Read section 3 before section 4. The classification is where the value is; the answer is the easy part."
tips:
  - "Ask for section 1 alone first. Often the reframed question is different enough that you can answer it without any research."
  - "Insist on the 'unverified' label by asking for it explicitly if it uses citations freely. Confident sourcing is the default failure, and it is hard to spot."
  - "If it gives you a contested answer, run the prompt again in a fresh conversation with no prior context. Agreement across two independent passes is worth something."
  - "Use 'what would change this' as your verification checklist. It is often more useful than the conclusion."
example_output: |
  3. EVIDENCE
  ESTABLISHED      3 independent replications; effect survives preregistration.
  SINGLE-SOURCE    The dose-response claim traces to one 2019 working paper,
                   11 authors, never replicated.
  CONTESTED        Cost-effectiveness depends on the baseline you assume.
  INFERRED         "Small teams adopt faster" — pattern in 3 case studies I
                   supplied, no counter-evidence available.

  5. WOULD CHANGE THIS
  A preregistered replication of the 2019 study with a larger sample. Until
  then, treat the dose-response as provisional.
faq:
  - q: "Should I use Perplexity for this?"
    a: "Yes, if you want sourced claims. This prompt is written to degrade safely without browsing — it labels unverifiable claims rather than inventing citations — but with a browsing tool attached you should still spot-check two of the citations by hand."
  - q: "How is this different from just asking a good question?"
    a: "The value is in the structure, not the topic. Step 3 forces every claim into an evidence bucket, and step 5 forces the analysis to name its own breaking point. Neither happens by default."
  - q: "Can it do competitive research on a company?"
    a: "It will give you a framework, but company specifics are where fabrication concentrates. Treat every number it produces about a named company as a hypothesis to verify."
  - q: "How long should I allow?"
    a: "Fill the context in two minutes. Let it run once, then expect one more pass to correct or deepen the weakest section. That second pass is where the real value appears."
---