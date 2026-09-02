import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import Spark from './Spark'

export default function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.015 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 340, damping: 22 }}
    >
      <Link
        to={`/projects/${project.slug}`}
        className="group block rounded-lg border border-line bg-paper hover:bg-paper2 hover:border-mist/40 transition-colors overflow-hidden h-full"
        style={{
          boxShadow: '0 1px 0 0 #ffffff0a inset, 0 4px 16px -8px #00000060',
        }}
      >
        <div className="h-16 w-full overflow-hidden border-b border-line">
          <Spark seed={project.slug} className="w-full h-full" />
        </div>
        <div className="p-5">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-display text-base font-semibold text-bone leading-snug">
              {project.title}
            </h3>
            <motion.div
              className="mt-1 shrink-0 text-mist"
              initial={{ x: 0, y: 0 }}
              whileHover={{ x: 2, y: -2 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              <ArrowUpRight
                size={16}
                className="group-hover:text-signal transition-colors"
              />
            </motion.div>
          </div>
          <p className="mt-2 text-sm text-fog leading-relaxed">{project.summary}</p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tech.slice(0, 4).map((t) => (
              <motion.span
                key={t}
                whileHover={{ borderColor: 'rgba(51,214,138,0.4)', color: '#33D68A' }}
                transition={{ duration: 0.15 }}
                className="font-mono text-[11px] px-2 py-0.5 rounded border border-line text-mist cursor-default"
              >
                {t}
              </motion.span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
