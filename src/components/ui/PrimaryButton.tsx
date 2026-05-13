'use client';
import React, { useState } from 'react';

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  busy?: boolean;
  full?: boolean;
  className?: string;
  type?: 'button' | 'submit';
}

export function PrimaryButton({ children, onClick, disabled, busy, full, className = '', type = 'button' }: Props) {
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
      className={`
        relative overflow-hidden rounded-xl px-2 py-3.5 border-0
        inline-flex items-center justify-center gap-2
        font-semibold text-[15px] tracking-[-0.005em] text-white
        transition-[transform,box-shadow,background-color] duration-150
        ${full ? 'w-full' : ''}
        ${isDisabled
          ? 'bg-accent/40 cursor-not-allowed shadow-none'
          : hover
            ? 'bg-[#1D4ED8] shadow-btn-hover -translate-y-px'
            : 'bg-accent shadow-btn'
        }
        ${press && !isDisabled ? 'translate-y-px shadow-none' : ''}
        ${className}
      `}
    >
      {hover && !busy && !isDisabled && (
        <span className="absolute inset-0 pointer-events-none bg-[linear-gradient(110deg,transparent_30%,rgba(255,255,255,.12)_50%,transparent_70%)] bg-[length:200%_100%] animate-shimmer" />
      )}
      <span className={`relative inline-flex items-center gap-2 ${busy ? 'opacity-80' : ''}`}>
        {busy && (
          <span className="w-4 h-4 rounded-full border-2 border-white/40 border-t-white animate-spin-slow inline-block" />
        )}
        {children}
      </span>
    </button>
  );
}
