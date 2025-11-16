import { useEffect, useRef } from 'react'

// Simple fade + slide reveal on scroll
function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.remove('opacity-0', 'translate-y-6')
            e.target.classList.add('opacity-100', 'translate-y-0')
          }
        })
      },
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

export function About() {
  const ref = useReveal()
  return (
    <section id="about" className="relative py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="opacity-0 translate-y-6 transition-all duration-700">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">What we do</h2>
          <p className="mt-4 text-slate-300 max-w-3xl">
            We provide end‑to‑end commodity market services: physical trading, structured financing, and risk management. Our platform ingests global flows and fundamentals, turning data into decisive action.
          </p>
          <div className="mt-10 grid sm:grid-cols-3 gap-6">
            {[
              ['Energy', 'Crude, refined products, LNG, power & carbon.'],
              ['Metals', 'Base, precious and battery metals value chains.'],
              ['Ags & Softs', 'Grains, oilseeds, sugar, and coffee logistics.'],
            ].map(([title, desc]) => (
              <div key={title} className="p-6 rounded-xl border border-white/10 bg-white/5">
                <h3 className="text-white font-medium">{title}</h3>
                <p className="text-slate-300 mt-2 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function Markets() {
  const ref = useReveal()
  return (
    <section id="markets" className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="opacity-0 translate-y-6 transition-all duration-700">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Market insights</h2>
          <p className="mt-4 text-slate-300 max-w-3xl">
            Live spreads, basis, and freight inform every trade. Our analytics layer blends fundamentals, flows, and macro signals to surface opportunities ahead of the tape.
          </p>
          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 bg-white/5">
              <h3 className="text-white font-medium">Risk & hedging</h3>
              <p className="text-slate-300 mt-2 text-sm">Integrated derivatives across exchanges and OTC to lock in margin and smooth volatility.</p>
            </div>
            <div className="p-6 rounded-xl border border-white/10 bg-white/5">
              <h3 className="text-white font-medium">Logistics & ops</h3>
              <p className="text-slate-300 mt-2 text-sm">From vessel chartering to storage, we orchestrate the chain with precision and transparency.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  const ref = useReveal()
  return (
    <section id="contact" className="relative py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="opacity-0 translate-y-6 transition-all duration-700">
          <div className="rounded-2xl border border-white/10 p-8 bg-white/5">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white">Let’s talk</h2>
            <p className="mt-3 text-slate-300 max-w-2xl">Tell us about your flows, exposures, and goals. We’ll respond within one business day.</p>
            <form className="mt-8 grid sm:grid-cols-2 gap-4">
              <input placeholder="Name" className="w-full rounded-md bg-white/10 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <input placeholder="Company" className="w-full rounded-md bg-white/10 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <input placeholder="Email" className="sm:col-span-2 w-full rounded-md bg-white/10 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <textarea placeholder="Message" rows="4" className="sm:col-span-2 w-full rounded-md bg-white/10 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <button className="sm:col-span-2 px-5 py-3 rounded-md bg-white text-slate-900 font-medium hover:bg-slate-100">Send</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
