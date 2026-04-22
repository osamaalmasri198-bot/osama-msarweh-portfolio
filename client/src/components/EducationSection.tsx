/* ============================================================
   DESIGN: "Digital Craftsman" — Education with animated cards
   and certification badges
   ============================================================ */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";

const education = [
  {
    degree: "Diploma in Interactive Media Design",
    school: "Algonquin College",
    location: "Ottawa, ON",
    period: "2022 – 2024",
    color: "#00d4ff",
    icon: GraduationCap,
    description: "Focused on web development, UI/UX design, and interactive media technologies.",
  },
  {
    degree: "Bachelor of Science in Software Engineering",
    school: "Jordan University of Science and Technology",
    location: "Jordan",
    period: "2016 – 2020",
    color: "#7c3aed",
    icon: GraduationCap,
    description: "Comprehensive software engineering curriculum covering algorithms, data structures, databases, and software architecture.",
  },
];

const certifications = [
  {
    title: "React Fundamentals",
    issuer: "Udemy & FreeCodeCamp",
    year: "2024",
    color: "#00d4ff",
  },
  {
    title: "Advanced JavaScript ES6+",
    issuer: "Self-Study",
    year: "2023",
    color: "#f59e0b",
  },
  {
    title: "Responsive Web Design",
    issuer: "FreeCodeCamp",
    year: "2023",
    color: "#10b981",
  },
  {
    title: "Git & Version Control",
    issuer: "Self-Study",
    year: "2024",
    color: "#7c3aed",
  },
];

export default function EducationSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" className="py-28 relative" style={{ background: "#0d1220" }}>
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(0,212,255,0.02) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(0,212,255,0.02) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
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
          <span className="section-tag">05 — Education</span>
          <h2
            className="font-display font-bold mt-3 text-white"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Academic{" "}
            <span className="gradient-text">Background</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education cards */}
          <div>
            <motion.h3
              className="font-display font-semibold text-slate-400 text-sm uppercase tracking-widest mb-6"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
              Degrees
            </motion.h3>
            <div className="space-y-5">
              {education.map((edu, i) => (
                <motion.div
                  key={edu.degree}
                  className="glass-card rounded-xl p-6 hover:-translate-y-1 transition-transform duration-300"
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${edu.color}15`, border: `1px solid ${edu.color}30` }}
                    >
                      <edu.icon size={22} style={{ color: edu.color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-display font-bold text-white text-base leading-snug mb-1">
                        {edu.degree}
                      </h4>
                      <div className="flex flex-wrap items-center gap-3 text-sm mb-2">
                        <span className="font-semibold" style={{ color: edu.color }}>{edu.school}</span>
                        <div className="flex items-center gap-1 text-slate-500">
                          <MapPin size={11} />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-500 text-xs mb-3">
                        <Calendar size={11} />
                        <span className="font-mono">{edu.period}</span>
                      </div>
                      <p className="text-slate-500 text-sm leading-relaxed">{edu.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <motion.h3
              className="font-display font-semibold text-slate-400 text-sm uppercase tracking-widest mb-6"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
              Certifications
            </motion.h3>
            <div className="grid grid-cols-2 gap-4">
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.title}
                  className="glass-card rounded-xl p-5 hover:-translate-y-1 transition-transform duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                    style={{ background: `${cert.color}15`, border: `1px solid ${cert.color}30` }}
                  >
                    <Award size={18} style={{ color: cert.color }} />
                  </div>
                  <h4 className="font-display font-bold text-white text-sm leading-snug mb-1">
                    {cert.title}
                  </h4>
                  <p className="text-slate-500 text-xs mb-2">{cert.issuer}</p>
                  <span
                    className="font-mono text-xs px-2 py-0.5 rounded"
                    style={{
                      background: `${cert.color}10`,
                      color: cert.color,
                      border: `1px solid ${cert.color}25`,
                    }}
                  >
                    {cert.year}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Additional info */}
            <motion.div
              className="mt-6 glass-card rounded-xl p-5"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
            >
              <h4 className="font-display font-semibold text-white text-sm mb-3">Additional Information</h4>
              <div className="space-y-2">
                {[
                  "Canadian Permanent Resident — eligible for Reliability and Secret clearance",
                  "Available for immediate start | Valid Canadian work authorization",
                  "Open to on-site work in Ottawa, ON",
                  "Strong analytical thinking and commitment to lifelong learning",
                ].map((info, i) => (
                  <div key={i} className="flex gap-2 text-slate-400 text-xs">
                    <span className="text-cyan-400 flex-shrink-0">✓</span>
                    <span>{info}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
