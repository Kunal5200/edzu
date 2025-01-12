import { Box, Container, Typography } from "@mui/material";
import React from "react";
import banner from "@/banner/about-banner.jpg";
import { roboto } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import AboutPage from "@/component/about1";
import Mission from "@/component/mission";
import AboutService from "@/component/about-service";
import Counter from "@/component/counter";
import aboutService from "@/banner/about-service.png";
import { data } from "@/assest/data";
import successOriented from "@/banner/success-oriented.png";
import Testimonial from "@/component/testimonial";
const About = () => {
  return (
    <div>
      <Box
        sx={{
          backgroundImage: `url(${banner.src})`,
          height: { lg: 350, xs: 200 },
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
              fontSize: { lg: 50, xs: 30 },
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
      <Box sx={{ pb: 8 }}>
        <Mission />
      </Box>
      <Box sx={{ pb: 8 }}>
        <AboutService img={aboutService} data={data.aboutServices} />
      </Box>
      <Box sx={{ pb: 8 }}>
        <Counter />
      </Box>
      <Box sx={{ pb: 8 }}>
        <AboutService img={successOriented} data={data.aboutSuccess} />
      </Box>
      <Box sx={{ pb: 8 }}>
        <Testimonial />
      </Box>
    </div>
  );
};

export default About;
