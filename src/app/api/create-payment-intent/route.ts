import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe-server';

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 9900,
      currency: 'usd',
      receipt_email: email || undefined,
      description: 'Halo Pro — Monthly Subscription',
      automatic_payment_methods: { enabled: true },
    });
    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Internal error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
