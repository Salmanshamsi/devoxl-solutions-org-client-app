import type { FC } from "react";
import { Box, Typography, LinearProgress } from "@mui/material";

interface TechProgressProps {
  label: string;
  value: number;
}

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

export default TechProgress;
