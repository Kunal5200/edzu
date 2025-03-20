import { data } from "@/assest/data";
import { COLORS } from "@/utils/enum";
import { roboto } from "@/utils/fonts";
import {
  Avatar,
  Box,
  Container,
  Grid2,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import CountUp from "react-countup";

const Counter = () => {
  const phone = useMediaQuery("(max-width:600px)");
  return (
    <div>
      <Box
        sx={{
          backgroundColor: COLORS.SECONDARY,
          height: 300,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container>
          <Grid2 container spacing={5}>
            {data.counterData.map((val, i) => (
              <Grid2 size={{ lg: 3, xs: 6 }}>
                <Stack
                  direction={{ lg: "row", xs: "column" }}
                  alignItems={"center"}
                  spacing={1}
                >
                  <Avatar
                    sx={{
                      backgroundColor: COLORS.PRIMARY,
                      width: { lg: 60, xs: 40 },
                      height: { lg: 60, xs: 40 },
                    }}
                  >
                    <val.icon sx={{ fontSize: { lg: 30, xs: 20 } }} />
                  </Avatar>
                  <Box>
                    <CountUp
                      end={val.count}
                      style={{
                        fontSize: phone ? 25 : 40,
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
                        fontSize: { lg: 15, xs: 14 },
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
