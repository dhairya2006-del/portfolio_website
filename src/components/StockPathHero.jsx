import { useMemo } from 'react'
import { walkFromSeed, toSvgPath } from '../lib/spark'

// The signature visual: a small field of simulated price paths, echoing the
// Monte-Carlo hedging simulator in the featured project. Three paths, three
// accent colors, each drawn in on load and drifting gently afterward.

const SEEDS = [
  { seed: 'gbm-path-alpha', color: '#33D68A', delay: '0s', points: 40 },
  { seed: 'jump-stress-beta', color: '#F2A65A', delay: '0.15s', points: 40 },
  { seed: 'adversarial-gamma', color: '#5B8DEF', delay: '0.3s', points: 40 },
]

export default function StockPathHero({ className = '' }) {
  const paths = useMemo(
    () =>
      SEEDS.map((s) => ({
        ...s,
        d: toSvgPath(walkFromSeed(s.seed, s.points), 560, 300),
      })),
    []
  )

  return (
    <svg
      viewBox="0 0 560 300"
      className={className}
      role="img"
      aria-label="Simulated price paths, referencing a Monte Carlo hedging project"
    >
      <defs>
        <linearGradient id="fadeMask" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="white" stopOpacity="0" />
          <stop offset="15%" stopColor="white" stopOpacity="1" />
          <stop offset="100%" stopColor="white" stopOpacity="1" />
        </linearGradient>
        <mask id="revealMask">
          <rect width="560" height="300" fill="url(#fadeMask)" />
        </mask>
      </defs>

      {/* faint horizontal reference lines, like a chart grid */}
      {[0, 1, 2, 3, 4].map((i) => (
        <line
          key={i}
          x1="0"
          x2="560"
          y1={i * 75}
          y2={i * 75}
          stroke="#ffffff"
          strokeOpacity="0.05"
        />
      ))}

      {paths.map((p) => (
        <g
          key={p.seed}
          className="animate-drift"
          style={{ animationDelay: p.delay }}
          mask="url(#revealMask)"
        >
          <path
            d={p.d}
            fill="none"
            stroke={p.color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            pathLength="1"
            strokeDasharray="1"
            strokeDashoffset="1"
            className="animate-dash"
            style={{ animationDelay: p.delay }}
          />
          <circle
            cx="560"
            cy={parseFloat(p.d.split('L').pop().split(',')[1])}
            r="4"
            fill={p.color}
          />
        </g>
      ))}
    </svg>
  )
}
