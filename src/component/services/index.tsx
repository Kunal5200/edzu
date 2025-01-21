import { Container, Grid2 } from "@mui/material";
import React from "react";
import ServicesCard from "./services-card";
import { data } from "@/assest/data";

const Services = () => {
  return (
    <div>
      <Container>
        <Grid2 container spacing={4}>
          {data.serviceData.map((val, i) => (
            <Grid2 size={{ lg: 4, xs: 12 }} key={i}>
              <ServicesCard img={val.img} label={val.label} />
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </div>
  );
};

export default Services;
