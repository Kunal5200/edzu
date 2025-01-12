import { Box, Container, Typography } from "@mui/material";
import React from "react";
import banner from "@/banner/about-banner.jpg";
import { roboto } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import AboutPage from "@/component/about1";
import Mission from "@/component/mission";
const About = () => {
  return (
    <div>
      <Box
        sx={{
          backgroundImage: `url(${banner.src})`,
          height: 350,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <Container>
          <Typography
            sx={{
              fontSize: 50,
              fontFamily: roboto.style,
              color: COLORS.WHITE,
              fontWeight: 600,
              textAlign: "center",
            }}
          >
            About Us
          </Typography>
        </Container>
      </Box>
      <Box sx={{ pt: 8, pb: 8 }}>
        <AboutPage />
      </Box>
      <Box sx={{  pb: 8 }}>
        <Mission />
      </Box>
    </div>
  );
};

export default About;
