import {
  Avatar,
  Box,
  Button,
  Container,
  Grid2,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import image1 from "@/banner/about-image1.jpg";
import image2 from "@/banner/about-image2.jpg";
import { COLORS } from "@/utils/enum";
import { roboto } from "@/utils/fonts";
import { Language } from "@mui/icons-material";
import AboutCard from "./aboutCard";
import { data } from "@/assest/data";
import Link from "next/link";
const AboutPage = () => {
  const phone = useMediaQuery("(max-width:600px)");
  return (
    <div>
      <Container>
        <Grid2 container spacing={7}>
          <Grid2 size={{ lg: 6, xs: 12 }}>
            <Box sx={{ position: "relative" }}>
              <Image src={image1} alt="" width={phone ? 380 : 450} />
              <Box
                sx={{
                  position: { lg: "absolute", xs: "initial" },
                  bottom: -50,
                  right: 0,
                  border: "10px solid #ffffff",
                }}
              >
                <Image src={image2} alt="" className="img-fluid" />
              </Box>
            </Box>
          </Grid2>
          <Grid2 size={{ lg: 6, xs: 12 }}>
            <Typography
              sx={{
                textTransform: "uppercase",
                color: COLORS.PRIMARY,
                fontSize: 14,
                fontFamily: roboto.style,
                letterSpacing: 2,
                lineHeight: 2,
              }}
            >
              About Us
            </Typography>
            <Typography
              sx={{
                color: COLORS.BLACK,
                fontSize: { lg: 45, xs: 30 },
                fontFamily: roboto.style,
                fontWeight: 700,
              }}
            >
              Learn New Skills to Go Ahead for Your Career
            </Typography>
            <Typography
              sx={{
                color: COLORS.TEXT,
                fontSize: 15,
                fontFamily: roboto.style,
                fontWeight: 300,
                mt: 2,
              }}
            >
              Unlock your potential with our expertly designed online courses
              tailored to meet industry demands. Whether you're aiming to
              upskill, switch careers, or gain a competitive edge, our
              comprehensive programs in technology, business, and marketing
              empower you to achieve your professional goals from the comfort of
              your home.
            </Typography>
            <Stack direction={"row"} alignItems={"center"} spacing={2} mt={2}>
              <Avatar sx={{ backgroundColor: COLORS.PRIMARY }}>
                <Language />
              </Avatar>
              <Typography
                sx={{ fontSize: 20, fontFamily: roboto.style, fontWeight: 600 }}
              >
                A place where you can achieve
              </Typography>
            </Stack>
            <Typography
              sx={{
                color: COLORS.TEXT,
                fontSize: 15,
                fontFamily: roboto.style,
                fontWeight: 300,
                mt: 2,
              }}
            >
              Education encompasses both the teaching and learning of knowledge,
              proper conduct, and technical competency.
            </Typography>
            <Link href={"/courses"}>
              <Button
                sx={{
                  backgroundColor: COLORS.PRIMARY,
                  borderRadius: 0,
                  color: COLORS.WHITE,
                  fontSize: 15,
                  fontFamily: roboto.style,
                  fontWeight: 500,
                  p: 1,
                  mt: 3,
                  ":hover": {
                    color: COLORS.PRIMARY,
                    backgroundColor: COLORS.TRANSPARENT,
                  },
                  border: `2px solid ${COLORS.PRIMARY}`,
                }}
              >
                Start New Course
              </Button>
            </Link>
          </Grid2>
        </Grid2>
        {/* <Grid2 container sx={{ mt: 20 }} spacing={5}>
          {data.aboutData.map((val, i) => (
            <Grid2 size={{ lg: 4, xs: 12 }} key={i}>
              <AboutCard
                heading={val.heading}
                content={val.content}
                list={val.list}
              />
            </Grid2>
          ))}
        </Grid2> */}
      </Container>
    </div>
  );
};

export default AboutPage;
