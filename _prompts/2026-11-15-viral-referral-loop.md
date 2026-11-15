---
title: "Design a referral loop people actually complete"
title_tag: "Referral loop prompt that compounds signups"
slug: viral-referral-loop
category: business
category_label: Business
difficulty: advanced
tools: [chatgpt, claude]
read_time: 7
seo:
  type: "WebPage"
picks: []
related: [pricing-and-positioning, viral-welcome-email-sequence]
art: chart
tags: [referrals, growth loops, retention, incentives]
excerpt: "Models the economics of a referral programme before writing a word of copy, so you find out it cannot work on paper instead of after launch."
prompt: |
  You are a growth engineer who has shipped four referral programmes and
  killed two of them. You know that most referral schemes fail for arithmetic
  reasons, not copy reasons: the reward costs more than the margin, or the
  invited friend never activates, or the loop needs a second purchase nobody
  makes.

  ## What I will give you
  - What the product does and what a new user's first success looks like:
  - Price, gross margin per customer, and average orders per year:
  - Current monthly signups, and the share that comes from word of mouth:
  - What we can afford to spend to acquire a customer:

  ## What I want back

  1. **The loop, drawn in words.** Referrer action, friend action, reward
     trigger, and the moment the reward is paid. Name the exact event that
     fires each step. If any step depends on the friend doing something after
     signup, say so plainly.

  2. **The arithmetic.** Cost per referred customer, including the reward on
     both sides and the expected share of referrals that never convert. Show
     the payback in months against my margin. If it does not pay back inside
     twelve months, say that first and stop.

  3. **Three incentive structures** ranked by what they cost versus what they
     motivate: a two-sided discount, a usage credit, and a status or access
     reward. For each, name the customer type it actually motivates and the
     one that will game it.

  4. **The anti-abuse rules that matter for this product.** Not a generic
     list. Self-referral, duplicate accounts, refund-and-keep, and whichever
     one applies to my pricing model.

  5. **The two metrics that decide whether to keep it**, with the threshold
     that would make you shut it down.

  ## Rules
  - No reward may be paid before the friend's first success event. Paying on
    signup is how a referral programme becomes a discount for people who were
    already going to buy.
  - Do not propose tiers, leaderboards, or "refer 10 friends" ladders unless
    the product is inherently social. They convert the already-engaged and
    nobody else.
  - If the honest answer is that my margin cannot fund a referral programme,
    say so in the first paragraph.
workflow:
  - "Draw the loop as named events, not steps"
  - "Price the reward against margin and payback"
  - "Rank incentives by who they actually motivate"
  - "Name the abuse path specific to this pricing"
output_preview: "A loop definition with named trigger events, a payback calculation in months, three ranked incentive structures, and a shut-down threshold."
how_to_use:
  - "Use your real margin. A referral programme designed on revenue instead of margin is the single most common way this goes wrong."
  - "Answer the word-of-mouth question honestly. If you do not measure it, estimate it and label the estimate."
  - "Take the payback paragraph to whoever owns the budget before you design the screens. It is the cheapest possible time to kill the idea."
  - "Keep the anti-abuse list next to the engineering ticket. Abuse rules that live in a strategy doc do not get built."
tips:
  - "Ask it to model the case where half the referred friends never activate. That single assumption changes most referral economics from viable to not."
  - "If you sell subscriptions, ask specifically about refund-and-keep abuse. It is the most expensive variant and the least discussed."
  - "Run the incentive ranking twice: once for new customers, once for existing heavy users. They respond to different rewards, and one programme has to serve both."
  - "Do not launch with the highest reward you can afford. Launch low, raise it once you know the activation rate."
example_output: |
  LOOP
  referrer shares link -> friend signs up -> friend completes first project
  -> reward fires for both. Reward on friend's first project, not signup.

  ARITHMETIC
  reward cost: $18 (two $9 credits)
  referred signup -> first project: 46% (your estimate)
  cost per activated customer: $39
  margin per customer per year: $84 -> payback 5.6 months

  VERDICT: viable at current margin, not viable if activation is below 30%.
faq:
  - q: "Why not reward on signup?"
    a: "Because signup is free to fake and often precedes the decision to use the product. Rewarding activation ties the payout to the only event that predicts retention."
  - q: "Is a two-sided reward always better than a one-sided one?"
    a: "No. Two-sided rewards convert better for consumer products where the friend is the buyer; one-sided credit works better when the referrer is a power user and the friend needs no persuasion."
  - q: "How do I know if the programme cannibalises organic referrals?"
    a: "Hold out a cohort for four weeks with no referral prompt and compare referral-attributed signups. If the lift is under 20% of the volume, you are paying for referrals you already had."
  - q: "What about affiliate programmes instead?"
    a: "Affiliates are paid acquisition with a commission; referral loops are retention mechanics. If your referrers are strangers with audiences, you want an affiliate programme and should not call it a referral loop."
---
