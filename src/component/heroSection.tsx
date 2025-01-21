import { Box, Button, Container, Grid2, Typography } from "@mui/material";
import React from "react";
import banner from "@/banner/sliderBg1.jpg";
import { COLORS } from "@/utils/enum";
import { SwiperSlide, Swiper } from "swiper/react";
import { roboto } from "@/utils/fonts";
import Link from "next/link";
import { data } from "@/assest/data";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css/effect-fade";
const Herosection = () => {
  return (
    <div>
      <Swiper
        loop
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 5000,
        }}
      >
        {data.bannerSection.map((val, i) => (
          <SwiperSlide>
            <Box
              sx={{
                backgroundImage: `url(${val.img})`,
                height: { lg: "100vh", xs: "60vh" },

                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  backgroundColor: "#00000050",
                  height: "100%",
                }}
              >
                <Container>
                  <Grid2 container>
                    <Grid2
                      size={{ lg: 6, xs: 12 }}
                      className="animate__animated animate__fadeInLeft"
                    >
                      <Typography
                        sx={{
                          fontSize: { lg: 50, xs: 30 },

                          color: COLORS.WHITE,
                          fontWeight: 550,
                        }}
                      >
                        Transform Your{" "}
                        <Typography
                          component={"span"}
                          sx={{
                            fontSize: { lg: 50, xs: 30 },
                            color: COLORS.TRANSPARENT,
                            fontWeight: 550,
                            WebkitTextStroke: `2px ${COLORS.WHITE}`,
                          }}
                        >
                          Future with Industry
                        </Typography>{" "}
                        Leading Programs
                      </Typography>
                      <Typography
                        sx={{
                          mt: 1,
                          fontSize: { lg: 20, xs: 15 },
                          color: COLORS.WHITE,
                        }}
                      >
                        From classroom to career readiness, we’ve got you
                        covered with expert-led training
                      </Typography>
                      <Link href={"/courses"}>
                        <Button
                          sx={{
                            fontSize: 14,
                            fontFamily: roboto.style,
                            fontWeight: 550,
                            backgroundColor: COLORS.PRIMARY,
                            p: 2,
                            color: COLORS.WHITE,
                            borderRadius: 0,
                            mt: 2,
                            border: `2px solid ${COLORS.PRIMARY}`,
                            ":hover": {
                              color: COLORS.PRIMARY,
                              backgroundColor: COLORS.TRANSPARENT,
                            },
                          }}
                        >
                          Explore Programs
                        </Button>
                      </Link>
                    </Grid2>
                  </Grid2>
                </Container>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Herosection;
