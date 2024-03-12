import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Carousel = ({ children }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen overflow-x-auto">
        <motion.div style={{ x }} className="flex items-center">
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default Carousel;
