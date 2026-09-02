import { motion } from 'framer-motion'

// Variants ----------------------------------------------------------------

/** Fade up and in — used for individual elements */
export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

/** Fade in only — used for containers that just need opacity */
export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.4, ease: 'easeOut' } },
}

/** Stagger container — children animate one after another */
export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren, delayChildren } },
})

// Components --------------------------------------------------------------

/**
 * Wraps children in a scroll-triggered fade-up animation.
 * Re-triggers every time the element enters the viewport.
 */
export function Reveal({ children, className, delay = 0, y = 20 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.55,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.div>
  )
}

/**
 * Stagger wrapper — direct children animate in sequence.
 * Usage: wrap a list in <StaggerList> and each child in <StaggerItem>
 */
export function StaggerList({ children, className, delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      variants={staggerContainer(0.08, delay)}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className }) {
  return (
    <motion.div className={className} variants={fadeUp}>
      {children}
    </motion.div>
  )
}

/**
 * Page-level entrance — wraps entire page content.
 * Replaces the old `animate-fadeUp` Tailwind class.
 */
export function PageEnter({ children, className }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  )
}
