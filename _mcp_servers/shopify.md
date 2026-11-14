---
title: "Shopify Dev MCP"
title_tag: "Shopify Dev MCP server: setup, config and tools"
slug: shopify
excerpt: "Lets an agent search Shopify developer documentation, introspect the Admin GraphQL schema, and validate Liquid and extension code."
creator: "Shopify"
license: "ISC"
transport: "local"
repo_url: "https://github.com/Shopify/dev-mcp"
tags: [shopify, ecommerce, graphql, liquid, documentation]
config: |
  {
    "mcpServers": {
      "shopify-dev-mcp": {
        "command": "npx",
        "args": ["-y", "@shopify/dev-mcp@latest"]
      }
    }
  }
---

Shopify's Dev MCP server is a documentation and schema server, not a store admin server. It searches shopify.dev, introspects the Admin GraphQL schema, validates GraphQL operations, Liquid, and UI-extension code, and resolves supported API versions.

It runs locally with no authentication, which makes it safe to enable for any agent working on a Shopify app or theme. The current package is distributed as `@shopify/dev-mcp`.

Use it before writing GraphQL or Liquid so the agent checks the real schema instead of recalling an older API version. It does not read or change store data.
