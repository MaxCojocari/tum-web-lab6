import { useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import {
  Box,
  createTheme,
  CssBaseline,
  Grid,
  PaletteMode,
  Shadows,
  ThemeOptions,
  ThemeProvider,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { Sidebar } from "./components/Sidebar";
import CoursesList from "./components/CoursesList";
import Footer from "./components/Footer";
import PageBlueprint from "./components/PageBlueprint";

function App() {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const getDesignTokens = (mode: PaletteMode): ThemeOptions => ({
    palette: {
      mode: mode,
      ...(mode === "light"
        ? {
            background: {
              default: "#f5f5f5",
              paper: grey[600],
            },
            primary: {
              main: "#fff",
            },
            text: {
              primary: grey[900],
              secondary: grey[800],
            },
          }
        : {}),
    },
    shadows: Array(25).fill("none") as Shadows,
    typography: {
      fontFamily: [
        "Nunito",
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        "Poppins",
      ].join(","),
    },
  });

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PageBlueprint mode={mode} setMode={setMode} pageName={"Home"} />
    </ThemeProvider>
  );
}

export default App;
