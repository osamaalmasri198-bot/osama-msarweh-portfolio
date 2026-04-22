/* ============================================================
   DESIGN: "Digital Craftsman" — Animated vertical timeline
   with staggered reveal and glowing dots
   ============================================================ */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    role: "Help Desk Support Specialist",
    company: "Double Support",
    location: "Amman, Jordan",
    period: "2020 – 2021",
    type: "Full-Time",
    color: "#00d4ff",
    highlights: [
      "Resolved technical issues for 50+ clients, maintaining a 95% first-contact resolution rate in a fast-paced environment.",
      "Diagnosed, debugged, and resolved complex hardware and software issues using structured troubleshooting methodologies.",
      "Documented technical issues and resolutions systematically, building a knowledge base that improved team efficiency.",
      "Collaborated cross-functionally to escalate and resolve complex issues with strong verbal and written communication.",
    ],
    tech: ["Windows", "Active Directory", "Ticketing Systems", "Remote Support Tools"],
  },
];

export default function ExperienceSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-28 relative" style={{ background: "#0d1220" }}>
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(0,212,255,0.02) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(0,212,255,0.02) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
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
          <span className="section-tag">03 — Experience</span>
          <h2
            className="font-display font-bold mt-3 text-white"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Professional{" "}
            <span className="gradient-text">Journey</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <motion.div
            className="absolute left-6 top-0 bottom-0 w-px"
            style={{ background: "linear-gradient(to bottom, #00d4ff40, transparent)" }}
            initial={{ scaleY: 0, originY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          />

          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.role}
              className="relative pl-16 pb-12"
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 + idx * 0.2 }}
            >
              {/* Timeline dot */}
              <div
                className="absolute left-[18px] top-1 timeline-dot"
                style={{ boxShadow: `0 0 16px ${exp.color}80` }}
              />

              {/* Card */}
              <div className="glass-card rounded-xl p-6 hover:-translate-y-1 transition-transform duration-300">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Briefcase size={16} className="text-cyan-400" />
                      <h3 className="font-display font-bold text-white text-xl">{exp.role}</h3>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
                      <span className="font-semibold" style={{ color: exp.color }}>{exp.company}</span>
                      <div className="flex items-center gap-1">
                        <MapPin size={12} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <div className="flex items-center gap-1.5 text-slate-400 text-sm">
                      <Calendar size={13} />
                      <span className="font-mono">{exp.period}</span>
                    </div>
                    <span
                      className="text-xs px-2 py-0.5 rounded font-mono"
                      style={{
                        background: `${exp.color}15`,
                        color: exp.color,
                        border: `1px solid ${exp.color}30`,
                      }}
                    >
                      {exp.type}
                    </span>
                  </div>
                </div>

                {/* Highlights */}
                <ul className="space-y-2 mb-5">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="flex gap-3 text-slate-400 text-sm leading-relaxed">
                      <span className="text-cyan-400 mt-1 flex-shrink-0">▸</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span key={t} className="skill-tag text-xs">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
