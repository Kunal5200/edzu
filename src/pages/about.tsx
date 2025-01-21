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
import CustomBanner from "@/component/customBanner";
const About = () => {
  return (
    <div>
      <CustomBanner img={banner.src} heading="About us" />
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
      {/* <Box sx={{ pb: 8 }}>
        <AboutService img={successOriented} data={data.aboutSuccess} />
      </Box> */}
      <Box sx={{ pb: 8 }}>
        <Testimonial />
      </Box>
    </div>
  );
};

export default About;
