import { Box, Typography, Link, styled } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import BrandLogo from "./BrandLogo";

const StyledFooter = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  backgroundColor: theme.palette.mode === "dark" ? "#272727" : "#393e46",
  padding: "50px 90px 50px 90px",
  marginTop: "110px",
  width: "100%",
}));

export default function Footer() {
  return (
    <StyledFooter>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <BrandLogo color={"#fff"} />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: "30px",
        }}
      >
        <Typography
          variant="body2"
          sx={{ color: "#f4f4f4", fontSize: "14px", fontWeight: 200 }}
        >
          © 2024 CourseMe Inc. All rights reserved.
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "20px",
          }}
        >
          <Link
            href="https://www.facebook.com/Coursera/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon sx={{ color: "white", fontSize: "35px" }} />
          </Link>
          <Link
            href="https://twitter.com/coursera"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon sx={{ color: "white", fontSize: "35px" }} />
          </Link>
          <Link
            href="https://www.linkedin.com/company/coursera/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon sx={{ color: "white", fontSize: "35px" }} />
          </Link>
          <Link
            href="https://www.instagram.com/coursera/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon sx={{ color: "white", fontSize: "35px" }} />
          </Link>
        </Box>
      </Box>
    </StyledFooter>
  );
}
