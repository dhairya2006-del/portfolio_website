import site from '../config/site'

export default function Footer() {
  return (
    <footer className="mx-auto max-w-4xl px-5 sm:px-8 pb-10 pt-6 border-t border-line">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
        <p className="font-mono text-xs text-mist">
          © {new Date().getFullYear()} {site.name}. Built with React &amp; Tailwind.
        </p>
        <a href={`mailto:${site.email}`} className="font-mono text-xs text-fog hover:text-bone transition-colors">
          {site.email}
        </a>
      </div>
    </footer>
  )
}
