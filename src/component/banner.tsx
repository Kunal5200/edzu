import { Box, Button, Container, Grid2, Typography } from "@mui/material";
import React from "react";
import bannerImage from "@/banner/web-banner.jpg";
import { COLORS } from "@/utils/enum";
import { kanit, roboto } from "@/utils/fonts";
import Image from "next/image";
import bannerside from "@/banner/banner.png";
const Banner = () => {
  return (
    <div>
      <Box
        sx={{
          backgroundImage: `url(${bannerImage.src})`,
          height: "90vh",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container>
          <Grid2 container alignItems={"center"}>
            <Grid2 size={6}>
              <Typography
                sx={{ fontSize: 60, fontWeight: 700, fontFamily: roboto.style }}
              >
                Check out our{" "}
                <Typography
                  sx={{
                    fontSize: 60,
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
                  mt: 2,
                }}
              >
                View All courses
              </Button>
            </Grid2>
            <Grid2 size={6}>
              <Image src={bannerside} alt="" width={500} />
            </Grid2>
          </Grid2>
        </Container>
      </Box>
    </div>
  );
};

export default Banner;
