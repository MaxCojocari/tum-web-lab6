import styled from "@emotion/styled";
import { AppBar, Toolbar } from "@mui/material";
import BrandLogo from "./BrandLogo";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "red",
  boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)",
});

export default function Navbar() {
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <BrandLogo />
      </StyledToolbar>
    </AppBar>
  );
}
