import { COLORS } from "@/utils/enum";
import { roboto } from "@/utils/fonts";
import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import CourseCard from "./courseCard";
import { COURSESDATA } from "@/assest/coursesData";

const Courses = () => {
  return (
    <div>
      <Typography
        sx={{
          fontSize: 14,
          fontFamily: roboto.style,
          textTransform: "uppercase",
          textAlign: "center",
          color: COLORS.PRIMARY,
          letterSpacing: 3,
        }}
      >
        DISCOVER COURSES
      </Typography>
      <Typography
        sx={{
          fontSize: 30,
          fontFamily: roboto.style,
          textAlign: "center",
          color: COLORS.BLACK,
          fontWeight: 600,
          mt: 2,
        }}
      >
        Our Popular Online Courses
      </Typography>
      <Container sx={{ mt: 5 }}>
        <Box>
          <Swiper
            // slidesPerView={3}
            // spaceBetween={40}
            grabCursor
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
            {COURSESDATA.map((val, i) => (
              <SwiperSlide key={i}>
                <CourseCard
                  img={val.img}
                  title={val.title}
                  tutorName={val.tutorName}
                  price={val.price}
                  rating={val.rating}
                  category={val.category}
                  lessons={val.lessons}
                  time={val.time}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Container>
    </div>
  );
};

export default Courses;
