import { styled } from "@mui/material/styles";
import { useState } from "react";
import {
  Badge,
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
  nrItemsCart,
  nrItemsFavorite,
  onPriceCheckboxChange,
  onPopularityCheckboxChange,
}: {
  nrItemsCart: number;
  nrItemsFavorite: number;
  onPriceCheckboxChange: (isChecked: boolean) => void;
  onPopularityCheckboxChange: (isChecked: boolean) => void;
}) {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  const CartButton = ({ to, nrItems }: any) => (
    <ListItemButton onClick={() => navigate(to)} disableRipple>
      <Badge badgeContent={nrItems} color="error" sx={{ marginRight: "15px" }}>
        <ShoppingCartCheckoutIcon />
      </Badge>

      <ListItemText primary={"Cart"} />
    </ListItemButton>
  );

  const FavoriteButton = ({ to, nrItems }: any) => (
    <ListItemButton onClick={() => navigate(to)} disableRipple>
      <Badge badgeContent={nrItems} color="error" sx={{ marginRight: "15px" }}>
        <FavoriteBorderIcon />
      </Badge>
      <ListItemText primary={"Favorite"} />
    </ListItemButton>
  );

  const HomeButton = ({ to }: any) => (
    <ListItemButton onClick={() => navigate(to)} disableRipple>
      <HomeIcon sx={{ marginRight: "15px" }} />
      <ListItemText primary={"Home"} />
    </ListItemButton>
  );

  return (
    <>
      <StyledSidebar>
        <HomeButton to="/" />
        <FavoriteButton to="/favorite" nrItems={nrItemsFavorite} />
        <CartButton to="/cart" nrItems={nrItemsCart} />
        <ListItemButton onClick={(e) => setOpen(!open)} disableRipple>
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
            <CheckboxFilter
              text="Price"
              onCheckboxChange={onPriceCheckboxChange}
            />
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
