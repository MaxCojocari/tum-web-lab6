import { IconButton, useTheme } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useContext, useState } from "react";
import { CourseContext } from "../pages/Home";

export default function FavoriteButton({ courseId }: { courseId: number }) {
  const theme = useTheme();
  const { favorite, handleFavoriteButtonClicked } = useContext(CourseContext);
  const [clicked, setClicked] = useState(favorite.includes(courseId));

  function handleClick() {
    setClicked(!clicked);
    handleFavoriteButtonClicked(courseId, !clicked);
  }

  return (
    <IconButton
      aria-label="add to favorites"
      onClick={handleClick}
      disableRipple
      sx={{
        padding: 0,
        marginRight: "10px",
        "& > *": {
          fontSize: "35px",
          color: theme.palette.action.disabled,
        },
      }}
    >
      {clicked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
    </IconButton>
  );
}
