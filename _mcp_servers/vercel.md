---
title: "Vercel MCP"
slug: vercel
excerpt: "Vercel's hosted MCP server for project and deployment management, logs, analytics, and documentation search."
creator: "Vercel"
transport: "remote"
homepage: "https://vercel.com/docs/agent-resources/vercel-mcp"
tags: [vercel, deployments, hosting, logs, analytics]
config: |
  {
    "mcpServers": {
      "vercel": {
        "url": "https://mcp.vercel.com"
      }
    }
  }
---

Vercel MCP is a remote server with OAuth that gives an agent access to a Vercel account: projects, deployments, deployment logs, analytics, and the documentation.

Connecting the server does not grant access by itself. The user still authorizes the client and selects the teams the agent may work with, and the existing Vercel permissions still apply.

Use it to investigate a failed deployment, compare build logs, or answer a platform question from current documentation. Any mutating action should keep human confirmation enabled.
