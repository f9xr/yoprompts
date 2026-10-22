---
title: "Brave Search MCP"
slug: brave-search
excerpt: "Brave's privacy-focused Search API exposed as an MCP server for web and local search results."
creator: "Brave"
transport: "local"
repo_url: "https://github.com/brave/brave-search-mcp-server"
tags: [search, web, privacy, local search]
config: |
  {
    "mcpServers": {
      "brave-search": {
        "command": "docker",
        "args": ["run", "-i", "--rm", "-e", "BRAVE_API_KEY", "docker.io/mcp/brave-search"],
        "env": {
          "BRAVE_API_KEY": "YOUR_API_KEY_HERE"
        }
      }
    }
  }
---

Brave Search MCP connects an agent to Brave's independent search index for web and local queries. Results are returned as structured data, so the agent can cite sources or follow up without scraping a results page.

The server runs locally and needs a Brave Search API key. The upstream project ships both Docker and NPX configurations, and the Docker form above keeps the key in the environment rather than the command line.

It is a practical default for research tasks where privacy and an independent index matter more than a hosted search vendor.
