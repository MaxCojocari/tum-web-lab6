import { useContext } from "react";
import {
  Box,
  Button,
  Collapse,
  List,
  ListItemButton,
  ListItemText,
  styled,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import CheckboxFilter from "./CheckboxFilter";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import { AppContext } from "../App";

const StyledButton = styled(Button)(({ theme }: any) => ({
  backgroundColor: "#545be8",
  ...theme.typography.body2,
  color: "white",
  "&:hover": {
    backgroundColor: "#545be8",
  },
  marginTop: "10px",
}));

export default function CollapsiblePermission() {
  const { permissionsCollapsibleOpen, setPermissionsCollapsibleOpen } =
    useContext(AppContext);

  return (
    <>
      <ListItemButton
        onClick={(e) =>
          setPermissionsCollapsibleOpen(!permissionsCollapsibleOpen)
        }
        disableRipple
      >
        <HowToRegIcon sx={{ marginRight: "15px" }} />
        <ListItemText primary="Grant Permission" />
        {permissionsCollapsibleOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={permissionsCollapsibleOpen} timeout="auto" unmountOnExit>
        <List
          component="div"
          disablePadding
          sx={{ margin: "0 20px 10px 20px" }}
        >
          <CheckboxFilter text="Read" onCheckboxChange={() => {}} />
          <CheckboxFilter text="Write" onCheckboxChange={() => {}} />
          <CheckboxFilter text="Update" onCheckboxChange={() => {}} />
          <CheckboxFilter text="Delete" onCheckboxChange={() => {}} />
          <Box sx={{ display: "flex", alignContents: "center" }}>
            <StyledButton variant="contained">GET PERMISSION</StyledButton>
          </Box>
        </List>
      </Collapse>
    </>
  );
}
