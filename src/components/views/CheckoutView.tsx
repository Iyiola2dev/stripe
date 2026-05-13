'use client';
import { useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import type { Stripe } from '@stripe/stripe-js';
import { Chip } from '@/components/ui/Chip';
import { StripeMark } from '@/components/ui/StripeMark';
import { LockIcon, ArrowLeftIcon, InfoIcon } from '@/components/ui/Icon';
import { CheckoutForm } from './CheckoutForm';

interface Props {
  stripePromise: Promise<Stripe | null>;
  onBack: () => void;
  onSuccess: (last4: string) => void;
  onLoadingChange: (v: boolean) => void;
}

export function CheckoutView({ stripePromise, onBack, onSuccess, onLoadingChange }: Props) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const elementsOptions = {
    fonts: [{ cssSrc: 'https://fonts.googleapis.com/css2?family=Geist+Mono:wght@400;500&display=swap' }],
    appearance: {
      variables: { colorText: '#1a1714', fontFamily: 'Geist, ui-sans-serif, system-ui, sans-serif' },
    },
  };

  return (
    <div style={{ padding: '32px 40px', display: 'flex', flexDirection: 'column', gap: 20, animation: 'floatUp .4s ease both' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <button onClick={onBack} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12.5, color: 'var(--muted)', padding: '6px 10px 6px 6px', borderRadius: 8 }}>
          <ArrowLeftIcon size={13} /> Back
        </button>
        <Chip tone="test">
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#c4853a' }} />
          Test mode
        </Chip>
      </div>

      <div>
        <h2 style={{ fontSize: 26, fontWeight: 500, margin: 0, letterSpacing: '-0.02em', color: 'var(--ink)' }}>
          Pay <span className="serif num" style={{ fontStyle: 'italic' }}>$99.00</span> to subscribe
        </h2>
        <p style={{ fontSize: 13.5, color: 'var(--muted)', margin: '4px 0 0 0' }}>
          Renews monthly · cancel anytime in settings
        </p>
      </div>

      {error && (
        <div style={{ display: 'flex', gap: 10, padding: '10px 12px', background: 'rgba(224,118,74,.08)', border: '1px solid rgba(224,118,74,.3)', borderRadius: 10, fontSize: 13, color: '#a8421d' }}>
          <InfoIcon size={14} color="#c44a2a" /> <span>{error}</span>
        </div>
      )}

      <Elements stripe={stripePromise} options={elementsOptions}>
        <CheckoutForm
          email={email}
          setEmail={setEmail}
          onSuccess={onSuccess}
          onError={setError}
          onBusyChange={onLoadingChange}
        />
      </Elements>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, color: 'var(--muted)', fontSize: 11.5 }}>
        <LockIcon size={11} /> <span>Encrypted &amp; processed by</span>
        <span style={{ color: 'var(--ink-2)' }}><StripeMark color="currentColor" /></span>
      </div>
    </div>
  );
}
