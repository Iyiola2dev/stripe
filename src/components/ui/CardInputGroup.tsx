'use client';
import { CardNumberElement, CardExpiryElement, CardCvcElement } from '@stripe/react-stripe-js';

const ELEMENT_STYLE = {
  base: {
    fontSize: '14.5px',
    fontFamily: "'Geist Mono', ui-monospace, monospace",
    color: '#1a1714',
    letterSpacing: '0.01em',
    '::placeholder': { color: '#a8a095' },
  },
  invalid: { color: '#c44a2a' },
};

interface Props { hasError?: boolean; }

export function CardInputGroup({ hasError }: Props) {
  const boxStyle: React.CSSProperties = {
    display: 'flex', flexDirection: 'column',
    border: `1px solid ${hasError ? '#e0764a' : 'var(--line)'}`,
    borderRadius: 10, overflow: 'hidden',
    background: 'var(--surface)',
    boxShadow: 'inset 0 1px 0 rgba(255,255,255,.5)',
  };
  const rowStyle: React.CSSProperties = {
    padding: '12px 12px', height: 46, display: 'flex', alignItems: 'center',
  };
  const dividerH: React.CSSProperties = { height: 1, background: 'var(--line)' };
  const dividerV: React.CSSProperties = { width: 1, background: 'var(--line)', flexShrink: 0 };
  const elStyle: React.CSSProperties = { width: '100%' };

  return (
    <div>
      <div style={{ fontSize: 12.5, fontWeight: 500, color: 'var(--ink-2)', marginBottom: 6 }}>
        Card information
      </div>
      <div style={boxStyle}>
        <div style={rowStyle}>
          <div style={elStyle}>
            <CardNumberElement options={{ style: ELEMENT_STYLE, showIcon: true }} />
          </div>
        </div>
        <div style={dividerH} />
        <div style={{ display: 'flex' }}>
          <div style={{ ...rowStyle, flex: 1 }}>
            <div style={elStyle}>
              <CardExpiryElement options={{ style: ELEMENT_STYLE }} />
            </div>
          </div>
          <div style={dividerV} />
          <div style={{ ...rowStyle, flex: 1 }}>
            <div style={elStyle}>
              <CardCvcElement options={{ style: ELEMENT_STYLE }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
