import React, { useState } from "react";
import { Box, Typography, Paper, useTheme } from "@mui/material";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import ServiceModal from "../ServicesModal";

const MotionPaper = motion(Paper);
const MotionBox = motion(Box);

const services = [
  {
    icon: "mdi:code-tags",
    title: "Web Development",
    desc: "We carry more than just good coding skills. Our experience makes us stand out from other web development.",
  },
  {
    icon: "mdi:cellphone",
    title: "Mobile Development",
    desc: "Create complete enterprise software, ensure reliable software integration, modernize legacy systems.",
  },
  {
    icon: "mdi:palette-outline",
    title: "UI/UX Design",
    desc: "Build the product you need on time with an experienced team that uses a clear and effective design process.",
  },
  {
    icon: "mdi:robot-outline",
    title: "AI Experts",
    desc: "AI solutions, NLP, Computer Vision, Machine Learning, Predictive Analytics, and AI-Driven Automation.",
  },
  {
    icon: "mdi:headset",
    title: "IT Consultancy",
    desc: "Eliminate workflow pain points, implement new tech, and modernize legacy systems.",
  },
  {
    icon: "mdi:cart-outline",
    title: "Ecommerce",
    desc: "Craft innovative e-commerce solutions from custom websites to mobile apps.",
  },
];

// Framer Motion Variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const TechServicesSection: React.FC = () => {
  const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [selectedService, setSelectedService] = useState<
    null | (typeof services)[0]
  >(null);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (service: (typeof services)[0]) => {
    setSelectedService(service);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setTimeout(() => setSelectedService(null), 300); // Wait for animation
  };

  return (
    <Box sx={{ px: { xs: 2, md: 8 }, py: { xs: 6, md: 10 } }}>
      {/* Header */}
      <Box sx={{ mb: 6, textAlign: "center" }}>
        <Typography variant="h4" sx={{ fontWeight: 700, mt: 1 }}>
          We Offer a Wide <br />
          Variety of IT Services
        </Typography>
      </Box>

      {/* Cards */}
      <MotionBox
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "stretch",
          gap: 4,
        }}
      >
        {services.map((service, index) => (
          <MotionPaper
            key={index}
            variants={cardVariants}
            whileHover={{
              y: -6,
              boxShadow: "0 12px 24px rgba(0,0,0,0.12)",
            }}
            transition={{ type: "spring", stiffness: 140 }}
            onClick={() => handleOpenModal(service)}
            sx={{
              flex: "1 1 280px",
              maxWidth: "320px",
              minHeight: 280,
              p: 3,
              borderRadius: 3,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              textAlign: "left",
              overflow: "hidden",
              transition: "transform 0.3s ease",
              cursor: "pointer",
              border: "1px solid rgba(0,0,0,0.08)",
            }}
            elevation={2}
          >
            <motion.div
              whileHover={{ rotate: 8 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Icon
                icon={service.icon}
                style={{ fontSize: 40, color: theme.palette.primary.main }}
              />
            </motion.div>

            <Box sx={{ flexGrow: 1, mt: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                {service.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {service.desc}
              </Typography>
            </Box>
          </MotionPaper>
        ))}
      </MotionBox>

      {/* Modal */}
      <ServiceModal
        open={openModal}
        onClose={handleCloseModal}
        service={selectedService}
      />
    </Box>
  );
};

export default TechServicesSection;
