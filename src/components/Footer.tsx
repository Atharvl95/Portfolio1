import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Heart } from "lucide-react";

const socials = [
  { icon: Mail, href: "mailto:lokhandeas999@gmail.com", label: "Email" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/atharv-lokhande-714931289/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/Atharvl95", label: "GitHub" },
];

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative overflow-hidden border-t border-white/60 px-4 py-12 sm:px-6 md:px-10 lg:px-16"
      style={{
        background: "rgba(255,255,255,0.55)",
        backdropFilter: "blur(24px) saturate(1.8)",
      }}
    >
      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .gradient-text-footer {
          background: linear-gradient(135deg, #7c5cfa 0%, #5bb8ff 50%, #ff6b9d 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .footer-social {
          transition: all 0.25s ease;
        }
        .footer-social:hover {
          transform: translateY(-3px);
          background: rgba(124,92,250,0.12);
          border-color: rgba(124,92,250,0.35);
          color: #7c5cfa;
        }
        .footer-link {
          transition: color 0.2s ease;
        }
        .footer-link:hover { color: #7c5cfa; }
      `}</style>

      {/* Subtle background orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-0 h-32 w-32 rounded-full bg-violet-400/10 blur-3xl" />
        <div className="absolute right-1/4 top-0 h-28 w-28 rounded-full bg-sky-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Top row */}
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          {/* Brand */}
          <div className="max-w-xs">
            <p className="text-xl font-bold">
              <span className="gradient-text-footer">Atharv</span>
              <span className="text-slate-800"> Lokhande</span>
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Full-Stack Developer crafting premium digital experiences with
              React, Node.js & modern web tech.
            </p>
            {/* Socials */}
            <div className="mt-5 flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="footer-social flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200/80 bg-white/60 text-slate-500 backdrop-blur-sm"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-400">
              Navigation
            </p>
            <div className="grid grid-cols-2 gap-x-10 gap-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="footer-link text-sm font-medium text-slate-600"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Status card */}
          <div
            className="rounded-2xl border border-white/75 p-5"
            style={{
              background: "rgba(255,255,255,0.6)",
              backdropFilter: "blur(16px)",
              boxShadow: "0 4px 24px rgba(100,70,200,0.08)",
            }}
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-xs font-semibold text-emerald-700">Available for work</span>
            </div>
            <p className="text-xs text-slate-500 leading-5">
              Pursuing B.E. CS at PCCOE&R<br />
              Expected May 2027 · CGPA 9.05
            </p>
            <a
              href="mailto:lokhandeas999@gmail.com"
              className="mt-4 inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-violet-500 to-sky-500 px-4 py-2 text-xs font-semibold text-white shadow-md shadow-violet-500/25 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-violet-500/35"
            >
              <Mail className="h-3.5 w-3.5" />
              Hire Me
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-slate-200/80 to-transparent" />

        {/* Bottom row */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-400">
            2025 Atharv Lokhande · All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 text-xs text-slate-400">
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;