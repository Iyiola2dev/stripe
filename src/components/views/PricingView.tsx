import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { FeatureRow } from '@/components/ui/FeatureRow';
import { Chip } from '@/components/ui/Chip';
import { StripeMark } from '@/components/ui/StripeMark';
import { LockIcon, ArrowRightIcon } from '@/components/ui/Icon';

const FEATURES = [
  'Unlimited brand kits & libraries',
  'AI logo, asset & variant generation',
  'Team workspaces · up to 25 seats',
  'Real-time co-editing with version history',
  'Slack, Figma & Linear integrations',
  'SAML SSO & priority support',
];

interface Props { onContinue: () => void; }

export function PricingView({ onContinue }: Props) {
  return (
    <div style={{ padding: '40px 44px', display: 'flex', flexDirection: 'column', gap: 28, animation: 'floatUp .4s ease both' }}>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 22 }}>
          <Chip tone="test">
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#c4853a', boxShadow: '0 0 0 3px rgba(196,133,58,.18)' }} />
            Test mode
          </Chip>
          <span style={{ fontSize: 11.5, color: 'var(--muted)' }}>14-day free trial · cancel anytime</span>
        </div>
        <div style={{ fontSize: 13.5, color: 'var(--muted)', letterSpacing: '.04em', textTransform: 'uppercase', fontWeight: 500, marginBottom: 8 }}>
          Halo Pro
        </div>
        <h1 style={{ fontSize: 38, lineHeight: 1.08, margin: 0, fontWeight: 500, letterSpacing: '-0.025em', color: 'var(--ink)' }}>
          Everything you need to <span className="serif" style={{ fontStyle: 'italic', fontWeight: 400 }}>ship&nbsp;brand work</span>, end to end.
        </h1>
        <p style={{ fontSize: 15.5, color: 'var(--muted)', marginTop: 12, marginBottom: 0, lineHeight: 1.5, maxWidth: 440 }}>
          One plan with every Halo capability. Bring your whole team into the same brand operating system.
        </p>
      </div>

      <div style={{ display: 'flex', alignItems: 'baseline', gap: 18, padding: '18px 0', borderTop: '1px solid var(--line-2)', borderBottom: '1px solid var(--line-2)', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', flexShrink: 0 }}>
          <span style={{ fontSize: 32, color: 'var(--ink-2)', marginRight: 3, fontWeight: 400 }}>$</span>
          <span className="serif num" style={{ fontSize: 92, lineHeight: 0.95, color: 'var(--ink)', letterSpacing: '-.02em' }}>99</span>
        </div>
        <div>
          <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--ink-2)' }}>per month</div>
          <div style={{ fontSize: 12.5, color: 'var(--muted)' }}>billed monthly · USD</div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px 28px' }}>
        {FEATURES.map((f, i) => <FeatureRow key={i}>{f}</FeatureRow>)}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 10 }}>
        <PrimaryButton full onClick={onContinue}>
          Subscribe now <ArrowRightIcon size={14} color="#f4ede0" />
        </PrimaryButton>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, color: 'var(--muted)', fontSize: 12 }}>
          <LockIcon size={12} /> <span>Secure payment powered by</span>
          <span style={{ color: 'var(--ink-2)' }}><StripeMark color="currentColor" /></span>
        </div>
      </div>
    </div>
  );
}
