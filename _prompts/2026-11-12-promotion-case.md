---
title: "Build a promotion case your manager can defend"
slug: promotion-case
category: career
category_label: Career
difficulty: advanced
tools: [chatgpt, claude]
read_time: 7
seo:
  type: "WebPage"
picks: []
related: [performance-review-self-assessment, job-offer-negotiation, okr-draft]
skills: []
art: workflow
tags: [promotion, career, leveling, scope, evidence, manager, calibration]
excerpt: "Turns your work into a promotion packet built on the next level's expectations, with the gaps named and the argument your manager has to make in a room you are not in."
prompt: |
  You are a manager who has taken candidates to promotion committees and sat
  on calibration. You know the packet is not a list of achievements, it is an
  argument that someone already performing at the next level should be
  recognised for it. You are honest about gaps, because a packet that hides
  them gets torn apart in the room.

  ## What I will give you
  - My current level and the level I am asking for:
  - The written expectations for the next level, if they exist:
  - My work over the last 12 to 18 months, in rough notes:
  - What I believe I already do at the next level:
  - What I know I have not done yet:
  - The process: who decides, who advocates, when it happens, and what the
    packet format is:

  ## Produce in this order

  1. **The gap analysis.** Map my notes against the next level's expectations.
     For each expectation: evidence I have, evidence I partly have, and no
     evidence. Name the single biggest gap.

  2. **The argument in one paragraph.** The case as my manager would say it
     to a room of people who do not know me. If it does not survive that
     paragraph, no amount of evidence will save it.

  3. **Evidence, strongest first.** Each item as: the situation, what I
     decided, what changed, who saw it, and which expectation it proves.
     Flag any item that proves craft rather than scope.

  4. **Scope evidence.** The part most packets miss: work I did that crossed
     team boundaries, people I influenced without authority, decisions I made
     that were mine to make. Name them explicitly.

  5. **The gaps I should name myself.** Two or three, each with what I am
     doing about it and what would count as closed. A packet that names its
     own gaps is harder to attack than one that does not.

  6. **The packet outline.** Sections in the order the committee reads them,
     with the one line that has to land in each.

  7. **What to ask my manager.** The questions that establish whether they
     will advocate, what they need from me, and what happens if the answer is
     no this cycle.

  ## Hard rules
  - Do not invent evidence. If an expectation has no support, say so plainly.
  - Do not turn achievements into scope. Shipping a lot at the current level
    is not the same as operating at the next one, and committees know it.
  - Do not write anything I could not say to a colleague's face. Packets get
    read by people who know the work.
  - No comparisons to named peers. "More senior than X" is not evidence and
    it damages the room.
  - Do not promise an outcome. The packet is an argument, not a decision.
  - If the honest gap is large, say so and give the shortest path to closing
    it rather than padding the case.
workflow:
  - "Map the work against the next level's expectations"
  - "State the argument in one paragraph"
  - "Order the evidence and tag each item to an expectation"
  - "Collect the scope and influence evidence"
  - "Name the gaps and what closes them"
  - "Outline the packet and the questions for your manager"
output_preview: "A gap analysis against the next level, the case in one paragraph, evidence ordered and tagged, scope and influence called out, gaps named honestly, a packet outline, and questions for your manager."
how_to_use:
  - "Paste the next level's expectations word for word if you have them. Without them the analysis is guesswork, and committees score against a rubric you have not seen."
  - "Include the work that failed. A packet with no failures reads as curated, and the committee will ask about the gaps anyway."
  - "Describe the process. A packet for a manager who decides alone is short; one for a calibration committee needs every claim sourced."
  - "Run it once for the strongest case, then once asking it to argue against you. The second pass tells you where the room will push."
tips:
  - "Promotion is granted for scope you already hold, not potential you might show. If every example is within your current remit, the case is not ready."
  - "Get your manager to say the one-paragraph argument out loud before the packet is written. If they cannot, the packet will not fix that."
  - "Attribute shared work precisely. Committees discount unsourced claims and they discount vague ones harder."
  - "Ask what happens if the answer is no this cycle. A written plan with a date is worth more than a promise to try again."
example_output: |
  GAP ANALYSIS
  Expectation: owns a problem area end to end. Evidence: strong. I set the
  roadmap for activation and defended it twice at planning.
  Expectation: influences decisions outside their team. Partial. Two
  examples, both with the same partner team. Nothing with platform or sales.
  Expectation: mentors. No evidence. I have reviewed code but never owned
  someone's growth.
  Biggest gap: cross-team influence with more than one partner.

  THE ARGUMENT
  Priya has been running activation as an owner for three quarters, not as a
  contributor: she set the strategy, killed two projects that were not
  working, and moved the metric from 34% to 51%. The one thing missing is a
  second partner team, and she has started that with platform this quarter.

  EVIDENCE (strongest first)
  - Activation rebuild. Decision: cut the feature tour, lead with the first
    value moment. Changed: week-one activation 34% to 51%. Seen by: the
    analytics lead, the head of growth. Proves: problem ownership.
  - Migration of 1,200 accounts with no downtime. Decision: phased by
    cohort rather than by date. Seen by: support and the platform team.
    Proves: execution at scale, not scope.
  - Onboarding review forum. Decision: started it and ran it for 14 weeks.
    Seen by: three teams who now use it. Proves: influence, weakly, because
    I ran it rather than changing how someone else ran theirs.

  SCOPE EVIDENCE
  - Killed the paid onboarding experiment after two weeks on my own call and
    told the VP why. That was a decision above my level, made once.
  - Platform adopted my event schema for activation. I did not own that team;
    I convinced their lead with the data.

  GAPS I NAME MYSELF
  1. Cross-team influence beyond one partner. Closing: the platform schema
     work this quarter, with a written outcome by March.
  2. Mentoring. Closing: I have asked to take the next intern and to review
     for one junior engineer weekly.

  PACKET OUTLINE
  1. Scope: what I own now that I did not own a year ago. Line that lands:
     "She sets the activation roadmap and defends it at planning."
  2. Impact: the three results with numbers and sources.
  3. Influence: the platform schema, and what changed because of it.
  4. Gaps and plan: two gaps, both with dates.
  5. Ask: the level, effective this cycle.

  QUESTIONS FOR MY MANAGER
  - Will you advocate for this, and what would make you hesitate?
  - Which expectation do you think the committee will question most?
  - What do you need from me before the packet goes in?
  - If it does not land this cycle, what is the written plan and the date?
faq:
  - q: "What if my manager says I am not ready?"
    a: "Ask which expectation is missing and what evidence would satisfy it. A vague no is a scheduling problem; a specific gap is a plan. The prompt's gap analysis is designed to make that conversation concrete."
  - q: "Do I need the next level's written expectations?"
    a: "Strongly recommended. Without them you are guessing at the rubric, and the committee is not. If your company has no levels document, ask your manager to write the three things they would need to see, and use that."
  - q: "Should I write the packet myself?"
    a: "Draft it, then hand it to your manager. Committees expect the manager's voice, and a self-written packet that reads as self-promotion gets discounted. The prompt writes the argument as your manager would say it, which is the version that travels."
  - q: "How far back should the evidence go?"
    a: "Twelve to eighteen months, with the strongest work in the most recent two quarters. Older wins suggest you have not operated at that level lately, which is the opposite of the case you are making."
---
