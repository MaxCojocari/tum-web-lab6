import { Box, Typography } from "@mui/material";

export default function BrandLogo() {
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
          color: "#545be8",
        }}
      >
        CourseMe
      </Typography>
    </Box>
  );
}
