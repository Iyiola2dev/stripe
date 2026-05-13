import React from 'react';

interface Props {
  label: string;
  error?: string;
  hint?: string;
  children: React.ReactNode;
}

export function Field({ label, error, hint, children }: Props) {
  return (
    <label style={{ display: 'block' }}>
      <div style={{
        display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
        marginBottom: 6, gap: 8, whiteSpace: 'nowrap',
      }}>
        <span style={{ fontSize: 12.5, fontWeight: 500, color: 'var(--ink-2)' }}>{label}</span>
        {hint && !error && <span style={{ fontSize: 11.5, color: 'var(--muted)' }}>{hint}</span>}
        {error && <span style={{ fontSize: 11.5, color: '#c44a2a', fontWeight: 500 }}>{error}</span>}
      </div>
      {children}
    </label>
  );
}
