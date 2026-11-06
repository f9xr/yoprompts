---
title: "Write an onboarding email sequence that gets one thing done"
slug: onboarding-email-sequence
category: marketing
category_label: Marketing
difficulty: intermediate
tools: [chatgpt, claude, gemini]
read_time: 7
seo:
  type: "WebPage"
picks: []
related: [viral-welcome-email-sequence, landing-page-copy, viral-email-subject-lines]
art: palette
tags: [onboarding, email, lifecycle, activation, retention, marketing]
excerpt: "Builds a short activation sequence where every email drives one action, names the next step, and stops when the user is already active."
prompt: |
  You are a lifecycle email editor. You optimise for the first meaningful
  action, not for opens. You would rather send three useful emails than seven
  that fill an inbox.

  ## What I will give you

  - The product and the outcome it delivers
  - The first meaningful action a new user should take
  - The signup path and where users currently drop off
  - What we know about the user at signup
  - What the product can detect about activation
  - Brand voice, plus three words we would never use
  - The sending tool and its personalisation fields

  If the activation event is unclear, help me define it first. Do not write a
  sequence around a vague goal.

  ## Workflow

  1. Define activation as one observable event.
  2. Map the shortest path from signup to that event.
  3. Identify the moment where users stall and why.
  4. Write one email per obstacle, not one per day.
  5. Stop the sequence when the event is detected.
  6. Give each email one action and one link.
  7. Add plain-text variants for deliverability.

  ## Sequence rules

  - Email one: deliver the promised value, no tour.
  - Email two: remove the most common blocker.
  - Email three: show the outcome someone like them reached.
  - Email four: offer help, ask a question, and make replying easy.
  - Keep each email under 120 words.
  - One call to action. No secondary link except the unsubscribe.
  - Subject lines under 6 words, lowercase, honest.
  - No fake urgency, no "just checking in", no "I'll keep this short".
  - Do not send an activation email to someone already activated.

  ## Output format

  For each email: timing, trigger, subject, preview text, body, CTA, and the
  activation check that suppresses it. End with the measurement plan and the
  two tests to run first.
workflow:
  - "Define the activation event and the shortest path to it"
  - "Find the obstacle that stops most new users"
  - "Write one short email per obstacle"
  - "Set suppression rules based on activation"
  - "Define the tests and the metric"
output_preview: "A three to five email activation sequence with triggers, suppression rules, plain-text variants, and a measurement plan."
how_to_use:
  - "Give a real activation event the product can detect. 'Engaged' is not an event."
  - "Paste the current drop-off data. The sequence should answer the actual stall, not a guessed one."
  - "Review email one before the rest. If it does not deliver value immediately, the sequence is already lost."
tips:
  - "Suppression matters more than copy. An activation email sent to an active user reads as noise."
  - "One link per email. A second link splits the action and lowers completion."
  - "Plain text often beats a designed template for a first email. Ask for both and test."
  - "Measure the activation event, not opens. Opens are a delivery signal, not an outcome."
example_output: |
  EMAIL 2 - REMOVE THE FIRST BLOCKER
  Trigger: 24 hours after signup, activation event not reached
  Subject: connect your first source

  Most new accounts stall at the same step: connecting a data source.
  It takes about two minutes and you only need read access.

  [Connect a source]

  If the connection fails, reply to this email and I will look at it.
  You can unsubscribe here.

  Suppress if: first_source_connected = true
faq:
  - q: "How many emails should the sequence have?"
    a: "Three to five, one per real obstacle. A longer sequence usually repeats the same message with a different subject line."
  - q: "Should onboarding emails be automated or personal?"
    a: "Automate the trigger and the timing, but write the copy as if one person sent it. Personalisation should use data the product actually has."
  - q: "What if we do not track activation?"
    a: "Define an event first. Without one, the sequence cannot suppress itself and will keep emailing active users."
  - q: "Do I need a plain-text version?"
    a: "Yes for the first email and for any email that should feel personal. It also helps deliverability and accessibility."
---
Onboarding sequences fail when they optimise for opens instead of the first meaningful action. The prompt starts from one observable event and writes one email per obstacle, so the sequence stays short and each message has a job.

Suppression rules are part of the output because an activation email sent to an active user is worse than no email at all.

Pair it with Viral Welcome Email Sequence when the first email needs more story, or with Landing Page Copy when the signup page is the real drop-off.
