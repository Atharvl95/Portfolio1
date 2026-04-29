import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface OrbitingCirclesProps {
  children: ReactNode;
  radius?: number;
  speed?: number;
  iconSize?: number;
  reverse?: boolean;
}

export const OrbitingCircles: React.FC<OrbitingCirclesProps> = ({
  children,
  radius = 100,
  speed = 1,
  iconSize = 32,
  reverse = false,
}) => {
  const childrenArray = React.Children.toArray(children);
  const angleSlice = 360 / childrenArray.length;

  return (
    <motion.div
      className="relative"
      style={{
        width: radius * 2,
        height: radius * 2,
      }}
      animate={{ rotate: 360 }}
      transition={{
        duration: 20 / speed,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {childrenArray.map((child, index) => {
        const angle = angleSlice * index;
        const x = radius * Math.cos((angle * Math.PI) / 180);
        const y = radius * Math.sin((angle * Math.PI) / 180);

        return (
          <motion.div
            key={index}
            className="absolute flex items-center justify-center"
            style={{
              width: iconSize,
              height: iconSize,
              left: "50%",
              top: "50%",
              x: -iconSize / 2,
              y: -iconSize / 2,
              transform: `translate(${x}px, ${y}px)`,
            }}
            animate={{ rotate: reverse ? -360 : 0 }}
            transition={{
              duration: 20 / speed,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div className="w-full h-full flex items-center justify-center text-foreground">
              {child}
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};
