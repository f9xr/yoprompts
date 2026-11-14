---
title: "Snowflake MCP Server"
title_tag: "Snowflake MCP server: setup, config and tools"
slug: snowflake
excerpt: "Snowflake's managed MCP server, created as a Snowflake object, exposing semantic views, Cortex Search, and SQL tools over an account-scoped URL."
creator: "Snowflake"
transport: "remote"
homepage: "https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-agents-mcp"
tags: [snowflake, data warehouse, sql, semantic view, cortex, analytics]
config: |
  {
    "mcpServers": {
      "snowflake": {
        "type": "http",
        "url": "https://<account_url>/api/v2/databases/<database>/schemas/<schema>/mcp-servers/<server_name>"
      }
    }
  }
---

Snowflake's managed MCP server is an object inside the account rather than a process beside it. You create it in a database and schema with `CREATE MCP SERVER ... FROM SPECIFICATION $$ ... $$`, listing the tools it exposes, and clients connect to the object's URL.

The URL format is fixed:

```
https://<account_url>/api/v2/databases/{database}/schemas/{schema}/mcp-servers/{name}
```

which is why the configuration above uses placeholders instead of a shared host. The `mcp.` prefix is not used here; the account URL is the same host you use for the Snowflake UI and API.

Tools are declared in the specification, typically a semantic view for Cortex Analyst, a Cortex Search service, a Cortex Agent, and a `SYSTEM_EXECUTE_SQL` tool. Access is granted with `GRANT USAGE ON MCP SERVER` to a role, so the agent sees exactly the objects that role can reach.

Authentication is Snowflake OAuth by default, optionally bound to an external identity provider through External OAuth. A programmatic access token still works, and is the quickest way to test the endpoint with `curl`, but it should be scoped to a least-privileged role and not treated as the long-lived answer. Whichever method you use, the session's primary role is what decides which tools are visible.

This replaces the community `Snowflake-Labs/mcp` server, which is deprecated. That project's `uvx snowflake-labs-mcp` local process is still documented for reference, but new setups should create the managed server.
