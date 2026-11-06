---
title: "AI Slop Scan"
slug: ai-slop-scan
category: writing
date: 2026-11-04
excerpt: "Scores a draft for AI slop across vocabulary, rhythm, structure, evidence, and formatting, then returns exact line fixes instead of vague advice."
creator: "F9XR Team"
license: "MIT"
version: "1.0.0"
spotlight: false
featured: false
tags: [writing, editing, ai-slop, audit, quality]
usage: |
  Scan this draft for AI slop. Do not rewrite yet.

  Return a score out of 100, the five worst passages, and the exact fix for
  each one. Keep every fact, number, and quote.

  Draft:
  [paste the text]
related_skills: [avoid-ai-writing, humanizer, human-article-writer, copy-editing]
skill_file: |
  ---
  name: ai-slop-scan
  description: Audit text for AI slop and return a scored, line-by-line report. Use when the user asks to scan, score, detect, or review a draft for AI writing, generic model prose, AI tells, slop, or low-quality generated content.
  ---

  # AI Slop Scan

  Goal: find the patterns that make text read as model output, grade them by
  how much they damage the page, and point at the exact line that needs work.

  Slop is not a single phrase list. It is five problems at once: generic
  vocabulary, flat rhythm, template structure, unsupported claims, and
  decorative formatting. Score each one and show the evidence.

  ## Modes

  - **Scan only** (default): report findings, change nothing.
  - **Scan and fix**: rewrite only the flagged passages, keep facts intact,
    then re-score the result.
  - **Compare**: scan two drafts and say which is less sloppy, with reasons.

  Ask which mode only if the request is ambiguous. Otherwise scan.

  ## Scan workflow

  1. Read the whole draft before scoring. A pattern that appears once may be
     fine. Clusters are the problem.
  2. Count the signals below. Quote the line and the line number when possible.
  3. Score each category out of 20. Total out of 100.
  4. Rank findings by reader damage, not by how easy they are to spot.
  5. Return the report in the format below.
  6. In fix mode, rewrite the top findings and re-run the scan.

  ## Scoring

  | Category | 20 means | 0 means |
  | --- | --- | --- |
  | Vocabulary | Plain nouns and verbs, no stock phrases | Dense with flagged AI words |
  | Rhythm | Mixed sentence and paragraph lengths | Every sentence the same shape |
  | Structure | Order follows the reader's question | Hook, table, list, FAQ, recap |
  | Evidence | Every claim has a source or concrete detail | Stats decorate a decided point |
  | Formatting | Only formatting that helps scanning | Bold lead-ins and emoji everywhere |

  Bands: 85 to 100 clean, 70 to 84 light editing, 50 to 69 rewrite passages,
  below 50 rebuild the draft.

  ## Signals to count

  ### Vocabulary

  delve, tapestry, testament, beacon, landscape, realm, navigate, journey,
  embark, unlock, unleash, elevate, empower, foster, leverage, harness, robust,
  seamless, pivotal, crucial, vital, multifaceted, holistic, nuanced, intricate,
  profound, remarkable, genuinely, truly, deeply, ultimately, essentially,
  furthermore, moreover, additionally, in conclusion, it is worth noting,
  importantly, in today's fast-paced world, ever-evolving, game-changer,
  at its core, plays a key role, a wide range of, serves as, stands as.

  Also flag hedge stacks: may potentially, can often, tends to generally,
  it could be argued that.

  ### Rhythm

  - More than half the sentences fall between 15 and 25 words.
  - Three or more consecutive paragraphs have the same sentence count.
  - A one-sentence paragraph used for fake drama, repeated more than once.
  - Every section opens with the same shape: claim, explanation, example.

  ### Structure

  - Hook, short answer box, table, numbered list, FAQ, Bottom Line.
  - Every section the same length.
  - A conclusion that repeats the article.
  - Headings like Understanding X, The Power of X, Key Takeaways, Final Thoughts.

  ### Evidence

  - A number with no year, sample, or country.
  - A statistic that supports a conclusion already stated.
  - Every data point pointing the same way.
  - Named studies with no link or title a reader could check.
  - Generic scenes: "Imagine a manager who..." instead of a real case.

  ### Formatting

  - A bold lead-in on every list item or paragraph.
  - Emoji used as section markers.
  - Bold on whole sentences.
  - Bullet lists where two sentences of prose would be clearer.
  - Tables comparing fewer than three items.

  ### Sentence templates

  - Contrast flip: "It is not X, it is Y." See more than once.
  - Rhetorical question then answer: "So what does this mean? It means..."
  - Colon reveal: "It describes something far more useful: ..."
  - Fake reassurance: "It didn't." "You're not alone." "And that's okay."
  - Rule of three used as a default list length.
  - Aphorism endings that restate the paragraph as a quote.
  - "Whether you're X or Y" openers.
  - Second-person mind reading: "Your first reaction was probably..."

  ### Locale leaks

  Mixed currency, mixed spelling (colour and color), or examples from the
  wrong market. Pick one market and flag every leak.

  ### Shipping debris

  [ADD EXAMPLE], [insert ...], TODO, XX%, lorem ipsum. Anything left in a
  published draft is the loudest tell.

  ## Report format

  ```
  AI Slop Score: 62/100 (rewrite passages)
  Vocabulary 13/20 | Rhythm 11/20 | Structure 14/20
  Evidence 12/20 | Formatting 12/20

  Worst findings
  1. Line 14, vocabulary cluster: "unlock", "seamless", "elevate" in one
     sentence. Fix: replace with the actual action ("removes two steps").
  2. Lines 22-31, flat rhythm: six sentences of 19-24 words. Fix: cut to
     four and make one under eight words.
  3. Line 40, decorative stat: "87% of teams" with no source. Fix: cite the
     report and year, or remove the number.
  ...
  ```

  Always include the fix, not just the problem. A finding without a fix is
  noise.

  ## Fix rules

  - Keep every supported fact, name, number, and quote.
  - Never add an anecdote, client, study, or statistic that was not present.
  - Prefer deleting a sentence to rewriting it.
  - Replace abstract claims with a concrete noun or verb from the topic.
  - Vary sentence length on purpose, not by sprinkling fragments everywhere.
  - If a section has no job, cut it instead of polishing it.
  - Re-score after fixing. Stop when the score stops moving.

  ## Voice profiles

  When the user names a register, adjust the fix:

  - **Casual**: contractions, short sentences, first person.
  - **Professional**: direct, no slang, still plain words.
  - **Technical**: precise terms, no marketing adjectives, show the mechanism.
  - **Warm**: plain kindness, no performed empathy.
  - **Blunt**: short, opinionated, no cushioning.

  ## Final check

  A clean scan can still be boring. After scoring, ask: what does this piece
  teach, what does the writer believe, and what can the reader do next? If any
  answer is missing, say so. The score alone is not the goal.
---

AI slop is a cluster problem, not a word problem. One "robust" will not sink a page. A page built from the same five sentence shapes, decorated stats, and a recap at the end will read like every other model output regardless of how clean the vocabulary looks.

This skill scores five damage areas separately so the report points at the pattern that actually hurts: stock vocabulary, flat rhythm, template structure, unsupported claims, or decorative formatting. Every finding comes with the exact line and the fix, which makes it usable as an editorial pass rather than a lecture.

Run it before a humanizer pass to find the structural problems, then run it after to confirm the score moved. Pair it with Humanizer for the line edit and Copy Editing for grammar and consistency.
