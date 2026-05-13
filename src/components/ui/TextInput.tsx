'use client';
import React, { useState } from 'react';

interface Props {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  onBlur?: () => void;
  error?: boolean;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  mono?: boolean;
  type?: string;
  maxLength?: number;
  autoComplete?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>['inputMode'];
  className?: string;
}

export function TextInput({ value, onChange, placeholder, onBlur, error, prefix, suffix, mono, type = 'text', maxLength, autoComplete, inputMode, className = '' }: Props) {
  const [focus, setFocus] = useState(false);

  const borderClass = error
    ? 'border-red-400'
    : focus ? 'border-accent' : 'border-line';

  const shadowClass = focus
    ? (error ? 'shadow-input-error' : 'shadow-input-focus')
    : '';

  return (
    <div className={`flex items-center gap-2 bg-surface rounded-lg px-3 h-11 border transition-[border-color,box-shadow] duration-150 ${borderClass} ${shadowClass} ${className}`}>
      {prefix}
      <input
        type={type} value={value} onChange={e => onChange(e.target.value)}
        onFocus={() => setFocus(true)}
        onBlur={() => { setFocus(false); onBlur?.(); }}
        placeholder={placeholder} maxLength={maxLength}
        autoComplete={autoComplete} inputMode={inputMode}
        className={`flex-1 h-full border-0 bg-transparent text-[14px] text-ink min-w-0 placeholder:text-muted-2 ${mono ? 'font-mono tracking-[.01em]' : 'font-sans'}`}
      />
      {suffix}
    </div>
  );
}
