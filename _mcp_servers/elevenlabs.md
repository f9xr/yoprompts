---
title: "ElevenLabs MCP"
slug: elevenlabs
excerpt: "Generates speech, clones voices, transcribes audio, and creates sound effects through ElevenLabs' hosted MCP endpoint."
creator: "ElevenLabs"
license: "MIT"
transport: "remote"
repo_url: "https://github.com/elevenlabs/elevenlabs-mcp"
homepage: "https://elevenlabs.io/docs/agents-platform/operate/hosted-mcp"
tags: [text to speech, voice, audio, transcription, elevenlabs]
config: |
  {
    "mcpServers": {
      "elevenlabs": {
        "url": "https://api.elevenlabs.io/v1/mcp"
      }
    }
  }
---

ElevenLabs runs a hosted MCP server for speech generation, voice cloning, transcription, sound effects, and audio isolation. The hosted endpoint authenticates with OAuth, so no API key is copied into a client configuration.

The local `elevenlabs-mcp` package is deprecated in favor of this endpoint. Use the remote URL unless you have a specific reason to run the older local server.

Audio generation consumes credits, including failed attempts. Give the agent a narrow brief and review the first output before letting it generate a batch.
