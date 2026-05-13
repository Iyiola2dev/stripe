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
  style?: React.CSSProperties;
}

export function TextInput({ value, onChange, placeholder, onBlur, error, prefix, suffix, mono, type = 'text', maxLength, autoComplete, inputMode, style = {} }: Props) {
  const [focus, setFocus] = useState(false);
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 8,
      background: 'var(--surface)',
      border: `1px solid ${error ? '#e0764a' : focus ? 'var(--ink)' : 'var(--line)'}`,
      borderRadius: 10, padding: '0 12px', height: 44,
      boxShadow: focus
        ? `0 0 0 4px ${error ? 'rgba(224,118,74,.15)' : 'rgba(26,23,20,.08)'}`
        : 'inset 0 1px 0 rgba(255,255,255,.5)',
      transition: 'border-color .15s, box-shadow .2s',
      ...style,
    }}>
      {prefix}
      <input
        type={type} value={value} onChange={e => onChange(e.target.value)}
        onFocus={() => setFocus(true)}
        onBlur={() => { setFocus(false); onBlur?.(); }}
        placeholder={placeholder} maxLength={maxLength}
        autoComplete={autoComplete} inputMode={inputMode}
        style={{
          flex: 1, height: '100%', border: 0, background: 'transparent',
          fontSize: 14.5, color: 'var(--ink)',
          fontFamily: mono ? "'Geist Mono', ui-monospace, monospace" : 'inherit',
          letterSpacing: mono ? '.01em' : 'normal',
          minWidth: 0,
        }}
      />
      {suffix}
    </div>
  );
}
