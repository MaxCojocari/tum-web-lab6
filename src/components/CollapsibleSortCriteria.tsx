import { useState } from "react";
import { Collapse, List, ListItemButton, ListItemText } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import CheckboxFilter from "./CheckboxFilter";

export default function CollapsibleSortCriteria({
  onPriceCheckboxChange,
  onPopularityCheckboxChange,
}: {
  onPriceCheckboxChange: (isChecked: boolean) => void;
  onPopularityCheckboxChange: (isChecked: boolean) => void;
}) {
  const [open, setOpen] = useState(true);

  return (
    <>
      <ListItemButton onClick={(e) => setOpen(!open)} disableRipple>
        <FilterAltIcon sx={{ marginRight: "15px" }} />
        <ListItemText primary="Filter Courses" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List
          component="div"
          disablePadding
          sx={{ margin: "0 20px 10px 20px" }}
        >
          <CheckboxFilter
            text="Price"
            onCheckboxChange={onPriceCheckboxChange}
          />
          <CheckboxFilter
            text="Popularity"
            onCheckboxChange={onPopularityCheckboxChange}
          />
        </List>
      </Collapse>
    </>
  );
}
