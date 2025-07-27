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

export default  HeroSection: FC = () => (
  <Box
    sx={{
      py: 15,
      color: "white",
      background:
        "linear-gradient(rgba(17, 24, 39, 0.7), rgba(17, 24, 39, 0.7)), url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{ textAlign: "center" }}
    >
      <Typography variant="h2" component="h1" fontWeight="bold">
        About Us
      </Typography>
      <Breadcrumbs
        separator={<Icon icon="mdi:chevron-right" />}
        aria-label="breadcrumb"
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 2,
          color: "white",
        }}
      >
        <Link underline="hover" color="inherit" href="/">
          HOME
        </Link>
        <Typography color="white">ABOUT US</Typography>
      </Breadcrumbs>
    </motion.div>
  </Box>
);
