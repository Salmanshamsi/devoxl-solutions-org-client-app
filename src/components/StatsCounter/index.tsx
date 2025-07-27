import { useRef, useEffect, type FC } from "react";
import { Box, Typography } from "@mui/material";
import { useInView, animate } from "framer-motion";

interface StatCounterProps {
  to: number;
  label: string;
}

const StatCounter: FC<StatCounterProps> = ({ to, label }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView && ref.current) {
      const controls = animate(0, to, {
        duration: 2,
        onUpdate(value) {
          if (ref.current) {
            ref.current.textContent = `${Math.round(value)}+`;
          }
        },
      });
      return () => controls.stop();
    }
  }, [isInView, to]);

  return (
    <Box textAlign="center">
      <Typography variant="h3" component="p" fontWeight="bold" color="white">
        <span ref={ref}>0+</span>
      </Typography>
      <Typography variant="body1" color="white" sx={{ opacity: 0.8, mt: 1 }}>
        {label}
      </Typography>
    </Box>
  );
};

export default StatCounter;
