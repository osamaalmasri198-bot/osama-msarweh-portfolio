/* ============================================================
   DESIGN: "Digital Craftsman" — Project cards with tilt hover,
   glow effects, and staggered entrance animations
   ============================================================ */
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Client Management System",
    period: "2024 – Present",
    description:
      "A full-stack web application with a React frontend and ASP.NET REST API backend. Features SQL Server database with proper relationships, indexing, and CRUD operations supporting 500+ records.",
    highlights: [
      "Designed SQL Server schema with proper relationships and indexing",
      "Implemented form validation, dynamic table rendering with filtering/search",
      "Responsive UI with Tailwind CSS across all device sizes",
      "Clean code principles and modular component architecture",
    ],
    tech: ["React", "ASP.NET MVC", "C#", "SQL Server", "REST API", "Tailwind CSS"],
    color: "#00d4ff",
    accent: "rgba(0,212,255,0.08)",
    featured: true,
  },
  {
    id: 2,
    title: "Interactive Services Dashboard",
    period: "2024 – Present",
    description:
      "A dynamic dashboard with real-time category filtering using React state management. Features reusable modular components and smooth animations that increased user engagement by 40%.",
    highlights: [
      "Real-time category filtering with instant UI updates",
      "Reusable modular components with props and conditional rendering",
      "Full responsiveness from mobile (320px) to desktop (1920px+)",
      "Smooth animations that increased user engagement by 40%",
    ],
    tech: ["React", "JavaScript", "Tailwind CSS"],
    color: "#7c3aed",
    accent: "rgba(124,58,237,0.08)",
    featured: false,
  },
  {
    id: 3,
    title: "Factory-to-Bakery Tracking System",
    period: "2020",
    description:
      "A full-stack shipment and inventory tracking system using RESTful API principles and MVC architecture. Deployed to production serving 15+ bakery clients at 99% uptime.",
    highlights: [
      "Built user interfaces for delivery tracking and reporting",
      "Deployed to production serving 15+ bakery clients at 99% uptime",
      "Translated business requirements into technical solutions",
      "Performance optimization throughout the SDLC",
    ],
    tech: ["ASP.NET MVC", "C#", "SQL Server"],
    color: "#10b981",
    accent: "rgba(16,185,129,0.08)",
    featured: false,
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className="relative group"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      <motion.div
        className="glass-card rounded-xl overflow-hidden h-full"
        animate={hovered ? { y: -6, boxShadow: `0 20px 60px rgba(0,0,0,0.5), 0 0 30px ${project.color}20` } : { y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Top accent bar */}
        <div
          className="h-1 w-full"
          style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
        />

        <div className="p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                {project.featured && (
                  <span
                    className="text-xs px-2 py-0.5 rounded font-mono"
                    style={{
                      background: `${project.color}15`,
                      color: project.color,
                      border: `1px solid ${project.color}30`,
                    }}
                  >
                    Featured
                  </span>
                )}
              </div>
              <h3 className="font-display font-bold text-white text-xl leading-tight">
                {project.title}
              </h3>
              <span className="font-mono text-xs text-slate-500 mt-1 block">{project.period}</span>
            </div>
            <div className="flex gap-2 mt-1">
              <motion.button
                className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-500 hover:text-cyan-400 transition-colors"
                style={{ background: "rgba(255,255,255,0.04)" }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title="View on GitHub"
              >
                <Github size={15} />
              </motion.button>
              <motion.button
                className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-500 hover:text-cyan-400 transition-colors"
                style={{ background: "rgba(255,255,255,0.04)" }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title="Live Demo"
              >
                <ExternalLink size={15} />
              </motion.button>
            </div>
          </div>

          {/* Description */}
          <p className="text-slate-400 text-sm leading-relaxed mb-5">{project.description}</p>

          {/* Highlights */}
          <ul className="space-y-1.5 mb-5">
            {project.highlights.slice(0, 3).map((h, i) => (
              <li key={i} className="flex gap-2 text-slate-500 text-xs leading-relaxed">
                <span style={{ color: project.color }} className="flex-shrink-0 mt-0.5">▸</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-1.5 pt-4 border-t" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-xs px-2 py-0.5 rounded font-mono"
                style={{
                  background: project.accent,
                  color: project.color,
                  border: `1px solid ${project.color}25`,
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-28 relative overflow-hidden" style={{ background: "#0a0e1a" }}>
      {/* Glow orbs */}
      <div
        className="absolute top-1/4 right-0 w-96 h-96 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute bottom-1/4 left-0 w-80 h-80 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,212,255,0.05) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="container relative" ref={ref}>
        {/* Section header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">04 — Projects</span>
          <h2
            className="font-display font-bold mt-3 text-white"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Things I've{" "}
            <span className="gradient-text">Built</span>
          </h2>
          <p className="text-slate-400 mt-3 max-w-xl">
            A selection of full-stack projects demonstrating end-to-end development capabilities.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline flex items-center gap-2"
          >
            <Github size={16} />
            <span>View All on GitHub</span>
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
