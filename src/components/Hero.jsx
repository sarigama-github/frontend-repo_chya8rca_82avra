import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[90vh] items-center overflow-hidden pt-24">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/HldEaEeFcKnMlQB3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/60 to-slate-950" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="py-16">
          <p className="text-sm font-medium uppercase tracking-widest text-cyan-300/90">Ornika Gems & Jewellery</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
            Lab-Grown Diamonds, Crafted to Perfection
          </h1>
          <p className="mt-6 max-w-xl text-lg text-blue-100/90">
            London-based, with precision manufacturing in India. We supply every shape and size with excellence in the 4Cs — Cut, Color, Clarity, and Carat.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#fourcs" className="pointer-events-auto inline-flex items-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/30 transition-transform hover:-translate-y-0.5">
              Explore the 4Cs
            </a>
            <a href="#contact" className="pointer-events-auto inline-flex items-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur transition-colors hover:bg-white/10">
              Enquire Now
            </a>
          </div>
          <div className="mt-6 text-sm text-blue-200/70">Serving retailers, designers, and wholesalers worldwide.</div>
        </div>

        <div className="relative hidden min-h-[420px] lg:block" />
      </div>
    </section>
  );
}
