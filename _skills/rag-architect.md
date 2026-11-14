---
title: "RAG Architect"
title_tag: "RAG Architect — AI agent skill for Engineering"
slug: rag-architect
category: engineering
date: 2026-11-09
excerpt: "Designs a retrieval-augmented generation pipeline around the documents and questions at hand, including chunking, hybrid search, reranking, and evaluation."
creator: "F9XR Team"
license: "MIT"
version: "1.0.0"
tags: [rag, retrieval, embeddings, vector search, llm]
usage: |
  Design a RAG system for this corpus and these questions.

  Start with the document structure and the questions users ask. Choose
  chunking, retrieval, and reranking from that evidence. Include an evaluation
  plan and the failure modes I should expect.

  Corpus and sample questions:
  [describe]
related_skills: [eval-harness-writer, research-synthesis, agent-memory-architect]
skill_file: |
  ---
  name: rag-architect
  description: Design a retrieval-augmented generation system for a specific corpus and question set. Use when the user asks for RAG architecture, retrieval design, chunking strategy, vector search, or help improving answer quality.
  ---

  # RAG Architect

  Retrieval quality decides answer quality. Most RAG failures are retrieval
  failures wearing a generation costume.

  ## Workflow

  1. Describe the corpus: document types, length, structure, update rate,
     and access rules.
  2. Collect real questions, not imagined ones. Group them by what they need:
     a fact, a procedure, a comparison, or a summary across documents.
  3. Choose chunking from the document structure. Preserve headings, tables,
     and code blocks. Never split a table row from its header.
  4. Choose retrieval: keyword, vector, or hybrid. Use hybrid when exact
     identifiers and paraphrases both matter.
  5. Add reranking when the top results are plausible but not precise.
  6. Define the answer contract: cite the chunk, say when the corpus does not
     contain the answer, and never fill a gap from memory.
  7. Design the evaluation before tuning.

  ## Design decisions

  ### Chunking

  - Prefer semantic boundaries: section, paragraph, function, table.
  - Keep a small overlap only when a sentence can straddle a boundary.
  - Store parent document and heading path with every chunk.
  - Do not use a fixed token size as the only rule.

  ### Retrieval

  - Vector search for paraphrase and concept questions.
  - BM25 or keyword search for names, IDs, error codes, and exact phrases.
  - Hybrid with a fusion step when both appear in the question set.
  - Metadata filters for tenant, date, permission, and document type.

  ### Reranking

  - Retrieve more candidates than needed, then rerank.
  - Use a cross-encoder or a model-based reranker when precision matters.
  - Measure the gain. If reranking does not improve the eval, remove it.

  ### Generation

  - Put the retrieved passages before the question.
  - Require a citation for every factual claim.
  - Give the model an explicit path for "not in the provided context".
  - Do not let the model answer from general knowledge unless the product
     wants that and says so.

  ## Evaluation

  - Retrieval: recall at k, mean reciprocal rank, and the share of questions
    with no relevant chunk retrieved.
  - Answer: correctness, citation support, and refusal when unsupported.
  - Build a fixed question set with expected sources before tuning anything.
  - Track regressions per corpus update, not only per prompt change.

  ## Failure modes to name

  - The answer exists but the chunker split it.
  - The right chunk is retrieved but ranked below the cut.
  - The chunk is stale.
  - The question needs a join across documents.
  - The user lacks permission for the source.
  - The model answers from memory instead of the context.

  ## Output

  Return:
  - The recommended pipeline with each choice tied to corpus evidence.
  - The chunk schema and retrieval configuration.
  - The evaluation plan and the baseline to collect first.
  - The failure modes and the test for each.
---

RAG projects often start with a vector database and a chunk size, then discover the questions do not match either. This skill starts from the corpus and the questions, which is the only evidence that can justify the design.

The refusal path is treated as a feature. A system that says "the corpus does not cover this" is more useful than one that produces a confident answer from the wrong chunk.

Pair it with Eval Harness Writer to turn the evaluation plan into a regression suite, or Qdrant and Chroma in the MCP index for the retrieval layer.
