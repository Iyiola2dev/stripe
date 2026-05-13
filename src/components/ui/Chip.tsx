import React from 'react';

type Tone = 'default' | 'test' | 'good';

const TONE_CLASSES: Record<Tone, string> = {
  default: 'bg-cream text-ink-2 border-line',
  test:    'bg-[rgba(243,201,139,.4)] text-[#8a5a2a] border-[rgba(224,118,74,.3)]',
  good:    'bg-[rgba(94,211,163,.18)] text-good border-[rgba(94,211,163,.35)]',
};

interface Props { children: React.ReactNode; tone?: Tone; className?: string; }

export function Chip({ children, tone = 'default', className = '' }: Props) {
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[11.5px] font-medium tracking-[.005em] whitespace-nowrap shrink-0 ${TONE_CLASSES[tone]} ${className}`}>
      {children}
    </span>
  );
}
