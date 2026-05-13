import { CheckIcon } from './Icon';

export function FeatureRow({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, fontSize: 14.5, color: 'var(--ink-2)', lineHeight: 1.45 }}>
      <span style={{
        width: 20, height: 20, borderRadius: '50%', flexShrink: 0, marginTop: 1,
        background: 'linear-gradient(135deg, #f3c98b, #e0764a)',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        color: '#fff', boxShadow: '0 1px 0 rgba(255,255,255,.4) inset, 0 2px 4px rgba(224,118,74,.25)',
      }}>
        <CheckIcon size={11} color="#fff" />
      </span>
      <span>{children}</span>
    </div>
  );
}
