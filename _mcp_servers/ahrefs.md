---
title: "Ahrefs MCP"
slug: ahrefs
excerpt: "Ahrefs' official remote server for keyword research, backlink profiles, competitor analysis, and rank tracking on paid plans."
creator: "Ahrefs"
transport: "remote"
homepage: "https://docs.ahrefs.com/docs/mcp/reference/introduction"
tags: [seo, backlinks, keywords, rank tracking]
---

Ahrefs runs an official remote MCP server at `api.ahrefs.com/mcp/mcp`. It returns live SEO data: keyword research, competitor analysis, backlink profiles, top-ranking pages, AI Overview and brand sentiment, dashboards, and exports.

Access requires a paid Ahrefs plan at Lite or above, and each call consumes API units from the monthly allowance shared with the direct API. OAuth mints a dedicated MCP-scoped key, which is separate from an Ahrefs API v3 key.

Use the hosted endpoint. The older `ahrefs/ahrefs-mcp-server` repository is archived, and Ahrefs recommends against it.
