import { walkFromSeed, toSvgPath } from '../lib/spark'

const PALETTE = ['#33D68A', '#5B8DEF', '#F2A65A']

export default function Spark({ seed, className = '' }) {
  const values = walkFromSeed(seed, 28)
  const d = toSvgPath(values, 200, 56)
  const color = PALETTE[Math.abs(hashCode(seed)) % PALETTE.length]

  return (
    <svg
      viewBox="0 0 200 56"
      className={className}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path d={d} fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
      <path
        d={`${d} L200,56 L0,56 Z`}
        fill={color}
        opacity="0.08"
      />
    </svg>
  )
}

function hashCode(str) {
  let h = 0
  for (let i = 0; i < str.length; i++) h = (h << 5) - h + str.charCodeAt(i)
  return h
}
