import { Box, Typography, Button, Stack, useTheme } from "@mui/material";
import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";
import React from "react";

const ErrorPage: React.FC = () => {
  const theme = useTheme();
  const error = useRouteError() as
    | { message: string; statusText?: string }
    | any;

  const message =
    isRouteErrorResponse(error) && error.statusText
      ? error.statusText
      : error?.message || "Something went wrong.";

  return (
    <Box
      id="error-page"
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 4,
        bgcolor: theme.palette.background.default,
        color: theme.palette.text.primary,
        textAlign: "center",
      }}
    >
      <Box>
        {/* Optional: Add your custom error image here */}
        {/* <Box component="img" src={APP_IMAGES.ERROR} alt="Error" sx={{ maxWidth: 400, mb: 4 }} /> */}

        <Typography variant="h2" sx={{ fontWeight: 700, mb: 2 }}>
          Oops!
        </Typography>

        <Typography variant="body1" sx={{ mb: 1 }}>
          Sorry, an unexpected error has occurred.
        </Typography>

        <Typography
          variant="body2"
          sx={{
            fontStyle: "italic",
            color: "text.secondary",
            mb: 4,
          }}
        >
          {message}
        </Typography>

        <Stack direction="row" spacing={2} justifyContent="center">
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/"
            sx={{ borderRadius: "30px", px: 4 }}
          >
            Back to Homepage
          </Button>

          <Button
            variant="outlined"
            color="primary"
            onClick={() => window.location.reload()}
            sx={{ borderRadius: "30px", px: 4 }}
          >
            Reload Page
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default ErrorPage;
