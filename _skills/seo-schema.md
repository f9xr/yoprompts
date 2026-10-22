---
title: "Schema Markup"
slug: seo-schema
category: seo
date: 2026-10-23
excerpt: "Detects, validates, and generates Schema.org JSON-LD for pages and entities, with guidance on active rich-result types and deprecated markup."
creator: "AgriciDaniel"
license: "MIT"
repo_url: "https://github.com/AgriciDaniel/claude-seo/tree/main/skills/seo-schema"
tags: [seo, schema, json-ld, structured data, rich results]
usage: |
  /seo-schema https://example.com
install: |
  /plugin marketplace add AgriciDaniel/claude-seo
  /plugin install claude-seo@claude-seo
---

Schema Markup inspects a URL or supplied markup, identifies the entities on the page, and checks the JSON-LD against current Schema.org and search-engine support.

It can generate templates for Organization, LocalBusiness, Article, BlogPosting, FAQ, Product, and related types, then validate the result. The skill also flags deprecated types that no longer produce rich results.

Existing markup is never replaced blindly. It explains what is missing, what conflicts, and which properties need real page data before the snippet is safe to ship.
