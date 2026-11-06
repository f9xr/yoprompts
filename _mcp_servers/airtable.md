---
title: "Airtable MCP Server"
slug: airtable
excerpt: "Connect an agent to Airtable bases and tables for record search, filtering, and updates through a personal access token."
creator: "domdomegg"
license: "MIT"
transport: "local"
repo_url: "https://github.com/domdomegg/airtable-mcp-server"
tags: [airtable, database, records, no-code]
config: |
  {
    "mcpServers": {
      "airtable": {
        "command": "npx",
        "args": ["-y", "airtable-mcp-server"],
        "env": {
          "AIRTABLE_API_KEY": "pat-your-token"
        }
      }
    }
  }
---

The Airtable server turns a base into a structured data source for an agent: list tables, inspect fields, search records, and update a cell. It is useful for content calendars, lead lists, and lightweight internal tools where Airtable is already the source of truth.

Use a personal access token scoped to the specific base. A token with access to every base gives the agent more reach than the task requires.

Check the field types before asking for a write. Airtable rejects a value that does not match the field type, and a failed write can leave a record half-updated.
