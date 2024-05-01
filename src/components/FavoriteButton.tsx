import { IconButton, useTheme } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useEffect, useState } from "react";

export default function FavoriteButton({
  parentCourseId,
}: {
  parentCourseId: number;
}) {
  const theme = useTheme();
  const [clicked, setClicked] = useState(false);

  function addToFavorite() {
    const cartContentIds = localStorage.getItem("favorite");
    let ids = cartContentIds ? JSON.parse(cartContentIds) : [];

    if (!clicked) {
      ids.push(parentCourseId);
    } else {
      ids = ids.filter((item: number) => item !== parentCourseId);
    }
    ids.sort((a: number, b: number) => a - b);
    localStorage.setItem("favorite", JSON.stringify(ids));
    setClicked(!clicked);
  }

  useEffect(() => {
    const favoriteContentIds = localStorage.getItem("favorite");
    let ids = favoriteContentIds ? JSON.parse(favoriteContentIds) : [];
    if (ids.includes(parentCourseId)) setClicked(true);
  }, [parentCourseId]);

  return (
    <IconButton
      aria-label="add to favorites"
      onClick={addToFavorite}
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
      {clicked === true ? <FavoriteIcon /> : <FavoriteBorderIcon />}
    </IconButton>
  );
}
