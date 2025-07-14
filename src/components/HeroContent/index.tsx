import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionButton = motion(Button);

const words = ["Design,", "Development,", "Hosting"];
const typingSpeed = 100;
const pauseBetweenWords = 800;
const pauseAfterFullLoop = 1000;

const LeftContent = () => {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [looping] = useState(true);

  useEffect(() => {
    if (!looping) return;

    const currentWord = words[wordIndex];

    if (charIndex < currentWord.length) {
      const timeout = setTimeout(() => {
        setDisplayed((prev) => prev + currentWord[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else {
      const nextIndex = (wordIndex + 1) % words.length;
      const timeout = setTimeout(() => {
        setDisplayed((prev) => (nextIndex === 0 ? "" : prev + " "));
        setWordIndex(nextIndex);
        setCharIndex(0);
      }, pauseBetweenWords + (nextIndex === 0 ? pauseAfterFullLoop : 0));
      return () => clearTimeout(timeout);
    }
  }, [charIndex, wordIndex, looping]);

  return (
    <MotionBox
      sx={{ flex: 1 }}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <MotionTypography
        variant="overline"
        color="primary"
        sx={{ letterSpacing: 1, fontWeight: 600, fontSize: "14px" }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        ISOMETRIC HOSTING
      </MotionTypography>

      <Typography
        variant="h3"
        sx={{
          fontWeight: 700,
          mb: 2,
          mt: 1,
          fontFamily: "monospace",
          minHeight: "4rem",
          whiteSpace: "pre-wrap",
          fontSize: "40px",
        }}
      >
        {wordIndex === words.length - 2 &&
        charIndex === words[wordIndex].length ? (
          <>
            {displayed}
            <span
              style={{
                display: "inline-block",
                width: "0.2ch",
                height: "1.2em",
                backgroundColor: "#1976d2",
                animation: "blink 1s step-end infinite",
              }}
            >
              &nbsp;
            </span>
          </>
        ) : (
          <>
            {displayed}
            <span
              style={{
                display: "inline-block",
                width: "0.2ch",
                height: "1.2em",
                backgroundColor: "#1976d2",
                animation: "blink 1s step-end infinite",
              }}
            >
              &nbsp;
            </span>
          </>
        )}
      </Typography>

      <MotionTypography
        variant="body1"
        sx={{ mb: 4, color: "text.secondary", fontSize: "14px" }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia, there live the blind texts.
      </MotionTypography>

      <MotionButton
        variant="contained"
        size="large"
        sx={{ borderRadius: "30px", px: 4, py: 1, color: "whitesmoke" }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Get in Touch
      </MotionButton>
    </MotionBox>
  );
};

export default LeftContent;
