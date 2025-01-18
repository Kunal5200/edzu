import { COLORS } from "@/utils/enum";
import { roboto } from "@/utils/fonts";
import {
  Box,
  Button,
  Container,
  Grid2,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import banner from "@/banner/contact-banner.jpg";
import ContactCard from "@/component/contact/contactcard";
import { data } from "@/assest/data";
import { Email, LocationOn, Phone } from "@mui/icons-material";
import CustomBanner from "@/component/customBanner";
const Contact = () => {
  const contact = [
    {
      icon: <Phone />,
      heading: "Call here",
      value: "+91 9560021531",
    },
    {
      icon: <LocationOn />,
      heading: "Location Here",
      value: "194-A, Prakash Industrial Estate, Uttar Pradesh ",
    },
    {
      icon: <Email />,
      heading: "Mail Here",
      value: "edzuedtech@gmail.com",
    },
  ];
  return (
    <div>
      {/* <Box
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
      </Box> */}
      <CustomBanner img={banner.src} heading="Contact Us" />
      <Box sx={{ pt: 6, pb: 6 }}>
        <Container>
          <Grid2 container spacing={4}>
            {contact.map((val, i) => (
              <Grid2 size={{ lg: 4, xs: 12 }} key={i}>
                <ContactCard
                  icon={val.icon}
                  heading={val.heading}
                  value={val.value}
                />
              </Grid2>
            ))}
          </Grid2>
        </Container>
      </Box>
      <Box sx={{ backgroundColor: COLORS.BANNER_COLOR, p: { lg: 5, xs: 2 } }}>
        <Container>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: 15,
              fontFamily: roboto.style,
              color: COLORS.PRIMARY,
              fontWeight: 550,
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            Contact Us
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: 30,
              fontFamily: roboto.style,

              fontWeight: 800,
              mt: 2,
            }}
          >
            Drop us Message for any Query
          </Typography>
          <Grid2 container>
            <Grid2 size={{ lg: 8, xs: 12 }} margin={"auto"}>
              <Box
                sx={{
                  boxShadow: "0px 0px 3px 3px rgb(0,0,0,0.10)",
                  margin: "auto",
                  p: 4,
                  mt: 4,
                }}
              >
                <Grid2 container spacing={4}>
                  <Grid2 size={{ lg: 6, xs: 12 }}>
                    <TextField label="Name" fullWidth />
                  </Grid2>
                  <Grid2 size={{ lg: 6, xs: 12 }}>
                    <TextField label="Email" fullWidth />
                  </Grid2>
                  <Grid2 size={{ lg: 6, xs: 12 }}>
                    <TextField label="Mobile" fullWidth />
                  </Grid2>
                  <Grid2 size={{ lg: 6, xs: 12 }}>
                    <TextField label="Subject" fullWidth />
                  </Grid2>
                  <Grid2 size={12}>
                    <TextareaAutosize
                      style={{
                        backgroundColor: COLORS.TRANSPARENT,
                        width: "100%",
                        border: "2px solid #d7d7d7",
                        resize: "none",
                      }}
                      minRows={5}
                      placeholder="Message"
                      className="textArea"
                    />
                  </Grid2>
                  <Grid2 size={12}>
                    <Button
                      sx={{
                        backgroundColor: COLORS.PRIMARY,
                        color: COLORS.WHITE,
                        fontFamily: roboto.style,
                        width: 180,
                        p: 1,
                      }}
                    >
                      Send Message
                    </Button>
                  </Grid2>
                </Grid2>
              </Box>
            </Grid2>
          </Grid2>
        </Container>
      </Box>
    </div>
  );
};

export default Contact;
