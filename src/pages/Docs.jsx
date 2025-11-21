import { motion } from 'framer-motion'

function Docs() {
  return (
    <main className="relative min-h-screen px-6 pt-28 pb-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-[60vh] w-[60vh] -translate-x-1/2 rounded-full bg-pink-500/20 blur-3xl blob animate-float-slow" />
        <div className="absolute top-40 -left-24 h-[50vh] w-[50vh] rounded-full bg-pink-400/20 blur-3xl blob animate-float-slower" />
        <div className="absolute -bottom-24 -right-16 h-[55vh] w-[55vh] rounded-full bg-fuchsia-500/20 blur-3xl blob animate-rotate-slow" />
      </div>

      <div className="mx-auto max-w-4xl">
        <motion.h1 initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="mb-6 text-center text-4xl font-bold text-white">Docs</motion.h1>
        <p className="mx-auto mb-8 max-w-2xl text-center text-slate-300">Read the full protocol and network overview, including node roles, identities, channels, privacy modes, and audit-chain design.</p>
        <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 text-center backdrop-blur">
          <a className="inline-flex items-center justify-center rounded-full bg-pink-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_0_30px_rgba(236,72,153,0.35)] transition hover:bg-pink-400" href="https://docs.moki.chat/moki-network/overview" target="_blank" rel="noreferrer">Open docs.moki.chat</a>
        </div>
      </div>
    </main>
  )
}

export default Docs
