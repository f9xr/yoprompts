---
title: "Find Skills"
slug: find-skills
excerpt: "A meta-skill that teaches an agent to search and install other skills with the Skills CLI when a task needs a capability it does not have."
creator: "Vercel Labs"
license: "MIT"
repo_url: "https://github.com/vercel-labs/skills/tree/main/skills/find-skills"
tags: [discovery, installation, meta, productivity]
usage: |
  npx skills add vercel-labs/skills@find-skills
---

Find Skills is a package manager workflow for agent capabilities. Instead of stopping when a task needs a tool it lacks, the agent searches the open skills ecosystem with `npx skills find`, evaluates the results, and installs a match with `npx skills add`.

It includes guidance for judging quality before recommending anything: install counts, source reputation, and repository activity. Official sources such as `vercel-labs`, `anthropics`, and `microsoft` are preferred, and a skill from a repository with few stars is treated with suspicion.

The skill also covers updates and global installs, so a machine can be provisioned or kept current without copying files by hand.
