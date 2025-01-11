import { COLORS } from "@/utils/enum";
import { roboto } from "@/utils/fonts";
import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialCard from "./testimonialCard";
import { TestimonialData } from "@/assest/testimonialData";
import { Autoplay } from "swiper/modules";

const Testimonial = () => {
  return (
    <div>
      <Box sx={{ backgroundColor: COLORS.SECTIONBG, p: 4 }}>
        <Container>
          <Typography
            sx={{
              fontFamily: roboto.style,
              color: COLORS.PRIMARY,
              textTransform: "uppercase",
              fontSize: 14,
              letterSpacing: 2,
            }}
          >
            Testimonials
          </Typography>
          <Typography
            sx={{
              fontFamily: roboto.style,

              fontSize: 35,
              fontWeight: 700,
              mt: 1,
            }}
          >
            Happy Students Says
          </Typography>

          <Swiper
            // slidesPerView={3}
            // spaceBetween={10}
            modules={[Autoplay]}
            autoplay={{
              delay: 2000,
            }}
            grabCursor
            loop
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
          >
            {TestimonialData.map((val, i) => (
              <SwiperSlide>
                <TestimonialCard
                  img={val.img}
                  content={val.content}
                  name={val.name}
                  designation={val.designation}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </Box>
    </div>
  );
};

export default Testimonial;
