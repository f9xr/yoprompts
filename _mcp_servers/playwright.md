---
title: "Playwright MCP"
slug: playwright
excerpt: "Give an agent a real browser: navigate pages, click, type, and read the accessibility tree through Playwright."
creator: "Microsoft"
license: "Apache-2.0"
transport: "local"
repo_url: "https://github.com/microsoft/playwright-mcp"
tags: [browser, automation, testing]
config: |
  {
    "mcpServers": {
      "playwright": {
        "command": "npx",
        "args": ["-y", "@playwright/mcp@latest"]
      }
    }
  }
---

Playwright MCP connects an agent to a Chromium browser through Playwright's accessibility tree rather than screenshots. That makes page structure explicit, so the agent can find and act on elements without guessing pixel coordinates.

Typical uses are checking a page in a real browser, filling and submitting forms, walking a checkout flow, capturing console errors, and verifying responsive layouts. It runs locally with no hosted account.

The server works with any MCP-compatible client. Start it with the configuration above and the client will advertise browser tools automatically.
