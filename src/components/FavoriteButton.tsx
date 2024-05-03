import { IconButton, useTheme } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useState } from "react";

export default function FavoriteButton({
  courseId,
  onFavoriteButtonClicked,
}: {
  courseId: number;
  onFavoriteButtonClicked: (courseId: number, clicked: boolean) => void;
}) {
  const theme = useTheme();
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    setClicked(!clicked);
    onFavoriteButtonClicked(courseId, !clicked);
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
      {clicked === true ? <FavoriteIcon /> : <FavoriteBorderIcon />}
    </IconButton>
  );
}
