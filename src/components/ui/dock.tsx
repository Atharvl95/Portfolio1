import React, { PropsWithChildren, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, MotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

interface DockProps {
  className?: string;
  children: React.ReactNode;
  magnification?: number;
  distance?: number;
}

interface DockIconProps {
  className?: string;
  children: React.ReactNode;
  mouseX?: MotionValue<number>;
  magnification?: number;
  distance?: number;
}

const DockContext = React.createContext<MotionValue<number> | null>(null);

export function Dock({ children, className, magnification = 60, distance = 140 }: DockProps) {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "flex h-16 items-center gap-3 rounded-2xl border border-white/20 bg-background/80 backdrop-blur-md px-6 py-3",
        className
      )}
    >
      <DockContext.Provider value={mouseX}>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child as React.ReactElement<any>, { mouseX, magnification, distance });
          }
          return child;
        })}
      </DockContext.Provider>
    </motion.div>
  );
}

export function DockIcon({ children, className, mouseX: mouseXProp, magnification = 60, distance = 140 }: DockIconProps) {
  const ref = useRef<HTMLDivElement>(null);
  const defaultMouseX = useMotionValue(Infinity);
  const mouseX = mouseXProp || defaultMouseX;

  const distanceCalc = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distanceCalc, [-distance, 0, distance], [40, magnification, 40]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className={cn("flex aspect-square items-center justify-center rounded-full", className)}
    >
      {children}
    </motion.div>
  );
}
