import { useState, useEffect } from "react";
import { salonConfig } from "../businessConfig";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-4 right-4 z-50 transition-all duration-700 rounded-full px-8 md:px-12 flex justify-between items-center ${
        isScrolled
          ? "bg-white/80 backdrop-blur-xl py-4 shadow-lush border border-white/20"
          : "bg-transparent py-6"
      }`}
    >
      <a href="#" className="flex items-center gap-3">
        <span
          className={`text-2xl font-black uppercase tracking-tighter ${isScrolled ? "text-ink" : "text-white"}`}
        >
          Glow
        </span>
        <div className="flex items-center gap-1 bg-accent/10 px-2 py-0.5 rounded-full border border-accent/20">
          <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></span>
          <span className="text-[10px] font-bold uppercase text-accent tracking-widest hidden sm:block">
            Open
          </span>
        </div>
      </a>

      <div
        className={`hidden md:flex gap-10 text-[11px] font-bold uppercase tracking-[0.2em] ${isScrolled ? "text-ink/50" : "text-white/60"}`}
      >
        <a href="#services" className="hover:text-accent transition-colors">
          Services
        </a>
        <a href="#pricing" className="hover:text-accent transition-colors">
          Rates
        </a>
        <a href="#gallery" className="hover:text-accent transition-colors">
          Portfolio
        </a>
        <a href="#contact" className="hover:text-accent transition-colors">
          Find Us
        </a>
      </div>

      <a
        href={`https://wa.me/${salonConfig.whatsappNumber.replace(/\+/g, "")}`}
        className={`px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${
          isScrolled
            ? "bg-ink text-white hover:bg-accent"
            : "bg-white text-ink hover:bg-accent hover:text-white shadow-xl"
        }`}
      >
        Book Appointment
      </a>
    </nav>
  );
};
