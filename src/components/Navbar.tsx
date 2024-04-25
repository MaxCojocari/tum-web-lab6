import styled from "@emotion/styled";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Toolbar,
  Typography,
} from "@mui/material";
import BrandLogo from "./BrandLogo";
import { Mail, Notifications } from "@mui/icons-material";
import React, { useState } from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "white",
  padding: "6px",
});

const Search = styled("div")({
  backgroundColor: "white",
  padding: "0 10px",
  width: "50%",
  borderRadius: "10px",
  border: "1px solid #ccc",
});

const Icons = styled(Box)({
  display: "none",
  alignItems: "center",
  gap: "20px",
});

export default function Navbar() {
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <BrandLogo />
        <Search>
          <InputBase placeholder="search..." />
        </Search>
        <Icons></Icons>
      </StyledToolbar>
    </AppBar>
  );
}
