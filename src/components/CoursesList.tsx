import { Grid } from "@mui/material";
import CourseCard from "./CourseCard";

export default function CoursesList() {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
      sx={{ paddingRight: "16px", paddingLeft: "10px" }}
    >
      {Array.from(Array(12)).map((_, index) => (
        <Grid item xs={2} sm={4} md={4} key={index}>
          <CourseCard />
        </Grid>
      ))}
    </Grid>
  );
}
