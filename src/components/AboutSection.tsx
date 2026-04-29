import { motion } from "framer-motion";

// ── Data ──────────────────────────────────────────────────────────────────────

const traits = [
  {
    icon: "🏆",
    title: "Award-Winning",
    desc: "1st Prize InovationXpo (National Level) 2026 & 1st Prize Technical Competition.",
    accent: "from-amber-500/15 to-transparent",
  },
  {
    icon: "🎓",
    title: "Top Academic",
    desc: "CGPA 9.05/10 in Computer Science Engineering at PCCOE&R, Ravet.",
    accent: "from-violet-500/15 to-transparent",
  },
  {
    icon: "⚙️",
    title: "Clean Engineering",
    desc: "Agile workflows, Git version control, modular APIs & scalable architecture.",
    accent: "from-sky-500/15 to-transparent",
  },
  {
    icon: "🎯",
    title: "Leadership",
    desc: "Social Media Head at PixelCraft Club — led 6-member team, 300+ students reached.",
    accent: "from-emerald-500/15 to-transparent",
  },
];

const experiences = [
  {
    icon: "💼",
    role: "Web Applications & Software Solutions Intern",
    company: "MathTech Thinking Foundation",
    type: "Internship",
    period: "Feb 2026 – Present · 3 mos",
    location: "Punjab, India · Remote",
    skills: ["React.js", "Express.js"],
    dotColor: "#7c5cfa",
    badgeCls: "bg-violet-100 text-violet-600 border-violet-200/60",
    accentBar: "bg-violet-400",
  },
  {
    icon: "🖥️",
    role: "Software Intern",
    company: "WebRelier Software Solutions Pvt. Ltd.",
    type: "Internship",
    period: "Feb 2026 – Mar 2026 · 2 mos",
    location: "Pune, Maharashtra · Hybrid",
    skills: ["React.js", "Node.js"],
    dotColor: "#38bdf8",
    badgeCls: "bg-sky-100 text-sky-600 border-sky-200/60",
    accentBar: "bg-sky-400",
  },
];

const education = [
  { title: "B.E. Computer Science", sub: "PCCOE&R, Ravet",               meta: "CGPA: 9.05 / 10.0", year: "Expected 2027" },
  { title: "HSC – 12th Standard",   sub: "Maharashtra Board",             meta: "68.67%",            year: "2023"          },
  { title: "SSC – 10th Standard",   sub: "C.K. Goyal Highschool, Pimpri", meta: "94.40%",            year: "2020"          },
];

// ── Component ──────────────────────────────────────────────────────────────────

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-4 py-28 sm:px-6 md:px-10 lg:px-16"
      style={{
        background:
          "linear-gradient(160deg,#f8f6ff 0%,#f0edff 30%,#e8f4ff 60%,#f5f0ff 85%,#fff8f5 100%)",
      }}
    >
      {/* Background orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-[-80px] top-0 h-[500px] w-[500px] rounded-full bg-violet-400/10 blur-[120px]" />
        <div className="absolute left-[-60px] top-1/3 h-[400px] w-[400px] rounded-full bg-sky-400/12 blur-[100px]" />
        <div className="absolute bottom-0 left-1/2 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-pink-400/10 blur-[90px]" />
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-30"
            style={{
              width: `${8 + i * 4}px`,
              height: `${8 + i * 4}px`,
              background: ["#7c5cfa","#5bb8ff","#ff6b9d","#a78bfa","#60c3ff","#ffb8d9"][i],
              left: `${10 + i * 15}%`,
              top: `${15 + i * 12}%`,
              animation: `floatParticle ${4 + i}s ease-in-out infinite`,
              animationDelay: `${i * 0.8}s`,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes floatParticle {
          0%,100% { transform: translateY(0px) rotate(0deg); }
          50%      { transform: translateY(-18px) rotate(180deg); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        .glass-premium {
          background: rgba(255,255,255,0.6);
          backdrop-filter: blur(24px) saturate(1.8);
          -webkit-backdrop-filter: blur(24px) saturate(1.8);
          border: 1px solid rgba(255,255,255,0.75);
          box-shadow: 0 8px 40px rgba(100,70,200,0.1), 0 1px 0 rgba(255,255,255,0.9) inset;
          transition: box-shadow 0.4s ease;
        }
        .glass-premium:hover {
          box-shadow: 0 20px 60px rgba(100,70,200,0.18), 0 1px 0 rgba(255,255,255,0.9) inset;
        }
        .exp-card {
          background: rgba(255,255,255,0.6);
          backdrop-filter: blur(24px) saturate(1.8);
          -webkit-backdrop-filter: blur(24px) saturate(1.8);
          border: 1px solid rgba(255,255,255,0.75);
          box-shadow: 0 8px 40px rgba(100,70,200,0.07), 0 1px 0 rgba(255,255,255,0.9) inset;
          transition: box-shadow 0.3s ease, transform 0.3s ease;
        }
        .exp-card:hover {
          box-shadow: 0 16px 48px rgba(100,70,200,0.15), 0 1px 0 rgba(255,255,255,0.9) inset;
          transform: translateY(-4px);
        }
        .gradient-text {
          background: linear-gradient(135deg,#7c5cfa 0%,#5bb8ff 50%,#ff6b9d 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .shimmer-badge {
          background: linear-gradient(90deg,rgba(124,92,250,0.12) 0%,rgba(91,184,255,0.2) 50%,rgba(124,92,250,0.12) 100%);
          background-size: 200% auto;
          animation: shimmer 3s linear infinite;
        }
      `}</style>

      <div className="relative mx-auto max-w-7xl">

        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16 max-w-2xl"
        >
          <div className="shimmer-badge mb-4 inline-flex items-center gap-2 rounded-full border border-violet-300/40 px-4 py-2">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-500" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-600">
              About Me
            </span>
          </div>
          <p className="text-base leading-8 text-slate-600">
            Full-Stack Developer blending elegant visuals with thoughtful engineering —
            crafting premium web products that feel polished, fast, and production-ready.
          </p>
        </motion.div>

        {/* ── Row 1: Quick Overview + Career Traits ── */}
        <div className="grid gap-6 xl:grid-cols-2 mb-6">

          {/* Quick overview */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="glass-premium rounded-3xl p-8"
          >
            <div className="shimmer-badge mb-1 inline-flex items-center gap-2 rounded-full border border-violet-300/30 px-3 py-1.5">
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-violet-500">
                Quick overview
              </span>
            </div>
            <h3 className="mt-4 text-2xl font-bold text-slate-900 leading-snug">
              Product-focused developer{" "}
              <span className="gradient-text">with design sensibility.</span>
            </h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              I'm <span className="font-semibold text-slate-800">Atharv Lokhande</span> — a B.E.
              Computer Science student at PCCOE&R (CGPA: 9.05) with hands-on experience in React.js,
              Node.js, Express.js, MySQL, MongoDB, and Python. I create web experiences centred
              around clarity, motion, and delightful detail.
            </p>

            {/* Stats */}
            <div className="mt-6 grid grid-cols-3 gap-3">
              {[
                { num: "9.05", label: "CGPA",    unit: "/10" },
                { num: "4+",   label: "Projects", unit: ""   },
                { num: "3+",   label: "Awards",   unit: ""   },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-white/70 bg-white/50 p-4 text-center backdrop-blur-sm"
                >
                  <p className="text-2xl font-bold leading-none">
                    <span className="gradient-text">{s.num}</span>
                    <span className="text-sm text-slate-400">{s.unit}</span>
                  </p>
                  <p className="mt-1 text-xs font-medium text-slate-500">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Location + cert */}
            <div className="mt-6 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 rounded-2xl border border-white/70 bg-white/50 px-4 py-2.5 backdrop-blur-sm">
                <span className="text-base">📍</span>
                <div>
                  <p className="text-xs font-semibold text-slate-900">Pune, Maharashtra, India</p>
                  <p className="text-[11px] text-slate-500">Remote &amp; on-site roles</p>
                </div>
              </div>
              <div className="flex items-center gap-2 rounded-2xl border border-white/70 bg-white/50 px-4 py-2.5 backdrop-blur-sm">
                <span className="text-base">🏅</span>
                <div>
                  <p className="text-xs font-semibold text-slate-900">Oracle Academy</p>
                  <p className="text-[11px] text-slate-500">Database Programming with SQL · 2025</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Career traits */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="glass-premium rounded-3xl p-8"
          >
            <div className="shimmer-badge mb-1 inline-flex items-center gap-2 rounded-full border border-pink-300/30 px-3 py-1.5">
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-pink-500">
                Career traits
              </span>
            </div>
            <h3 className="mt-2 mb-5 text-xl font-bold text-slate-900">
              What defines <span className="gradient-text">my approach</span>
            </h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {traits.map((t, i) => (
                <motion.div
                  key={t.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * i }}
                  whileHover={{ y: -4, boxShadow: "0 8px 24px rgba(100,70,200,0.12)" }}
                  className={`rounded-2xl border border-white/70 bg-gradient-to-br ${t.accent} p-4 backdrop-blur-sm transition-all duration-300 hover:bg-white/80 cursor-default`}
                >
                  <span className="mb-2 block text-xl">{t.icon}</span>
                  <p className="text-sm font-semibold text-slate-900">{t.title}</p>
                  <p className="mt-1.5 text-xs leading-5 text-slate-600">{t.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Row 2: Experience — 4-card grid ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="glass-premium rounded-3xl p-8 mb-6"
        >
          <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
            <div>
              <div className="shimmer-badge mb-2 inline-flex items-center gap-2 rounded-full border border-sky-300/30 px-3 py-1.5">
                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-sky-500">
                  Experience
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Where I've <span className="gradient-text">made an impact</span>
              </h3>
            </div>
            <div
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full"
              style={{
                background: "rgba(34,197,94,0.08)",
                border: "1px solid rgba(34,197,94,0.2)",
                color: "rgb(22,163,74)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
              Open to new opportunities
            </div>
          </div>

          <div className="space-y-4">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * idx }}
                className="exp-card rounded-2xl p-5"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  {/* Left accent bar */}
                  <div
                    className="hidden sm:block w-1 self-stretch rounded-full flex-shrink-0"
                    style={{ background: exp.dotColor, opacity: 0.5 }}
                  />
                  {/* Main info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <p className="text-sm font-bold text-slate-900">{exp.role}</p>
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border flex-shrink-0 ${exp.badgeCls}`}>
                        {exp.type}
                      </span>
                    </div>
                    <p className="text-xs font-semibold text-slate-700">{exp.company}</p>
                    <p className="text-[11px] text-slate-500 mt-0.5">{exp.period} · {exp.location}</p>
                  </div>
                  {/* Skills */}
                  <div className="flex flex-wrap gap-1.5 sm:justify-end">
                    {exp.skills.map((s) => (
                      <span
                        key={s}
                        className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200/80"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Row 3: Education (full width) ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="glass-premium rounded-3xl p-8"
        >
          <div className="shimmer-badge mb-5 inline-flex items-center gap-2 rounded-full border border-amber-300/30 px-3 py-1.5">
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-amber-500">
              Education
            </span>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {education.map((edu, i) => (
              <motion.div
                key={edu.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 * i }}
                whileHover={{ y: -3 }}
                className="rounded-2xl border border-white/70 bg-white/50 p-5 backdrop-blur-sm transition-all duration-300 hover:bg-white/80"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div
                    className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                    style={{ background: "#f59e0b", boxShadow: "0 0 6px rgba(245,158,11,0.5)" }}
                  />
                  <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-600 border border-amber-200/60">
                    {edu.year}
                  </span>
                </div>
                <p className="text-sm font-bold text-slate-900 leading-snug">{edu.title}</p>
                <p className="text-xs text-slate-600 mt-1">{edu.sub}</p>
                <p className="text-xs font-semibold text-amber-600 mt-1">{edu.meta}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;