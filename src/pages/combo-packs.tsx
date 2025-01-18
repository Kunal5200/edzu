import React from "react";
import banner from "@/banner/combo.jpg";
import CustomBanner from "@/component/customBanner";
import { Box, Button, Card, Container, Grid2, Typography } from "@mui/material";
import coupon from "@/banner/coupon.png";
import { roboto } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import { data } from "@/assest/data";
import { Add } from "@mui/icons-material";
import Continuous from "@/component/marquee";
import GoldenPass from "@/component/goldenPass";
import ComboPackBenefits from "@/component/combopack/comboPackBenefits";
import Certification from "@/component/combopack/certification";
import Faq from "@/component/combopack/faq";
const Combopack = () => {
  return (
    <div>
      <CustomBanner img={banner.src} heading=" Golden Pass" />
      <Box sx={{ pt: 7, pb: 7 }}>
        <Container>
          <Grid2 container>
            <Grid2 size={{ lg: 9, xs: 12 }} margin={"auto"}>
              <Card
                sx={{
                  p: 2,
                  // background: " rgb(33,113,181)",
                  background:
                    "linear-gradient(90deg, rgba(33,113,181,1) 20%, rgba(255,215,0,1) 94%)",
                  boxShadow: "0px 0px 4px 4px rgb(0,0,0,0.10)",
                  height: { lg: "60vh", xs: "60vh" },
                  position: "relative",
                  borderRadius: 4,
                }}
              >
                <Typography
                  sx={{
                    fontSize: { lg: 25, xs: 15 },
                    fontFamily: roboto.style,
                    color: COLORS.BLACK,
                    fontWeight: 550,
                    textAlign: "center",
                    letterSpacing: 2,
                    mt: 4,
                  }}
                >
                  AN EXCLUSIVE COURSE ACCESS{" "}
                </Typography>
                <Box
                  sx={{
                    position: "absolute",
                    width: "100%",
                    top: { lg: "40%", xs: "30%" },
                  }}
                >
                  <Grid2 container sx={{ mt: 2 }} alignItems={"center"}>
                    {data.comboPackData.map((val, i) => (
                      <>
                        <Grid2 size={{ lg: 3.2, xs: 3 }}>
                          <Card
                            sx={{
                              p: 2,
                              height: 60,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              backgroundColor: COLORS.WHITE,
                            }}
                          >
                            <Box>
                              <Typography
                                sx={{
                                  fontSize: { lg: 20, xs: 12 },
                                  fontFamily: roboto.style,
                                  textAlign: "center",
                                  fontWeight: 550,
                                  color: COLORS.BLACK,
                                }}
                              >
                                {val.label}
                              </Typography>
                              <Typography
                                sx={{
                                  fontSize: 12,
                                  fontFamily: roboto.style,
                                  textAlign: "center",
                                  fontWeight: 400,
                                  color: COLORS.BLACK,
                                }}
                              >
                                {val.value}
                              </Typography>
                            </Box>
                          </Card>
                        </Grid2>
                        {i !== data.comboPackData.length - 1 && (
                          <Grid2 size={1} sx={{ textAlign: "center" }}>
                            <Add
                              htmlColor={COLORS.WHITE}
                              sx={{ fontWeight: 550, fontSize: 30 }}
                            />
                          </Grid2>
                        )}
                      </>
                    ))}
                  </Grid2>
                  <Typography
                    sx={{
                      mt: { lg: 4, xs: 2 },
                      position: "relative",
                      top: 30,
                      textAlign: "center",
                      fontFamily: roboto.style,
                      fontSize: 20,
                    }}
                  >
                    Get premium Access to 20+ Courses
                  </Typography>
                </Box>
              </Card>
              <Box sx={{ textAlign: "center" }}>
                <Button
                  sx={{
                    backgroundColor: COLORS.PRIMARY,
                    fontSize: 18,
                    fontFamily: roboto.style,
                    textTransform: "initial",
                    width: 200,
                    p: 2,
                    color: COLORS.WHITE,
                    mt: 2,
                  }}
                >
                  Join Gold{" "}
                </Button>
              </Box>
            </Grid2>
          </Grid2>
        </Container>
        <Box sx={{ pt: 7 }}>
          <GoldenPass />
        </Box>
        <Box sx={{ pt: 7 }}>
          <ComboPackBenefits />
        </Box>
        <Box sx={{ pt: 7 }}>
          <Certification />
        </Box>
        <Box sx={{}}>
          <Faq />
        </Box>
      </Box>
    </div>
  );
};

export default Combopack;
