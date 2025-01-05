import { data } from "@/assest/data";
import { COLORS } from "@/utils/enum";
import { kanit } from "@/utils/fonts";
import { Phone, Scale } from "@mui/icons-material";
import { Box, Container, IconButton, Stack, Typography } from "@mui/material";
import React from "react";

const SubHeader = () => {
  return (
    <Box sx={{ backgroundColor: COLORS.PRIMARY, p: 1 }}>
      <Container  >
        <Stack
          direction={"row"}
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
                    fontSize: 14,
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
                    fontSize: 20,
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
        </Stack>
      </Container>
    </Box>
  );
};

export default SubHeader;
