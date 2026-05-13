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
    <div className={`flex items-center gap-2.5 text-[13px] transition-colors duration-300 ${done ? 'text-ink-2' : 'text-muted'}`}>
      <span className={`w-4 h-4 rounded-full inline-flex items-center justify-center transition-all duration-300
        ${done ? 'bg-good' : 'bg-transparent border-[1.5px] border-muted-2'}`}>
        {done && <CheckIcon size={9} color="#fff" />}
      </span>
      {label}
    </div>
  );
}

const STEPS = ['Verifying payment method', 'Creating subscription', 'Activating workspace'];

export function LoadingView() {
  return (
    <div className="py-16 px-10 flex flex-col items-center justify-center gap-6 text-center">
      <div className="relative w-14 h-14">
        <div className="absolute inset-0 rounded-full border-[3px] border-line" />
        <div className="absolute inset-0 rounded-full border-[3px] border-transparent border-t-accent animate-spin" />
      </div>
      <div>
        <div className="text-[20px] font-semibold text-ink">Securing your subscription…</div>
        <div className="text-[13px] text-muted mt-1">Talking to Stripe · do not close this window</div>
      </div>
      <div className="flex flex-col gap-2 items-start min-w-[220px]">
        {STEPS.map((s, i) => <ProcessStep key={i} label={s} delay={i * 700} />)}
      </div>
    </div>
  );
}
