import {
  Button,
  Container,
  Grid2,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import aboutBanner from "@/banner/new-comer.png";
import Image from "next/image";
import { roboto } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import { Done } from "@mui/icons-material";
const AboutSection = () => {
  const benefits = [
    {
      label: "Money-Back Guarantee",
    },
    {
      label: "Certificate Of Completion",
    },
    {
      label: "Downloadable Resources",
    },
    {
      label: "10+ More Lessons",
    },
  ];

  const phone=useMediaQuery("(max-width:600px)")
  return (
    <div>
      <Container>
        <Grid2 container>
          <Grid2 size={{ lg: 6, xs: 12 }}>
            <Image src={aboutBanner} alt="" width={phone ?  450 :500} />
          </Grid2>
          <Grid2 size={{ lg: 6, xs: 12 }}>
            <Typography
              sx={{
                fontSize: 14,
                fontFamily: roboto.style,
                color: COLORS.PRIMARY,
                fontWeight: 550,
              }}
            >
              FEATURED COURSE
            </Typography>
            <Typography
              sx={{
                fontSize: { lg: 40, xs: 30 },
                fontFamily: roboto.style,
                fontWeight: 600,
                mt: 1,
              }}
            >
              Newcomers will benefit greatly from doing our feature courses
            </Typography>
            <Typography
              sx={{
                fontSize: 14,
                fontFamily: roboto.style,
                fontWeight: 400,
                mt: 1,
              }}
            >
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae donec velit neque auctor sit amet aliquam
              vel ullamcorper sit amet ligula quisque velit nisi pretium ut
              lacinia in elementum id enim.
            </Typography>
            <Grid2 container mt={2}>
              {benefits.map((val, i) => (
                <Grid2 size={{ lg: 6, xs: 12 }} key={i}>
                  <List>
                    <ListItem disablePadding>
                      <ListItemAvatar
                        sx={{
                          backgroundColor: COLORS.PRIMARY,
                          minWidth: 30,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          height: 30,
                          borderRadius: "50%",
                        }}
                      >
                        <Done htmlColor={COLORS.WHITE} sx={{ fontSize: 20 }} />
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <Typography
                            sx={{
                              ml: 2,
                              fontSize: 15,
                              fontFamily: roboto.style,
                            }}
                          >
                            {val.label}
                          </Typography>
                        }
                      />
                    </ListItem>
                  </List>
                </Grid2>
              ))}
            </Grid2>
            <Button
              sx={{
                mt: 2,
                fontSize: 14,
                fontFamily: roboto.style,
                textTransform: "initial",
                backgroundColor: COLORS.PRIMARY,
                color: COLORS.WHITE,
                width: 180,
                borderRadius: 0,
                p: 1,
              }}
            >
              View All Courses
            </Button>
          </Grid2>
        </Grid2>
      </Container>
    </div>
  );
};

export default AboutSection;
