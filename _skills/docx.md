---
title: "DOCX"
slug: docx
category: productivity
date: 2026-10-28
excerpt: "Create and edit Word documents with real styles, tracked changes, comments, tables, and page-level formatting."
creator: "Anthropic"
license: "Source-available"
repo_url: "https://github.com/anthropics/skills/tree/main/skills/docx"
tags: [word, documents, tracked changes, ooxml, editing]
usage: |
  Use the docx skill to edit contract.docx, accept the formatting already in
  the file, and return the changes as tracked revisions.
install: |
  npx skills add anthropics/skills@docx
---

The DOCX skill works on the document package rather than on a plain-text approximation. It can create a Word file, edit an existing one, preserve styles and numbering, add tables, and write tracked changes and comments that survive a round trip.

That matters for review work. An agent that rewrites the extracted text and hands back a new file loses the original formatting and any legal or editorial trail. This skill edits the OOXML directly so the document still opens as the document it was.

The skill is source-available rather than open source. Read the bundled license before redistributing it or shipping it inside another product.
