import { useRef, useEffect, type FC } from "react";
import {
  Box,
  Container,
  Typography,
  Breadcrumbs,
  Link,
  Paper,
  LinearProgress,
} from "@mui/material";
import { motion, useInView, animate, type Variants } from "framer-motion";
import { Icon } from "@iconify/react";

// --- TYPE DEFINITIONS ---
interface StatCounterProps {
  to: number;
  label: string;
}

interface TechProgressProps {
  label: string;
  value: number;
}

// --- REUSABLE ANIMATION VARIANTS ---
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

// --- HELPER COMPONENTS (Unchanged) ---

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

const TechProgress: FC<TechProgressProps> = ({ label, value }) => (
  <Box sx={{ mb: 3 }}>
    <Box display="flex" justifyContent="space-between" mb={0.5}>
      <Typography variant="body1" fontWeight="bold">
        {label}
      </Typography>
      <Typography variant="body1" fontWeight="bold" color="primary">
        {value}%
      </Typography>
    </Box>
    <LinearProgress
      variant="determinate"
      value={value}
      sx={{
        height: 8,
        borderRadius: 4,
        "& .MuiLinearProgress-bar": {
          background: "linear-gradient(90deg, #00BFFF 0%, #8A2BE2 100%)",
        },
      }}
    />
  </Box>
);

// --- SECTIONAL COMPONENTS (Updated to use Flexbox) ---



const PartnerSection: FC = () => (
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
          <Box sx={{ flex: "1 1 50%" }}>
            <Typography variant="caption" color="primary" fontWeight="bold">
              A FEW WORDS ABOUT US
            </Typography>
            <Typography
              variant="h4"
              component="h2"
              fontWeight="bold"
              sx={{ mt: 1, mb: 2 }}
            >
              Your Partner for Software Innovation
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
              Unlock Your Business's Potential with Devsynth Innovations. We
              transform ideas into reality through innovative solutions.
            </Typography>
          </Box>
          {/* Right Column */}
          <Box sx={{ flex: "1 1 50%", width: "100%" }}>
            <motion.div
              variants={staggerContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
                {[
                  "Our Mission",
                  "Our Vision",
                  "Our Philosophy",
                  "Our Strategy",
                ].map((text, index) => (
                  <Box
                    key={text}
                    sx={{
                      flex: "1 1 calc(50% - 16px)" /* 16px is theme.spacing(2) */,
                    }}
                  >
                    <motion.div variants={itemVariants}>
                      <Paper
                        elevation={4}
                        sx={{
                          height: 180,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background: `linear-gradient(rgba(29, 36, 79, 0.7), rgba(29, 36, 79, 0.7)), url(https://source.unsplash.com/random/300x300?tech&sig=${index})`,
                          backgroundSize: "cover",
                        }}
                      >
                        <Typography
                          variant="h6"
                          color="white"
                          fontWeight="bold"
                        >
                          {text}
                        </Typography>
                      </Paper>
                    </motion.div>
                  </Box>
                ))}
              </Box>
            </motion.div>
          </Box>
        </Box>
      </motion.div>
    </Container>
  </Box>
);

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

const StatsSection: FC = () => (
  <Box
    sx={{
      py: 8,
      background: "linear-gradient(90deg, #00BFFF 0%, #8A2BE2 100%)",
    }}
  >
    <Container>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          gap: { xs: 4, sm: 2 },
        }}
      >
        <StatCounter to={330} label="ACTIVE CLIENTS" />
        <StatCounter to={850} label="PROJECTS DONE" />
        <StatCounter to={25} label="TEAM ADVISORS" />
        <StatCounter to={10} label="GLORIOUS YEARS" />
      </Box>
    </Container>
  </Box>
);

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

const Footer: FC = () => (
  <Box sx={{ bgcolor: "#111827", color: "white", py: 8 }}>
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          textAlign: { xs: "center", sm: "left" },
          gap: 4,
        }}
      >
        {[
          {
            icon: "mdi:map-marker-outline",
            line1: "Wensham Road, Podes, Denea, 9H1S 8FY,",
            line2: "UK, Lychate Heaven, CI",
          },
          {
            icon: "mdi:email-outline",
            line1: "info@devsynth-innovations.com",
            line2: "Our Mailbox",
          },
          {
            icon: "mdi:phone-outline",
            line1: "+44-7481-451224",
            line2: "Our Phone",
          },
        ].map((item) => (
          <Box
            key={item.icon}
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", sm: "flex-start" },
            }}
          >
            <Icon
              icon={item.icon}
              style={{
                marginBottom: "8px",
                color: "#00BFFF",
                fontSize: "2rem",
              }}
            />
            <Typography>{item.line1}</Typography>
            <Typography sx={{ opacity: 0.7 }}>{item.line2}</Typography>
          </Box>
        ))}
      </Box>
      <Typography
        variant="body2"
        align="center"
        sx={{
          mt: 6,
          pt: 4,
          borderTop: 1,
          borderColor: "grey.800",
          opacity: 0.6,
        }}
      >
        Copyright © {new Date().getFullYear()} Devsynth Innovations. All Rights
        Reserved.
      </Typography>
    </Container>
  </Box>
);

// --- MAIN ABOUT PAGE COMPONENT ---
const AboutPage: FC = () => {
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        color: "text.primary",
        overflowX: "hidden",
      }}
    >
      <header>
        {/* A proper app would have a persistent Header/Navbar component here */}
      </header>
      <HeroSection />
      <main>
        <PartnerSection />
        <WhatWeDoSection />
        <StatsSection />
        <TechTrendsSection />
      </main>
    </Box>
  );
};

export default AboutPage;
