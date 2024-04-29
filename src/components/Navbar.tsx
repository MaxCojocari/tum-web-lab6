import { AccountCircle, Notifications, Search } from "@mui/icons-material";
import { AppBar, Badge, Box, InputBase, styled, Toolbar } from "@mui/material";
import BrandLogo from "./BrandLogo";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  height: "80px",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "white",
  padding: "0 90px 0 90px !important",
  boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15) !important",
});

const CustomSearch = styled("div")({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  backgroundColor: "white",
  padding: "0 10px",
  width: "30%",
  height: "50%",
  borderRadius: "10px",
  border: "1px solid #ccc",
  minWidth: "100px",
  gap: "20px",
});

const Icons = styled(Box)({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  gap: "40px",
});

export default function Navbar() {
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <BrandLogo />
        <CustomSearch>
          <Search sx={{ color: "gray", cursor: "pointer" }} />
          <InputBase placeholder="Search..." />
        </CustomSearch>
        <Icons>
          <Badge badgeContent={2} color="error">
            <Notifications
              sx={{
                cursor: "pointer",
                color: "gray",
                fontSize: "30px",
              }}
            />
          </Badge>
          <AccountCircle
            sx={{ color: "gray", fontSize: "40px", cursor: "pointer" }}
          />
        </Icons>
      </StyledToolbar>
    </AppBar>
  );
}
