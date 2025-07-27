import React, { useRef } from "react";
import { motion, useInView, type MotionProps } from "framer-motion";
import { Box } from "@mui/material";

interface FadeInWhenVisibleProps extends MotionProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  once?: boolean;
  offset?: string;
}

const FadeInWhenVisible: React.FC<FadeInWhenVisibleProps> = ({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  once = false,
  offset = "-100px",
  ...rest
}) => {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once,
    margin: offset,
  } as any);

  const offsetMap = {
    up: { x: 0, y: 40 },
    down: { x: 0, y: -40 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
  };

  const offsetProps = offsetMap[direction] || offsetMap.up;

  return (
    <Box ref={ref} component="section">
      <motion.div
        initial={{ opacity: 0, ...offsetProps }}
        animate={isInView ? { opacity: 1, x: 0, y: 0 } : undefined}
        transition={{ duration, delay, ease: "easeOut" }}
        {...rest}
        style={{ willChange: "opacity, transform" }}
      >
        {children}
      </motion.div>
    </Box>
  );
};

export default FadeInWhenVisible;
