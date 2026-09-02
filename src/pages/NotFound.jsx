import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="py-24 text-center animate-fadeUp">
      <p className="font-mono text-signal text-sm mb-3">404</p>
      <h1 className="text-2xl font-bold mb-3">Page not found</h1>
      <p className="text-fog mb-6">That page doesn't exist, or it moved.</p>
      <Link to="/" className="font-mono text-sm text-volt hover:text-bone transition-colors">
        ← back home
      </Link>
    </div>
  )
}
