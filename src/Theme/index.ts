import { createTheme } from "@mui/material";

export const myContext = createTheme({
  palette: {
    primary: {
      main: "#21aeb8",
    },
    background: {
      default: "#031d29",
      paper: "#001d2a",
    },
    text: {
      primary: "#212121",
      secondary: "#757575",
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
