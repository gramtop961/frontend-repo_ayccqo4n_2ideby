import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

function MiniLogo({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g filter="url(#glow)">
        <path d="M30 55c0-12.15 9.85-22 22-22h96c12.15 0 22 9.85 22 22v52c0 12.15-9.85 22-22 22H94l-26 18c-3.6 2.5-8.4-0.2-8.4-4.6V129H52c-12.15 0-22-9.85-22-22V55Z" stroke="#EC4899" strokeWidth="3" fill="rgba(236,72,153,0.08)"/>
      </g>
      <g>
        <line x1="90" y1="90" x2="110" y2="70" stroke="#F472B6" strokeWidth="2" />
        <line x1="110" y1="70" x2="130" y2="95" stroke="#F472B6" strokeWidth="2" />
        <line x1="90" y1="90" x2="130" y2="95" stroke="#F472B6" strokeWidth="2" />
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

function Navbar() {
  const [open, setOpen] = useState(false)

  const linkClasses = ({ isActive }) =>
    `px-3 py-2 rounded-lg transition text-sm font-medium ${isActive ? 'text-white bg-white/5' : 'text-slate-300 hover:text-white hover:bg-white/5'}`

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 px-3 py-2 backdrop-blur supports-[backdrop-filter]:bg-black/20">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8">
              <MiniLogo className="h-8 w-8" />
            </div>
            <span className="text-sm font-semibold tracking-wide text-white">Moki.Chat</span>
          </Link>

          <nav className="hidden gap-1 sm:flex">
            <NavLink to="/" className={linkClasses} end>Home</NavLink>
            <NavLink to="/roadmap" className={linkClasses}>Roadmap</NavLink>
            <NavLink to="/sdk" className={linkClasses}>SDK</NavLink>
            <NavLink to="/docs" className={linkClasses}>Docs</NavLink>
          </nav>

          <button onClick={() => setOpen(!open)} className="inline-flex items-center justify-center rounded-lg p-2 text-slate-300 hover:bg-white/5 sm:hidden" aria-label="Toggle menu">
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {open && (
          <div className="mt-2 rounded-2xl border border-white/10 bg-black/40 p-2 backdrop-blur sm:hidden">
            <div className="flex flex-col">
              <NavLink onClick={() => setOpen(false)} to="/" className={linkClasses} end>Home</NavLink>
              <NavLink onClick={() => setOpen(false)} to="/roadmap" className={linkClasses}>Roadmap</NavLink>
              <NavLink onClick={() => setOpen(false)} to="/sdk" className={linkClasses}>SDK</NavLink>
              <NavLink onClick={() => setOpen(false)} to="/docs" className={linkClasses}>Docs</NavLink>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar
