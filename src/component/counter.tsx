import { data } from "@/assest/data";
import { COLORS } from "@/utils/enum";
import { roboto } from "@/utils/fonts";
import { Person2 } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Container,
  Grid2,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import CountUp from "react-countup";

const Counter = () => {
  return (
    <div>
      <Box
        sx={{
          backgroundColor: COLORS.BLUE,
          height: 300,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container>
          <Grid2 container spacing={5}>
            {data.counterData.map((val, i) => (
              <Grid2 size={3}>
                <Stack direction={"row"} alignItems={"center"} spacing={1}>
                  <Avatar
                    sx={{
                      backgroundColor: COLORS.PRIMARY,
                      width: 60,
                      height: 60,
                    }}
                  >
                    <val.icon sx={{ fontSize: 30 }} />
                  </Avatar>
                  <Box>
                    <CountUp
                      end={val.count}
                      style={{
                        fontSize: 40,
                        color: COLORS.WHITE,
                        textAlign: "center",
                        margin: "auto",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                      suffix="+"
                      duration={20}
                    />
                    <Typography
                      sx={{
                        fontSize: 15,
                        fontFamily: roboto.style,
                        color: COLORS.WHITE,
                        textAlign: "center",
                        mt: 1,
                      }}
                    >
                      {val.label}
                    </Typography>
                  </Box>
                </Stack>
              </Grid2>
            ))}
          </Grid2>
        </Container>
      </Box>
    </div>
  );
};

export default Counter;
