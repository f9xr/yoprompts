---
title: "Human Article Writer"
slug: human-article-writer
category: writing
date: 2026-11-02
spotlight: true
excerpt: "Writes sourced SEO articles with an uneven human structure, then audits them for AI tells, template cadence, and unsupported claims."
creator: "F9XR Team"
license: "MIT"
version: "1.0.0"
download_url: "/assets/downloads/human-article-writer.skill"
download_label: "Download .skill package"
tags: [writing, seo, editing, humanize, articles]
usage: |
  Use the human-article-writer skill.

  Primary keyword: best crm for freelancers
  Secondary keywords: freelance crm, client pipeline
  Target market: United States, USD, US spelling
  Word count: 1400

  Here is one paragraph from our site so the voice matches:
  [paste a real paragraph]
related_skills: [humanizer, avoid-ai-writing, copy-editing, seo-audit]
skill_file: |
  ---
  name: human-article-writer
  description: Write SEO articles that read like a sharp human editor wrote them, not a template. Use this skill whenever the user gives keywords, a topic, or a brief and asks for an article, blog post, SEO content, pillar page, guide, or asks to write like a human, humanize a draft, make it not sound like AI, or rewrite an existing article. Also use it when the user wants a draft cleaned of AI patterns such as rule of three, not X but Y contrasts, bold lead-ins, cliche metaphors, symmetric sections, or Bottom Line endings.
  ---

  # Human Article Writer

  Goal: articles a reader trusts and Google rewards. Those are the same goal.

  Be honest with the user once, briefly: no writing method can guarantee a zero percent AI score. Detectors disagree with each other and flag human writing too. Google says it ranks helpful, original, people-first content and does not penalize text for how it was produced. What it demotes is generic, scaled, unoriginal content. So this skill attacks the real problem: sameness. Text that is specific, opinionated, uneven, and sourced stops looking machine-made as a side effect.

  ## Workflow

  ### 1. Gather inputs

  Ask once, in one message, and only for what is missing:

  - Keywords (primary and secondary), target country, word count (default 1400)
  - Target market (country, currency, spelling). Lock it. Every example, price, platform, law, and stat must fit that one market. Never write "rupee or dollar".
  - Audience and site or brand voice. One sample paragraph from their site is gold.
  - Real experience material. This is the biggest human signal. Ask: "Any first-hand detail I can use? A client case, a number from your own work, a mistake you saw, an opinion you hold that competitors do not." If the user gives none, do NOT invent anecdotes, clients, quotes, or statistics. Write from verifiable specifics and clear opinions instead, and note outside the article where a personal story would lift the piece.

  If the user says "just write it" with no experience material, write the article with no personal anecdotes and no placeholders inside the body. Rely on sourced specifics and clear opinions. List suggested spots for their own examples separately, after the article, so a draft is never published half-filled.

  ### 2. Research before writing

  - Search the primary keyword. Fetch the top 3 to 5 ranking pages.
  - Note for each: angle, H2 list, what they all repeat, what nobody covers, and the questions in People Also Ask.
  - Find 3 to 6 trustworthy sources for facts. Official bodies, original studies, primary docs, and reputable publishers. Record the URL and the exact fact.
  - Pick ONE angle competitors miss. The article should have a point of view, not just coverage.

  Every number, date, name, study, and claim in the article must come from a source you retrieved. No source, no claim. Cut it.

  ### 3. Plan an uneven structure

  Use only the parts this topic needs. Sections get unequal length. Spend words where the reader's real problem is. A minor subtopic can be two sentences. H2s are specific and sometimes phrased like a person talks ("Why your calculator shows 4"), not labels ("Understanding X").

  A workable 1400 word shape, to adapt and never copy:

  - Intro answer: 100 to 150 words
  - The question people care most about: 350 to 450 words
  - Second key question: 250 words
  - Practical part, how to do or check it: 250 words
  - A misconception or competitor gap, with your view: 150 to 200 words
  - Two or three short FAQs: 100 to 150 words
  - Sources list

  Use a table only when comparing three or more items across two or more attributes. Otherwise use prose. Use an FAQ only for questions not covered above, max four, answers one to three sentences.

  ### 4. Write the draft

  Pick an opening type and an ending type. Do not reuse the last ones used in this conversation. Do not use a contrarian hook followed by a "most guides" pivot.

  Hard rules:

  - No dashes of any kind in body text. No em dash, no en dash, no spaced hyphen used as punctuation. Use a comma, period, colon, or parentheses. Hyphenated words such as well-known are fine.
  - Passive voice under 10 percent of sentences.
  - Short paragraphs, one to four sentences, mostly two or three. Vary them. An occasional one-liner is good. A wall of one-liners is not.
  - Primary keyword in the title, H1, first 100 words, one H2, meta description, and naturally three to six more times per 1400 words. Use variants and close phrasing. Never force an exact-match phrase into a sentence where it reads wrong.
  - Dry, observational humour tied to the topic. One light moment per 300 to 400 words at most. No puns stacked on puns.
  - Cite sources inline as descriptive links ("a 2023 Pew survey found...") and list them at the end under Sources.
  - Contractions are normal throughout, not only in friendly parts. Use plain words: use, not utilize. Show, not demonstrate. Help, not facilitate.

  ### 5. Self-audit

  Save the draft as markdown. If the bundled linter is present, run:

  ```bash
  python3 scripts/lint_article.py draft.md --keywords "primary kw" "secondary kw"
  ```

  It reports dashes, flagged vocabulary, not X but Y contrasts, triplet lists, bold lead-ins, sentence length spread, passive voice, paragraph length, keyword counts, and template headings. Fix every FAIL. Review every WARN and fix it unless keeping it truly reads better. Re-run until clean.

  If the script is not available, run this manual pass and mark each item:

  - Search the draft for the characters for em dash, en dash, and spaced hyphens. Zero allowed.
  - Search for the banned vocabulary list below. Replace every hit.
  - Count sentences. If most are 15 to 25 words, rewrite half of them shorter or longer.
  - Count passive constructions. Keep them under 10 percent.
  - Check that no three consecutive paragraphs have the same shape.
  - Check that the primary keyword appears in the required places, not more than eight times total.
  - Check that every number has a source and a year or sample detail.

  Then read the draft aloud. Find the three most polished but empty sentences and either make them concrete or delete them.

  ### 6. De-template pass

  Reread the draft as a skeptical editor hunting for model cadence.

  - Delete every sentence that announces honesty, humility, or opinion ("honestly", "my opinion, yours may differ").
  - Delete question and answer fragments ("Boring? Yes.") except at most one.
  - Check each stat. If it only decorates a conclusion you already reached, add context or a counterpoint, or drop it.
  - Check the arc. If it runs problem, stat, reframe, moral, restructure it.
  - Check locale. One currency, one spelling system, local examples.
  - Make sure no two consecutive paragraphs open with the same shape.
  - Confirm the article body has no placeholders such as "[ADD YOUR EXAMPLE]" or "TODO".

  Run the linter again after this pass.

  ### 7. Deliver

  Deliver the article in the format the user asked for. Default to a doc, or markdown in chat if they want to paste it. Include:

  - SEO title under 60 characters
  - Meta description under 155 characters
  - Suggested URL slug
  - The article
  - A Sources list
  - Separately, after the article, a short list of places where the user's own example would help

  The article body itself contains no placeholders. Keep commentary short.

  ## Rewriting an existing AI-sounding article

  Run the linter on the original first and show the user the top problems in plain words. Then rewrite using steps 3 to 5. Keep all accurate facts. Drop claims that have no source.

  ## Reference: AI tells to avoid

  These patterns are not wrong grammar. They are statistically common in model text, so a page full of them reads generic. One or two is fine. Clusters are the problem.

  ### Sentence templates

  - Contrast flip: "X is not Y. It is Z." Or "It is not about X, it is about Y." Max one per article, and only if it carries real information.
  - Fake reassurance one-liners: "It didn't." "Neither." "And that's okay." "You're not alone."
  - Rule of three: "courage, wisdom, and clarity". Use two items, four, or one. Lists of three are fine only when there really are three things.
  - Mirrored pairs repeated across every section.
  - Aphorism endings that restate the paragraph as a quotable maxim. Cut it. The paragraph already said it.
  - Rhetorical question then answer: "So what does this mean? It means..."
  - Colon reveals: "It describes something far more useful: your relationship with..."
  - "Whether you're X or Y" openers.
  - Second-person mind reading: "Your first reaction was probably..." Use sparingly.

  ### Vocabulary

  Flag and usually replace: delve, tapestry, testament, beacon, landscape (figurative), realm, navigate (figurative), journey (figurative), embark, unlock, unleash, elevate, empower, foster, leverage, harness, robust, seamless, pivotal, crucial, vital, multifaceted, holistic, nuanced, intricate, profound, remarkable, genuinely, truly, deeply, ultimately, essentially, furthermore, moreover, additionally, in conclusion, it is worth noting, importantly, in today's fast-paced world, ever-evolving, game-changer, at its core, plays a key role, a wide range of, serves as, stands as.

  ### Cliched images

  Caterpillar and butterfly, phoenix from ashes, seasons changing, double-edged sword, tip of the iceberg, roller coaster, puzzle pieces, north star, compass, "at a cellular level". Replace with an image from the topic's own world, or with a plain fact.

  ### Structure

  - Hook, then a short answer box, then table, then every item in fixed order, then FAQ, then Bottom Line. This exact skeleton is the giveaway of SEO model output.
  - Every section the same length and same internal shape.
  - A bolded lead-in on every list item or paragraph.
  - Headings like "Understanding X", "The Power of X", "Final Thoughts", "Key Takeaways", "The Bottom Line", "Conclusion".
  - A conclusion that summarizes everything already said.
  - Generic disclaimers pasted in. If one is needed for health, money, or legal topics, write it in one plain sentence in the site's voice where it is relevant.

  ### Tone

  - Perfect balance on every point and never committing to a view.
  - Hedge stacks: "may potentially", "can often", "tends to generally".
  - Everything slightly dramatic. Every sentence trying to be a highlight.
  - Generic scenarios ("Imagine a manager who...") instead of a real example.

  ### Advisory and thought-leadership cadence

  - A blunt contrarian line followed by an instant pivot to "most guides". Both halves are tells. Never open by announcing honesty or attacking most guides.
  - Performed candour: "honestly", "the honest answer", "let's be real", "here's the thing", "the truth is", "nobody talks about".
  - Self-aware hedge tags: "which is my opinion and yours may differ", "your mileage may vary". State the opinion and move on.
  - Mini question and answer fragments. Max one per article, ideally zero.
  - Ranking disclaimers. Just rank the items, or explain the ranking with a reason drawn from data.

  ### Stats as decoration

  Dropping a big-name stat into a paragraph whose conclusion was already decided, so the number proves a tidy moral. Every stat pointing the same way. Fix: let at least one data point complicate the argument. Say what the number does not show, such as sample, year, or country. Prefer local, niche, or primary data over the most-quoted national headline figure.

  ### Neat moral arc

  Problem, scary stat, reassuring reframe, focus on skills instead. If the outline fits that arc, break it. Lead with the practical answer, put the nuance where it applies, and end on a specific action.

  ### Locale leaks

  "every rupee or dollar", colour and color mixed, US examples on an India-targeted page. Pick ONE target market and use its currency, spelling, examples, laws, and platforms throughout.

  ### Shipping unfinished drafts

  Any "[ADD YOUR EXAMPLE]", "[insert ...]", "TODO", or "XX%" left in a published piece is the loudest tell of all.

  ## Reference: What human writers do instead

  ### Rhythm

  Mix sentence lengths on purpose. A four word sentence next to a thirty word one. Some paragraphs one sentence, some four. Target a sentence length standard deviation of seven or more words across the article. Do not fake it with fragments everywhere. That is its own tell.

  ### Specifics beat adjectives

  Swap every abstract claim for a concrete one. A number with its source, a named tool, a date, a place, a price, a real example from the research. "Calculators disagree" becomes "Some calculators subtract 22 from totals above 22, others add the digits".

  ### Take a position

  Say what you think is overrated, wrong, or missing in competitor content, and why. Readers trust a writer who disagrees with someone. Keep it fair and sourced.

  ### Uneven attention

  Go deep where the reader's real question is. Be brief or skip where the topic is thin.

  ### Plain words

  Use, not utilize. Show, not demonstrate. Then, not subsequently. Help, not facilitate. Contractions throughout.

  ### Transitions

  Prefer none, or ordinary ones: "So", "But", "Still", "That said", "Here's the catch". Starting a sentence with And or But is fine.

  ### Humour that works

  Observational and specific to the niche. Mild self-awareness. One aside in parentheses. Understatement. Never a joke that needs a fake fact.

  ### Voice variety

  Mix a direct instruction, a short opinion, a fact with a source, a question the reader is actually asking, and an aside. Do not repeat the same paragraph shape three times in a row.

  ### Real experience

  If the user supplied first-hand material, put it early and use exact details: numbers, timeframes, what went wrong. If not, write without anecdotes and suggest spots to the user outside the article. Never invent one. A fabricated anecdote breaks reader trust and breaks accuracy guidelines.

  ### Endings

  End on something useful: a next step, a specific recommendation, a one-line opinion. No recap heading.

  ### Opening types, rotate and never reuse the last one

  1. A concrete fact or number from a primary source, stated flatly, no drama.
  2. The reader's exact situation in one plain sentence ("You have 20,000 rupees saved and a weekend free.").
  3. A first-hand detail from the user's own material.
  4. A direct answer to the query in the first sentence, then the condition that changes it.
  5. A short, specific observation from the research, something odd you found on page one.

  Banned openers: announcing honesty, attacking "most guides", "If you're reading this...", "Let's face it".

  ### Using data like a person

  - Cite the number, then add one line of context a reader would ask about: year, sample size, country.
  - Include at least one fact that cuts against your main point, and deal with it.
  - Prefer data that matches the target market.

  ### Ending types, rotate

  - A specific next action with a number or deadline.
  - A single concrete recommendation for one reader type.
  - A short note on what you would check first.

  No moral, no "focus on X instead" lesson, no summary.

  ## Final check

  The piece is done when a reader can point to something they learned, something the writer believes, and something they can do next. If any of those is missing, the article is still a template.
---

This skill turns a keyword brief into an article with a real point of view, then audits the result instead of trusting the first draft. The workflow covers competitor research, sourced facts, an uneven outline, and a final pass that removes template cadence.

The reference sections are bundled into the skill file, so an agent gets the AI tell list, the human craft notes, and the structure rules in one read. The linter is optional. When the script is not available, the manual checklist covers the same failures.

It fits teams publishing SEO articles at volume who still want each page to sound like a person wrote it. Pair it with Humanizer for a final line edit, or with Copy Editing when the draft already exists.
