type BrandKind = 'visa' | 'mastercard' | 'amex' | 'discover' | 'generic';
interface Props { kind: BrandKind; w?: number; h?: number; }

export function Brand({ kind, w = 30, h = 20 }: Props) {
  const base = `inline-flex items-center justify-center shrink-0 rounded-[4px]`;
  const sizeStyle = { width: w, height: h };

  if (kind === 'visa') return (
    <div className={`${base} bg-[#1a1f71] text-white font-bold italic text-[9px] tracking-[.02em]`} style={sizeStyle}>VISA</div>
  );
  if (kind === 'mastercard') return (
    <div className={`${base} bg-white border border-black/[.08] relative`} style={sizeStyle}>
      <div className="absolute w-[9px] h-[9px] rounded-full bg-[#eb001b] left-[7px]" />
      <div className="absolute w-[9px] h-[9px] rounded-full bg-[#f79e1b] right-[7px] mix-blend-multiply" />
    </div>
  );
  if (kind === 'amex') return (
    <div className={`${base} bg-[#1f72cd] text-white font-bold text-[6.5px] tracking-[.04em]`} style={sizeStyle}>AMEX</div>
  );
  if (kind === 'discover') return (
    <div className={`${base} bg-white border border-black/[.08] relative overflow-hidden`} style={sizeStyle}>
      <div className="font-bold text-[6px] text-black tracking-[.04em]">DISC</div>
      <div className="absolute -right-[3px] top-0 bottom-0 w-[14px] bg-[radial-gradient(circle_at_left,#f68121_0%,#f68121_60%,transparent_60%)]" />
    </div>
  );
  return (
    <div className={`${base} bg-gradient-to-br from-[#2a2520] to-[#4a423a] text-[#f4ede0]`} style={sizeStyle}>
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
