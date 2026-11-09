---
title: "Neo4j Cypher MCP"
slug: neo4j
excerpt: "Turns natural language into Cypher queries and runs them against a Neo4j graph, with schema inspection built in."
creator: "Neo4j Labs"
license: "MIT"
transport: "local"
repo_url: "https://github.com/neo4j-contrib/mcp-neo4j"
tags: [neo4j, graph database, cypher, knowledge graph, retrieval]
config: |
  {
    "mcpServers": {
      "neo4j": {
        "command": "uvx",
        "args": ["mcp-neo4j-cypher"],
        "env": {
          "NEO4J_URI": "bolt://localhost:7687",
          "NEO4J_USERNAME": "neo4j",
          "NEO4J_PASSWORD": "<your-password>",
          "NEO4J_DATABASE": "neo4j"
        }
      }
    }
  }
---

The Neo4j Cypher server translates a question into Cypher, inspects the graph schema, and runs read or write queries. It is the text-to-Cypher path in the Neo4j Labs collection.

Schema inspection requires the APOC plugin. Read queries have a configurable timeout and an optional response token limit, both of which matter on a graph with large result sets. Set `NEO4J_READ_ONLY=true` to remove the write tool entirely.

Use a dedicated database user with read access for exploration, and only widen it when the agent is expected to update the graph.
