---
title: "Turn meeting notes into an action plan"
slug: meeting-to-action-plan
category: productivity
category_label: Productivity
difficulty: beginner
tools: [chatgpt, claude, gemini]
# Shared across every prompt page rather than measured per page: the pages
# differ by well over 5% in length. Also feeds the HowTo totalTime.
read_time: 7
# jekyll-seo-tag types every dated collection document as BlogPosting.
# These are evergreen prompt pages, not blog posts; WebPage is the correct
# container type, with HowTo/FAQPage supplied by _layouts/prompt.html.
seo:
  type: "WebPage"
picks: []
# Every prompt sits in its own category, so the layout's
# same-category fallback can never match. These are curated.
related: [deep-research-synthesis, seo-content-strategy]
art: workflow
tags: [meetings, notes, project management, follow-up, summaries]
excerpt: "Converts raw notes into decisions, actions with owners and dates, and open questions, and refuses to invent an owner or a deadline that nobody agreed to."
prompt: |
  You are a project manager writing the follow-up note nobody wanted to write.
  You are precise about the difference between what was decided and what was
  merely discussed, and you would rather leave a field blank than guess.

  ## What I will give you
  - Raw notes, transcript fragments, or my bullet points:
  - Who was in the room, with roles:
  - The project and its deadline:

  ## Produce, in this order

  1. **Decisions.** Only things actually decided. For each: the decision, who
     made it, and the sentence from the notes that supports it. If I have not
     given you that sentence, write UNCONFIRMED next to it.

  2. **Action items.** For each: the verb, the owner, the deliverable, the
     date, and the blocker if there is one. An owner must be a named person
     from the attendee list. If the notes do not assign one, write
     UNASSIGNED and flag it as needing a decision. Do not pick the most
     likely person.

  3. **Open questions.** Everything raised and not resolved, with the name of
     whoever needs to answer it.

  4. **Disagreements.** Anywhere two people appear to have wanted different
     things, stated neutrally. If there were none, say so in one line.

  5. **The note I would actually send.** Under 200 words. Decisions, actions
     with owners and dates, questions. No summary of the conversation, no
     pleasantries, nothing about how the meeting went.

  ## Rules
  - Never invent an owner, a date, a number, or a commitment.
  - UNASSIGNED and UNCONFIRMED are correct answers. Use them.
  - Separate what was said from what was decided. Those are the two most
    common failures in meeting notes and they have very different costs.
  - If the notes are too thin to produce section 2, produce section 3 and
    ask me for the missing detail.
  - Do not summarise the discussion. If it was not a decision or an action,
    it does not belong in the note.
workflow:
  - "Separate decisions from discussion"
  - "Bind each action to a named owner"
  - "Flag every missing owner or date"
  - "Compress to a sendable note under 200 words"
output_preview: "Decisions with supporting quotes, an action table with UNASSIGNED flags, unresolved questions, and a 200-word note ready to paste into the thread."
how_to_use:
  - "Paste the attendee list with roles. Without it the prompt cannot tell an assignment from a suggestion."
  - "Include the transcript rather than your summary if you have it. Your summary has already lost the disagreements."
  - "Send section 2 on its own if that is all you need for a standup."
  - "Treat the UNASSIGNED flags as the agenda for the next five minutes of the meeting."
tips:
  - "The prompt refusing to name an owner is the feature, not a limitation. Most follow-up notes fail because a name was assumed."
  - "If it produces UNASSIGNED too often, your notes are too thin. Better to record decisions properly than to reconstruct them."
  - "Ask for section 5 in your own register after it drafts one, then reuse that as the tone instruction."
  - "Check every date against your own calendar before sending. Dates are the easiest thing to hallucinate and the most embarrassing."
example_output: |
  ACTIONS
  Rewrite the intake form        RELEVANCE: UNASSIGNED   by 14 Mar  DELETE
  Confirm vendor pricing with D. UNASSIGNED, needs a name before 21 Mar
  Send revised quote to Northgate  D. Patel              12 Mar
  Migrate the archive                DELETED, dropped

  OPEN QUESTIONS
  Who owns the archive migration after D. Patel's deadline? (asked by S.)
  Does the intake change need legal sign-off? (raised, unanswered)

  NOTE (168 words)
  Decisions: intake form drops the redundant field; Northgate quote goes
  out revised by 12 March; archive migration is not scheduled.
  Actions: D. Patel sends the revised quote by 12 March. Vendor pricing
  confirmation and the intake rewrite have no owner yet.
  Open: legal sign-off on the intake change; ownership of the archive
  migration.
faq:
  - q: "Can I paste a raw transcript?"
    a: "Yes, and it is better than bullet points. The prompt anchors each decision to a supporting sentence, which only works if the sentences exist. Expect to trim very long transcripts to the meeting itself."
  - q: "Why so many UNASSIGNED flags?"
    a: "Because almost every real meeting contains actions that everybody assumed somebody else had taken. Surfacing them is the entire value of the prompt."
  - q: "Does it work for standups?"
    a: "The structure is too heavy for daily standups. Ask only for section 2 and section 3 and you get a usable two-minute digest."
  - q: "What about recording the decisions elsewhere?"
    a: "Section 1 is written to be pasted straight into a decision log, with the supporting quote intact so the record can be audited later."
---