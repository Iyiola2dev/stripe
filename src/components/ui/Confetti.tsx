'use client';
import { useRef, useEffect } from 'react';

const COLORS = ['#e0764a', '#f3c98b', '#c9a9f5', '#5ed3a3', '#1a1714', '#f0a98c'];

export function Confetti({ run }: { run: boolean }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!run) return;
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);
    const W = rect.width, H = rect.height;
    const parts = Array.from({ length: 120 }, () => ({
      x: W / 2 + (Math.random() - .5) * 60,
      y: H / 2 - 40 + (Math.random() - .5) * 20,
      vx: (Math.random() - .5) * 8,
      vy: -Math.random() * 12 - 4,
      g: 0.28 + Math.random() * 0.12,
      r: 3 + Math.random() * 5,
      rot: Math.random() * Math.PI * 2,
      vr: (Math.random() - .5) * 0.3,
      c: COLORS[Math.floor(Math.random() * COLORS.length)],
      shape: Math.random() > .5 ? 'rect' : 'circ' as 'rect' | 'circ',
      life: 0,
    }));
    let raf: number;
    let start = performance.now();
    const tick = (t: number) => {
      const dt = Math.min(32, t - start); start = t;
      ctx.clearRect(0, 0, W, H);
      parts.forEach(p => {
        p.life += dt; p.vy += p.g; p.x += p.vx; p.y += p.vy; p.rot += p.vr;
        ctx.save();
        ctx.translate(p.x, p.y); ctx.rotate(p.rot);
        ctx.globalAlpha = Math.max(0, 1 - p.life / 2600);
        ctx.fillStyle = p.c;
        if (p.shape === 'rect') ctx.fillRect(-p.r, -p.r * .4, p.r * 2, p.r * .8);
        else { ctx.beginPath(); ctx.arc(0, 0, p.r * .7, 0, Math.PI * 2); ctx.fill(); }
        ctx.restore();
      });
      if (parts.some(p => p.life < 2800)) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run]);

  return (
    <canvas ref={ref} style={{
      position: 'absolute', inset: 0, width: '100%', height: '100%',
      pointerEvents: 'none', zIndex: 1,
    }} />
  );
}
