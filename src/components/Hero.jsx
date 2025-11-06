import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/kQmE-hero-placeholder/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center rounded-full border border-white/20 bg-white/60 backdrop-blur px-3 py-1 text-xs font-medium text-slate-700 shadow-sm">
            New • Lightweight starter built with Tailwind
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">Build sleek UIs, faster.</h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-xl">A clean, component-driven starter you can extend. Accessible, responsive, and ready for your next idea.</p>
          <div className="flex flex-wrap gap-3">
            <a href="#get-started" className="inline-flex items-center rounded-md bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-700">Get Started</a>
            <a href="#features" className="inline-flex items-center rounded-md bg-white/70 backdrop-blur px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-white">See Features</a>
          </div>
        </div>

        <div className="hidden lg:block" />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-white/60 to-white" />
    </section>
  );
}
