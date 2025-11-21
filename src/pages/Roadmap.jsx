import { motion } from 'framer-motion'

const phases = [
  {
    title: 'Phase 0 — Foundations',
    date: 'Q1',
    items: [
      'Protocol spec draft and threat model',
      'Core SDK primitives (identities, channels, events)',
      'Audit chain anchoring design',
    ],
  },
  {
    title: 'Phase 1 — Developer Preview',
    date: 'Q2',
    items: [
      'Node reference implementation (alpha)',
      'Wallet-based auth and key management',
      'SDK release with examples',
    ],
  },
  {
    title: 'Phase 2 — Network Beta',
    date: 'Q3',
    items: [
      'Federated relay mesh across regions',
      'Content policies and privacy modes',
      'Public testnet for message events',
    ],
  },
  {
    title: 'Phase 3 — Public Launch',
    date: 'Q4',
    items: [
      'Client apps for desktop and mobile',
      'Provider marketplace and self-host tooling',
      'Security audits and formal verification track',
    ],
  },
]

function Roadmap() {
  return (
    <main className="relative min-h-screen px-6 pt-8 pb-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[70vh] w-[70vh] -translate-x-1/2 rounded-full bg-pink-500/20 blur-3xl blob animate-float-slow" />
        <div className="absolute top-32 -left-20 h-[55vh] w-[55vh] rounded-full bg-fuchsia-500/20 blur-3xl blob animate-rotate-slow" />
        <div className="absolute -bottom-24 -right-20 h-[50vh] w-[50vh] rounded-full bg-pink-400/20 blur-3xl blob animate-float-slower" />
      </div>

      <div className="mx-auto max-w-5xl">
        <motion.h1 initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="mb-10 text-center text-4xl font-bold text-white">Roadmap</motion.h1>
        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-pink-500/60 via-pink-500/10 to-transparent sm:left-1/2" />
          <div className="grid gap-8 sm:grid-cols-2">
            {phases.map((phase, idx) => (
              <motion.div key={idx} initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5, delay: idx*0.05}} className="relative rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur">
                <div className="mb-2 text-sm font-medium text-pink-300">{phase.date}</div>
                <h3 className="mb-3 text-xl font-semibold text-white">{phase.title}</h3>
                <ul className="list-disc space-y-2 pl-5 text-slate-300">
                  {phase.items.map((it, i) => <li key={i}>{it}</li>)}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

export default Roadmap
