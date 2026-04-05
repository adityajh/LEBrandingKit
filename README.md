# Let's Enterprise Brand Kit

Welcome to the **Let's Enterprise Brand Kit** repository. This directory serves as the centralized source of truth for all developer and agent-driven UI builds across the Let's Enterprise ecosystem.

Our goal is to ensure that every internal and external application feels like it belongs to the same unified, premium Let's Enterprise experience.

## What's Included

*   [**BRANDING_GUIDE.md**](./BRANDING_GUIDE.md): The master documentation on how to style applications. It merges our official brand identity with tactical Tailwind CSS approaches, covering Typography, Color Palettes, Logos, and Sleek UI principles (like Glassmorphism).
*   **`globals.css`**: The core stylesheet initializing the environment. It contains standard Tailwind imports, print media queries, and all root CSS variables mapping to our official font families and master colors.
*   **`components.tsx`**: A set of standard React UI wrappers (like `SoftCard`, `AdminCard`, and `Badge`) pre-configured with our exact styles, padding, and hover states.
*   **`assets/`**: The folder containing official Let's Enterprise logos, graphical background variations, and typeface files (`Prompt`, `Supreme`, `Acoustica`).

## How to Use this Kit

When bootstrapping a new application (e.g., via Next.js or Vite):
1. Copy the `globals.css` into your app to adopt the master font bindings and color variables.
2. Copy the `assets/` directory into your `public/` directory (or appropriate static folder for your framework) to serve fonts and images.
3. Import the `components.tsx` elements to form the structural foundation of your dashboards and forms.
4. Strictly follow the `BRANDING_GUIDE.md` when designing custom UI layouts.

## Typography
Our apps use **Prompt** for strong structural headings, **Supreme** for highly readable body copy, and **Acoustica** for signature highlights.

## Colors
Our core theme relies on a stark contrast between **Deep Blue** (#160E44), pure white frosted cards, and vivid **Enterprise Blue** (#3663AD) or **Bright Teal** (#25BCBD) primary actions.

---
*Created and maintained for Let's Enterprise.*
