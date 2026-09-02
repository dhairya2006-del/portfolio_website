import { motion } from 'framer-motion'
import experience from '../data/experience'
import Eyebrow from '../components/Eyebrow'
import { PageEnter, Reveal } from '../components/Reveal'
import { GithubMark } from '../components/BrandIcons'

export default function Experience() {
  return (
    <PageEnter>
      <Reveal>
        <Eyebrow>Career</Eyebrow>
        <h1 className="text-2xl font-bold mb-8">Experience</h1>
      </Reveal>

      {experience.length === 0 ? (
        <p className="text-mist font-mono text-sm">Nothing here yet — check back soon.</p>
      ) : (
        <ol className="space-y-10 mt-4">
          {experience.map((role, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <li className="relative pl-6">
                {/* Timeline line connecting to the next dot */}
                {i !== experience.length - 1 && (
                  <span className="absolute left-[5.5px] top-[24px] bottom-[-40px] w-[1px] bg-line" />
                )}

                {/* Timeline dot with pulse ring */}
                <span className="absolute left-0 top-[6px] flex h-3 w-3 items-center justify-center">
                  <motion.span
                    className="absolute h-5 w-5 rounded-full bg-signal/20"
                    animate={{ scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4, ease: 'easeInOut' }}
                  />
                  <span className="relative h-3 w-3 rounded-full bg-ink border-2 border-signal" />
                </span>

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div>
                    <h2 className="font-display font-semibold text-bone text-lg">
                      {role.company}
                    </h2>
                    <h3 className="font-display text-fog mt-0.5">
                      {role.role}
                    </h3>
                    {role.supervisor && (
                      <p className="font-mono text-xs text-mist mt-1">Supervisor: {role.supervisor}</p>
                    )}
                  </div>
                  <span className="font-mono text-xs text-mist shrink-0 sm:mt-1.5">
                    {role.start} — {role.end}
                  </span>
                </div>
                <div className="flex items-center gap-3 mt-1.5 flex-wrap">
                  <p className="font-mono text-xs text-mist">{role.location}</p>
                  {role.repo && (
                    <a
                      href={role.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded border border-line bg-paper px-2 py-0.5 font-mono text-[11px] text-fog hover:text-bone hover:border-mist/40 transition-colors"
                    >
                      <GithubMark size={11} /> Repository
                    </a>
                  )}
                </div>
                <ul className="mt-3 space-y-2">
                  {role.points.map((p, j) => (
                    <motion.li
                      key={j}
                      className="flex gap-3 text-sm text-fog leading-relaxed"
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 + j * 0.06, duration: 0.4 }}
                    >
                      <span className="mt-2 h-1 w-1 rounded-full bg-mist shrink-0" />
                      {p}
                    </motion.li>
                  ))}
                </ul>
              </li>
            </Reveal>
          ))}
        </ol>
      )}
    </PageEnter>
  )
}
