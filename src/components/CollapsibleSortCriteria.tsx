import { useContext } from "react";
import { Collapse, List, ListItemButton, ListItemText } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import CheckboxFilter from "./CheckboxFilter";
import { AppContext } from "../App";

export default function CollapsibleSortCriteria({
  onPriceCheckboxChange,
  onPopularityCheckboxChange,
}: {
  onPriceCheckboxChange: (isChecked: boolean) => void;
  onPopularityCheckboxChange: (isChecked: boolean) => void;
}) {
  const { sortCriteriaCollapsibleOpen, setSortCriteriaCollapsibleOpen } =
    useContext(AppContext);

  return (
    <>
      <ListItemButton
        onClick={(e) =>
          setSortCriteriaCollapsibleOpen(!sortCriteriaCollapsibleOpen)
        }
        disableRipple
      >
        <FilterAltIcon sx={{ marginRight: "15px" }} />
        <ListItemText primary="Filter Courses" />
        {sortCriteriaCollapsibleOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={sortCriteriaCollapsibleOpen} timeout="auto" unmountOnExit>
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
