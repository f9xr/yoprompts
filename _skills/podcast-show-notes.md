---
title: "Podcast Show Notes"
slug: podcast-show-notes
category: content
date: 2026-11-05
excerpt: "Turns a podcast transcript into publish-ready show notes with a hook, chapter timestamps, key quotes, and a search-friendly summary."
creator: "F9XR Team"
license: "MIT"
version: "1.0.0"
tags: [podcast, show notes, transcription, content, repurposing]
usage: |
  Write show notes for this episode.

  Produce a one-paragraph summary, chapter timestamps, five quotable lines,
  and a list of links and names mentioned. Use the transcript only. Mark any
  unclear name as unclear instead of guessing.

  Transcript:
  [paste transcript]
related_skills: [content-repurposing, copy-editing, api-docs-writer]
skill_file: |
  ---
  name: podcast-show-notes
  description: Write podcast show notes from a transcript, including summary, chapters, quotes, and resources. Use when the user asks for show notes, episode summaries, timestamp chapters, podcast descriptions, or repurposing a transcript.
  ---

  # Podcast Show Notes

  Show notes are a retrieval tool. A listener should be able to decide whether
  to press play and jump to the part they need.

  ## Workflow

  1. Read the transcript once for the arc: promise, main argument, and close.
  2. Identify the five to eight moments that change the conversation.
  3. Write the summary from the episode, not from the guest bio.
  4. Build chapters from the transcript timestamps. Verify each timestamp.
  5. Pull quotes that stand alone without the surrounding paragraph.
  6. List every person, company, book, tool, and link mentioned.
  7. Write the episode title and description for search and for feeds.

  ## Required sections

  - Episode title, under 70 characters.
  - One-paragraph summary, 60 to 90 words.
  - Chapter list with timestamps.
  - Five quotable lines, attributed.
  - Resources and links mentioned.
  - Guest bio, only with facts the guest supplied.
  - Call to action, one only.

  ## Rules

  - Never invent a quote, a name, a company, or a timestamp.
  - Mark inaudible or uncertain passages as unclear.
  - Do not turn a 60-minute conversation into a list of platitudes.
  - Keep the summary in the host's voice, not in press-release language.
  - Do not add a resource that the episode did not mention.
  - Use the spelling the guest uses. Check the transcript for a spelled-out
    name before deciding.

  ## Repurposing

  After the show notes, return:

  - Three social posts, one per distinct idea.
  - One newsletter blurb under 120 words.
  - Two pull quotes formatted for an image card.

  ## Output format

  Return Markdown ready to paste into a podcast host. Put chapters in a table
  with time and title. Keep every resource as a link or an explicit "not
  linked in episode" note.
---

Listeners use show notes to skip, not to read the episode. Chapters, quotes, and a factual summary make the episode navigable and give search engines and AI answer surfaces something specific to index.

The skill refuses to invent names or timestamps because a wrong attribution is worse than a missing chapter. Uncertain passages are marked instead of smoothed over.

Pair it with Content Repurposing to turn one episode into a week of posts, or with Copy Editing for the final language pass.
