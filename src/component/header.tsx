import { data } from "@/assest/data";
import logo from "@/logo/logo.png";
import { COLORS } from "@/utils/enum";
import { roboto } from "@/utils/fonts";
import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import whiteLogo from "@/logo/logo-edzu.png";
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
        // p: 1,
        position: isScrolling ? "fixed" : "relative",
        width: isScrolling ? "100%" : "100%",
        top: isScrolling ? 0 : 0,
        backgroundColor: isScrolling ? "#ffffff" : "ffffff",
        backdropFilter: isScrolling ? "blur(0px)" : "none",
        zIndex: 9999,
        boxShadow: isScrolling ? "0px 0px 80px 8px rgb(0,0,0,0.20)" : "none",
        transition: "all 0.5s ease",
        pt: 2,
        pb: 2,
        height: isScrolling ? 60 : 60,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container>
        <Stack
          direction="row"
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Link href="/">
            <Image
              src={isScrolling ? whiteLogo : whiteLogo}
              alt=""
              width={90}
            />
          </Link>
          <Stack direction={"row"} alignItems={"center"} spacing={4}>
            {data.headerLinks.map(
              (val, i) => (
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
                    color: isScrolling ? COLORS.BLACK : COLORS.BLACK,
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
