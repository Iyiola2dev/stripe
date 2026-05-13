'use client';
import { useEffect, useState } from 'react';
import { CheckIcon } from '@/components/ui/Icon';

function ProcessStep({ label, delay }: { label: string; delay: number }) {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), delay + 800);
    return () => clearTimeout(t);
  }, [delay]);
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, color: done ? 'var(--ink-2)' : 'var(--muted)', transition: 'color .25s' }}>
      <span style={{
        width: 16, height: 16, borderRadius: '50%',
        background: done ? 'var(--good)' : 'transparent',
        border: done ? '0' : '1.5px solid var(--muted-2)',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        transition: 'background .25s',
      }}>
        {done && <CheckIcon size={10} color="#fff" />}
      </span>
      {label}
    </div>
  );
}

const STEPS = ['Verifying payment method', 'Creating subscription', 'Activating workspace'];

export function LoadingView() {
  return (
    <div style={{
      padding: '60px 40px', minHeight: 480,
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      gap: 22, textAlign: 'center',
    }}>
      <div style={{ position: 'relative', width: 64, height: 64 }}>
        <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: '3px solid rgba(26,23,20,.08)' }} />
        <div style={{
          position: 'absolute', inset: 0, borderRadius: '50%',
          border: '3px solid transparent',
          borderTopColor: 'var(--ink)', borderRightColor: 'var(--accent)',
          animation: 'spin 1s linear infinite',
        }} />
        <div style={{
          position: 'absolute', inset: 16, borderRadius: '50%',
          background: 'linear-gradient(135deg, #f3c98b, #e0764a)',
          opacity: .25, animation: 'pulseRing 1.6s ease-out infinite',
        }} />
      </div>
      <div>
        <div className="serif" style={{ fontSize: 26, fontStyle: 'italic', color: 'var(--ink)' }}>
          Securing your subscription…
        </div>
        <div style={{ fontSize: 13.5, color: 'var(--muted)', marginTop: 6 }}>
          Talking to Stripe · do not close this window
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'flex-start', minWidth: 220 }}>
        {STEPS.map((s, i) => <ProcessStep key={i} label={s} delay={i * 700} />)}
      </div>
    </div>
  );
}
