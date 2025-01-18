import { COLORS } from "@/utils/enum";
import { roboto } from "@/utils/fonts";
import { BannerProps } from "@/utils/types";
import { Box, Container, Typography } from "@mui/material";
import React from "react";

const CustomBanner = ({ img, heading }: BannerProps) => {
  return (
    <div>
      <Box
        sx={{
          backgroundImage: `url(${img})`,
          height: { lg: 350, xs: 200 },
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <Container>
          <Typography
            sx={{
              fontSize: { lg: 50, xs: 30 },
              fontFamily: roboto.style,
              color: COLORS.WHITE,
              fontWeight: 600,
              textAlign: "center",
            }}
          >
            {heading}
          </Typography>
        </Container>
      </Box>
    </div>
  );
};

export default CustomBanner;
