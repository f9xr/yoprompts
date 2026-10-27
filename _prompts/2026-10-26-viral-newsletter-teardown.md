---
title: "Tear down a newsletter issue that loses readers"
slug: viral-newsletter-teardown
category: marketing
category_label: Marketing
difficulty: intermediate
tools: [chatgpt, claude]
read_time: 6
seo:
  type: "WebPage"
picks: []
related: [viral-email-subject-lines, cold-email-writer, landing-page-copy]
art: workflow
tags: [newsletter, email, teardown, editing, conversion]
excerpt: "Audits one newsletter issue for subject, opening, structure, and call to action, then rewrites the weakest part without flattening the voice."
prompt: |
  You are a newsletter editor who has watched open rates, read rates, and
  reply rates move for years. You do not believe every issue needs a bigger
  hook. You believe most issues lose readers in the first 50 words and never
  earn them back.

  ## What I will give you
  - The full issue, including subject line and preview text:
  - Who receives it and why they subscribed:
  - The one action I want after reading:
  - What happened last time (opens, clicks, replies, unsubscribes, or none):
  - Voice samples or rules I want preserved:
  - Claims I cannot make:

  ## Audit in this order

  1. **The promise.** In one sentence, what does the subject and preview
     promise? Then say what the issue actually delivers. Name the gap, if any.

  2. **The first 50 words.** Quote them. Say whether a reader who does not
     know me would keep going, and why. Do not praise the greeting.

  3. **The spine.** Map the issue as a sequence of beats. Mark any beat that
     repeats, any paragraph that only announces the next one, and any section
     that could be cut without losing the action.

  4. **The action.** Find the requested action. Say whether it appears once,
     three times, or not at all, and whether the reader knows what happens
     next. A newsletter can have one action; it cannot have five equal ones.

  5. **The voice.** Name three choices that sound like the writer and three
     that sound like default marketing copy. Quote each.

  6. **The unsubscribe risk.** Identify the moment a busy reader is most
     likely to leave. It is usually a promise the issue does not keep, not a
     bad sentence.

  ## Then rewrite

  - **Subject lines:** five options, under 45 characters where possible. One
    specific, one curiosity with a real payoff, one plain, one benefit, one
    question. No clickbait, no fake urgency, no "you won't believe".
  - **Preview text:** two options that add information instead of repeating
    the subject.
  - **Opening:** rewrite only the first 50 words. Keep the writer's rhythm.
  - **One section:** rewrite the weakest beat so it earns its place.
  - **Call to action:** one primary action in plain language, plus the line
    that tells the reader what happens after they click.

  ## Rules
  - Do not invent benchmarks, open rates, or reader research.
  - Do not add a fact, quote, or number that was not in the issue.
  - Do not make the voice more excited. Make it more specific.
  - If the issue has no clear action, say so before rewriting anything.
  - Keep the original meaning when the claim is supported. Cut it when it is
    not.
workflow:
  - "Compare the promise with what the issue delivers"
  - "Audit the opening, spine, action, and voice"
  - "Find the unsubscribe risk"
  - "Rewrite the subject, opening, weakest section, and CTA"
output_preview: "A promise-versus-delivery check, a beat map, voice notes, the unsubscribe risk, five subject lines, a new opening, and one rewritten section."
how_to_use:
  - "Paste the whole issue, not a summary. The teardown depends on the order of the beats."
  - "State the one action. If you cannot, the issue probably has the same problem."
  - "Add three sentences you have written that sound like you. The rewrite uses them as a constraint."
  - "Run the audit before the rewrite. Otherwise the model fixes sentences while missing the structural problem."
tips:
  - "The subject line is a promise, not a summary. A summary is forgettable; a kept promise gets opened again next week."
  - "Cut the paragraph that explains what you are about to say. Most newsletters have one."
  - "One action repeated in different words is stronger than four different actions."
  - "Read the first 50 words aloud. If you would not say them to one person, rewrite them."
example_output: |
  PROMISE
  Subject: "The pricing page rewrite that lost 30% of signups"
  Issue delivers a teardown of a pricing page, but never names the loss or
  the measurement. The promise is stronger than the evidence.

  OPENING
  "Hey friends, hope you had a great week" delays the promise by 14 words.
  Start with the decision, not the greeting.

  REWRITE
  "We simplified the pricing page and signups dropped. The page was clearer.
  The decision was harder. Here is the difference, and the version we
  shipped next."

  CTA
  "Reply with the last pricing change you made. I will send the checklist we
  used to review it." One action, one next step.
faq:
  - q: "Can this work on a cold email?"
    a: "The audit questions still apply, but cold email has a different permission level. Use the cold email prompt for the first message and this one for a newsletter that people opted into."
  - q: "What if I do not have performance data?"
    a: "Say so. The prompt will audit the structure and the promise without inventing benchmarks. The rewrite is still useful; the diagnosis is just less certain."
  - q: "Should I rewrite the whole issue?"
    a: "Not in the first pass. Fix the promise, the opening, and the action. A full rewrite before those are clear usually reproduces the same structural problem in nicer sentences."
  - q: "How many subject lines should I test?"
    a: "Two is usually enough for a small list, and one clear promise beats five variations of the same joke. Test the promise, not the punctuation."
---
