import { motion } from "framer-motion";

const textAnimate = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};

function Intersaction() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      style={{
        marginTop: "500px",
      }}
      variants={textAnimate}
      viewport={{
        amount: 0.2,
        once: true,
      }}
    >
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit magni
      totam aliquid mollitia exercitationem eligendi, modi fugit soluta
      perspiciatis iste asperiores vitae sed suscipit quae neque, odit
      accusantium ipsa earum.
    </motion.div>
  );
}

export default Intersaction;
