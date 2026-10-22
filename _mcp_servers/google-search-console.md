---
title: "Google Search Console MCP"
slug: google-search-console
excerpt: "A community Google Search Console server with search analytics, URL inspection, sitemap management, and period-over-period comparisons."
creator: "Amin Forou"
license: "MIT"
transport: "local"
repo_url: "https://github.com/AminForou/mcp-gsc"
tags: [seo, search console, google, indexing]
config: |
  {
    "mcpServers": {
      "gscServer": {
        "command": "/FULL/PATH/TO/uvx",
        "args": ["mcp-search-console"],
        "env": {
          "GSC_OAUTH_CLIENT_SECRETS_FILE": "/full/path/to/client_secrets.json"
        }
      }
    }
  }
---

This community server exposes roughly twenty Google Search Console tools. It lists properties, runs search-analytics queries with period comparisons, inspects URLs in batches, and manages sitemaps.

Authentication works through a Google OAuth browser flow or a service account. The server runs locally over stdio and installs with `uvx`, so no hosting is required.

No official Google Search Console MCP exists. This project is the practical option for pulling query, impression, and indexing data into an agent session, and it pairs naturally with analytics and backlink servers.
