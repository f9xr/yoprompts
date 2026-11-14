---
title: "Inspo MCP Server"
title_tag: "Inspo MCP server: setup, config and tools"
slug: inspo
excerpt: "Free hosted MCP server over 832 production sites and 2,320 screens, with 68 reference components and a DESIGN.md extracted from each site."
creator: "Together AI"
license: "MIT"
transport: "remote"
repo_url: "https://github.com/Nutlope/inspo"
homepage: "https://inspomcp.dev/mcp"
tags: [design, inspiration, web design, screenshots, components, design systems, together-ai]
related: [awwwards, figma, playwright]
config: |
  {
    "mcpServers": {
      "inspo": {
        "type": "http",
        "url": "https://inspomcp.dev/api/mcp"
      }
    }
  }
---

Inspo is a read-only MCP server over a hand-curated archive of real production websites, built for the moment before an agent writes UI. It answers three kinds of question from one endpoint: what a layout looks like, what a component made with it looks like in the wild, and what the site's actual type, colour and spacing scales are.

The numbers matter because they set expectations. The archive holds 2,320 captured screens across 832 sites, each with a desktop and mobile pair, plus 68 reference components rendered live on the site. Every captured site also has a `DESIGN.md` extracted from its DOM: semantic palette roles, a type ramp by role, spacing scale, radii, CSS variables and container width. `get_design_system` returns that file, so an agent can build against measured values rather than a description of a screenshot.

The orchestrator is `recommend`: one plain-English brief in, and it returns a macrostructure pick from the 19 named shapes, five real exemplars, matching reference components and a palette. The rest of the 15 tools are the individual moves — `search_screens`, `find_similar`, `find_by_color` (perceptual OKLAB search near a brand colour), `get_screen`, `compare` two to four sites, `find_reference_jsx` for copy-pasteable source, `get_site_pages` for a site's page flow, and `get_filters` so the agent never guesses an enum value. Nine of them form a lean profile for text-first clients, and every list tool takes a `maxTokens` ceiling.

Setup is one config block, or `npx -y inspo-mcp install` if you would rather it detect Claude Code, Cursor, Codex, VS Code, Windsurf, Zed and Claude Desktop and write each config for you (`--dry-run` prints the plan, `--local` wires the stdio form instead of the hosted URL). The hosted endpoint needs no account or key and is free for everyone; it is rate-limited per IP, and the single path that fetches an outside URL is SSRF-guarded.

Two caveats worth knowing. The catalogue is read-only, so nothing here edits your project — it feeds the agent references for its own work. And the MIT licence covers the code, not the designs: every screen credits its designer or studio, and the project honours takedown requests, so rebuild from the reference rather than copying a site's assets into production.

The stdio variant takes optional environment variables: `TOGETHER_API_KEY` enables embedding-based semantic search, and `INSPO_CATALOGUE_URL` points the server at a self-hosted catalogue.
