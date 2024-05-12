import { styled } from "@mui/material/styles";
import { Badge, ListItemButton, ListItemText, Paper } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { useNavigate } from "react-router-dom";
import CollapsibleSortCriteria from "./CollapsibleSortCriteria";
import CollapsiblePermission from "./CollapsiblePermissions";

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

        <CollapsibleSortCriteria
          onPriceCheckboxChange={onPriceCheckboxChange}
          onPopularityCheckboxChange={onPopularityCheckboxChange}
        />
        <CollapsiblePermission />
      </StyledSidebar>
    </>
  );
}
