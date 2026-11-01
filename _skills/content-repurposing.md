---
title: "Content Repurposing"
slug: content-repurposing
category: content
date: 2026-11-01
excerpt: "Turns one strong asset into platform-native posts, emails, and scripts without copying the same caption to every channel."
creator: "F9XR Team"
license: "MIT"
version: "1.0.0"
tags: [content, repurposing, social media, distribution, editorial]
usage: |
  Use the content-repurposing skill on this article. Keep the core idea, then
  produce native versions for LinkedIn, X, a newsletter, and a short video.
skill_file: |
  ---
  name: content-repurposing
  description: Repurpose one source asset into platform-native formats while preserving a single core idea and avoiding copy-paste captions.
  ---

  # Content Repurposing

  Use this skill when one piece of content should travel across several
  channels without becoming the same post with a different logo.

  ## Inputs

  - The source asset: article, talk, podcast, case study, or thread
  - The audience on each destination platform
  - The one idea that must survive every version
  - The proof: numbers, quotes, or a concrete story
  - Calls to action, if any, and what is off limits

  If the source has no single clear idea, fix that first. Repurposing an
  unclear asset multiplies the confusion.

  ## Method

  1. Write the core idea in one sentence, in plain language. This sentence is
     the constraint for every variant.
  2. List the proof that supports it. Keep the same proof across formats so the
     story stays consistent.
  3. For each platform, answer three questions:
     - What does the reader expect here?
     - How much context do they already have?
     - What action is natural on this platform?
  4. Write the native version. Do not shorten the original line by line and
     call the result a post.
  5. Cut one format. A plan that covers every channel is usually a plan that
     covers none well.
  6. Name what should be held back for a follow-up so the idea has a second
     life.

  ## Output shape

  - **Core idea.** One sentence.
  - **Proof.** The facts, numbers, or moments that carry it.
  - **LinkedIn post.** Short paragraphs, one idea, no hashtag stuffing.
  - **X post.** Under 280 characters, first five words carry the meaning.
  - **Newsletter section.** A lead, the idea, the proof, one link.
  - **Short video script.** Hook, three beats, and a close.
  - **Held back.** The angle for the next post.

  ## Rules

  - Keep the core idea identical across every format.
  - Change the structure for each platform, not just the length.
  - Never invent a result, a testimonial, or a statistic to fit a format.
  - No engagement bait, no "agree?", no fake urgency.
  - No hashtags unless the platform audience already uses them.
  - Never post the same wording on two channels in the same week.

  ## Done test

  A reader who sees two versions should recognise the same idea without
  feeling they read the same post twice.
related_skills: [content-matrix, post-writer, hook-generator]
---

This skill protects the idea while changing the packaging. The core sentence and the proof are fixed, and everything else is written for the platform rather than trimmed from the original.

It also forces a decision about what not to publish now. Repurposing works best when an asset has more than one angle, not when one angle is sprayed everywhere.

Works in any `SKILL.md` agent. Pair it with a scheduling or publishing MCP server if you want the output to move without manual copying.
