import { useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import {
  Box,
  createTheme,
  PaletteMode,
  Shadows,
  ThemeOptions,
  ThemeProvider,
} from "@mui/material";
import { grey } from "@mui/material/colors";

function App() {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const getDesignTokens = (mode: PaletteMode): ThemeOptions => ({
    palette: {
      mode: mode,
      ...(mode === "light"
        ? {
            background: {
              default: "#fff",
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
  });

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar setMode={setMode} mode={mode} />
      </Box>
    </ThemeProvider>
  );
}

export default App;
