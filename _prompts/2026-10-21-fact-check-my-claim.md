---
title: "Check a claim before you repeat it"
slug: fact-check-my-claim
category: research
category_label: Research
difficulty: intermediate
tools: [perplexity, chatgpt, claude]
read_time: 6
# jekyll-seo-tag types every dated collection document as BlogPosting.
# These are evergreen prompt pages, not blog posts; WebPage is the correct
# container type, with HowTo/FAQPage supplied by _layouts/prompt.html.
seo:
  type: "WebPage"
picks: []
related: [deep-research-synthesis, seo-content-strategy, humanize-ai-text]
art: terminal
tags: [fact check, verification, source, citations, misinformation, research, statistics, claim, media literacy]
excerpt: "Takes one claim, finds the strongest evidence for and against it, and returns a verdict of solid, shaky, overstated or unsupported."
prompt: |
  You are a fact-checker working for an audience that will act on what you
  say. Your rule is that a claim is not true or false, it is solid, shaky,
  overstated or unsupported, and you always give the wording the reader can
  safely use.

  ## What I will give you
  - The claim, exactly as it was stated:
  - Where I saw it (an article, a post, a video, a person, my own reasoning):
  - What I want to do with it (publish it, repeat it, decide on it, argue it):
  - The date the claim was made, if I know it:

  ## Work through this in order

  1. **Parse the claim.** Split it into the parts that can each be true or
     false separately. A compound claim that is half true and half false
     needs to be answered in halves, and the compound label is the thing
     that usually gets it published.

  2. **Classify the claim.** One of: checkable fact, checkable statistic,
     causal claim, prediction, opinion, definition, or value judgment.
     A prediction is not false when it does not come true. Say which type
     this is, because it changes what evidence would settle it.

  3. **Establish what the evidence actually shows.** For each checkable
     part, what supports it, what contradicts it, and how strong the
     supporting evidence is. Prefer primary sources: the study, the
     filing, the dataset, the original announcement. A source that
     restates another source is one source, not two.

  4. **Look for the reason it spread.** Is it a misquote, a missing
     qualifier, a rounding error, a changed denominator, a real finding
     that got exaggerated, or a real finding that was true once and is
     outdated? Most false claims are true claims with one detail changed.

  5. **Check for a date problem.** Is the claim out of date, was it
     true only in a specific period, or does it describe a situation that
     has since changed? Say the date the claim was last true, if you can
     find one.

  6. **Give the verdict.** Exactly one of:
     - **Solid**: well supported by primary sources, state it plainly.
     - **Shaky**: directionally right but imprecise, overstated, or based
       on a single source. Say what would make it solid.
     - **Overstated**: the underlying fact is real but the claim says more
       than the fact supports. Name the part that was added.
     - **Unsupported**: no evidence either way, or no way to check it.
     - **Unfalsifiable**: not a claim that can be tested. Say so plainly.

  7. **Write the wording I can use.** Three versions of the claim: the
     strongest version that is still true, a one-line version for a post
     or a caption, and the version to use if I want to push back on
     someone who made the claim.

  8. **List what I should not say.** Anything that would be a distortion
     even though it feels close to the truth.

  ## Rules
  - Never invent a source, a link, a study, a date, an author, or a
    statistic. If there is no browsing tool attached, say "unverified" for
    anything you cannot confirm from the material given.
  - Do not treat a source that cites another source as independent
  - Do not call something false because you cannot find evidence for it.
    That is unsupported, which is a different verdict.
  - Weight by quality, not by volume. Ten articles repeating one press
    release is one piece of evidence.
  - State what you checked and what you did not check.
  - If the claim is technically true but misleading, the verdict is
    overstated, and you say why in one sentence.
workflow:
  - "Split the claim into separately checkable parts"
  - "Classify what kind of claim it is"
  - "Weigh primary evidence for and against"
  - "Find what changed between the claim and the fact"
  - "Give one verdict and the wording you can use"
output_preview: "A parsed claim, a claim type, evidence for and against with strength, the reason it spread, a date check, one verdict, three usable versions, and a list of what not to say."
how_to_use:
  - "Paste the claim verbatim, including who said it. The wording of the original is usually where the distortion lives."
  - "Say what you are going to do with the answer. A verdict for publishing is different from a verdict for a private decision, and the prompt weighs the evidence accordingly."
  - "Attach a browsing tool if you have one. Without one the prompt will mark almost everything unverified, which is honest but not useful."
  - "Check the 'do not say' list before you post. Most corrections that fail are corrections that were technically accurate and practically misleading."
tips:
  - "Ask for the strongest true version rather than a verdict alone. It is usually publishable, and it takes one extra step to reach."
  - "Check the denominator. Most statistical overstatements are a denominator that changed from people to sessions, or from monthly to yearly."
  - "Run the verdict twice in separate conversations. Agreement across two passes with no shared context is worth something."
  - "Give it the original source, not your summary of it. The detail that matters is almost always in the original wording."
example_output: |
  CLAIM, SPLIT
  "1. Coffee lowers the risk of type 2 diabetes by 40 percent."
  1a. Coffee consumption is associated with lower risk of type 2 diabetes.
  1b. The association is a 40 percent reduction.
  1c. The reduction is caused by coffee.

  TYPE
  1a and 1b are checkable statistics. 1c is a causal claim, which is a
  different question.

  EVIDENCE
  - Meta-analyses of prospective cohorts report an association in the
    region of 15 to 20 percent lower risk with high versus low
    consumption. Several are large and recent.
  - The 40 percent figure does not appear in the cohort literature. It is
    close to figures reported in some short follow-up studies where the
    exposure was measured by self-report and the comparison was with
    non-drinkers rather than low drinkers.
  - No randomized study exists, so no source establishes cause.

  WHY IT SPREAD
  A real finding about coffee and diabetes got a stronger number attached,
  and the "40 percent" number appears in secondary coverage without the
  cohort design that produced it.

  DATE
  The direction of the finding has held across meta-analyses from the last
  decade. The magnitude in the strongest recent analyses is lower than the
  original 40 percent figure.

  VERDICT
  Overstated. The underlying association is solid and reproduced; the
  magnitude is not, and the causal framing is not supported.

  WORDING I CAN USE
  Strongest true version: "Regular coffee consumption is associated with
  around 15 to 20 percent lower risk of type 2 diabetes in large
  prospective studies."
  One line: "Coffee is associated with somewhat lower type 2 diabetes
  risk, by roughly a fifth, not the 40 percent sometimes quoted."
  Pushback: "The association is well replicated. The 40 percent figure is
  not, and it compares the wrong baseline."

  DO NOT SAY
  - "Coffee prevents diabetes." Causal, not supported.
  - "Drinking three cups a day cuts your risk by 40 percent." Dose is not
    established at that precision.
  - "Studies are mixed." They are not mixed on direction.
faq:
  - q: "Do I need a browsing tool for this to be useful?"
    a: "For the verdict, yes. Without browsing the prompt can parse the claim, classify it, and tell you what kind of evidence would settle it, but everything factual comes back unverified. The structure is still worth running first, because a well-parsed claim is much easier to check by hand."
  - q: "What if the claim is about something very recent?"
    a: "Say so, and expect a shorter evidence base. The prompt will tell you when the only sources available are single, recent and not independent, which is the situation where a confident verdict is most dangerous."
  - q: "Can it check my own reasoning?"
    a: "Yes, and it is at its best on the causal part. Give it your argument as a claim and it will separate what your evidence supports from what you have added, which is usually where the reasoning is weakest."
  - q: "Why does it distinguish unsupported from false?"
    a: "Because they lead to different actions. Unsupported means nobody has looked, so it might turn out to be true and worth pursuing. False means it has been checked and does not hold. A fact-checker that collapses the two makes readers distrust every verdict, including the correct ones."
---
