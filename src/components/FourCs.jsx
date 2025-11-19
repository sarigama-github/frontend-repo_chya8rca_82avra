export default function FourCs() {
  const cs = [
    {
      title: 'Cut',
      desc: 'The artistry of proportions and symmetry that unleashes a diamond\'s brilliance. Our precision cutting maximizes light performance.',
    },
    {
      title: 'Color',
      desc: 'From icy D to warm hues, we offer tightly graded color ranges to match your design vision.',
    },
    {
      title: 'Clarity',
      desc: 'Exceptional clarity with strict standards ensures breathtaking purity and fire.',
    },
    {
      title: 'Carat',
      desc: 'From small melee to statement stones, we supply consistent sizes with certified weights.',
    },
  ];

  return (
    <section id="fourcs" className="relative py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_300px_at_20%_20%,rgba(34,211,238,0.08),transparent),radial-gradient(600px_300px_at_80%_80%,rgba(59,130,246,0.08),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">The 4Cs of Excellence</h2>
          <p className="mt-3 text-blue-200/80">We uphold the highest standards across every stone we craft and supply.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cs.map((c) => (
            <div key={c.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-transform hover:-translate-y-1">
              <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100" style={{background: 'radial-gradient(600px 200px at 50% 0%, rgba(34,211,238,0.12), transparent)'}} />
              <div className="relative">
                <div className="text-sm font-semibold tracking-widest text-cyan-300/90">{c.title}</div>
                <p className="mt-3 text-sm leading-relaxed text-blue-100/90">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
