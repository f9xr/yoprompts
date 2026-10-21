---
title: "Build a programmatic SEO page system"
slug: programmatic-seo-pages
category: seo
category_label: SEO
difficulty: advanced
tools: [claude, chatgpt, copilot]
read_time: 8
# jekyll-seo-tag types every dated collection document as BlogPosting.
# These are evergreen prompt pages, not blog posts; WebPage is the correct
# container type, with HowTo/FAQPage supplied by _layouts/prompt.html.
seo:
  type: "WebPage"
picks: []
related: [seo-content-strategy, website-code-audit, document-to-deck]
art: terminal
tags: [programmatic seo, dynamic pages, templates, schema, internal linking, indexation, scaling, seo engineering]
excerpt: "Designs a programmatic page system around a data source: a page template, a unique value per page, and the thin-content guard against doorway pages."
prompt: |
  You are an SEO engineer who has built programmatic page systems and who has
  also cleaned up after them. You know the failure mode: thousands of pages
  generated from a template with one word changed, which Google correctly
  treats as a doorway network. Your job is to design a system where each
  page has a reason to exist that a template cannot supply.

  ## What I will give you
  - The business, and what it sells:
  - The data source that will generate the pages:
  - The entity type each page will be about (a city, a product, a job, a
    course, a tool, a district):
  - The site type and the framework:
  - The pages I already have, and their performance:

  ## Produce in this order

  1. **The unit.** Name the entity type precisely, and state in one
     sentence why a searcher would want a page about one instance of it
     rather than about all of them. If there is no answer, the entity type
     is wrong and a thousand pages will not help.

  2. **The data schema.** The exact fields each page needs, with the type
     of each, where it comes from, and how it is kept fresh. Mark every
     field that is genuinely unique to that instance. A field list with
     three unique fields is a template with one word changed, and you should
     say so.

  3. **The page template.** The sections of the page, in order, with the
     content each section pulls and the length it should be. Mark each
     section: unique, derived from unique fields, or generic filler.
     Generic filler sections are what make the page thin.

  4. **The unique-value budget.** For one example page, list every piece of
     text that differs from another page of the same type. State the
     percentage of the page that is genuinely different from a sibling.
     Below about 30 percent, the page is thin and the system will not
     survive. Say so plainly.

  5. **Indexation rules.** Which pages get indexed, which are
     noindexed, and the exact condition for each. Give a rule that
     evaluates a boolean from the data, not a description. A page with
     insufficient unique data should not be published at all, and the
     threshold belongs in the template.

  6. **Internal linking.** How pages link to each other, with the
     property that makes the link useful rather than random. A link
     between two pages that share a field the reader would want to
     compare. Give the rule, not a list of example links.

  7. **Structured data.** The schema.org type for each page, the
     properties that are real, and the ones you must not claim. Flag every
     field that would need to come from the data to be legitimate.

  8. **The guardrails.** What will make this a thin-content problem: pages
     with no unique data, near-duplicate titles, an empty section, a
     location field with no real local information. Give the check that
     catches each one.

  9. **The launch order.** What to build first, how many pages to start
     with, and the metric that tells you whether to expand or stop.
     Include the signal that says stop, because there always is one.

  10. **The first 10.** The ten example page slugs, with the title, the
      meta description and the list of unique fields each one will have.
      Ten real examples expose the template problems that a plan hides.

  ## Rules
  - Never design a system whose value comes from the volume of pages. If
    the answer to step 4 is that the pages are mostly the same, say the
    system should not be built and explain what the alternative is.
  - Never claim schema.org properties you do not have the data for. A
    Review rating with no reviews is a manual action risk, not a rich
    result.
  - No city or location pages without real local information. A page with
    a swapped city name and the same description is a doorway page.
  - Never use a city or entity name as the only unique field.
  - No thin pages in the index. If a page cannot reach the unique-value
    threshold, it does not get published.
  - Every generated title and description must be unique and readable on
    its own, with no placeholder text and no truncated template variables.
workflow:
  - "Name the entity type and the reason a page about one instance exists"
  - "Specify the data schema and mark the genuinely unique fields"
  - "Design the template and count the unique-value percentage"
  - "Set boolean indexation rules and internal linking properties"
  - "Specify structured data you can actually back"
  - "Give launch order, stop signals and ten worked examples"
output_preview: "An entity type with its justification, a field schema with unique fields marked, a section-by-section template with filler flagged, a unique-value percentage with a verdict, boolean indexation rules, an internal linking rule, the schema.org types with unbacked properties flagged, guardrails, a launch order with a stop signal, and ten worked page examples."
how_to_use:
  - "Bring the real data source, even a sample of it. The design is completely different with a live feed than with a list of names."
  - "Be honest about which fields vary per row. The unique-value budget in step 4 is only useful if the input is honest."
  - "Start with one entity type. A system designed across three types at once ends up serving none of them well."
  - "Run the ten-example step and read them as if you were the searcher. Ten bad examples are a template problem, not a data problem."
tips:
  - "The page count is the least important decision. A hundred pages with 60 percent unique content outperforms ten thousand pages with 5 percent, and the second one gets a site-wide penalty."
  - "Update frequency is a ranking lever in programmatic systems. If your data changes weekly, say so on the page, because a stale signal is a reason to demote the whole pattern."
  - "Do not index the pagination or the sorting and filtering variants. They are the same page with a different query string, and indexing them splits the signals."
  - "Put a real human check on the first hundred pages. Thinness is easy to fix in a template and very hard to fix later, once the pattern is established."
example_output: |
  1. THE UNIT
  A page about one specific district, for someone deciding where to open a
  shop. The reason it exists is that the answer genuinely changes by
  district: footfall, rent band, competing density and the licensing
  position are not a national fact repeated locally.

  2. DATA SCHEMA
  district (string, key)
  median_rent_psf (number, quarterly feed)
  footfall_index (number, monthly feed)
  competing_count (number, computed)
  licence_note (text, editorial, one per district)
  transport_lines (list, static reference)
  population (number, annual)

  Genuinely unique: rent, footfall, competing_count, licence_note,
  transport_lines, population. Six of seven vary.

  3. PAGE TEMPLATE
  - H1: District name + what it is for. UNIQUE
  - Rent and footfall table with the district's own numbers. UNIQUE
  - Comparison against the city average, computed from this row. DERIVED
  - Competition, with the count and the named categories. DERIVED
  - Licensing note, one paragraph, written per district. UNIQUE
  - Transport lines serving the district. DERIVED
  - How to read this page, identical everywhere. GENERIC FILLER
  - CTA to the contact form, identical everywhere. GENERIC FILLER

  4. UNIQUE-VALUE BUDGET
  410 of 640 words vary between siblings: 64 percent unique. Above the
  30 percent floor, driven by the licensing note and the comparison
  numbers. Verdict: viable, provided the licensing note stays a real
  paragraph and does not get templated later.

  5. INDEXATION RULES
  Publish and index when:
    licence_note.length > 400 AND footfall_index IS NOT NULL AND
    median_rent_psf IS NOT NULL
  Otherwise: render as a 404, not a thin page. Never noindex-only, because
  a noindexed thin page is still a thin page in the crawl budget.

  6. INTERNAL LINKING
  Link each district page to the three districts whose footfall index and
  rent are closest to it, with the linking anchor naming the shared
  property, for example "similar footfall and rent in Shoreditch". The
  rule is: nearest neighbours on the rent and footfall axes, linked both
  ways, with the anchor naming the shared attribute rather than the
  district name alone.

  7. STRUCTURED DATA
  Type: Place, with containedInPlace as the city. Properties backed by
  data: name, address (from district), geo (only if you have real
  coordinates). Do NOT claim aggregateRating, priceRange, openingHours or
  amenityFeature unless a real feed supplies them. If you later add
  opening hours for 20 of 60 districts, that is not enough for a schema
  claim across the set.

  8. GUARDRAILS
  - licence_note below 200 characters: the page is near-duplicate. Block
    publish.
  - Same district name with a different slug: duplicate, redirect.
  - Population zero or missing: do not render the population figure.
  - Two districts with identical rent, footfall and competing_count and
    the same generated licensing note: flag as a near-duplicate cluster.

  9. LAUNCH ORDER
  Start with 30 districts, the ones where you can write real licensing
  notes. Do not launch all of them.
  Continue while: pages with unique content stay indexed, and pages
  containing the unique content are actually clicked into from search.
  Stop when: impressions rise with no clicks, or the site-wide index
  coverage drops for the pattern. That second signal is the doorway-page
  signal and it does not come back quickly.

  10. THE FIRST TEN
  Shoreditch, [name], [name], [name], [name], [name], [name], [name],
  [name], [name]
  Each with: title pattern "<District> shop rents, footfall and competition",
  meta description naming the district and one real number from its row,
  and the six unique fields listed above.
  Note for the implementer: the meta description must interpolate a real
  number from the row. A template description with the district name
  swapped in is the exact failure this system is meant to avoid.
faq:
  - q: "How many pages do I need before this works?"
    a: "Enough to be useful to a searcher, which is usually far fewer than people assume. Thirty genuinely useful pages will get indexed and read. Three thousand near-duplicates will get the pattern ignored, and once that happens the good pages inside it are harder to recover."
  - q: "Is programmatic SEO against Google's guidelines?"
    a: "Not by itself. What is against the guidelines is generating pages without added value for the specific query, which is the doorway page definition. The same mechanics produce either outcome depending on the unique-value budget, which is why step 4 is the step that decides it."
  - q: "Should every page have schema markup?"
    a: "Only the properties you can back with real data. Markup that claims reviews or prices you do not have is a manual action risk on the whole template, not just the page. Correct, sparse markup is safer than rich, invented markup."
  - q: "What if my data source is a government API with sparse coverage?"
    a: "That is a common and workable case. Make the indexation rule depend on the data being present, which is what step 5 is for, so districts with no data do not get a page at all. A smaller set of real pages beats a complete set of hollow ones."
---
