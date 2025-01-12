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
          height: "100vh",
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
            <Grid2 size={5}>
              <MissionCard />
            </Grid2>
          </Grid2>
        </Container>
      </Box>
    </div>
  );
};

export default Mission;
