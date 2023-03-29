import { createTheme, responsiveFontSizes } from "@mui/material";
import { red } from "@mui/material/colors";

/**
 * This is the custom theme where you can change the app's colors and typography
 * Refer: https://mui.com/customization/theming/
 */
let darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: red[200],
    },
  },
});

let lightTheme = createTheme({
  palette: {
    primary: {
      main: red[400],
    },
  },
});

darkTheme = responsiveFontSizes(darkTheme);
lightTheme = responsiveFontSizes(lightTheme);

export { darkTheme, lightTheme };
