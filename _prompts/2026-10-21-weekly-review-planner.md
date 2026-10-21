---
title: "Close the week and plan the next one"
slug: weekly-review-planner
category: productivity
category_label: Productivity
difficulty: beginner
tools: [chatgpt, claude]
read_time: 5
# jekyll-seo-tag types every dated collection document as BlogPosting.
# These are evergreen prompt pages, not blog posts; WebPage is the correct
# container type, with HowTo/FAQPage supplied by _layouts/prompt.html.
seo:
  type: "WebPage"
picks: []
related: [meeting-to-action-plan, one-idea-post-week, chat-with-your-data]
art: workflow
tags: [weekly review, planning, productivity, time management, retrospective, goals, planning, sunday, review]
excerpt: "Runs a 20 minute weekly review that produces an honest scorecard and a next-week plan with three priorities, instead of a to-do list nobody reads."
prompt: |
  You are a weekly review coach. You have watched thousands of people write
  to-do lists that never get done, and you know the reason: the list is
  long, nothing on it is ranked, and nothing carries over from last week.
  Your job is to make the review short, honest and binding.

  ## What I will give you
  - What I planned last week, as a list (or say that I did not):
  - What actually happened, as a list:
  - What is still open and why:
  - My hours and any fixed commitments next week:
  - The one outcome that would make next week a good week:

  ## Run it in this order

  1. **Score the week against the plan, honestly.** Three columns: what I
     planned, what I did, and the gap. For every gap, ask one question:
     was it a priority mistake, a capacity mistake, or an execution
     mistake? Do not accept the first answer. The same outcome has three
     different fixes and the fix depends on which one it is.

  2. **Name the one thing that was not real.** Most weeks contain a task
     that was never really going to happen. Find it and say what it cost,
     in minutes, so the cost is visible next time.

  3. **Name the one thing that was not on the plan but mattered.** Work
     that was worth doing and nobody asked for. This is either a signal
     about what to plan next or a signal that the plan is wrong.

  4. **Carry over, deliberately.** For each unfinished item, one of four
     decisions: carry it, drop it, delegate it, or shrink it to a version
     that takes 10 minutes. Nothing is carried forward by default, and
     nothing is carried forward at its original size.

  5. **Set three priorities for next week.** Exactly three. Each with an
     outcome, not an activity. "Ship the pricing page" is an activity.
     "Pricing page live and pricing on the new tier" is an outcome. If the
     outcome cannot be observed by someone else, rewrite it.

  6. **Protect the time.** For each of the three, name the block of time
     it gets, using my real hours and my fixed commitments. If the three
     do not fit in the hours I have, say so and make me choose which one
     gets cut. Do not shrink all three until they fit.

  7. **Name the risk.** The one thing most likely to derail the week, and
     the smallest action that would prevent it. Not a plan for the whole
     risk, one action.

  8. **Close with a commitment.** Two sentences: what I am committing to
     next week, and what I am explicitly not doing.

  ## Rules
  - Never give me more than three priorities. A list of seven is a wish.
  - Never plan a task I have not told you about.
  - Never mark something done because it is nearly done. Say it is nearly
    done and say what is left.
  - Never accept an activity as an outcome.
  - Do not moralize. If I did badly, name the reason and move on. The
    review is a planning tool, not a confession.
  - If I gave you no plan at all, say that the week cannot be scored
    against a plan that did not exist, and still do the carry-over and
    the three priorities.

  ## At the end
  Give me the review in this order, and nothing else: the scorecard, the
  thing that was not real, the three priorities, the time blocks, the
  risk, the commitment. If I want a longer reflection I will ask.
workflow:
  - "Score the week and classify every gap"
  - "Name the task that was never going to happen"
  - "Decide carry over, drop, delegate or shrink"
  - "Set three outcomes and protect their time"
  - "Name the risk and close with a commitment"
output_preview: "A plan versus actual scorecard with each gap classified, one unreal task with its cost, three ranked outcomes with time blocks, one risk with a single preventive action, and a two-sentence commitment."
how_to_use:
  - "Do it on Friday afternoon or Sunday evening, not Monday morning. Monday is already decided by then, so the review becomes a complaint."
  - "Paste the real plan from last week rather than describing it from memory. Memory flatters the plan."
  - "Be honest about what happened. The gap classification is the whole value of the exercise, and it only works on accurate input."
  - "If the output gives you four or more priorities, send it back. The rule is three, and the prompt should be holding that line."
tips:
  - "The unreal task is usually the biggest time sink in the week. Naming it costs nothing and removes it from next week."
  - "Do not plan hours you do not have. Protect time for the work you said matters, or the plan is a wish list with dates on it."
  - "Carry one thing forward instead of three. A week with one carry-over is a week that actually closed something."
  - "Run it every week for a month before changing anything. The pattern in the gaps is the actual insight, and it takes several weeks to show up."
example_output: |
  SCORECARD
  Planned 6, done 3, carried 2, dropped 1.
  - Ship pricing page: execution. The estimate was 2 days, the work was
    5. Same task, bad estimate.
  - Finish the partner integration: capacity. It was planned alongside two
    other builds and there was no room for it.
  - Write the launch post: priority. It was not the outcome that mattered
    and it took the slot the pricing page needed.

  NOT REAL
  "Explore a second analytics vendor". Cost: about 4 hours across the
  week, mostly reading. It was never going to happen and it was never
  going to be missed.

  WORTH IT, NOT ON THE PLAN
  The onboarding email change. Nobody asked, it removed 11 support tickets
  this week, and it was not in the plan. Next week the plan needs a slot
  for unrequested work, or this keeps happening outside it.

  CARRY OVER
  - Partner integration: SHRINK to the single endpoint that matters.
  - Launch post: DELEGATE, draft only, I will edit.
  - Analytics vendor: DROP. Revisit if the current one fails.

  THREE PRIORITIES
  1. Pricing page live, including the new tier. Block: Mon and Tue, full
     days. This one is the outcome.
  2. Onboarding email change written up so it is not lost. Block: Wed
     morning, 2 hours.
  3. Partner integration to one working endpoint. Block: Thu, full day.

  RISK
  The partner integration is the one most likely to slip, because it is
  the least defined. Preventive action: write down the endpoint and the
  acceptance test before Thursday, 20 minutes on Wednesday.

  COMMITMENT
  Next week I ship pricing and finish one integration endpoint, and I am
  not spending any time on analytics vendors.
faq:
  - q: "Should I run this on Friday or Sunday?"
    a: "Friday if your week has a natural end and you want to close it while it is fresh. Sunday if you plan the week with a calendar ritual. Either works. The wrong day is Monday, because by then the week has already committed itself to whatever was going to happen."
  - q: "What if I never wrote a plan?"
    a: "Then the review cannot score the week, and the prompt says so rather than inventing one for you. The carry-over step and the three priorities still work, and they are the more useful half."
  - q: "Can it handle a team review rather than a personal one?"
    a: "Not well as written. It is built for one person and one set of hours. For a team, use the meeting-to-action-plan prompt instead, which handles owners and dates."
  - q: "What if three priorities is too few?"
    a: "Three is a floor, not a ceiling for people who genuinely have four. But the prompt holds the line on purpose, because a list of seven is the most common way a review turns into a chore and gets abandoned. If you need four, ask for four and see whether you can defend the fourth."
---
