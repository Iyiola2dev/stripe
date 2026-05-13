export function SuccessMark({ size = 96 }: { size?: number }) {
  const r = size / 2 - 4;
  const circumference = 2 * Math.PI * r;
  return (
    <div style={{ position: 'relative', width: size, height: size }}>
      <div style={{
        position: 'absolute', inset: 0, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(94,211,163,.25) 0%, transparent 70%)',
        animation: 'pulseRing 1.6s ease-out infinite',
      }} />
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ position: 'relative' }}>
        <defs>
          <linearGradient id="successGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#5ed3a3" />
            <stop offset="100%" stopColor="#2b8f6a" />
          </linearGradient>
        </defs>
        <circle
          cx={size / 2} cy={size / 2} r={r}
          fill="url(#successGrad)"
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: circumference,
            animation: 'drawCircle .55s .05s ease-out forwards',
            stroke: 'transparent',
          }}
        />
        <path
          d={`M${size * 0.30} ${size * 0.52} L${size * 0.45} ${size * 0.66} L${size * 0.72} ${size * 0.38}`}
          fill="none" stroke="white" strokeWidth="4"
          strokeLinecap="round" strokeLinejoin="round"
          style={{ strokeDasharray: 60, strokeDashoffset: 60, animation: 'drawCheck .45s .55s ease-out forwards' }}
        />
      </svg>
    </div>
  );
}
