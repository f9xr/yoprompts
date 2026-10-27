---
title: "Cloudflare MCP"
slug: cloudflare
excerpt: "Cloudflare's hosted MCP servers for docs, Workers, observability, bindings, and account-level platform operations."
creator: "Cloudflare"
license: "Apache-2.0"
transport: "remote"
repo_url: "https://github.com/cloudflare/mcp-server-cloudflare"
homepage: "https://developers.cloudflare.com/agents/model-context-protocol/"
tags: [cloudflare, workers, edge, observability, infrastructure]
config: |
  {
    "mcpServers": {
      "cloudflare-docs": {
        "url": "https://docs.mcp.cloudflare.com/mcp"
      }
    }
  }
---

Cloudflare publishes a family of remote MCP servers instead of one monolithic endpoint. The documentation server is public; the Workers, observability, bindings, and account servers require OAuth and expose the resources the authorizing account can access.

Older configurations point at `/sse`. That transport is retired and returns an error, so use the `/mcp` endpoint for the server you need.

The docs server is the safest starting point: it answers questions about Workers, Pages, R2, D1, and the rest of the platform without touching account data. Move to an authenticated server only when the task needs live resources.
