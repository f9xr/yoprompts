---
title: "Exa MCP"
slug: exa
excerpt: "Give an agent semantic web search, page contents, and research tools through Exa's hosted MCP endpoint."
creator: "Exa"
license: "MIT"
transport: "remote"
repo_url: "https://github.com/exa-labs/exa-mcp-server"
homepage: "https://docs.exa.ai/reference/exa-mcp"
tags: [search, research, web, semantic search, exa]
config: |
  {
    "mcpServers": {
      "exa": {
        "url": "https://mcp.exa.ai/mcp"
      }
    }
  }
---

Exa MCP adds semantic web search to an agent. Instead of matching keywords, it finds pages by meaning, then returns cleaned contents that the model can read without a second scraping step.

The hosted endpoint at `https://mcp.exa.ai/mcp` is available to clients that support remote MCP. An API key unlocks higher limits and the full tool set, including research and company lookup.

Use it for competitor scans, source discovery, and questions where the right page probably does not use the exact words in the query. Verify important claims against the returned source.
