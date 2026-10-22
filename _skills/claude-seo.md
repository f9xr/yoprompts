---
title: "Claude SEO"
slug: claude-seo
excerpt: "Open-source SEO plugin for Claude Code that runs 25 sub-skills and 18 specialist agents across technical SEO, content, schema, local search, and AI visibility."
creator: "AgriciDaniel"
license: "MIT"
version: "2.2.0"
repo_url: "https://github.com/AgriciDaniel/claude-seo"
homepage: "https://claude-seo.md"
tags: [seo, technical seo, schema, content, geo]
usage: |
  /seo audit https://example.com
  /seo page https://example.com/blog/post
  /seo schema https://example.com
---

Claude SEO is an open-source plugin that turns Claude Code into an SEO analyst with a repeatable workflow. It covers technical SEO, content quality (E-E-A-T), Schema.org markup, sitemaps, Core Web Vitals, local SEO, backlinks, AI search optimization (GEO), ecommerce, hreflang, search experience optimization, topic clustering, and drift monitoring.

Full site audits fan out across specialist agents in parallel, and every recommendation comes with the observation it rests on, its dependencies, and a check for how you would know the fix failed.

The repository includes deterministic scripts, optional MCP extensions, SPA-aware rendering, and hardened fetchers that reject SSRF and DNS-rebinding attempts.
