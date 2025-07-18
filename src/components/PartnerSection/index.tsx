import { Box, Typography, Paper } from "@mui/material";
import { motion, type Variants } from "framer-motion";
import type { FC } from "react";

const MotionTypography = motion(Typography);
// const MotionButton = motion(Button);

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const PartnerSection: FC = () => (
  <Box sx={{ py: { xs: 6, md: 18 } }}>
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
          justifyContent: "space-between",
          alignItems: "stretch",
          gap: { xs: 6, md: 8 },
          px: { xs: 2, sm: 4, md: 4 },
        }}
      >
        {/* Text Section */}
        <Box
          sx={{
            flex: 1,
            textAlign: { xs: "center", md: "left" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: { xs: "center", md: "flex-start" },
            p: 4, // Add some padding
          }}
        >
          <MotionTypography
            variant="h2"
            gutterBottom
            sx={{
              fontWeight: 700,
              background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Behind the Word Mountains
          </MotionTypography>

          <MotionTypography
            variant="h5"
            sx={{ mb: 2, color: "text.secondary" }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            A Tale of the Blind Texts
          </MotionTypography>

          <MotionTypography
            variant="body1"
            sx={{ mb: 4, color: "text.secondary", fontSize: "18px" }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
          >
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean. [15, 16]
          </MotionTypography>

          <MotionTypography
            variant="body2"
            sx={{ fontStyle: "italic", color: "text.disabled", mb: 4 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
          >
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth. [15, 16]
          </MotionTypography>

          <MotionTypography
            variant="caption"
            display="block"
            sx={{ color: "text.secondary" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 1 }}
          >
            Even the all-powerful Pointing has no control about the blind texts
            it is an almost unorthographic life. [16]
          </MotionTypography>
        </Box>

        {/* Cards Section */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "repeat(2, 1fr)",
                },
                gap: 2,
                width: "100%",
              }}
            >
              {[
                "Our Mission",
                "Our Vision",
                "Our Philosophy",
                "Our Strategy",
              ].map((text, index) => (
                <motion.div key={text} variants={itemVariants}>
                  <Paper
                    elevation={4}
                    sx={{
                      height: { xs: 200, sm: 160, md: 230 },
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                      color: "#fff",
                      background: `linear-gradient(rgba(29, 36, 79, 0.7), rgba(29, 36, 79, 0.7)), url(https://source.unsplash.com/random/300x300?technology&sig=${index})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      borderRadius: 3,
                      px: 10,
                    }}
                  >
                    <Typography variant="h6" fontWeight="bold">
                      {text}
                    </Typography>
                  </Paper>
                </motion.div>
              ))}
            </Box>
          </motion.div>
        </Box>
      </Box>
    </motion.div>
  </Box>
);

export default PartnerSection;
