---
title: "Write a landing page that sells"
slug: landing-page-copy
category: marketing
category_label: Marketing
difficulty: intermediate
tools: [chatgpt, claude]
read_time: 7
# jekyll-seo-tag types every dated collection document as BlogPosting.
# These are evergreen prompt pages, not blog posts; WebPage is the correct
# container type, with HowTo/FAQPage supplied by _layouts/prompt.html.
seo:
  type: "WebPage"
picks: []
related: [cold-email-writer, seo-content-strategy, document-to-deck, one-idea-post-week]
art: workflow
tags: [landing page, copywriting, conversion, saas, headline, offer, cta, signup, marketing, copy]
excerpt: "Writes a landing page from the visitor objection, not the feature list, with one promise per section and a CTA that matches the stage of the visitor."
prompt: |
  You are a conversion copywriter. You start every page from the visitor's
  objection, not the product's feature list, and you believe a landing page
  fails when it asks a stranger to care before it has said why they should.

  ## What I will give you
  - What I sell, in one sentence, and the price:
  - Who buys it, and who does not:
  - The single biggest objection a visitor has when they land:
  - Proof I have, and what form it takes:
  - The action I want them to take:
  - What the page is competing against (another site, a competitor, a
    spreadsheet, doing nothing):

  ## Produce in this order

  1. **The objection, stated in the visitor's words.** Not my words, not
     marketing words. The sentence the visitor would say out loud when
     they ask a colleague whether they need this. This sentence decides
     the whole page.

  2. **The one promise.** What is different for the visitor after they
     act, stated as a result they can picture. If the promise needs two
     sentences, it is two promises and the page will do neither.

  3. **Five headline options.** Each under 12 words. Each names the
     outcome or the objection, not the product category. Give the category
     as a subtitle under the headline instead of inside it. Mark the one
     you would ship and say why in one sentence.

  4. **Subhead.** One sentence, under 20 words, that tells the visitor who
     it is for and what happens. No feature list.

  5. **The section order.** From the objection down: the section that
     answers it first, the proof, the mechanism, the objections, the
     offer, the CTA. Give each section a working title that is the idea
     it delivers, and one line on what the section must accomplish.

  6. **The section copy.** Every section written in full. For each one:
     the heading, the copy, and the proof element beside it. Hero
     excluded, because step 3 and 4 covered it.

  7. **The objection section.** The three objections a visitor has but
     does not say out loud, each answered honestly. If the honest answer
     is that the visitor should not buy, write that. It converts better
     than a reassurance.

  8. **The CTA, three times.** Same action every time, three different
     wordings. The label says what happens, not what it is. "See the
     pricing" beats "Submit". No "learn more" anywhere.

  9. **What is deliberately missing.** The things a landing page usually
     carries that you should not put on this one, with a reason for each.

  10. **The objection you did not answer.** One thing a sceptical visitor
      would still not believe after reading the page. Say it plainly, so it
      can be dealt with somewhere else.

  ## Rules
  - Never invent a customer, a logo, a rating, a statistic, a testimonial,
    or a number. Use [NEEDS PROOF] where the proof is missing. A landing
    page with invented social proof is worse than one without.
  - One promise per section. A section that carries two ideas needs to be
    split.
  - Never use "revolutionary", "seamless", "game-changing", "unlock",
    "elevate", "empower", "cutting-edge", or "solutions". Say what the
    thing does.
  - Never write a feature list. Every feature on the page has to be
    attached to a result the visitor wants.
  - Under 300 words for the whole page. Longer pages are usually longer
    because the writer did not decide what the page was for.
  - No em dashes or long dashes. Use a comma, a full stop, or a colon.
  - No fake urgency, no countdown timers, no "limited spots" unless there
    is a real limit.
workflow:
  - "State the visitor objection and the single promise"
  - "Write five headlines and pick one"
  - "Order the sections from the objection down"
  - "Write every section with its proof element"
  - "Answer the three unspoken objections honestly"
  - "Name what to leave off the page"
output_preview: "The objection in the visitor's words, one promise, five headlines with a pick, a subhead, a section order with purposes, full section copy, three honest objection answers, three CTA wordings, a list of what to omit, and the objection still unaddressed."
how_to_use:
  - "Answer the objection question honestly. If you cannot write the visitor's objection, the page has no job and no copy will fix it."
  - "Supply the proof you actually have. Every [NEEDS PROOF] marker is a gap you have to fill, and the prompt will not fill it for you."
  - "Name what the page competes against. A page that beats a spreadsheet is written differently from a page that beats a competitor."
  - "Read only the headlines and the section titles first. If those do not tell a coherent story, do not fix the body copy yet."
tips:
  - "The hero is the only part most visitors read. Spend the time on the headline and the subhead, not on the features below the fold."
  - "Say what the product is in one plain line near the bottom. Visitors who scrolled all the way down want to know what they are signing up for."
  - "One CTA. Two CTAs split the attention and both get fewer clicks."
  - "Write the objection section first, then the rest of the page. The page usually gets shorter and sharper once the honest answers are in place."
example_output: |
  THE OBJECTION
  "This is another tool my team will have to log into and learn."

  THE PROMISE
  You send the report, the answer comes back, you move on.

  HEADLINES
  1. Send a question, get an answer
  2. No dashboard to learn
  3. Ask once, read once
  4. Your report, answered in a minute
  5. Stop learning a tool to get an answer
  Ship: 1. It is the outcome, it has no category word in it, and the
  subtitle below carries what the thing is.

  SUBHEAD
  For teams who need an answer from their own data, not another system
  to manage.

  SECTION ORDER
  1. The objection, answered first. What happens after you press send.
  2. Proof. A real result, with the number and where it came from.
  3. The mechanism. How it reaches the answer, in plain language.
  4. The objections people will not say out loud.
  5. The offer, price and what happens after clicking.
  6. The CTA.

  SECTION: THE MECHANISM
  You upload the file. You ask the question in plain words. The answer
  comes back with the numbers it used and the rows it did not use.
  There is no dashboard to learn, because there is no dashboard. The
  screen you see is the one you were on when you asked.

  SECTION: THE THREE OBJECTIONS
  - "My data is too messy for it." True for some files. If your data has
    inconsistent units or merged columns, say so here and say what it
    takes to fix them. Cleaning a spreadsheet takes longer than learning
    a dashboard.
  - "What if it is wrong?" It shows its working, including the rows it
    excluded. You check it. That is why it shows the working.
  - "Will it work with our stack?" [NEEDS PROOF] Answer with the list or
    the honest no.

  CTAs
  1. Send a test file
  2. Ask one question
  3. Try it on your data

  DELIBERATELY MISSING
  - A logo wall. [NEEDS PROOF] and it currently adds nothing.
  - A feature grid. Every feature would need a result attached, and the
    results are the pages below.
  - A pricing table. Price is one number, so it goes in the offer
    section. A table here makes the page longer without making it clearer.
  - A countdown. There is no real limit on places.

  STILL NOT BELIEVED
  That it works on our specific messy data. That cannot be fixed with
  copy on the page; it needs a real trial with one of their files.
faq:
  - q: "How long should a landing page be?"
    a: "Under 300 words for a single-offer page, and that is the prompt's rule. Long pages are usually long because the offer was never pinned down. If you genuinely need more, you probably have two offers on one page and should split them."
  - q: "Can it handle a product with many features?"
    a: "Yes, but the features go below the fold as answers to objections, not as a grid. A feature grid reads as a list, and a visitor cannot tell which one matters to them. Attach each feature to the result it produces and put the result in the heading."
  - q: "What about social proof if I have none yet?"
    a: "Leave it out and let the [NEEDS PROOF] markers show you where it would go. Faked proof is the fastest way to lose trust in the exact section that exists to create it, and it is usually the first thing a sceptic checks."
  - q: "Should I write it in my brand voice?"
    a: "Give it three or four sentences of your existing writing as context and it will match the register without copying your sentences. Without a sample, it defaults to plain and direct, which is a reasonable starting point for a page that is trying to be understood in under 20 seconds."
---
