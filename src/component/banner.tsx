import {
  Avatar,
  Box,
  Button,
  Container,
  Grid2,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import bannerImage from "@/banner/web-banner.jpg";
import { COLORS } from "@/utils/enum";
import { kanit, roboto } from "@/utils/fonts";
import Image from "next/image";
import bannerside from "@/banner/banner.png";
import { ArrowForward } from "@mui/icons-material";
const Banner = () => {
  const phone = useMediaQuery("(max-width:600px)");
  return (
    <div>
      <Box
        sx={{
          backgroundImage: `url(${bannerImage.src})`,
          height: "100vh",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container>
          <Grid2 container alignItems={"center"} spacing={10}>
            <Grid2 size={{ lg: 6, xs: 12 }}>
              <Typography
                sx={{
                  fontSize: { lg: 60, xs: 25 },
                  fontWeight: 700,
                  fontFamily: roboto.style,
                }}
              >
                Check out our{" "}
                <Typography
                  sx={{
                    fontSize: { lg: 60, xs: 25 },
                    fontWeight: 700,
                    fontFamily: roboto.style,
                    color: COLORS.PRIMARY,
                  }}
                  component={"span"}
                >
                  LMS courses
                </Typography>{" "}
                for employee training
              </Typography>
              <Typography
                sx={{
                  fontSize: 14,
                  color: COLORS.TEXT,
                  mt: 3,
                  fontFamily: roboto.style,
                }}
              >
                Curabitur arcu erat accumsan id imperdiet et porttitor at sem
                vivamus magna justo lacinia eget consectetur sed convallis at
                tellus pellentesque in ipsum id orci porta dapibus.
              </Typography>
              <Button
                sx={{
                  fontSize: 14,
                  color: COLORS.WHITE,
                  backgroundColor: COLORS.PRIMARY,
                  mt: 3,
                  p: 1.5,
                  ":hover": {
                    backgroundColor: COLORS.SECONDARY,
                    // svg: {
                    //   transform: "translateX(5px)",
                    // },
                    ".avatar": {
                      backgroundColor: COLORS.PRIMARY,
                      transform: "translateX(10px)",
                    },
                  },
                  svg: {
                    transition: "0.5s ease all",
                  },
                  ".avatar": {
                    transition: "0.5s ease all",
                  },
                  fontFamily: roboto.style,
                  borderRadius: 8,
                  width: 250,
                }}
                endIcon={
                  <Avatar
                    sx={{ backgroundColor: COLORS.SECONDARY }}
                    className="avatar"
                  >
                    <ArrowForward />
                  </Avatar>
                }
              >
                View All courses
              </Button>
            </Grid2>
            <Grid2 size={6} sx={{ textAlign: "center" }}>
              <Box sx={{width:{lg:400,xs:350}}}>
                <Image src={bannerside} alt="" className="img-fluid" />
              </Box>
            </Grid2>
          </Grid2>
        </Container>
      </Box>
    </div>
  );
};

export default Banner;
