import { motion } from "framer-motion";

// ── Data ──────────────────────────────────────────────────────────────────────

const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Java", "C++", "HTML5", "CSS3"],
    dot: "bg-gradient-to-r from-violet-500 to-indigo-500",
  },
  {
    title: "Frontend",
    skills: ["React", "Tailwind CSS", "Framer Motion", "Responsive Layouts"],
    dot: "bg-gradient-to-r from-sky-500 to-cyan-400",
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "REST APIs"],
    dot: "bg-gradient-to-r from-emerald-500 to-teal-400",
  },
  {
    title: "Databases",
    skills: ["MongoDB", "MySQL", "Query Optimization"],
    dot: "bg-gradient-to-r from-rose-500 to-pink-400",
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Figma", "VS Code", "Postman"],
    dot: "bg-gradient-to-r from-amber-500 to-orange-400",
  },
  {
    title: "Soft Skills",
    skills: ["Leadership", "Team Collaboration", "Communication", "Problem Solving", "Adaptability"],
    dot: "bg-gradient-to-r from-fuchsia-500 to-purple-400",
  },
];

// ── SVG Icons ─────────────────────────────────────────────────────────────────

const Icons = {
  mongodb: () => (
    <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none">
      <path d="M12 2C12 2 7 8.5 7 13a5 5 0 0 0 10 0c0-4.5-5-11-5-11z" fill="#47A248" />
      <path d="M12 2v18.5" stroke="#fff" strokeWidth="0.8" strokeLinecap="round" />
    </svg>
  ),
  react: () => (
    <svg viewBox="0 0 24 24" width="100%" height="100%">
      <circle cx="12" cy="12" r="2.5" fill="#61DAFB" />
      <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#61DAFB" strokeWidth="1.2" />
      <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(120 12 12)" />
    </svg>
  ),
  nodejs: () => (
    <svg viewBox="0 0 24 24" width="100%" height="100%">
      <path d="M12 1.5L2 7v10l10 5.5L22 17V7L12 1.5z" fill="#339933" />
      <path d="M12 6.5v11M7 9l5 3 5-3" stroke="#fff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  html: () => (
    <svg viewBox="0 0 24 24" width="100%" height="100%">
      <path d="M4 3l1.5 16L12 21l6.5-2L20 3H4z" fill="#E44D26" />
      <path d="M12 5.5H7.5l.3 3.5H12v3.5H8.2l.3 3 3.5 1 3.5-1 .4-4.5H12V9h4.3L17 5.5H12z" fill="#fff" />
    </svg>
  ),
  figma: () => (
    <svg viewBox="0 0 24 24" width="100%" height="100%">
      <rect x="5" y="2" width="7" height="7" rx="2" fill="#F24E1E" />
      <rect x="12" y="2" width="7" height="7" rx="2" fill="#FF7262" />
      <rect x="5" y="9" width="7" height="7" rx="2" fill="#A259FF" />
      <rect x="5" y="16" width="7" height="7" rx="2" fill="#0ACF83" />
      <circle cx="15.5" cy="12.5" r="3.5" fill="#1ABCFE" />
    </svg>
  ),
  javascript: () => (
    <svg viewBox="0 0 24 24" width="100%" height="100%">
      <rect width="24" height="24" rx="3" fill="#F7DF1E" />
      <path d="M7 17.5c.4.7 1 1.2 2 1.2 1.1 0 1.7-.5 1.7-1.3 0-.9-.7-1.2-1.8-1.7l-.6-.3C6.8 14.8 6 13.9 6 12.4c0-1.6 1.2-2.9 3.1-2.9 1.3 0 2.3.5 3 1.5l-1.6 1c-.4-.6-.8-.9-1.4-.9-.6 0-1 .4-1 .9 0 .6.4.9 1.4 1.3l.6.3c1.7.7 2.6 1.6 2.6 3.2 0 1.8-1.4 3-3.4 3-1.9 0-3.1-.9-3.7-2.2L7 17.5zm7.5.2c.5.8 1.1 1.4 2.2 1.4 1 0 1.6-.5 1.6-1.2V9.6h2v8.4c0 2-1.2 2.9-2.9 2.9-1.6 0-2.5-.8-3-1.8l2.1-1.4z" fill="#333" />
    </svg>
  ),
  css: () => (
    <svg viewBox="0 0 24 24" width="100%" height="100%">
      <path d="M4 3l1.5 16L12 21l6.5-2L20 3H4z" fill="#264DE4" />
      <path d="M12 5.5H8l.3 3H12v3H8.5l.3 2.5 3.2.9 3.2-.9.4-4H12V8.5h4.2L17 5.5H12z" fill="#fff" />
    </svg>
  ),
  typescript: () => (
    <svg viewBox="0 0 24 24" width="100%" height="100%">
      <rect width="24" height="24" rx="3" fill="#3178C6" />
      <path d="M13.5 14.5v1.8c.3.2.7.3 1.1.3.5 0 .9-.1 1.2-.4.3-.3.4-.6.4-1 0-.3-.1-.6-.3-.8-.2-.2-.6-.4-1.1-.6-.4-.1-.6-.3-.6-.5 0-.1 0-.2.1-.3.1-.1.2-.1.4-.1.3 0 .6.1.8.3l.6-1c-.4-.3-.9-.5-1.5-.5-.5 0-.9.1-1.2.4-.3.3-.5.6-.5 1.1 0 .7.4 1.2 1.3 1.5.3.1.5.2.6.3.1.1.2.2.2.4 0 .2-.1.3-.2.4-.1.1-.3.1-.5.1-.4 0-.7-.1-1-.4l-.9.8zM9 12.5H7v-1H13v1h-2V19H9v-6.5z" fill="#fff" />
    </svg>
  ),
};

const outerIcons = [
  { Icon: Icons.mongodb, label: "MongoDB" },
  { Icon: Icons.react, label: "React" },
  { Icon: Icons.nodejs, label: "Node.js" },
  { Icon: Icons.html, label: "HTML5" },
  { Icon: Icons.figma, label: "Figma" },
  { Icon: Icons.javascript, label: "JavaScript" },
  { Icon: Icons.css, label: "CSS3" },
  { Icon: Icons.typescript, label: "TypeScript" },
];

const innerIcons = [
  { Icon: Icons.react, label: "React" },
  { Icon: Icons.nodejs, label: "Node.js" },
  { Icon: Icons.mongodb, label: "MongoDB" },
  { Icon: Icons.javascript, label: "JS" },
];

// ── Orbit Ring ────────────────────────────────────────────────────────────────

const OrbitRing = ({
  icons,
  radius,
  duration,
  reverse = false,
  iconSize = 36,
}: {
  icons: { Icon: () => JSX.Element; label: string }[];
  radius: number;
  duration: number;
  reverse?: boolean;
  iconSize?: number;
}) => (
  <motion.div
    className="absolute"
    style={{
      width: radius * 2,
      height: radius * 2,
      top: "50%",
      left: "50%",
      marginTop: -radius,
      marginLeft: -radius,
      borderRadius: "50%",
      border: "1px solid rgba(139,92,246,0.12)",
    }}
    animate={{ rotate: reverse ? -360 : 360 }}
    transition={{ duration, repeat: Infinity, ease: "linear" }}
  >
    {icons.map(({ Icon, label }, i) => {
      const angle = (360 / icons.length) * i;
      const rad = (angle * Math.PI) / 180;
      const x = radius + radius * Math.cos(rad) - iconSize / 2;
      const y = radius + radius * Math.sin(rad) - iconSize / 2;

      return (
        <motion.div
          key={label}
          className="absolute flex items-center justify-center rounded-full"
          style={{
            width: iconSize,
            height: iconSize,
            left: x,
            top: y,
            background: "rgba(255,255,255,0.85)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            border: "1px solid rgba(139,92,246,0.18)",
            boxShadow: "0 4px 16px rgba(139,92,246,0.10)",
            padding: 6,
          }}
          animate={{ rotate: reverse ? 360 : -360 }}
          transition={{ duration, repeat: Infinity, ease: "linear" }}
          title={label}
        >
          <Icon />
        </motion.div>
      );
    })}
  </motion.div>
);

// ── Orbit Background ──────────────────────────────────────────────────────────

const OrbitBackground = () => {
  const CANVAS = 800;
  const outerRadius = 360;
  const innerRadius = 200;

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
      <div
        className="relative flex items-center justify-center flex-shrink-0"
        style={{
          width: CANVAS,
          height: CANVAS,
          transform: "scale(var(--orbit-scale, 1))",
          transformOrigin: "center center",
        }}
      >
        <style>{`
          @media (max-width: 480px)  { :root { --orbit-scale: 0.50; } }
          @media (min-width: 481px) and (max-width: 640px)  { :root { --orbit-scale: 0.65; } }
          @media (min-width: 641px) and (max-width: 768px)  { :root { --orbit-scale: 0.80; } }
          @media (min-width: 769px) and (max-width: 1024px) { :root { --orbit-scale: 0.90; } }
          @media (min-width: 1025px) { :root { --orbit-scale: 1; } }
        `}</style>

        {/* Soft radial glow */}
        <div
          className="absolute rounded-full"
          style={{
            width: CANVAS - 50,
            height: CANVAS - 50,
            background: "radial-gradient(circle, rgba(139,92,246,0.06) 0%, rgba(96,165,250,0.04) 40%, transparent 70%)",
          }}
        />
        {/* Center label */}
        <span
          className="absolute z-10 text-[10px] tracking-[0.35em] uppercase font-semibold"
          style={{ color: "rgba(139,92,246,0.35)" }}
        >
          Stack
        </span>

        <OrbitRing icons={outerIcons} radius={outerRadius} duration={40} iconSize={40} />
        <OrbitRing icons={innerIcons} radius={innerRadius} duration={22} reverse iconSize={32} />
      </div>
    </div>
  );
};

// ── Card Variants ─────────────────────────────────────────────────────────────

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.94 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      delay: i * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
};

const chipVariants = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      delay: 0.2 + i * 0.05,
      type: "spring",
      stiffness: 320,
      damping: 18,
    },
  }),
};

// ── Main Section ──────────────────────────────────────────────────────────────

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden border-t border-slate-200/70 bg-slate-50/60 px-4 py-24 sm:px-6 md:px-8 lg:px-12"
    >
      {/* Ambient blobs */}
      <div className="absolute -left-10 top-16 h-80 w-80 rounded-full bg-violet-400/12 blur-3xl pointer-events-none" />
      <div className="absolute right-0 top-1/4 h-64 w-64 rounded-full bg-cyan-400/12 blur-3xl pointer-events-none" />
      <div className="absolute left-1/2 bottom-0 h-56 w-56 -translate-x-1/2 rounded-full bg-slate-900/5 blur-3xl pointer-events-none" />

      {/* Orbit background lives behind everything */}
      <OrbitBackground />

      {/* ── Foreground ── */}
      <div className="mx-auto max-w-7xl relative z-10">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mb-14 max-w-3xl"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-slate-500 font-semibold">Skills</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl leading-tight">
            Skills built for sleek,{" "}
            <span className="bg-gradient-to-r from-violet-600 via-sky-500 to-cyan-400 bg-clip-text text-transparent">
              scalable
            </span>{" "}
            product experiences.
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-0.5 bg-gradient-to-r from-violet-500 to-sky-400 mt-6 rounded-full"
          />
        </motion.div>

        {/* Full-width 3-col skill cards grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{
                y: -6,
                boxShadow: "0 20px 50px -16px rgba(139,92,246,0.22)",
                borderColor: "rgba(139,92,246,0.3)",
              }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              style={{
                background: "rgba(255,255,255,0.72)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                border: "1px solid rgba(226,232,240,0.9)",
                borderRadius: "20px",
                boxShadow: "0 8px 32px -8px rgba(15,23,42,0.10)",
                cursor: "default",
              }}
              className="p-6 transition-colors duration-300"
            >
              {/* Card header */}
              <div className="flex items-center justify-between gap-3 mb-5">
                <h3 className="text-base font-bold text-slate-900 tracking-tight">
                  {category.title}
                </h3>
                <span
                  className={`h-2.5 w-2.5 rounded-full ${category.dot} shadow-md`}
                />
              </div>

              {/* Chips */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, j) => (
                  <motion.span
                    key={skill}
                    custom={j}
                    variants={chipVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.08,
                      backgroundColor: "rgba(139,92,246,0.10)",
                      borderColor: "rgba(139,92,246,0.3)",
                      color: "#6d28d9",
                    }}
                    style={{
                      background: "rgba(15,23,42,0.05)",
                      border: "1px solid rgba(15,23,42,0.08)",
                      borderRadius: "999px",
                      fontSize: "0.75rem",
                      fontWeight: 500,
                      color: "#475569",
                      padding: "5px 12px",
                      cursor: "default",
                      transition: "background 0.2s, border-color 0.2s, color 0.2s",
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;