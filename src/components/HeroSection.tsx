import { motion } from "framer-motion";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).VANTA && heroRef.current) {
      const vantaEffect = (window as any).VANTA.BIRDS({
        el: heroRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        backgroundColor: 0xf8f6ff,
        color1: 0x7c5cfa,
        color2: 0x5bb8ff,
        colorMode: "lerp",
        birdSize: 1.5,
        wingSpan: 15.0,
        speedLimit: 3.0,
        separation: 50.0,
        alignment: 50.0,
        cohesion: 50.0,
        quantity: 6.0
      });

      return () => {
        if (vantaEffect) vantaEffect.destroy();
      };
    }
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen overflow-hidden"
    >
      {/* Main content — centered */}
      <div className="relative mx-auto flex max-w-3xl flex-col items-center justify-center min-h-screen px-4 pb-24 pt-28 text-center sm:px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8 w-full"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full border border-violet-300/40 bg-violet-500/10 px-4 py-2 backdrop-blur-sm"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-500" />
            <Sparkles className="h-3.5 w-3.5 text-violet-500" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-600">
              Full-Stack Developer · Pune, India
            </span>
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-3"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-400">
              Open to opportunities
            </p>
            <h1 className="text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl md:text-7xl leading-[1.08]">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-violet-500 via-sky-500 to-pink-500 bg-clip-text text-transparent">
                Atharv
              </span>
              <br />
              <span className="text-slate-900">Lokhande</span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mx-auto max-w-xl text-base leading-8 text-slate-600 sm:text-lg"
          >
            B.E. Computer Science student at PCCOE&R (CGPA 9.05) crafting
            scalable full-stack apps with React, Node.js, and modern web tech —
            from concept to production.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.48 }}
            className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-2xl px-7 py-4 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{
                background: "linear-gradient(135deg, #7c5cfa, #5bb8ff)",
                boxShadow: "0 6px 24px rgba(124,92,250,0.4)",
              }}
            >
              View My Work
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/75 px-7 py-4 text-sm font-semibold text-slate-700 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/90 hover:shadow-lg"
              style={{
                background: "rgba(255,255,255,0.6)",
                backdropFilter: "blur(16px)",
                boxShadow: "0 4px 16px rgba(100,70,200,0.08)",
              }}
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;