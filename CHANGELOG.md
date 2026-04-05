# Changelog

All notable changes to the Let's Enterprise Brand Kit will be documented in this file.

## [1.1.0] - April 2026

### Added
- Local Font Files integrated into `assets/fonts/` (including the full sets for `Prompt`, `Supreme`, and `Acoustica`).
- `@font-face` links dynamically established in `globals.css` for absolute font fidelity.
- Background motif / graphic variations from the master PDF added to `assets/extracted_graphics/`.
- Sleek / Smart UI Guidelines added to `BRANDING_GUIDE.md` to introduce Glassmorphism, deep dark modes, and transition-based micro-interactions.

### Changed
- Replaced the default `slate` dark mode background in `AdminCard` with the official master `Deep Blue` (`#160E44`).
- Updated `SoftCard` with a frosted glass backdrop blur and increased breathing padding.
- Upgraded the `Badge` component to natively support `enterpriseBlue`, `deepBlue`, and `brightTeal` alongside standard functional colors.
- Formalized `globals.css` to rely heavily on root CSS variables (`--color-enterprise-blue`, `--font-headline`, etc.) instead of hardcoded strings.

## [1.0.0] - Initial Release

### Added
- Base `BRANDING_GUIDE.md` outlining the fundamental Let's Enterprise identity, typography scales (Tailwind), and color distributions.
- Creation of standard library components (SoftCard, AdminCard, Badge).
- `assets/` directory seeded with high-resolution Light and Dark mode logos.
- `globals.css` created for foundational styles and print optimization.
