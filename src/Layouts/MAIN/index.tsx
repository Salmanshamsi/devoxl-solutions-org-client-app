import { Box } from "@mui/material";
import Navbar from "../../components/Navbar";
import FadeInWhenVisible from "../../Animations_HOC";
import Footer from "../../components/Footer";

interface LayoutProps {
  children: React.ReactNode;
  withFade?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, withFade = true }) => {
  return (
    <Box
      sx={{
        bgcolor: "background.default",
        color: "text.primary",
      }}
    >
      <Navbar />

      {withFade ? (
        <FadeInWhenVisible delay={0}>
          <Box component="main">{children}</Box>
        </FadeInWhenVisible>
      ) : (
        <Box component="main">{children}</Box>
      )}

      {withFade ? (
        <FadeInWhenVisible delay={0.3}>
          <Footer />
        </FadeInWhenVisible>
      ) : (
        <Footer />
      )}
    </Box>
  );
};

export default Layout;
