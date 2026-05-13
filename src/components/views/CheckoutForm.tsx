'use client';
import { useStripe, useElements, CardNumberElement } from '@stripe/react-stripe-js';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { CardInputGroup } from '@/components/ui/CardInputGroup';
import { OrderSummary } from '@/components/ui/OrderSummary';
import { Brand } from '@/components/ui/Brand';
import { InfoIcon } from '@/components/ui/Icon';
import { useState } from 'react';

const schema = z.object({
  name: z.string().min(1, 'Required'),
  email: z.string().email('Invalid email'),
  country: z.string().min(1),
  zip: z.string().min(1, 'Required'),
});
type FormValues = z.infer<typeof schema>;

const COUNTRIES = [
  ['US', 'United States'], ['CA', 'Canada'], ['GB', 'United Kingdom'],
  ['DE', 'Germany'], ['FR', 'France'], ['JP', 'Japan'], ['AU', 'Australia'],
  ['SG', 'Singapore'], ['NL', 'Netherlands'], ['SE', 'Sweden'],
] as const;

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
  const [busy, setBusy] = useState(false);
  const [cardError, setCardError] = useState('');

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: '', email, country: 'US', zip: '' },
  });

  const onSubmit = form.handleSubmit(async ({ name, email: formEmail, country, zip }) => {
    if (!stripe || !elements) return;
    const cardEl = elements.getElement(CardNumberElement);
    if (!cardEl) return;

    setBusy(true); onBusyChange(true); onError(''); setCardError('');
    setEmail(formEmail);

    try {
      const res = await fetch('/api/create-payment-intent', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: formEmail }),
      });
      const { clientSecret, error: apiErr } = await res.json();
      if (apiErr) { onError(apiErr); setBusy(false); onBusyChange(false); return; }

      const { paymentIntent, error } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: { card: cardEl, billing_details: { name, email: formEmail, address: { country, postal_code: zip } } },
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
  });

  return (
    <Form {...form}>
      <div className="flex min-h-[520px]">
        {/* Left: payment form */}
        <div className="flex-[1.3] px-9 py-8 flex flex-col gap-4 border-r border-line">
          <div>
            <div className="text-[13px] font-semibold text-ink-2 uppercase tracking-wider mb-3">Payment method</div>
            <div className="flex items-center gap-2">
              {(['mastercard', 'visa', 'amex', 'discover'] as const).map(k => (
                <Brand key={k} kind={k} w={34} h={22} />
              ))}
            </div>
          </div>

          <FormField control={form.control} name="name" render={({ field }) => (
            <FormItem>
              <FormLabel>Cardholder name</FormLabel>
              <FormControl><Input placeholder="Full name on card" autoComplete="cc-name" {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />

          <div className="flex flex-col gap-1.5">
            <span className="text-[12.5px] font-medium text-ink-2">Card information</span>
            <CardInputGroup hasError={!!cardError} />
            {cardError && (
              <div className="flex items-center gap-1.5 text-[12px] text-red-500">
                <InfoIcon size={12} color="#EF4444" /> {cardError}
              </div>
            )}
          </div>

          <FormField control={form.control} name="email" render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl><Input placeholder="you@company.com" autoComplete="email" inputMode="email" {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />

          <div className="flex flex-col gap-1.5">
            <span className="text-[12.5px] font-medium text-ink-2">Billing address</span>
            <div className="flex gap-2">
              <FormField control={form.control} name="country" render={({ field }) => (
                <FormItem className="flex-[1.4]">
                  <FormControl>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger><SelectValue /></SelectTrigger>
                      <SelectContent>
                        {COUNTRIES.map(([v, l]) => <SelectItem key={v} value={v}>{l}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </FormControl>
                </FormItem>
              )} />
              <FormField control={form.control} name="zip" render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl><Input placeholder="ZIP / Postal" autoComplete="postal-code" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
            </div>
          </div>
        </div>

        <OrderSummary busy={busy} onSubmit={onSubmit} />
      </div>
    </Form>
  );
}
