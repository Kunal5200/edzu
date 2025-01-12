import bannerside from "@/banner/banner.png";
import bannerImage from "@/banner/web-banner.jpg";
import { COLORS } from "@/utils/enum";
import { roboto } from "@/utils/fonts";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { ArrowForward } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid2,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";

const Banner = () => {
  const phone = useMediaQuery("(max-width:600px)");

  return (
    <div>
      <Box
        sx={{
          // backgroundImage: `url(${bannerImage.src})`,
          height: {lg:"100vh",xs:"80vh"},
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#BDD7E7",
        }}
      >
        <Container>
          <Grid2 container alignItems={"center"} spacing={{ lg: 10, xs: 4 }}>
            <Grid2 size={{ lg: 6, xs: 12 }}>
              <Typography
                sx={{
                  fontSize: { lg: 40, xs: 25 },
                  fontWeight: 700,
                  fontFamily: roboto.style,
                }}
              >
                Transform Your{" "}
                <Typography
                  sx={{
                    fontSize: { lg: 40, xs: 25 },
                    fontWeight: 700,
                    fontFamily: roboto.style,
                    color: COLORS.PRIMARY,
                  }}
                  component={"span"}
                >
                  Future with Industry
                </Typography>{" "}
                Leading Programs
              </Typography>
              <Typography
                sx={{
                  fontSize: 14,
                  color: COLORS.TEXT,
                  mt: 3,
                  fontFamily: roboto.style,
                }}
              >
                From classroom to career readiness, we’ve got you covered with
                expert-led training
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
                Explore Programs
              </Button>
            </Grid2>
            <Grid2 size={6} sx={{ textAlign: "center" }}>
              {/* <Box sx={{ width: { lg: 400, xs: 350 } }}> */}
              {/* <Image src={"https://lottie.host/73e75ca1-0ab5-42bd-95d5-26f55b746e24/sI2fOdsWW7.lottie"} alt="" className="img-fluid" width={400} height={350} /> */}
              <iframe
                src="https://lottie.host/embed/73e75ca1-0ab5-42bd-95d5-26f55b746e24/sI2fOdsWW7.lottie"
                style={{
                  border: "none",
                  width: phone ? 400 : 550,
                  height: 350,
                }}
              ></iframe>
              {/* <DotLottieReact
                src={
                  "https://lottie.host/73e75ca1-0ab5-42bd-95d5-26f55b746e24/sI2fOdsWW7.lottie"
                }
                loop
                autoplay
                // width={500}
              /> */}
              {/* </Box> */}
            </Grid2>
          </Grid2>
        </Container>
      </Box>
    </div>
  );
};

export default Banner;
