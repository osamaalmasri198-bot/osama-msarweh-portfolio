/* ============================================================
   DESIGN: "Digital Craftsman" — Sticky nav with blur + cyan accent
   ============================================================ */
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 80], [0, 1]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50"
        style={{ opacity: 1 }}
      >
        <motion.div
          className="absolute inset-0 border-b"
          style={{
            opacity: bgOpacity,
            backgroundColor: "rgba(10, 14, 26, 0.92)",
            backdropFilter: "blur(20px)",
            borderColor: "rgba(0, 212, 255, 0.1)",
          }}
        />
        <div className="container relative flex items-center justify-between h-16">
          {/* Logo */}
          <motion.a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-8 h-8 rounded border border-cyan-400/40 flex items-center justify-center"
              style={{ background: "rgba(0,212,255,0.08)" }}>
              <span className="text-cyan-400 font-mono text-sm font-bold">OM</span>
            </div>
            <span className="font-display font-bold text-white text-lg hidden sm:block">
              Osama<span className="text-cyan-400">.</span>
            </span>
          </motion.a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`nav-link ${activeSection === link.href.replace("#", "") ? "active" : ""}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05 }}
              >
                {link.label}
              </motion.button>
            ))}
          </nav>

          {/* CTA */}
          <motion.a
            href="mailto:osamaalmasri198@gmail.com"
            className="hidden md:flex btn-outline text-sm py-2 px-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span>Hire Me</span>
          </motion.a>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-slate-300 hover:text-cyan-400 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <motion.div
        className="fixed inset-0 z-40 md:hidden"
        initial={false}
        animate={isOpen ? { opacity: 1, pointerEvents: "auto" } : { opacity: 0, pointerEvents: "none" }}
        transition={{ duration: 0.2 }}
        style={{ background: "rgba(10,14,26,0.97)", backdropFilter: "blur(20px)" }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, i) => (
            <motion.button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="font-display text-2xl font-bold text-slate-300 hover:text-cyan-400 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: i * 0.07 }}
            >
              {link.label}
            </motion.button>
          ))}
          <motion.a
            href="mailto:osamaalmasri198@gmail.com"
            className="btn-primary mt-4"
            initial={{ opacity: 0 }}
            animate={isOpen ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4 }}
          >
            <span>Hire Me</span>
          </motion.a>
        </div>
      </motion.div>
    </>
  );
}
