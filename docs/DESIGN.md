## Overview

xAI is Elon Musk's frontier-AI lab and the website wears that posture with engineered restraint: a near-black canvas `{colors.canvas}` (`#142721`) edge-to-edge, white outline pills as every interactive element, and a single proprietary geometric sans `Universal Sans` carrying every display headline at weight 400. There is no gradient hero, no atmospheric backdrop, no product screenshot. The brand reads as confidently sparse - a research lab announcing its work rather than a SaaS marketing site.

Type is the second decisive voice. `Universal Sans` carries every display at weight 400 (regular) with aggressive negative tracking (`-2.4 px` at 96 px, scaling down through the display ladder). For technical labels, eyebrows, and metric counters, the brand pairs `Geist Mono` (uppercase, 1.4 px positive tracking) - every section eyebrow reads as a code comment more than a marketing label.

Every interactive element is a pill (`{rounded.pill}` 9999 px) with 1 px white-translucent border `rgba(255, 255, 255, 0.25)`. The button shape never varies - the same translucent-white pill carries "Try Grok", "Read announcement", "Custom Voices", "Sign up now", and every "Read" anchor. The pill is the entire shape system.

**Key Characteristics:**
- A single deep-forest canvas (`{colors.canvas}` `#142721`) with cream outline pills as the entire interactive vocabulary.
- Universal Sans weight 400 for display, Geist Mono uppercase tracked for labels - the two-face contrast IS the brand voice.
- Every button is a `{rounded.pill}` outline with translucent-white border. The brand never uses filled CTAs except for one variant (white-filled pill on Sign Up).
- Cards are tight `{rounded.sm}` 8 px rectangles in a slightly-lighter `{colors.canvas-card}` (`#193027`) fill with hairline border. No shadows.
- The palette is three colours from Huemint (`142721-ffeddd-30e373`): forest canvas, cream ink, one signal green. The illustrative accents are tints and shades of those three, so artwork never introduces a fourth hue.
- Massive negative letter-spacing on display headlines (`-2.4 px` at 96 px) gives the typography a precise, gathered look.

## Colors

### Brand & Accent
- **Cream** (`{colors.primary}` - `#ffeddd`): The brand's primary "color" - used as button outline, button-primary fill, all display text. The brand's signature is cream-on-forest.
- **Signal Green** (`{colors.accent-sunset}` - `#30e373`): The one chromatic accent. Reserved for the single most important mark in a composition: the active step, the highlighted bar, the emphasised line.
- **Signal Soft** (`{colors.accent-sunset-soft}` - `#8bf3b1`): The lighter variant, for text or strokes that sit over forest.
- **Deep Green** (`{colors.accent-dusk}` - `#2fb96b`): Mid-tone green used inside product illustrations.
- **Mint** (`{colors.accent-twilight}` - `#b8f5cd`): Soft illustrative accent with enough luminance to read as a highlight.
- **Sage** (`{colors.accent-breeze}` - `#b7d9c6`): Muted supporting accent for the second bar, the secondary shape.
- **Forest Deep** (`{colors.accent-midnight}` - `#0f211b`): Darker than the canvas, for illustrative backgrounds that need separation.

### Surface
- **Canvas** (`{colors.canvas}` - `#142721`): The default forest page background. The brand's only true surface.
- **Canvas Soft** (`{colors.canvas-soft}` - `#1b3329`): A slightly lighter fill used for hovered nav items and tooltips.
- **Canvas Card** (`{colors.canvas-card}` - `#193027`): The card fill used inside product-feature cards.
- **Canvas Mid** (`{colors.canvas-mid}` - `#2c4b3c`): A mid-tone used for nested surfaces and code mockup backgrounds.
- **Hairline** (`{colors.hairline}` - `#263f33`): 1 px solid dividers on dark surfaces.

### Text
- **Ink** (`{colors.ink}` - `#ffeddd`): Default text on canvas - warm cream, never pure white.
- **Ink Hover** (`{colors.ink-hover}` - `#fff6ec`): Slightly brighter cream used for hover states (filtered out per no-hover policy in component specs).
- **Body** (`{colors.body}` - `#d6c8ba`): Secondary body text - supporting copy in lighter weight.
- **Body Mid / Mute** (`{colors.body-mid}` - `#93a99c`): Mid-emphasis body and mute text - a desaturated green that recedes without turning grey.

### Semantic
The brand doesn't surface a separate semantic palette on the marketing site. Validation cues use the cream-on-forest hierarchy; signal green is the only emphasis token and is not used for errors or success states.

One exception exists because a risk state cannot be expressed in cream: **Risk** (`{colors.signal-risk}` - `#ff9d7a`), a soft coral reserved for the high-risk badge and the deleted side of a diff. It is the only hue outside the three-colour palette, and adding a second one means the palette has stopped being one.

## Typography

### Font Family
Two faces ladder the system:
1. **universalSans** - proprietary geometric sans used for every display, body, button, and link role. Weight 400 only on the marketing surface (the brand's restraint is part of the voice). Negative letter-spacing at display sizes is the visual signature.
2. **GeistMono** - used for uppercase section eyebrows, label captions, and metric counters. Positive tracking (1.2 to 1.4 px) at 12 to 14 px.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 96px | 400 | 96px | -2.4px | Maximum hero scale. |
| `{typography.display-lg}` | 72px | 400 | 72px | -1.8px | Sub-hero displays. |
| `{typography.display-md}` | 48px | 400 | 48px | -1.2px | Section headlines. |
| `{typography.display-sm}` | 32px | 400 | 36px | -0.6px | Card-cluster headings. |
| `{typography.display-xs}` | 20px | 400 | 28px | 0 | Inline displays. |
| `{typography.body-lg}` | 18px | 400 | 28px | 0 | Lead paragraphs. |
| `{typography.body-md}` | 16px | 400 | 24px | 0 | Default body. |
| `{typography.body-sm}` | 14px | 400 | 20px | 0 | Secondary body. |
| `{typography.caption-mono}` | 14px | 400 | 20px | 1.4px | Section eyebrow (GeistMono uppercase). |
| `{typography.caption-mono-sm}` | 12px | 400 | 16px | 1.2px | Small mono labels. |
| `{typography.button-md}` | 14px | 400 | 20px | 0 | Button label. |

### Principles
- **Weight 400 for everything.** The brand never bolds. Negative tracking + size hierarchy do the emphasis work.
- **Tight negative tracking on display sizes.** Reverting to neutral tracking loses the precision feel.
- **GeistMono uppercase for eyebrows.** Tracked positively (1.4 px) to make the mono read as a code comment.

### Note on Font Substitutes
universalSans is proprietary. Open-source substitutes:
- **Display + body** - *Inter* weight 400 with `-0.04em` to `-0.02em` letter-spacing at display sizes comes closest. *Geist* is the second-best option.
- **Mono** - *Geist Mono* is the documented brand companion; *JetBrains Mono* or *IBM Plex Mono* are alternates.

## Layout

### Spacing System
- **Base unit**: 4 px.
- **Tokens**: `{spacing.xxs}` 2 px · `{spacing.xs}` 4 px · `{spacing.sm}` 8 px · `{spacing.md}` 12 px · `{spacing.lg}` 16 px · `{spacing.xl}` 24 px · `{spacing.2xl}` 32 px · `{spacing.3xl}` 48 px · `{spacing.4xl}` 64 px.
- **Section padding**: hero / content bands at `{spacing.4xl}` 64 px on desktop.
- **Card interior padding**: `{spacing.xl}` 24 px.

### Grid & Container
- Marketing content centres at ~1200 px.
- Product / announcement card grid: 2-up at desktop, 1-up at mobile.

### Responsive Strategy

#### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 768px | Hero scales 96 → 48 px; grids 1-up; hamburger nav. |
| Desktop | ≥ 768px | Full hero + 2-up grids. |

#### Touch Targets
Buttons render ~32 to 40 px tall (8 vertical padding + 20 line). Mobile inflates touch area to meet WCAG 44 × 44 px.

#### Image Behavior
The brand uses sparse SVG illustrations for product moments (Grok, Voice, API). No photography on the marketing surface.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Level 0 - Flat | No shadow, no border. | Default. |
| Level 1 - Hairline | 1 px solid `{colors.hairline}` border. | Card chrome, button outlines (with translucent white). |

The brand uses no shadows. Hairline borders carry all elevation cues.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Full-bleed bands. |
| `{rounded.sm}` | 8px | Card chrome (the brand's `--radius` value). |
| `{rounded.pill}` | 9999px | Every button - the brand's universal interactive shape. |
| `{rounded.full}` | 9999px | Circular icon containers. |

## Components

### Buttons

**`button-primary`** - the rare white-filled pill (used on a single Sign Up CTA).
- Background `{colors.primary}` white, text `{colors.on-primary}` near-black, 1 px solid white border, label `{typography.button-md}`, padding `{spacing.xs} {spacing.md}`, shape `{rounded.pill}` 9999 px.

**`button-outline-on-dark`** - the canonical white-outline pill, used for every non-primary CTA.
- Background `{colors.canvas}` (transparent in practice - `rgba(0,0,0,0)`), text `{colors.ink}` white, 1 px solid `{colors.hairline}` border (translucent white at runtime), same typography / padding scale / shape.

**`button-outline-sm`** - the smaller outline pill used in card-cluster CTAs.
- Same as `button-outline-on-dark` with tighter padding `{spacing.xs} {spacing.md}`.

### Cards & Containers

**`card-content`** - the default content card.
- Background `{colors.canvas-card}` (`#193027`), text `{colors.ink}`, 1 px solid `{colors.hairline}` border, padding `{spacing.xl}`, shape `{rounded.sm}` 8 px.

**`card-feature-product`** - the product-feature card (Grok / Voice / API).
- Same chrome as `card-content`. Hosts an SVG illustration + headline + body + outline pill CTA.

### Inputs & Forms

**`text-input`** - the standard text input on dark.
- Background `{colors.canvas-soft}`, text `{colors.ink}`, 1 px solid `{colors.hairline}`, body in `{typography.body-md}`, padding `{spacing.md} {spacing.lg}`, shape `{rounded.sm}` 8 px.

### Navigation

**`nav-bar`** - the sticky top nav.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.md} {spacing.xl}`.

**`nav-link`** - link items inside nav.
- Text `{colors.ink}`, set in `{typography.body-sm}`.

**`footer`** - the footer band.
- Background `{colors.canvas}`, text `{colors.body}`, padding `{spacing.3xl} {spacing.xl}`. Body in `{typography.body-sm}`.

### Signature Components

**`hero-band`** - the dark hero with massive display headline.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.4xl} {spacing.xl}`. Headline in `{typography.display-xl}` (96 px weight 400 with `-2.4 px` tracking).

**`content-band`** - the standard content section.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.4xl} {spacing.xl}`. Section headline in `{typography.display-md}` preceded by a `{typography.caption-mono}` UPPERCASE GeistMono eyebrow.

**`eyebrow-mono`** - the uppercase tracked GeistMono label above every section headline.
- Text `{colors.ink}`, set in `{typography.caption-mono}`. The brand's signature label style.

**`divider-hairline`** - the 1 px line between section bands.
- 1 px solid `{colors.hairline}`.

### Examples (illustrative)

> Auto-derived kit-mirror demonstration surfaces (`scripts/derive-examples-block.mjs`). Each `ex-*` entry references brand-native primitives so downstream consumers (`/preview-design`, `/generate-kit`) re-skin the same 10 surfaces consistently. `TO_FILL` markers indicate missing primitives - resolve in the LLM judgment pass.

**`ex-pricing-tier`** - Default Pricing tier card. Re-uses feature-card chrome with brand canvas-soft surface.
- Properties: `backgroundColor`, `textColor`, `borderColor`, `rounded`, `padding`

**`ex-pricing-tier-featured`** - Featured/highlighted tier - polarity-flipped surface (dark fill + light text in light mode, light fill + dark text in dark mode).
- Properties: `backgroundColor`, `textColor`, `rounded`, `padding`

**`ex-product-selector`** - What's Included summary card - re-purposed for SaaS / B2B verticals (NOT a literal product gallery).
- Properties: `backgroundColor`, `rounded`, `padding`

**`ex-cart-drawer`** - Subscription summary - re-purposed for SaaS / B2B (line items per add-on, not literal cart).
- Properties: `backgroundColor`, `rounded`, `padding`, `item-divider`

**`ex-app-shell-row`** - Sidebar nav row inside the App Shell example. Active state uses brand primary as the indicator.
- Properties: `backgroundColor`, `activeIndicator`, `rounded`, `padding`

**`ex-data-table-cell`** - Default data-table th + td chrome. Header uses mono-caps eyebrow typography; body uses body-sm.
- Properties: `headerBackground`, `headerTypography`, `bodyTypography`, `cellPadding`, `rowBorder`

**`ex-auth-form-card`** - Sign-in / sign-up card. Re-uses feature-card chrome with text-input primitives inside.
- Properties: `backgroundColor`, `rounded`, `padding`

**`ex-modal-card`** - Modal dialog surface - same chrome as feature-card with elevated shadow.
- Properties: `backgroundColor`, `rounded`, `padding`

**`ex-empty-state-card`** - Empty-state illustration frame.
- Properties: `backgroundColor`, `rounded`, `padding`, `captionTypography`

**`ex-toast`** - Toast notification surface - feature-card shape + medium shadow.
- Properties: `backgroundColor`, `rounded`, `padding`, `typography`


## Do's and Don'ts

### Do
- Reserve `{colors.canvas}` (`#142721`) as the only page surface. The brand is dark-canvas only.
- Set hero headlines in `{typography.display-xl}` Universal Sans weight 400 with `-2.4 px` tracking. The precision IS the voice.
- Use `{rounded.pill}` 9999 px on every interactive element. The pill is the brand.
- Pair Universal Sans (sentence-case) with GeistMono UPPERCASE (eyebrows, labels, metric counters).
- Use white-translucent borders for outline buttons - the brand never uses solid white borders on its outline pill.

### Don't
- Don't introduce a light-mode counterpart. xAI is dark-canvas only.
- Don't bold display headlines. Weight 400 is the entire scale.
- Don't use filled buttons broadly. The brand uses outline pills almost exclusively; one Sign Up white-filled pill is the rare exception.
- Don't drop a drop-shadow on cards. Hairline borders carry elevation.
- Don't substitute Universal Sans with a generic geometric sans without adjusting letter-spacing. The negative tracking is part of the brand.
