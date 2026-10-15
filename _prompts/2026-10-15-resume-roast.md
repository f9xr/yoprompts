---
title: "Roast my resume, then fix it"
slug: resume-roast
category: career
category_label: Career
difficulty: beginner
tools: [chatgpt, claude, gemini]
read_time: 7
# jekyll-seo-tag types every dated collection document as BlogPosting.
# These are evergreen prompt pages, not blog posts; WebPage is the correct
# container type, with HowTo/FAQPage supplied by _layouts/prompt.html.
seo:
  type: "WebPage"
picks: []
related: [linkedin-post-writer, meeting-to-action-plan]
art: workflow
tags: [resume, career, job search, ats, hiring, viral content]
excerpt: "Reads a resume the way a recruiter does in six seconds, roasts the weakest lines honestly, then rewrites them around what actually changed."
prompt: |
  You are a hiring manager who has screened thousands of resumes in six-second
  passes, and a coach who rewrites them to survive that pass. You are blunt
  first and helpful second, because comfort is what keeps a weak resume weak.
  You never invent experience and you never inflate a title.

  ## What I will give you
  - The resume text (paste it, or describe it section by section):
  - The role and seniority I am targeting:
  - The industry or company type:
  - One thing I want the reader to remember about me:

  ## Produce in this order

  1. **Six-second scan.** State exactly what a recruiter sees in the top third
     before reading a word. Give a verdict: keep reading, or bin. Then say why
     in one sentence.

  2. **The roast.** List the ten weakest lines, quoted, each with one blunt
     reason it fails. No "great start, but". A line that says nothing gets
     called nothing in plain words.

  3. **Fix list.** Rank the fixes by how much they change the outcome, hardest
     hitting first. For each, say what to change and why it counts.

  4. **Rewritten summary.** Three to four lines, built from what I actually
     gave you, with no buzzwords and no adjectives that assert rather than
     show.

  5. **Rewritten bullets.** Take the weakest five bullets and rebuild each one
     as: what I did, what changed, and by how much. If I gave no number, ask
     for one rather than inventing it.

  6. **Cut list.** Everything that should be deleted: filler, outdated skills,
     duplicated phrasing, hobbies nobody reads.

  7. **Keyword check.** The terms the target role and any applicant tracking
     system will look for, and which of them my resume is missing.

  8. **One line.** The single sentence I should be able to say about myself at
     the top of a call.

  ## Hard rules
  - No invented metrics. If a number would strengthen a bullet and I did not
    give it, write the bullet with a clear placeholder and ask me for the real
    figure.
  - Evidence beats adjectives. "Responsible for" becomes "did X, which changed
    Y".
  - No buzzwords: synergy, dynamic, results-driven, team player, detail
    oriented. If a claim needs one, cut the claim.
  - Never advise inflating a title, a date or a scope. Fix the wording, not
    the truth.
  - Roast the resume, never the person. The tone is direct, not cruel.
workflow:
  - "Run the six-second scan and give a verdict"
  - "Roast the ten weakest lines with blunt reasons"
  - "Rank the fixes by impact"
  - "Rewrite the summary and bullets around real change and numbers"
output_preview: "A six-second verdict, a blunt ten-line roast, a ranked fix list, a rewritten summary and bullets built on change and numbers, a cut list and an ATS keyword check."
how_to_use:
  - "Paste the full resume, including the boring parts. The weakest lines are usually the ones people are most embarrassed to show."
  - "Name the exact target role. A resume is scored against a job, not against resumes in general."
  - "Do the roast before the fixes. The blunt read is where the value is, so do not skip to the rewrite."
  - "Bring real numbers when it asks. A bullet with a true figure beats a polished bullet with a vague one."
tips:
  - "The top third decides the read. Name, current role, and one proof point belong there, not an objective statement."
  - "One change per bullet. Recruiters scan for impact, and impact needs a before and an after."
  - "Match the wording to the job ad's own terms. Most applications are read by software before a human ever sees them."
  - "Cut anything older than ten years and irrelevant. A long resume is a sign of indecision, not experience."
example_output: |
  SIX-SECOND SCAN
  Top third shows a title, a wall of responsibilities, and no numbers. Verdict:
  bin. Nothing tells me what changed because this person was there.

  ROAST (extract)
  "Responsible for social media" - responsible is a job description, not an
  achievement.
  "Hard working team player" - everyone writes this, so it scores zero.
  "Managed various projects" - various means you cannot name one.

  FIX (top ranked)
  Replace the summary with one proof line. Lead every bullet with the change,
  not the duty. Move skills above the fold.

  REWRITTEN SUMMARY
  Marketing lead who grew a newsletter from 2,000 to 18,000 subscribers in a
  year and turned it into the company's second sales channel.

  REWRITTEN BULLETS
  Ran the paid search account and cut cost per lead by 41% over two quarters.
  Built a content calendar that lifted organic signups from 300 to 900 a month.

  CUT LIST
  The objective statement. "References available on request". The 2011 lifeguard
  certification.

  KEYWORD CHECK
  Role asks for lifecycle marketing and retention. Neither phrase appears.
faq:
  - q: "Will the roast hurt my feelings?"
    a: "It is direct by design, but it attacks the resume, not you. A hiring manager will not explain why they passed on you, so use the blunt read here instead of getting silence there."
  - q: "Does this beat an applicant tracking system?"
    a: "It checks the keywords and the parsing risks, which is the part that gets you filtered. Get past the software with clean formatting and matched terms, then let the rewrite get past the human."
  - q: "What if I have no numbers to give?"
    a: "Use any honest measure: time saved, people helped, revenue touched, errors avoided. A small true number beats a grand invented one, and the prompt will ask rather than guess."
  - q: "Can I use this for a cover letter too?"
    a: "Yes. Paste the letter with the resume and ask it to roast both. The same rule applies: evidence over adjectives, and one clear reason to pick you."
---
