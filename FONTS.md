# Font licensing — the only record

The kit ships no licence files from the foundries. This file is therefore the
record. Values are read from each font's own embedded metadata (3 Aug 2026) and
confirmed against the distributor; the rulings are Adi's, recorded in the LE
Design Canon (`le-program-map/design-tokens.json` → `typography.licensing`).

| Family | Foundry | Licence | Commercial | May we redistribute? |
|---|---|---|---|---|
| **Prompt** | Cadson Demak | SIL Open Font License 1.1 | yes | **YES** |
| **Supreme** | Indian Type Foundry | ITF Free Font License (fontshare.com/terms) | yes | **NO** |
| **Acoustica** | Balpirick Studio | Commercial licence held by Adi | yes — LE's own surfaces | **NO** |

**Prompt is the only family that may be handed to anyone outside LE.** It is
also on Google Fonts. Everything else here is LE-only for licensing reasons,
not brand ones.

---

## ⚠️ This repository must stay private

**The compliance is coupled to repository visibility, and nothing in git will
warn you.**

Supreme and Acoustica are self-hosted in `assets/fonts/`. That is legal because
this repository is **private** — self-hosting inside a private repo is *use*,
which both licences permit. It is not redistribution.

If this repository is ever made public — open-sourcing, a public fork, moving to
a public org, attaching a public Pages site — those files become a public
redistribution neither licence covers.

**Take the font files out first.** Nobody flipping a repo to public is thinking
about fonts, which is exactly why this is written down here.

The same coupling applies to `le-bridge` and `le-student-home`, which also
self-host these faces.

---

## What a consuming app may do

**An LE first-party surface** (the Bridge, Locus, Program Studio, showcase and
collateral) may use all three families and may self-host the files, provided
that app's own repository is private.

**An independent or third-party app may use Prompt only.**

- **Supreme:** point the builder at [fontshare.com](https://www.fontshare.com/fonts/supreme)
  to download it themselves. Never ship the font files in a starter kit or a
  repo they clone. A licence covers the buyer's use, not sublicensing.
- **Acoustica:** not available to third-party builders at all. Handing the file
  to an outside developer is a separate permission nobody has granted.

This is why `README.md` no longer tells you to copy `assets/` wholesale into a
public web root: doing that re-publishes both restricted faces from every app
that follows the instruction.

---

## Acoustica — hard limits that are not about licensing

The shipped build has **119 glyphs** against Supreme's 383. This is permanent;
no fuller build exists, so these are limits on where the face can be used, not a
defect awaiting a file swap.

- **No accented Latin at all.**
- **No rupee sign.** (Euro and pound are present.)

Consequently:

1. **Never set a student's name in Acoustica.** One missing diacritic renders in
   a fallback face mid-word — and "Welcome back, ‹name›" is exactly the branded
   moment where someone reaches for it.
2. **Never set a price, fee or amount.** No rupee glyph, which for an Indian
   programme is the currency that matters.
3. **Anything user-supplied or non-ASCII belongs in Prompt or Supreme.**
   Acoustica is for fixed, authored, ASCII display copy only.

### File identity — do not re-raise this

The licensed build **is** the file already in this kit. Verified by hash:
`assets/fonts/Acoustica.ttf` is byte-identical to the copies Adi supplied on
3 Aug 2026 —

```
md5  43ef01a158b1ec97d8c0d0559cba4f2a  assets/fonts/Acoustica.ttf
```

Its internal name table still reads *"Acoustica Demo Version (c) Balpirick
Studio. 2021"*. That is the build's 2021 shipping name, **not** a sign of an
unlicensed copy. Do not "fix" it by hunting for a fuller download — there isn't
one — and do not re-raise it as a licensing flag.
