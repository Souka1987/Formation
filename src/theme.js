// import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

// A custom theme for this app
const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#26292B",
    },
    secondary: {
      main: "#f50057",
    },
    error: {
      main: "#d50000",
    },
  },
});

export default theme;
