import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
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
import Link from "next/link";
const Header = () => {
  const router = useRouter();
  const [isScrolling, setIsScrolling] = useState(false);
  const changePath = (path: string) => {
    router.push(path);
  };

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
        p: 1,
        position: isScrolling ? "fixed" : "relative",
        width: isScrolling ? "100%" : "98%",
        top: 0,
        backgroundColor: isScrolling ? "#ffffff50" : "#ffffff",
        backdropFilter: "blur(5px)",
        zIndex: 9999,
        boxShadow: isScrolling ? "0px 0px 8px 8px rgb(0,0,0,0.20)" : "none",
        transition: "all 0.5s ease",
      }}
    >
      <Container>
        <Stack
          direction="row"
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Link href="/">
            <Image src={logo} alt="" width={90} />
          </Link>
          <Stack direction={"row"} alignItems={"center"} spacing={4}>
            {data.headerLinks.map(
              (val, i) => (
                // val.icon ? (
                //   <Typography
                //     sx={{
                //       fontSize: 16,
                //       fontFamily: roboto.style,
                //       fontWeight: 400,
                //       display: "flex",
                //       alignItems: "center",
                //       gap: 0.5,
                //       cursor: "pointer",
                //     }}
                //     key={i}
                //   >
                //     {val.label} <ExpandMore />
                //   </Typography>
                // ) : (
                <Typography
                  sx={{
                    fontSize: 16,
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
              // )
            )}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Header;
