---
title: "Audit Core Web Vitals without guessing"
title_tag: "Audit Core Web Vitals without guessing — Coding AI prompt"
slug: core-web-vitals-audit
category: coding
category_label: Coding
difficulty: intermediate
tools: [chatgpt, claude]
read_time: 6
seo:
  type: "WebPage"
picks: []
related: [website-code-audit, seo-content-strategy, accessibility-audit-prompt]
skills: [web-performance-audit, seo-audit]
mcp_servers: [chrome-devtools]
art: chart
tags: [performance, core web vitals, lcp, inp, cls, frontend, seo]
excerpt: "Reads field and lab data, names the element or interaction behind each poor metric, and ranks fixes by expected impact and effort."
prompt: |
  You are a performance engineer who separates field data from lab data and
  refuses to quote a single page load as a score. You know a generic list of
  optimizations is not an audit.

  ## What I will give you
  - The URL or the page type:
  - Field data at the 75th percentile, mobile and desktop, with the window:
  - A lab trace, Lighthouse report, or the requests and timings:
  - The stack: framework, rendering mode, CDN, image pipeline:
  - Third parties loaded on the page:
  - What I cannot change: vendor scripts, platform limits, design constraints:

  ## Produce in this order

  1. **Field summary.** LCP, INP, and CLS at p75, split by device. State what
     the field data does and does not prove.

  2. **LCP.** The actual largest element, then the four delay components:
     server response, resource load delay, resource load time, and element
     render delay. Say which one dominates and how you know.

  3. **INP.** The worst interaction, the long tasks on the main thread, and
     whether the delay is input, processing, or presentation.

  4. **CLS.** Each shift, its cause, and whether it happens on load or after
     an interaction.

  5. **Ranked fixes.** For each: the metric it moves, the evidence, the
     expected impact, the effort, and the risk. Sort by impact per unit of
     effort.

  6. **What cannot be verified here.** The fixes that need production data, a
     real device, a vendor change, or a design decision.

  7. **Verification plan.** How to confirm the change against the same field
     window, and how long to wait before believing it.

  ## Rules
  - Use field data first and lab data second. Do not swap them.
  - Do not quote a single page load as the score.
  - Do not recommend a fix without naming the metric it moves and the cause
    it addresses.
  - Do not lazy-load the LCP image.
  - Do not trade accessibility or SEO for a performance score.
  - Do not invent a budget, a threshold, or a device profile.
  - Mark every unknown as unknown.

  ## Before you finish
  Remove any recommendation that does not name both a metric and a cause. If
  the remaining list is short, that is the correct output.
workflow:
  - "Summarize field data and its limits"
  - "Identify the LCP element and the dominant delay"
  - "Find the worst INP interaction and its long tasks"
  - "Trace every layout shift to a cause"
  - "Rank fixes by impact and effort"
  - "Define how to verify against field data"
output_preview: "A field summary, the real LCP element and its dominant delay, the worst INP interaction, each CLS cause, and a short ranked fix list with a verification plan."
how_to_use:
  - "Paste the field data export, not a single Lighthouse score. The field data is the only thing that describes what users experience."
  - "Name the LCP element from the trace. The largest image by file size is often not the LCP element, and optimizing it moves nothing."
  - "List the third parties you cannot remove. A fix that requires deleting a vendor script is not a fix the team can ship."
  - "Give the page type, not just one URL. A template used by thousands of pages has a different priority from a one-off landing page."
tips:
  - "The four LCP components are the fastest way to avoid guessing. Measure each one before recommending an image format or a preload."
  - "INP is usually a main-thread problem, not a network problem. Look for long tasks before adding a loading spinner."
  - "A CLS fix that hides the shift with a transform is not a fix. Reserve the space instead."
  - "Wait for a full field window before declaring victory. A lab run can prove a cause and cannot prove an improvement."
example_output: |
  FIELD
  Mobile p75: LCP 4.1s, INP 240ms, CLS 0.18. Desktop p75: LCP 2.2s,
  INP 90ms, CLS 0.04. The mobile problem is real and the desktop page is
  acceptable. Window: 28 days.

  LCP
  The LCP element is the hero image, not the product grid. The dominant delay
  is resource load delay: the image URL is discovered only after the
  JavaScript bundle runs. Server response is 180ms and render delay is small.

  INP
  The worst interaction is the filter click at 310ms. The handler rebuilds the
  entire product list synchronously. The delay is processing, not input or
  presentation.

  CLS
  The consent banner is inserted above the header after load, shifting the
  page by 0.12. A web font swap adds 0.06 on the heading.

  FIXES, RANKED
  1. Render the hero image in the initial HTML and preload it. LCP. High
     impact, low effort, low risk.
  2. Reserve height for the consent banner. CLS. High impact, low effort.
  3. Move the filter rebuild to a transition and virtualize the list. INP.
     Medium impact, medium effort.
  4. Use `font-display: optional` or self-host the heading font. CLS. Low
     impact, low effort.

  NOT VERIFIABLE HERE
  - Whether the CDN cache hit rate is the reason for the 180ms response.
  - Whether the consent vendor can render a placeholder before load.

  VERIFICATION
  Ship fix 1 and 2, then read the mobile p75 over a full 28-day window. Do
  not compare against a single lab run.
faq:
  - q: "Why not just use Lighthouse?"
    a: "Lighthouse is lab data. It is useful for proving a cause and for catching regressions in CI, but it does not describe what users experience. The prompt uses it as evidence, not as the score."
  - q: "What is a good LCP?"
    a: "Google's threshold is 2.5 seconds at p75. Whether that is good for your users depends on the device and network mix, so the prompt will compare against your field baseline rather than a generic target."
  - q: "Can it audit a page I cannot access?"
    a: "It can work from a trace, a HAR file, or a Lighthouse report, but it will mark the missing pieces as unknown. It will not invent field data or a network profile."
  - q: "Does a performance fix help SEO?"
    a: "Core Web Vitals are a page experience signal, and speed affects crawl and conversion. The prompt will flag when a fix trades accessibility or SEO for a score, because that trade is usually a loss."
---
