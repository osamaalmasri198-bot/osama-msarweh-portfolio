import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  return (
    <motion.button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-8 right-8 w-11 h-11 rounded-xl flex items-center justify-center z-50 transition-all duration-200"
      style={{
        opacity,
        background: "rgba(0,212,255,0.1)",
        border: "1px solid rgba(0,212,255,0.3)",
        color: "#00d4ff",
      }}
      whileHover={{
        scale: 1.1,
        background: "rgba(0,212,255,0.2)",
        boxShadow: "0 0 20px rgba(0,212,255,0.3)",
      }}
      whileTap={{ scale: 0.95 }}
      title="Back to top"
    >
      <ArrowUp size={18} />
    </motion.button>
  );
}
