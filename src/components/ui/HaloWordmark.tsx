interface Props { size?: number; color?: string; }

function HaloMark({ size = 22, color }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className="block">
      <circle cx="12" cy="12" r="9" stroke={color || 'currentColor'} strokeWidth="1.5" />
      <circle cx="12" cy="12" r="3.5" fill={color || 'currentColor'} />
    </svg>
  );
}

export function HaloWordmark({ size = 20, color }: Props) {
  return (
    <div className="inline-flex items-center gap-2" style={{ color: color || 'var(--ink)' }}>
      <HaloMark size={size} color={color || 'currentColor'} />
      <span className="font-semibold tracking-[-0.02em]" style={{ fontSize: size * 0.9 }}>Halo</span>
    </div>
  );
}
