import { useEffect, useState } from "react";
import { Box, Grid, useMediaQuery } from "@mui/material";
import CourseCard from "./CourseCard";
import { Course } from "../types";
import { COURSES } from "../database";

interface CoursesListProps {
  pageName: string;
  sortCriteria: {
    price: boolean;
    popularity: boolean;
  };
}

function sortCourses(
  courses: Course[],
  sortCriteria: { price: boolean; popularity: boolean }
): Course[] {
  if (sortCriteria.price && sortCriteria.popularity) {
    return [...courses].sort((a, b) => {
      if (a.price !== b.price) {
        return b.price - a.price;
      }
      return b.views - a.views;
    });
  } else if (sortCriteria.price) {
    return [...courses].sort((a, b) => b.price - a.price);
  } else if (sortCriteria.popularity) {
    return [...courses].sort((a, b) => b.views - a.views);
  } else {
    return courses;
  }
}

export default function CoursesList({
  pageName,
  sortCriteria,
}: CoursesListProps) {
  const [courses, setCourses] = useState<Course[]>([]);
  const isNarrowScreen = useMediaQuery("(max-width:1200px)");
  const columns = isNarrowScreen ? 6 : 4;

  function handleItemRemoved() {
    const cartContentIds = localStorage.getItem(pageName.toLowerCase());
    const ids = cartContentIds ? JSON.parse(cartContentIds) : [];
    const filteredCourses = ids
      .map((id: number) => COURSES.find((course) => course.id === id))
      .filter((course: Course) => course !== undefined);
    setCourses(filteredCourses);
  }

  useEffect(() => {
    if (pageName.toLowerCase() === "home") {
      setCourses(sortCourses(COURSES, sortCriteria));
    } else {
      const storedIds = localStorage.getItem(pageName.toLowerCase());
      if (storedIds) {
        const courseIds = JSON.parse(storedIds);
        const filteredCourses = courseIds
          .map((id: number) => COURSES.find((course) => course.id === id))
          .filter((course: Course) => course !== undefined);
        setCourses(sortCourses(filteredCourses, sortCriteria));
      } else {
        setCourses([]);
      }
    }
    console.log("CHANGED");
  }, [pageName, sortCriteria]);

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
