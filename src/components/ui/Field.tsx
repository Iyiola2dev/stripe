import React from 'react';

interface Props { label: string; error?: string; hint?: string; children: React.ReactNode; }

export function Field({ label, error, hint, children }: Props) {
  return (
    <label className="block">
      <div className="flex items-baseline justify-between mb-1.5 gap-2 whitespace-nowrap">
        <span className="text-[12.5px] font-medium text-ink-2">{label}</span>
        {hint && !error && <span className="text-[11.5px] text-muted">{hint}</span>}
        {error && <span className="text-[11.5px] text-[#c44a2a] font-medium">{error}</span>}
      </div>
      {children}
    </label>
  );
}
