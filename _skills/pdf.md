---
title: "PDF"
slug: pdf
category: productivity
date: 2026-10-28
excerpt: "Extract text and tables from PDFs, fill forms, merge and split files, and generate new PDFs with layout control."
creator: "Anthropic"
license: "Source-available"
repo_url: "https://github.com/anthropics/skills/tree/main/skills/pdf"
tags: [pdf, documents, forms, extraction, tables]
usage: |
  Use the pdf skill to extract every table from report.pdf and return them as
  CSV, then fill the signature fields in form.pdf.
install: |
  npx skills add anthropics/skills@pdf
---

The PDF skill covers the work that a text dump cannot: pulling tables with their structure intact, filling interactive form fields, merging and splitting files, and producing a new PDF with a deliberate layout.

It uses Python libraries under the hood and checks the result rather than assuming the write succeeded. Extracted tables can be returned as structured data, and generated documents can be inspected page by page.

The skill is source-available rather than open source. It is a reference implementation of a production document capability, so test it against your own files before relying on it.
