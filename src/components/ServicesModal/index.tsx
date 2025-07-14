import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import {
  Box,
  Typography,
  Paper,
  IconButton,
  useTheme,
} from "@mui/material";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";

const MotionBackdrop = motion(Box);
const MotionContent = motion(Paper);

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { opacity: 0, y: 80, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: 50, scale: 0.95 },
};

interface ServiceModalProps {
  open: boolean;
  onClose: () => void;
  service: {
    icon: string;
    title: string;
    desc: string;
  } | null;
}

const ServiceModal: React.FC<ServiceModalProps> = ({
  open,
  onClose,
  service,
}) => {
  const theme = useTheme();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open || !service) return null;

  return ReactDOM.createPortal(
    <AnimatePresence>
      <MotionBackdrop
        key="backdrop"
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={onClose}
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 2000,
          bgcolor: "rgba(0,0,0,0.5)",
          backdropFilter: "blur(4px)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MotionContent
          key="modal"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={(e) => e.stopPropagation()}
          sx={{
            width: { xs: "90%", md: "500px" },
            maxHeight: "90vh",
            overflowY: "auto",
            borderRadius: 3,
            p: 4,
            bgcolor: theme.palette.background.paper,
            color: theme.palette.text.primary,
            boxShadow: 6,
            position: "relative",
            zIndex: 2001,
          }}
        >
          <IconButton
            onClick={onClose}
            sx={{
              position: "absolute",
              top: 16,
              right: 16,
              color: theme.palette.grey[600],
            }}
          >
            <Icon icon="mdi:close" />
          </IconButton>

          <Box mb={2}>
            <Icon
              icon={service.icon}
              style={{ fontSize: 48, color: theme.palette.primary.main }}
            />
          </Box>

          <Typography variant="h5" fontWeight={600} gutterBottom>
            {service.title}
          </Typography>

          <Typography variant="body1" color="text.secondary">
            {service.desc}
          </Typography>
        </MotionContent>
      </MotionBackdrop>
    </AnimatePresence>,
    document.body // mount outside layout
  );
};

export default ServiceModal;
