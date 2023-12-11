"use client";
import { motion } from "framer-motion";
type AnimatedProps = {
  text: string;
  el?: keyof JSX.IntrinsicElements;
  className?: string;
};

const AnimatedText = ({
  text,
  className,
  el: Wrapper = "p",
}: AnimatedProps) => {
  const variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };
  return (
    <Wrapper className={className}>
      <motion.span
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.1 }}
      >
        {text.split(" ").map((word: string, index: number) => (
          <span key={index} className="inlin-block">
            {" "}
            {word.split("").map((char, index) => (
              <motion.span key={index} variants={variants}>
                {char}
              </motion.span>
            ))}
          </span>
        ))}
      </motion.span>
    </Wrapper>
  );
};

export default AnimatedText;
