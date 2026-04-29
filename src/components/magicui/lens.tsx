import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface LensProps {
  children: React.ReactNode;
  zoomFactor?: number;
  lensSize?: number;
  isStatic?: boolean;
  ariaLabel?: string;
}

export const Lens: React.FC<LensProps> = ({
  children,
  zoomFactor = 1.5,
  lensSize = 100,
  isStatic = false,
  ariaLabel = "Lens zoom effect",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isStatic) return;

    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setPosition({ x, y });
    setIsActive(true);
  };

  const handleMouseLeave = () => {
    setIsActive(false);
  };

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      aria-label={ariaLabel}
    >
      {/* Original content */}
      <div className="w-full h-full">{children}</div>

      {/* Zoom lens overlay */}
      {isActive && !isStatic && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute pointer-events-none rounded-full border-2 border-primary/50 bg-black/5 backdrop-blur-sm"
          style={{
            width: lensSize,
            height: lensSize,
            left: position.x - lensSize / 2,
            top: position.y - lensSize / 2,
          }}
        >
          {/* Magnified content inside lens */}
          <div
            className="absolute w-full h-full overflow-hidden rounded-full"
            style={{
              transform: `scale(${zoomFactor})`,
              transformOrigin: `${(position.x / (containerRef.current?.clientWidth || 1)) * 100}% ${
                (position.y / (containerRef.current?.clientHeight || 1)) * 100
              }%`,
            }}
          >
            {children}
          </div>
        </motion.div>
      )}
    </div>
  );
};
