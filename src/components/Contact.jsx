import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Get in Touch</h2>
          <p className="mt-3 text-blue-200/80">We\'re here to help you source the perfect stones. Send us a message and we\'ll respond promptly.</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <form onSubmit={(e) => e.preventDefault()} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-xs uppercase tracking-wider text-blue-200/70">Name</label>
                <input required className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-3 py-2 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/40" placeholder="Your name" />
              </div>
              <div>
                <label className="mb-1 block text-xs uppercase tracking-wider text-blue-200/70">Email</label>
                <input type="email" required className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-3 py-2 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/40" placeholder="you@example.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1 block text-xs uppercase tracking-wider text-blue-200/70">Message</label>
                <textarea rows={5} required className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-3 py-2 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/40" placeholder="Tell us what you\'re looking for" />
              </div>
            </div>
            <button className="mt-4 inline-flex items-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/30">Send Enquiry</button>
          </form>

          <div className="grid content-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="flex items-center gap-3 text-blue-100/90"><MapPin className="h-5 w-5 text-cyan-300" /> London, United Kingdom</div>
            <div className="flex items-center gap-3 text-blue-100/90"><Phone className="h-5 w-5 text-cyan-300" /> +44 • Available on request</div>
            <div className="flex items-center gap-3 text-blue-100/90"><Mail className="h-5 w-5 text-cyan-300" /> info@ornikagems.com</div>
            <p className="mt-4 text-sm text-blue-200/70">Business hours: Monday to Saturday</p>
          </div>
        </div>
      </div>
    </section>
  );
}
