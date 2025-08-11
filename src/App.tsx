import { motion, useTransform, useScroll } from "framer-motion";
import viteLogo from "/vite.svg";

import "./App.css";
import AnimateAppearance from "./AnimateAppearance";
import Menu from "./Menu";
import Intersaction from "./Intersaction";
import DragnDrop from "./DragnDrop";
import { StickyHeader } from "./StickyHeader";

function App() {
  const pVariants = {
    hidden: { x: -1000, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const listVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.5,
      },
    }),
  };

  const items = ["Text 1", "Text 2", "Text 3"];

  const { scrollY } = useScroll();

  const offsetY = [0, 300];
  const marginTop = useTransform(scrollY, offsetY, offsetY);

  return (
    <>
      <StickyHeader offsetY={offsetY} scrollY={scrollY} />
      <motion.img
        src={viteLogo}
        className="logo"
        alt="Vite logo"
        animate={{ rotate: 360 }}
        transition={{
          delay: 3,
          duration: 2,
          repeat: Infinity,
          repeatDelay: 1,
          repeatType: "reverse",
          type: "spring",
        }}
        style={{ marginTop }}
      />
      <motion.p whileHover={{ color: "red" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </motion.p>
      <motion.p
        initial={{ x: -1000, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </motion.p>
      <motion.p initial="hidden" animate="visible" variants={pVariants}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </motion.p>

      <ul>
        {items.map((item, index) => (
          <motion.li
            key={item}
            variants={listVariants}
            initial="hidden"
            animate="visible"
            custom={index}
          >
            {item}
          </motion.li>
        ))}
      </ul>
      <AnimateAppearance title="Toggle content">
        Animate Appearance
      </AnimateAppearance>
      <Menu />
      <Intersaction />
      <DragnDrop />
    </>
  );
}

export default App;
