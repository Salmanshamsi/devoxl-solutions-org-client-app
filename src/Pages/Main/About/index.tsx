import { Box } from "@mui/material";
import Layout from "../../../Layouts/MAIN";
import WhatWeDoSection from "../../../components/WhatWeDoSection";
import StatsSection from "../../../components/AboutStatsSection";
import TechTrendsSection from "../../../components/TechTrendSection";
import FadeInWhenVisible from "../../../Animations_HOC";
import PartnerSection from "../../../components/PartnerSection";

const About = () => {
  return (
    <Layout>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <FadeInWhenVisible delay={0}>
          <PartnerSection />
        </FadeInWhenVisible>
        <FadeInWhenVisible delay={0.2}>
          <WhatWeDoSection />
        </FadeInWhenVisible>
        <FadeInWhenVisible delay={0.3}>
          <StatsSection />
        </FadeInWhenVisible>
        <FadeInWhenVisible delay={0.4}>
          <TechTrendsSection />
        </FadeInWhenVisible>
      </Box>
    </Layout>
  );
};

export default About;
