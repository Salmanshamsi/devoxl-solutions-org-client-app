import { Box, Typography, Link, useTheme } from "@mui/material";
import { Icon } from "@iconify/react";
import { MAIN_IMAGES } from "../../assets/images";

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        mt: 10,
        px: { xs: 4, md: 10 },
        py: { xs: 6, md: 8 },
        backgroundColor: "#02111c",
        color: "#f2f6f9",
        backdropFilter: "blur(12px)",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        alignItems: { xs: "flex-start", md: "flex-start" },
        gap: 6,
        borderTop: `2px solid ${theme.palette.primary.main}`,
      }}
    >
      {/* Left Section */}
      <Box sx={{ flex: 1 }}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <Box
            component="img"
            src={MAIN_IMAGES.LOGO} // Replace with your actual logo path
            alt="Deepnest Logo"
            sx={{ height: 30, mr: 1 }}
          />
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            DEEP<span style={{ color: "#21aeb8" }}>NEST</span> TECH
          </Typography>
        </Box>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Accelerating Innovation. Amplifying Impact. We transform visions into
          reality.
        </Typography>
        <Typography variant="body2" color="primary.light">
          connect@deepnesttech.com
        </Typography>
        <Typography
          variant="caption"
          sx={{ mt: 2, display: "block", color: "gray" }}
        >
          © {new Date().getFullYear()} DEEPNEST TECH. All rights reserved.
        </Typography>
      </Box>

      {/* Right Section */}
      <Box sx={{ flex: 1 }}>
        {/* Top Nav Links */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 6,
            mb: 2,
          }}
        >
          {["About", "Case Studies", "Pricing"].map((item) => (
            <Typography
              key={item}
              variant="body2"
              sx={{
                cursor: "pointer",
                transition: "color 0.3s",
                "&:hover": { color: theme.palette.primary.main },
              }}
            >
              {item}
            </Typography>
          ))}
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 4,
            alignItems: "center",
            borderTop: "1px solid white",
            pt: 1,
            mb: 2,
          }}
        >
          <Icon icon="mdi:linkedin" width={20} />
          <Typography variant="body2">DEEPNEST</Typography>

          <Icon icon="mdi:facebook" width={20} />
          <Typography variant="body2">DEEPNEST</Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 4,
            borderTop: "1px solid white",
            pt: 1,
          }}
        >
          {["Privacy Policy", "Terms & Conditions"].map((item) => (
            <Link
              key={item}
              underline="hover"
              sx={{
                color: "text.secondary",
                "&:hover": { color: theme.palette.primary.main },
              }}
              href="#"
            >
              {item}
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
