---
title: "Audit a website for SEO, AEO, performance and a11y"
slug: website-code-audit
category: coding
category_label: Coding
difficulty: advanced
tools: [chatgpt, claude, copilot]
read_time: 8
# jekyll-seo-tag types every dated collection document as BlogPosting.
# These are evergreen prompt pages, not blog posts; WebPage is the correct
# container type, with HowTo/FAQPage supplied by _layouts/prompt.html.
seo:
  type: "WebPage"
picks: []
related: [code-review-audit, seo-content-strategy, blog-site-design-system]
art: terminal
tags: [technical SEO, AEO, site audit, performance, core web vitals, accessibility, security]
excerpt: "Audits a website line by line like a senior full-stack engineer and technical SEO architect, covering SEO, AEO, Core Web Vitals, WCAG and security."
prompt: |
  Act as an expert Senior Full-Stack Engineer, Web Performance Specialist,
  and Technical SEO/AEO Architect.

  I need you to perform a rigorous, line-by-line, in-depth code audit of my
  website code. Your goal is to maximize performance, search visibility,
  user experience, and modern AI engine discoverability.

  Analyze the codebase and check for everything possible across the
  following key areas.

  ## 1. Technical SEO & Content Architecture
  - Title tags, meta descriptions, and header tag nesting (H1-H6).
  - Canonical tags, hreflang attributes, and robots directives.
  - URL structure and internal linking architecture.
  - XML sitemaps and structured data validation (JSON-LD).

  ## 2. AI Engine Optimization (AEO) & LLM Readiness
  - Schema.org markup depth for rich snippets and AI indexing.
  - Semantic HTML tags (<article>, <section>, <aside>) to provide clear
    context to LLMs.
  - Entity clarity (ensuring brands, authors, products, and concepts are
    clearly defined in text and code).
  - Direct, extractable data formats that AI crawlers can easily parse.

  ## 3. Core Web Vitals & Performance Optimization
  - Time to First Byte (TTFB), First Contentful Paint (FCP), and
    Interaction to Next Paint (INP).
  - JavaScript execution time, blocking scripts, and bundle sizes.
  - CSS delivery, unused styles, and critical CSS rendering.
  - Image and media optimization (modern formats like WebP/AVIF,
    explicit width/height, lazy loading).
  - Server-side caching headers and compression techniques (Gzip/Brotli).

  ## 4. Responsiveness, UI/UX, & Accessibility (a11y)
  - Mobile-first responsiveness, fluid layouts, and media queries.
  - Touch target sizing and spacing to avoid accidental taps.
  - WCAG compliance (color contrast, font legibility, ARIA attributes,
    keyboard navigation).
  - Prevention of Cumulative Layout Shift (CLS) during page load.

  ## 5. Code Quality, Security, & Best Practices
  - Code redundancy, dead code elimination (tree-shaking), and clean
    architecture.
  - Secure headers (CSP, HSTS, X-Frame-Options) and HTTPS enforcement.
  - Safe handling of third-party scripts, APIs, and dependencies.
  - Error handling, console logging hygiene, and fallback mechanisms.

  ## Deliverable format
  For every issue or optimization opportunity you find, provide:
  1. File Name & Line Number: Exactly where the issue exists.
  2. The Problem: A clear description of why it harms SEO, AEO,
     performance, or UX.
  3. The Fix: The exact, optimized code block to replace the faulty code.
  4. Impact Score: High, Medium, or Low priority.

  Begin by asking me to provide the specific code files, repository
  structure, or live URLs you need to analyze first.
workflow:
  - "Provide the repo files, structure or live URL when asked"
  - "Get findings across SEO, AEO, performance, a11y and security"
  - "Each finding names its file, line, problem, fix and impact score"
  - "Work through High-impact items before anything else"
output_preview: "A line-by-line audit with file-and-line findings, replacement code for each issue, and High/Medium/Low impact scores across five audit areas."
how_to_use:
  - "Answer the opening question honestly. The prompt deliberately starts by asking what you can provide; paste real files or a live URL rather than a description of the site."
  - "If your repo is large, start with the templates or layout files, since title tags, canonicals, schema and semantic HTML all live there."
  - "Ask for the High-impact findings as a checklist first, then request the full report. Audit output is only useful if you act on the top of it."
  - "Re-run the audit after a release. Core Web Vitals and structured data regress silently, and a diff between two audits is the fastest way to see the damage."
tips:
  - "Pair it with real field data. Paste your PageSpeed Insights or CrUX numbers alongside the code and the fixes get ranked by what is actually hurting you, not by theory."
  - "Security header findings are cheap wins. CSP, HSTS and X-Frame-Options can often be fixed in one config change with no code risk."
  - "If the audit flags structured data, validate the fix in the Rich Results Test rather than trusting the regenerated snippet."
  - "For AEO findings, check whether your content answers questions in extractable form. Schema helps, but direct answers in semantic HTML are what AI crawlers quote."
example_output: |
  1. FILE: _includes/head.html:14
     PROBLEM: Missing canonical tag on paginated pages; Google indexes
     page 2+ as duplicates, splitting link equity.
     FIX: <link rel="canonical" href="{{ page.url | absolute_url }}">
     IMPACT: High

  2. FILE: assets/js/analytics.js:1
     PROBLEM: Render-blocking third-party script in <head> without async
     or defer; delays FCP by ~380ms on mid-tier mobile.
     FIX: <script src="/assets/js/analytics.js" defer></script>
     IMPACT: High

  3. FILE: _layouts/default.html:31
     PROBLEM: Images without width/height attributes cause CLS of 0.14
     as content shifts during load.
     FIX: <img src="hero.webp" width="1200" height="630" loading="lazy"
          alt="...">
     IMPACT: Medium
faq:
  - q: "Can it audit a live site without the code?"
    a: "Partially. It can review rendered HTML you paste in and reason about anything visible in the page source, but server-side issues like caching headers, bundle contents and security configuration need the actual code or server config."
  - q: "How much code should I provide at once?"
    a: "Start with the head/layout templates and the build config; most SEO, schema and performance findings live there. Then feed individual pages or components for the per-page findings."
  - q: "What is AEO and why does it matter?"
    a: "Answer Engine Optimization is optimizing for AI crawlers and answer engines that extract content directly instead of sending clicks. Clear entities, semantic HTML and extractable answers are what get your content quoted by AI tools."
  - q: "Will it fix everything automatically?"
    a: "It gives you exact replacement code per finding, but the fixes still need review and testing in your stack. Impact scores tell you what to apply first, not what is safe to skip verification on."
---
