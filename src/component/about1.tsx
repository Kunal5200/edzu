import {
  Avatar,
  Box,
  Button,
  Container,
  Grid2,
  Stack,
  Typography,
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
const AboutPage = () => {
  return (
    <div>
      <Container>
        <Grid2 container spacing={7}>
          <Grid2 size={6}>
            <Box sx={{ position: "relative" }}>
              <Image src={image1} alt="" width={450} />
              <Box
                sx={{
                  position: "absolute",
                  bottom: -50,
                  right: 0,
                  border: "10px solid #ffffff",
                }}
              >
                <Image src={image2} alt="" />
              </Box>
            </Box>
          </Grid2>
          <Grid2 size={6}>
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
                fontSize: 45,
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
                fontWeight: 400,
                mt: 2,
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              nisi ut aliquip ex ea commodo consequat.
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
                fontWeight: 400,
                mt: 2,
              }}
            >
              Education encompasses both the teaching and learning of knowledge,
              proper conduct, and technical competency.
            </Typography>
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
              }}
            >
              Start New Course
            </Button>
          </Grid2>
        </Grid2>
        <Grid2 container sx={{ mt: 20 }} spacing={5}>
          {data.aboutData.map((val, i) => (
            <Grid2 size={4} key={i}>
              <AboutCard
                heading={val.heading}
                content={val.content}
                list={val.list}
              />
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </div>
  );
};

export default AboutPage;
