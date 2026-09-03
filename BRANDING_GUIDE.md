# Let's Enterprise (LE) Brand & UI Kit

This guide merges the **LE Master Brand Guidelines** with practical front-end rules for React & Tailwind CSS.

> **Where the values come from.** The LE Design Canon
> (`le-program-map/design-tokens.json`, v1.8.0, locked) is the source of truth
> for **values** — colour, type, shape, contrast. This kit is the home of the
> **font and logo files** and the React showcase patterns. Where the two
> disagree, canon wins. Sections marked *(canon)* below are pinned to it.

---

## 1. Brand Identity & Logos

Always use the official high-resolution branding assets. **The filenames now
describe the artwork inside them** — they did not before, and wiring by the old
names put a white logo on a white page.

*   `assets/le-logo-dark-on-light.png` — black + blue wordmark, for **light** grounds (white, paper, slate-50)
*   `assets/le-logo-white-on-dark.png` — all-white wordmark, for **dark** grounds (Deep Blue)

> Renamed 3 Sep 2026, pixel-verified. The previous names were
> `…Final-Logo_LightMode.png` (which held the *dark* artwork) and
> `…Final-Logo_PNG.png` (which held the *white* artwork), and this guide
> described both backwards. If you have a fork pinned to the old names, check
> which file you are actually loading before you re-point it.

**Sizing & Usage Defaults:**
*   Admin Sidebars: `h-[80px]` (Dark logo)
*   Dashboard Headers: `h-[80px]` to `h-[100px]` (Light logo on dark headers)
*   Action: Do not squeeze or distort the aspect ratio. Use `object-contain`.
*   **The "X" Safe Space:** The logo must maintain clear padding around it (equal to the height of the 'E' in 'Enterprise'). Do not place other graphics immediately next to it.
*   **Do Not:** Add shadows or outlines to the wordmark. Do not squash the logo.

---

## 2. Typography

We have moved to our official Master Brand typographic families. You can use CSS utility classes or standard font stacks to achieve this.

*   **Headlines (Prompt):** The primary headline stack. Very bold and authoritative.
    *   *CSS usage:* `font-headline font-bold text-4xl text-slate-900`
*   **Body & Subheadings (Supreme):** Clean and legible for dashboards and reading.
    *   *CSS usage:* `font-body text-slate-600 font-medium`
*   **Highlights (Acoustica):** Used extremely sparingly for decorative highlights or signature stamps. **Never on a working surface** — never a label, never anything read under time pressure. See the sizing rule below; do not pick a size by eye.
*   **Functional Eyebrows (System Sans):** For small data labels. `text-[10px] uppercase tracking-[0.2em] font-bold`.
*   **Identifiers (Mono):** IDs, codes, refs. Mono is for identifiers **only, never prose**.

### 2.1 The Acoustica pairing rule *(canon — Adi, 3 Aug 2026)*

> When Acoustica is set alongside Prompt or Supreme, it is sized at **2.0× the
> companion's font-size, on the same baseline, with no vertical shift.**

```jsx
{/* 15px body → 30px Acoustica. Same baseline, no translate-y. */}
<p className="font-body text-[15px]">
  Welcome back — <span className="font-highlight text-[30px]">good to see you</span>
</p>
```

Why 2.0×: Acoustica's cap height is identical to Prompt's and Supreme's
(0.700 em), but its lowercase band is **2.8× smaller** — 0.183 em against
Supreme's 0.512 em. **Matching by cap height yields 1.0× and is always wrong.**
Its lowercase feet already sit 0.155 em above the baseline, so on a shared
baseline the script rides naturally high; adding a lift over-corrects.

*   **Floor: never below 1.5×.** Below that it reads as a caption or a mistake.
*   **Mobile budget:** on a 390px phone, 2.0× against 15px body is 30px. Use it
    **once per screen at most** and budget the vertical space.

### 2.2 Acoustica's hard limits — read before you use it

119 glyphs against Supreme's 383. **No accented Latin. No rupee sign.**
Permanent — no fuller build exists. So:

*   **Never set a student's name in Acoustica.** One diacritic renders in a
    fallback face mid-word, and "Welcome back, ‹name›" is exactly the branded
    moment where someone reaches for it. Names are data.
*   **Never set a price, fee or amount** — there is no rupee glyph.
*   Anything user-supplied or non-ASCII belongs in Prompt or Supreme. Acoustica
    is for fixed, authored, ASCII display copy only.

Licensing for all three families, and why this repo must stay private, is in
[`FONTS.md`](./FONTS.md).

---

## 3. Color Palette (Tailwind & Custom Master Colors)

The LE aesthetic is defined by our 3 master brand colors, paired with rich slates and standard functional notification colors.

### 3.1 Primary Master Brand Colors
*   **Enterprise Blue (#3663AD):** The primary interactive and primary action color. Use for main buttons and primary links. *Tailwind arbitrary:* `bg-[#3663AD]`
*   **Deep Blue (#160E44):** The official dark-mode and administrative background. *Tailwind arbitrary:* `bg-[#160E44]`
*   **Bright Teal (#25BCBD):** The secondary highlight and accent color, adding energy to the enterprise look. *Tailwind arbitrary:* `bg-[#25BCBD]`

### 3.2 Functional Accents — the three secondaries *(canon)*

The brand is entirely cool, so the secondaries are its warm counterweight plus
one violet on Deep Blue's own hue. **Each means one thing.** Ratified by Adi,
3 Aug 2026.

*   **Marigold (#DDA22C)** — *a human must act.* Ink variant `#886011` for text.
*   **Ember (#B8421E)** — *destructive or failed, only.* Ink variant `#8A3216`.
*   **Ink Violet (#5945C9)** — *identifiers and the spine, only.* Ink variant `#4433A3`.

**There is no success colour.** Success is Bright Teal, a primary.

#### Three colours this kit used to recommend, and why they are gone

| Was | For | Now |
|---|---|---|
| Emerald `#10b981` | Success, strengths | **Green encodes no status.** Success is Bright Teal; a merely-settled state (saved, published, healthy) is **neutral** — those are the normal state, not achievements. |
| Rose `#f43f5e` | Destructive | **Ember `#B8421E`.** Canon names this rose specifically as the thing it rejects. |
| Amber `#f59e0b` | Warning | **Marigold `#DDA22C`.** `#f59e0b` is also canon's reserved *industry* source hue — using it for warning collides with a meaning that is already spoken for. |

Green may still be a **categorical** hue — a kind or a phase — never a verdict.

### 3.3 The ink-pairing rule — HARD *(canon)*

**Each brand colour takes exactly one ink.** This is binding, not a preference,
and it binds independent apps too. Ratios are measured against the real ink
tokens (`#1C1C1C` dark, `#FFFFFF` light), not pure black or white.

| Surface | Takes | Ratio |
|---|---|---|
| Bright Teal `#25BCBD` | `#1C1C1C` dark ink | 7.31 |
| Enterprise Blue `#3663AD` | `#FFFFFF` white | 5.92 |
| Deep Blue `#160E44` | `#FFFFFF` white | 17.79 |
| Marigold `#DDA22C` | `#1C1C1C` dark ink | 7.53 |
| Ember `#B8421E` | `#FFFFFF` white | 5.47 |
| Ink Violet `#5945C9` | `#FFFFFF` white | 6.73 |

**Two pairs are forbidden. They are named here and rendered nowhere:**

*   **White on Bright Teal — 2.33.** Never use. This is the one people reach for.
*   **Dark ink on Deep Blue — 1.04.** Unreadable.

**Bright Teal is not a text colour.** On paper it measures 1.90. It is a *fill*,
taking dark ink on top. If you want teal-coloured text, you want
`#0E5657` (accent ink), not `#25BCBD`.

> A colour pair that fails contrast is not rendered anywhere — not in a demo,
> not in a mock, not in a specimen sheet. Documenting a forbidden pair means
> naming it, not showing it.

### 3.4 Base neutrals

*   **App backgrounds (light):** `bg-white` for surfaces. Canon's product ground
    is warm paper `#E9E8E3` — this kit still uses `bg-slate-50`, which is cool.
    Migrating to the full canon token set is a follow-up.
*   **Text (light):** `text-slate-900`, `text-slate-700`, `text-slate-500`.

**Neutral is a ladder, not a step.** Three levels, and collapsing them destroys
distinctions silently: **solid** ink for a state that is true and settled,
**soft** ink for ordinary explanatory text, **faint** ink for absence or
something transient. When you move a state onto neutral, check its *siblings* —
a contrast audit measures a pair against its surface and is blind to two
different states resolving to the same pair.

---

## 4. Building "Smart and Sleek" UIs

To make Let's Enterprise apps feel incredibly premium, smart, and sleek, always follow these UI principles:

### 4.1 Frost & Glassmorphism
Instead of flat, solid colors for overlay menus, headers, or floating cards, use backdrop blur to create a frosted glass effect:
```jsx
<div className="bg-white/80 backdrop-blur-md border border-white/20 shadow-xl rounded-2xl">
```
For Deep Blue backgrounds: `bg-[#160E44]/70 backdrop-blur-lg border-[#25BCBD]/20`

### 4.2 Micro-Interactions
Every interactive element should respond gracefully. Use `transition-all duration-300` on buttons and cards.

```jsx
{/* White on Enterprise Blue (5.92), darkening on hover — the ink never changes. */}
<button className="bg-[#3663AD] text-white hover:bg-[#2C5290] transition-colors duration-300 px-6 py-2 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5">
```

> **This example used to hover to `bg-[#25BCBD]`.** With white text that lands
> on white-on-teal at **2.33** — the pairing §3.3 forbids by name. If you want a
> teal button, it takes dark ink in both states:
> `bg-[#25BCBD] text-[#1C1C1C] hover:bg-[#1FA8A9]`.

**No motion on data.** Hover lifts and transitions belong on controls and
showcase surfaces. A table row, a chart, a level bar or a status mark does not
animate — see §4.5.

### 4.3 Soft Shadows & Breathing Room
Avoid harsh black borders. Increase the padding (`p-6` to `p-8`) to let the content breathe.
Use soft, diffuse shadows (`shadow-sm`, `shadow-md`, `shadow-xl` mapped to slate colors).

### 4.4 The "Soft Card" vs "Admin Card"
**Light Mode Soft Card:**
```jsx
<div className="bg-white border border-slate-200/50 p-8 rounded-3xl relative shadow-sm hover:shadow-md transition-shadow">
```

**Dark Mode Admin Card (Deep Blue):**
```jsx
<div className="bg-[#160E44] border border-white/5 rounded-2xl overflow-hidden p-6 shadow-2xl">
```

### 4.5 Where §4 applies — product vs showcase *(canon)*

The same brand renders under **two rule sets**, and they are not variants to be
harmonised. The same treatment can be correct in one and forbidden in the other.

| | **Product** | **Showcase** |
|---|---|---|
| What | Surfaces worked in daily — dashboards, tables, forms, the Bridge, Locus working screens | Surfaces met once — landing pages, campaigns, decks, print, Locus branded moments |
| Must | stay legible under fatigue | persuade |
| Glass, gradient, motion | **no** | yes |
| Acoustica | **no** | yes |
| Ground | warm paper, restrained | open |

Everything in §4.1–4.3 above is **showcase** guidance. On a product surface:

*   No glass, no gradient, no motion on data.
*   Blue never fills a large area — it is the link and identity colour, not a background.
*   Dashed and faint means absent or not-applicable.
*   Data is axis-aligned — never skewed by the brand's diagonal.

`SoftCard` and `AdminCard` in `components.tsx` are described as dashboard and
table containers, which makes them product surfaces carrying showcase
treatment. Splitting them properly is a follow-up; until then, drop the
`backdrop-blur` on any card that holds a table or a chart.

---

## 5. Extracted Assets

The `assets/extracted_graphics` directory contains three official, remaining background/motif variations natively extracted from the Master Guidelines. Use these as subtle background patterns inside the `Deep Blue` containers at low opacity (e.g., `opacity-10`) to add texture to the UI without cluttering it.

---

## 6. Layout Philosophy

1.  **MaxWidth Containers:** Content should not stretch infinitely. Dashboards use `max-w-[1200px]` or `max-w-[1400px]` centered via `mx-auto`.
2.  **Dense Data, Clean Look:** Use uppercase, wide-spaced small fonts (`text-[10px] tracking-[0.2em]`) for table headers to allow the actual data (`font-headline font-bold text-lg`) to stand out.
3.  **Print Optimization:** If an app generates reports, always include `print:` tailwind modifiers (`print:hidden`, `print:bg-white`).

---

## 7. Brand Voice & Core Messaging

> **SHOWCASE ONLY.** This section governs landing pages, campaigns, collateral
> and decks. It does **not** govern product UI text. Read §7.1 before applying
> any of it to a screen someone works in.

Our messaging has shifted from generic "Aspiration" to raw, evidence-led "Acceleration". Marketing copy and campaign surfaces should abide by these principles.

**Core Taglines:**
*   **Tagline:** "Work is the Curriculum"
*   **Activation Line:** "Fast-track into real work."
*   **Proof Points:** "10 challenges. 2 client projects. 4 apprenticeships in 15 months."
*   **The Pitch:** "Stop collecting marks. Start building proof. Execute, don’t just explore."

**Keywords & Tone:**
*   Use words like **Hunger, Proof, Execute, Reality-led, Apprenticeships, Portfolio, Body of Work**.
*   *Do Not Use* generic, fluffy terms like "Aspiration, Innovate the future, Transformation".
*   *Values:* "Quantity > Quality" (building mastery through repetition, not obsessing over early perfection), "Real clients, real deadlines, real feedback."
*   *Persona:* Straight talk from the top. We filter for hunger. "Not everyone is ready for real responsibility at 18."

### 7.1 The register boundary *(canon)*

**LE's brand voice is recruitment-facing. Keywords travel between contexts;
register does not.**

Product register is **warm, plain, self-referenced, non-comparative**. The
keywords above — Proof, Execute, Portfolio, Body of Work — are fine anywhere.
The *persona* is not.

> "We filter for hunger" is correct on a landing page and **wrong inside
> Locus**, where it reads as a threat and breaks the trust contract the surface
> is built on.

The same applies to "Not everyone is ready for real responsibility at 18" and to
"Quantity > Quality" — on a student's own screen the first is a threat and the
second is a grading philosophy they did not ask for. Never generate product
placeholder copy from §7.

### 7.2 On a student surface, the brand leads or recedes *(canon — Locus)*

Locus is external-facing **for visual brand purposes only**. Logo, colour,
typography, motifs and Acoustica may appear there. **The voice register does not
change.**

> **If there is data on the screen, the brand recedes.
> If the screen exists to greet, orient or close a loop, the brand leads.**

| Brand **leads** | Brand **recedes** |
|---|---|
| day-one empty state | check-in |
| onboarding / first run | capture sheet |
| welcome-back after an absence | My Levels, My Journey, the record |
| week-close and reflective end-states | any level, scan, number or trust-card promise |

---

## 8. UI Layout Inspiration (The "Working BBA" Aesthetic)

Applications should feel less like university brochures and more like professional SaaS tools (e.g., Notion, Linear).

### 8.1 Evidence-First Dashboards
*   **Prioritize Data Densities:** Stop using massive amounts of white space for simple text. Pack the UI with stats. 
*   **Use the `<ProofStat />` Component:** Use this for rendering "15 Months" or "10 Projects" directly.
*   **Show, Don't Tell:** Dashboards should guide and motivate by showing a "VISUAL STUDENT WORK JOURNEY" with real logs, records, and images.

### 8.2 Campaign Headers
*   When a landing page or feature requires a massive hook, do not use a standard `h1`. Use the new `<HeroHeading />` component to render **Commanding, Unapologetic Typography** (e.g., `PROOF > POTENTIAL`).
