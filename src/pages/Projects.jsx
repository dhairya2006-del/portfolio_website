import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import projects from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import Eyebrow from '../components/Eyebrow'
import { PageEnter, Reveal, StaggerList, StaggerItem } from '../components/Reveal'

export default function Projects() {
  const [tag, setTag] = useState('All')

  const allTags = useMemo(() => {
    const s = new Set()
    projects.forEach((p) => p.tech.forEach((t) => s.add(t)))
    return ['All', ...Array.from(s).sort()]
  }, [])

  const visible = tag === 'All' ? projects : projects.filter((p) => p.tech.includes(tag))

  return (
    <PageEnter>
      <Reveal>
        <Eyebrow>Work</Eyebrow>
        <h1 className="text-2xl font-bold mb-2">Projects</h1>
        <p className="text-fog mb-8 max-w-xl">
          {projects.length} project{projects.length !== 1 ? 's' : ''}, spanning low-latency AI guardrails, quantitative deep hedging, and large-scale preference fine-tuning.
        </p>
      </Reveal>

      {/* Filter tag pills */}
      <Reveal delay={0.08}>
        <div className="flex flex-wrap gap-2 mb-8">
          {allTags.map((t) => (
            <motion.button
              key={t}
              onClick={() => setTag(t)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              className={[
                'font-mono text-xs px-3 py-1.5 rounded-full border-2 transition-colors',
                tag === t
                  ? 'border-signal bg-signal text-ink font-bold'
                  : 'border-line text-mist hover:text-bone hover:border-fog',
              ].join(' ')}
            >
              {t}
            </motion.button>
          ))}
        </div>
      </Reveal>

      {/* Project grid with layout animation */}
      <AnimatePresence mode="wait">
        {visible.length === 0 ? (
          <motion.p
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-mist font-mono text-sm"
          >
            No projects tagged "{tag}" yet.
          </motion.p>
        ) : (
          <StaggerList key={tag} className="grid sm:grid-cols-2 gap-4">
            {visible.map((p) => (
              <StaggerItem key={p.slug}>
                <ProjectCard project={p} />
              </StaggerItem>
            ))}
          </StaggerList>
        )}
      </AnimatePresence>
    </PageEnter>
  )
}
