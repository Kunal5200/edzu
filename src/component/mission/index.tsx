import { Box, Container, Grid2 } from "@mui/material";
import React from "react";
import banner from "@/banner/mission-bg.jpg";
import MissionCard from "./missioncard";
const Mission = () => {
  return (
    <div>
      <Box
        sx={{
          backgroundImage: `url(${banner.src})`,
          height: {lg:"100vh",xs:"100vh"},
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <Container>
          <Grid2 container>
            <Grid2 size={{ lg: 6, xs: 12 }}>
              <MissionCard />
            </Grid2>
          </Grid2>
        </Container>
      </Box>
    </div>
  );
};

export default Mission;
