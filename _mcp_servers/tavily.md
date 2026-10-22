---
title: "Tavily MCP"
slug: tavily
excerpt: "AI-powered real-time web search and content extraction, available as a hosted MCP endpoint with OAuth or an API key."
creator: "Tavily"
transport: "remote"
repo_url: "https://github.com/tavily-ai/tavily-mcp"
homepage: "https://tavily.com"
tags: [search, ai, real-time, extraction]
config: |
  claude mcp add --transport http tavily https://mcp.tavily.com/mcp
---

Tavily provides search and extraction built for agents rather than people. Queries return ranked results with page content already pulled, which cuts the extra fetch step that a general search API usually requires.

The hosted endpoint supports OAuth or an API key. The command above registers the remote server with Claude Code, and other clients can point at the same Streamable HTTP URL.

It fits research, monitoring, and fact-checking workflows where freshness matters and the agent needs usable text rather than a list of links.
