import { Box } from "@mui/material";
import React from "react";
import bannerImage from "@/banner/BG-banner.webp";
import { COLORS } from "@/utils/enum";
const Banner = () => {
  return (
    <div>
      <Box
        sx={{
          backgroundImage: `url(${bannerImage.src})`,
          height: "100vh",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box sx={{ backgroundColor: COLORS.BANNER_COLOR }}></Box>
      </Box>
    </div>
  );
};

export default Banner;
