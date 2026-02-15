import { motion } from "motion/react";
import { salonConfig } from "../businessConfig";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-ink overflow-hidden">
      {/* Cinematic HD Background Video - High Reliability Source */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
          poster="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=2400&auto=format&fit=crop"
        >
          <source
            src="https://player.vimeo.com/external/494252666.hd.mp4?s=33842c1613b5e43a9d94411135c3411e73e97914&profile_id=174"
            type="video/mp4"
          />
          {/* Fallback image if video fails to load entirely */}
          <img
            src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=2400&auto=format&fit=crop"
            className="w-full h-full object-cover"
            alt="Salon environment"
          />
        </video>
        {/* Decorative Overlays */}
        <div className="absolute inset-0 bg-gradient-to-tr from-ink via-ink/70 to-accent/20"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] opacity-10"></div>
      </div>

      <div className="max-w-[1440px] mx-auto w-full px-8 md:px-16 lg:px-24 relative z-10 py-40">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-3 bg-accent/20 border border-accent/30 px-5 py-2 rounded-full mb-8">
              <span className="w-2 h-2 bg-accent rounded-full animate-ping"></span>
              <span className="text-accent text-[11px] font-black uppercase tracking-[0.4em]">
                Expert Stylists On-Site
              </span>
            </div>

            <h1 className="text-7xl md:text-[9.5rem] text-white mb-10 leading-[0.85] tracking-tighter font-black">
              Great Hair <br />
              <span className="text-accent italic font-serif font-normal">
                Every Day.
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/70 leading-relaxed mb-14 max-w-xl font-medium">
              Professional hair styling and expert care in a modern studio. We
              create clean, beautiful looks that last.
            </p>

            <div className="flex flex-wrap items-center gap-8">
              <a
                href={`https://wa.me/${salonConfig.whatsappNumber.replace(/\+/g, "")}`}
                className="btn-alive"
              >
                Book Your Visit
              </a>
              <a
                href="#gallery"
                className="text-white text-sm font-bold uppercase tracking-[0.3em] flex items-center gap-4 group hover:text-accent transition-colors"
              >
                See Our Work
                <span className="w-12 h-px bg-white/20 group-hover:w-20 group-hover:bg-accent transition-all duration-500"></span>
              </a>
            </div>
          </motion.div>

          <motion.div
            className="hidden lg:block relative"
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative z-10 animate-float">
              <div className="aspect-[3/4] rounded-softer overflow-hidden border-[12px] border-white/5 shadow-premium">
                <img
                  src="https://images.unsplash.com/photo-1522336572018-3b8f17c27688?q=80&w=1200&auto=format&fit=crop"
                  alt="Styling in progress"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-10 -right-10 bg-accent p-12 rounded-full shadow-lush animate-bounce">
                <p className="text-white text-xs font-black uppercase tracking-widest text-center leading-tight">
                  Best <br />
                  2024
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
