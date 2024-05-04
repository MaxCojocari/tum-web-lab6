import { Box, Grid, useMediaQuery } from "@mui/material";
import { Course } from "../types";
import CourseCard from "./CourseCard";

interface CoursesListProps {
  pageName: string;
  courses: Course[];
  handleItemRemoved: (courseId: number) => void;
}

export default function CoursesList({
  pageName,
  courses,
  handleItemRemoved,
}: CoursesListProps) {
  const isNarrowScreen = useMediaQuery("(max-width:1200px)");
  const columns = isNarrowScreen ? 6 : 4;

  return (
    <Box sx={{ flexGrow: 1, paddingRight: "16px" }}>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        {courses?.map((course, index) => (
          <Grid item xs={columns} key={index}>
            <CourseCard
              pageName={pageName}
              courseInfo={course}
              onItemRemoved={handleItemRemoved}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
