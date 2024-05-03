import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Sidebar } from "./Sidebar";
import CoursesList from "./CoursesList";
import { useEffect, useState } from "react";
import { Course } from "../types";
import { COURSES } from "../database";
import React from "react";

interface SortCriteria {
  price: boolean;
  popularity: boolean;
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

export default function PageBlueprint({ mode, setMode, pageName }: any) {
  const theme = useTheme();
  const isNarrowScreen = useMediaQuery("(max-width:1200px)");
  const columns = isNarrowScreen ? 4 : 3;

  const [courses, setCourses] = useState<Course[]>([]);
  const [sortCriteria, setSortCriteria] = useState<SortCriteria>({
    price: false,
    popularity: false,
  });
  const [favorite, setFavorite] = useState<number[]>([]);
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

  function handleBuyButtonClicked(courseId: number, clicked: boolean) {
    let ids = cart;
    if (clicked) {
      ids.push(courseId);
    } else {
      ids = ids.filter((item: number) => item !== courseId);
    }
    ids.sort((a: number, b: number) => a - b);
    setCart(ids);
    localStorage.setItem("cart", JSON.stringify(ids));
    console.log("handleBuyButtonClicked", courseId, clicked);
  }

  function handleFavoriteButtonClicked(courseId: number, clicked: boolean) {
    let ids = favorite;
    if (clicked) {
      ids.push(courseId);
    } else {
      ids = ids.filter((item: number) => item !== courseId);
    }
    ids.sort((a: number, b: number) => a - b);
    setFavorite(ids);
    localStorage.setItem("favorite", JSON.stringify(ids));
    console.log("handleFavoriteButtonClicked", courseId, clicked);
  }

  function handleItemRemoved(pageName: string, courseId: number) {
    const cartContentIds = localStorage.getItem(pageName.toLowerCase());
    let ids = cartContentIds ? JSON.parse(cartContentIds) : [];

    ids = ids.filter((item: number) => item !== courseId);
    ids.sort((a: number, b: number) => a - b);
    localStorage.setItem(pageName.toLowerCase(), JSON.stringify(ids));

    if (pageName.toLowerCase() === "favorite") {
      setFavorite(ids);
    } else {
      setCart(ids);
    }
    console.log("handleItemRemoved", pageName, courseId);
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
  }, [pageName, sortCriteria]);

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
            {pageName}
          </Typography>
          <CoursesList
            pageName={pageName}
            courses={courses}
            handleItemRemoved={handleItemRemoved}
            handleBuyButtonClicked={handleBuyButtonClicked}
            handleFavoriteButtonClicked={handleFavoriteButtonClicked}
          />
        </Grid>
      </Grid>
      <Footer />
    </Box>
  );
}
