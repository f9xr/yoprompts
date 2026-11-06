---
title: "Write a blameless incident postmortem"
slug: incident-postmortem-prompt
category: coding
category_label: Coding
difficulty: intermediate
tools: [chatgpt, claude, gemini]
read_time: 8
seo:
  type: "WebPage"
picks: []
related: [debug-this-error, code-review-audit, website-code-audit]
art: terminal
tags: [incident, postmortem, reliability, sre, engineering, outage, root cause]
excerpt: "Turns an incident timeline and logs into a blameless postmortem with a causal chain, contributing factors, and owned action items."
prompt: |
  You are a reliability engineer writing a blameless postmortem. You care about
  the system that allowed the failure, not the person who triggered it.

  ## What I will give you

  - Incident title and date
  - Customer impact: who was affected, how many, for how long
  - Timeline notes and timestamps
  - Logs, alerts, and relevant metrics
  - The change or event that started it
  - How it was detected and mitigated
  - Anything we still do not know

  If a field is missing, ask for it. Do not invent a timestamp, a cause, or a
  customer number.

  ## Rules

  1. Build the timeline first, in UTC.
  2. Separate the trigger from the cause. The trigger is the change. The cause
     is the condition that let the change take the system down.
  3. Name roles and systems, never individuals.
  4. Replace "should have" with the guardrail that was missing.
  5. Every action item needs an owner, a due date, and a way to verify it.
  6. State what is still unknown and what evidence would settle it.

  ## Produce

  - Summary in five sentences or fewer.
  - Impact: customers, duration, capability, and data effects.
  - Timeline table: time, event, source.
  - Trigger and cause.
  - Contributing factors across code, configuration, observability, process,
    and ownership.
  - Detection and response review.
  - What went well and what made it worse.
  - Action items table: action, owner, due, verification.
  - Open questions.

  Do not call the incident resolved until the mitigation is verified in the
  environment that failed.
workflow:
  - "Collect the incident evidence and confirm the impact numbers"
  - "Build a UTC timeline from the earliest signal to recovery"
  - "Separate the trigger from the underlying cause"
  - "Map contributing factors across code, config, and process"
  - "Write action items with owners and verification"
output_preview: "A blameless postmortem with a sourced timeline, a causal chain, ranked contributing factors, and an action table that can be tracked."
how_to_use:
  - "Paste the raw evidence: logs, alert messages, chat excerpts, and timestamps. The quality of the timeline depends on the material, not on the model's guesswork."
  - "Give the real customer impact. A postmortem that starts with a vague 'some users' cannot drive a priority decision."
  - "Review the action items before sharing them. If an item asks people to be more careful, rewrite it as a system change."
tips:
  - "Put the first customer report next to the first alert. The gap between them is often the most valuable finding."
  - "Keep the timeline in one timezone. Mixed local times create false sequences."
  - "Ask for the missing evidence explicitly. A gap in the record is safer than a plausible invented detail."
  - "Track action items in the same system as normal work, or they disappear after the review."
example_output: |
  SUMMARY
  A configuration change removed the retry budget from the checkout service.
  Errors reached customers for 22 minutes before the on-call engineer rolled
  the change back. No data was lost.

  TIMELINE
  14:02 UTC  Config change deployed              deploy log
  14:05 UTC  Checkout error rate reaches 18%     metrics
  14:09 UTC  First customer report               support
  14:11 UTC  Alert fires                         pager
  14:19 UTC  Rollback started                    deploy log
  14:24 UTC  Error rate returns to baseline      metrics

  CAUSE
  The deploy removed a retry setting that the service requires. The template
  did not fail when the value was absent, so the change passed review.

  ACTION ITEMS
  Add schema validation for required retry values  | owner | date | deploy test
  Alert on missing retry config at startup         | owner | date | staging run
faq:
  - q: "Why blameless?"
    a: "Blame ends the investigation early. The useful question is which guardrail was missing, because that is the part you can change."
  - q: "Does this replace a formal incident review?"
    a: "No. It produces the first draft and the evidence map. A human review still decides priority and whether the action items are funded."
  - q: "What if the timeline is incomplete?"
    a: "Leave the gap visible and list the evidence that would fill it. An honest gap is safer than a confident guess."
  - q: "Should every incident get this document?"
    a: "Use it for anything that reached customers, broke a promise, or revealed a near miss. Small internal errors only need the action item."
---
Most postmortems describe what happened and skip why the system allowed it. The prompt makes the causal chain explicit and forces every action item to name a system change and a verification step.

It also refuses to invent timestamps or impact numbers, which keeps the document honest and makes the review faster.

Pair it with Debug This Error when the cause is still being diagnosed, or with Code Review Audit when the failure came from a change that passed review.
