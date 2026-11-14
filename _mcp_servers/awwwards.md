---
title: "Awwwards MCP Server"
title_tag: "Awwwards MCP server: setup, config and tools"
slug: awwwards
excerpt: "Free MIT MCP server that gives coding agents design inspiration from award-winning sites: screenshots, design DNA, motion capture, and build briefs."
creator: "INSANE0777"
license: "MIT"
transport: "local"
repo_url: "https://github.com/INSANE0777/Awwwards-mcp"
tags: [design, inspiration, web design, screenshots, motion, playwright, awwwards]
related: [inspo, figma, playwright]
config: |
  {
    "mcpServers": {
      "awwwards": {
        "command": "npx",
        "args": ["-y", "awwwards-mcp"]
      }
    }
  }
---

Awwwards MCP is a local stdio server that gives an agent a working knowledge of award-winning web design instead of a folder of bookmarks. It searches a cached index of Awwwards winners with their screenshots, pulls what the author calls design DNA — layout bands, type scale, palette, motion — from a live page, and can turn two to five selected sites into a cited build brief.

Three things distinguish it from a screenshot scraper. First, the index is local: `~/.awwwards-mcp/` holds a SQLite cache built by crawling roughly 200 tag pages at one request per second, about four minutes, and the server re-indexes in the background once the cache is older than seven days. Second, evidence is measured rather than described: `analyze_page_structure` returns bands with a total height, `analyze_hover_census` extracts `:hover` rules and samples real before/after diffs, and `record_site_motion` writes a frame-by-frame motion sheet. Third, the outputs are buildable: `build_gsap_stub` and `build_motion_manifest` emit runnable files from the captured evidence rather than a prose summary of a video.

The default surface is 41 tools; `AWWWARDS_MCP_ATLAS=1` raises it to 45, and `AWWWARDS_MCP_PROFILE` switches to a smaller `core` (13) or `v2` (15) set for agents with tight context. Profiles are read once at startup, so changing one needs a server restart.

Install has one trap worth knowing before you debug anything. `npx -y awwwards-mcp` runs the core tools from an isolated cache that has no Playwright or ffmpeg, so every browser tool — capture, structure analysis, motion recording, build verification — returns an install hint instead of running. For those, install side by side in one global prefix with `npm install -g awwwards-mcp playwright ffmpeg-static`, run `npm exec --global -- playwright install chromium`, and point the client at `awwwards-mcp` rather than `npx`.

No API key and no account, but capturing is not free of obligations. Asset downloads require a `rights` basis and evidence, which the server records but does not verify, and captured page content stays the property of its creators — the MIT licence covers the server, not the sites it crawls. Treat captures as reference and rebuild the design rather than shipping lifted assets.
