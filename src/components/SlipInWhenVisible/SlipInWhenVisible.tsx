import { useAnimation, motion } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface Props {}
const SlipInWhenVisible: React.FC<Props> = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            staggerChildren: 1,
            duration: 0.7,
          },
        },
        hidden: { opacity: 0, x: -100 },
      }}
    >
      {children}
    </motion.div>
  );
};
export default SlipInWhenVisible;
