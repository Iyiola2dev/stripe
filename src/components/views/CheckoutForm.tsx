'use client';
import { useState } from 'react';
import { useStripe, useElements, CardNumberElement } from '@stripe/react-stripe-js';
import { Field } from '@/components/ui/Field';
import { TextInput } from '@/components/ui/TextInput';
import { CountrySelect } from '@/components/ui/CountrySelect';
import { CardInputGroup } from '@/components/ui/CardInputGroup';
import { PrimaryButton } from '@/components/ui/PrimaryButton';

interface Props {
  email: string;
  setEmail: (v: string) => void;
  onSuccess: (last4: string) => void;
  onError: (msg: string) => void;
  onBusyChange: (v: boolean) => void;
}

export function CheckoutForm({ email, setEmail, onSuccess, onError, onBusyChange }: Props) {
  const stripe = useStripe();
  const elements = useElements();
  const [name, setName] = useState('');
  const [country, setCountry] = useState('US');
  const [zip, setZip] = useState('');
  const [busy, setBusy] = useState(false);
  const [cardError, setCardError] = useState('');

  const submit = async () => {
    if (!stripe || !elements) return;
    const cardEl = elements.getElement(CardNumberElement);
    if (!cardEl) return;

    setBusy(true); onBusyChange(true); onError(''); setCardError('');

    try {
      const res = await fetch('/api/create-payment-intent', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const { clientSecret, error: apiErr } = await res.json();
      if (apiErr) { onError(apiErr); setBusy(false); onBusyChange(false); return; }

      const { paymentIntent, error } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: { card: cardEl, billing_details: { name, email, address: { country, postal_code: zip } } },
      });

      if (error) {
        setCardError(error.message ?? 'Payment failed.');
        setBusy(false); onBusyChange(false);
      } else if (paymentIntent?.status === 'succeeded') {
        const pm = paymentIntent.payment_method;
        const last4 = typeof pm === 'object' && pm?.card?.last4 ? pm.card.last4 : '4242';
        onSuccess(last4);
      }
    } catch {
      onError('Something went wrong. Please try again.');
      setBusy(false); onBusyChange(false);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      <Field label="Email">
        <TextInput value={email} onChange={setEmail} placeholder="you@company.com" autoComplete="email" inputMode="email" />
      </Field>

      <CardInputGroup hasError={!!cardError} />
      {cardError && (
        <div style={{ fontSize: 11.5, color: '#c44a2a', fontWeight: 500, marginTop: -8 }}>{cardError}</div>
      )}

      <Field label="Cardholder name">
        <TextInput value={name} onChange={setName} placeholder="Full name on card" autoComplete="cc-name" />
      </Field>

      <div>
        <div style={{ fontSize: 12.5, fontWeight: 500, color: 'var(--ink-2)', marginBottom: 6 }}>Billing address</div>
        <div style={{ display: 'flex', border: '1px solid var(--line)', borderRadius: 10, overflow: 'hidden', background: 'var(--surface)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,.5)' }}>
          <CountrySelect value={country} onChange={setCountry} style={{ flex: 1.4, borderRight: '1px solid var(--line)' }} />
          <TextInput value={zip} onChange={v => setZip(v.replace(/[^\w\s-]/g, '').slice(0, 10))} placeholder={country === 'US' ? 'ZIP' : 'Postal code'} autoComplete="postal-code" style={{ border: 0, borderRadius: 0, boxShadow: 'none', flex: 1, height: 46 }} />
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 0', borderTop: '1px solid var(--line-2)' }}>
        <div>
          <div style={{ fontSize: 13.5, color: 'var(--ink-2)', fontWeight: 500 }}>Halo Pro · monthly</div>
          <div style={{ fontSize: 11.5, color: 'var(--muted)' }}>Renews monthly · USD</div>
        </div>
        <div className="serif num" style={{ fontSize: 22, color: 'var(--ink)', fontStyle: 'italic' }}>$99.00</div>
      </div>

      <PrimaryButton full busy={busy} onClick={submit} type="button">
        {busy ? 'Processing…' : <>Pay <span className="num" style={{ marginLeft: 2 }}>$99.00</span></>}
      </PrimaryButton>
    </div>
  );
}
