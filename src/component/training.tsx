import {
  Button,
  Container,
  Grid2,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import subfooter from "@/banner/subFooter.png";
import Image from "next/image";
import { COLORS } from "@/utils/enum";
import { roboto } from "@/utils/fonts";
const Training = () => {
  const phone = useMediaQuery("(max-width:600px)");
  return (
    <div>
      <Container>
        <Grid2 container>
          <Grid2 size={{ lg: 6, xs: 12 }}>
            <Image src={subfooter} alt="" width={phone ? 400 : 500} />
          </Grid2>
          <Grid2 size={{ lg: 6, xs: 12 }}>
            <Typography
              sx={{
                fontSize: 14,
                color: COLORS.PRIMARY,
                textTransform: "uppercase",
                fontFamily: roboto.style,
                letterSpacing: 2,
              }}
            >
              Course
            </Typography>
            <Typography
              sx={{
                fontSize: {lg:40,xs:30},
                fontFamily: roboto.style,
                fontWeight: 550,
                mt: 1,
              }}
            >
              All kinds of online employee training courses at low cost
            </Typography>
            <Typography
              sx={{
                fontSize: 15,
                fontFamily: roboto.style,
                fontWeight: 400,
                color: COLORS.TEXT,
                mt: 1,
                lineHeight: 2,
              }}
            >
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae donec velit neque auctor sit amet aliquam
              vel ullamcorper sit amet ligula quisque velit nisi pretium ut
              lacinia in elementum id enim.
            </Typography>
            <Button
              sx={{
                fontSize: 14,
                fontFamily: roboto.style,
                color: COLORS.WHITE,
                backgroundColor: COLORS.PRIMARY,
                borderRadius:0,
                p: 1,
                width: 150,
                mt: 2,
              }}
            >
              Start Courses
            </Button>
          </Grid2>
        </Grid2>
      </Container>
    </div>
  );
};

export default Training;
