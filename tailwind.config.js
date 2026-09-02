import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: 'var(--color-ink)',
        paper: 'var(--color-paper)',
        paper2: 'var(--color-paper2)',
        line: 'var(--color-line)',
        fog: 'var(--color-fog)',
        mist: 'var(--color-mist)',
        bone: 'var(--color-bone)',
        signal: 'var(--color-signal)',
        signal2: 'var(--color-signal2)',
        amber: 'var(--color-amber)',
        volt: 'var(--color-volt)',
        volt2: 'var(--color-volt2)',
        ember: 'var(--color-ember)',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      backgroundImage: {
        grid: 'linear-gradient(to right, #ffffff08 1px, transparent 1px), linear-gradient(to bottom, #ffffff08 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '32px 32px',
      },
      boxShadow: {
        card: '0 1px 0 0 #ffffff0a inset, 0 8px 24px -12px #00000080',
      },
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        dash: {
          to: { strokeDashoffset: '0' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(10px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        drift: 'drift 6s ease-in-out infinite',
        dash: 'dash 2.4s ease-out forwards',
        fadeUp: 'fadeUp 0.6s ease-out both',
      },
    },
  },
  plugins: [typography],
}
