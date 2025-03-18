import { data } from "@/assest/data";
import { TECHDATA } from "@/assest/techData";
import { COLORS, COURSE_TYPE } from "@/utils/enum";
import { roboto } from "@/utils/fonts";
import { Box, Container, Grid2, Tab, Tabs, Typography } from "@mui/material";
import { SyntheticEvent, useState } from "react";
import TabPanel from "../tabpanel";
import TechCard from "./techCard";
import { BUSINESS } from "@/assest/business";
import { useRouter } from "next/router";

const Courses = () => {
  const [value, setValue] = useState(0);
  const [courseData, setCourseData] = useState(TECHDATA);
  const router = useRouter();
  const tabChangeHandler = (e: SyntheticEvent, newValue: number) => {
    const target = e.target as HTMLElement;
    const text = target.innerText || "";
    // console.log("test",text)
    if (text === COURSE_TYPE.BUSINESS) {
      setCourseData(BUSINESS);
    }
    if (text === COURSE_TYPE.TECH) {
      setCourseData(TECHDATA);
    }
    setValue(newValue);
  };

  const changePage = (id: string) => {
    router.push(`/courses/${id}`);
  };

  return (
    <Box
      sx={{
        backgroundColor: COLORS.SECONDARY,
        pt: 5,
        pb: 5,
        height: { lg: "100vh", xs: "100%" },
      }}
    >
      <Box sx={{ pt: 5 }}>
        <Typography
          sx={{
            fontSize: 14,
            fontFamily: roboto.style,
            textTransform: "uppercase",
            textAlign: "center",
            color: COLORS.WHITE,
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
            color: COLORS.WHITE,
            fontWeight: 600,
            mt: 2,
          }}
        >
          Our Popular Online Courses
        </Typography>
        <Container sx={{ mt: 3 }}>
          <Tabs
            onChange={tabChangeHandler}
            value={value}
            sx={{
              "& .Mui-selected": {
                color: `${COLORS.WHITE} !important`,
              },
              "& .MuiTabs-indicator": {
                backgroundColor: COLORS.WHITE,
              },
            }}
          >
            {data.courseTypeProduct.map((val, i) => (
              <Tab
                label={
                  <Typography sx={{ fontSize: 18, fontFamily: roboto.style }}>
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
                {courseData.map((val, index) => (
                  <Grid2
                    size={{ lg: 3, xs: 12 }}
                    data-aos="fade-up"
                    key={index}
                  >
                    <TechCard
                      img={val.img}
                      title={val.title}
                      course={val.course}
                      onClick={() => changePage(val.id)}
                      id={val.id}
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
      </Box>
    </Box>
  );
};

export default Courses;
