/* ============================================================
   DESIGN: "Digital Craftsman" — Main page assembling all sections
   Dark cinematic tech portfolio for Osama Msarweh
   ============================================================ */
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "#0a0e1a" }}>
      {/* Scroll progress bar */}
      <ScrollProgress />

      {/* Noise texture overlay for depth */}
      <div className="noise-overlay" />

      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
      <Footer />
      <BackToTop />
    </div>
  );
}
