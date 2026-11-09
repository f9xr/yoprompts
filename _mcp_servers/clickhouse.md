---
title: "ClickHouse MCP Server"
slug: clickhouse
excerpt: "Runs read-only SQL against ClickHouse, lists databases and tables, and keeps writes behind explicit opt-in flags."
creator: "ClickHouse"
license: "Apache-2.0"
transport: "local"
repo_url: "https://github.com/ClickHouse/mcp-clickhouse"
tags: [clickhouse, sql, analytics, database, olap]
config: |
  {
    "mcpServers": {
      "mcp-clickhouse": {
        "command": "uv",
        "args": [
          "run", "--with", "mcp-clickhouse",
          "--python", "3.12", "mcp-clickhouse"
        ],
        "env": {
          "CLICKHOUSE_HOST": "<clickhouse-host>",
          "CLICKHOUSE_PORT": "8443",
          "CLICKHOUSE_USER": "<clickhouse-user>",
          "CLICKHOUSE_PASSWORD": "<clickhouse-password>",
          "CLICKHOUSE_SECURE": "true",
          "CLICKHOUSE_VERIFY": "true"
        }
      }
    }
  }
---

ClickHouse's MCP server runs SQL against a ClickHouse cluster and lists databases and tables. Queries are read-only by default, which is the correct setting for analytics work where an agent should explore but not mutate.

Write access requires `CLICKHOUSE_ALLOW_WRITE_ACCESS=true`, and destructive statements need a second flag, `CLICKHOUSE_ALLOW_DROP=true`. Even with both flags, the real boundary is the ClickHouse user's grants, so create a dedicated user with only the privileges the agent needs.

`CLICKHOUSE_PORT` is the HTTP interface, not the native TCP port. Use `8443` for ClickHouse Cloud and TLS, and `8123` for a local plain HTTP instance.
