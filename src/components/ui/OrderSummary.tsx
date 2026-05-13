import { Button } from "@/components/ui/button";
import { LockIcon } from "@/components/ui/Icon";
import { StripeMark } from "@/components/ui/StripeMark";

interface Props {
  busy: boolean;
  onSubmit: () => void;
}

export function OrderSummary({ busy, onSubmit }: Props) {
  return (
    <div className="flex-1 px-8 py-8 bg-surface-2 flex flex-col gap-5">
      <div className="text-[18px] font-semibold text-ink">Order Summary</div>

      <div className="flex flex-col gap-3">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="text-[13.5px] font-medium text-ink">Follow Pack</div>
            <div className="text-[12px] text-muted mt-0.5">Monthly subscription</div>
          </div>
          <span className="num text-[13.5px] font-medium text-ink">$99.00</span>
        </div>

        <div className="h-px bg-line" />

        <div className="flex items-baseline justify-between">
          <span className="text-[13px] font-semibold text-ink">Total</span>
          <div className="text-right">
            <div className="num text-[26px] font-bold text-ink leading-none">$99.00</div>
            <div className="text-[11px] text-muted mt-0.5">USD · billed monthly</div>
          </div>
        </div>

        <div className="text-[11.5px] text-accent bg-accent-2 rounded-lg px-3 py-2">
          Renews monthly · cancel anytime in settings
        </div>
      </div>

      <div className="mt-auto flex flex-col gap-3">
        <Button className="w-full" disabled={busy} onClick={onSubmit} type="button">
          {busy ? (
            <span className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full border-2 border-white/40 border-t-white animate-spin-slow" />
              Processing…
            </span>
          ) : "Confirm your order"}
        </Button>
        <div className="flex items-center justify-center gap-1.5 text-[11.5px] text-muted">
          <LockIcon size={11} />
          <span>Encrypted &amp; secure · powered by</span>
          <span className="text-ink-2"><StripeMark color="currentColor" /></span>
        </div>
      </div>
    </div>
  );
}
