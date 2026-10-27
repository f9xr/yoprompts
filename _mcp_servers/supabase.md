---
title: "Supabase MCP"
slug: supabase
excerpt: "Connect an agent to a Supabase project for schema inspection, SQL queries, migrations, edge functions, and logs."
creator: "Supabase"
license: "Apache-2.0"
transport: "remote"
repo_url: "https://github.com/supabase-community/supabase-mcp"
homepage: "https://supabase.com/docs/guides/getting-started/mcp"
tags: [database, postgres, backend, sql, supabase]
config: |
  {
    "mcpServers": {
      "supabase": {
        "type": "http",
        "url": "https://mcp.supabase.com/mcp"
      }
    }
  }
---

Supabase's official MCP server gives an agent access to a hosted project rather than a local copy. It can inspect tables, run SQL, apply migrations, manage edge functions, read logs, and check advisors.

The hosted endpoint uses OAuth, so access follows the account that authorizes the connection. Project scoping can be added through query parameters, which is worth doing when the account belongs to an organization with several databases.

Use it for schema work, read-only investigation, or generating a migration from a described change. Keep a human in the loop for anything that writes or deletes data.
