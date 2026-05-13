'use client';
import { ChevronIcon } from './Icon';

const COUNTRIES: [string, string][] = [
  ['US', 'United States'], ['CA', 'Canada'], ['GB', 'United Kingdom'],
  ['DE', 'Germany'], ['FR', 'France'], ['JP', 'Japan'], ['AU', 'Australia'],
  ['SG', 'Singapore'], ['NL', 'Netherlands'], ['SE', 'Sweden'],
];

interface Props {
  value: string;
  onChange: (v: string) => void;
  style?: React.CSSProperties;
}

export function CountrySelect({ value, onChange, style = {} }: Props) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', height: 46, padding: '0 12px',
      position: 'relative', background: 'transparent', ...style,
    }}>
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        style={{
          appearance: 'none', WebkitAppearance: 'none',
          background: 'transparent', border: 0, flex: 1,
          fontSize: 14.5, color: 'var(--ink)', paddingRight: 18, cursor: 'pointer',
        }}
      >
        {COUNTRIES.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
      </select>
      <span style={{ position: 'absolute', right: 10, pointerEvents: 'none', color: 'var(--muted)' }}>
        <ChevronIcon size={12} />
      </span>
    </div>
  );
}
