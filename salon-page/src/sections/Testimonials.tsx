import { motion } from "motion/react";

const reviews = [
  {
    name: "Adanna O.",
    text: "Professional service and great attention to detail. My braids look fantastic and have lasted well.",
    role: "Regular Client"
  },
  {
    name: "Zainab S.",
    text: "Excellent experience. The coloring service was exactly what I asked for, and my hair feels healthy.",
    role: "Verified Customer"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-48 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-32"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-6xl md:text-8xl mb-8 font-black tracking-tighter">
            Client <span className="text-accent">Reviews.</span>
          </h2>
          <p className="text-2xl text-ink/50 font-light">
            Feedback from our customers.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {reviews.map((rev, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: i * 0.2,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="bg-soft p-16 rounded-softer"
            >
              <p className="text-2xl italic mb-12 font-light leading-relaxed">
                "{rev.text}"
              </p>
              <div>
                <p className="font-extrabold text-lg uppercase tracking-widest">
                  {rev.name}
                </p>
                <p className="text-accent text-sm font-bold uppercase tracking-widest mt-2">
                  {rev.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
