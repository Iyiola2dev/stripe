import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { SuccessMark } from '@/components/ui/SuccessMark';
import { Confetti } from '@/components/ui/Confetti';
import { Receipt } from '@/components/ui/Receipt';
import { Brand } from '@/components/ui/Brand';
import { ArrowRightIcon } from '@/components/ui/Icon';

function nextRenewal() {
  const d = new Date();
  d.setMonth(d.getMonth() + 1);
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

interface Props { onContinue: () => void; cardLast4?: string; }

export function SuccessView({ onContinue, cardLast4 = '4242' }: Props) {
  return (
    <div style={{ position: 'relative' }}>
      <Confetti run />
      <div style={{
        padding: '60px 48px 44px', display: 'flex', flexDirection: 'column',
        alignItems: 'center', textAlign: 'center', gap: 24,
        animation: 'floatUp .5s ease both', position: 'relative', zIndex: 2,
      }}>
        <SuccessMark size={104} />
        <div>
          <h2 style={{ fontSize: 36, lineHeight: 1.1, margin: 0, fontWeight: 500, letterSpacing: '-0.025em', color: 'var(--ink)' }}>
            Subscription <span className="serif" style={{ fontStyle: 'italic' }}>activated</span>
          </h2>
          <p style={{ fontSize: 15.5, color: 'var(--muted)', margin: '10px 0 0 0', lineHeight: 1.5, maxWidth: 360 }}>
            Welcome to Halo Pro. We&apos;ve sent a receipt to your email and unlocked every feature for your team.
          </p>
        </div>

        <div style={{ width: '100%', maxWidth: 360, background: 'var(--surface-2)', border: '1px solid var(--line-2)', borderRadius: 12, padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <Receipt row="Plan" val="Halo Pro · monthly" />
          <Receipt row="Charged" val={<span className="num">$99.00 · USD</span>} />
          <Receipt row="Card" val={
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              <Brand kind="visa" w={24} h={16} /> •••• {cardLast4}
            </span>
          } />
          <Receipt row="Next renewal" val={nextRenewal()} muted />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, width: '100%', maxWidth: 360 }}>
          <PrimaryButton full onClick={onContinue}>
            Continue to dashboard <ArrowRightIcon size={14} color="#f4ede0" />
          </PrimaryButton>
          <button style={{ fontSize: 12.5, color: 'var(--muted)', padding: '8px' }}>
            Email receipt &amp; manage billing
          </button>
        </div>
      </div>
    </div>
  );
}
