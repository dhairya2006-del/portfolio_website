import { ExternalLink, Loader2, AlertTriangle } from 'lucide-react'

export default function PlatformCard({ title, subtitle, profileUrl, loading, error, empty, emptyHint, children }) {
  return (
    <div className="rounded-lg border border-line bg-paper p-5 sm:p-6">
      <div className="flex items-start justify-between gap-3 mb-4">
        <div>
          <h3 className="font-display font-semibold text-bone">{title}</h3>
          {subtitle && <p className="font-mono text-xs text-mist mt-0.5">{subtitle}</p>}
        </div>
        {profileUrl && (
          <a
            href={profileUrl}
            target="_blank"
            rel="noreferrer"
            className="shrink-0 text-mist hover:text-bone transition-colors"
            aria-label={`Open ${title} profile`}
          >
            <ExternalLink size={15} />
          </a>
        )}
      </div>

      {loading && (
        <div className="flex items-center gap-2 text-mist font-mono text-xs py-6">
          <Loader2 size={14} className="animate-spin" /> loading live data…
        </div>
      )}

      {!loading && error && (
        <div className="flex items-start gap-2 text-amber font-mono text-xs py-4">
          <AlertTriangle size={14} className="mt-0.5 shrink-0" />
          <span>Couldn't reach {title} right now. {emptyHint}</span>
        </div>
      )}

      {!loading && !error && empty && (
        <div className="text-mist font-mono text-xs py-4">{emptyHint}</div>
      )}

      {!loading && !error && !empty && children}
    </div>
  )
}
