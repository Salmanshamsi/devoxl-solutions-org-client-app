import type { FC } from "react";
import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const WhatWeDoSection: FC = () => (
  <Box sx={{ py: 12, bgcolor: "#111827", color: "white" }}>
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 6,
          alignItems: "center",
        }}
      >
        {/* Left Column (Image) */}
        <Box sx={{ flex: "1 1 50%", width: "100%" }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
              alt="Team working"
              sx={{
                width: "100%",
                borderRadius: 2,
                border: "5px solid #00BFFF",
                boxShadow: "0 10px 30px rgba(0, 191, 255, 0.3)",
              }}
            />
          </motion.div>
        </Box>
        {/* Right Column (Text) */}
        <Box sx={{ flex: "1 1 50%" }}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="caption"
              color="primary.light"
              fontWeight="bold"
            >
              EXPERIENCE, EXECUTION, EXCELLENCE
            </Typography>
            <Typography
              variant="h4"
              component="h2"
              fontWeight="bold"
              sx={{ mt: 1, mb: 3 }}
            >
              What We Actually Do
            </Typography>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}
            >
              {[
                "ph:code-bold",
                "ph:database-bold",
                "ph:device-mobile-bold",
                "ph:diamond-bold",
              ].map((icon) => (
                <Icon
                  key={icon}
                  icon={icon}
                  style={{ fontSize: "2.5rem", color: "#00BFFF" }}
                />
              ))}
            </Box>
            <Typography variant="body1" sx={{ opacity: 0.8 }}>
              Building innovative web applications, crafting custom software
              solutions, and creating seamless mobile experiences to deliver
              end-to-end digital solutions.
            </Typography>
          </motion.div>
        </Box>
      </Box>
    </Container>
  </Box>
);

export default WhatWeDoSection;
