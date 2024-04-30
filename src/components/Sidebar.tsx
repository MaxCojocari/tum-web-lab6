import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";

const StyledSidebar = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderColor: theme.palette.divider,
  borderStyle: "solid",
  borderWidth: "2px",
  borderRadius: "6px",
}));

export function Sidebar() {
  return (
    <>
      <StyledSidebar></StyledSidebar>
    </>
  );
}
