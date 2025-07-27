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
        {wordIndex === words.length - 1 &&
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
               
            </span>
          </>
        )}
      </Typography>

      <MotionTypography
        variant="body1"
        sx={{
          mb: 4,
          color: "text.secondary",
          fontSize: "16px",
          lineHeight: 1.8,
        }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        A small river named Duden flows by their place and supplies it with the
        necessary regelialia. It is a paradisematic country, in which roasted
        parts of sentences fly into your mouth. [1, 4]
      </MotionTypography>

      <MotionTypography
        variant="body2"
        sx={{ mb: 4, color: "text.secondary", fontSize: "14px" }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.6 }}
      >
        Even the all-powerful Pointing has no control about the blind texts it
        is an almost unorthographic life. [1, 4] One day however a small line of
        blind text by the name of Lorem Ipsum decided to leave for the far World
        of Grammar. [1, 5]
      </MotionTypography>

      <MotionButton
        variant="contained"
        size="large"
        sx={{ borderRadius: "30px", px: 4, py: 1.5, color: "whitesmoke" }}
        whileHover={{ scale: 1.05, boxShadow: "0px 5px 15px rgba(0,0,0,0.2)" }}
        whileTap={{ scale: 0.95 }}
      >
        Get in Touch
      </MotionButton>
    </MotionBox>
  );
};

export default LeftContent;
