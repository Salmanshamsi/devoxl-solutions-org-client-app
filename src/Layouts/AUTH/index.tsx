import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

const AuthLayout = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 4,
      }}
    >
      <Outlet />
    </Box>
  );
};

export default AuthLayout;
