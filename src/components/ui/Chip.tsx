import React from 'react';

type Tone = 'default' | 'test' | 'good';
interface Props { children: React.ReactNode; tone?: Tone; style?: React.CSSProperties; }

const TONES: Record<Tone, { bg: string; color: string; bd: string }> = {
  default: { bg: 'var(--cream)',                   color: 'var(--ink-2)', bd: 'var(--line)' },
  test:    { bg: 'rgba(243,201,139,.4)',            color: '#8a5a2a',      bd: 'rgba(224,118,74,.3)' },
  good:    { bg: 'rgba(94,211,163,.18)',            color: 'var(--good)',  bd: 'rgba(94,211,163,.35)' },
};

export function Chip({ children, tone = 'default', style = {} }: Props) {
  const t = TONES[tone];
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      padding: '4px 9px', borderRadius: 999,
      background: t.bg, color: t.color, border: `1px solid ${t.bd}`,
      fontSize: 11.5, fontWeight: 500, letterSpacing: '.005em',
      whiteSpace: 'nowrap', flexShrink: 0,
      ...style,
    }}>
      {children}
    </span>
  );
}
