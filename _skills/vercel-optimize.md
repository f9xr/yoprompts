---
title: "Vercel Optimize"
slug: vercel-optimize
category: engineering
date: 2026-10-23
excerpt: "Audits deployed Vercel projects for cost and performance, using metrics, usage data, config, and code scans to rank recommendations."
creator: "Vercel"
license: "MIT"
repo_url: "https://github.com/vercel-labs/agent-skills/tree/main/skills/vercel-optimize"
tags: [vercel, performance, cost, caching, core web vitals]
usage: |
  Use vercel-optimize to audit [project] for cost and performance.
install: |
  npx skills add vercel-labs/agent-skills@vercel-optimize
---

Vercel Optimize starts from metered evidence rather than a generic checklist. It collects project metrics, usage, configuration, and code scan results, then investigates only the routes and files the data points to.

The skill supports Next.js, SvelteKit, Nuxt, and limited Astro projects. It looks at function invocations, build minutes, fast data transfer, caching, image handling, middleware, and Core Web Vitals.

Recommendations are ranked by cost or performance impact and tied to verified files and version-aware documentation. When a metric is missing, the skill says so instead of guessing.
