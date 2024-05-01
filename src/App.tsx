import { useMemo, useState } from "react";
import {
  createTheme,
  CssBaseline,
  PaletteMode,
  Shadows,
  ThemeOptions,
  ThemeProvider,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import PageBlueprint from "./components/PageBlueprint";
import { Route, Routes } from "react-router-dom";

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
      <Routes>
        <Route
          path="/"
          element={
            <PageBlueprint mode={mode} setMode={setMode} pageName="Home" />
          }
        />
        <Route
          path="/favorite"
          element={
            <PageBlueprint mode={mode} setMode={setMode} pageName="Favorite" />
          }
        />
        <Route
          path="/cart"
          element={
            <PageBlueprint mode={mode} setMode={setMode} pageName="Cart" />
          }
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
