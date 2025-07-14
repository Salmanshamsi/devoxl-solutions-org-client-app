import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  useTheme,
  useMediaQuery,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { MAIN_IMAGES } from "../../assets/images";
import { useNavigate } from "react-router-dom";
import ContactModal from "../../Pages/Main/Contact";

const MotionButton = motion(Button);
const MotionIconButton = motion(IconButton);

const navItems = [
  { label: "Home", path: "/", icon: "solar:home-outline" },
  { label: "Services", path: "/services", icon: "solar:widget-2-outline" },
  { label: "About", path: "/about", icon: "solar:info-square-outline" },
  { label: "Contact", path: "/contact", icon: "solar:phone-outline" },
];

const Navbar: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const handleNav = (path: string) => {
    if (path === "/contact") {
      setOpen(true);
    } else {
      navigate(path);
    }
    setDrawerOpen(false);
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backdropFilter: "blur(10px)",
          borderBottom: `1px solid ${theme.palette.divider}`,
          px: { xs: 2, sm: 4, md: 8 },
          bgcolor: "background.default",
        }}
      >
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          {/* Logo */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box
              component="img"
              src={MAIN_IMAGES.LOGO}
              alt="Deepnest Logo"
              sx={{ height: 60, width: "auto" }}
            />
            <Box sx={{ display: "flex", flexDirection: "column", ml: 1 }}>
              <Typography variant="h5" sx={{ fontWeight: 700 }}>
                DEEPNEST
              </Typography>
              <Typography sx={{ fontWeight: 300, fontSize: 10 }}>
                TECHNOLOGIES
              </Typography>
            </Box>
          </Box>

          {/* Desktop Nav Buttons */}
          {!isMobile && (
            <Box sx={{ display: "flex", gap: 2 }}>
              {navItems.map(({ label, path, icon }, idx) => (
                <MotionButton
                  key={label}
                  color="inherit"
                  startIcon={<Icon icon={icon} width={20} />}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleNav(path)}
                >
                  {label}
                </MotionButton>
              ))}
            </Box>
          )}

          {/* Mobile Menu Icon */}
          {isMobile && (
            <MotionIconButton
              color="inherit"
              edge="end"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setDrawerOpen(true)}
            >
              <Icon icon="solar:hamburger-menu-outline" width={24} />
            </MotionIconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            bgcolor: "background.default",
            width: 240,
            pt: 4,
            px: 2,
          },
        }}
      >
        <List>
          {navItems.map(({ label, path }) => (
            <ListItem key={label} disablePadding>
              <ListItemButton onClick={() => handleNav(path)}>
                <ListItemText
                  primary={label}
                  primaryTypographyProps={{
                    sx: {
                      color: "text.primary",
                      fontWeight: 600,
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      <ContactModal open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default Navbar;
