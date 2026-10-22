---
title: "Vercel CLI with Tokens"
slug: vercel-cli-with-tokens
category: engineering
date: 2026-10-23
excerpt: "Deploys and manages Vercel projects with token-based CLI authentication instead of interactive login, including env vars and teams."
creator: "Vercel"
license: "MIT"
repo_url: "https://github.com/vercel-labs/agent-skills/tree/main/skills/vercel-cli-with-tokens"
tags: [vercel, cli, tokens, deployment, automation]
usage: |
  Use vercel-cli-with-tokens to deploy [project] with VERCEL_TOKEN.
install: |
  npx skills add vercel-labs/agent-skills@vercel-cli-with-tokens
---

Vercel CLI with Tokens is for automation, remote agents, and environments where an interactive login is not possible. It locates `VERCEL_TOKEN` in the environment or a `.env` file and keeps the value out of shell history and process listings.

The skill covers project linking, team selection, environment variables, and deployment commands. It shows how to pass the token safely and how to scope commands to the correct team.

Common failure modes are handled explicitly: missing tokens, malformed project names, wrong team scope, and expired credentials.
