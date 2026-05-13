import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { CheckIcon, ArrowRightIcon } from '@/components/ui/Icon';
import { StripeMark } from '@/components/ui/StripeMark';
import { LockIcon } from '@/components/ui/Icon';

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
    <div className="px-5 md:px-10 py-4 md:py-9 flex flex-col gap-6 animate-floatUp">
      <div>
        <div className="inline-flex items-center gap-1.5 text-[11.5px] font-semibold text-accent bg-accent-2 px-2.5 py-1 rounded-full mb-4">
          14-day free trial · cancel anytime
        </div>
        <div className="text-[12px] text-muted tracking-[.06em] uppercase font-semibold mb-2">Follow Pack</div>
        <h1 className="text-[30px] leading-[1.15] m-0 font-bold tracking-[-0.025em] text-ink">
          Everything you need to ship brand work, end to end.
        </h1>
        <p className="text-[14px] text-muted mt-3 mb-0 leading-relaxed">
          One plan with every capability. Bring your whole team into the same brand operating system.
        </p>
      </div>

      <div className="flex items-baseline gap-1 py-5 border-t border-b border-line">
        <span className="text-[20px] text-ink-2 font-medium">$</span>
        <span className="num text-[56px] font-bold text-ink leading-none tracking-tight">99</span>
        <span className="text-[14px] text-muted ml-1">/ month · USD</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2.5">
        {FEATURES.map((f, i) => (
          <div key={i} className="flex items-start gap-2 text-[13.5px] text-ink-2">
            <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-good/10 flex items-center justify-center">
              <CheckIcon size={9} color="var(--good)" />
            </span>
            {f}
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-2.5 mt-1">
        <PrimaryButton full onClick={onContinue}>
          Subscribe now <ArrowRightIcon size={14} color="#fff" />
        </PrimaryButton>
        <div className="flex items-center justify-center gap-1.5 text-muted text-[12px]">
          <LockIcon size={12} />
          <span>Secure payment powered by</span>
          <span className="text-ink-2"><StripeMark color="currentColor" /></span>
        </div>
      </div>
    </div>
  );
}
