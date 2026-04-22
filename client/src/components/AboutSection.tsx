/* ============================================================
   DESIGN: "Digital Craftsman" — Asymmetric about section with
   floating visual and animated stat counters
   ============================================================ */
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Code2, Globe, Database, Layers } from "lucide-react";

const ABOUT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663588124963/mwREHbfkjrXs7Px2n8oP3o/about-visual-6RkqRpVL6JaWB87vNzQaTP.webp";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / 50;
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 30);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const highlights = [
  { icon: Code2, label: "Frontend", desc: "React, TypeScript, Tailwind CSS" },
  { icon: Database, label: "Backend", desc: "ASP.NET MVC, C#, REST APIs" },
  { icon: Layers, label: "Database", desc: "SQL Server, Schema Design" },
  { icon: Globe, label: "Full-Stack", desc: "End-to-end scalable apps" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-28 relative overflow-hidden" style={{ background: "#0d1220" }}>
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)`,
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
          <span className="section-tag">01 — About</span>
          <h2
            className="font-display font-bold mt-3 text-white"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            The Developer{" "}
            <span className="gradient-text">Behind the Code</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Visual */}
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Decorative border frame */}
              <div
                className="absolute -top-4 -left-4 w-full h-full rounded-xl border"
                style={{ borderColor: "rgba(0,212,255,0.15)" }}
              />
              <div
                className="relative rounded-xl overflow-hidden"
                style={{ border: "1px solid rgba(0,212,255,0.2)" }}
              >
                <img
                  src={ABOUT_IMG}
                  alt="Full-Stack Developer visualization"
                  className="w-full object-cover"
                  style={{ maxHeight: "420px" }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to top, rgba(10,14,26,0.8) 0%, transparent 60%)",
                  }}
                />
              </div>

              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-6 -right-6 glass-card rounded-xl p-4"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-cyan-400/10 flex items-center justify-center">
                    <Code2 size={20} className="text-cyan-400" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-white text-lg leading-none">
                      <AnimatedCounter target={4} suffix="+" />
                    </div>
                    <div className="text-slate-400 text-xs mt-0.5">Years Coding</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            className="order-1 lg:order-2"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.p
              className="text-slate-300 text-lg leading-relaxed mb-6"
              variants={itemVariants}
            >
              I'm a <span className="text-cyan-400 font-semibold">Full-Stack Developer</span> with a
              Diploma in Interactive Media Design from Algonquin College and a B.Sc. in Software
              Engineering from Jordan University of Science and Technology.
            </motion.p>

            <motion.p
              className="text-slate-400 leading-relaxed mb-8"
              variants={itemVariants}
            >
              I specialize in building end-to-end web applications — from crafting pixel-perfect React
              interfaces to architecting robust ASP.NET REST APIs and designing efficient SQL Server
              schemas. I write clean, modular, production-ready code with a focus on scalability and
              maintainability.
            </motion.p>

            {/* Highlights grid */}
            <motion.div
              className="grid grid-cols-2 gap-3 mb-8"
              variants={containerVariants}
            >
              {highlights.map(({ icon: Icon, label, desc }) => (
                <motion.div
                  key={label}
                  className="glass-card rounded-lg p-4 transition-all duration-300 hover:-translate-y-1"
                  variants={itemVariants}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Icon size={16} className="text-cyan-400" />
                    <span className="font-display font-semibold text-white text-sm">{label}</span>
                  </div>
                  <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Additional info */}
            <motion.div
              className="flex flex-wrap gap-4 text-sm"
              variants={itemVariants}
            >
              <div className="flex items-center gap-2 text-slate-400">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                <span>Available for immediate start</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>Canadian Permanent Resident</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                <span>Ottawa, ON — Open to on-site</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
