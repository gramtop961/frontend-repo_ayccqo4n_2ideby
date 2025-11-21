import Hero from '../components/Hero'
import Features from '../components/Features'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Home
