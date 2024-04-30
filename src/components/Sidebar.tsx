import { styled } from "@mui/material/styles";
import { useState } from "react";
import {
  Box,
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import Checkbox from "@mui/material/Checkbox";

const StyledSidebar = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderColor: theme.palette.divider,
  borderStyle: "solid",
  borderWidth: "1px",
  borderRadius: "6px",
}));

const label = { inputProps: { "aria-label": "Checkbox Filter" } };

export function Sidebar() {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const NavigateButton = ({ Icon, name }: any) => (
    <ListItemButton>
      <Icon sx={{ marginRight: "15px" }} />
      <ListItemText primary={name} />
    </ListItemButton>
  );

  const CheckboxFilter = ({ text }: { text: string }) => (
    <Box
      sx={{
        display: "flex",
        alignContent: "center",
      }}
    >
      <Checkbox
        {...label}
        sx={{
          color: "#545be8",
          "&.Mui-checked": {
            color: "#545be8",
          },
        }}
      />
      <Typography
        sx={{ display: "flex", alignItems: "center", fontWeight: "300" }}
      >
        {text}
      </Typography>
    </Box>
  );

  return (
    <>
      <StyledSidebar>
        <NavigateButton Icon={HomeIcon} name={"Home"} />
        <NavigateButton Icon={FavoriteBorderIcon} name={"Favorite"} />
        <NavigateButton Icon={ShoppingCartCheckoutIcon} name={"Cart"} />
        <ListItemButton onClick={handleClick}>
          <FilterAltIcon sx={{ marginRight: "15px" }} />
          <ListItemText primary="Filter Courses" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List
            component="div"
            disablePadding
            sx={{ margin: "0 20px 10px 20px" }}
          >
            <CheckboxFilter text="Price" />
            <CheckboxFilter text="Popularity" />
          </List>
        </Collapse>
      </StyledSidebar>
    </>
  );
}
