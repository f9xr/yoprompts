---
title: "Qdrant MCP Server"
title_tag: "Qdrant MCP server: setup, config and tools"
slug: qdrant
excerpt: "Adds semantic memory to an agent by storing and retrieving notes in a Qdrant vector collection."
creator: "Qdrant"
license: "Apache-2.0"
transport: "local"
repo_url: "https://github.com/qdrant/mcp-server-qdrant"
tags: [vector database, semantic search, memory, embeddings, retrieval]
config: |
  {
    "mcpServers": {
      "qdrant": {
        "command": "uvx",
        "args": ["mcp-server-qdrant"],
        "env": {
          "QDRANT_URL": "http://localhost:6333",
          "COLLECTION_NAME": "agent-memory",
          "EMBEDDING_MODEL": "sentence-transformers/all-MiniLM-L6-v2"
        }
      }
    }
  }
---

Qdrant's MCP server gives an agent two tools: one stores a piece of information with optional metadata, the other retrieves the most relevant stored items for a query. The collection is created automatically if it does not exist.

Point `QDRANT_URL` at a Qdrant instance, or use `QDRANT_LOCAL_PATH` for a file-backed database with no server. Set `COLLECTION_NAME` so the agent does not have to name a collection on every call.

The default embedding model runs locally through FastEmbed. Set `QDRANT_READ_ONLY=true` when the agent should retrieve memories but never write them.
