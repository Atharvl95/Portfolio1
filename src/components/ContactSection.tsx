import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send, MapPin, ArrowUpRight } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    href: "mailto:lokhandeas999@gmail.com",
    value: "lokhandeas999@gmail.com",
    gradient: "from-violet-500 to-purple-600",
    glow: "shadow-violet-500/25",
    bg: "from-violet-500/8 to-purple-500/5",
    border: "border-violet-200/60",
    iconBg: "bg-violet-500/10",
    iconColor: "text-violet-600",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/atharv-lokhande-714931289/",
    value: "linkedin.com/in/atharv-lokhande-714931289",
    gradient: "from-sky-500 to-cyan-600",
    glow: "shadow-sky-500/25",
    bg: "from-sky-500/8 to-cyan-500/5",
    border: "border-sky-200/60",
    iconBg: "bg-sky-500/10",
    iconColor: "text-sky-600",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Atharvl95",
    value: "github.com/Atharvl95",
    gradient: "from-slate-600 to-slate-800",
    glow: "shadow-slate-500/20",
    bg: "from-slate-500/8 to-slate-600/5",
    border: "border-slate-200/60",
    iconBg: "bg-slate-500/10",
    iconColor: "text-slate-600",
  },
  {
    icon: MapPin,
    label: "Location",
    href: "#",
    value: "Pune, Maharashtra, India",
    gradient: "from-pink-500 to-rose-600",
    glow: "shadow-pink-500/25",
    bg: "from-pink-500/8 to-rose-500/5",
    border: "border-pink-200/60",
    iconBg: "bg-pink-500/10",
    iconColor: "text-pink-600",
  },
];

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-4 py-28 sm:px-6 md:px-10 lg:px-16"
      style={{
        background:
          "linear-gradient(160deg, #f8f6ff 0%, #f0edff 30%, #e8f4ff 60%, #f5f0ff 85%, #fff8f5 100%)",
      }}
    >
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-16px); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .glass-premium {
          background: rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(24px) saturate(1.8);
          border: 1px solid rgba(255, 255, 255, 0.75);
          box-shadow: 0 8px 40px rgba(100, 70, 200, 0.1), 0 1px 0 rgba(255,255,255,0.9) inset;
          transition: all 0.4s ease;
        }
        .glass-premium:hover {
          box-shadow: 0 20px 60px rgba(100, 70, 200, 0.18), 0 1px 0 rgba(255,255,255,0.9) inset;
        }
        .glass-input {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.8);
          transition: all 0.25s ease;
        }
        .glass-input:focus {
          background: rgba(255, 255, 255, 0.9);
          border-color: rgba(124, 92, 250, 0.5);
          box-shadow: 0 0 0 3px rgba(124, 92, 250, 0.1), 0 4px 16px rgba(124,92,250,0.1);
          outline: none;
        }
        .glass-input::placeholder { color: #a0aec0; }
        .gradient-text {
          background: linear-gradient(135deg, #7c5cfa 0%, #5bb8ff 50%, #ff6b9d 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .shimmer-badge {
          background: linear-gradient(90deg, rgba(124,92,250,0.1) 0%, rgba(91,184,255,0.18) 50%, rgba(124,92,250,0.1) 100%);
          background-size: 200% auto;
          animation: shimmer 3s linear infinite;
        }
        .send-btn {
          background: linear-gradient(135deg, #7c5cfa, #5bb8ff);
          box-shadow: 0 6px 24px rgba(124, 92, 250, 0.4);
          transition: all 0.3s ease;
        }
        .send-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(124, 92, 250, 0.55);
        }
        .send-btn:active { transform: translateY(0); }
        .contact-link-card {
          transition: all 0.3s ease;
        }
        .contact-link-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(100, 70, 200, 0.16), 0 1px 0 rgba(255,255,255,0.9) inset;
        }
      `}</style>

      {/* Background orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-[-60px] top-0 h-[450px] w-[450px] rounded-full bg-violet-400/12 blur-[110px]" />
        <div className="absolute left-[-40px] bottom-0 h-[350px] w-[350px] rounded-full bg-sky-400/12 blur-[100px]" />
        <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-400/8 blur-[90px]" />
        {/* Floating shapes */}
        {[
          { size: 12, color: "#7c5cfa", left: "8%", top: "15%", delay: 0 },
          { size: 8, color: "#5bb8ff", left: "85%", top: "20%", delay: 1.5 },
          { size: 10, color: "#ff6b9d", left: "75%", top: "70%", delay: 0.8 },
          { size: 6, color: "#a78bfa", left: "15%", top: "75%", delay: 2 },
        ].map((p, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-30"
            style={{
              width: p.size,
              height: p.size,
              background: p.color,
              left: p.left,
              top: p.top,
              animation: `float ${4 + i}s ease-in-out infinite`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16 max-w-3xl"
        >
          <div className="shimmer-badge mb-4 inline-flex items-center gap-2 rounded-full border border-violet-300/40 px-4 py-2">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-500" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-600">
              Contact
            </span>
          </div>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl leading-[1.1]">
            Let's build something{" "}
            <span className="gradient-text">premium together.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
            Open to full-stack roles, freelance projects, internships, and collaborations.
            Reach out and let's create something extraordinary.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-premium rounded-3xl p-8"
            action="#"
          >
            <div className="shimmer-badge mb-1 inline-flex items-center gap-2 rounded-full border border-violet-300/30 px-3 py-1.5">
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-violet-500">
                Send a message
              </span>
            </div>
            <h3 className="mt-3 mb-7 text-2xl font-bold text-slate-900">
              Start a{" "}
              <span className="gradient-text">conversation</span>
            </h3>

            <div className="grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Your Name
                  </span>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="glass-input w-full rounded-2xl px-4 py-3.5 text-sm text-slate-900"
                  />
                </label>
                <label className="space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Email Address
                  </span>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="glass-input w-full rounded-2xl px-4 py-3.5 text-sm text-slate-900"
                  />
                </label>
              </div>

              <label className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Subject
                </span>
                <input
                  type="text"
                  placeholder="Project collaboration, job offer..."
                  className="glass-input w-full rounded-2xl px-4 py-3.5 text-sm text-slate-900"
                />
              </label>

              <label className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Message
                </span>
                <textarea
                  rows={6}
                  placeholder="Tell me about your project or opportunity..."
                  className="glass-input w-full resize-none rounded-2xl px-4 py-3.5 text-sm text-slate-900"
                />
              </label>

              <button
                type="submit"
                className="send-btn inline-flex items-center justify-center gap-2.5 rounded-2xl px-7 py-4 text-sm font-semibold text-white"
              >
                <Send className="h-4 w-4" />
                Send Message
              </button>
            </div>
          </motion.form>

          {/* Right column */}
          <div className="flex flex-col gap-5">
            {/* Info card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="glass-premium rounded-3xl p-8"
            >
              <div className="shimmer-badge mb-1 inline-flex items-center gap-2 rounded-full border border-sky-300/30 px-3 py-1.5">
                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-sky-500">
                  Reach me
                </span>
              </div>
              <h3 className="mt-3 text-2xl font-bold text-slate-900">
                Chat over email{" "}
                <span className="gradient-text">or socials.</span>
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                I'm open to full-stack roles, freelance consulting, and product
                collaborations. Currently based in Pune — available for remote & on-site.
              </p>

              {/* Availability badge */}
              <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-emerald-200/60 bg-emerald-500/10 px-4 py-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <span className="text-xs font-semibold text-emerald-700">
                  Available for opportunities
                </span>
              </div>
            </motion.div>

            {/* Contact links */}
            <div className="grid gap-3">
              {contactLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href !== "#" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }}
                  className={`contact-link-card glass-premium flex items-center gap-4 rounded-2xl bg-gradient-to-r p-4 ${link.bg} ${link.border}`}
                >
                  <div
                    className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl ${link.iconBg}`}
                  >
                    <link.icon className={`h-5 w-5 ${link.iconColor}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      {link.label}
                    </p>
                    <p className="mt-0.5 truncate text-sm font-semibold text-slate-800">
                      {link.value}
                    </p>
                  </div>
                  {link.href !== "#" && (
                    <ArrowUpRight className="h-4 w-4 flex-shrink-0 text-slate-400" />
                  )}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;