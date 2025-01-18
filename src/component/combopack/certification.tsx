import { Box, Container, Grid2, Typography } from "@mui/material";
import React from "react";
import bgImage from "@/banner/mentor-bg-img.jpg";
import { roboto } from "@/utils/fonts";
import Image from "next/image";
import image from "@/certificate/img-1.jpg";
import { data } from "@/assest/data";
const Certification = () => {
  return (
    <div>
      <Box
        sx={{
          backgroundImage: `url(${bgImage.src})`,
          height: "100%",

          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          pt: 4,
          pb: 4,
        }}
      >
        <Container>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: { lg: 30, xs: 20 },
              fontFamily: roboto.style,
              fontWeight: 600,
            }}
          >
            Certify your Success
          </Typography>
          <Grid2 container spacing={5} mt={3}>
            {data.certificateData.map((val, i) => (
              <Grid2 size={{ lg: 3, xs: 6}} key={i}>
                <Image src={val.img} alt="" className="img-fluid" />
              </Grid2>
            ))}
          </Grid2>
        </Container>
      </Box>
    </div>
  );
};

export default Certification;
