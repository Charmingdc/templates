import { motion } from "motion/react";
import { salonConfig } from "../businessConfig";

export const Pricing: React.FC = () => {
  return (
    <section
      id="pricing"
      className="py-48 px-8 md:px-16 bg-ink relative overflow-hidden"
    >
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[150px]"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-accent font-bold uppercase tracking-[0.5em] text-xs mb-8 block">
            Service Menu
          </span>
          <h2 className="text-6xl md:text-[8rem] text-white mb-8 tracking-tighter font-black">
            Our <span className="text-accent">Rates.</span>
          </h2>
          <p className="text-2xl text-white/40 font-medium">
            Transparent pricing for premium hair care.
          </p>
        </motion.div>

        <motion.div
          className="bg-white/5 backdrop-blur-xl rounded-softer p-12 md:p-24 border border-white/10 shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="space-y-12">
            {salonConfig.pricing.map((item, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-8 border-b border-white/5 pb-12 last:border-0 last:pb-0 group"
              >
                <div className="space-y-3">
                  <span className="text-accent text-xs font-black uppercase tracking-[0.3em]">
                    Style 0{index + 1}
                  </span>
                  <p className="text-4xl text-white font-black tracking-tight group-hover:text-accent transition-colors">
                    {item.service}
                  </p>
                </div>
                <div className="text-5xl text-accent font-serif font-normal italic">
                  {item.price}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24 pt-12 border-t border-white/10 text-center">
            <p className="text-white/30 text-xl mb-14 italic font-medium">
              * Final prices depend on hair length and style difficulty.
            </p>
            <a
              href={`https://wa.me/${salonConfig.whatsappNumber.replace(/\+/g, "")}`}
              className="btn-alive bg-white text-ink hover:text-white"
            >
              Get a Custom Quote
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
