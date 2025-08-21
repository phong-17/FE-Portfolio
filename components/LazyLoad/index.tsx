import { ReactNode } from "react";
import * as motion from "motion/react-client";
import { Variants } from "motion";

type LazyLoadProps = {
  children: ReactNode;
  delay?: number;
};

const variants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function LazyLoad(props: LazyLoadProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: props.delay || 0 }}
      variants={variants}
    >
      {props.children}
    </motion.div>
  );
}
