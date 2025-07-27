import React, { useEffect } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  useTheme,
} from "@mui/material";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";
import { MAIN_IMAGES } from "../../../assets/images";

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ open, onClose }) => {
  const theme = useTheme();

  // 🔒 Lock background scroll when modal is open
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

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="contact-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 2000,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.4)",
            backdropFilter: "blur(4px)",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            overflowY: "auto",
            paddingTop: "10vh",
          }}
          onClick={onClose}
        >
          <motion.div
            key="contact-content"
            initial={{ y: -50, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -40, opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            onClick={(e) => e.stopPropagation()}
            style={{ width: "90%", maxWidth: 540 }}
          >
            <Box
              component="form"
              onSubmit={(e) => {
                e.preventDefault();
                onClose();
              }}
              sx={{
                position: "relative",
                width: "100%",
                p: { xs: 3, sm: 4 },
                bgcolor: theme.palette.background.paper,
                color: theme.palette.text.primary,
                borderRadius: 4,
                boxShadow: 8,
                display: "flex",
                flexDirection: "column",
                gap: 3,
                overflow: "hidden",
                backdropFilter: "blur(10px)",
              }}
            >
              {/* 🌍 Background Map Layer */}
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundImage: `url(${MAIN_IMAGES.MAP})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  opacity: 0.04,
                  zIndex: 0,
                }}
              />

              {/* ❌ Close Button */}
              <IconButton
                onClick={onClose}
                sx={{
                  position: "absolute",
                  top: 12,
                  right: 12,
                  color: theme.palette.grey[500],
                  zIndex: 2,
                }}
              >
                <Icon icon="mdi:close" width={24} height={24} />
              </IconButton>

              {/* 📝 Form Header */}
              <Typography
                variant="h5"
                sx={{ fontWeight: 700, zIndex: 1, textAlign: "center" }}
              >
                Let’s Talk
              </Typography>

              {/* 🧾 Fields */}
              {[
                { label: "Full Name", type: "text" },
                { label: "Email", type: "email" },
              ].map((field, index) => (
                <TextField
                  key={index}
                  label={field.label}
                  type={field.type}
                  variant="outlined"
                  fullWidth
                  required
                  InputLabelProps={{
                    sx: { color: theme.palette.text.secondary },
                  }}
                  InputProps={{ sx: { color: theme.palette.text.primary } }}
                  sx={{
                    zIndex: 1,
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: theme.palette.primary.light,
                      },
                      "&:hover fieldset": {
                        borderColor: theme.palette.primary.main,
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: theme.palette.primary.main,
                        boxShadow: `0 0 0 2px ${theme.palette.primary.light}50`,
                      },
                    },
                  }}
                />
              ))}

              <TextField
                label="Message"
                multiline
                rows={4}
                variant="outlined"
                fullWidth
                required
                InputLabelProps={{
                  sx: { color: theme.palette.text.secondary },
                }}
                InputProps={{ sx: { color: theme.palette.text.primary } }}
                sx={{
                  zIndex: 1,
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: theme.palette.primary.light },
                    "&:hover fieldset": {
                      borderColor: theme.palette.primary.main,
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: theme.palette.primary.main,
                      boxShadow: `0 0 0 2px ${theme.palette.primary.light}50`,
                    },
                  },
                }}
              />

              {/* ✅ Submit Button */}
              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{
                  zIndex: 1,
                  borderRadius: 999,
                  mt: 1,
                  bgcolor: theme.palette.primary.main,
                  color: theme.palette.getContrastText(
                    theme.palette.primary.main
                  ),
                  "&:hover": {
                    bgcolor: theme.palette.primary.dark,
                  },
                }}
              >
                Send Message
              </Button>

              {/* ✅ WhatsApp Button */}
              <Button
                variant="outlined"
                size="large"
                startIcon={<Icon icon="ic:baseline-whatsapp" />}
                sx={{
                  zIndex: 1,
                  borderRadius: 999,
                  color: "#00e676",
                  borderColor: "#00e676",
                  mt: 1,
                  "&:hover": {
                    bgcolor: "rgba(0, 230, 118, 0.1)",
                    borderColor: "#00c853",
                  },
                }}
                href="https://wa.me/923001234567?text=Hello!%20I%20would%20like%20to%20connect."
                target="_blank"
                rel="noopener noreferrer"
              >
                Connect on WhatsApp
              </Button>
            </Box>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
