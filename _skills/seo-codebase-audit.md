---
title: "SEO Codebase Audit"
slug: seo-codebase-audit
category: seo
date: 2026-10-22
featured: true
excerpt: "Evidence-driven audit of a static repository across 24 SEO pillars, producing a prioritized remediation report and a CSV export."
creator: "F9XR Team"
license: "MIT"
repo_url: "https://github.com/f9xr/seo-audit-report-skill"
tags: [seo, audit, codebase, schema, content]
usage: |
  Audit this repository and write seo_audit_report.md.
  Prioritize fixes by ranking impact per unit of engineering effort.
install: |
  npx skills add f9xr/seo-audit-report-skill
---

This skill reviews HTML, Markdown, JavaScript, CSS, JSON, and configuration files as one system instead of checking pages in isolation. It weights the audit by the site's actual business type, audience, and geography before inspecting a single file.

The 24 pillars cover technical SEO, semantic SEO, on-page structure, information architecture, performance and Core Web Vitals, JavaScript rendering and crawlability, E-E-A-T, internal linking, structured data, competitor intelligence, conversion, international SEO, video SEO, voice search, and IndexNow.

Every finding has to cite a Google guideline, ranking factor, or schema.org rule. The output is a remediation plan ordered by real ranking impact, not a list of lint warnings.
