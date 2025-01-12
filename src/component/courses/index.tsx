import { COLORS } from "@/utils/enum";
import { roboto } from "@/utils/fonts";
import { Box, Container, Grid2, Tab, Tabs, Typography } from "@mui/material";
import React, { SyntheticEvent, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import CourseCard from "./courseCard";
import { COURSESDATA } from "@/assest/coursesData";
import { data } from "@/assest/data";
import TabPanel from "../tabpanel";

const Courses = () => {
  const [value, setValue] = useState(0);

  const tabChangeHandler = (e: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
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
        <Tabs onChange={tabChangeHandler} value={value}>
          {data.courseTypeProduct.map((val, i) => (
            <Tab
              label={
                <Typography sx={{ fontSize: 14, fontFamily: roboto.style }}>
                  {val.label}
                </Typography>
              }
              key={i}
            />
          ))}
        </Tabs>
        {data.courseTypeProduct.map((_, i) => (
          <TabPanel value={value} index={i}>
            <Grid2 container sx={{ mt: 3 }} spacing={4}>
              {COURSESDATA.map((val, index) => (
                <Grid2 size={{ lg: 4, xs: 12 }}>
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
                </Grid2>
              ))}
            </Grid2>
          </TabPanel>
        ))}

        {/* <Box>
          <Swiper
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
        </Box> */}
      </Container>
    </div>
  );
};

export default Courses;
