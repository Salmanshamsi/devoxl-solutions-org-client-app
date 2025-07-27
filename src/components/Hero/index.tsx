import React, { useMemo, Suspense } from "react";
import { Box, useTheme, useMediaQuery } from "@mui/material";
import LeftContent from "../HeroContent";
import LogoModel from "../3D_model";

const HeroSection: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const layoutDirection = useMemo(
    () => (isMobile ? "column" : "row"),
    [isMobile]
  );

  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        flexDirection: layoutDirection,
        alignItems: "center",
        justifyContent: "space-between",
        mt: 1,
        px: { xs: 3, md: 10 },
        py: { xs: 6, md: 10 },
        minHeight: "60vh",
        gap: 6,
        willChange: "transform, opacity",
      }}
    >
      <LeftContent />

      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          maxHeight: 500,
          overflow: "hidden",
        }}
      >
        <Suspense>
          <LogoModel />
        </Suspense>
      </Box>
    </Box>
  );
};

export default HeroSection;
