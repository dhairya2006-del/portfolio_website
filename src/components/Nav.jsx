import { NavLink } from 'react-router-dom'
import { Mail, FileDown } from 'lucide-react'
import { GithubMark, LinkedinMark } from './BrandIcons'
import site from '../config/site'
import ThemeToggle from './ThemeToggle'

const LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/projects', label: 'Projects' },
  { to: '/experience', label: 'Experience' },
  { to: '/blogs', label: 'Blogs' },
  { to: '/stats', label: 'Stats' },
]

function NavItem({ to, label, end, compact }) {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        [
          'group relative flex items-center shrink-0 rounded-md font-mono transition-colors',
          compact ? 'gap-1.5 px-2 py-1.5 text-xs' : 'gap-3 px-3 py-2 text-sm',
          isActive ? 'text-bone' : 'text-fog hover:text-bone',
        ].join(' ')
      }
    >
      {({ isActive }) => (
        <>
          <span
            className={[
              'rounded-full transition-colors shrink-0',
              compact ? 'h-1 w-1' : 'h-1.5 w-1.5',
              isActive ? 'bg-signal' : 'bg-mist group-hover:bg-fog',
            ].join(' ')}
          />
          {label}
        </>
      )}
    </NavLink>
  )
}

export default function Nav() {
  return (
    <>
      {/* Desktop left rail */}
      <aside className="hidden lg:flex fixed inset-y-0 left-0 w-60 flex-col justify-between border-r border-line bg-ink/95 px-6 py-8 z-40">
        <div>
          <a href="/" className="block mb-10">
            <span className="font-display text-lg font-semibold text-bone">{site.name}</span>
            <span className="block font-mono text-xs text-mist mt-1">{site.role}</span>
          </a>
          <nav className="flex flex-col gap-1">
            {LINKS.map((l) => (
              <NavItem key={l.to} {...l} />
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-mist">
              <a href={site.links.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-bone transition-colors">
                <GithubMark size={17} />
              </a>
              <a href={site.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-bone transition-colors">
                <LinkedinMark size={17} />
              </a>
              <a href={`mailto:${site.email}`} aria-label="Email" className="hover:text-bone transition-colors">
                <Mail size={17} />
              </a>
              <a href={site.links.resume} target="_blank" rel="noreferrer" aria-label="Resume" className="hover:text-bone transition-colors">
                <FileDown size={17} />
              </a>
            </div>
            <ThemeToggle />
          </div>
          <p className="font-mono text-[11px] text-mist leading-relaxed">{site.location}</p>
        </div>
      </aside>

      {/* Mobile top bar */}
      <header className="lg:hidden sticky top-0 z-40 border-b border-line bg-ink/90 backdrop-blur px-4 py-3">
        <div className="flex items-center justify-between">
          <a href="/" className="font-display font-semibold text-bone">
            {site.name}
          </a>
          <ThemeToggle />
        </div>
        <nav className="mt-3 flex items-center gap-1 overflow-x-auto no-scrollbar relative">
          {LINKS.map((l) => (
            <NavItem key={l.to} {...l} compact />
          ))}
        </nav>
      </header>
      <div className="lg:hidden pointer-events-none fixed top-0 right-0 h-[68px] w-8 bg-gradient-to-l from-ink to-transparent z-40" />
    </>
  )
}
