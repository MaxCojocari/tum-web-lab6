import { styled, Button, ButtonProps } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useEffect, useState } from "react";

interface StyledButtonProps extends ButtonProps {
  startIcon: any;
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

export default function BuyButton({
  parentCourseId,
}: {
  parentCourseId: number;
}) {
  const [clicked, setClicked] = useState(false);

  function addToCart() {
    const cartContentIds = localStorage.getItem("cart");
    let ids = cartContentIds ? JSON.parse(cartContentIds) : [];

    if (!clicked) {
      ids.push(parentCourseId);
    } else {
      ids = ids.filter((item: number) => item !== parentCourseId);
    }
    ids.sort((a: number, b: number) => a - b);
    localStorage.setItem("cart", JSON.stringify(ids));
    setClicked(!clicked);
  }

  useEffect(() => {
    const cartContentIds = localStorage.getItem("cart");
    let ids = cartContentIds ? JSON.parse(cartContentIds) : [];
    if (ids.includes(parentCourseId)) setClicked(true);
  }, [parentCourseId]);

  return (
    <StyledButton
      variant="contained"
      onClick={addToCart}
      startIcon={clicked ? <ShoppingCartIcon /> : <AddShoppingCartIcon />}
      inCart={clicked}
    >
      {clicked ? "IN CART" : "BUY"}
    </StyledButton>
  );
}
