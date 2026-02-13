import { motion } from "motion/react";

interface Props {
  headline: string;
  tagline: string;
  homeLink: string;
}

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15
    }
  }
};

const item = {
  hidden: {
    opacity: 0,
    y: "0.5rem",
    scale: 0.98
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const Meta: React.FC<Props> = ({ headline, tagline, homeLink }) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      className="w-full flex flex-col items-center gap-2 mt-4"
    >
      <motion.h1
        variants={item}
        className="font-extrabold text-2xl decoration-2 decoration-accent underline underline-offset-4"
      >
        {headline}
      </motion.h1>

      <motion.p variants={item}>{tagline}</motion.p>

      <motion.a
        variants={item}
        href={homeLink}
        target="_blank"
        className="w-fit bg-card text-accent text-xs py-1 px-3 rounded-2xl mt-2"
      >
        home
      </motion.a>
    </motion.div>
  );
};

export default Meta;
