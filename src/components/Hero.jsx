import { motion } from 'framer-motion'

function LogoMark({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Chat bubble */}
      <g filter="url(#glow)">
        <path
          d="M30 55c0-12.15 9.85-22 22-22h96c12.15 0 22 9.85 22 22v52c0 12.15-9.85 22-22 22H94l-26 18c-3.6 2.5-8.4-0.2-8.4-4.6V129H52c-12.15 0-22-9.85-22-22V55Z"
          stroke="#EC4899"
          strokeWidth="3"
          fill="rgba(236,72,153,0.08)"
        />
      </g>
      {/* Network dots and links (decentralized typing dots) */}
      <g>
        {/* Lines */}
        <line x1="90" y1="90" x2="110" y2="70" stroke="#F472B6" strokeWidth="2" />
        <line x1="110" y1="70" x2="130" y2="95" stroke="#F472B6" strokeWidth="2" />
        <line x1="90" y1="90" x2="130" y2="95" stroke="#F472B6" strokeWidth="2" />
        {/* Dots */}
        <circle cx="90" cy="90" r="7" fill="#EC4899" />
        <circle cx="110" cy="70" r="7" fill="#EC4899" />
        <circle cx="130" cy="95" r="7" fill="#EC4899" />
      </g>
      <defs>
        <filter id="glow" x="0" y="0" width="200" height="200" colorInterpolationFilters="sRGB">
          <feGaussianBlur stdDeviation="4" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
    </svg>
  )
}

function NeonOrb() {
  // Lightweight 3D-ish animated neon rings using CSS 3D transforms + framer-motion
  const rings = [
    { size: 720, rotateZSpeed: 40, x: 0, y: -40, opacity: 0.25 },
    { size: 560, rotateZSpeed: -55, x: -80, y: 20, opacity: 0.25 },
    { size: 420, rotateZSpeed: 70, x: 60, y: 40, opacity: 0.3 },
    { size: 300, rotateZSpeed: -90, x: 0, y: 0, opacity: 0.5 },
  ]

  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center" style={{ perspective: 1000 }}>
      {rings.map((r, i) => (
        <motion.div
          key={i}
          initial={{ rotateZ: 0 }}
          animate={{ rotateZ: 360 }}
          transition={{ repeat: Infinity, ease: 'linear', duration: Math.abs(r.rotateZSpeed) }}
          style={{
            transformStyle: 'preserve-3d',
            rotateX: '55deg',
            rotateY: '25deg',
            x: r.x,
            y: r.y,
            opacity: r.opacity,
          }}
          className="relative"
        >
          <div
            className="rounded-full border border-pink-400/30"
            style={{
              width: r.size,
              height: r.size,
              boxShadow:
                '0 0 40px rgba(236,72,153,0.25), inset 0 0 60px rgba(236,72,153,0.15)',
              filter: 'drop-shadow(0 0 20px rgba(236,72,153,0.35))',
            }}
          />
        </motion.div>
      ))}

      {/* Vertical light beam for extra depth */}
      <div className="absolute h-[120vh] w-[40vw] -translate-x-1/2 left-1/2 top-[-10vh] rounded-full bg-gradient-to-b from-pink-500/10 via-pink-400/5 to-transparent blur-3xl" />
    </div>
  )
}

function Hero() {
  return (
    <section className="relative h-[92vh] w-full overflow-hidden">
      {/* Neon pink floating waves background */}
      <div className="absolute inset-0">
        <div className="pointer-events-none absolute -top-32 left-1/2 h-[60vh] w-[60vh] -translate-x-1/2 rounded-full bg-pink-500/20 blur-3xl blob animate-float-slow" />
        <div className="pointer-events-none absolute top-24 -left-24 h-[50vh] w-[50vh] rounded-full bg-pink-400/20 blur-3xl blob animate-float-slower" />
        <div className="pointer-events-none absolute -bottom-24 -right-16 h-[55vh] w-[55vh] rounded-full bg-fuchsia-500/20 blur-3xl blob animate-rotate-slow" />
        {/* Removed darker gradient overlay to blend first section with the global background */}
        {/* 3D neon orb */}
        <NeonOrb />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto mb-6 h-24 w-24 sm:h-28 sm:w-28"
          >
            <LogoMark className="h-full w-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-1 text-pink-300 backdrop-blur-sm"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-pink-400" />
            <span>Crypto message network</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.12 }}
            className="mb-4 text-4xl font-extrabold tracking-tight text-white sm:text-6xl"
          >
            Moki.Chat
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mx-auto mb-8 max-w-2xl text-balance text-lg text-slate-200/90 sm:text-xl"
          >
            Choice without compromise. A distributed chat network with blockchain identity and an auditable chain. Connect your preferred service node—host your own for privacy or choose providers—and interoperate seamlessly.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.28 }}
            className="flex items-center justify-center gap-3"
          >
            <a href="#newsletter" className="group inline-flex items-center gap-2 rounded-full bg-pink-500 px-6 py-3 text-base font-semibold text-white shadow-[0_0_40px_rgba(236,72,153,0.35)] transition hover:bg-pink-400">
              Request early access
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
