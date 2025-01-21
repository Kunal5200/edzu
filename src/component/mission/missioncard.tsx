import { data } from "@/assest/data";
import { COLORS } from "@/utils/enum";
import { roboto } from "@/utils/fonts";
import { ArrowBack, ArrowForward, Person } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React, { useRef } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
const MissionCard = () => {
  const sliderRef = useRef<SwiperClass | null>(null);

  const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slideNext();
    }
  };

  const prevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slidePrev();
    }
  };
  return (
    <Box sx={{ position: "relative" }}>
      <Card sx={{ p: 4 }}>
        <Typography
          sx={{
            fontSize: 14,
            fontFamily: roboto.style,
            color: COLORS.PRIMARY,
            letterSpacing: 2,
          }}
        >
          Discover Mission
        </Typography>
        <Typography
          sx={{
            fontSize: { lg: 30, xs: 20 },
            fontFamily: roboto.style,
            color: COLORS.BLACK,
            fontWeight: 700,
            mt: 1,
          }}
        >
          Why Our Platform is Better
        </Typography>
        <IconButton
          sx={{
            position: "absolute",
            boxShadow: "0px 0px 2px 2px rgb(0,0,0,0.20)",
            left: -20,
            zIndex: 999,
            backgroundColor: COLORS.WHITE,
            top: "50%",
            ":hover": {
              backgroundColor: COLORS.PRIMARY,
              color: COLORS.WHITE,
            },
          }}
          onClick={prevSlide}
        >
          <ArrowBack />
        </IconButton>
        <IconButton
          sx={{
            position: "absolute",
            boxShadow: "0px 0px 2px 2px rgb(0,0,0,0.20)",
            right: -20,
            zIndex: 999,
            backgroundColor: COLORS.WHITE,
            top: "50%",
            ":hover": {
              backgroundColor: COLORS.PRIMARY,
              color: COLORS.WHITE,
            },
          }}
          onClick={nextSlide}
        >
          <ArrowForward />
        </IconButton>
        <Box sx={{ mt: 2 }}>
          <Swiper
            onSwiper={(swiperInstance) => {
              sliderRef.current = swiperInstance;
            }}
            modules={[Autoplay]}
            autoplay={{
              delay: 3000,
            }}
            loop
          >
            {data.missionData.map((val, i) => (
              <SwiperSlide key={i}>
                <Typography
                  sx={{
                    fontSize: 20,
                    fontFamily: roboto.style,
                    fontWeight: 550,
                  }}
                >
                  {val.heading}
                </Typography>
                <Divider sx={{ mt: 1, mb: 1 }} />
                <Typography
                  sx={{
                    fontSize: 14,
                    fontFamily: roboto.style,
                    fontWeight: 300,
                    color: COLORS.TEXT,
                    mt: 1,
                  }}
                >
                  {val.content1}
                </Typography>
                {/* <Typography
                  sx={{
                    fontSize: 14,
                    fontFamily: roboto.style,
                    fontWeight: 300,
                    color: COLORS.TEXT,
                    mt: 1,
                  }}
                >
                  {val.content2}
                </Typography> */}
                <Link href="/courses">
                  <Button
                    sx={{
                      backgroundColor: COLORS.PRIMARY,
                      color: COLORS.WHITE,
                      mt: 2,
                      borderRadius: 0,
                      p: 1,
                      fontSize: 14,
                      fontFamily: roboto.style,
                    }}
                  >
                    Learn More
                  </Button>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Card>
    </Box>
  );
};

export default MissionCard;
