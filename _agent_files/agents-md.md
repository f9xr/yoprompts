---
title: "AGENTS.md"
title_tag: "AGENTS.md — the open format for agent instructions"
slug: agents-md
file_type: agents
date: 2026-11-16
excerpt: "The format's own README: a predictable file at the repository root, with a sample covering dev commands, tests and pull request rules."
creator: "AGENTS.md project"
creator_url: "https://agents.md"
license: "MIT"
repo_url: "https://github.com/agentsmd/agents.md"
source_file: "README.md"
tags: [agent instructions, convention, open format, repository, workflow]
related_files: [design-md-spec, ant-design-agents]
---

The pitch fits in one line: a README for agents. Instead of scattering setup notes across a wiki, a `CONTRIBUTING.md` and three Slack threads, the project puts a single file where an agent already looks, and keeps it in version control beside the code it describes.

The sample file in this README is the useful part. It is not a schema or a table of fields; it is a short, concrete example of the three things an agent actually needs: how to move around the repository (`pnpm dlx turbo run where <project>`), how to run and focus the tests, and how a pull request should be titled and checked. Every instruction is a command the agent can run, not a preference it has to interpret.

That is the whole design argument. AGENTS.md is deliberately unopinionated about structure and strongly opinionated about place — one predictable location per repository, so the agent does not have to be told where to look. Tools that read the file treat it as standing instructions at the start of a session, which is why writing "run `pnpm build` before committing" here saves repeating it on every task.

The README is worth reading before you write your own: it keeps its example small, and the smallness is the lesson. A file that lists twenty commands nobody runs teaches an agent to skim.
