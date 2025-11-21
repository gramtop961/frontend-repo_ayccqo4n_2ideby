import { motion } from 'framer-motion'
import { Shield, Lock, Network, Server } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Auditable by design',
    desc: 'Every event anchored to a blockchain audit chain for transparent verification without revealing message contents.',
  },
  {
    icon: Lock,
    title: 'Privacy your way',
    desc: 'Bring your own client node with your own policies, or pick providers that match your preferences.',
  },
  {
    icon: Network,
    title: 'Interoperable service nodes',
    desc: 'Nodes talk to nodes. Different privacy modes, one seamless network for everyone you chat with.',
  },
  {
    icon: Server,
    title: 'Self-host optional',
    desc: 'Run your node at home or in the cloud and link it to your identity. Total control, zero lock‑in.',
  },
]

function Features() {
  return (
    <section className="relative z-10 bg-[radial-gradient(ellipse_at_center,rgba(236,72,153,0.06),transparent_60%)] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center text-3xl font-bold text-white sm:text-4xl"
        >
          Built for choice. Engineered for trust.
        </motion.h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-sm"
            >
              <div className="mb-4 inline-flex rounded-xl border border-pink-500/30 bg-pink-500/10 p-3 text-pink-300">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>
              <p className="text-sm leading-relaxed text-slate-300/90">{desc}</p>
              <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-pink-500/10 blur-2xl transition-all group-hover:scale-150" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
