---
title: "Design a RAG system around the documents you actually have"
title_tag: "Design a RAG system around the documents you actually have"
slug: rag-system-design
category: coding
category_label: Coding
difficulty: advanced
tools: [chatgpt, claude]
read_time: 8
seo:
  type: "WebPage"
picks: []
related: [deep-research-synthesis, chat-with-your-data, seo-content-strategy]
skills: [rag-architect, eval-harness-writer]
mcp_servers: [qdrant, chroma]
art: workflow
tags: [rag, retrieval, embeddings, vector search, llm, architecture, search]
excerpt: "Designs retrieval-augmented generation from the corpus and the real questions, with chunking, hybrid search, reranking, and an evaluation plan."
prompt: |
  You are a retrieval engineer who has shipped RAG systems and cleaned up the
  ones that failed. You know that most bad answers are retrieval failures
  wearing a generation costume.

  ## What I will give you
  - The corpus: document types, average length, structure, update rate, and
    access rules:
  - Ten real questions users ask, in their own words:
  - The current stack, if any:
  - Constraints: latency, cost, on-premises requirement, team size:
  - Any evaluation data that already exists:

  ## Produce in this order

  1. **Corpus assessment.** What the documents are made of, where the natural
     boundaries are, what metadata exists, and how updates arrive. If the
     corpus is a pile of PDFs with no structure, say that first.

  2. **Question taxonomy.** Group the questions by what they need: a fact, a
     procedure, a comparison, a summary across documents, or a numeric
     answer. Mark which questions need keyword matching, which need semantic
     matching, and which need both.

  3. **The pipeline.** Ingestion, chunk schema, embedding choice, index,
     retrieval, fusion, reranking, and generation. Tie every choice to the
     corpus or the questions. Where a choice is a tradeoff, name both sides.

  4. **The answer contract.** Citations, refusal when the corpus does not
     contain the answer, freshness rules, and permission checks. A retrieval
     system that ignores access control is a data leak, not a feature.

  5. **The evaluation.** Retrieval metrics, answer metrics, the dataset to
     collect, and the baseline to run before tuning anything.

  6. **Failure modes.** At least six specific ways this design will fail, and
     the test that would catch each one.

  7. **Build order.** The smallest version that can be evaluated in a week,
     then the improvements in the order they should be attempted.

  ## Rules
  - Do not pick a vector database before the retrieval requirement is clear.
  - Do not recommend a fixed chunk size without looking at the document
    structure.
  - Do not claim a model or index is best without naming the tradeoff.
  - Do not skip permissions or tenant isolation.
  - Do not propose fine-tuning before retrieval is measured.
  - Name what cannot be decided without seeing the corpus.
  - Never invent a latency, cost, or accuracy number.

  ## Before you finish
  Cut the design down to the first version you would actually build and
  evaluate. State what you removed from the first version and why.
workflow:
  - "Read the corpus structure before choosing anything"
  - "Group the real questions by retrieval need"
  - "Design chunking, retrieval, fusion, and reranking"
  - "Write the answer contract, including refusal"
  - "Define the evaluation and the baseline"
  - "Name the failure modes and the first build slice"
output_preview: "A corpus assessment, a question taxonomy, a justified retrieval pipeline, an answer contract, an evaluation plan, six failure modes, and a one-week first version."
how_to_use:
  - "Give it real questions, copied from support tickets or search logs. Invented questions produce a pipeline that only works for invented questions."
  - "Describe the document structure precisely. Whether a section is a heading, a table, or a scanned page changes the chunking decision more than any model choice."
  - "State the access rules up front. If documents have per-user permissions, the retrieval design needs a metadata filter, not a post-filter after the model has already seen the text."
  - "Ask for the first version, not the final architecture. The first version exists to produce a baseline, and the baseline is what makes the later choices testable."
tips:
  - "Hybrid retrieval wins when users type exact identifiers such as error codes or product names. Vector-only retrieval tends to miss those."
  - "The refusal path is a feature. A system that says the corpus does not cover a question is more useful than one that answers from the wrong chunk."
  - "Measure retrieval separately from generation. If recall at k is low, no prompt change will fix the answer."
  - "Keep the parent document and heading path on every chunk. Without them, a citation cannot point to anything useful."
example_output: |
  CORPUS
  4,200 support articles, mostly 600 to 1,200 words, with a stable H2 per
  topic and a small number of tables. Updated weekly. Public, no per-user
  permissions.

  QUESTIONS
  - Fact: "What does error 4012 mean?" Needs keyword matching on the code.
  - Procedure: "How do I rotate an API key?" Semantic, but the steps must be
    complete.
  - Comparison: "Difference between the team and enterprise plan?" Needs both
    plans in the context.
  - Summary: "What changed in billing this quarter?" Needs a date filter and
    multiple documents.

  PIPELINE
  - Chunk by H2, keep the H1 and H2 as metadata, do not split a table.
  - Hybrid retrieval: BM25 for error codes, vector for paraphrase, fuse with
    reciprocal rank.
  - Rerank the top 20 to the top 5 with a cross-encoder.
  - Generate with the top 5 chunks and require a citation per claim.

  ANSWER CONTRACT
  - Cite the article title and section.
  - If the top reranked score is below the threshold, say the corpus does not
    cover it.
  - Do not answer from general knowledge.

  FAILURE MODES
  1. The answer spans two H2 sections. Test: a question whose answer needs
     both a cause and a fix.
  2. The error code appears in a changelog but not the article. Test: a code
     mentioned only in release notes.
  3. The top chunk is stale. Test: a question about a deprecated setting.
  4. The table is split. Test: a pricing comparison.
  5. The question is out of scope. Test: a competitor question.
  6. The user asks for a recommendation that the docs do not make. Test: a
     "which plan should I choose" question.

  FIRST VERSION
  Hybrid retrieval and a citation requirement, with no reranker. Evaluate
  recall at 5 on 50 real questions before adding the reranker.
faq:
  - q: "Do I need a vector database to start?"
    a: "Not always. If the corpus is small and the questions use exact terms, a keyword index can produce a usable baseline. The prompt will say so when the corpus and questions support it, instead of assuming a vector database is required."
  - q: "How many questions should the evaluation set have?"
    a: "Start with 50 real questions across the taxonomy. Thirty is enough to see a large retrieval failure, and fewer than that tends to hide a category that is broken."
  - q: "Should I fine-tune the model?"
    a: "Not before retrieval is measured. Most RAG quality problems are retrieval problems, and fine-tuning a model on top of bad retrieval makes the failure harder to see."
  - q: "What about permissions?"
    a: "Put them in the retrieval filter, not in the prompt. If the model can see a document it should not, the prompt cannot unsee it. The prompt will ask for the access rules and design around them."
---
