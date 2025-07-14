import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useMemo } from "react";

const services = [
  {
    title: "Elevate Your Business with AI Transformation Services",
    description:
      "Unlock AI's potential with our AI Transformation Services. Elevate operations, enhance experiences, and drive business growth.",
  },
  {
    title: "Empower Your Business with Application Modernization Services",
    description:
      "Turn old software into agile, secure, high-performing systems for a competitive edge.",
  },
  {
    title: "Expert Custom Software Development Tailored for Your Business",
    description:
      "We create custom software solutions that are swift, cost-effective, and comprehensive — from start to finish.",
  },
  {
    title: "Accelerate Your Success with MVP Development Services",
    description:
      "Tailored MVPs for early users. Gather feedback, validate assumptions, and impress investors.",
  },
];

const MotionBox = motion(Box);

const ServicesSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const flexDirection = useMemo(
    () => (isMobile ? "column" : "row"),
    [isMobile]
  );

  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.02)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        borderRadius: "24px",
        px: { xs: 3, md: 8 },
        py: { xs: 6, md: 10 },
        mt: 10,
        mx: "auto",
        maxWidth: "1200px",
        backdropFilter: "blur(12px)",
      }}
    >
      {/* Section Title */}
      <Typography
        variant="h3"
        sx={{
          fontWeight: 600,
          fontSize: { xs: "1.8rem", md: "2.5rem" },
          mb: 6,
        }}
      >
        Revolutionizing Your{" "}
        <Box component="span" sx={{ color: theme.palette.primary.main }}>
          Experience
        </Box>
      </Typography>

      {/* Cards Grid */}
      <Box
        sx={{
          display: "flex",
          flexDirection,
          flexWrap: "wrap",
          gap: 4,
        }}
      >
        {services.map((service, index) => (
          <MotionBox
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            sx={{
              flex: isMobile ? "1 1 100%" : "1 1 45%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              borderTop: "1px solid rgba(255,255,255,0.15)",
              pt: 3,
              minHeight: "160px",
              borderRadius: 3,
              p: 2,
              transition: "background 0.3s",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.03)",
              },
            }}
          >
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              {service.title}
            </Typography>

            <Typography variant="body2" sx={{ color: "text.secondary", mt: 1 }}>
              {service.description}
            </Typography>

            <Box
              sx={{
                mt: 2,
                display: "flex",
                justifyContent: "flex-end",
                fontSize: "1.2rem",
                color: "primary.main",
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "translateX(6px)",
                },
              }}
            >
              <Icon icon="mdi:arrow-right" />
            </Box>
          </MotionBox>
        ))}
      </Box>
    </Box>
  );
};

export default ServicesSection;
