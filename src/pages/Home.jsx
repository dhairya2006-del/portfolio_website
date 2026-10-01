import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import site from '../config/site'
import projects from '../data/projects'
import experience from '../data/experience'
import skills, { coursework } from '../data/skills'
import StockPathHero from '../components/StockPathHero'
import ProjectCard from '../components/ProjectCard'
import Eyebrow from '../components/Eyebrow'
import { PageEnter, Reveal, StaggerList, StaggerItem } from '../components/Reveal'

// Stagger variants for hero text lines
const heroContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}
const heroLine = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function Home() {
  const featured = projects.filter((p) => p.featured).slice(0, 4)
  const latestRole = experience[0]

  return (
    <PageEnter>
      {/* Hero */}
      <section className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center pb-16 border-b border-line">
        <motion.div variants={heroContainer} initial="hidden" animate="show">
          <motion.div variants={heroLine}>
            <Eyebrow>B.Tech · Mechanical · Minor in AI · IIT Jodhpur</Eyebrow>
          </motion.div>
          <motion.h1
            variants={heroLine}
            className="text-3xl sm:text-4xl font-bold leading-tight text-balance mt-2"
          >
            {site.tagline}
          </motion.h1>
          <motion.p
            variants={heroLine}
            className="mt-5 text-fog leading-relaxed max-w-lg"
          >
            I'm {site.name}, a B.Tech student at IIT Jodhpur (Minor in AI) specializing in machine
            learning, deep learning, LLMs, and AI systems. I have hands-on experience in LLM
            fine-tuning, multi-GPU inference, AI guardrails, ONNX deployment, async systems, and
            quantitative ML — building end-to-end, production-oriented systems.
          </motion.p>
          <motion.div
            variants={heroLine}
            className="mt-7 flex flex-wrap items-center gap-4"
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-md bg-signal border-2 border-signal text-ink px-5 py-2.5 font-mono font-bold text-sm hover:bg-signal2 hover:border-signal2 transition-colors shadow-lg shadow-signal/20"
            >
              View projects <ArrowRight size={16} />
            </Link>
            <Link
              to="/stats"
              className="inline-flex items-center gap-2 rounded-md border-2 border-mist text-bone px-5 py-2.5 font-mono font-semibold text-sm hover:bg-paper2 hover:border-fog transition-colors"
            >
              Live coding stats
            </Link>
          </motion.div>
        </motion.div>

        {/* Hero visual fades in after text stagger */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
        >
          <StockPathHero className="w-full h-auto" />
          <p className="mt-2 font-mono text-[11px] text-mist text-right">
            simulated paths — from the delta-hedging project
          </p>
        </motion.div>
      </section>

      {/* Education */}
      <Reveal delay={0.05}>
        <section className="py-10 border-b border-line">
          <Eyebrow>Education</Eyebrow>
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
            <div>
              <p className="text-bone font-semibold text-lg">Indian Institute of Technology Jodhpur</p>
              <p className="text-fog mt-0.5">
                B.Tech in Mechanical Engineering <span className="text-signal font-medium">· Minor in AI</span> · CGPA: 8.43
              </p>
            </div>
            <div className="flex flex-col sm:items-end">
              <p className="font-mono text-xs text-mist sm:mt-1.5">
                2024 — 2028 · Jodhpur, India
              </p>
              <p className="font-mono text-[10px] text-mist/70 mt-1 uppercase tracking-wider">
                Pre-Final Year
              </p>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-line/60">
            <p className="font-mono text-xs text-mist mb-2">Coursework</p>
            <div className="flex flex-wrap gap-1.5">
              {coursework.map((c) => (
                <span
                  key={c}
                  className="font-mono text-[11px] px-2 py-0.5 rounded border border-line text-fog"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* Currently / Experience */}
      {latestRole && (
        <Reveal delay={0.05}>
          <section className="py-10 border-b border-line">
            <Eyebrow>Research Experience</Eyebrow>
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
              <div>
                <p className="text-bone font-semibold text-lg">{latestRole.company}</p>
                <p className="text-fog mt-0.5">{latestRole.role}</p>
                {latestRole.supervisor && (
                  <p className="font-mono text-xs text-mist mt-0.5">Supervisor: {latestRole.supervisor}</p>
                )}
              </div>
              <p className="font-mono text-xs text-mist sm:mt-1.5">
                {latestRole.start} — {latestRole.end} · {latestRole.location}
              </p>
            </div>
            <p className="mt-3 text-sm text-fog leading-relaxed max-w-2xl">{latestRole.points[0]}</p>
            <Link
              to="/experience"
              className="mt-3 inline-flex items-center gap-1 font-mono text-xs text-volt hover:text-bone transition-colors"
            >
              Full experience <ArrowRight size={12} />
            </Link>
          </section>
        </Reveal>
      )}

      {/* Achievements & Skills */}
      <Reveal delay={0.05}>
        <section className="py-10 border-b border-line">
          <Eyebrow>Key Achievements</Eyebrow>
          <div className="grid sm:grid-cols-2 gap-4 mt-4">
            <div className="rounded-lg border border-line bg-paper/50 p-4">
              <div className="font-mono text-xs text-signal font-semibold mb-1">JEE Main &amp; Advanced</div>
              <p className="text-sm text-bone font-medium">AIR 3426 among 1.5M+ candidates in JEE Main</p>
              <p className="text-xs text-fog mt-1">99.9 percentile in Mathematics · Top 4% in JEE Advanced</p>
            </div>
            <div className="rounded-lg border border-line bg-paper/50 p-4">
              <div className="font-mono text-xs text-volt font-semibold mb-1">Kaggle Competition</div>
              <p className="text-sm text-bone font-medium">Ranked 2nd of 224 teams (Top 1%)</p>
              <p className="text-xs text-fog mt-1">'LLM Classification Finetuning' competition · Competing solo</p>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Technical skills */}
      <Reveal delay={0.05}>
        <section className="py-10 border-b border-line">
          <Eyebrow>Technical Skills</Eyebrow>
          <dl className="mt-4 space-y-4">
            {skills.map(({ group, items }) => (
              <div key={group} className="grid sm:grid-cols-[13rem_1fr] gap-2 sm:gap-4">
                <dt className="font-mono text-xs text-mist sm:mt-1">{group}</dt>
                <dd className="flex flex-wrap gap-1.5">
                  {items.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[11px] px-2 py-0.5 rounded border border-line text-fog"
                    >
                      {t}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      </Reveal>

      {/* Featured projects — staggered grid */}
      <Reveal delay={0.05}>
        <section className="py-10">
          <div className="flex items-baseline justify-between mb-1">
            <Eyebrow>Featured projects</Eyebrow>
            <Link to="/projects" className="font-mono text-xs text-mist hover:text-bone transition-colors">
              all projects →
            </Link>
          </div>
          <StaggerList className="grid sm:grid-cols-2 gap-4 mt-4">
            {featured.map((p) => (
              <StaggerItem key={p.slug}>
                <ProjectCard project={p} />
              </StaggerItem>
            ))}
          </StaggerList>
        </section>
      </Reveal>
    </PageEnter>
  )
}
