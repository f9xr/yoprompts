---
title: "Web Performance Audit"
slug: web-performance-audit
category: engineering
date: 2026-11-09
excerpt: "Audits Core Web Vitals with real measurements, separates lab from field data, and ranks fixes by expected impact and effort."
creator: "F9XR Team"
license: "MIT"
version: "1.0.0"
tags: [performance, core web vitals, lcp, inp, cls, frontend]
usage: |
  Audit this page's performance.

  Use field data first, then lab data. Name the largest LCP element, the
  longest INP interaction, and the cause of each layout shift. Rank fixes by
  impact and effort, and say what cannot be verified without production data.

  URL and access to metrics:
  [provide]
related_skills: [seo-audit, accessibility-audit, frontend-design]
skill_file: |
  ---
  name: web-performance-audit
  description: Audit a web page or app for Core Web Vitals and frontend performance. Use when the user asks for a performance audit, LCP, INP, or CLS fixes, page speed work, or help reading Lighthouse and field data.
  ---

  # Web Performance Audit

  Field data says what users experience. Lab data says why. Do not swap one
  for the other.

  ## Workflow

  1. Collect field data at the 75th percentile, split by mobile and desktop.
  2. Identify the element or interaction behind each poor metric.
  3. Reproduce in the lab with throttling that matches the field.
  4. Rank fixes by expected impact and effort.
  5. Verify after the change against the same field window.

  ## Metrics

  ### LCP

  - Find the actual LCP element, not the largest image by file size.
  - Check server response time, resource load delay, resource load time, and
    element render delay.
  - Fix the largest of those four first.
  - Do not lazy-load the LCP image.
  - Preload only when the URL is known early and the fetch is critical.

  ### INP

  - Find the interaction with the worst delay, not the average.
  - Separate input delay, processing time, and presentation delay.
  - Look for long tasks on the main thread, large DOM updates, and
    synchronous work in event handlers.
  - Break up work, yield to the browser, and move non-urgent work off the
    interaction path.

  ### CLS

  - Every shift needs a cause: an image without dimensions, a font swap, an
    injected banner, or a late component.
  - Reserve space for anything that loads after first paint.
  - Do not use transform animations to hide a layout shift.
  - Check shifts caused by user interaction separately.

  ## Common causes

  - Render-blocking CSS and synchronous scripts in the head.
  - Unoptimized images and missing width and height.
  - Fonts that block text or swap late.
  - Third-party tags that run before the page is interactive.
  - Client-side rendering of above-the-fold content.
  - Large JavaScript bundles parsed on the main thread.
  - Chat widgets and consent banners inserted at runtime.

  ## Rules

  - Do not claim a field improvement from a lab run alone.
  - Do not quote a single page load as the score.
  - Do not recommend a fix without naming the metric it moves.
  - Do not trade accessibility or SEO for a performance score.
  - Say when a fix needs production access or a third-party change.

  ## Output

  ```
  Field summary
  - LCP, INP, CLS at p75, mobile and desktop, with the data window.

  Findings, ranked
  1. Metric. Evidence. Cause. Fix. Expected impact. Effort.

  Not verifiable here
  - What needs production data, a real device, or a vendor change.
  ```

---

A performance audit that starts with Lighthouse scores usually recommends the same generic list. This skill starts with the field metric and the specific element or interaction behind it, which is what makes a fix worth doing.

The lab and field split is the discipline. A lab run can prove a cause and cannot prove an improvement.

Pair it with SEO Audit when the page also has a search problem, or Accessibility Audit when the fix touches fonts, images, or layout.
