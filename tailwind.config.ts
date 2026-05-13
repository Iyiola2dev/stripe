import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink:         'var(--ink)',
        'ink-2':     'var(--ink-2)',
        muted:       'var(--muted)',
        'muted-2':   'var(--muted-2)',
        line:        'var(--line)',
        'line-2':    'var(--line-2)',
        surface:     'var(--surface)',
        'surface-2': 'var(--surface-2)',
        cream:       'var(--cream)',
        bone:        'var(--bone)',
        accent:      'var(--accent)',
        'accent-2':  'var(--accent-2)',
        'accent-3':  'var(--accent-3)',
        good:        'var(--good)',
        'page-bg':   'var(--page-bg)',
        glass:       'var(--glass)',
        'glass-line':'var(--glass-line)',
      },
      fontFamily: {
        sans:  ['var(--font-geist-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono:  ['var(--font-geist-mono)', 'ui-monospace', 'Menlo', 'monospace'],
        serif: ['var(--font-instrument-serif)', 'Georgia', 'serif'],
      },
      keyframes: {
        shimmer:   { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } },
        pulseRing: { '0%': { transform: 'scale(1)', opacity: '0.7' }, '100%': { transform: 'scale(2.2)', opacity: '0' } },
        floatUp:   { from: { transform: 'translateY(8px)', opacity: '0' }, to: { transform: 'translateY(0)', opacity: '1' } },
      },
      animation: {
        shimmer:        'shimmer 1.4s linear infinite',
        pulseRing:      'pulseRing 1.6s ease-out infinite',
        'spin-slow':    'spin .8s linear infinite',
        floatUp:        'floatUp .4s ease both',
        'floatUp-slow': 'floatUp .5s ease both',
        drawCheck:      'drawCheck .45s .55s ease-out forwards',
        drawCircle:     'drawCircle .55s .05s ease-out forwards',
      },
      boxShadow: {
        card:          'var(--shadow-card)',
        btn:           '0 1px 2px rgba(37,99,235,.25), inset 0 1px 0 rgba(255,255,255,.15)',
        'btn-hover':   '0 4px 14px rgba(37,99,235,.35), 0 0 0 3px rgba(37,99,235,.15), inset 0 1px 0 rgba(255,255,255,.15)',
        'input-focus': '0 0 0 3px rgba(37,99,235,.15)',
        'input-error': '0 0 0 3px rgba(220,38,38,.12)',
        glass:         '0 1px 0 rgba(255,255,255,.6) inset, 0 4px 12px rgba(15,23,42,.06)',
      },
    },
  },
  plugins: [],
};

export default config;
