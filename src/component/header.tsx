import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import logo from "@/logo/logo.png";
import { kanit } from "@/utils/fonts";
import { ArrowDownward, ArrowDropDown, MoreVert } from "@mui/icons-material";
import { data } from "@/assest/data";
import { HEADER_LINKS } from "@/utils/enum";
const Header = () => {
  return (
    <Box sx={{ p: 1.5 }}>
      <Container>
        <Stack
          direction="row"
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Image src={logo} alt="" width={100} />
          <Stack direction={"row"} alignItems={"center"} spacing={4}>
            {data.headerLinks.map((val, i) =>
              val.label === HEADER_LINKS.PROGRAMS ? (
                <Typography
                  sx={{
                    fontSize: 18,
                    fontFamily: kanit.style,
                    fontWeight: 300,
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5,
                    
                  }}
                  key={i}
                >
                  {val.label} <ArrowDropDown />
                </Typography>
              ) : (
                <Typography
                  sx={{
                    fontSize: 18,
                    fontFamily: kanit.style,
                    fontWeight: 300,
                  }}
                  key={i}
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
