import React from "react";
import { opacityAnimation } from "@/shared/animations";
import Image from "next/image";
import { motion } from "framer-motion";

type DotSequenceProps = {
  count: number;
  size: number;
  color: string;
};

export const DotSequence: React.FC<DotSequenceProps> = ({ count, size, color }) => {
  const dotArray = Array.from({ length: count }, (_, index) => (
    <Image
      key={index}
      src={`/icons/${color}-dot.svg`}
      alt={"dot"}
      width={size}
      height={size}
    />
  ));

  return (
    <motion.div
      className={"flex gap-x-0.5"}
      variants={opacityAnimation}
      initial={"initial"}
      animate={"animate"}
    >
      {dotArray}
    </motion.div>
  );
};
