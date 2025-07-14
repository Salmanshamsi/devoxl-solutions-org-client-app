import {
  Box,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
import { useMemo } from "react";
import { MAIN_IMAGES } from "../../assets/images";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionButton = motion(Button);

const Banner = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // ✅ Memoize animation direction
  const flexDirection = useMemo(
    () => (isMobile ? "column" : "row"),
    [isMobile]
  );

  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        flexDirection,
        alignItems: "center",
        justifyContent: "space-between",
        px: { xs: 4, md: 12 },
        py: { xs: 8, md: 12 },
        my: 5,
        bgcolor: theme.palette.background.paper,
        gap: 6,
        overflow: "hidden",
      }}
    >
      {/* Left Side: Text + CTA */}
      <MotionBox
        sx={{ flex: 1, willChange: "opacity, transform" }}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <MotionTypography
          variant="overline"
          color="primary"
          sx={{ letterSpacing: 2, fontWeight: 600, mb: 1 }}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: false, amount: 0.6 }}
        >
          DEEPNEST TECH
        </MotionTypography>

        <MotionTypography
          variant="h2"
          sx={{
            fontWeight: 700,
            mb: 2,
            lineHeight: 1.2,
            color: "#f2f6f9",
          }}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: false, amount: 0.6 }}
        >
          We Code. You Grow.
        </MotionTypography>

        <MotionTypography
          variant="body1"
          sx={{ color: "text.secondary", mb: 4 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: false, amount: 0.6 }}
        >
          Scalable digital solutions built for startups, SMEs, and enterprises.
          From concept to launch — we handle the code, so you can focus on
          growth.
        </MotionTypography>

        <MotionButton
          variant="contained"
          size="large"
          sx={{ borderRadius: "30px", px: 4, py: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get a Quote
        </MotionButton>
      </MotionBox>
      <MotionBox
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: 300,
        }}
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.4 }}
      >
        <Box
          component="img"
          src={MAIN_IMAGES.BANNER}
          alt="Banner Illustration"
          sx={{
            width: "100%",
            maxWidth: 400,
            height: "auto",
            borderRadius: 4,
            boxShadow: 3,
            bgcolor: "#f2f6f9",
          }}
        />
      </MotionBox>
    </Box>
  );
};

export default Banner;
