---
title: "Firecrawl MCP"
slug: firecrawl
excerpt: "Scrape and crawl sites with JavaScript rendering, PDF extraction, and structured data output for agent workflows."
creator: "Firecrawl"
transport: "remote"
repo_url: "https://github.com/firecrawl/firecrawl-mcp-server"
homepage: "https://firecrawl.dev"
tags: [scraping, crawling, extraction, pdf]
config: |
  {
    "mcpServers": {
      "firecrawl-mcp": {
        "command": "npx",
        "args": ["-y", "firecrawl-mcp"],
        "env": {
          "FIRECRAWL_API_KEY": "YOUR-API-KEY"
        }
      }
    }
  }
---

Firecrawl turns pages into clean markdown or structured data, including sites that render with JavaScript. It also handles PDFs, which makes it useful for documentation, reports, and research collections that a plain HTTP fetch would miss.

The server supports scraping a single page, crawling a section of a site, and extracting fields against a schema. Results can feed a retrieval index, a content pipeline, or a one-off analysis.

An API key is required. The NPX configuration above runs the server locally, while the hosted endpoint is available for clients that prefer a remote connection.
