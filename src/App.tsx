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
  const isNarrowScreen = useMediaQuery("(max-width:1200px)");
  const columns = isNarrowScreen ? 4 : 3;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>
        <Navbar setMode={setMode} mode={mode} />
        <Grid container spacing={3} sx={{ padding: "90px 90px 0px 90px" }}>
          <Grid item xs={columns}>
            <Sidebar />
          </Grid>
          <Grid item xs={12 - columns}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "bold",
                fontSize: "40px",
                color: theme.palette.mode === "light" ? "#141e32" : "#fff",
                margin: "-16px 0 20px 0",
              }}
            >
              Home
            </Typography>
            <CoursesList />
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default App;
