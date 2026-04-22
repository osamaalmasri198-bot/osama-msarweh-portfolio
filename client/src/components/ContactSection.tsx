/* ============================================================
   DESIGN: "Digital Craftsman" — Contact section with glowing
   form and animated social links
   ============================================================ */
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "osamaalmasri198@gmail.com",
    href: "mailto:osamaalmasri198@gmail.com",
    color: "#00d4ff",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(613) 299-0072",
    href: "tel:+16132990072",
    color: "#7c3aed",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Ottawa, ON, Canada",
    href: "#",
    color: "#10b981",
  },
];

const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com", color: "#0077b5" },
  { icon: Github, label: "GitHub", href: "https://github.com", color: "#ffffff" },
  { icon: Mail, label: "Email", href: "mailto:osamaalmasri198@gmail.com", color: "#00d4ff" },
];

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate send
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-28 relative overflow-hidden" style={{ background: "#0a0e1a" }}>
      {/* Glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-80 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(0,212,255,0.05) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="container relative" ref={ref}>
        {/* Section header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">06 — Contact</span>
          <h2
            className="font-display font-bold mt-3 text-white"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Let's{" "}
            <span className="gradient-text">Work Together</span>
          </h2>
          <p className="text-slate-400 mt-3 max-w-xl mx-auto">
            I'm currently available for full-stack developer roles in Ottawa, ON.
            Let's build something great together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="font-display font-bold text-white text-xl mb-6">Get In Touch</h3>

            <div className="space-y-4 mb-8">
              {contactInfo.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-4 glass-card rounded-xl p-4 hover:-translate-y-0.5 transition-transform duration-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}
                  >
                    <item.icon size={18} style={{ color: item.color }} />
                  </div>
                  <div>
                    <div className="text-slate-500 text-xs mb-0.5">{item.label}</div>
                    <div className="text-white text-sm font-medium">{item.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social */}
            <div>
              <p className="text-slate-500 text-sm mb-4">Find me on</p>
              <div className="flex gap-3">
                {socialLinks.map((s, i) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl flex items-center justify-center glass-card hover:-translate-y-1 transition-transform duration-200"
                    title={s.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <s.icon size={18} style={{ color: s.color }} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="glass-card rounded-xl p-6">
              <h3 className="font-display font-bold text-white text-xl mb-6">Send a Message</h3>

              {sent ? (
                <motion.div
                  className="flex flex-col items-center justify-center py-12 gap-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <CheckCircle size={48} className="text-green-400" />
                  <p className="text-white font-display font-semibold text-lg">Message Sent!</p>
                  <p className="text-slate-400 text-sm text-center">
                    Thank you for reaching out. I'll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-slate-400 text-xs font-mono uppercase tracking-widest block mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your full name"
                      className="w-full px-4 py-3 rounded-lg text-white text-sm outline-none transition-all duration-200 placeholder:text-slate-600"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(0,212,255,0.15)",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "rgba(0,212,255,0.5)";
                        e.target.style.boxShadow = "0 0 0 3px rgba(0,212,255,0.08)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "rgba(0,212,255,0.15)";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>

                  <div>
                    <label className="text-slate-400 text-xs font-mono uppercase tracking-widest block mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-lg text-white text-sm outline-none transition-all duration-200 placeholder:text-slate-600"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(0,212,255,0.15)",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "rgba(0,212,255,0.5)";
                        e.target.style.boxShadow = "0 0 0 3px rgba(0,212,255,0.08)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "rgba(0,212,255,0.15)";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>

                  <div>
                    <label className="text-slate-400 text-xs font-mono uppercase tracking-widest block mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell me about your project or opportunity..."
                      className="w-full px-4 py-3 rounded-lg text-white text-sm outline-none transition-all duration-200 placeholder:text-slate-600 resize-none"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(0,212,255,0.15)",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "rgba(0,212,255,0.5)";
                        e.target.style.boxShadow = "0 0 0 3px rgba(0,212,255,0.08)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "rgba(0,212,255,0.15)";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="btn-primary w-full justify-center"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Send size={16} />
                    <span>Send Message</span>
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
