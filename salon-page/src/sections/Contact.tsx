import { motion } from "motion/react";
import { salonConfig } from "../businessConfig";

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-48 px-8 md:px-16 bg-soft">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-6xl md:text-8xl mb-8 tracking-tighter font-black">
            Find <span className="text-accent">Us.</span>
          </h2>
          <p className="text-2xl text-ink/40 font-medium">
            Visit our studio in the heart of the city.
          </p>
        </motion.div>

        <motion.div
          className="bg-white rounded-softer overflow-hidden shadow-premium flex flex-col lg:flex-row"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Details Section */}
          <div className="lg:w-2/5 p-12 md:p-20 space-y-16 flex flex-col justify-center bg-white">
            <div className="space-y-12">
              <div>
                <span className="text-accent font-bold uppercase tracking-widest text-xs mb-4 block">
                  Our Location
                </span>
                <p className="text-4xl font-black tracking-tight text-ink">
                  {salonConfig.location.address}
                </p>
              </div>

              <div>
                <span className="text-accent font-bold uppercase tracking-widest text-xs mb-4 block">
                  Working Hours
                </span>
                <p className="text-3xl font-bold tracking-tight text-ink">
                  {salonConfig.location.hours}
                </p>
                <p className="text-xl text-ink/40 mt-4 italic font-light">
                  Sunday & Monday: Closed
                </p>
              </div>
            </div>

            <a
              href={`https://wa.me/${salonConfig.whatsappNumber.replace(/\+/g, "")}?text=${encodeURIComponent("Hi! I'd like to ask for directions to your salon.")}`}
              className="btn-alive justify-center w-full"
            >
              Get Directions on WhatsApp
            </a>
          </div>

          {/* Map Section */}
          <div className="lg:w-3/5 h-[400px] lg:h-auto min-h-[500px] relative grayscale">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.946395383921!2d4.416505314776856!3d7.723209294432924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10382f6f8742c38f%3A0x7d0a294308037d0a!2sEde%2C%20Osun!5e0!3m2!1sen!2sng!4v1625000000000!5m2!1sen!2sng"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen={true}
              loading="lazy"
              title="Salon Location"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
