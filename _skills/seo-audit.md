---
title: "SEO Audit"
slug: seo-audit
category: seo
date: 2026-10-23
excerpt: "Runs a scored, prioritized full-site SEO audit across technical health, content, on-page markup, schema, performance, images, and AI search readiness."
creator: "AgriciDaniel"
license: "MIT"
repo_url: "https://github.com/AgriciDaniel/claude-seo/tree/main/skills/seo-audit"
tags: [seo, audit, technical seo, core web vitals, schema]
usage: |
  /seo-audit https://example.com
install: |
  /plugin marketplace add AgriciDaniel/claude-seo
  /plugin install claude-seo@claude-seo
---

The SEO Audit skill crawls a whole site and returns a scored report rather than a flat checklist. It separates blockers from quick wins, weights findings by impact, and writes the output as a prioritized action list.

It checks crawl configuration, indexation, canonicals, internal links, content quality, on-page markup, structured data, Core Web Vitals, image handling, and AI search readiness. Each finding names the evidence and the page or template that needs work.

Optional DataForSEO and Google API integrations add live search and performance data. Without them the skill still works from the crawl and reports which integrations were unavailable.
