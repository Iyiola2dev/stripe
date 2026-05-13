'use client';
import React, { useState } from 'react';

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  busy?: boolean;
  full?: boolean;
  style?: React.CSSProperties;
  type?: 'button' | 'submit';
}

export function PrimaryButton({ children, onClick, disabled, busy, full, style = {}, type = 'button' }: Props) {
  const [hover, setHover] = useState(false);
  const [press, setPress] = useState(false);
  const isDisabled = disabled || busy;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)}
      onMouseUp={() => setPress(false)}
      style={{
        position: 'relative', width: full ? '100%' : 'auto',
        padding: '14px 22px', borderRadius: 12,
        background: isDisabled
          ? 'color-mix(in oklab, var(--ink) 35%, transparent)'
          : 'linear-gradient(180deg, #2a2520 0%, #14110d 100%)',
        color: '#f4ede0', fontWeight: 600, fontSize: 15, letterSpacing: '-.005em',
        boxShadow: isDisabled ? 'none' : hover
          ? '0 8px 24px -6px rgba(20,17,13,.55), 0 0 0 4px rgba(224,118,74,.18), inset 0 1px 0 rgba(255,255,255,.12)'
          : '0 4px 12px -4px rgba(20,17,13,.45), inset 0 1px 0 rgba(255,255,255,.12)',
        transform: press ? 'translateY(1px)' : hover ? 'translateY(-1px)' : 'translateY(0)',
        transition: 'transform .15s ease, box-shadow .2s ease, background .2s ease',
        cursor: isDisabled ? 'not-allowed' : 'pointer',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
        overflow: 'hidden', border: 0,
        ...style,
      }}
    >
      {hover && !busy && !isDisabled && (
        <span style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'linear-gradient(110deg, transparent 30%, rgba(255,255,255,.18) 50%, transparent 70%)',
          backgroundSize: '200% 100%', animation: 'shimmer 1.4s linear infinite',
        }} />
      )}
      <span style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', gap: 8, opacity: busy ? 0.7 : 1 }}>
        {busy && (
          <span style={{
            width: 14, height: 14, borderRadius: '50%',
            border: '2px solid rgba(255,255,255,.35)', borderTopColor: '#fff',
            animation: 'spin .8s linear infinite', display: 'inline-block',
          }} />
        )}
        {children}
      </span>
    </button>
  );
}
