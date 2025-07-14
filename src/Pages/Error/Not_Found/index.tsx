import React from "react";
import { Box, Typography, Button, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

const NotFound: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
        color: "text.primary",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        px: 4,
        textAlign: "center",
      }}
    >
      <MotionBox
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        sx={{
          backdropFilter: "blur(10px)",
          borderRadius: 4,
          p: 4,
          maxWidth: 600,
          width: "100%",
          border: `1px solid ${theme.palette.divider}`,
          boxShadow: "0 0 40px rgba(0,0,0,0.2)",
        }}
      >
        {/* Placeholder instead of image */}
        <Box
          sx={{
            width: "100%",
            height: 200,
            borderRadius: 4,
            mb: 4,
            background: "linear-gradient(135deg, #1e1e1e, #333)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: theme.palette.primary.main,
            fontSize: "3rem",
            fontWeight: 600,
            fontFamily: "monospace",
            boxShadow: `0 0 20px ${theme.palette.primary.main}66`,
            textTransform: "uppercase",
            letterSpacing: "4px",
          }}
        >
          404
        </Box>

        <MotionTypography
          variant="h2"
          sx={{ fontWeight: 700, mb: 2 }}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Page Not Found
        </MotionTypography>

        <MotionTypography
          variant="body1"
          sx={{ color: "text.secondary", mb: 4 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Sorry, we couldn't find what you were looking for.
        </MotionTypography>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Button
            variant="contained"
            size="large"
            sx={{
              borderRadius: "30px",
              px: 4,
              py: 1.5,
              textTransform: "none",
            }}
            onClick={() => navigate("/")}
          >
            Back to Home
          </Button>
        </motion.div>
      </MotionBox>
    </Box>
  );
};

export default NotFound;
