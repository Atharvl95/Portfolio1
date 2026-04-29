import { motion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Government School Website",
    subtitle: "Public-facing institutional website",
    description:
      "Built and deployed a responsive full-stack-ready architecture serving 1,000+ monthly visitors. Improved performance with lazy loading and code splitting, reducing load time by 40%.",
    tech: ["React.js", "Tailwind CSS", "HTML5", "CSS3"],
    date: "Sep – Nov 2025",
    github: "https://github.com/atharv-lokhande",
    live: "https://github.com/atharv-lokhande",
    image: "/4.png",
    accent: "from-violet-500/20 via-purple-500/10 to-transparent",
    badge: "bg-violet-500/10 text-violet-600 border-violet-300/40",
    tag: "Live",
    tagColor: "bg-emerald-500/10 text-emerald-600 border-emerald-300/40",
    icon: "",
  },
  {
    title: "TrackCD",
    subtitle: "Smart tracking college database system",
    description:
      "Full-stack real-time college management system tracking students, faculty, and academic data. Firebase Auth with role-based dashboards for Admin, Faculty, and Students. Improved data update efficiency by 60%.",
    tech: ["React.js", "Node.js", "Express.js", "Firebase", "Tailwind CSS"],
    date: "2026",
    github: "https://github.com/atharv-lokhande",
    live: "",
    image: "/1.png",
    accent: "from-sky-500/20 via-cyan-500/10 to-transparent",
    badge: "bg-sky-500/10 text-sky-600 border-sky-300/40",
    tag: "Full-Stack",
    tagColor: "bg-sky-500/10 text-sky-600 border-sky-300/40",
    icon: "",
  },
  {
    title: "Invennzy",
    subtitle: "Inventory management system",
    description:
      "Full-stack inventory system tracking 1,000+ products with real-time stock updates and role-based access control. RESTful APIs supporting 200+ daily transactions. Reduced manual errors by 50%.",
    tech: ["React.js", "Node.js", "Express.js", "MySQL", "JavaScript"],
    date: "Aug – Dec 2025",
    github: "https://github.com/atharv-lokhande",
    live: "https://github.com/atharv-lokhande",
    image: "/3.png",
    accent: "from-pink-500/20 via-rose-500/10 to-transparent",
    badge: "bg-pink-500/10 text-pink-600 border-pink-300/40",
    tag: "Live",
    tagColor: "bg-emerald-500/10 text-emerald-600 border-emerald-300/40",
    icon: "",
  },
  {
    title: "PixelCraft Club Website",
    subtitle: "Student animation club platform",
    description:
      "Official website for PixelCraft animation club, creating a digital presence for 300+ students at PCCOE&R. Interactive UI components for dynamic content and real-time club updates with full mobile responsiveness.",
    tech: ["React.js", "TypeScript", "Tailwind CSS"],
    date: "Jan – Feb 2026",
    github: "https://github.com/atharv-lokhande",
    live: "https://github.com/atharv-lokhande",
    image: "/2.png",
    accent: "from-amber-500/20 via-orange-500/10 to-transparent",
    badge: "bg-amber-500/10 text-amber-600 border-amber-300/40",
    tag: "Live",
    tagColor: "bg-emerald-500/10 text-emerald-600 border-emerald-300/40",
    icon: "",
  },
];

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden px-4 py-28 sm:px-6 md:px-10 lg:px-16"
      style={{
        background:
          "linear-gradient(160deg, #f8f6ff 0%, #f0edff 30%, #e8f4ff 60%, #f5f0ff 85%, #fff8f5 100%)",
      }}
    >
      {/* Background orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-violet-400/10 blur-[120px]" />
        <div className="absolute right-0 bottom-24 h-80 w-80 rounded-full bg-cyan-400/10 blur-[100px]" />
        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-400/8 blur-[90px]" />
        {/* Floating dots */}
        {[
          { color: "bg-violet-400", left: "left-[8%]", top: "top-[12%]", size: "w-2.5 h-2.5", delay: "delay-[0ms]" },
          { color: "bg-sky-400", left: "left-[88%]", top: "top-[18%]", size: "w-2 h-2", delay: "delay-[700ms]" },
          { color: "bg-pink-400", left: "left-[78%]", top: "top-[72%]", size: "w-2 h-2", delay: "delay-[1400ms]" },
          { color: "bg-amber-400", left: "left-[12%]", top: "top-[78%]", size: "w-1.5 h-1.5", delay: "delay-[300ms]" },
        ].map((d, i) => (
          <div key={i} className={`absolute ${d.size} ${d.color} ${d.left} ${d.top} rounded-full opacity-40 animate-bounce ${d.delay}`} />
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16 max-w-3xl"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-300/40 bg-violet-500/10 px-4 py-2 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-500" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-600">
              Projects
            </span>
          </div>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl leading-[1.1]">
            Real-world builds with{" "}
            <span className="bg-gradient-to-r from-violet-500 via-sky-500 to-pink-500 bg-clip-text text-transparent">
              premium UI polish.
            </span>
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
            Each project blends interface craft, system architecture, and user-centered details —
            built with scalability and production quality in mind.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl transition-all duration-500 hover:-translate-y-2"
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 24px 64px rgba(100,70,200,0.2), 0 1px 0 rgba(255,255,255,0.9) inset";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 8px 40px rgba(100,70,200,0.1), 0 1px 0 rgba(255,255,255,0.9) inset";
              }}
            >
              {/* Project Header with Background Image */}
              <div className="relative overflow-hidden h-48">
                {/* Background Image */}
                <img 
                  src={project.image} 
                  alt={`${project.title} background`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                
                {/* Content overlay */}
                <div className="relative h-full p-7 flex flex-col justify-end">
                  {/* Title and subtitle */}
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-white/80">
                      {project.subtitle}
                    </p>
                    <h3 className="mt-1.5 text-2xl font-bold text-white">{project.title}</h3>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="px-7 pb-7 pt-5">
                <p className="text-sm leading-7 text-slate-600">{project.description}</p>

                {/* Tech pills */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-slate-200/80 bg-white/80 px-3 py-1 text-[11px] font-semibold text-slate-600 transition-all duration-200 hover:border-violet-300/60 hover:bg-violet-50/80 hover:text-violet-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-2xl px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                      style={{
                        background: "linear-gradient(135deg, #7c5cfa, #5bb8ff)",
                        boxShadow: "0 4px 16px rgba(124,92,250,0.35)",
                      }}
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-2xl border border-white/75 px-5 py-2.5 text-sm font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/90 hover:shadow-lg"
                    style={{
                      background: "rgba(255,255,255,0.6)",
                    }}
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 flex justify-center"
        >
          <a
            href="https://github.com/Atharvl95"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-2xl border border-white/75 px-7 py-4 text-sm font-semibold text-slate-700 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/90 hover:shadow-xl"
            style={{
              background: "rgba(255,255,255,0.6)",
              backdropFilter: "blur(16px)",
              boxShadow: "0 4px 20px rgba(100,70,200,0.1)",
            }}
          >
            <Github className="h-4 w-4" />
            View all projects on GitHub
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;