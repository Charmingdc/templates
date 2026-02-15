import { motion } from "motion/react";
import { salonConfig } from "../businessConfig";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
};

export const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="py-48 px-8 md:px-16 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="flex flex-col lg:flex-row lg:items-end justify-between mb-32"
          {...fadeInUp}
        >
          <div className="max-w-3xl">
            <span className="text-accent font-bold uppercase tracking-[0.5em] text-xs mb-6 block">
              The Menu
            </span>
            <h2 className="text-6xl md:text-9xl tracking-tighter mb-8">
              Expert <br />
              <span className="text-accent">Services.</span>
            </h2>
          </div>
          <p className="text-2xl text-ink/40 max-w-sm font-light leading-relaxed mb-4">
            Custom solutions for your unique hair journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {salonConfig.services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: idx * 0.1,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="group bg-soft p-16 rounded-softer transition-all duration-700 hover:bg-white hover:shadow-lush border border-transparent hover:border-accent/10"
            >
              <div className="flex justify-between items-start mb-12">
                <span className="text-5xl font-black text-ink/5 group-hover:text-accent/20 transition-colors">
                  0{idx + 1}
                </span>
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M14.121 14.121L19 19m-7-7l7 7m-7-7l-2.879 2.879M12 12L9.121 9.121m0 0L5 5m4.121 4.121L5 19m14-14L5 19"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-4xl mb-6 group-hover:translate-x-2 transition-transform duration-500">
                {service.title}
              </h3>
              <p className="text-xl text-ink/50 mb-12 font-light leading-relaxed">
                {service.description}
              </p>
              <a
                href={`https://wa.me/${salonConfig.whatsappNumber.replace(/\+/g, "")}?text=${encodeURIComponent(`Hello, I would like to book an appointment for ${service.title} as seen on your website.`)}`}
                className="inline-flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-ink/40 group-hover:text-accent transition-colors"
              >
                Book Now
                <div className="w-12 h-px bg-border group-hover:w-20 group-hover:bg-accent transition-all duration-500"></div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
