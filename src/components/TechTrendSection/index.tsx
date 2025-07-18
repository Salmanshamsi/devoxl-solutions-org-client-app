import type { FC } from "react";
import { Box, Container, Typography } from "@mui/material";
import { motion, type Variants } from "framer-motion";
import { Icon } from "@iconify/react";
import TechProgress from "../TechProgress";

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const TechTrendsSection: FC = () => (
  <Box sx={{ py: 12, bgcolor: "white" }}>
    <Container>
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 6,
            alignItems: "center",
          }}
        >
          {/* Left Column */}
          <Box sx={{ flex: "1 1 50%", width: "100%" }}>
            <Typography variant="caption" color="primary" fontWeight="bold">
              TECHNOLOGY INDEX
            </Typography>
            <Typography
              variant="h4"
              component="h2"
              fontWeight="bold"
              sx={{ mt: 1, mb: 2 }}
            >
              Improve and Innovate with the Tech Trends
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
              We help you build your own remote dedicated development teams
              tailored for your specific needs.
            </Typography>
            <TechProgress label="MOBILE DEVELOPMENT" value={75} />
            <TechProgress label="WEB DEVELOPMENT" value={93} />
            <TechProgress label="UI/UX DESIGN" value={58} />
          </Box>
          {/* Right Column */}
          <Box
            sx={{
              flex: "1 1 50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring" }}
            >
              <Box
                sx={{
                  width: { xs: 250, md: 300 },
                  height: { xs: 250, md: 300 },
                  clipPath:
                    "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: `linear-gradient(rgba(17, 24, 39, 0.8), rgba(17, 24, 39, 0.8)), url(https://w.forfun.com/fetch/13/1330ce733e143c08125b2931560f854a.jpeg)`,
                  backgroundSize: "cover",
                }}
              >
                <Icon
                  icon="mdi:code-braces"
                  style={{ fontSize: "100px", color: "white", opacity: 0.5 }}
                />
              </Box>
            </motion.div>
          </Box>
        </Box>
      </motion.div>
    </Container>
  </Box>
);

export default TechTrendsSection;
