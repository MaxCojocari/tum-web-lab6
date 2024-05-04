import { Course } from "./types";

export function sortCourses(
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
