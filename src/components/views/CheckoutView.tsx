'use client';
import { useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import type { Stripe } from '@stripe/stripe-js';
import { CheckoutForm } from './CheckoutForm';
import { LoadingView } from './LoadingView';

interface Props {
  stripePromise: Promise<Stripe | null>;
  onBack: () => void;
  onSuccess: (last4: string) => void;
  onLoadingChange: (v: boolean) => void;
  isLoading?: boolean;
}

export function CheckoutView({ stripePromise, onSuccess, onLoadingChange, isLoading }: Props) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const elementsOptions = {
    fonts: [{ cssSrc: 'https://fonts.googleapis.com/css2?family=Geist+Mono:wght@400;500&display=swap' }],
    appearance: {
      variables: { colorText: '#0F172A', fontFamily: 'Geist, ui-sans-serif, system-ui, sans-serif' },
    },
  };

  void error; // surfaced inside CheckoutForm via onError

  return (
    <Elements stripe={stripePromise} options={elementsOptions}>
      <div className="relative">
        {/* form stays in DOM so Stripe iframes survive confirmCardPayment */}
        <CheckoutForm
          email={email}
          setEmail={setEmail}
          onSuccess={onSuccess}
          onError={setError}
          onBusyChange={onLoadingChange}
        />
        {isLoading && (
          <div className="absolute inset-0 z-10 bg-white/95 flex items-center justify-center">
            <LoadingView />
          </div>
        )}
      </div>
    </Elements>
  );
}
