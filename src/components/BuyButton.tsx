import { styled, Button, ButtonProps } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useEffect, useState } from "react";

interface StyledButtonProps extends ButtonProps {
  inCart: boolean;
}

const StyledButton = styled(Button)<StyledButtonProps>(
  ({ theme, inCart }: any) => ({
    backgroundColor: inCart ? theme.palette.action.active : "#ffa800",
    ...theme.typography.body2,
    height: "35px",
    borderRadius: 6,
    padding: "13px 22px 13px 22px",
    transition: "background-color 0.5s, color 0.5s",
    "&:hover": {
      backgroundColor: inCart ? theme.palette.action.active : "#ffa800",
    },
  })
);

export default function BuyButton({ inCart }: { inCart: boolean }) {
  const [clicked, setClicked] = useState(inCart);
  const isAlreadyInCart = inCart || clicked;
  return (
    <StyledButton
      variant="contained"
      onClick={(e) => setClicked(!clicked)}
      startIcon={
        isAlreadyInCart ? <ShoppingCartIcon /> : <AddShoppingCartIcon />
      }
      inCart={isAlreadyInCart}
    >
      {isAlreadyInCart ? "IN CART" : "BUY"}
    </StyledButton>
  );
}
