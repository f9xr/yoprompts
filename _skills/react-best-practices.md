---
title: "React Best Practices"
slug: react-best-practices
category: engineering
date: 2026-10-23
excerpt: "Vercel Engineering's React and Next.js performance rules, prioritized across waterfalls, bundle size, server work, data fetching, and rendering."
creator: "Vercel"
license: "MIT"
repo_url: "https://github.com/vercel-labs/agent-skills/tree/main/skills/react-best-practices"
tags: [react, next.js, performance, bundle size, data fetching]
usage: |
  Use react-best-practices to review [component or page].
install: |
  npx skills add vercel-labs/agent-skills@react-best-practices
---

React Best Practices packages more than 40 Vercel Engineering rules into a priority order. It starts with the issues that dominate real performance: request waterfalls, oversized bundles, and unnecessary server work.

The remaining sections cover client data fetching, re-render control, rendering performance, and JavaScript micro-optimizations. Each rule explains the pattern, the cost it removes, and the cases where the optimization is not worth it.

The skill is written for use while coding, not only after an audit. It triggers when an agent writes components, adds data fetching, or reviews a page for speed.
