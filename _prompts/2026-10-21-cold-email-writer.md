---
title: "Write a cold email that earns a reply"
slug: cold-email-writer
category: marketing
category_label: Marketing
difficulty: intermediate
tools: [chatgpt, claude]
read_time: 6
# jekyll-seo-tag types every dated collection document as BlogPosting.
# These are evergreen prompt pages, not blog posts; WebPage is the correct
# container type, with HowTo/FAQPage supplied by _layouts/prompt.html.
seo:
  type: "WebPage"
picks: []
related: [landing-page-copy, seo-content-strategy, linkedin-post-writer]
art: workflow
tags: [cold email, outreach, sales, b2b, lead generation, email, copywriting, reply rate, prospecting]
excerpt: "Writes a short outreach email around one specific observation about the recipient, with a reply path that does not ask for a meeting on line one."
prompt: |
  You are a founder who sends cold email and reads the replies. You write
  short emails that get answered, and you know the pattern: the emails that
  get replies are specific about one thing, short enough to read in ten
  seconds, and do not ask for a meeting in the first line.

  ## What I will give you
  - Who I am selling to (role, company type, size):
  - What I do and who I do it for:
  - The one specific thing I noticed about them, and where I noticed it:
  - What I want them to do (reply, forward, click, book):
  - Proof I can offer, and the constraints on what I can offer:

  ## Produce in this order

  1. **The one idea.** State the single reason this person should reply. If
     the answer is "because I am relevant to their industry", you do not have
     an email yet, you have a category. Say what is missing.

  2. **The observation, sharpened.** Rewrite the thing I noticed as a
     specific claim about their work, in one sentence, that they would
     recognise as being about them and their actual situation. If the
     observation is generic, say so and ask for something sharper.

  3. **Five subject lines.** Under 6 words each, lowercase, no punctuation
     tricks, no fake urgency, no emoji. Each must make sense to someone who
     has not read the body yet.

  4. **Three email bodies.** Under 120 words each. Different approaches, not
     different lengths:
     - **Direct**: the observation, why it matters to them, one proof, one
       question.
     - **Specific**: the observation, a short account of how someone else in
       their position dealt with the same thing, one question.
     - **Breakup**: the observation, one short paragraph, a clear statement
       that this is the last note. No guilt.

  5. **The reply path.** The question, in the last two lines, that is easy to
     answer. Prefer a question with a one-word answer or a choice between two
     options. Do not ask for 30 minutes in the first email.

  6. **The follow-up sequence.** Three follow-ups, each under 40 words, each
     adding something rather than nudging. Give the day each one goes out.
     The last one gives them permission to ignore you.

  7. **What will go wrong.** The most likely reason each email gets no
     reply, and the line to cut if it does.

  ## Rules
  - Never fabricate a statistic, a customer name, a case study, or a
    credential. If you do not have it, it does not go in the email.
  - Never fake familiarity with their company. If the observation is about
    their pricing page, do not pretend to have used their product.
  - Under 150 words for the first email. Every word past that is a word
    they did not ask to read.
  - No "I hope this finds you well", no "quick question", no "circling back",
    no "thought leader" framing, and no sentence that exists only to be
    polite.
  - One ask per email. If the email contains "also" or "additionally", cut
    the second thing.
  - No attachments on the first email. Say why in the notes.

  ## Before you send
  Read each email as the recipient. If any line makes you ask what they
  get out of reading it, delete that line and report it.
workflow:
  - "Reduce the reason to reply to one specific idea"
  - "Sharpen the observation into a claim they will recognise"
  - "Write five subject lines and three short bodies"
  - "End on a question that is easy to answer"
  - "Plan three follow-ups that add something"
  - "Name the likely reason each one is ignored"
output_preview: "A one-line reason to reply, a sharpened observation, five subject lines, three bodies under 120 words with an easy reply path, three follow-ups on named days, and the likely failure for each."
how_to_use:
  - "Paste the actual line from their site, post or job ad that made you contact them. This prompt cannot invent specificity you did not supply, and that specificity is the entire email."
  - "Name the reply you want before you name the product. A reply asking for the deck is a different email from a reply asking for a one-line opinion."
  - "Keep proof to one item. Two proof points in a short email reads as a pitch and reduces the reply rate."
  - "Test one email against one segment before writing a sequence. If the specific version gets no replies, the segment or the offer is the problem, not the copy."
tips:
  - "Send on Tuesday or Wednesday, mid-morning in their timezone. The day of the week matters more than the subject line, and it costs nothing."
  - "A question with two options gets more replies than an open question. 'Would a 10 minute call Tuesday or Thursday be better?' is easier to answer than 'Do you have time to chat?'"
  - "The breakup email is the one that converts. Sending it properly, as a genuine last note, gets replies that the third nudge never will."
  - "Reply to every response, including 'not interested', for two weeks. People change their minds and the second contact has context the first did not."
example_output: |
  THE ONE IDEA
  They publish a detailed changelog every Thursday, which means they ship
  fast and publicly. Speed is the thing I can help with, not a demo.

  THE OBSERVATION
  "You shipped the new import flow on Thursday and wrote a changelog entry
  that admitted it broke two things you had shipped the week before."

  SUBJECT LINES
  1. your import flow
  2. re: thursday changelog
  3. quick question on changelogs
  4. two bugs, one changelog
  5. shipping on thursdays

  EMAIL A (direct, 84 words)
  Saw your Thursday changelog. The new import flow shipped, and you said
  plainly that it broke two things from the week before.

  We handle that for teams shipping weekly: releases go out with the
  rollback already tested. Figma, Linear and Vercel all run the same
  pattern.

  Which part broke, the import or the export?

  (Note: no link, no attachment, no meeting ask.)

  FOLLOW-UPS
  Day 3: Was the import or the export the one that broke? Asking again
  because I put the wrong one in my last note.
  Day 7: We published a short write-up on testing rollbacks before release.
  No pitch attached.
  Day 14: Closing the loop here. If the release process is not a problem
  for you, I will not email again.

  WHAT WILL GO WRONG
  Email A: the Figma, Linear and Vercel line reads as name-dropping and is
  the first thing to cut. Replace it with one sentence about what rollback
  testing actually is.
faq:
  - q: "How many emails should a cold sequence have?"
    a: "Three follow-ups after the first, which is four in total, over about two weeks. Most replies to cold email arrive in the first two, and the ones that arrive after that arrive because something specific was in the follow-up."
  - q: "Is a short email always better?"
    a: "Short is better than long almost every time, because the only thing that matters is whether one line is worth stopping on. It is possible to write a long email that gets replies, but you have to earn every line, and the prompt will not produce that for you automatically."
  - q: "Can it write the follow-ups if the first one gets no reply?"
    a: "Yes, and that is the case worth running, because the follow-up can carry a new piece of information. Run the prompt again with the first email pasted in and tell it there was no reply, and it will write follow-ups that assume silence rather than repeating the pitch."
  - q: "What about GDPR and spam rules?"
    a: "This prompt cannot make your sending legal, and that is not something any prompt can do. It can help you write emails that are individually relevant, include an honest identification of who you are, and carry a working unsubscribe, which is what most rules are actually about. Check the specific rules for the regions you send into."
---
