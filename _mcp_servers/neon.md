---
title: "Neon MCP"
slug: neon
excerpt: "Manage Neon Postgres projects, branches, databases, and SQL from an agent through Neon's hosted MCP endpoint."
creator: "Neon"
transport: "remote"
repo_url: "https://github.com/neondatabase/mcp-server-neon"
homepage: "https://neon.com/docs/ai/neon-mcp-server"
tags: [postgres, database, branching, sql, neon]
config: |
  {
    "mcpServers": {
      "neon": {
        "url": "https://mcp.neon.tech/mcp"
      }
    }
  }
---

Neon's MCP server exposes Postgres projects and their branches to an agent. It can create and inspect projects, list databases and tables, run queries, and manage branches for development or preview environments.

The hosted endpoint uses OAuth and works with any client that supports remote MCP. A local NPX server is also available for clients that need a stdio process.

Branching is the feature that makes this different from a generic SQL tool. An agent can work against an isolated branch, verify a migration, and leave production untouched.
