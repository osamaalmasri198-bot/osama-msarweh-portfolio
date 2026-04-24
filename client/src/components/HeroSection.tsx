/* ============================================================
   DESIGN: "Digital Craftsman" — Clean hero section
   Authentic, no AI effects - just solid design
   ============================================================ */
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, ChevronDown } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663588124963/mwREHbfkjrXs7Px2n8oP3o/hero-bg-bNtBLgAveLK4t8w4znYghg.webp";

export default function HeroSection() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "#0a0e1a" }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${HERO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "left center",
          opacity: 0.35,
          zIndex: 0,
        }}
      />

      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, rgba(10,14,26,0.6) 0%, rgba(10,14,26,0.85) 50%, rgba(10,14,26,0.97) 100%)",
          zIndex: 0,
        }}
      />

      {/* Cyan glow orb */}
      <div
        className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 70%)",
          filter: "blur(40px)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div className="container relative z-10 pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Pre-title */}
          <motion.div
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="h-px w-12 bg-cyan-400" />
            <span className="section-tag">Available for hire</span>
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          </motion.div>

          {/* Name */}
          <motion.h1
            className="font-display font-bold leading-none mb-4"
            style={{ fontSize: "clamp(3rem, 8vw, 6rem)", color: "#fff" }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Osama{" "}
            <span className="text-cyan-glow">Msarweh</span>
          </motion.h1>

          {/* Role */}
          <motion.div
            className="flex items-center gap-2 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <span className="font-mono text-cyan-400 text-xl">&lt;</span>
            <span
              className="font-display font-semibold text-slate-200"
              style={{ fontSize: "clamp(1.2rem, 3vw, 1.8rem)" }}
            >
              Full-Stack Developer
            </span>
            <span className="font-mono text-cyan-400 text-xl">/&gt;</span>
          </motion.div>

          {/* Summary */}
          <motion.p
            className="text-slate-400 text-lg leading-relaxed mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Full-Stack Developer with <span className="text-cyan-400 font-semibold">1.5 years</span> of hands-on experience
            building responsive, scalable web applications. Specializing in React, TypeScript, ASP.NET MVC,
            and SQL Server — delivering clean, production-ready code.
          </motion.p>

          {/* Location */}
          <motion.div
            className="flex items-center gap-2 text-slate-500 text-sm mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <MapPin size={14} className="text-cyan-400" />
            <span>Ottawa, ON — Canadian Permanent Resident</span>
          </motion.div>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <a
              href="#projects"
              onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }}
              className="btn-primary"
            >
              <span>View My Work</span>
            </a>
            <a
              href="mailto:osamaalmasri198@gmail.com"
              className="btn-outline"
            >
              <span>Get In Touch</span>
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            className="flex items-center gap-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
          >
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-500 hover:text-cyan-400 transition-colors text-sm"
            >
              <Linkedin size={18} />
              <span className="hidden sm:block">LinkedIn</span>
            </a>
            <div className="w-px h-4 bg-slate-700" />
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-500 hover:text-cyan-400 transition-colors text-sm"
            >
              <Github size={18} />
              <span className="hidden sm:block">GitHub</span>
            </a>
            <div className="w-px h-4 bg-slate-700" />
            <a
              href="mailto:osamaalmasri198@gmail.com"
              className="flex items-center gap-2 text-slate-500 hover:text-cyan-400 transition-colors text-sm"
            >
              <Mail size={18} />
              <span className="hidden sm:block">osamaalmasri198@gmail.com</span>
            </a>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          className="flex flex-wrap gap-8 mt-16 pt-8 border-t"
          style={{ borderColor: "rgba(0,212,255,0.1)" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
        >
          {[
            { value: "1.5+", label: "Years Experience" },
            { value: "3+", label: "Projects Built" },
            { value: "95%", label: "Client Resolution Rate" },
            { value: "2", label: "Degrees / Diplomas" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span
                className="font-display font-bold text-cyan-400"
                style={{ fontSize: "2rem", lineHeight: 1 }}
              >
                {stat.value}
              </span>
              <span className="text-slate-500 text-sm mt-1">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600 hover:text-cyan-400 transition-colors"
        style={{ zIndex: 10 }}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-xs font-mono tracking-widest">SCROLL</span>
        <ChevronDown size={18} />
      </motion.button>
    </section>
  );
}
