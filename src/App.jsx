import Hero from './components/Hero'
import Features from './components/Features'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Starry space backdrop */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top,rgba(2,6,23,1),rgba(2,6,23,1))]" />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(236,72,153,0.1),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(236,72,153,0.08),transparent_45%),radial-gradient(circle_at_50%_80%,rgba(236,72,153,0.06),transparent_50%)]" />

      <main className="relative">
        <Hero />
        <Features />
        <Newsletter />
        <Footer />
      </main>
    </div>
  )
}

export default App
