import { motion, AnimatePresence } from "framer-motion";
import { useState, PropsWithChildren } from "react";

interface IAnimateAppearance {
  title: string;
}

const AnimateAppearance: React.FC<PropsWithChildren<IAnimateAppearance>> = ({
  title = "click me",
  children,
}) => {
  const [isVisible, setVisible] = useState(false);

  const handleVisibility = () => setVisible((visible) => !visible);

  return (
    <>
      <button
        style={{
          backgroundColor: "#ddd",
          width: 300,
          padding: "0.8rem 1.2rem",
        }}
        onClick={handleVisibility}
      >
        {title}
      </button>
      <AnimatePresence
        initial={false} // initial state of visible
        mode="wait" // waits for the exit animation to finish before starting the enter animation of the next component
      >
        {isVisible && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            style={{ overflow: "hidden" }}
          >
            <div
              style={{
                padding: "0.8rem 1.2rem",
                width: 300,
                border: "1px solid black",
                textAlign: "center",
              }}
            >
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AnimateAppearance;
