import { motion } from "framer-motion";
import viteLogo from "/vite.svg";

import "./App.css";

function App() {
  return (
    <>
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
      />
      <motion.p whileHover={{ color: "red" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </motion.p>
    </>
  );
}

export default App;
