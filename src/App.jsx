import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FourCs from './components/FourCs'
import Shapes from './components/Shapes'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />

      <Navbar />
      <main>
        <Hero />
        <FourCs />
        <Shapes />
        <About />
        <Contact />
      </main>

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-blue-200/70 md:flex-row">
            <p>© {new Date().getFullYear()} Ornika Gems & Jewellery. All rights reserved.</p>
            <p>Lab‑grown diamonds • Ethical • Certified</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
