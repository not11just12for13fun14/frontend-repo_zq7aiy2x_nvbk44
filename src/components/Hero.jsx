import { useState } from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  const [ready, setReady] = useState(false)
  const [error, setError] = useState(false)

  return (
    <section id="top" className="relative h-[92vh] w-full overflow-hidden">
      {/* Background media (video) */}
      <div className="absolute inset-0 -z-20">
        <video
          className="h-full w-full object-cover opacity-50"
          src="https://cdn.coverr.co/videos/coverr-oil-pump-jacks-8461/1080p.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        {/* Fallback image if video doesn't play */}
        <img
          src="https://images.unsplash.com/photo-1509474520651-53cf6a80500d?q=80&w=2070&auto=format&fit=crop"
          alt="Commodity markets backdrop"
          className="h-full w-full object-cover opacity-40 hidden"
          onError={(e) => { e.currentTarget.classList.add('hidden') }}
        />
      </div>

      {/* Fallback animated gradient backdrop (sits above media for subtle motion) */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-indigo-700/60 via-sky-700/50 to-blue-900/60 bg-[length:200%_200%] animate-gradient-x" />

      {/* Spline canvas */}
      <div className={`absolute inset-0 transition-opacity duration-700 ${ready ? 'opacity-100' : 'opacity-0'}`}>
        <Spline
          scene="https://prod.spline.design/UngO8SNLfLcyPG7O/scene.splinecode"
          onLoad={() => setReady(true)}
          onError={() => setError(true)}
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/40 to-slate-950" />

      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-200/80">Global Commodity Trading</p>
            <h1 className="mt-4 text-4xl sm:text-6xl font-semibold leading-tight text-white">
              Navigate markets with clarity and confidence
            </h1>
            <p className="mt-6 text-slate-200/90 text-lg">
              We connect producers and consumers across energy, metals, and agriculture with transparent pricing, disciplined risk, and real-time intelligence.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a href="#about" className="px-5 py-3 rounded-md bg-white text-slate-900 font-medium hover:bg-slate-100">Explore</a>
              <a href="#contact" className="px-5 py-3 rounded-md border border-white/30 text-white hover:bg-white/10">Talk to us</a>
            </div>
            {!ready && !error && (
              <div className="mt-6 text-slate-300/80 text-sm">
                Loading 3D experience…
              </div>
            )}
            {error && (
              <div className="mt-6 text-amber-300/90 text-sm">
                3D scene failed to load. Background media shown instead.
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80">
        <a href="#about" className="text-xs tracking-widest uppercase">Scroll</a>
      </div>
    </section>
  )
}
