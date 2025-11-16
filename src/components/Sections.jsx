import { useEffect, useRef, useState } from 'react'

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

function Delta({ value }) {
  const positive = value > 0
  const negative = value < 0
  return (
    <span className={`${positive ? 'text-emerald-400' : negative ? 'text-rose-400' : 'text-slate-300'} text-sm ml-2`}>
      {positive ? '▲' : negative ? '▼' : '•'} {Math.abs(value).toFixed(2)}%
    </span>
  )
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
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [rows, setRows] = useState([])

  useEffect(() => {
    const base = import.meta.env.VITE_BACKEND_URL || ''
    fetch(`${base}/api/markets`)
      .then(r => r.json())
      .then(json => {
        setRows(json.data || [])
        setLoading(false)
      })
      .catch(err => {
        setError('No se pudo cargar el mercado')
        setLoading(false)
      })
  }, [])

  return (
    <section id="markets" className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="opacity-0 translate-y-6 transition-all duration-700">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Información de mercado</h2>
          <p className="mt-4 text-slate-300 max-w-3xl">
            Referencias rápidas de energía, metales y agrícolas. Datos ilustrativos para la demo.
          </p>

          <div className="mt-8 rounded-xl border border-white/10 bg-white/5 overflow-hidden">
            <div className="grid grid-cols-12 text-xs uppercase tracking-wide text-slate-300/80 px-4 py-3">
              <div className="col-span-3">Símbolo</div>
              <div className="col-span-4">Instrumento</div>
              <div className="col-span-3">Precio</div>
              <div className="col-span-2 text-right">Variación</div>
            </div>
            <div className="divide-y divide-white/10">
              {loading && (
                <div className="px-4 py-6 text-slate-300">Cargando…</div>
              )}
              {error && (
                <div className="px-4 py-6 text-amber-300">{error}</div>
              )}
              {!loading && !error && rows.map((r) => (
                <div key={r.symbol} className="grid grid-cols-12 px-4 py-4 hover:bg-white/5">
                  <div className="col-span-3 font-mono text-slate-200">{r.symbol}</div>
                  <div className="col-span-4 text-slate-200">{r.name}</div>
                  <div className="col-span-3 text-slate-200">{r.price} <span className="text-slate-400 text-xs">{r.currency}</span></div>
                  <div className="col-span-2 text-right"><Delta value={r.changePct} /></div>
                </div>
              ))}
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
            <h2 className="text-3xl sm:text-4xl font-semibold text-white">Contáctanos</h2>
            <p className="mt-3 text-slate-300 max-w-2xl">Cuéntanos sobre tus flujos, coberturas y objetivos. Respondemos dentro de 1 día hábil.</p>
            <form className="mt-8 grid sm:grid-cols-2 gap-4">
              <input placeholder="Nombre" className="w-full rounded-md bg-white/10 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <input placeholder="Empresa" className="w-full rounded-md bg-white/10 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <input placeholder="Email" className="sm:col-span-2 w-full rounded-md bg-white/10 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <textarea placeholder="Mensaje" rows="4" className="sm:col-span-2 w-full rounded-md bg-white/10 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <button className="sm:col-span-2 px-5 py-3 rounded-md bg-white text-slate-900 font-medium hover:bg-slate-100">Enviar</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
