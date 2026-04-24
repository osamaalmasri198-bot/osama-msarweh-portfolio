/* ============================================================
   DESIGN: "Digital Craftsman" — Skills with animated marquee,
   categorized skill tags, and progress bars
   ============================================================ */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const SKILLS_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663588124963/mwREHbfkjrXs7Px2n8oP3o/skills-bg-o4aA9nRsPG9zHTtbrZ9wuP.webp";

const skillCategories = [
  {
    title: "Frontend",
    color: "#00d4ff",
    skills: [
      { name: "React (Hooks)", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript ES6+", level: 92 },
      { name: "Tailwind CSS", level: 88 },
      { name: "HTML5 / CSS3", level: 95 },
      { name: "Responsive Design", level: 90 },
    ],
  },
  {
    title: "Backend & APIs",
    color: "#7c3aed",
    skills: [
      { name: "ASP.NET MVC", level: 85 },
      { name: "C#", level: 82 },
      { name: "RESTful API Design", level: 88 },
      { name: "JSON Data Exchange", level: 90 },
    ],
  },
  {
    title: "Database & Tools",
    color: "#10b981",
    skills: [
      { name: "SQL Server", level: 83 },
      { name: "Database Design", level: 80 },
      { name: "Git & GitHub", level: 88 },
      { name: "Visual Studio / VS Code", level: 92 },
    ],
  },
];

const allTags = [
  "React", "TypeScript", "JavaScript", "C#", "ASP.NET MVC", "SQL Server",
  "Tailwind CSS", "HTML5", "CSS3", "REST API", "Git", "GitHub",
  "Node.js", "Responsive Design", "Unit Testing", "Code Reviews",
  "React Hooks", "State Management", "JSON", "Visual Studio",
];

function SkillBar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-slate-300 text-sm font-medium">{name}</span>
        <span className="font-mono text-xs" style={{ color }}>{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}, ${color}88)` }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="skills"
      className="py-28 relative overflow-hidden"
      style={{ background: "#0a0e1a" }}
    >
      {/* Background image overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url(${SKILLS_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.15,
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
          <span className="section-tag">02 — Skills</span>
          <h2
            className="font-display font-bold mt-3 text-white"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Technical{" "}
            <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-slate-400 mt-3 max-w-xl">
            A full-stack toolkit built through academic study, professional experience, and continuous learning.
          </p>
        </motion.div>

        {/* Skill categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              className="glass-card rounded-xl p-6"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIdx * 0.15 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-2 h-6 rounded-full"
                  style={{ background: cat.color }}
                />
                <h3 className="font-display font-bold text-white text-lg">{cat.title}</h3>
              </div>
              {cat.skills.map((skill, skillIdx) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={cat.color}
                  delay={catIdx * 0.15 + skillIdx * 0.08}
                />
              ))}
            </motion.div>
          ))}
        </div>

        {/* All tech tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="section-tag mb-4">All Technologies</p>
          <div className="flex flex-wrap gap-3">
            {allTags.map((tag) => (
              <span key={tag} className="skill-tag">{tag}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
