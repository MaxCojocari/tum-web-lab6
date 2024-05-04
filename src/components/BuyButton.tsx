import { styled, Button, ButtonProps } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext, useState } from "react";
import { CourseContext } from "../pages/Home";

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

export default function BuyButton({ courseId }: { courseId: number }) {
  const { cart, handleBuyButtonClicked } = useContext(CourseContext);
  const [clicked, setClicked] = useState(cart.includes(courseId));

  function handleClick() {
    handleBuyButtonClicked(courseId, !clicked);
    setClicked(!clicked);
  }

  return (
    <StyledButton
      variant="contained"
      onClick={handleClick}
      startIcon={clicked ? <ShoppingCartIcon /> : <AddShoppingCartIcon />}
      inCart={clicked}
    >
      {clicked ? "IN CART" : "BUY"}
    </StyledButton>
  );
}
