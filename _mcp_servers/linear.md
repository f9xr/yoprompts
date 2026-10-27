---
title: "Linear MCP"
slug: linear
excerpt: "Linear's official remote server for issues, projects, cycles, comments, initiatives, and project updates."
creator: "Linear"
transport: "remote"
homepage: "https://linear.app/docs/mcp"
tags: [issues, project management, tickets, planning, linear]
config: |
  {
    "mcpServers": {
      "linear": {
        "url": "https://mcp.linear.app/mcp"
      }
    }
  }
---

Linear runs an authenticated remote MCP server over Streamable HTTP. An agent can find and create issues, update projects and cycles, manage comments and labels, and read initiatives and project updates.

The default endpoint is read-write. For a safer setup, connect to `https://mcp.linear.app/mcp/readonly`, or request only the `read` OAuth scope on the standard endpoint.

Use it to turn a bug report into a scoped issue, pull the context behind a ticket before coding, or update a project after a release. The deprecated `/sse` endpoint should be replaced with `/mcp`.
