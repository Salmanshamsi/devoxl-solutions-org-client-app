import { createTheme } from "@mui/material";

export const myContext = createTheme({
  palette: {
    primary: {
      main: "#21aeb8",
    },
    background: {
      default: "#f2f6f9",
      paper: "#02111c",
    },
    text: {
      primary: "#02111c",
      secondary: "#21aeb8",
    },
  },

  typography: {
    fontFamily: `'Poppins', 'Roboto', 'Arial', sans-serif`,
    h1: {
      fontWeight: 700,
    },
    button: {
      textTransform: "none",
    },
  },
});
