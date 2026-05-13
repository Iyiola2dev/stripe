export function CardSurface({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      width: 580, borderRadius: 24,
      background: 'var(--glass)',
      backdropFilter: 'blur(24px) saturate(160%)',
      WebkitBackdropFilter: 'blur(24px) saturate(160%)',
      border: '1px solid var(--glass-line)',
      boxShadow: 'var(--shadow-card)',
      overflow: 'hidden',
      position: 'relative',
    }}>
      {children}
    </div>
  );
}
