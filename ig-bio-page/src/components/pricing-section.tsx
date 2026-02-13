import { useState } from "react";
import { motion } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  MoneyBag01Icon,
  Tap04Icon,
  Cancel01Icon
} from "@hugeicons/core-free-icons";
import ModalWrapper from "./modal-wrapper";

interface Service {
  name: string;
  amount: number;
}

const item = {
  hidden: {
    opacity: 0,
    y: 10,
    scale: 0.98
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.35,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const PricingSection: React.FC<{ services: Service[] }> = ({ services }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        variants={item}
        className="w-full flex items-center justify-between bg-card text-card-foreground p-5 rounded-3xl -mt-[0.40rem]"
      >
        <HugeiconsIcon icon={MoneyBag01Icon} size={22} />
        <span>Our Pricing</span>

        <button onClick={() => setOpen(true)}>
          <HugeiconsIcon icon={Tap04Icon} size={24} />
        </button>
      </motion.div>

      {open && (
        <ModalWrapper onClose={() => setOpen(false)}>
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.3,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="w-[95%] bg-card text-card-foreground flex flex-col items-center justify-center gap-4 p-4 border border-accent rounded-xl md:w-[80%] -mt-[5vh]"
          >
            <button
              aria-label="Close Pricing Modal"
              onClick={() => setOpen(false)}
              className="self-end bg-background p-2 rounded-xl mb-2"
            >
              <HugeiconsIcon icon={Cancel01Icon} size={22} variant="rounded" />
            </button>

            {services.map(service => (
              <div
                key={service.name + service.amount}
                className="w-full flex justify-between"
              >
                <span>{service.name}</span>
                <span>₦{service.amount}</span>
              </div>
            ))}
          </motion.div>
        </ModalWrapper>
      )}
    </>
  );
};

export default PricingSection;
