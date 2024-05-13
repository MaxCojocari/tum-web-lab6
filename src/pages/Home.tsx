import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import CoursesList from "../components/CoursesList";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { Course, SortCriteria } from "../types";
import { sortCourses } from "../utils";
import { CART_LABEL, FAVORITE_LABEL } from "../constants";
import { AppContext } from "../App";
import { fetchCourses } from "../services/course.service";

interface CourseContextType {
  cart: number[];
  favorite: number[];
  handleBuyButtonClicked: (courseId: number, clicked: boolean) => void;
  handleFavoriteButtonClicked: (courseId: number, clicked: boolean) => void;
}

export const CourseContext = createContext<CourseContextType>({
  cart: [],
  favorite: [],
  handleBuyButtonClicked: () => {},
  handleFavoriteButtonClicked: () => {},
});

export default function Home({ mode, setMode }: any) {
  const theme = useTheme();
  const isNarrowScreen = useMediaQuery("(max-width:1200px)");
  const columns = isNarrowScreen ? 4 : 3;

  const [courses, setCourses] = useState<Course[]>([]);
  const [sortCriteria, setSortCriteria] = useState<SortCriteria>({
    price: false,
    popularity: false,
  });
  const [loading, setLoading] = useState(true);
  const { cart, favorite, setCart, setFavorite } = useContext(AppContext);

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
    let ids = [...new Set(cart)];
    if (clicked) {
      ids.push(courseId);
    } else {
      ids = ids.filter((item: number) => item !== courseId);
    }
    ids.sort((a: number, b: number) => a - b);
    setCart(ids);
    localStorage.setItem(CART_LABEL, JSON.stringify(ids));
  }

  function handleFavoriteButtonClicked(courseId: number, clicked: boolean) {
    let ids = [...new Set(favorite)];
    if (clicked) {
      ids.push(courseId);
    } else {
      ids = ids.filter((item: number) => item !== courseId);
    }
    ids.sort((a: number, b: number) => a - b);
    setFavorite(ids);
    localStorage.setItem(FAVORITE_LABEL, JSON.stringify(ids));
  }

  function fetchAllCourses() {
    fetchCourses().then((res) => setCourses(res?.data));
  }

  useEffect(() => {
    setLoading(true);
    const bruteCartIds = localStorage.getItem(CART_LABEL);
    const cartIds = bruteCartIds ? JSON.parse(bruteCartIds) : [];
    const bruteFavoriteIds = localStorage.getItem(FAVORITE_LABEL);
    const favoriteIds = bruteFavoriteIds ? JSON.parse(bruteFavoriteIds) : [];
    fetchCourses().then((res) => setCourses(res?.data));
    setCart(cartIds);
    setFavorite(favoriteIds);
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setCourses(sortCourses(courses, sortCriteria));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortCriteria]);

  const CourseListMemoized = useMemo(() => {
    return (
      <CoursesList
        pageName={"Home"}
        courses={courses}
        handleItemRemoved={() => {}}
      />
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [courses]);

  return (
    <Box>
      <Navbar setMode={setMode} mode={mode} />

      <>
        <CourseContext.Provider
          value={{
            cart,
            favorite,
            handleBuyButtonClicked,
            handleFavoriteButtonClicked,
          }}
        >
          <Grid container spacing={3} sx={{ padding: "90px 90px 0px 90px" }}>
            <Grid item xs={columns}>
              <Sidebar
                nrItemsCart={cart?.length}
                nrItemsFavorite={favorite?.length}
                onPriceCheckboxChange={handlePriceCheckboxChange}
                onPopularityCheckboxChange={handlePopularityCheckboxChange}
                onJwtChanged={fetchAllCourses}
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
                Home
              </Typography>
              {CourseListMemoized}
            </Grid>
          </Grid>
        </CourseContext.Provider>
        {!loading && <Footer />}
      </>
    </Box>
  );
}
