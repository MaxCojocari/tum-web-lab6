import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useState, useEffect } from "react";
import { COURSES } from "../database";
import { Course, SortCriteria } from "../types";
import CoursesList from "../components/CoursesList";
import { sortCourses } from "../utils";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import { CART_LABEL } from "../constants";

export default function Cart({ mode, setMode }: any) {
  const theme = useTheme();
  const isNarrowScreen = useMediaQuery("(max-width:1200px)");
  const columns = isNarrowScreen ? 4 : 3;

  const [courses, setCourses] = useState<Course[]>([]);
  const [sortCriteria, setSortCriteria] = useState<SortCriteria>({
    price: false,
    popularity: false,
  });
  const [cart, setCart] = useState<number[]>([]);

  function handlePriceCheckboxChange(isChecked: boolean) {
    setSortCriteria((prevCriteria) => ({
      ...prevCriteria,
      price: isChecked,
    }));
  }

  function handlePopularityCheckboxChange(isChecked: boolean) {
    setSortCriteria((prevCriteria) => ({
      ...prevCriteria,
      popularity: isChecked,
    }));
  }

  function handleItemRemoved(courseId: number) {
    let ids = [...new Set(cart)];
    ids = ids.filter((item: number) => item !== courseId);
    ids.sort((a: number, b: number) => a - b);
    localStorage.setItem(CART_LABEL, JSON.stringify(ids));
    setCart(ids);
  }

  useEffect(() => {
    const storedIds = localStorage.getItem(CART_LABEL);
    setCart(storedIds ? JSON.parse(storedIds) : []);
  }, []);

  useEffect(() => {
    const storedIds = localStorage.getItem(CART_LABEL);
    if (storedIds) {
      const courseIds = JSON.parse(storedIds);
      const filteredCourses = courseIds
        .map((id: number) => COURSES.find((course) => course.id === id))
        .filter((course: Course) => course !== undefined);
      setCourses(sortCourses(filteredCourses, sortCriteria));
    }
  }, [cart, sortCriteria]);

  return (
    <Box>
      <Navbar setMode={setMode} mode={mode} />
      <Grid container spacing={3} sx={{ padding: "90px 90px 0px 90px" }}>
        <Grid item xs={columns}>
          <Sidebar
            onPriceCheckboxChange={handlePriceCheckboxChange}
            onPopularityCheckboxChange={handlePopularityCheckboxChange}
          />
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
            Cart
          </Typography>
          <CoursesList
            pageName={CART_LABEL}
            courses={courses}
            handleItemRemoved={handleItemRemoved}
          />
        </Grid>
      </Grid>
      <Footer />
    </Box>
  );
}
