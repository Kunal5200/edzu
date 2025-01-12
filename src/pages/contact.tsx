import { COLORS } from "@/utils/enum";
import { roboto } from "@/utils/fonts";
import { Box, Container, Typography } from "@mui/material";
import React from "react";
import banner from "@/banner/contact-banner.jpg";
const Contact = () => {
  return (
    <div>
      <Box
        sx={{
          backgroundImage: `url(${banner.src})`,
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
            Contact Us
          </Typography>
        </Container>
      </Box>
    </div>
  );
};

export default Contact;
