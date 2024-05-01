import { useEffect, useState } from "react";
import { Box, Grid, useMediaQuery } from "@mui/material";
import CourseCard from "./CourseCard";
import { Course } from "../types";
import { COURSES } from "../database";

export default function CoursesList({ pageName }: { pageName: string }) {
  const [courses, setCourses] = useState<Course[]>([]);
  const isNarrowScreen = useMediaQuery("(max-width:1200px)");
  const columns = isNarrowScreen ? 6 : 4;

  useEffect(() => {
    if (pageName.toLowerCase() === "home") {
      setCourses(COURSES);
    } else {
      const storedIds = localStorage.getItem(`${pageName.toLowerCase()}`);
      if (storedIds) {
        const courseIds = JSON.parse(storedIds);
        const filteredCourses = courseIds
          .map((id: number) => COURSES.find((course) => course.id === id))
          .filter((course: Course) => course !== undefined);
        setCourses(filteredCourses);
      } else {
        setCourses([]);
      }
    }
  }, [pageName]);

  function handleItemRemoved() {
    const cartContentIds = localStorage.getItem(pageName.toLowerCase());
    const ids = cartContentIds ? JSON.parse(cartContentIds) : [];
    const filteredCourses = ids
      .map((id: number) => COURSES.find((course) => course.id === id))
      .filter((course: Course) => course !== undefined);
    setCourses(filteredCourses);
  }

  useEffect(() => {}, [courses, pageName]);

  return (
    <Box sx={{ flexGrow: 1, paddingRight: "16px" }}>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        {courses?.map((course, index) => (
          <Grid item xs={columns} key={index}>
            <CourseCard
              pageName={pageName}
              courseInfo={course}
              isBuyCard={pageName === "Home"}
              onItemRemoved={handleItemRemoved}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
