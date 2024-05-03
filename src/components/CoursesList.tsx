import { Box, Grid, useMediaQuery } from "@mui/material";
import { Course } from "../types";
import CourseCard from "./CourseCard";

interface CoursesListProps {
  pageName: string;
  courses: Course[];
  handleItemRemoved: (pageName: string, courseId: number) => void;
  handleBuyButtonClicked: (courseId: number, clicked: boolean) => void;
  handleFavoriteButtonClicked: (courseId: number, clicked: boolean) => void;
}

export default function CoursesList({
  pageName,
  courses,
  handleItemRemoved,
  handleBuyButtonClicked,
  handleFavoriteButtonClicked,
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
              onBuyButtonClicked={handleBuyButtonClicked}
              onFavoriteButtonClicked={handleFavoriteButtonClicked}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
