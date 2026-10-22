---
title: "Deploy to Vercel"
slug: deploy-to-vercel
category: engineering
date: 2026-10-23
excerpt: "Deploys an app or site to Vercel, choosing between git push, CLI linking, or a claimable upload based on the project state."
creator: "Vercel"
license: "MIT"
repo_url: "https://github.com/vercel-labs/agent-skills/tree/main/skills/deploy-to-vercel"
tags: [vercel, deployment, next.js, cli, hosting]
usage: |
  Deploy my app to Vercel.
install: |
  npx skills add vercel-labs/agent-skills@deploy-to-vercel
---

Deploy to Vercel inspects the project before choosing a path. It checks for a git remote, an existing `.vercel` link, CLI authentication, and available teams, then selects the deployment method that fits.

A linked project with a git remote deploys through a normal push. An unlinked project with an authenticated CLI is linked first and then deployed. When no auth is available, the skill falls back to a claimable upload that returns a preview URL and a transfer link.

It also handles environment selection, build settings, and the common reasons a deployment fails, so the result is a live URL rather than a stack of manual steps.
