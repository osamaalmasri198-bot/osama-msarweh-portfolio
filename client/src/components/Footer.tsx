/* ============================================================
   DESIGN: "Digital Craftsman" — Minimal footer with cyan accent
   ============================================================ */
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="py-10 relative"
      style={{
        background: "#080c18",
        borderTop: "1px solid rgba(0,212,255,0.08)",
      }}
    >
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div
              className="w-8 h-8 rounded border border-cyan-400/30 flex items-center justify-center"
              style={{ background: "rgba(0,212,255,0.06)" }}
            >
              <span className="text-cyan-400 font-mono text-sm font-bold">OM</span>
            </div>
            <span className="font-display font-bold text-white">
              Osama<span className="text-cyan-400">.</span>
            </span>
          </div>

          {/* Copyright */}
          <p className="text-slate-600 text-sm flex items-center gap-1.5">
            Built with{" "}
            <Heart size={12} className="text-cyan-400 fill-cyan-400" />
            {" "}by Osama Msarweh · {new Date().getFullYear()}
          </p>

          {/* Social */}
          <div className="flex items-center gap-4">
            {[
              { icon: Github, href: "https://github.com", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
              { icon: Mail, href: "mailto:osamaalmasri198@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-cyan-400 transition-colors"
                title={label}
                whileHover={{ scale: 1.2, y: -2 }}
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
