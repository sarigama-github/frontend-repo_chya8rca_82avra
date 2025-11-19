import { Menu, Gem, Phone, Mail } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const items = [
    { label: "Home", href: "#home" },
    { label: "4Cs", href: "#fourcs" },
    { label: "Shapes", href: "#shapes" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#home" className="flex items-center gap-3">
              <div className="relative grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 ring-1 ring-white/15">
                <Gem className="h-6 w-6 text-cyan-300" />
                <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-tr from-white/10 to-transparent" />
              </div>
              <div>
                <p className="text-sm tracking-wide text-cyan-200">Ornika Gems & Jewellery</p>
                <p className="-mt-1 text-xs text-blue-200/70">London, United Kingdom</p>
              </div>
            </a>

            <nav className="hidden gap-8 md:flex">
              {items.map((it) => (
                <a key={it.href} href={it.href} className="text-sm text-blue-100/80 hover:text-white transition-colors">
                  {it.label}
                </a>
              ))}
            </nav>

            <div className="hidden items-center gap-3 md:flex">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-cyan-500/20 transition-transform hover:-translate-y-0.5">
                <Phone className="h-4 w-4" />
                Get in touch
              </a>
            </div>

            <button className="rounded-lg p-2 text-blue-100/80 md:hidden" onClick={() => setOpen((v) => !v)}>
              <Menu />
            </button>
          </div>

          {open && (
            <div className="border-t border-white/10 px-6 py-4 md:hidden">
              <div className="grid gap-3">
                {items.map((it) => (
                  <a key={it.href} href={it.href} className="text-blue-100/80 hover:text-white">
                    {it.label}
                  </a>
                ))}
                <a href="#contact" className="mt-2 inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-cyan-500/20">
                  <Mail className="h-4 w-4" /> Contact us
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
