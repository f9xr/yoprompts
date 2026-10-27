---
title: "Chrome DevTools MCP"
slug: chrome-devtools
excerpt: "Let an agent drive a real Chrome instance: inspect the DOM, read console and network activity, and record performance traces."
creator: "Chrome DevTools"
license: "Apache-2.0"
transport: "local"
repo_url: "https://github.com/ChromeDevTools/chrome-devtools-mcp"
tags: [chrome, browser, debugging, performance, devtools]
config: |
  {
    "mcpServers": {
      "chrome-devtools": {
        "command": "npx",
        "args": ["-y", "chrome-devtools-mcp@latest"]
      }
    }
  }
---

Chrome DevTools MCP connects an agent to a Chrome instance through the DevTools protocol. The agent can inspect DOM and accessibility trees, read console messages, follow network requests, take screenshots, and record performance traces.

This is more useful than screenshot-only automation when the question is why a page behaves badly. A performance trace, a failed request, and the console error that follows it give the agent evidence instead of a guess.

The server runs locally with NPX and uses the Chrome already installed on the machine. It can attach to a running profile or launch a separate one, depending on the flags you pass.
