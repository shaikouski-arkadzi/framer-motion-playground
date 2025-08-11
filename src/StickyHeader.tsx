import { motion, useTransform, MotionValue } from "framer-motion";

type StickyHeaderProps = {
  offsetY: number[];
  scrollY: MotionValue<number>;
};

export const StickyHeader = ({ offsetY, scrollY }: StickyHeaderProps) => {
  const heightSizes = [150, 50];
  const fontSizes = ["40px", "20px"];

  const height = useTransform(scrollY, offsetY, heightSizes);
  const fontSize = useTransform(scrollY, offsetY, fontSizes);
  const pOpacity = useTransform(scrollY, [20, 150], [1, 0]);
  const btnOpacity = useTransform(scrollY, [135, 300], [0, 1]);

  return (
    <motion.header
      className="header"
      style={{
        height,
      }}
    >
      <div className="flex">
        <motion.h2
          style={{
            fontSize,
          }}
        >
          Hello!
        </motion.h2>
        <motion.button
          style={{
            marginLeft: "auto",
            opacity: btnOpacity,
          }}
        >
          Click me!
        </motion.button>
      </div>
      <motion.p
        style={{
          marginTop: "30px",
          opacity: pOpacity,
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad odit porro
        quasi iusto fuga blanditiis, eius amet ea ab omnis voluptatem
        perferendis.
        <button
          style={{
            display: "block",
            marginTop: "10px",
          }}
        >
          Click me!
        </button>
      </motion.p>
    </motion.header>
  );
};
