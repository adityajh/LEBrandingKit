import React from 'react';

/**
 * Common LE Card Component
 * Usage: Dashboard widgets, lists, or static content containers.
 */
export function SoftCard({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`bg-white/90 backdrop-blur-md border border-slate-200/50 p-8 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 ${className}`}>
      {children}
    </div>
  );
}

/**
 * Common Admin Card Component
 * Usage: Used for tables and data-heavy views in dark mode admin panels.
 */
export function AdminCard({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`bg-[#160E44] border border-white/10 rounded-2xl overflow-hidden p-6 shadow-2xl ${className}`}>
      {children}
    </div>
  );
}

/**
 * Common Pill/Badge Component
 * Usage: Status markers, scores, tags.
 *
 * Tones are named for MEANING, not for hue — the hue is canon's business and
 * may change under it.
 *
 * Every tone pairs a wash with its own INK VARIANT, never with the base brand
 * colour. Measured on the washes below: base teal reads 2.11 against its own
 * wash and base marigold 2.03, both far under AA, which is why #0E5657 and
 * #886011 carry the text instead. With the ink variants every tone here clears
 * 5.0 (accent 7.63, identifier 8.01, danger 7.12, neutral 6.70, link 5.14,
 * act 5.06). See BRANDING_GUIDE.md §3.3 — changing a wash percentage without
 * re-measuring is how these silently drop below AA.
 *
 * The old hue-named props still work and map onto the canon replacement, so
 * nothing breaks on upgrade. They are deprecated — see DEPRECATED_TONES.
 */

/** Meaning-named tones. Prefer these. */
export type BadgeTone =
  | 'neutral'     // settled, ordinary, the normal state — NOT an achievement
  | 'accent'      // levels, positive state, success
  | 'link'        // in progress, on the way
  | 'act'         // a human must act
  | 'danger'      // destructive or failed, only
  | 'identifier'; // IDs, codes, refs — the spine

const TONE_STYLES: Record<BadgeTone, string> = {
  neutral:    'bg-slate-500/10 text-slate-600 border-slate-500/25',
  accent:     'bg-[#25BCBD]/12 text-[#0E5657] border-[#25BCBD]/40',
  link:       'bg-[#3663AD]/10 text-[#3663AD] border-[#3663AD]/30',
  act:        'bg-[#DDA22C]/14 text-[#886011] border-[#DDA22C]/40',
  danger:     'bg-[#B8421E]/10 text-[#8A3216] border-[#B8421E]/30',
  identifier: 'bg-[#5945C9]/10 text-[#4433A3] border-[#5945C9]/30',
};

/**
 * Deprecated hue names, kept so existing call sites keep compiling.
 *
 *   emerald  -> neutral     green encodes no status; a settled state is neutral
 *   rose     -> danger      canon rejects #f43f5e in favour of Ember
 *   amber    -> act         Marigold; #f59e0b is a reserved source hue
 *   cyan     -> accent      use the brand teal, not Tailwind's
 *   indigo   -> identifier  Ink Violet carries identifiers
 */
export type BadgeColor =
  | 'emerald' | 'amber' | 'rose' | 'indigo' | 'cyan' | 'slate'
  | 'enterpriseBlue' | 'brightTeal' | 'deepBlue';

const DEPRECATED_TONES: Record<BadgeColor, BadgeTone> = {
  emerald: 'neutral',
  amber: 'act',
  rose: 'danger',
  indigo: 'identifier',
  cyan: 'accent',
  slate: 'neutral',
  enterpriseBlue: 'link',
  deepBlue: 'neutral',
  brightTeal: 'accent',
};

export function Badge({
  children,
  tone,
  color,
  className = '',
}: {
  children: React.ReactNode,
  tone?: BadgeTone,
  /** @deprecated Use `tone`. Hue names map onto the canon replacement. */
  color?: BadgeColor,
  className?: string
}) {
  const resolved: BadgeTone = tone ?? (color ? DEPRECATED_TONES[color] : 'neutral');

  return (
    <span className={`px-2 py-1 inline-flex items-center justify-center rounded font-bold text-[11px] uppercase tracking-wider border ${TONE_STYLES[resolved]} ${className}`}>
      {children}
    </span>
  );
}

/**
 * Section Eyebrow Label
 * Usage: The small, tracked-out text above a main heading or data point.
 */
export function Eyebrow({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return (
    <p className={`text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400 font-headline ${className}`}>
      {children}
    </p>
  );
}

/**
 * Hero Campaign Heading
 * Usage: Massive, unapologetic text for campaign headers (e.g. PROOF > POTENTIAL)
 */
export function HeroHeading({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return (
    <h1 className={`font-headline font-black text-5xl md:text-7xl text-[#160E44] uppercase tracking-tight leading-none ${className}`}>
      {children}
    </h1>
  );
}

/**
 * Proof Stat Block
 * Usage: High density evidence block (e.g. "10 Challenges", "15 Months")
 */
export function ProofStat({ 
  value, 
  label, 
  className = '' 
}: { 
  value: string | number, 
  label: string, 
  className?: string 
}) {
  return (
    <div className={`flex flex-col border-l-4 border-[#3663AD] pl-4 ${className}`}>
      <span className="font-headline font-black text-4xl text-[#3663AD] leading-none mb-1">{value}</span>
      <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">{label}</span>
    </div>
  );
}
