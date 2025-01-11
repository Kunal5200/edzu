import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import logo from "@/logo/logo.png";
import { kanit, roboto } from "@/utils/fonts";
import {
  ArrowDownward,
  ArrowDropDown,
  ExpandMore,
  MoreVert,
} from "@mui/icons-material";
import { data } from "@/assest/data";
import { COLORS, HEADER_LINKS } from "@/utils/enum";
import { useRouter } from "next/router";
const Header = () => {
  const router = useRouter();

  const changePath = (path: string) => {
    router.push(path);
  };
  return (
    <Box sx={{ p: 1.5 }}>
      <Container>
        <Stack
          direction="row"
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Image src={logo} alt="" width={90} />
          <Stack direction={"row"} alignItems={"center"} spacing={4}>
            {data.headerLinks.map((val, i) =>
              val.icon ? (
                <Typography
                  sx={{
                    fontSize: 18,
                    fontFamily: roboto.style,
                    fontWeight: 400,
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5,
                    cursor: "pointer",
                  }}
                  key={i}
                >
                  {val.label} <ExpandMore />
                </Typography>
              ) : (
                <Typography
                  sx={{
                    fontSize: 18,
                    fontFamily: roboto.style,
                    fontWeight: 400,
                    position: "relative",
                    cursor: "pointer",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      left: 0,
                      right: 0,
                      bottom: -2,
                      height: "2px",
                      backgroundColor: COLORS.PRIMARY,

                      transform: "scaleX(0)",
                      transition: "transform 0.3s ease",
                      transformOrigin: "left",
                    },
                    "&:hover::after": {
                      transform: "scaleX(1)",
                    },
                  }}
                  key={i}
                  onClick={() => changePath(val.url)}
                >
                  {val.label}{" "}
                </Typography>
              )
            )}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Header;
