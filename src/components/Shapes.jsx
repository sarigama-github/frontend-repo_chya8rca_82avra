const shapes = [
  'Round', 'Princess', 'Cushion', 'Emerald', 'Oval', 'Pear', 'Marquise', 'Asscher', 'Radiant', 'Heart'
];

export default function Shapes() {
  return (
    <section id="shapes" className="relative py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">All Diamond Shapes</h2>
          <p className="mt-3 text-blue-200/80">Choose from a full spectrum of cuts to suit every design aesthetic.</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {shapes.map((s) => (
            <div key={s} className="group rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur transition hover:bg-white/10">
              <div className="mx-auto mb-3 h-24 w-full rounded-xl bg-gradient-to-br from-cyan-400/10 to-blue-500/10" />
              <div className="text-sm font-medium tracking-wide text-white">{s}</div>
              <div className="text-xs text-blue-200/70">Lab-grown • Certified</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
