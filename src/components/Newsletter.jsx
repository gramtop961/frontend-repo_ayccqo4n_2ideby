import { useState } from 'react'

function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    if (!email) return
    setStatus('loading')
    setMessage('')

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'hero' }),
      })

      if (!res.ok) throw new Error('Subscription failed')
      setStatus('success')
      setMessage('You\'re on the list. We\'ll be in touch soon!')
      setEmail('')
    } catch (err) {
      setStatus('error')
      setMessage(err.message || 'Something went wrong')
    }
  }

  return (
    <section id="newsletter" className="relative z-10 px-6 pb-24">
      <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-slate-900/70 p-8 backdrop-blur">
        <div className="mb-4 text-center">
          <h3 className="text-2xl font-semibold text-white">Get launch updates</h3>
          <p className="mt-2 text-slate-300/90">Be first to try the Moki.Chat client and service nodes.</p>
        </div>

        <form onSubmit={onSubmit} className="mx-auto mt-4 flex max-w-xl flex-col items-center gap-3 sm:flex-row">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="w-full flex-1 rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-slate-400 outline-none ring-0 focus:border-pink-500/60"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="inline-flex items-center justify-center whitespace-nowrap rounded-xl bg-pink-500 px-5 py-3 font-semibold text-white shadow-[0_0_30px_rgba(236,72,153,0.35)] transition hover:bg-pink-400 disabled:opacity-60"
          >
            {status === 'loading' ? 'Subscribing…' : 'Subscribe'}
          </button>
        </form>

        {status !== 'idle' && (
          <p className={`mt-4 text-center text-sm ${status === 'success' ? 'text-pink-300' : status === 'error' ? 'text-red-300' : 'text-slate-300'}`}>
            {message}
          </p>
        )}
      </div>

      <div className="pointer-events-none absolute inset-x-0 -bottom-24 mx-auto h-64 max-w-xl rounded-full bg-pink-500/20 blur-3xl" />
    </section>
  )
}

export default Newsletter
