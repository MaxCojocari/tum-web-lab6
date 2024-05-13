import { useContext, useState } from "react";
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
import { generateToken } from "../services/auth.service";

const StyledButton = styled(Button)(({ theme }: any) => ({
  backgroundColor: "#545be8",
  ...theme.typography.body2,
  height: "35px",
  color: "white",
  "&:hover": {
    backgroundColor: "#545be8",
  },
  marginTop: "10px",
}));

export default function CollapsiblePermission() {
  const {
    permissionsCollapsibleOpen,
    setPermissionsCollapsibleOpen,
    fetchAllCourses,
  } = useContext(AppContext);
  const [permissions, setPermissions] = useState<string[]>([]);

  function handleReadCheckboxChange(isChecked: boolean) {
    if (isChecked) {
      setPermissions([...permissions, "READ"]);
    } else {
      if (permissions) {
        setPermissions(permissions.filter((item) => item !== "READ"));
      }
    }
  }

  function handleWriteCheckboxChange(isChecked: boolean) {
    if (isChecked) {
      setPermissions([...permissions, "WRITE"]);
    } else {
      if (permissions) {
        setPermissions(permissions.filter((item) => item !== "WRITE"));
      }
    }
  }

  function handleUpdateCheckboxChange(isChecked: boolean) {
    if (isChecked) {
      setPermissions([...permissions, "UPDATE"]);
    } else {
      if (permissions) {
        setPermissions(permissions.filter((item) => item !== "UPDATE"));
      }
    }
  }

  function handleDeleteCheckboxChange(isChecked: boolean) {
    if (isChecked) {
      setPermissions([...permissions, "DELETE"]);
    } else {
      if (permissions) {
        setPermissions(permissions.filter((item) => item !== "DELETE"));
      }
    }
  }

  async function requestJwt() {
    await generateToken({ permissions });
    fetchAllCourses();
  }

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
          <CheckboxFilter
            text="Read"
            onCheckboxChange={handleReadCheckboxChange}
          />
          <CheckboxFilter
            text="Write"
            onCheckboxChange={handleWriteCheckboxChange}
          />
          <CheckboxFilter
            text="Update"
            onCheckboxChange={handleUpdateCheckboxChange}
          />
          <CheckboxFilter
            text="Delete"
            onCheckboxChange={handleDeleteCheckboxChange}
          />
          <Box sx={{ display: "flex", alignContents: "center" }}>
            <StyledButton variant="contained" onClick={requestJwt}>
              GET PERMISSION
            </StyledButton>
          </Box>
        </List>
      </Collapse>
    </>
  );
}
