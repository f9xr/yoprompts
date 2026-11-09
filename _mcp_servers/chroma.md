---
title: "Chroma MCP Server"
slug: chroma
excerpt: "Gives an agent collection and document operations over Chroma, with semantic search, metadata filters, and full-text search."
creator: "Chroma"
license: "Apache-2.0"
transport: "local"
repo_url: "https://github.com/chroma-core/chroma-mcp"
tags: [vector database, embeddings, retrieval, rag, semantic search]
config: |
  {
    "mcpServers": {
      "chroma": {
        "command": "uvx",
        "args": [
          "chroma-mcp",
          "--client-type", "persistent",
          "--data-dir", "/path/to/chroma-data"
        ]
      }
    }
  }
---

Chroma's MCP server exposes collections and documents rather than raw SQL. An agent can create a collection, add documents with metadata, query by semantic similarity, run full-text search, filter by metadata, and update or delete records.

It supports four client types: ephemeral in-memory for tests, persistent for a local directory, HTTP for a self-hosted Chroma instance, and cloud for Chroma Cloud. The configuration above uses a persistent local directory, which is the simplest setup that survives a restart.

Embedding functions are stored with the collection, so choose one at creation time and keep it. External providers such as OpenAI, Cohere, Jina, and Voyage need their API key in the environment.
