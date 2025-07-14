import React from "react";
import { Button, type ButtonProps } from "@mui/material";
import { styled } from "@mui/material/styles";

const FuturisticButton = styled(Button)<ButtonProps>(({ theme }) => ({
  padding: "12px 28px",
  borderRadius: "12px",
  backdropFilter: "blur(10px)",
  background: "rgba(0, 255, 255, 0.1)",
  color: "#00f0ff",
  border: "1px solid rgba(0, 255, 255, 0.3)",
  boxShadow:
    "0 0 12px rgba(0, 255, 255, 0.6), inset 0 0 8px rgba(0,255,255,0.3)",
  textTransform: "uppercase",
  fontWeight: "bold",
  fontFamily: "'Orbitron', sans-serif",
  transition: "all 0.3s ease-in-out",
  position: "relative",
  overflow: "hidden",

  "&:hover": {
    background: "rgba(0, 255, 255, 0.2)",
    boxShadow:
      "0 0 20px rgba(0, 255, 255, 0.8), inset 0 0 10px rgba(0,255,255,0.5)",
    transform: "scale(1.03)",
  },

  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: "-75%",
    width: "150%",
    height: "100%",
    background:
      "linear-gradient(120deg, transparent, rgba(0,255,255,0.3), transparent)",
    transform: "skewX(-45deg)",
    transition: "all 0.5s ease-in-out",
  },

  "&:hover::before": {
    left: "100%",
  },
}));

const CustomButton: React.FC<ButtonProps> = (props) => {
  return <FuturisticButton {...props} />;
};

export default CustomButton;
