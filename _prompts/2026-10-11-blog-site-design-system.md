---
title: "Design and build a complete blog site from one brief"
slug: blog-site-design-system
category: coding
category_label: Coding
difficulty: advanced
tools: [chatgpt, claude, gemini]
# Shared across every prompt page rather than measured per page: the pages
# differ by well over 5% in length. Also feeds the HowTo totalTime.
read_time: 8
# jekyll-seo-tag types every dated collection document as BlogPosting.
# These are evergreen prompt pages, not blog posts; WebPage is the correct
# container type, with HowTo/FAQPage supplied by _layouts/prompt.html.
seo:
  type: "WebPage"
picks: [weekly]
# Every prompt sits in its own category, so the layout's
# same-category fallback can never match. These are curated.
related: [code-review-audit, image-brief-builder]
art: palette
tags: [web design, frontend, ui design, html css, blog, system prompt]
excerpt: "A reusable system prompt that turns one design brief into a full blog layout - palette, type scale, navigation, hero, archive grid, and footer - as semantic HTML and a single stylesheet."
prompt: |
  Act as an expert Senior UI/UX Designer and Frontend Engineer. Your task is
  to generate a comprehensive, modern, pixel-perfect blog website named
  "YoPrompts" by "F9XR Team". The core purpose of this platform is to provide
  high-quality, copy-pasteable AI prompts that yield exceptional results.

  Base the layout, spacing, and rhythm strictly on the reference blog layout
  provided below, adapting the content to fit the prompt library niche.

  ## 1. DESIGN SYSTEM & VISUAL STYLE
  - Theme: Ultra-modern, premium tech-forward SaaS aesthetic.
  - Color Palette:
    * Backgrounds: Pure White (#FFFFFF) for body text readability, paired with
      light, muted pastel purple/lavender (#F3E8FF) block backgrounds.
    * Primary Accents: Deep royal violet/indigo (#2E1065) and electric royal
      purple (#6B21A8) used for dark container blocks, hero elements, footer,
      and heavy contrast.
    * Secondary Accents: Vibrant neon mint (#86EFAC) or soft cyber sage
      (#BBF7D0) for specialized status badges or testimonial borders.
  - Typography: High-contrast, clean sans-serif (e.g. Inter, Plus Jakarta Sans,
    or Satoshi).
    * Hero headlines: Bold, massive, tightly tracked, using multi-tonal text
      gradients (e.g. solid dark purple transitioning into semi-transparent or
      lighter lavender text).
  - Component Styling: Rounded corners (border-radius: 16px to 24px). Soft,
    diffused box shadows for floating card elements. Avoid harsh black borders.
    Use precise, generous vertical padding to create breathing room between
    structural sections.

  ## 2. STRUCTURE & PAGE HIERARCHY

  ### SECTION 1: NAVBAR & LOGO
  - Left side: Sleek text logo "YoPrompts" with a small subtitle or tagline
    reading "by F9XR Team".
  - Center: Minimal text navigation links (Categories, Top Prompts, Live Tools,
    Resources, Pricing).
  - Right side: Direct call-to-action buttons ("Log in" as a text button,
    "Sign up free" as a high-contrast pill button).

  ### SECTION 2: HERO ZONE & FEATURED PIN
  - Headline: A massive statement layout with split-tonal typography:
    "Think. Prompt. Create. / Copy. Paste. Repeat."
  - Main split banner: A two-column prominent featured grid card with a split
    dark/light layout.
    * Left half (soft muted lavender base): Displays a primary text label
      "PROMPT OF THE WEEK", a title ("An elite system prompt for automated
      codebase auditing"), and a descriptive summary snippet.
    * Right half (deep royal purple container): Visually demonstrates the
      prompt utility. Model it as an interactive code snippet box or a
      stylized chat widget mockup showing structured input parameters ("Search
      code", "Apply strict schemas"). Include a prominent, stylized "Copy
      Prompt" action asset.

  ### SECTION 3: RECENT TOP PICKS GRID
  - A horizontal multi-card layout displaying 4 narrow, uniform quick-link
    prompt badges stacked side-by-side.
  - Each card should feature a distinct categorical tag (e.g. "MIDJOURNEY V6",
    "GPT-4O DATA", "CLAUDE CODING") paired with a short, punchy hook.

  ### SECTION 4: CUSTOMER STORIES / WALL OF FAME
  - Headline: "User Success Stories" with manual slider arrow navigation
    anchors positioned on the top right.
  - Carousel cards: A 3-column horizontal card grid.
    * Cards use soft background colors (such as mint green, light purple, dark
      purple) to differentiate user profiles.
    * Content: Direct blockquotes highlighting specific workflow efficiency
      improvements achieved using YoPrompts.

  ### SECTION 5: MAIN BLOG & PROMPT ARCHIVE ENGINE
  - Header: Left-aligned clean title reading "Our Latest Prompts & Guides",
    paired with a horizontal inline row of minimalist category filter tabs
    ("All", "Coding", "Marketing", "Data Analysis", "Image Generation").
  - Dynamic card grid: A perfectly balanced 3-column grid structure containing
    multiple rectangular cards.
  - Card layout archetype (replicate across the grid):
    * Outer structure: Clean rectangular card with a subtle top border or a
      full solid card background.
    * Header element: Bold, contrasting tag badge indicating the target model
      or platform (e.g. "PRODUCTIVITY", "UI/UX DESIGN").
    * Title: Extremely legible, mid-weight heading defining the exact prompt
      outcome.
    * Footer metadata: Minimalist icons depicting reading time, user favorited
      count, and an active pill-shaped "Copy" or "View Prompt" action button.
    * Graphic element (alternating): Interspersed inside the grid, replace
      simple text cards with highly stylized visual preview cards (e.g.
      showcasing a vibrant AI image output or a clean vector dashboard UI
      mockup).
  - Grid bottom: Centered, prominent pill button reading "See more prompts".

  ### SECTION 6: THE FOOTER COOPERATIVE
  - Pre-footer visual: A deep purple transition bleed reading "Let's Prompt."
    in massive, faint background typography.
  - Main footer card: A crisp white floating card container containing:
    * Left section: "YoPrompts by F9XR Team" with comprehensive vertical column
      directories linking to detailed legal pages, product features,
      engineering documents, and company contact avenues.
    * Right section: A distinct dark purple box acting as a standalone
      micro-workspace widget reading "A complete prompt engineering hub."
      accompanied by clear user authentication buttons ("Sign in" / "Sign up").

  ## 3. OUTPUT FORMAT
  - Return semantic HTML and a single hand-written stylesheet. Do not use a CSS
    framework, a build step, or a JavaScript framework.
  - Define the palette, type scale, spacing scale, radii, and shadows once as
    CSS custom properties in a single :root block, then reference the tokens
    everywhere. Do not hardcode a colour or a radius further down.
  - Keep every section in the order above, with the vertical rhythm and
    breathing room the brief asks for.

  ## RULES
  - Do not invent layout sections the brief did not ask for. The value here is
    fidelity to the reference, not extra features.
  - Use only the palette given. If a tint or shade is missing, derive it from
    an existing token and name it; do not introduce a new hue.
  - Where the brief gives placeholder copy, render the placeholder. Do not fill
    in marketing claims, testimonials, or pricing that were not provided.
  - Fix the type scale before styling components. A page styled against the
    wrong scale has to be rebuilt, not patched.
  - Finish with the responsive behaviour: state what reflows, what collapses,
    and at which breakpoints.
output_preview: "A full page of semantic HTML plus one stylesheet implementing the palette, type scale, and every section in order, with tokens in a single :root block and an explicit set of breakpoints."
workflow:
  - "Lock the palette and type scale as tokens first"
  - "Lay out every section against the reference rhythm"
  - "Emit semantic HTML and one token-driven stylesheet"
  - "State the responsive behaviour at each breakpoint"
how_to_use:
  - "Give the reference layout and the niche in the first message. This prompt swaps content into a fixed skeleton, and the skeleton is the part you are actually reusing."
  - "Change the colour tokens and type scale before you generate, not after. Recolouring CSS that assumed the wrong tokens means rewriting every component."
  - "Ask for HTML and CSS in separate blocks so you can drop them into files without editing."
  - "Open the result in a browser and resize past 1024px and 767px. Spacing and navigation problems only appear at the breakpoints."
tips:
  - "Paste the reference's section order as text, not as a screenshot. The model reproduces structure far more reliably from a written outline than from an image."
  - "Have it define every colour as a CSS custom property in one :root block, then restyle the whole page by editing tokens alone."
  - "If a section comes back generic, name the exact content that must appear there. Empty sections invite placeholder filler."
  - "Keep the radius and shadow rules explicit. A model's default is either 4px and flat or 40px and glowing, and neither is what a premium brief asks for."
example_output: |
  ROOT TOKENS
  :root {
    --bg: #ffffff;
    --bg-muted: #f3e8ff;
    --accent: #6b21a8;
    --accent-deep: #2e1065;
    --mint: #86efac;
    --radius: 20px;
  }

  SECTION ORDER
  1. Navbar + logo
  2. Hero + featured split banner
  3. Four-up top picks row
  4. User success stories carousel
  5. Prompt archive grid + filter tabs
  6. Footer bleed + floating footer card

  BREAKPOINTS
  - <= 1024px: featured banner stacks, archive grid goes 3 to 2 columns
  - <= 767px: nav collapses to a drawer, all grids go single column
faq:
  - q: "Why is this framed as a system prompt rather than a one-off build request?"
    a: "Because the value is in the constraints it always applies - token structure, type scale, and section order - not in the single page it produces. Set it as a system prompt and every later request inherits the same design rules."
  - q: "Can it use a real framework like Tailwind or React?"
    a: "This prompt is written for framework-free HTML and one stylesheet, which is what makes the output portable. Ask for a framework and you trade that portability for a build step, so decide which one you want before you start."
  - q: "The colours look wrong. Why?"
    a: "Almost always because tokens were changed after generation instead of before. Fix the :root values, regenerate, and delete any hardcoded colours the model left behind."
  - q: "How faithful is it to my reference layout?"
    a: "Faithful when you give it the section order and spacing as text. From a screenshot it approximates the look and loses the rhythm, and the rhythm is the part that makes a layout feel designed rather than assembled."
---
