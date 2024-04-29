import { AccountCircle, Notifications, Search } from "@mui/icons-material";
import { AppBar, Badge, Box, InputBase, styled, Toolbar } from "@mui/material";
import BrandLogo from "./BrandLogo";
import ThemeToggle from "./ThemeToggle";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  height: "80px",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "background.default",
  padding: "0 90px 0 90px !important",
  boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15) !important",
});

const CustomSearch = styled("div")({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  backgroundColor: "background.default",
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

export default function Navbar({ setMode, mode }: any) {
  return (
    <AppBar position="sticky" sx={{ bgcolor: "background.primary" }}>
      <StyledToolbar>
        <BrandLogo />
        <CustomSearch>
          <Search sx={{ color: "action.active", cursor: "pointer" }} />
          <InputBase placeholder="Search..." />
        </CustomSearch>
        <Icons>
          <Badge badgeContent={2} color="error">
            <Notifications
              sx={{
                cursor: "pointer",
                color: "action.active",
                fontSize: "30px",
              }}
            />
          </Badge>
          <AccountCircle
            sx={{
              color: "action.active",
              fontSize: "40px",
              cursor: "pointer",
            }}
          />
          <ThemeToggle setMode={setMode} mode={mode} />
        </Icons>
      </StyledToolbar>
    </AppBar>
  );
}
