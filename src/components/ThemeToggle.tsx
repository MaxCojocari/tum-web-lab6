import { IconButton, useTheme } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

export default function ThemeToggle({ setMode, mode }: any) {
  const theme = useTheme();
  return (
    <IconButton
      onClick={(e) => setMode(mode === "light" ? "dark" : "light")}
      color="inherit"
    >
      {theme.palette.mode === "dark" ? (
        <Brightness7Icon />
      ) : (
        <Brightness4Icon sx={{ color: "action.active" }} />
      )}
    </IconButton>
  );
}
