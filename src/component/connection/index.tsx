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
          <Grid2 size={{ lg: 6, xs: 12 }}>
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
                fontSize: { lg: 40, xs: 30 },
                fontFamily: roboto.style,
                fontWeight: 700,
                mt: 2,
              }}
            >
              What We Offer For Growth
            </Typography>
          </Grid2>
          <Grid2 size={{ lg: 6, xs: 12 }}>
            {/* <Typography
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
            </Typography> */}
            <Typography
              sx={{
                color: COLORS.TEXT,
                fontFamily: roboto.style,
                fontWeight: 400,
                fontSize: 15,
              }}
            >
              Our EdTech platform empowers growth through expert-designed
              courses, hands-on training, and globally recognized
              certifications. With flexible learning, mentorship, live projects,
              internships, and career support, we prepare you for success in
              fields like web development, data science, and finance. Transform
              into a skilled professional and achieve your career aspirations
              with us.
            </Typography>
          </Grid2>
        </Grid2>
        <Grid2 container mt={5} spacing={5}>
          {data.connectionData.map((val, i) => (
            <Grid2 size={{ lg: 4, xs: 12 }} key={i}>
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
