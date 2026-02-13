import { motion } from "motion/react";
import { useBusinessHead } from "./hooks/use-business-head";
import {
  Meta,
  ActionsSection,
  GallerySection,
  PricingSection
} from "./components";
import { business } from "./data/business";
import { config } from "./data/config";

const page = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.35
    }
  }
};

const section = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.98
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const App = () => {
  useBusinessHead(business);

  return (
    <motion.article
      variants={page}
      initial="hidden"
      animate="show"
      className="w-screen min-h-[95vh] flex flex-col items-center gap-4 text-center p-8"
    >
      <motion.header variants={section}>
        <Meta
          headline={business.name}
          tagline={business.tagline}
          homeLink={business.homeLink}
        />
      </motion.header>

      <main className="w-full flex flex-col items-center gap-5">
        <motion.div variants={section} className="w-full">
          <ActionsSection business={business} />
        </motion.div>

        {config.showPricing && business.pricing && (
          <motion.div variants={section} className="w-full">
            <PricingSection services={business.pricing} />
          </motion.div>
        )}

        {config.showGallery && (
          <motion.div variants={section} className="w-full">
            <GallerySection images={business.gallery} />
          </motion.div>
        )}
      </main>

      <motion.footer
        variants={section}
        className="fixed bottom-4 w-full flex flex-col items-center gap-1 border-t border-card pt-4"
      >
        <p>
          {new Date().getFullYear()} © {business.name}
        </p>
      </motion.footer>
    </motion.article>
  );
};

export default App;
