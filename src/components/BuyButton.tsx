import { styled, Button } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#ffa800",
  ...theme.typography.body2,
  height: "35px",
  borderRadius: 6,
  padding: "13px 22px 13px 22px",
  transition: "background-color 0.5s, color 0.5s",
  "&:hover": {
    backgroundColor: "#ffa800",
  },
}));

export default function BuyButton() {
  return (
    <StyledButton variant="contained" startIcon={<AddShoppingCartIcon />}>
      BUY
    </StyledButton>
  );
}
