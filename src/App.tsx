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
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import Cart from "./pages/Cart";
import React from "react";

interface AppContextType {
  cart: number[];
  favorite: number[];
  setCart: React.Dispatch<React.SetStateAction<number[]>>;
  setFavorite: React.Dispatch<React.SetStateAction<number[]>>;
}

export const AppContext = React.createContext<AppContextType>({
  cart: [],
  favorite: [],
  setCart: () => {},
  setFavorite: () => {},
});

function App() {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const [cart, setCart] = useState<number[]>([]);
  const [favorite, setFavorite] = useState<number[]>([]);

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
      <AppContext.Provider value={{ cart, favorite, setCart, setFavorite }}>
        <Routes>
          <Route path="/" element={<Home mode={mode} setMode={setMode} />} />
          <Route
            path="/favorite"
            element={
              <Favorite mode={mode} setMode={setMode} pageName="Favorite" />
            }
          />
          <Route
            path="/cart"
            element={<Cart mode={mode} setMode={setMode} pageName="Cart" />}
          />
        </Routes>
      </AppContext.Provider>
    </ThemeProvider>
  );
}

export default App;
