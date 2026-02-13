import { useState } from "react";
import { motion, type Variants } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Link01Icon,
  LinkSquare01Icon,
  Location01Icon,
  Tap04Icon
} from "@hugeicons/core-free-icons";
import { ModalWrapper, MapDisplayer } from "../components";

import type { Business, LinkAction } from "../data/business";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2
    }
  }
};

const item: Variants = {
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

const ActionsSection: React.FC<{ business: Business }> = ({ business }) => {
  const [activeModal, setActiveModal] = useState<LinkAction | null>(null);

  const renderIcon = (action: LinkAction) => {
    switch (action.type) {
      case "link":
        return <HugeiconsIcon icon={Link01Icon} size={22} />;
      case "map":
        return <HugeiconsIcon icon={Location01Icon} size={22} />;
      default:
        return null;
    }
  };

  const renderCta = (action: LinkAction) => {
    switch (action.type) {
      case "link":
        return (
          <a
            href={action.url}
            target="_blank"
            className="transition duration-200 active:text-accent hover:text-accent"
          >
            <HugeiconsIcon icon={LinkSquare01Icon} size={22} />
          </a>
        );

      case "map":
        return (
          <button
            onClick={() => setActiveModal(action)}
            className={`${
              activeModal?.type === "map"
                ? "text-accent"
                : "text-card-foreground"
            }`}
          >
            <HugeiconsIcon icon={Tap04Icon} size={22} />
          </button>
        );

      default:
        return null;
    }
  };

  return (
    <section
      aria-labelledby="Quick Actions"
      className="w-full flex flex-col items-center gap-3 mt-[3rem]"
    >
      <h2> Quick Actions </h2>

      <motion.div
        variants={container}
        className="w-full flex flex-col items-center gap-3"
      >
        {business.actions.map((action, idx) => (
          <motion.div
            key={idx}
            variants={item}
            className="w-full flex items-center justify-between bg-card
            text-card-foreground p-5 rounded-3xl"
          >
            {renderIcon(action)}
            <span>{action.label}</span>
            {renderCta(action)}
          </motion.div>
        ))}
      </motion.div>

      {activeModal?.type === "map" && (
        <ModalWrapper onClose={() => setActiveModal(null)}>
          <MapDisplayer
            mapSrc={business.location.mapSrc}
            address={business.location.address}
            onClose={() => setActiveModal(null)}
          />
        </ModalWrapper>
      )}
    </section>
  );
};

export default ActionsSection;
