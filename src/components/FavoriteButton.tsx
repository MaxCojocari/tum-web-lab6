import { IconButton } from "@mui/material";
import { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function FavoriteButton() {
  const [clicked, setClicked] = useState(false);
  return (
    <IconButton
      aria-label="add to favorites"
      onClick={(e) => setClicked(!clicked)}
      disableRipple
      sx={{
        padding: 0,
        marginRight: "10px",
        "& > *": {
          fontSize: "35px",
          color: "red",
        },
      }}
    >
      {clicked === true ? <FavoriteIcon /> : <FavoriteBorderIcon />}
    </IconButton>
  );
}
