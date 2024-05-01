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
import RemoveButton from "./RemoveButton";
import { Course } from "../types";
import FavoriteButton from "./FavoriteButton";

const StyledCard = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  maxWidth: 328,
  borderRadius: 10,
  boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)",
}));

export default function CourseCard({
  pageName,
  isBuyCard,
  courseInfo,
  onItemRemoved,
}: {
  pageName: string;
  isBuyCard: boolean;
  courseInfo: Course;
  onItemRemoved: () => void;
}) {
  const theme = useTheme();

  const BuyActions = () => (
    <CardActions
      sx={{
        display: "flex",
        justifyContent: "space-between",
        padding: "0 16px 16px 16px",
      }}
    >
      <BuyButton parentCourseId={courseInfo.id} />
      <Box
        sx={{
          "& > *": {
            padding: 0,
          },
        }}
      >
        <FavoriteButton parentCourseId={courseInfo.id} />
        <IconButton aria-label="share" disableRipple sx={{ padding: 0 }}>
          <ShareIcon
            sx={{ fontSize: "35px", color: theme.palette.action.disabled }}
          />
        </IconButton>
      </Box>
    </CardActions>
  );

  const RemoveAction = () => (
    <CardActions
      sx={{
        display: "flex",
        justifyContent: "space-between",
        padding: "0 16px 16px 16px",
      }}
    >
      <RemoveButton
        pageName={pageName}
        parentCourseId={courseInfo.id}
        onItemRemoved={onItemRemoved}
      />
    </CardActions>
  );

  return (
    <StyledCard>
      <Box sx={{ position: "relative", display: "block" }}>
        <CardMedia
          component="img"
          height="200px"
          image={`/${courseInfo?.img_id}.png`}
          alt="Course Image"
          sx={{ borderRadius: "10px 10px 0 0" }}
        ></CardMedia>
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Poppins, sans-serif",
            position: "absolute",
            right: "10px",
            bottom: "5px",
            color: "white",
            fontSize: "21.67px",
            fontWeight: "bold",
            zIndex: 100,
          }}
        >
          $ {courseInfo?.price} USD
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
            alignContent: "flex-start",
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
              lineHeight: "28px",
              color: theme.palette.mode === "light" ? "#141e32" : "#fff",
              maxWidth: "200px",
            }}
          >
            {courseInfo?.name}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "12.64px",
              color: "#545be8",
              marginTop: "4px",
            }}
          >
            {courseInfo?.views.toLocaleString()} Views
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Typography
            sx={{ marginRight: "10px", fontSize: "16.25px", color: "#969696" }}
          >
            {courseInfo?.nr_videos} Videos
          </Typography>
          <Typography sx={{ fontSize: "16.25px", color: "#969696" }}>
            {courseInfo?.nr_teachers} Teachers
          </Typography>
        </Box>
      </CardContent>
      {isBuyCard ? <BuyActions /> : <RemoveAction />}
    </StyledCard>
  );
}
