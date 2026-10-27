---
title: "Stripe MCP"
slug: stripe
excerpt: "Stripe's hosted server for inspecting customers, payments, invoices, and products, with documentation search built in."
creator: "Stripe"
license: "MIT"
transport: "remote"
repo_url: "https://github.com/stripe/agent-toolkit"
homepage: "https://docs.stripe.com/mcp"
tags: [payments, billing, customers, invoices, stripe]
config: |
  {
    "mcpServers": {
      "stripe": {
        "url": "https://mcp.stripe.com"
      }
    }
  }
---

Stripe runs a remote MCP server that lets an agent search Stripe documentation and work with live account objects: customers, payments, invoices, products, prices, and balances.

Authentication uses OAuth against the Stripe account, and the available tools respect the permissions of the authorizing user. Test-mode and live-mode data are separate, so confirm which key or account the client is connected to before asking for anything destructive.

The repository behind the integration also ships framework-specific toolkits. The hosted endpoint above is the shortest path for clients that support remote MCP.
