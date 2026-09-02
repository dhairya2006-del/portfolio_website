export default function Eyebrow({ children }) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <span className="h-px w-6 bg-line" />
      <span className="font-mono text-xs uppercase tracking-widest text-mist">{children}</span>
    </div>
  )
}
