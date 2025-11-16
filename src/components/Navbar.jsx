import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Markets', href: '#markets' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md/0">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#top" className="text-xl font-semibold tracking-tight">
          <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent">Apex Commodities</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-slate-200/90 hover:text-white transition-colors">
              {item.label}
            </a>
          ))}
          <a href="#contact" className="text-sm px-4 py-2 rounded-md bg-white/10 hover:bg-white/20 text-white border border-white/20">
            Get in touch
          </a>
        </nav>

        <button className="md:hidden p-2 text-white/90" onClick={() => setOpen((v) => !v)} aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ${open ? 'max-h-64' : 'max-h-0'} overflow-hidden bg-slate-900/60 backdrop-blur-xl border-t border-white/10`}> 
        <div className="px-6 py-4 space-y-3">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block text-slate-200 hover:text-white">
              {item.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="inline-block text-sm px-4 py-2 rounded-md bg-white/10 hover:bg-white/20 text-white border border-white/20">
            Get in touch
          </a>
        </div>
      </div>
    </header>
  )
}
