import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Global animated neon backdrop */}
      <div className="pointer-events-none fixed inset-0">
        {/* Deep space base */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(2,6,23,1),rgba(2,6,23,1))]" />
        {/* Subtle grid for depth */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.15]" />
        {/* Animated neon blobs for 3D glow */}
        <div className="absolute -top-40 left-1/2 h-[80vh] w-[80vh] -translate-x-1/2 rounded-full bg-pink-500/20 blur-3xl blob animate-float-slow" />
        <div className="absolute top-24 -left-24 h-[60vh] w-[60vh] rounded-full bg-fuchsia-500/20 blur-3xl blob animate-rotate-slow" />
        <div className="absolute -bottom-24 -right-16 h-[70vh] w-[70vh] rounded-full bg-pink-400/20 blur-3xl blob animate-float-slower" />
        {/* Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      <Navbar />

      <main className="relative pt-20">
        <Outlet />
      </main>
    </div>
  )
}

export default App
