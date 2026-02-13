import { motion } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Cancel01Icon } from "@hugeicons/core-free-icons";

interface Props {
  mapSrc: string;
  address: string;
  onClose: () => void;
}

const MapDisplayer: React.FC<Props> = ({ mapSrc, address, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1]
      }}
      className="w-[95%] bg-card text-card-foreground flex flex-col
          items-center justify-center gap-4 p-4 border border-accent rounded-xl md:w-[80%]"
    >
      <button
        aria-label="Close Map Modal"
        onClick={onClose}
        className="self-end bg-background p-2 rounded-xl"
      >
        <HugeiconsIcon icon={Cancel01Icon} size={22} />
      </button>

      <iframe
        src={mapSrc}
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        title={`Map of ${address}`}
      ></iframe>
    </motion.div>
  );
};

export default MapDisplayer;
