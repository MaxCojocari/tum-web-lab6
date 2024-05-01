import {
  CardContent,
  CardMedia,
  Typography,
  Box,
  useTheme,
  styled,
  Paper,
  CardActions,
  IconButton,
} from "@mui/material";
import BuyButton from "./BuyButton";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useState } from "react";

const StyledCard = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  maxWidth: 328,
  borderRadius: 10,
  boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)",
}));

export default function CourseCard({ id }: { id: number }) {
  const theme = useTheme();
  const [isFavoriteClicked, setFavoriteClicked] = useState(false);

  return (
    <StyledCard>
      <Box sx={{ position: "relative", display: "block" }}>
        <CardMedia
          component="img"
          height="200px"
          image={`/course-${id.toString()}.png`}
          alt="Course Image"
          sx={{ borderRadius: "10px 10px 0 0" }}
        ></CardMedia>
        <Typography
          variant="h6"
          sx={{
            position: "absolute",
            right: "10px",
            bottom: "5px",
            color: "white",
            fontSize: "21.67px",
            fontWeight: "bold",
            zIndex: 100,
          }}
        >
          $ 20 USD
        </Typography>
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            height: "70px",
            backgroundImage:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))",
          }}
        ></Box>
      </Box>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "15px",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: "bold",
              fontSize: "21.67px",
              color: theme.palette.mode === "light" ? "#141e32" : "#fff",
            }}
          >
            HTML & CSS
          </Typography>
          <Typography sx={{ fontSize: "12.64px", color: "#545be8" }}>
            1,500 Views
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Typography
            sx={{ marginRight: "10px", fontSize: "16.25px", color: "#969696" }}
          >
            120 Videos
          </Typography>
          <Typography sx={{ fontSize: "16.25px", color: "#969696" }}>
            2 Teachers
          </Typography>
        </Box>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0 16px 16px 16px",
        }}
      >
        <BuyButton inCart={false} />
        <Box
          sx={{
            "& > *": {
              padding: 0,
            },
          }}
        >
          <IconButton
            aria-label="add to favorites"
            onClick={(e) => setFavoriteClicked(!isFavoriteClicked)}
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
            {isFavoriteClicked === true ? (
              <FavoriteIcon />
            ) : (
              <FavoriteBorderIcon />
            )}
          </IconButton>
          <IconButton aria-label="share" disableRipple sx={{ padding: 0 }}>
            <ShareIcon
              sx={{ fontSize: "35px", color: theme.palette.action.disabled }}
            />
          </IconButton>
        </Box>
      </CardActions>
    </StyledCard>
  );
}
