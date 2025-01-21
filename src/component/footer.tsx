import { data } from "@/assest/data";
import { COLORS } from "@/utils/enum";
import { roboto } from "@/utils/fonts";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid2,
  IconButton,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

const Footer = () => {
  const router = useRouter();

  const changePath = (path: string | undefined) => {
    router.push(path ? path : "");
  };

  return (
    <div>
      <Box
        sx={{
          backgroundColor: COLORS.FOOTERBG,
          p: 3,
          height: { lg: "100%", xs: "100%" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container>
          <Grid2 container spacing={5}>
            <Grid2 size={{ lg: 3, xs: 12 }}>
              <Typography
                sx={{
                  fontSize: 20,
                  fontFamily: roboto.style,
                  color: COLORS.WHITE,
                  mb: 1,
                  fontWeight: 550,
                }}
              >
                Contact Us
              </Typography>
              <Divider
                sx={{ borderColor: COLORS.PRIMARY, width: 100, borderWidth: 1 }}
              />
              <List>
                {data.footerContact.map((val, i) => (
                  <ListItemButton key={i} sx={{ padding: 1 }}>
                    <ListItemAvatar>
                      <val.icon htmlColor={COLORS.WHITE} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <Typography
                          sx={{
                            fontSize: 13,
                            fontFamily: roboto.style,
                            color: COLORS.WHITE,
                          }}
                        >
                          {val.label}
                        </Typography>
                      }
                    />
                  </ListItemButton>
                ))}
              </List>
              <Stack direction={"row"} alignItems={"center"} spacing={3} mt={1}>
                {data.socialIcons.map((val, i) => (
                  <IconButton
                    sx={{
                      border: "1px solid #ffffff",
                      borderRadius: 0,
                      "& svg": {
                        color: COLORS.PRIMARY,
                        fontSize: 18,
                      },
                      backgroundColor: COLORS.WHITE,
                      ":hover": {
                        backgroundColor: COLORS.PRIMARY,
                        "& svg": {
                          color: COLORS.WHITE,
                        },
                        border: `1px solid ${COLORS.PRIMARY}`,
                      },
                    }}
                  >
                    <val.icon />
                  </IconButton>
                ))}
              </Stack>
            </Grid2>
            {data.footerLinks.map((val, i) => (
              <Grid2 size={{ lg: 3, xs: 6 }}>
                <Typography
                  sx={{
                    fontSize: 20,
                    fontFamily: roboto.style,
                    color: COLORS.WHITE,
                    mb: 1,
                    fontWeight: 550,
                  }}
                >
                  {val.heading}
                </Typography>
                <Divider
                  sx={{
                    borderColor: COLORS.PRIMARY,
                    width: 100,
                    borderWidth: 1,
                  }}
                />
                <List>
                  {val.list.map((item, index) => (
                    <ListItemButton
                      key={i}
                      sx={{ padding: 1 }}
                      onClick={() => changePath(item.url)}
                    >
                      <ListItemAvatar sx={{ minWidth: { lg: 20, xs: 20 } }}>
                        <Box
                          sx={{
                            width: 10,
                            height: 10,
                            backgroundColor: COLORS.PRIMARY,
                          }}
                        ></Box>
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <Typography
                            sx={{
                              fontSize: { lg: 14, xs: 12 },
                              fontFamily: roboto.style,
                              color: COLORS.WHITE,
                            }}
                          >
                            {item.label}
                          </Typography>
                        }
                      />
                    </ListItemButton>
                  ))}
                </List>
              </Grid2>
            ))}

            <Grid2 size={{ lg: 3, xs: 12 }}>
              <Typography
                sx={{
                  fontSize: 20,
                  fontFamily: roboto.style,
                  color: COLORS.WHITE,
                  mb: 1,
                  fontWeight: 550,
                }}
              >
                Newsletter
              </Typography>
              <Divider
                sx={{
                  borderColor: COLORS.PRIMARY,
                  width: 100,
                  borderWidth: 1,
                  mb: 2,
                }}
              />
              <Typography
                sx={{
                  fontSize: 14,
                  color: COLORS.WHITE,
                  fontFamily: roboto.style,
                }}
              >
                To get the latest news and latest updates from us.
              </Typography>
              <TextField
                label="Email Address"
                sx={{
                  fieldset: {
                    borderColor: COLORS.WHITE,
                  },
                  label: {
                    color: COLORS.WHITE,
                  },
                  mt: 2,
                  ":hover": {
                    fieldset: {
                      borderColor: COLORS.WHITE,
                    },
                  },
                  color: COLORS.WHITE,
                }}
                fullWidth
              />
              <Button
                sx={{
                  color: COLORS.WHITE,
                  backgroundColor: COLORS.PRIMARY,
                  mt: 2,
                }}
                fullWidth
              >
                Subscribe
              </Button>
            </Grid2>
          </Grid2>
        </Container>
      </Box>
    </div>
  );
};

export default Footer;
