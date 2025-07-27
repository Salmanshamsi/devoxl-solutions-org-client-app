import type { FC } from "react";
import { Box, Container } from "@mui/material";
import StatCounter from "../StatsCounter";

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

export default StatsSection;
