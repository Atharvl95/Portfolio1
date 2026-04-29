import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? "rgba(255,255,255,0.75)"
          : "rgba(255,255,255,0.5)",
        backdropFilter: "blur(24px) saturate(1.8)",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.7)"
          : "1px solid rgba(255,255,255,0.4)",
        boxShadow: scrolled
          ? "0 4px 32px rgba(100,70,200,0.1), 0 1px 0 rgba(255,255,255,0.9) inset"
          : "none",
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 md:px-10 lg:px-16">
        {/* Logo */}
        <a href="#home" className="group flex items-center gap-3 transition-all duration-300">
          <img
            src="/favicon.png"
            alt="Atharv Lokhande"
            className="h-11 w-11 rounded-2xl object-cover shadow-lg transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-xl"
            style={{
              boxShadow: "0 4px 16px rgba(124,92,250,0.4)",
            }}
          />
          <div className="leading-tight">
            <p className="text-sm font-bold text-slate-900">Atharv Lokhande</p>
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-400">
              Full-Stack Developer
            </p>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded-xl px-4 py-2 text-sm font-medium text-slate-600 transition-all duration-200 hover:bg-violet-500/8 hover:text-violet-700"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-2xl px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl md:inline-flex"
            style={{
              background: "linear-gradient(135deg, #7c5cfa, #5bb8ff)",
              boxShadow: "0 4px 16px rgba(124,92,250,0.35)",
            }}
          >
            Hire Me
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/70 text-slate-600 backdrop-blur-sm transition-all duration-200 hover:bg-violet-500/8 hover:text-violet-600 md:hidden"
            style={{ background: "rgba(255,255,255,0.6)" }}
            aria-label={open ? "Close navigation" : "Open navigation"}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden"
          >
            <div
              className="mx-3 mb-3 overflow-hidden rounded-3xl border border-white/70 p-4"
              style={{
                background: "rgba(255,255,255,0.85)",
                backdropFilter: "blur(24px) saturate(1.8)",
                boxShadow: "0 16px 48px rgba(100,70,200,0.15), 0 1px 0 rgba(255,255,255,0.9) inset",
              }}
            >
              <div className="space-y-1">
                {navItems.map((item, i) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => setOpen(false)}
                    className="block rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition-all duration-200 hover:bg-violet-500/8 hover:text-violet-700"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>

              <div className="mt-3 border-t border-slate-200/60 pt-3">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl py-3 text-center text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:opacity-90"
                  style={{
                    background: "linear-gradient(135deg, #7c5cfa, #5bb8ff)",
                    boxShadow: "0 4px 16px rgba(124,92,250,0.35)",
                  }}
                >
                  Hire Me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;