import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { About, Markets, Contact } from './components/Sections'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Markets />
        <Contact />
      </main>
      <footer className="bg-slate-900 border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-6 text-sm text-slate-400">
          © {new Date().getFullYear()} Apex Commodities. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default App
