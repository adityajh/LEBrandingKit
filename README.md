# Let's Enterprise Brand Kit

Welcome to the **Let's Enterprise Brand Kit** repository — the home of the
official **font and logo files** and the React showcase patterns, for developer
and agent-driven UI builds across the Let's Enterprise ecosystem.

Our goal is to ensure that every internal and external application feels like it belongs to the same unified, premium Let's Enterprise experience.

> ### 🔒 This repository must stay private
> It self-hosts Supreme and Acoustica, neither of which may be redistributed.
> Self-hosting inside a **private** repo is *use*; making the repo public turns
> it into redistribution that neither licence covers. **Take the font files out
> first.** Full record and the reasoning: [`FONTS.md`](./FONTS.md).

> ### Where the values come from
> The **LE Design Canon** (`le-program-map/design-tokens.json`, v1.8.0, locked
> 3 Aug 2026) is the source of truth for colour, type, shape and contrast
> values. This kit is the home of the files and the patterns. **Where the two
> disagree, canon wins** — and this kit is currently behind it in ways
> `BRANDING_GUIDE.md` flags inline.

## What's Included

*   [**BRANDING_GUIDE.md**](./BRANDING_GUIDE.md): The master documentation on how to style applications. It merges our official brand identity with tactical Tailwind CSS approaches, covering Typography, Color Palettes, Logos, and Sleek UI principles (like Glassmorphism).
*   **`globals.css`**: The core stylesheet initializing the environment. It contains standard Tailwind imports, print media queries, and all root CSS variables mapping to our official font families and master colors.
*   **`components.tsx`**: A set of standard React UI wrappers (like `SoftCard`, `AdminCard`, and `Badge`) pre-configured with our exact styles, padding, and hover states.
*   **`assets/`**: The folder containing official Let's Enterprise logos, graphical background variations, and typeface files (`Prompt`, `Supreme`, `Acoustica`).
*   [**FONTS.md**](./FONTS.md): Who licensed each typeface, what may be redistributed, and Acoustica's hard glyph limits.

## How to Use this Kit

**First, decide which kind of app you are building** — it changes what you may
take. Full table in `FONTS.md`; the short version:

|  | LE first-party surface | Independent / third-party app |
|---|---|---|
| Logo and wordmark | yes | **no** — a logo is an assertion of authorship |
| Prompt | yes | yes (SIL OFL) |
| Supreme | yes, if **your** repo is private | download from [Fontshare](https://www.fontshare.com/fonts/supreme) yourself |
| Acoustica | yes | **no** |
| Tokens, radii, shadows, ink-pairing rule | yes | yes |

When bootstrapping a new application (e.g., via Next.js or Vite):

1. Copy `globals.css` into your app to adopt the master font bindings and colour variables.
2. Copy **only the assets your app is entitled to** into your `public/` directory:
   * **LE first-party, private repo** — `assets/fonts/` and `assets/` images.
   * **Anything else** — `assets/fonts/Prompt-*.ttf` only. Do **not** copy
     `Supreme-*.ttf` or `Acoustica.ttf`; serving them from a public web root
     republishes them. Point at Fontshare for Supreme, and drop Acoustica.
   * Logo files are named for their artwork: `le-logo-dark-on-light.png` goes on
     light grounds, `le-logo-white-on-dark.png` on dark. (They were renamed on
     3 Sep 2026 — the old names described the opposite of what was inside them.)
3. Import the `components.tsx` elements to form the structural foundation of your dashboards and forms.
4. Strictly follow the `BRANDING_GUIDE.md` when designing custom UI layouts.

## Typography
Our apps use **Prompt** for strong structural headings, **Supreme** for highly readable body copy, and **Acoustica** for signature highlights.

## Colors
Our core theme relies on a stark contrast between **Deep Blue** (#160E44), pure white frosted cards, and vivid **Enterprise Blue** (#3663AD) or **Bright Teal** (#25BCBD) primary actions.

Each brand colour takes **exactly one ink** — that rule is hard, and two pairings
are forbidden outright (white on Bright Teal, dark ink on Deep Blue). See
`BRANDING_GUIDE.md` §3.3 before choosing a text colour.

---
*Created and maintained for Let's Enterprise.*
