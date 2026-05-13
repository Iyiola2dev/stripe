'use client';
import { useState, useMemo } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { PageBackground } from '@/components/layout/PageBackground';
import { CardSurface } from '@/components/layout/CardSurface';
import { TopBar } from '@/components/layout/TopBar';
import { PricingView } from '@/components/views/PricingView';
import { CheckoutView } from '@/components/views/CheckoutView';
import { LoadingView } from '@/components/views/LoadingView';
import { SuccessView } from '@/components/views/SuccessView';

type Step = 'pricing' | 'checkout' | 'loading' | 'success';

export default function HomePage() {
  const [step, setStep] = useState<Step>('pricing');
  const [cardLast4, setCardLast4] = useState('4242');

  const stripePromise = useMemo(
    () => loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!),
    []
  );

  const handleSuccess = (last4: string) => {
    setCardLast4(last4);
    setStep('success');
  };

  const handleLoadingChange = (loading: boolean) => {
    if (loading) setStep('loading');
  };

  const reset = () => setStep('pricing');

  return (
    <>
      <PageBackground />
      <div style={{ position: 'relative', zIndex: 1, minHeight: '100vh' }}>
        <TopBar step={step} onReset={reset} />
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '40px 32px 56px' }}>
          <CardSurface>
            {step === 'pricing' && <PricingView onContinue={() => setStep('checkout')} />}
            {step === 'checkout' && (
              <CheckoutView
                stripePromise={stripePromise}
                onBack={() => setStep('pricing')}
                onSuccess={handleSuccess}
                onLoadingChange={handleLoadingChange}
              />
            )}
            {step === 'loading' && <LoadingView />}
            {step === 'success' && <SuccessView onContinue={reset} cardLast4={cardLast4} />}
          </CardSurface>
        </div>
      </div>
    </>
  );
}
