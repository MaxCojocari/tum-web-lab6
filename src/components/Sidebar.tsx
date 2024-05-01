import { styled } from "@mui/material/styles";
import { useState } from "react";
import {
  Collapse,
  List,
  ListItemButton,
  ListItemText,
  Paper,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { useNavigate } from "react-router-dom";
import CheckboxFilter from "./CheckboxFilter";

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

export function Sidebar({
  onPriceCheckboxChange,
  onPopularityCheckboxChange,
}: {
  onPriceCheckboxChange: (isChecked: boolean) => void;
  onPopularityCheckboxChange: (isChecked: boolean) => void;
}) {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  const NavigateButton = ({ Icon, name, to }: any) => (
    <ListItemButton onClick={() => navigate(to)}>
      <Icon sx={{ marginRight: "15px" }} />
      <ListItemText primary={name} />
    </ListItemButton>
  );

  return (
    <>
      <StyledSidebar>
        <NavigateButton Icon={HomeIcon} name={"Home"} to="/" />
        <NavigateButton
          Icon={FavoriteBorderIcon}
          name={"Favorite"}
          to="/favorite"
        />
        <NavigateButton
          Icon={ShoppingCartCheckoutIcon}
          name={"Cart"}
          to="/cart"
        />
        <ListItemButton onClick={(e) => setOpen(!open)}>
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
            <CheckboxFilter text="Price" onCheckboxChange={onPriceCheckboxChange} />
            <CheckboxFilter
              text="Popularity"
              onCheckboxChange={onPopularityCheckboxChange}
            />
          </List>
        </Collapse>
      </StyledSidebar>
    </>
  );
}
