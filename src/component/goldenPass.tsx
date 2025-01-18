import { COLORS } from "@/utils/enum";
import { roboto } from "@/utils/fonts";
import { Box, Container, Grid2, Typography } from "@mui/material";
import React from "react";
import GoldenCourseCard from "./goldenCourseCard";
import { COURSE_DATA } from "@/assest/coursesData";

const GoldenPass = () => {
  return (
    <Box sx={{ backgroundColor: COLORS.LIGHT_BLUE, p: 5 }}>
      <Typography
        sx={{
          fontSize: { lg: 30, xs: 20 },
          textAlign: "center",
          fontFamily: roboto.style,
          fontWeight: 550,
          mb: 5,
        }}
      >
        Explore the{" "}
        <Typography
          component={"span"}
          sx={{
            fontSize: { lg: 30, xs: 20 },
            color: COLORS.PRIMARY,
            fontFamily: roboto.style,
            fontWeight: 550,
          }}
        >
          Golden Pass
        </Typography>{" "}
        – Featuring 20+ Courses
      </Typography>

      <Box>
        <Container>
          <Grid2 container spacing={2}>
            {COURSE_DATA.map((val, i) => (
              <Grid2 size={{ lg: 3, xs: 6 }} key={i}>
                <GoldenCourseCard price={val.price} heading={val.heading} />
              </Grid2>
            ))}
          </Grid2>
        </Container>
      </Box>
      <Box sx={{ mt: 4 }}>
        <Typography
          sx={{
            fontSize: { lg: 20, xs: 15 },
            textAlign: "center",
            fontFamily: roboto.style,
          }}
        >
          20+ Courses worth{" "}
          <Typography
            sx={{
              textDecoration: "line-through",
              fontSize: 20,
              fontFamily: roboto.style,
            }}
            component={"span"}
          >
            102000
          </Typography>
        </Typography>
        <Typography
          sx={{
            fontSize: { lg: 40, xs: 25 },
            textAlign: "center",
            fontFamily: roboto.style,
          }}
        >
          Available at just ₹11,999/-
        </Typography>
      </Box>
    </Box>
  );
};

export default GoldenPass;
