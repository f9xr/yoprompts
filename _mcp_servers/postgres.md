---
title: "PostgreSQL MCP Server"
slug: postgres
excerpt: "Connect an agent to a PostgreSQL database for schema inspection, read queries, and controlled data exploration."
creator: "Model Context Protocol"
license: "MIT"
transport: "local"
repo_url: "https://github.com/modelcontextprotocol/servers/tree/main/src/postgres"
tags: [postgres, database, sql, data]
config: |
  {
    "mcpServers": {
      "postgres": {
        "command": "npx",
        "args": [
          "-y",
          "@modelcontextprotocol/server-postgres",
          "postgresql://user:password@localhost:5432/app"
        ]
      }
    }
  }
---

The PostgreSQL server gives an agent a read-only view of a database: it can list tables, inspect schemas, and run queries against the connection string you provide.

Use it when the agent needs to answer a data question, check a migration, or verify that an application wrote the row it claimed to write. The connection string is the whole permission boundary, so use a dedicated read-only role and the narrowest database that answers the question.

Avoid pointing it at production with a role that can write. For write access, use a migration tool or a purpose-built server with an explicit allowlist.
