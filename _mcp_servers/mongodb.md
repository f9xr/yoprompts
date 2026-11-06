---
title: "MongoDB MCP Server"
slug: mongodb
excerpt: "Connect an agent to MongoDB for collection inspection, document queries, and schema discovery through MongoDB's official MCP server."
creator: "MongoDB"
license: "Apache-2.0"
transport: "local"
repo_url: "https://github.com/mongodb-js/mongodb-mcp-server"
tags: [mongodb, database, nosql, data]
config: |
  {
    "mcpServers": {
      "mongodb": {
        "command": "npx",
        "args": [
          "-y",
          "mongodb-mcp-server",
          "--connectionString",
          "mongodb://localhost:27017/app"
        ]
      }
    }
  }
---

MongoDB's official MCP server exposes collections, indexes, and queries to an agent. It can list databases, inspect a collection's shape, run a find, and explain why a query is slow.

Use a dedicated read-only user and a development database for exploration. The connection string is the boundary, so avoid an admin user even when the task is read-only.

Because MongoDB documents do not enforce a schema, ask the agent to sample before it writes a query. A field that exists in one document may be missing in the next.
