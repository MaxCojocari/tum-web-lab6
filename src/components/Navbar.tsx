import { Mail, Notifications, Search } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import BrandLogo from "./BrandLogo";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "white",
  padding: "6px 15px 6px 15px",
});

const CustomSearch = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "white",
  padding: "0 10px",
  width: "30%",
  borderRadius: "10px",
  border: "1px solid #ccc",
  minWidth: "100px",
});

const Icons = styled(Box)({
  display: "none",
  alignItems: "center",
  gap: "20px",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
});

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <BrandLogo />
        <CustomSearch>
          <InputBase placeholder="search..." />
          <Search sx={{ color: "gray", cursor: "pointer" }} />
        </CustomSearch>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail sx={{ color: "gray", background: "red" }} />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications sx={{ color: "gray", background: "red" }} />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            onClick={(e) => setOpen(true)}
          />
        </Icons>
        <UserBox onClick={(e: any) => setOpen(true)}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <Typography>John</Typography>
        </UserBox>
      </StyledToolbar>
    </AppBar>
  );
}
