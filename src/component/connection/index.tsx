import { COLORS } from "@/utils/enum";
import { roboto } from "@/utils/fonts";
import { Container, Grid2, Typography } from "@mui/material";
import React from "react";
import ConnectionCard from "./connectionCard";
import { data } from "@/assest/data";

const Connection = () => {
  return (
    <div>
      <Container>
        <Grid2 container>
          <Grid2 size={6}>
            <Typography
              sx={{
                textTransform: "uppercase",
                fontSize: 14,
                fontFamily: roboto.style,
                color: COLORS.PRIMARY,
                letterSpacing: 2,
              }}
            >
              MAKE CONNECTIONS
            </Typography>
            <Typography
              sx={{
                fontSize: 40,
                fontFamily: roboto.style,
                fontWeight: 700,
                mt: 2,
              }}
            >
              What We Offer For Growth
            </Typography>
          </Grid2>
          <Grid2 size={6}>
            <Typography
              sx={{
                color: COLORS.TEXT,
                fontFamily: roboto.style,
                fontWeight: 400,
                fontSize: 15,
              }}
            >
              Nulla quis lorem ut libero malesuada feugiat. Pellentesque in
              ipsum id orci porta dapibus. Donec sollicitudin molestie
              malesuada.
            </Typography>
            <Typography
              sx={{
                color: COLORS.TEXT,
                fontFamily: roboto.style,
                fontWeight: 400,
                fontSize: 15,
                mt: 2,
              }}
            >
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam
              vel, ullamcorper sit amet ligula. Quisque velit nisi, pretium ut
              lacinia in, elementum id enim.
            </Typography>
          </Grid2>
        </Grid2>
        <Grid2 container mt={5} spacing={5}>
          {data.connectionData.map((val, i) => (
            <Grid2 size={4} key={i}>
              <ConnectionCard
                number={val.number}
                heading={val.heading}
                content={val.content}
              />
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </div>
  );
};

export default Connection;