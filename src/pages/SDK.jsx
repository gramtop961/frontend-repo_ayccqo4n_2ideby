import { motion } from 'framer-motion'

function CodeBlock({ children }) {
  return (
    <pre className="relative overflow-auto rounded-xl border border-white/10 bg-black/60 p-4 text-sm text-slate-200 backdrop-blur"><code>{children}</code></pre>
  )
}

function SDK() {
  return (
    <main className="relative min-h-screen px-6 pt-28 pb-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-[60vh] w-[60vh] -translate-x-1/2 rounded-full bg-pink-500/20 blur-3xl blob animate-float-slow" />
        <div className="absolute top-40 -left-24 h-[50vh] w-[50vh] rounded-full bg-pink-400/20 blur-3xl blob animate-float-slower" />
        <div className="absolute -bottom-24 -right-16 h-[55vh] w-[55vh] rounded-full bg-fuchsia-500/20 blur-3xl blob animate-rotate-slow" />
      </div>

      <div className="mx-auto max-w-5xl">
        <motion.h1 initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="mb-6 text-center text-4xl font-bold text-white">Moki SDK</motion.h1>
        <p className="mx-auto mb-10 max-w-3xl text-center text-slate-300">Build on the Moki network with a minimal, composable core. Explore the SDK on GitHub and dive into docs for architecture, identity, channels, and event flows.</p>

        <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
          <a className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 hover:bg-white/10" href="https://github.com/Web3Dave/moki-sdk/tree/main/packages/core" target="_blank" rel="noreferrer">View SDK on GitHub</a>
          <a className="rounded-full bg-pink-500 px-4 py-2 text-sm font-semibold text-white shadow-[0_0_30px_rgba(236,72,153,0.35)] hover:bg-pink-400" href="https://docs.moki.chat/moki-network/overview" target="_blank" rel="noreferrer">Read the Docs</a>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur">
            <h3 className="mb-3 text-lg font-semibold text-white">Install</h3>
            <CodeBlock>{`npm i @moki/core`}</CodeBlock>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur">
            <h3 className="mb-3 text-lg font-semibold text-white">Quick start</h3>
            <CodeBlock>{`import { createIdentity, openChannel } from '@moki/core'

const me = await createIdentity({ wallet: 'injected' })
const dm = await openChannel({ type: 'direct', to: 'did:pkh:eip155:1:0x...' })
await dm.send({ kind: 'text', body: 'gm moki' })`}</CodeBlock>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur md:col-span-2">
            <h3 className="mb-3 text-lg font-semibold text-white">Concepts</h3>
            <ul className="list-disc space-y-2 pl-5 text-slate-300">
              <li>Identities: wallet-first with portable DIDs</li>
              <li>Channels: direct, group, and broadcast with policy control</li>
              <li>Events: append-only log with audit-chain anchoring</li>
              <li>Nodes: bring-your-own provider or self-host</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}

export default SDK
