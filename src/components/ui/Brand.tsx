type BrandKind = 'visa' | 'mastercard' | 'amex' | 'discover' | 'generic';
interface Props { kind: BrandKind; w?: number; h?: number; }

export function Brand({ kind, w = 30, h = 20 }: Props) {
  const wrap: React.CSSProperties = {
    width: w, height: h, borderRadius: 4, display: 'inline-flex',
    alignItems: 'center', justifyContent: 'center', flexShrink: 0,
  };
  if (kind === 'visa') return (
    <div style={{ ...wrap, background: '#1a1f71', color: '#fff', fontWeight: 700, fontStyle: 'italic', fontSize: 9, letterSpacing: '.02em' }}>VISA</div>
  );
  if (kind === 'mastercard') return (
    <div style={{ ...wrap, background: '#fff', border: '1px solid rgba(0,0,0,.08)', position: 'relative' }}>
      <div style={{ position: 'absolute', width: 9, height: 9, borderRadius: '50%', background: '#eb001b', left: 7 }} />
      <div style={{ position: 'absolute', width: 9, height: 9, borderRadius: '50%', background: '#f79e1b', right: 7, mixBlendMode: 'multiply' }} />
    </div>
  );
  if (kind === 'amex') return (
    <div style={{ ...wrap, background: '#1f72cd', color: '#fff', fontWeight: 700, fontSize: 6.5, letterSpacing: '.04em' }}>AMEX</div>
  );
  if (kind === 'discover') return (
    <div style={{ ...wrap, background: '#fff', border: '1px solid rgba(0,0,0,.08)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ fontWeight: 700, fontSize: 6, color: '#000', letterSpacing: '.04em' }}>DISC</div>
      <div style={{ position: 'absolute', right: -3, top: 0, bottom: 0, width: 14, background: 'radial-gradient(circle at left, #f68121 0%, #f68121 60%, transparent 60%)' }} />
    </div>
  );
  return (
    <div style={{ ...wrap, background: 'linear-gradient(135deg, #2a2520, #4a423a)', color: '#f4ede0' }}>
      <svg width="14" height="10" viewBox="0 0 24 16" fill="none">
        <rect x="0" y="0" width="24" height="16" rx="2" fill="currentColor" opacity=".15" />
        <rect x="0" y="3" width="24" height="3" fill="currentColor" opacity=".6" />
      </svg>
    </div>
  );
}

export function detectBrand(num: string): BrandKind {
  const n = num.replace(/\s/g, '');
  if (/^4/.test(n)) return 'visa';
  if (/^(5[1-5]|2[2-7])/.test(n)) return 'mastercard';
  if (/^3[47]/.test(n)) return 'amex';
  if (/^6(011|5|4[4-9])/.test(n)) return 'discover';
  return 'generic';
}
