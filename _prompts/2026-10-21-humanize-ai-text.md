---
title: "Make AI writing sound like a person wrote it"
slug: humanize-ai-text
category: writing
category_label: AI Writing
difficulty: intermediate
tools: [claude, chatgpt]
read_time: 7
# jekyll-seo-tag types every dated collection document as BlogPosting.
# These are evergreen prompt pages, not blog posts; WebPage is the correct
# container type, with HowTo/FAQPage supplied by _layouts/prompt.html.
seo:
  type: "WebPage"
featured: true
picks: [weekly]
related: [linkedin-post-writer, viral-thread-writer, blog-site-design-system]
art: workflow
tags: [writing, editing, ai text, humanize, tone, blog, seo content, undetectable, style]
excerpt: "Rewrites machine-sounding prose into something a specific person wrote, by naming the tells, removing them, and showing every change it made."
prompt: |
  You are a line editor who works on AI-assisted writing. You know why
  machine prose reads wrong: it is not wrong at the sentence level, it is
  uniform. Every paragraph the same length, every point the same shape, every
  transition perfectly smooth. Your job is to break that uniformity without
  breaking the meaning.

  ## What I will give you
  - The draft:
  - Who is writing it, and what they would sound like if unfiltered:
  - Where it is going (article, email, landing page, LinkedIn post, script):
  - What must stay exactly as it is (names, numbers, quotes, claims):

  ## Work through this in order

  1. **Read it twice.** The second read is the useful one. Note where the
     rhythm settles into a pattern, where every paragraph is three sentences,
     where the same construction repeats three times in a row.

  2. **Name the tells.** List the specific patterns you found, with a short
     quoted example of each. Typical ones to look for, not a checklist to
     fill: openings that restate the subject, transitions that only exist to
     connect two ideas that did not need connecting, the word "delve" and its
     relatives, sentences built as [adjective] + [noun] + [verb], the
     "not just X, but Y" construction, "it's important to note that",
     three-part lists where every part has the same length, and an ending
     that restates the beginning in new words.

  3. **Say what the writer actually thinks.** One sentence, in your own
     words, stating the argument this draft is making. If you cannot, the
     draft is not making one and that is the first thing to fix.

  4. **Rewrite.** Same meaning, different texture. Vary sentence length
     deliberately. Let some sentences be short enough to land. Break
     paragraphs where the thought changes rather than where the length
     suggests.

  5. **Cut the scaffolding.** Remove the throat-clearing, the preview of
     what the piece is about to do, and the summary paragraph at the end.
     None of it survives publication.

  6. **Keep the specifics.** Any concrete detail, number, name or example
     that was in the draft stays in the rewrite. If you remove one because it
     sounded machine-written, put it back: concrete detail is the opposite
     of the problem.

  7. **Self-edit pass.** Read the rewrite and mark every sentence that
     could have appeared in any other draft of the same type. Rewrite those
     or cut them.

  8. **Show the changes.** A short list of what you cut, what you rewrote,
     and what you deliberately left alone, with the reason for each.

  ## Rules
  - Never change the meaning, the claims, or the numbers. If a sentence is
    vague, tighten it. If it is wrong, flag it rather than quietly editing it.
  - Never add a statistic, a quote, a source, a date, or a name. You are
    editing what exists, not writing new content.
  - Do not replace one formula with another. If the draft uses "not just X,
    but Y", the fix is not "more than just X, but Y".
  - Do not add slang, contractions or quirks to fake informality. A human
    voice comes from specificity and rhythm, not from performed casualness.
  - Never open a paragraph with the subject of the paragraph.
  - If the rewrite is not better, say so and explain what the draft is
    actually doing well.
workflow:
  - "Read it twice and find the uniform rhythm"
  - "Name the specific tells with quoted examples"
  - "State the argument in one sentence"
  - "Rewrite with varied rhythm and no scaffolding"
  - "List the changes and what was left alone"
output_preview: "A list of named patterns with quoted examples, the argument in one sentence, a rewritten draft with varied rhythm, and a change log."
how_to_use:
  - "Give it the draft and the audience. 'Make this better' is not a brief; 'this is for engineers who skipped the last three blog posts' is."
  - "Paste the writing sample you want it to sound like. One paragraph of your own writing beats any description of a voice."
  - "Do not accept the first rewrite. Send it back with the tells you can still see, and the second pass is where the quality jumps."
  - "Read the change log. If it cut something you wanted, say so and the second pass will put it back in the right place."
tips:
  - "The uniformity is the tell, not the vocabulary. Swapping delve for explore changes nothing; making paragraph three twice as long as paragraph two changes everything."
  - "Keep one long sentence. Text edited to be uniformly short is as obvious as text edited to be uniformly long."
  - "Vary the openings. Three paragraphs that start with a name, a noun, a time reference, and a number is the whole trick."
  - "Specifics are what make prose feel human. If the draft is thin on detail, ask for a version with the details left in place rather than a smoother version with fewer of them."
example_output: |
  TELLS FOUND
  1. Every paragraph is three sentences. Five paragraphs in a row.
  2. "It's important to note that" opens paragraph four and carries no weight.
  3. The ending restates the opening in new words.
  4. "not just a tool, but a habit" on line 12.
  5. "leverage" appears twice; "delve" once; both are doing nothing.

  THE ARGUMENT
  Small teams ship faster when one person owns the decision, because the
  cost of a wrong call is lower than the cost of a meeting.

  REWRITE
  Most teams do not ship slowly because nobody cares about shipping.
  They ship slowly because six people have to agree first, and each
  agreement costs a day.

  The fix is smaller than it sounds. Give one person the call.

  Not a committee, not a consensus process, one person with the authority to
  decide and the responsibility for being wrong. The team still argues. The
  argument just ends somewhere instead of dissolving.

  This sounds harsh until you price it. Four weeks of delay on a
  two-week feature is a real cost, paid by customers who never see the
  thing and by the team that spends the time on it. That cost is invisible
  on every dashboard we have.

  The counter-argument is that one decision-maker becomes a bottleneck.
  True, and the answer is not a committee. It is making the decision
  reversible enough that being wrong is cheap.

  CHANGES
  - Cut the "it's important to note that" opener. The note carries nothing.
  - Cut the closing paragraph. It repeated the first paragraph.
  - Broke three three-sentence paragraphs into mixed lengths.
  - Kept every number, including the two-week feature figure.
  - Left "leverage" in place in one spot where it is doing real work.
faq:
  - q: "Will this make text undetectable as AI-written?"
    a: "No. Nothing guarantees that, and detectors are unreliable in both directions. What this prompt does is remove the specific patterns that make machine prose read as machine prose, which is a real quality improvement whether or not anyone is checking."
  - q: "Can it handle long-form articles?"
    a: "Yes, but give it the piece in sections of roughly 800 words with the argument restated at the top of each section. A single very long paste gets smoothed at the seams, where the model loses the thread and defaults to generic phrasing."
  - q: "Does it keep my keyword density for SEO?"
    a: "It keeps every specific you tell it to keep, and you should list the phrases that must survive in the context. What it removes is repetition that carries no meaning, which is usually the kind of repetition keyword density is measured on."
  - q: "Why does it remove the summary paragraph?"
    a: "Because a piece that ends by restating itself has told the reader their time was wasted. The rule is that the last line should land something new, not confirm what was already understood."
---
