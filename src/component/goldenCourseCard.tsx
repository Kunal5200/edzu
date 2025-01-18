import { COLORS } from "@/utils/enum";
import { roboto } from "@/utils/fonts";
import { COURSECARDPROPS } from "@/utils/types";
import { ArrowForward } from "@mui/icons-material";
import { Box, Button, Card, Stack, Typography } from "@mui/material";
import { BiRupee } from "react-icons/bi";

const GoldenCourseCard = ({ heading, price }: COURSECARDPROPS) => {
  return (
    <div>
      <Card
        sx={{ backgroundColor: COLORS.WHITE, height: { lg: 150, xs: "100%" } }}
      >
        <Stack>
          <Box
            sx={{
              backgroundColor: COLORS.PRIMARY,
              height: 80,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                textAlign: "center",
                fontFamily: roboto.style,
                color: COLORS.WHITE,
                textTransform: "uppercase",
                fontSize: { xs: 12 },
              }}
            >
              {heading}
            </Typography>
          </Box>
          <Box sx={{ p: 2 }}>
            <Stack
              direction={{ lg: "row", xs: "column" }}
              alignItems={{lg:"center",xs:"start"}}
              justifyContent={"space-between"}
            >
              <Stack direction={"row"} alignItems={"center"} spacing={1}>
                <Typography sx={{ fontFamily: roboto.style, fontSize: 14 }}>
                  Worth
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    fontFamily: roboto.style,
                    fontSize: 16,
                    fontWeight: 550,
                  }}
                >
                  <BiRupee /> {price}
                </Typography>
              </Stack>
              <Button
                sx={{
                  border: `1px solid ${COLORS.PRIMARY}`,
                  p: 0.5,
                }}
              >
                <ArrowForward fontSize="small" />
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Card>
    </div>
  );
};

export default GoldenCourseCard;
