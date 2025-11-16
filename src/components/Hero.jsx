import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="top" className="relative h-[92vh] w-full">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/UngO8SNLfLcyPG7O/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/40 to-slate-950" />

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
