import { data } from "@/assest/data";
import { COLORS } from "@/utils/enum";
import { roboto } from "@/utils/fonts";
import { People } from "@mui/icons-material";
import {
  Box,
  Card,
  Container,
  Divider,
  Grid2,
  Stack,
  Typography,
} from "@mui/material";

const ComboPackBenefits = () => {
  return (
    <div>
      <Container>
        <Grid2 container>
          <Grid2 size={{ lg: 10, xs: 12 }} margin={"auto"}>
            <Box sx={{ backgroundColor: COLORS.BLUE, p: 3, borderRadius: 4 }}>
              <Grid2 container spacing={2}>
                {data.goldenPassData.map((val, i) => (
                  <>
                    <Grid2 size={{ lg: 3, xs: 12 }} key={i}>
                      <Stack direction={"row"} spacing={2}>
                        <Card
                          sx={{
                            width: 60,
                            height: 60,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <val.icon fontSize="large" />
                        </Card>
                        <Box>
                          <Typography
                            sx={{
                              fontSize: 14,
                              color: COLORS.WHITE,
                              fontFamily: roboto.style,
                            }}
                          >
                            {val.label}
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: 20,
                              color: COLORS.WHITE,
                              fontFamily: roboto.style,
                              textAlign: "center",
                              mt: 1,
                            }}
                          >
                            {val.value}
                          </Typography>
                        </Box>
                      </Stack>
                    </Grid2>

                    <Grid2 size={{ lg: 1, xs: 12 }} textAlign={"center"}>
                      {i !== data.goldenPassData.length - 1 && (
                        <Box
                          sx={{
                            border: "1px solid #ffffff",
                            transform: {
                              lg: "rotate(90deg)",
                              xs: "rotate(0deg)",
                            },
                            mt: 3.5,
                            height: "auto",
                          }}
                        ></Box>
                      )}
                    </Grid2>
                  </>
                ))}
              </Grid2>
            </Box>
          </Grid2>
        </Grid2>
      </Container>
    </div>
  );
};

export default ComboPackBenefits;
