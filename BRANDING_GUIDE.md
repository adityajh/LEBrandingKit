# Let's Enterprise (LE) Brand & UI Kit

This guide serves as the source of truth for designing new Let's Enterprise applications. It perfectly merges the **LE Master Brand Guidelines** with practical front-end rules for React & Tailwind CSS.

---

## 1. Brand Identity & Logos

Always use the official high-resolution branding assets.

*   `assets/Let's-Enterprise-Final-Logo_PNG.png` (Dark logo, for use on light backgrounds like slate-50 or white)
*   `assets/Let's-Enterprise-Final-Logo_LightMode.png` (Light/White logo, for use on dark backgrounds like Deep Blue)

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
*   **Highlights (Acoustica):** Used extremely sparingly for decorative highlights or signature stamps.
    *   *CSS usage:* `font-highlight text-3xl text-enterprise-blue`
*   **Functional Eyebrows (System Sans):** For small data labels. `text-[10px] uppercase tracking-[0.2em] font-bold`.

---

## 3. Color Palette (Tailwind & Custom Master Colors)

The LE aesthetic is defined by our 3 master brand colors, paired with rich slates and standard functional notification colors.

### 3.1 Primary Master Brand Colors
*   **Enterprise Blue (#3663AD):** The primary interactive and primary action color. Use for main buttons and primary links. *Tailwind arbitrary:* `bg-[#3663AD]`
*   **Deep Blue (#160E44):** The official dark-mode and administrative background. *Tailwind arbitrary:* `bg-[#160E44]`
*   **Bright Teal (#25BCBD):** The secondary highlight and accent color, adding energy to the enterprise look. *Tailwind arbitrary:* `bg-[#25BCBD]`

### 3.2 Base Colors & Functional Accents
*   **App Backgrounds (Light):** `bg-slate-50` (soft off-white) and `bg-white`.
*   **Text (Light Mode):** `text-slate-900`, `text-slate-700`, `text-slate-500`.
*   **Emerald (#10b981):** Positive, Success, Strengths.
*   **Amber (#f59e0b):** Warning, Needs Attention.
*   **Rose (#f43f5e):** Negative, Destructive action.

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
<button className="bg-[#3663AD] hover:bg-[#25BCBD] transition-colors duration-300 px-6 py-2 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5">
```

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

---

## 5. Extracted Assets

The `assets/extracted_graphics` directory contains three official, remaining background/motif variations natively extracted from the Master Guidelines. Use these as subtle background patterns inside the `Deep Blue` containers at low opacity (e.g., `opacity-10`) to add texture to the UI without cluttering it.

---

## 6. Layout Philosophy

1.  **MaxWidth Containers:** Content should not stretch infinitely. Dashboards use `max-w-[1200px]` or `max-w-[1400px]` centered via `mx-auto`.
2.  **Dense Data, Clean Look:** Use uppercase, wide-spaced small fonts (`text-[10px] tracking-[0.2em]`) for table headers to allow the actual data (`font-headline font-bold text-lg`) to stand out.
3.  **Print Optimization:** If an app generates reports, always include `print:` tailwind modifiers (`print:hidden`, `print:bg-white`).
