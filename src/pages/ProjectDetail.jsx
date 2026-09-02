import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { GithubMark } from '../components/BrandIcons'
import projects from '../data/projects'
import Spark from '../components/Spark'
import Eyebrow from '../components/Eyebrow'
import NotFound from './NotFound'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) return <NotFound />

  return (
    <div className="animate-fadeUp">
      <Link
        to="/projects"
        className="inline-flex items-center gap-1.5 font-mono text-xs text-mist hover:text-bone transition-colors mb-8"
      >
        <ArrowLeft size={13} /> all projects
      </Link>

      <div className="h-20 w-full rounded-lg overflow-hidden border border-line mb-6">
        <Spark seed={project.slug} className="w-full h-full" />
      </div>

      <Eyebrow>{project.dateLabel}</Eyebrow>
      <h1 className="text-2xl sm:text-3xl font-bold text-balance">{project.title}</h1>
      <p className="mt-3 text-fog leading-relaxed max-w-2xl">{project.summary}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border border-line px-3 py-1.5 font-mono text-xs text-fog hover:text-bone hover:border-mist/40 transition-colors"
          >
            <GithubMark size={13} /> Repository
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border border-line px-3 py-1.5 font-mono text-xs text-fog hover:text-bone hover:border-mist/40 transition-colors"
          >
            <ExternalLink size={13} /> Demo
          </a>
        )}
      </div>

      <div className="mt-10">
        <Eyebrow>Details</Eyebrow>
        <ul className="space-y-3">
          {project.bullets.map((b, i) => (
            <li key={i} className="flex gap-3 text-sm text-fog leading-relaxed">
              <span className="mt-2 h-1 w-1 rounded-full bg-signal shrink-0" />
              {b}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10">
        <Eyebrow>Stack</Eyebrow>
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span key={t} className="font-mono text-xs px-2.5 py-1 rounded border border-line text-mist">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
