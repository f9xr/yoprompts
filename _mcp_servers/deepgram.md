---
title: "Deepgram MCP"
title_tag: "Deepgram MCP server: setup, config and tools"
slug: deepgram
excerpt: "Official MIT MCP server for Deepgram: transcribe audio, synthesise speech and analyse text, with its tool list fetched from the API at runtime."
creator: "Deepgram"
license: "MIT"
transport: "local"
repo_url: "https://github.com/deepgram/mcp"
homepage: "https://developers.deepgram.com/cli/mcp-server"
tags: [speech to text, text to speech, transcription, audio, voice, deepgram]
related: [elevenlabs, notion, linear]
config: |
  {
    "mcpServers": {
      "deepgram": {
        "command": "deepgram-mcp",
        "env": {
          "DEEPGRAM_API_KEY": "<your-api-key>"
        }
      }
    }
  }
---

Deepgram's official MCP server puts speech-to-text, text-to-speech and audio intelligence behind tools an agent can call, so a recording stops being a file you process by hand. Install the package with `pip install deepgram-mcp` (Python 3.10 or newer) and the client runs `deepgram-mcp` over stdio, authenticating with `DEEPGRAM_API_KEY`.

The design difference worth knowing is that the tool list is not compiled into the package. The server proxies to Deepgram's developer API and fetches its tools at runtime, so a new endpoint shows up in your editor on the next connection rather than after a package upgrade. What you get today is `transcribe_audio` for a URL or local file path, `synthesize_speech` for generating audio, `analyze_text` for sentiment, topics and summarisation, plus `list_models` and `get_usage` for discovery and billing checks.

Two configurations are supported. Stdio is the default and the right choice for editor clients. `--transport sse --port 8000` starts an HTTP server for clients that cannot spawn a process, with `--host` and `--port` to control the listener, and `--base-url` if you point it at a different Deepgram deployment. If you already use the Deepgram CLI (`pip install deepctl`), you do not need the standalone package: `dg mcp` wraps it and reuses the credentials from `dg login`, which keeps the key out of your MCP config entirely.

Two things to keep straight before you wire it in. The package is still early — 0.1.1, tagged alpha — so treat tool names as likely to move. And Deepgram also publishes a separate documentation MCP server at `api.dx.deepgram.com/kapa/mcp`; that one only searches their docs and cannot transcribe anything, so it is not a substitute for this server.

Usage bills to your Deepgram account per request, so give the agent a specific file rather than a folder to chew through. In a voice stack it covers the other side of ElevenLabs: ElevenLabs is a hosted, OAuth-authenticated generation service, while this is a local key-based server that reads audio back as text as well as writing it.
