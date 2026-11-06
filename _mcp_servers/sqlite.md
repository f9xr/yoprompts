---
title: "SQLite MCP Server"
slug: sqlite
excerpt: "Give an agent read and write access to a local SQLite database file for schema inspection, queries, and lightweight analysis."
creator: "Model Context Protocol"
license: "MIT"
transport: "local"
repo_url: "https://github.com/modelcontextprotocol/servers/tree/main/src/sqlite"
tags: [sqlite, database, sql, local]
config: |
  {
    "mcpServers": {
      "sqlite": {
        "command": "npx",
        "args": [
          "-y",
          "@modelcontextprotocol/server-sqlite",
          "--db-path",
          "C:\\data\\app.db"
        ]
      }
    }
  }
---

The SQLite server opens one database file and exposes schema inspection and SQL execution to the agent. It supports the common analytical workflow: read the schema, run a query, and explain the result.

Use a copy of the database for exploration. SQLite writes are immediate and there is no role-based permission layer, so the file path is the whole boundary. Give the agent a dedicated file when you expect it to modify data.

For dashboards and reports, keep the database on a local disk rather than a synced folder. File locking behaves badly on some network and cloud-sync paths.
