import { CheckIcon } from './Icon';

export function FeatureRow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3 text-[14.5px] text-ink-2 leading-snug">
      <span className="w-5 h-5 rounded-full shrink-0 mt-[1px] flex items-center justify-center text-white
        bg-gradient-to-br from-accent-3 to-accent
        shadow-[0_1px_0_rgba(255,255,255,.4)_inset,0_2px_4px_rgba(224,118,74,.25)]">
        <CheckIcon size={11} color="#fff" />
      </span>
      <span>{children}</span>
    </div>
  );
}
