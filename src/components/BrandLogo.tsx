import { Box, Typography, useTheme } from "@mui/material";

export default function BrandLogo() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <Box
        component="img"
        sx={{ width: 35, height: "auto" }}
        alt="CourseMe Logo"
        src="logo.svg"
      />
      <Typography
        variant="h6"
        component="p"
        sx={{
          fontWeight: 700,
          fontStyle: "normal",
          fontSize: "18px",
          color: theme.palette.mode === "light" ? "#545be8" : "text.primary",
        }}
      >
        CourseMe
      </Typography>
    </Box>
  );
}
