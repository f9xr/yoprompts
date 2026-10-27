---
title: "Webapp Testing"
slug: webapp-testing
category: engineering
date: 2026-10-28
excerpt: "Drive a local web app with Playwright to verify flows, capture screenshots, and read console and network errors."
creator: "Anthropic"
license: "Apache-2.0"
repo_url: "https://github.com/anthropics/skills/tree/main/skills/webapp-testing"
tags: [testing, playwright, browser, frontend, qa]
usage: |
  Use the webapp-testing skill to open http://localhost:3000, sign in with the
  test account, and verify that checkout completes without console errors.
install: |
  npx skills add anthropics/skills@webapp-testing
---

Webapp Testing gives an agent a scripted browser and a clear procedure for using it. It starts the app if needed, waits for the page to be ready, interacts through accessible selectors, and captures screenshots and console output as evidence.

The skill is built around verification rather than assertion. A flow is not done because the click succeeded; it is done when the expected state appears and the console is clean.

Use it after a frontend change, before a deploy, or when a bug report needs a reproducible path. It works best when the agent can run the app locally and read its logs.
