import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { SuccessMark } from '@/components/ui/SuccessMark';
import { Confetti } from '@/components/ui/Confetti';
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
    <div className="relative shadow-sm border border-line rounded-xl overflow-hidden">
      <Confetti run />
      <div className="px-10 pt-12 pb-10 flex flex-col items-center text-center gap-6 animate-floatUp-slow relative z-[2]">
        <SuccessMark size={88} />

        <div>
          <h2 className="text-[28px] font-bold tracking-[-0.025em] text-ink m-0">
            Subscription activated
          </h2>
          <p className="text-[14px] text-muted mt-2 mb-0 leading-relaxed max-w-[340px]">
            Welcome to Follow Pack. A receipt has been sent to your email and every feature is now unlocked for your team.
          </p>
        </div>

        <div className="w-full max-w-[360px] bg-surface-2 border border-line rounded-xl overflow-hidden">
          {[
            { label: 'Plan', value: 'Follow Pack · monthly' },
            { label: 'Charged', value: '$99.00 · USD', mono: true },
            {
              label: 'Card', value: (
                <span className="inline-flex items-center gap-1.5">
                  <Brand kind="visa" w={24} h={16} /> •••• {cardLast4}
                </span>
              )
            },
            { label: 'Next renewal', value: nextRenewal(), muted: true },
          ].map((row, i) => (
            <div key={i} className={`flex items-center justify-between px-4 py-3 text-[13px] ${i > 0 ? 'border-t border-line' : ''}`}>
              <span className="text-muted">{row.label}</span>
              <span className={`font-medium ${row.muted ? 'text-muted' : 'text-ink'} ${row.mono ? 'num' : ''}`}>{row.value}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-2.5 w-full max-w-[360px]">
          <PrimaryButton full onClick={onContinue}>
            Continue to dashboard <ArrowRightIcon size={14} color="#fff" />
          </PrimaryButton>
          <button className="text-[12.5px] text-muted py-2 hover:text-ink-2 transition-colors">
            Email receipt &amp; manage billing
          </button>
        </div>
      </div>
    </div>
  );
}
