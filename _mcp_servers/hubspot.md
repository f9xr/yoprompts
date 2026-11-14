---
title: "HubSpot MCP Server"
title_tag: "HubSpot MCP server: setup, config and tools"
slug: hubspot
excerpt: "HubSpot's remote MCP server for reading and updating CRM records, activities, and marketing content over OAuth."
creator: "HubSpot"
transport: "remote"
homepage: "https://developers.hubspot.com/docs/build-with-ai/remote-mcp-server"
tags: [crm, hubspot, sales, marketing, contacts, deals]
config: |
  {
    "mcpServers": {
      "hubspot": {
        "type": "http",
        "url": "https://mcp.hubspot.com"
      }
    }
  }
---

HubSpot's remote MCP server exposes a CRM account to an agent: contacts, companies, deals, tickets, engagements, activity history, and marketing content. It is the same server behind HubSpot's own AI connectors for Claude, ChatGPT, Copilot, and Gemini.

Authentication is OAuth with PKCE through an MCP auth app created in the account. The client is registered with a client id, secret, and redirect URL, and the connection then acts as the authorizing user. Existing HubSpot permissions and record-level access still apply, which is the main control worth relying on.

This is distinct from HubSpot's local developer MCP server, which works on the developer platform and CMS assets rather than CRM data. Choosing the wrong one is the usual setup mistake.

Use it to summarise an account before a call, find deals stuck in a stage, or draft a follow-up from the activity history. Writes are supported, so keep confirmation on for anything that changes a record.
