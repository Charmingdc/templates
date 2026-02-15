import { salonConfig } from "../businessConfig";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-ink text-white py-32 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-20 mb-20">
          <div className="text-center md:text-left">
            <h3 className="text-5xl font-extrabold mb-6 opacity-40 uppercase tracking-tighter">
              GLOW SALON
            </h3>
            <p className="text-white/50 text-xl font-light max-w-md">
              High-quality hair styling and professional care for the modern
              individual.
            </p>
          </div>

          <div className="flex gap-16 text-sm font-bold uppercase tracking-widest text-white/70">
            <div className="flex flex-col gap-6">
              <a
                href="#services"
                className="hover:text-accent transition-colors"
              >
                Services
              </a>
              <a
                href="#pricing"
                className="hover:text-accent transition-colors"
              >
                Prices
              </a>
            </div>
            <div className="flex flex-col gap-6">
              <a
                href="#gallery"
                className="hover:text-accent transition-colors"
              >
                Photos
              </a>
              <a
                href="#contact"
                className="hover:text-accent transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>

        <div className="h-px bg-white/10 w-full mb-12"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-sm text-white/30 font-bold uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Glow Salon. All rights reserved.</p>
          <div className="flex gap-12">
            <a
              href={salonConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Instagram
            </a>
            <a
              href={`mailto:${salonConfig.contactEmail}`}
              className="hover:text-white transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
