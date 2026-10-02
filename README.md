# YoPrompts

**Ready-made AI prompts by [F9XR Team](https://github.com/f9xr).**
Copy a prompt, paste it into ChatGPT, Claude, Gemini, or whatever you are
already using, and get a better result than you would have got by writing the
request from scratch.

> Think. Prompt. Create. Copy. Paste. Repeat.

---

## Contents

- [What this is](#what-this-is)
- [Stack](#stack)
- [Running it locally](#running-it-locally)
- [Project structure](#project-structure)
- [Design system](#design-system)
- [Adding a prompt](#adding-a-prompt)
- [Adding a guide](#adding-a-guide)
- [How the front page is assembled](#how-the-front-page-is-assembled)
- [Validating changes](#validating-changes)
- [Deploying](#deploying)
- [Known gaps](#known-gaps)

---

## What this is

A prompt library, not a blog. The unit of content is a **prompt**, and each
prompt ships with:

- the full prompt text, ready to copy
- the category it is filed under, and how many prompts exist in that category
- which AI models it was tested against
- a difficulty level and an honest read-time estimate
- how to use it, what to change for better results, and what the output looks like
- an FAQ, which doubles as `FAQPage` structured data

Everything is a static page. There is no database, no login, and no build-time
JavaScript framework. Search and filtering happen in the browser against data
attributes already in the HTML, so they work instantly and work offline.

---

## Stack

| Concern | Choice |
|---|---|
| Generator | Jekyll 3.9 (GitHub Pages native) |
| Layouts / templates | Liquid, custom — **no theme gem** |
| Styling | One hand-written stylesheet, `assets/css/main.css` |
| Behaviour | One dependency-free script, `assets/js/main.js` |
| Content | `_prompts` collection (library) + `_posts` (guides) |
| Search & filter | Client-side, over `data-*` attributes |
| Fonts | Inter + JetBrains Mono via Google Fonts |

Plugins, all supported on GitHub Pages without a `Gemfile`:

- `jekyll-seo-tag` — canonical URLs, Open Graph, Twitter cards, `WebSite` JSON-LD
- `jekyll-feed` — `/feed.xml`
- `jekyll-sitemap` — `/sitemap.xml`

`DESIGN.md` is the authoritative design document. Read it before changing
anything visual.

---

## Running it locally

**Ruby and Jekyll are not installed in this environment yet.** The site was
written without being able to build it, so the first local build is also the
first real build. On Windows:

```powershell
winget install RubyInstaller.Ruby
# restart the shell, then:
cd C:\Users\inanj\OneDrive\Documents\GitHub\yoprompts
gem install jekyll
jekyll serve
```

The site then runs at <http://127.0.0.1:4000/yoprompts/> — note the `/yoprompts`
base path, which comes from `baseurl` in `_config.yml`.

There is no `Gemfile` in this repo, because every plugin used is already on
GitHub Pages and the site deploys without one. If you want pinned versions for
local work, add a `Gemfile` and switch to `bundle exec jekyll serve`; Pages
ignores both.

If you only need the design system and do not want to install Ruby, open the
generated specimen page instead (see [Validating changes](#validating-changes)).

### Before the first deploy

`_config.yml` currently guesses at the deployment URL:

```yaml
url: "https://f9xr.github.io"
baseurl: "/yoprompts"
```

That is the GitHub Pages default for a **project site** at
`github.com/f9xr/yoprompts`. Correct both values if you are using a custom
domain, a user/org site, or a different host. Getting this wrong breaks every
canonical URL, the sitemap, and all Open Graph images.

---

## Project structure

```
_config.yml              site config, collections, plugin list
_data/
  ai_tools.yml           model slugs, labels, and product URLs
  categories.yml         category slugs, labels, one-line blurbs
  nav.yml                primary navigation entries
_includes/
  archive.html           search + filter axes + prompt grid (shared)
  brand.html             wordmark and mark
  copy-button.html       copy control, with the clipboard-failure fallback
  footer.html            CTA bleed and the floating footer card
  head.html              meta, fonts, stylesheet
  header.html            sticky nav + mobile drawer
  nav-links.html         one nav entry per item, shared by both navs
  prompt-art.html        inline SVG card artwork, four variants
  prompt-card.html       the core prompt card unit
_layouts/
  default.html           page shell
  post.html              guide/article layout
  prompt.html            prompt detail layout, incl. JSON-LD
_prompts/                the prompt library (collection)
_posts/                  guides (collection)
assets/
  css/main.css           the entire design system
  img/favicon.svg
  js/main.js             copy, filter, carousel, drawer, reveals
categories/index.html    category index
prompts/index.html       full searchable library
blog/index.html          guides index
index.html               homepage
404.html
```

### Data files

`_data/categories.yml` and `_data/ai_tools.yml` are the source of truth for
taxonomy. The `slug` in each entry is the value a prompt document uses in
`category:` and `tools:`. The archive page only renders filters that would
return at least one prompt, so adding a category here with no prompts yet
breaks nothing — it just does not appear.

Adding a tool to `_data/ai_tools.yml` automatically gives it a filter pill and
an "Open {label}" button on every prompt page that lists it.

---

## Design system

`DESIGN.md` defines the whole system. The rules that actually constrain day-to-day work:

- **`#0a0a0a` is the only page surface.** There is no light mode. Do not add one.
- **Weight 400 for all display type.** The brand never bolds. Hierarchy comes
  from size and letter-spacing, never from `font-weight`.
- **Every interactive element is a pill** (`9999px`). The shape never varies.
- **No box shadows.** Hairline borders (`#212327`) carry all elevation.
- **Cards are 8px radius**, 24px interior padding, `#191919` on `#212327`.
- **Eyebrows are uppercase JetBrains Mono at `+1.4px`** — they read as code
  comments, which is the point.

`assets/css/main.css` maps these to CSS custom properties in section `01`. Every
other section references those tokens, so changing a token in `:root` propagates
everywhere.

The only sanctioned fonts are **Inter** (standing in for the proprietary
`universalSans`) and **JetBrains Mono** (standing in for `Geist Mono`, which is
not on Google Fonts). Display sizes carry DESIGN.md's negative tracking:
`-2.4px` at 96px, down to `-0.6px` at 32px.

### Deliberate departures from the original brief

The visual brief originally asked for a pastel-lavender, bold-oversized-type,
rounded-and-shadowed editorial style. `DESIGN.md` — a dark, restrained system —
was chosen as authoritative instead. The information architecture, card
geometry, and editorial rhythm survived; the palette, type weights, radii, and
elevation did not. If the pastel look was the actual goal, that is a re-skin,
not a bug fix, and it should be decided before more content is added.

---

## Adding a prompt

Prompt documents live in `_prompts/`. Name the file `YYYY-MM-DD-your-slug.md` —
Jekyll takes `date` from the filename.

**Required front matter.** Every field below is read by a layout or an include,
and a missing one breaks the page or its structured data:

| Field | Type | Notes |
|---|---|---|
| `title` | string | The headline. Aim for the outcome, not the mechanism. |
| `slug` | string | Must be unique. Drives `/prompts/<slug>/`. |
| `category` | string | Must exist in `_data/categories.yml`. |
| `category_label` | string | Printed on the card and page. |
| `difficulty` | string | `beginner`, `intermediate`, or `advanced`. |
| `tools` | list | Slugs from `_data/ai_tools.yml`. |
| `read_time` | int | Minutes. Be honest; 8 is not a default. |
| `excerpt` | string | One or two sentences. Shown on cards and in meta descriptions. |
| `prompt` | block | **The prompt itself**, as a YAML block scalar. |
| `workflow` | list | Short strings, one per step. Drives the featured panel. |
| `art` | string | `workflow`, `terminal`, `chart`, or `palette`. |
| `how_to_use` | list | Ordered steps. Also becomes `HowTo` schema — must not be empty. |
| `tags` | list | Search keywords. Include terms a user would actually type. |
| `faq` | list | `q:`/`a:` maps. Also becomes `FAQPage` schema — must not be empty. |

**Optional front matter:**

| Field | Type | Notes |
|---|---|---|
| `featured` | bool | Exactly one. Becomes the prompt of the week. |
| `picks` | list | `essential` fills the 4-up row; `weekly` fills the 3-up picks. |
| `tips` | list | "Tips for better results". |
| `example_output` | block | Rendered as a prose panel. |

Sketch of the shape:

```yaml
---
title: "Turn any idea into a detailed action plan"
slug: idea-to-action-plan
category: productivity
category_label: Productivity
difficulty: beginner
tools: [chatgpt, claude]
read_time: 4
picks: [essential]
art: workflow
tags: [planning, goals, execution]
excerpt: "One paragraph in, a sequenced plan with owners, dates, and a first step out."
prompt: |
  You are an execution coach...

  ## Context
  - What I want to achieve:

  ## Rules
  - Never invent a deadline I did not give you.
how_to_use:
  - "Describe the goal in two sentences, not a list."
tips:
  - "If it produces a 12-step plan, you gave it too much."
faq:
  - q: "How long does this take?"
    a: "Two minutes of input, one generation pass."
---
```

Writing guidance for the prompt body: give the model a role, state the task in
order, and end with hard rules. The strongest prompts here all forbid the model
from inventing things — no fabricated sources, no guessed owners, no
unrequested metadata. That constraint is what makes the output usable.

---

## Adding a guide

Guides are `_posts/`, dated filenames, and render through `_layouts/post.html`.
Reading time is derived from the rendered word count, so it cannot drift.

```yaml
---
title: "How to write better AI prompts"
description: "One sentence used as the page lede and the meta description."
tags: [prompting]
art: workflow
---
```

`art` is optional and picks the card illustration on `/blog/`.

---

## How the front page is assembled

`index.html` is hand-authored markup in section order. Content comes from the
collection, never hardcoded:

| Section | Source |
|---|---|
| Hero | static |
| Prompt of the week | `site.prompts` where `featured == true`, falling back to the newest |
| Essential prompts (4-up) | `picks` contains `essential` |
| Categories | `_data/categories.yml` |
| Prompt picks (3-up) | `picks` contains `weekly` |
| Stories | static — **placeholder quotes, see Known gaps** |
| Brand statement | static |
| Latest prompts (12) | `_includes/archive.html` with `limit=12` |

`_includes/archive.html` is shared by the homepage and `/prompts/`, and takes
`limit`, `heading`, `heading_tag`, `eyebrow`, `lede`, and `more_href`. The only
difference between the two pages is whether the grid is capped.

To reorder the front page, edit `index.html`. To change what a section pulls,
change the Liquid at the top of the file — there are four `assign` lines that
control all content selection.

---

## Validating changes

There is no Ruby in this environment, so `jekyll build` cannot run. Two scripts
live outside the repo in `%LOCALAPPDATA%\Temp\opencode\`:

| Script | Purpose |
|---|---|
| `validate_yoprompts.py` | Front matter YAML, include and layout resolution, Liquid block balance, HTML tag balance, `site.*` keys, prompt required fields, taxonomy slug integrity, internal link targets, CSS classes used but never defined |
| `build_specimen.py` | Regenerates a standalone design-system specimen HTML from the live `main.css` |

Run both after any structural change:

```powershell
python "$env:LOCALAPPDATA\Temp\opencode\validate_yoprompts.py"
python "$env:LOCALAPPDATA\Temp\opencode\build_specimen.py"
```

The validator should report **0 errors**. Warnings mean one of:

- an internal link points at a page that does not exist yet (expected until the
  remaining pages are built)
- a CSS class appears in HTML but is not defined in `main.css` or `main.js`
- a homepage row does not have enough prompts to fill it

The specimen page is the only way to *see* the design without a build. Open
`%LOCALAPPDATA%\Temp\opencode\yoprompts-specimen.html` in a browser, and resize
past 1024px and 767px to check the breakpoints.

Neither script is committed, deliberately. Once Ruby is available, `jekyll
build` supersedes the validator and these can be deleted.

---

## Deploying

Push to `main`. GitHub Pages builds with Jekyll natively — no CI config, no
build step, no `Gemfile`.

In the repository settings, set **Pages → Source** to *Deploy from a branch*,
branch `main`, directory `/ (root)`.

The custom 404 page works because `404.html` has an explicit
`permalink: /404.html`.

---

## Known gaps

Honest list of what is not finished.

**Blocking launch:**

- **The four testimonials on the homepage are fabricated placeholders.** They
  are illustrative, not collected from users. They are marked with a comment in
  `index.html` and must be replaced with real submissions, or the section
  replaced with the brand statement that already sits below it.
- **`url` and `baseurl` are guesses.** See [Before the first deploy](#before-the-first-deploy).

**Not yet built:**

- `/ai-tools/`, `/resources/`, `/about/`, `/contact/`, `/submit-a-prompt/`
- `/privacy/`, `/terms/`, `/disclaimer/`, `/cookies/`
- `robots.txt`, `robots` meta
- Open Graph image (`assets/img/og-default.png`, 1200×630) — referenced by
  nothing yet, so social shares currently fall back to the favicon
- Guides: the library exists, `_posts/` is empty

**Known limitations:**

- **No local build has ever been run.** The site was authored without Ruby.
  Expect to fix small things on the first `jekyll serve`.
- **Client-side search means no server-rendered results.** Filters do not
  produce indexable URLs, so deep-linking to a filtered view is not possible
  beyond `?q=`.
- **No auth, no saved prompts, no user accounts.** Static hosting cannot do
  these without a backend.
- `.kilo/worktrees/sugared-composer/` holds a stale copy of the site from an
  earlier checkout and has diverged. It is not used and can be deleted.