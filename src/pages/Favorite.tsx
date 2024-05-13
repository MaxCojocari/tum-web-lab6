import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useState, useEffect, useContext } from "react";
import { Course, SortCriteria } from "../types";
import CoursesList from "../components/CoursesList";
import { sortCourses } from "../utils";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import { FAVORITE_LABEL } from "../constants";
import { AppContext } from "../App";

export default function Favorite({ mode, setMode }: any) {
  const theme = useTheme();
  const isNarrowScreen = useMediaQuery("(max-width:1200px)");
  const columns = isNarrowScreen ? 4 : 3;

  const [courses, setCourses] = useState<Course[]>([]);
  const [sortCriteria, setSortCriteria] = useState<SortCriteria>({
    price: false,
    popularity: false,
  });
  const [loading, setLoading] = useState(true);
  const { cart, favorite, setFavorite, allCourses } = useContext(AppContext);

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
    let ids = [...new Set(favorite)];
    ids = ids.filter((item: number) => item !== courseId);
    ids.sort((a: number, b: number) => a - b);
    localStorage.setItem(FAVORITE_LABEL, JSON.stringify(ids));
    setFavorite(ids);
  }

  function syncCourses(storedIds: string | null) {
    if (storedIds) {
      const courseIds = JSON.parse(storedIds);
      const filteredCourses = courseIds
        .map((id: number) => allCourses?.find((course) => course.id === id))
        .filter((course: Course) => course !== undefined);
      setCourses(sortCourses(filteredCourses, sortCriteria));
    }
  }

  useEffect(() => {
    setLoading(true);
    const storedIds = localStorage.getItem(FAVORITE_LABEL);
    syncCourses(storedIds);
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const storedIds = localStorage.getItem(FAVORITE_LABEL);
    syncCourses(storedIds);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [favorite, sortCriteria, allCourses]);

  return (
    <Box>
      <Navbar setMode={setMode} mode={mode} />
      <Grid container spacing={3} sx={{ padding: "90px 90px 0px 90px" }}>
        <Grid item xs={columns}>
          <Sidebar
            nrItemsCart={cart?.length}
            nrItemsFavorite={favorite?.length}
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
            Favorite
          </Typography>
          <CoursesList
            pageName={FAVORITE_LABEL}
            courses={courses}
            handleItemRemoved={handleItemRemoved}
          />
        </Grid>
      </Grid>
      {!loading && <Footer />}
    </Box>
  );
}
