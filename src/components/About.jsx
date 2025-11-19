export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">From London to India, a Seamless Craft Journey</h2>
            <p className="mt-4 text-blue-100/90">Ornika Gems & Jewellery operates from London, United Kingdom with advanced manufacturing units in India. We specialize in premium lab‑grown diamonds produced with cutting‑edge technology, offering unmatched consistency, value, and sustainability.</p>
            <div className="mt-6 grid gap-3 text-sm text-blue-200/80">
              <p>• Ethical and eco‑friendly lab‑grown stones</p>
              <p>• Tight grading standards and reliable supply</p>
              <p>• Wholesale, B2B, and custom requests welcomed</p>
            </div>
          </div>
          <div>
            <div className="h-72 rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-400/10 to-blue-600/10" />
          </div>
        </div>
      </div>
    </section>
  );
}
