---
title: "PostHog MCP"
slug: posthog
excerpt: "PostHog's hosted MCP server for product analytics, feature flags, error tracking, session replays, and HogQL queries."
creator: "PostHog"
license: "MIT"
transport: "remote"
repo_url: "https://github.com/PostHog/mcp"
homepage: "https://posthog.com/docs/model-context-protocol"
tags: [analytics, product, feature flags, errors, experiments, posthog]
config: |
  {
    "mcpServers": {
      "posthog": {
        "type": "http",
        "url": "https://mcp.posthog.com/mcp"
      }
    }
  }
---

PostHog's MCP server is hosted at `mcp.posthog.com`. Signing in routes the connection to the correct US or EU data region, so the endpoint stays the same across accounts.

The server covers the product surface an agent is usually asked about: querying analytics, running HogQL, investigating errors, reading session replays, managing feature flags, and checking experiments. It also deliberately keeps the context window small by exposing a single execution tool that looks up the rest on demand.

Adding `?readonly=true` removes every write tool, which is a sensible default for a shared or production account. Connections and tool calls are free; tools that use PostHog AI can add AI spend.

Use it to answer a product question with real numbers, trace an exception to a release, or flip a flag during an incident. The wizard (`npx @posthog/wizard mcp add`) writes the client configuration for the common editors.
