import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from "react";
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
import { Course } from "./types";
import { fetchCourses } from "./services/course.service";
import { CART_LABEL, FAVORITE_LABEL, PERMISSIONS_LABEL } from "./constants";

interface AppContextType {
  cart: number[];
  favorite: number[];
  permissions: string[];
  sortCriteriaCollapsibleOpen: boolean;
  permissionsCollapsibleOpen: boolean;
  allCourses: Course[];
  setCart: Dispatch<SetStateAction<number[]>>;
  setFavorite: Dispatch<SetStateAction<number[]>>;
  setPermissions: Dispatch<SetStateAction<string[]>>;
  setSortCriteriaCollapsibleOpen: Dispatch<SetStateAction<boolean>>;
  setPermissionsCollapsibleOpen: Dispatch<SetStateAction<boolean>>;
  fetchAllCourses: () => void;
}

export const AppContext = createContext<AppContextType>({
  cart: [],
  favorite: [],
  permissions: [],
  sortCriteriaCollapsibleOpen: false,
  permissionsCollapsibleOpen: false,
  allCourses: [],
  setCart: () => {},
  setFavorite: () => {},
  setPermissions: () => {},
  setSortCriteriaCollapsibleOpen: () => {},
  setPermissionsCollapsibleOpen: () => {},
  fetchAllCourses: () => {},
});

function App() {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const [cart, setCart] = useState<number[]>([]);
  const [favorite, setFavorite] = useState<number[]>([]);
  const [allCourses, setAllCourses] = useState<Course[]>([]);
  const [permissions, setPermissions] = useState<string[]>([]);
  const [sortCriteriaCollapsibleOpen, setSortCriteriaCollapsibleOpen] =
    useState(false);
  const [permissionsCollapsibleOpen, setPermissionsCollapsibleOpen] =
    useState(false);

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

  async function fetchAllCourses() {
    fetchCourses().then((res) => {
      setAllCourses(res?.data);
    });
  }

  useEffect(() => {
    const storedIdsCart = localStorage.getItem(CART_LABEL);
    const storedIdsFavorite = localStorage.getItem(FAVORITE_LABEL);
    const storedPermissions = localStorage.getItem(PERMISSIONS_LABEL);
    setCart(storedIdsCart ? JSON.parse(storedIdsCart) : []);
    setFavorite(storedIdsFavorite ? JSON.parse(storedIdsFavorite) : []);
    setPermissions(storedPermissions ? JSON.parse(storedPermissions) : []);
    fetchAllCourses();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppContext.Provider
        value={{
          cart,
          favorite,
          permissions,
          sortCriteriaCollapsibleOpen,
          permissionsCollapsibleOpen,
          allCourses,
          setCart,
          setFavorite,
          setPermissions,
          setSortCriteriaCollapsibleOpen,
          setPermissionsCollapsibleOpen,
          fetchAllCourses,
        }}
      >
        <Routes>
          <Route path="/" element={<Home mode={mode} setMode={setMode} />} />
          <Route
            path="/favorite"
            element={<Favorite mode={mode} setMode={setMode} />}
          />
          <Route
            path="/cart"
            element={<Cart mode={mode} setMode={setMode} />}
          />
        </Routes>
      </AppContext.Provider>
    </ThemeProvider>
  );
}

export default App;
