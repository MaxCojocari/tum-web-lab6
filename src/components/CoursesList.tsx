import { Box, Grid, useMediaQuery } from "@mui/material";
import CourseCard from "./CourseCard";

export default function CoursesList() {
  const isNarrowScreen = useMediaQuery("(max-width:1200px)");
  const columns = isNarrowScreen ? 6 : 4;

  return (
    <Box sx={{ flexGrow: 1, paddingRight: "16px" }}>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        {Array.from(Array(12)).map((_, index) => (
          <Grid item xs={columns} key={index}>
            <CourseCard id={(index % 4) + 1} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
