---
title: "Write email subject lines people open"
slug: viral-email-subject-lines
category: marketing
category_label: Marketing
difficulty: intermediate
tools: [chatgpt, claude]
read_time: 5
seo:
  type: "WebPage"
picks: []
related: [cold-email-writer, landing-page-copy, viral-product-launch-post]
art: workflow
tags: [email, subject lines, open rate, marketing, newsletter, copywriting]
excerpt: "Generates 25 subject lines across five proven angles, scores them for clarity and honesty, and pairs the best with preview text that earns the open."
prompt: |
  You are an email subject line editor. You have seen open rates fall because
  the subject promised something the email did not deliver. Your job is to
  write lines that are specific enough to earn the open and honest enough to
  keep the click.

  ## What I will give you
  - What the email is about, in one sentence:
  - Who receives it and what they already know:
  - The one benefit or change the email delivers:
  - The proof (number, result, customer, date):
  - Tone (plain, friendly, direct, formal):
  - Words or claims I cannot use:

  ## Produce in this order

  1. **The promise.** One sentence: what the reader gets by opening. Every
     subject line must be a shorter version of this sentence.

  2. **Twenty-five subject lines, five angles, five each:**
     - **Curiosity**: names the gap without hiding the subject.
     - **Specificity**: leads with the number, date, or named thing.
     - **Benefit**: states the change in the reader's terms.
     - **Urgency**: only if there is a real deadline.
     - **Personal**: sounds like one person writing to another.

     Keep every line under 50 characters where possible and under 60 at the
     absolute limit. No ALL CAPS, no fake "Re:" or "Fwd:", no emoji, no
     exclamation marks, and no clickbait that the email cannot pay off.

  3. **Score every line**, one to five, on **clarity** (understood at a
     glance), **relevance** (matches the list and the email), and **honesty**
     (the email delivers it). Mark any line that fails honesty as a
     bait-and-switch, even if it is the strongest line you wrote.

  4. **Top five, with preview text.** For each winner, write preview text of
     40 to 90 characters that adds information instead of repeating the
     subject. Name the angle and the reason it beat the runner-up.

  5. **A/B pair.** Give one controlled test: same angle, one variable changed
     (number versus no number, question versus statement), and the metric that
     decides the winner.

  6. **Spam and trust check.** List any phrase that could trigger a filter or
     erode trust, and replace it with a plain alternative.

  ## Rules
  - Urgency must be real. If the deadline is invented, remove the angle.
  - Do not use "free" unless the offer is actually free.
  - Do not promise a result the email does not show.
  - A subject line is not a headline. It has one job: make the next sentence
    worth reading.
  - Keep the reader's words, not the brand's words.
workflow:
  - "State the promise the email delivers"
  - "Write 25 lines across five angles"
  - "Score clarity, relevance and honesty"
  - "Pick five and write matching preview text"
  - "Set one controlled A/B test"
output_preview: "A one-sentence promise, 25 subject lines in five angles, honest scores, a top five with preview text, one A/B pair, and a spam check."
how_to_use:
  - "Describe the reader's current situation, not the segment name. 'Has 400 unopened leads' is more useful than 'SMB owner'."
  - "Give it the real proof. A subject line with a number only works when the email contains the number."
  - "Ask for the plain version first, then the curious version. Most brands need the plain one and choose the curious one."
  - "Test one variable at a time on a list large enough to matter. Otherwise you are measuring the day, not the line."
tips:
  - "Short beats clever. The best subject line is usually the clearest sentence in the email, shortened."
  - "Preview text is part of the subject line. Write them together or the inbox will truncate the idea."
  - "Numbers earn opens when they are unexpected and verifiable. '3 fixes' is weak; 'the 11-minute fix' is stronger."
  - "If the line needs an exclamation mark, the verb is weak. Replace the verb."
example_output: |
  PROMISE
  You will see the three fields that cause most CRM imports to fail, and
  how to clean them before the upload.

  TOP FIVE
  1. "The 3 fields that break every CRM import"  [5/5/5]
     Preview: "Check these before you upload. Two take under a minute."
  2. "Your CRM import will fail on this column"  [5/5/4]
     Preview: "It is usually the phone field. Here is the fix."
  3. "Clean these 3 columns before Friday"  [5/4/4]
     Preview: "A short checklist for the import on Friday."
  4. "The import mistake I made twice"  [4/5/5]
     Preview: "The second time cost a full day. Here is what changed."
  5. "Before you upload that CSV"  [5/4/5]
     Preview: "Three checks, then the import. No cleanup script needed."

  A/B PAIR
  A: "The 3 fields that break every CRM import"
  B: "Your CRM import will fail on this column"
  Decision metric: open rate after 4 hours, same list, same send time.

  SPAM CHECK
  Replace "act now" with the real date. Replace "guaranteed" with the
  measured result. Remove "free" if the setup call is paid.
faq:
  - q: "How long should a subject line be?"
    a: "Under 50 characters is the safe target for mobile. Under 60 is the hard ceiling. The prompt aims short because the preview text carries the extra context."
  - q: "Do questions work better than statements?"
    a: "Only when the reader already wants the answer. A question about a problem they do not have reads as noise. Test a question against the same line as a statement to find out."
  - q: "Should I use the reader's name in the subject?"
    a: "Usually no. Personalization tokens often look automated and take space that could carry the promise. Use a name only when the email is genuinely one-to-one."
  - q: "Can I use urgency for a launch?"
    a: "Yes, if the deadline is real and stated plainly. A launch discount that ends Friday is urgency. A countdown that resets is manipulation."
---
