import { motion } from 'framer-motion'

export default function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-ink transition-colors duration-500">
      
      {/* Noise Texture Overlay for premium frosted/grain effect */}
      <div 
        className="absolute inset-0 z-20 opacity-[0.25] dark:opacity-[0.1] mix-blend-overlay pointer-events-none"
        style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
        }}
      />

      {/* Grid Pattern with vignette mask */}
      <div 
        className="absolute inset-0 z-10 opacity-[0.5] dark:opacity-[0.25] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(to right, var(--color-line) 1px, transparent 1px), linear-gradient(to bottom, var(--color-line) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%)'
        }}
      />

      {/* Drifting Glowing Orbs */}
      <motion.div 
        animate={{ 
          x: [0, 80, -40, 0], 
          y: [0, -60, 40, 0],
          scale: [1, 1.15, 0.9, 1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-15%] left-[-10%] h-[70vw] w-[70vw] sm:h-[50vw] sm:w-[50vw] rounded-full bg-volt opacity-[0.6] blur-[90px] sm:blur-[120px] dark:opacity-[0.18]" 
      />
      
      <motion.div 
        animate={{ 
          x: [0, -50, 60, 0], 
          y: [0, 70, -50, 0],
          scale: [1, 1.25, 0.85, 1]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-15%] right-[-10%] h-[60vw] w-[60vw] sm:h-[45vw] sm:w-[45vw] rounded-full bg-signal opacity-[0.65] blur-[90px] sm:blur-[120px] dark:opacity-[0.18]" 
      />

      <motion.div 
        animate={{ 
          x: [0, 60, -70, 0], 
          y: [0, 80, -60, 0],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        className="absolute top-[20%] left-[40%] h-[50vw] w-[50vw] sm:h-[35vw] sm:w-[35vw] rounded-full bg-amber opacity-[0.4] blur-[80px] sm:blur-[110px] dark:opacity-[0.12]" 
      />
    </div>
  )
}
