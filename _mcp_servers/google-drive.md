---
title: "Google Drive MCP Server"
slug: google-drive
excerpt: "Give an agent scoped access to Drive files for search, reading, and summarising documents with a service account or OAuth credentials."
creator: "Model Context Protocol"
license: "MIT"
transport: "local"
repo_url: "https://github.com/modelcontextprotocol/servers/tree/main/src/gdrive"
tags: [google drive, files, documents, search]
config: |
  {
    "mcpServers": {
      "gdrive": {
        "command": "npx",
        "args": ["-y", "@modelcontextprotocol/server-gdrive"],
        "env": {
          "GDRIVE_CREDENTIALS_PATH": "C:\\credentials\\gdrive.json"
        }
      }
    }
  }
---

The Google Drive server exposes file search and reading through a service account or OAuth credentials. An agent can find a document, read its contents, and summarise it without downloading the file by hand.

Use a service account with access to a specific shared drive or folder. Granting access to an entire personal Drive gives the agent more material than any single task needs.

Check the credential file's sharing permissions. The server is only as narrow as the account behind it, and a credential file left in a synced folder is a data exposure risk.
