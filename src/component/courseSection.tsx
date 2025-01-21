import { data } from "@/assest/data";
import { COLORS } from "@/utils/enum";
import { roboto } from "@/utils/fonts";
import { Add, DoneAll } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid2,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const CourseSection = () => {
  return (
    <div>
      <Box>
        <Grid2 container>
          {data.courseSection.map((val, i) => (
            <Grid2
              size={{ lg: 3, xs: 6 }}
              key={i}
              sx={{
                backgroundColor: val.color,
                px: { lg: 4, xs: 2 },
                pt: { lg: 4, xs: 2 },
                pb: { lg: 4, xs: 2 },
              }}
            >
              <Typography
                sx={{
                  color: val.textColor,
                  fontSize: { lg: 30, xs: 18 },
                  fontFamily: roboto.style,
                  fontWeight: 550,
                  textAlign:"center"
                }}
              >
                {val.heading}
              </Typography>
              <Typography
                sx={{
                  color: val.textColor,
                  fontSize: 20,
                  fontFamily: roboto.style,
                  fontWeight: 400,
                  mt: 2,
                  textAlign:"center"
                }}
              >
                {val.description}
              </Typography>
              {/* <Button
                sx={{
                  fontSize: 12,
                  fontFamily: roboto.style,
                  fontWeight: 500,
                  p: 0.8,
                  textTransform: "initial",
                  color: val.textColor,
                  mt: 1,
                }}
                endIcon={<Add />}
              >
                View Courses
              </Button> */}
            </Grid2>
          ))}
        </Grid2>
      </Box>
    </div>
  );
};

export default CourseSection;
