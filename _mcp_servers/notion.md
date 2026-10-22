---
title: "Notion MCP"
slug: notion
excerpt: "Official hosted Notion server for creating pages, querying databases, managing comments, and searching a workspace over OAuth."
creator: "Notion"
transport: "remote"
homepage: "https://developers.notion.com/docs/get-started-with-mcp"
tags: [notes, databases, workspace, collaboration]
---

Notion's official MCP server exposes a workspace through a hosted Streamable HTTP endpoint. An agent can create and edit pages, query databases, manage comments, and search across everything the connected account can see.

Authentication uses OAuth, so the server never needs a long-lived integration token pasted into a config file. Access is limited to the pages and databases the authorizing user grants.

Setup is documented upstream and changes with the hosted service, so follow the Notion guide rather than copying a community configuration.
