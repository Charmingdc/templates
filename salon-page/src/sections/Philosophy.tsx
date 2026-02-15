import { motion } from "motion/react";

export const Philosophy: React.FC = () => {
  return (
    <section
      id="philosophy"
      className="py-48 px-8 md:px-16 bg-soft overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="aspect-[4/5] rounded-softer overflow-hidden shadow-premium">
            <img
              src="https://images.unsplash.com/photo-1522336572018-3b8f17c27688?q=80&w=1200&auto=format&fit=crop"
              alt="Professional hair care"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-accent rounded-full flex items-center justify-center p-6 text-center text-white font-black text-base tracking-tighter leading-tight shadow-lush animate-float">
            Quality Guaranteed
          </div>
        </motion.div>

        <motion.div
          className="max-w-xl"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-accent font-bold uppercase tracking-[0.5em] text-xs mb-8 block">
            Our Way
          </span>
          <h2 className="text-6xl md:text-8xl mb-12 tracking-tighter">
            Focused on <br />
            <span className="text-accent italic font-serif font-normal">
              Your Style.
            </span>
          </h2>
          <p className="text-2xl text-ink/60 leading-relaxed mb-16 font-medium">
            We don't follow every temporary trend. Our studio is dedicated to
            high-quality hair care where every appointment is tailored to your
            hair health and your personal style.
          </p>

          <div className="grid sm:grid-cols-2 gap-12 pt-12 border-t-2 border-border">
            <div className="space-y-4">
              <h4 className="text-2xl font-black text-ink">
                Professional Time
              </h4>
              <p className="text-lg text-ink/50 leading-relaxed font-medium">
                We take the time needed to get your look perfect. We never rush
                our work.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-2xl font-black text-ink">Custom Care</h4>
              <p className="text-lg text-ink/50 leading-relaxed font-medium">
                We use the best products and techniques specifically for your
                hair type.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
