'use client';
import { CardNumberElement, CardExpiryElement, CardCvcElement } from '@stripe/react-stripe-js';

const ELEMENT_STYLE = {
  base: {
    fontSize: '14px',
    fontFamily: "'Geist', ui-sans-serif, system-ui, sans-serif",
    color: '#0F172A',
    letterSpacing: '0.01em',
    '::placeholder': { color: '#94A3B8' },
  },
  invalid: { color: '#DC2626' },
};

interface Props { hasError?: boolean; focus?: boolean; }

export function CardInputGroup({ hasError, focus }: Props) {
  const borderClass = hasError ? 'border-red-400 shadow-input-error' : focus ? 'border-accent shadow-input-focus' : 'border-line';

  return (
    <div className={`flex flex-col border ${borderClass} rounded-lg overflow-hidden bg-surface transition-[border-color,box-shadow] duration-150`}>
      <div className="flex items-center h-11 px-3">
        <div className="w-full">
          <CardNumberElement options={{ style: ELEMENT_STYLE, showIcon: true }} />
        </div>
      </div>
      <div className="h-px bg-line" />
      <div className="flex">
        <div className="flex items-center h-11 px-3 flex-1">
          <div className="w-full">
            <CardExpiryElement options={{ style: ELEMENT_STYLE }} />
          </div>
        </div>
        <div className="w-px bg-line shrink-0" />
        <div className="flex items-center h-11 px-3 flex-1">
          <div className="w-full">
            <CardCvcElement options={{ style: ELEMENT_STYLE }} />
          </div>
        </div>
      </div>
    </div>
  );
}
