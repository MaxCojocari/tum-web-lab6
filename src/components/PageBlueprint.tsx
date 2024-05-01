import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Sidebar } from "./Sidebar";
import CoursesList from "./CoursesList";

export default function PageBlueprint({ mode, setMode, pageName }: any) {
  const theme = useTheme();
  const isNarrowScreen = useMediaQuery("(max-width:1200px)");
  const columns = isNarrowScreen ? 4 : 3;

  return (
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
            {pageName}
          </Typography>
          <CoursesList pageName={pageName} />
        </Grid>
      </Grid>
      <Footer />
    </Box>
  );
}
