import { data } from "@/assest/data";
import { COLORS } from "@/utils/enum";
import { kanit, roboto } from "@/utils/fonts";
import { Phone, Scale } from "@mui/icons-material";
import { Box, Container, IconButton, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const SubHeader = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        const currentScroll = window.pageYOffset;
        // setScrollPosition(currentScroll);
        setIsScrolling(currentScroll > 0);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);
  return (
    <Box
      sx={{
        backgroundColor: isScrolling ? COLORS.PRIMARY : COLORS.PRIMARY,
        height: 40,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: isScrolling
          ? { lg: "fixed", xs: "relative" }
          : { xs: "relative", lg: "absolute" },
        width: isScrolling ? "100%" : "100%",
        zIndex: 999,
      }}
    >
      {/* <Container> */}
      {/* <Stack
          direction={{ lg: "row", xs: "column" }}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Stack direction={"row"} alignItems={"center"} spacing={2}>
            {data.contactHeader.map((val, i) => (
              <>
                <val.icon
                  htmlColor={COLORS.WHITE}
                  sx={{ fontSize: 20 }}
                  key={i}
                />
                <Typography
                  sx={{
                    color: COLORS.WHITE,
                    fontFamily: kanit.style,
                    fontSize: { lg: 14, xs: 12 },
                  }}
                >
                  {val.text}
                </Typography>
              </>
            ))}
          </Stack>
          <Stack direction={"row"} alignItems={"center"} spacing={2}>
            {data.socialIcons.map((val, i) => (
              <IconButton
                sx={{
                  svg: {
                    color: COLORS.WHITE,
                    fontSize: { lg: 20, xs: 15 },
                    transition: "0.5s ease all",
                  },
                  ":hover": {
                    svg: {
                      transform: " scale(0.9)",
                      //   color: COLORS.MINT_GREEN,
                    },
                  },
                }}
              >
                <val.icon />
              </IconButton>
            ))}
          </Stack>
        </Stack> */}

      <Typography
        sx={{
          textAlign: "center",
          fontFamily: roboto.style,
          color: COLORS.WHITE,
          fontSize: { xs: 10 },
        }}
      >
        GET EXTRA 10% OFF ON ALL UPI PAYMENTS. VALID FOR LIMITED TIME.
      </Typography>

      {/* </Container> */}
    </Box>
  );
};

export default SubHeader;
