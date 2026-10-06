---
layout: post
title: "The [NEEDED] convention"
description: >-
  Tell a model to write [NEEDED] instead of guessing, and a fabrication
  becomes a to-do list. How the convention works, where it breaks, and how to
  close the loop.
tags: [Prompting, Reliability, Guides]
---

Ask a model for a customer case study and it will write one. Not because it
knows anything about your customers, but because a case study-shaped gap in the
prompt is an invitation, and models are built to fill gaps. You get three
paragraphs of plausible fiction with a real-looking metric in the middle of it.

The usual fix is a prohibition: *do not invent statistics.* It helps, and it is
not enough. A prohibition tells the model what not to do without telling it
what to do instead, so you get a hedged sentence where a number used to be.

## Give it a legal way to decline

The `[NEEDED]` convention is more effective because it replaces the forbidden
behaviour with an instruction:

> Never invent a source, a number, or a date. If you need one and I did not
> give it to you, write `[NEEDED]` and state exactly what you need.

Now the gap produces a `[NEEDED]` marker instead of a fabrication. That marker
is worth more than the number was, because it is a work item. A model that
invents a 23% uplift cost you an afternoon of checking; a model that writes
`[NEEDED: current churn rate, from your analytics dashboard]` cost you a
two-second lookup and gave you a real answer.

## What it actually changes

Three things, in order of usefulness.

**You find the gaps before you act on them.** A prompt that always returns
output tells you nothing about whether it had enough to work with. `[NEEDED]`
markers are the model reporting its own insufficiency, which is information you
would otherwise only get by reading the output critically, after you had
already drafted around it.

**The follow-up is a fact, not a conversation.** "What is your current churn
rate?" is a question with an open answer. `[NEEDED: monthly churn rate, last
six months]` is a request you can fulfil in one action. You can paste the answer
straight back and get the finished work.

**The failure is visible in review.** A document containing `[NEEDED]` cannot
be shipped by accident. A document containing a plausible wrong number can.

## Where it breaks

Honesty about the limits, because this is a site that tells you to verify AI
output.

**The model may still guess quietly.** Some models will produce a number and a
`[NEEDED]` marker for a different missing item, satisfying the letter of the
instruction. Scan for both, not just the markers.

**Over-use makes output unreadable.** A prompt with twelve `[NEEDED]` markers
has not been helped; it has been told it cannot do its job. If most of the
output is markers, the fix is a better input, not a stricter prompt.

**It does not verify what you do supply.** `[NEEDED]` stops invention. It does
nothing about a figure you provide that is itself wrong. That check is still
yours.

**It is not a substitute for scoping.** Asking for twelve deliverables in one
prompt and flagging every missing input just produces a longer list of markers.
Decide what the output is for before you ask for it.

## Closing the loop

The convention only pays off if you act on the markers. Treat them as a
checklist, not decoration:

1. Run the prompt with your real input.
2. Collect every `[NEEDED]` marker.
3. Answer them, in one batch if you can.
4. Re-run with the same prompt and the answers filled in.
5. Check that the output now says what you expected.

Step four is the one people skip, and it is where the value is. The second run
is the first genuinely useful output; the first run was a requirements
conversation you would have had anyway.

## Where this lives in the library

Every prompt on this site uses the convention, because a prompt that invents an
owner or a deadline is worse than one that admits it needs one. You can see it
doing the work in
[Turn meeting notes into an action plan]({{ '/prompts/meeting-to-action-plan/' | relative_url }}),
where unassigned actions come back flagged rather than filled in with a guess.

The wider version of the idea, giving the model a way to fail that is better for
you than guessing, is the first of the five techniques in
[the prompting basics]({{ '/resources/' | relative_url }}#prompting-basics).