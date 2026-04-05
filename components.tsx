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
 */
export function Badge({ 
  children, 
  color = 'slate', 
  className = '' 
}: { 
  children: React.ReactNode, 
  color?: 'emerald' | 'amber' | 'rose' | 'indigo' | 'cyan' | 'slate' | 'enterpriseBlue' | 'brightTeal' | 'deepBlue',
  className?: string 
}) {
  const colorStyles = {
    enterpriseBlue: 'bg-[#3663AD]/10 text-[#3663AD] border-[#3663AD]/20',
    deepBlue: 'bg-[#160E44]/10 text-[#160E44] border-[#160E44]/20',
    brightTeal: 'bg-[#25BCBD]/10 text-[#25BCBD] border-[#25BCBD]/20',
    emerald: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    amber: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    rose: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
    indigo: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
    cyan: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
    slate: 'bg-slate-500/10 text-slate-500 border-slate-500/20',
  };

  return (
    <span className={`px-2 py-1 flex items-center justify-center rounded font-bold text-xs uppercase tracking-wider border ${colorStyles[color]} ${className}`}>
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
