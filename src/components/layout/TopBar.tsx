'use client';
import { HaloWordmark } from '@/components/ui/HaloWordmark';
import { CheckIcon } from '@/components/ui/Icon';

type Step = 'pricing' | 'checkout' | 'loading' | 'success';
const STEPS: Step[] = ['pricing', 'checkout', 'success'];

interface Props { step: Step; onReset: () => void; }

export function TopBar({ step, onReset }: Props) {
  const activeIdx = step === 'pricing' ? 0 : step === 'checkout' || step === 'loading' ? 1 : 2;

  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '28px 40px 0', maxWidth: 1600, margin: '0 auto',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <HaloWordmark size={20} />
        <span style={{ color: 'var(--muted-2)', fontSize: 13 }}>·</span>
        <span style={{ color: 'var(--muted)', fontSize: 13 }}>Subscription checkout</span>
      </div>

      <div style={{
        display: 'flex', alignItems: 'center', gap: 8, padding: '6px 10px', borderRadius: 999,
        background: 'var(--glass)', backdropFilter: 'blur(20px) saturate(160%)',
        WebkitBackdropFilter: 'blur(20px) saturate(160%)', border: '1px solid var(--glass-line)',
        boxShadow: '0 1px 0 rgba(255,255,255,.6) inset, 0 4px 12px rgba(60,40,20,.06)',
      }}>
        {STEPS.map((s, i) => (
          <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              padding: '4px 10px', borderRadius: 999,
              background: i === activeIdx ? 'var(--ink)' : 'transparent',
              color: i === activeIdx ? '#f4ede0' : i < activeIdx ? 'var(--ink-2)' : 'var(--muted)',
              fontSize: 11.5, fontWeight: 500, textTransform: 'capitalize', transition: 'all .25s',
            }}>
              <span style={{
                width: 14, height: 14, borderRadius: '50%',
                background: i < activeIdx ? 'var(--good)' : i === activeIdx ? 'rgba(255,255,255,.18)' : 'transparent',
                border: i === activeIdx ? '0' : i > activeIdx ? '1px solid var(--muted-2)' : '0',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 8,
                color: i < activeIdx ? '#fff' : i === activeIdx ? '#f4ede0' : 'var(--muted)',
              }}>
                {i < activeIdx ? <CheckIcon size={8} color="#fff" /> : (i + 1)}
              </span>
              {s}
            </div>
            {i < STEPS.length - 1 && <div style={{ width: 16, height: 1, background: 'var(--line)' }} />}
          </div>
        ))}
      </div>

      <button onClick={onReset} style={{
        fontSize: 12.5, color: 'var(--muted)', padding: '6px 12px', borderRadius: 8,
        border: '1px solid var(--line)', background: 'var(--glass)',
        backdropFilter: 'blur(20px) saturate(160%)', WebkitBackdropFilter: 'blur(20px) saturate(160%)',
      }}>
        Reset demo
      </button>
    </div>
  );
}
