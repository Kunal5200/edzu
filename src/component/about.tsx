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
import Link from "next/link";
const AboutSection = () => {
  const benefits = [
    {
      label: "Government Certified Certificate",
    },
    {
      label: "15+ Courses",
    },
    {
      label: "24*7 Available content",
    },
    {
      label: "Affordable prices",
    },
  ];

  const phone = useMediaQuery("(max-width:600px)");
  return (
    <div>
      <Container>
        <Grid2 container>
          <Grid2 size={{ lg: 6, xs: 12 }}>
            <Image src={aboutBanner} alt="" width={phone ? 400 : 500} />
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
              Pick a course and don’t be a fresher anymore.
            </Typography>
            <Typography
              sx={{
                fontSize: 14,
                fontFamily: roboto.style,
                fontWeight: 400,
                mt: 1,
              }}
            >
              Break free from the "fresher" tag by choosing a course that
              matches your career goals. Upskill with hands-on training,
              industry certifications, and practical knowledge to stand out in
              today's competitive job market. From web development to data
              science, the right course can transform you into a skilled
              professional.
            </Typography>
            <Grid2 container mt={2} spacing={2}>
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
            <Link href={"/courses"}>
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
                  ":hover": {
                    color: COLORS.PRIMARY,
                    backgroundColor: COLORS.TRANSPARENT,
                  },
                  border: `2px solid ${COLORS.PRIMARY}`,
                }}
              >
                View All Courses
              </Button>
            </Link>
          </Grid2>
        </Grid2>
      </Container>
    </div>
  );
};

export default AboutSection;
