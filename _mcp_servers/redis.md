---
title: "Redis MCP Server"
slug: redis
excerpt: "Connect an agent to Redis for key inspection, cache debugging, and data structure exploration through Redis's official MCP server."
creator: "Redis"
license: "MIT"
transport: "local"
repo_url: "https://github.com/redis/mcp-redis"
tags: [redis, cache, database, key-value]
config: |
  {
    "mcpServers": {
      "redis": {
        "command": "uvx",
        "args": [
          "--from",
          "redis-mcp-server@latest",
          "redis-mcp-server",
          "--url",
          "redis://localhost:6379/0"
        ]
      }
    }
  }
---

Redis maintains an MCP server that exposes key management, data structure operations, and server information to an agent. It is useful for debugging cache behaviour, checking a key's type and TTL, and understanding why an application is reading stale data.

Point it at a development or staging instance. A production Redis often holds session and rate-limit keys, and an agent with write access can invalidate live sessions faster than you can review the change.

Use a separate database index or a dedicated instance for agent access, and keep the connection URL out of committed config.
