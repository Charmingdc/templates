import { useState } from "react";
import { motion } from "motion/react";
import { salonConfig } from "../businessConfig";

export const Gallery: React.FC = () => {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    setActiveItem(activeItem === index ? null : index);
  };

  return (
    <section
      id="gallery"
      className="py-48 px-4 sm:px-8 md:px-16 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="max-w-2xl px-4">
            <span className="text-accent font-bold uppercase tracking-[0.5em] text-xs mb-6 block underline decoration-accent/30 underline-offset-8">
              Our Portfolio
            </span>
            <h2 className="text-5xl md:text-9xl tracking-tighter font-black">
              Real <br />
              <span className="text-accent">Results.</span>
            </h2>
          </div>
          <div className="max-w-sm border-l-4 border-accent pl-8 mx-4">
            <p className="text-lg md:text-xl text-ink/50 font-medium leading-relaxed">
              Every picture shows a real client styled in our studio. No stock
              photos, just quality work.
            </p>
          </div>
        </motion.div>

        {/* CSS Columns Masonry Layout - Min 2 columns on mobile */}
        <div className="columns-2 lg:columns-3 gap-4 sm:gap-8 space-y-4 sm:space-y-8">
          {salonConfig.gallery.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1]
              }}
              onClick={() => handleItemClick(index)}
              className={`relative break-inside-avoid overflow-hidden cursor-pointer group shadow-premium transition-all duration-500 rounded-xl sm:rounded-2xl border-2 sm:border-4 ${
                activeItem === index
                  ? "border-accent ring-4 sm:ring-8 ring-accent/10"
                  : "border-transparent"
              }`}
            >
              <img
                src={img.url}
                alt={img.alt}
                className={`w-full h-auto object-cover transition-all duration-700 ${
                  activeItem === index ? "scale-105" : "group-hover:scale-110"
                }`}
              />

              {/* Overlay with Booking Action */}
              <div
                className={`absolute inset-0 bg-ink/60 backdrop-blur-[2px] flex items-center justify-center transition-all duration-500 ${
                  activeItem === index
                    ? "opacity-100"
                    : "opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto"
                }`}
              >
                <div
                  className={`transform transition-all duration-500 px-4 text-center ${
                    activeItem === index
                      ? "scale-100"
                      : "scale-90 group-hover:scale-100"
                  }`}
                >
                  <p className="text-white text-[9px] font-black uppercase tracking-[0.2em] mb-3 opacity-90">
                    {img.alt}
                  </p>
                  <a
                    href={`https://wa.me/${salonConfig.whatsappNumber.replace(/\+/g, "")}?text=${encodeURIComponent(`Hello, I saw the "${img.alt}" in your gallery and I would like to book a similar style.`)}`}
                    className="bg-accent text-white px-3 py-2 sm:px-5 sm:py-3 rounded-full font-black text-[8px] sm:text-[10px] uppercase tracking-widest shadow-xl hover:bg-white hover:text-accent transition-colors flex items-center justify-center gap-1 sm:gap-2"
                  >
                    Book Look
                    <svg
                      className="w-3 h-3 hidden sm:block"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-32 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p className="text-ink/30 font-bold uppercase tracking-widest mb-10 text-[10px] sm:text-xs">
            Tap any image to explore more details
          </p>
          <a
            href={salonConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-alive bg-transparent border-2 border-ink text-ink hover:bg-ink hover:text-white"
          >
            See More on Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
};
