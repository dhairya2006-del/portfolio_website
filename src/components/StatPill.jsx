export default function StatPill({ label, value, accent = 'text-bone', color }) {
  if (value === null || value === undefined) return null
  return (
    <div className="rounded-md border border-line px-2.5 py-1.5 min-w-[72px]">
      <p className={`font-display font-semibold text-base ${!color ? accent : ''}`} style={color ? { color } : undefined}>{value}</p>
      <p className="font-mono text-[9px] uppercase tracking-wider text-mist mt-0.5">{label}</p>
    </div>
  )
}
