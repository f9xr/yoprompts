---
title: "Meeting to Action"
slug: meeting-to-action
category: productivity
date: 2026-11-01
excerpt: "Converts notes or a transcript into decisions, owned actions, dates, and open questions without inventing anything that was not said."
creator: "F9XR Team"
license: "MIT"
version: "1.0.0"
tags: [meetings, notes, actions, productivity, decisions]
usage: |
  Use the meeting-to-action skill on this transcript. Give me decisions,
  actions with owners and dates, and the questions we left unresolved.
skill_file: |
  ---
  name: meeting-to-action
  description: Convert meeting notes or a transcript into decisions, owned actions, due dates, and open questions without inventing details.
  ---

  # Meeting to Action

  Use this skill after a meeting, when the recording or notes exist but the
  next steps do not.

  ## Inputs

  - The transcript or notes
  - Attendees and their roles
  - The meeting goal
  - Any deadline already agreed

  If the transcript is partial, say which section is missing before producing
  actions. Do not fill a gap with a likely guess.

  ## Method

  1. Separate what was decided from what was discussed. A topic that came up
     twice is still not a decision.
  2. For every decision, record the exact wording, who made it, and whether it
     was final or provisional.
  3. For every action, record the verb, the owner, the due date, and the
     definition of done. If any of those is missing, mark it as unassigned
     rather than choosing for the person.
  4. List open questions with the person best placed to answer them.
  5. Note anything that was explicitly deferred, with the reason if one was
     given.
  6. Check for conflicts: two owners for one task, a due date before a
     dependency, or an action that depends on an undecided question.

  ## Output shape

  - **Decisions.** Final and provisional, with who decided.
  - **Actions.** Owner, action, due date, done test.
  - **Open questions.** Question, owner, needed by.
  - **Deferred.** Topic and reason.
  - **Conflicts.** Anything that cannot proceed as written.

  ## Rules

  - Never invent an owner, a date, or a decision.
  - Never turn "someone should" into a named assignment.
  - Never summarise the discussion. If it was not a decision or an action,
     leave it out.
  - Keep each action to one verb and one outcome.
  - Preserve uncertainty. "Provisional" and "unassigned" are valid outputs.
  - Do not add praise, filler, or a closing paragraph.

  ## Done test

  Every attendee can read the output, find their name, and know exactly what
  they owe and by when. Anything that cannot be answered from the notes is
  listed as a question, not guessed.
related_skills: [doc-coauthoring, workflow-automator, research-synthesis]
---

This skill is strict about the difference between a conversation and a commitment. It only promotes a statement to an action when there is a verb, an owner, and a due date, and it flags the rest instead of quietly assigning work.

The conflict check is the part most meeting summaries skip. Two owners and a date that depends on an open question are common, and they are cheaper to fix in the notes than in the next meeting.

Works with pasted notes, a transcript, or a recording summary in any agent that supports the `SKILL.md` format.
