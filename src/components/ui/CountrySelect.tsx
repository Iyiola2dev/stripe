'use client';
import { ChevronIcon } from './Icon';

const COUNTRIES: [string, string][] = [
  ['US', 'United States'], ['CA', 'Canada'], ['GB', 'United Kingdom'],
  ['DE', 'Germany'], ['FR', 'France'], ['JP', 'Japan'], ['AU', 'Australia'],
  ['SG', 'Singapore'], ['NL', 'Netherlands'], ['SE', 'Sweden'],
];

interface Props { value: string; onChange: (v: string) => void; className?: string; }

export function CountrySelect({ value, onChange, className = '' }: Props) {
  return (
    <div className={`relative flex items-center h-[46px] px-3 bg-transparent ${className}`}>
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        className="appearance-none bg-transparent border-0 flex-1 text-[14.5px] text-ink pr-4 cursor-pointer focus:outline-none"
      >
        {COUNTRIES.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
      </select>
      <span className="absolute right-2.5 pointer-events-none text-muted">
        <ChevronIcon size={12} />
      </span>
    </div>
  );
}
