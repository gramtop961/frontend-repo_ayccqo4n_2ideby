import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative h-[92vh] w-full overflow-hidden">
      {/* Spline cover */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/vi0ijCQQJTRFc8LA/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(236,72,153,0.12),transparent_60%)]" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-1 text-pink-300 backdrop-blur-sm"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-pink-400" />
            <span>Crypto message network</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
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
            Choise without compromise. A distributed chat network with blockchain identity and an auditable chain. Connect your preferred service node—host your own for privacy or choose providers—and interoperate seamlessly.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
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
