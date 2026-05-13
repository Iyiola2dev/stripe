export function SuccessMark({ size = 96 }: { size?: number }) {
  const r = size / 2 - 4;
  const circumference = 2 * Math.PI * r;
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(94,211,163,.25)_0%,transparent_70%)] animate-pulseRing" />
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="relative">
        <defs>
          <linearGradient id="successGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#5ed3a3" />
            <stop offset="100%" stopColor="#2b8f6a" />
          </linearGradient>
        </defs>
        <circle
          cx={size / 2} cy={size / 2} r={r}
          fill="url(#successGrad)"
          stroke="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          className="animate-drawCircle"
        />
        <path
          d={`M${size * 0.30} ${size * 0.52} L${size * 0.45} ${size * 0.66} L${size * 0.72} ${size * 0.38}`}
          fill="none" stroke="white" strokeWidth="4"
          strokeLinecap="round" strokeLinejoin="round"
          strokeDasharray={60} strokeDashoffset={60}
          className="animate-drawCheck"
        />
      </svg>
    </div>
  );
}
