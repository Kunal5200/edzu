import { COLORS } from "@/utils/enum";
import { roboto } from "@/utils/fonts";
import { ABOUTSERVICEPROPS } from "@/utils/types";
import { Container, Grid2, Stack, Typography } from "@mui/material";
import Image from "next/image";
const AboutService = ({ img, data }: ABOUTSERVICEPROPS) => {
  return (
    <div>
      <Container>
        <Grid2 container spacing={6}>
          <Grid2 size={{ lg: 6, xs: 12 }}>
            <Image src={img} alt="" className="img-fluid" />
          </Grid2>
          <Grid2 size={{ lg: 6, xs: 12 }}>
            <Stack spacing={2}>
              {data.map((val, i) => (
                <>
                  <Typography
                    sx={{
                      fontSize: 20,
                      fontFamily: roboto.style,
                      fontWeight: 550,
                    }}
                    key={i}
                  >
                    {val.heading}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: 15,
                      fontFamily: roboto.style,
                      fontWeight: 300,
                      color: COLORS.TEXT,
                    }}
                  >
                    {val.description}
                  </Typography>
                </>
              ))}
            </Stack>
          </Grid2>
        </Grid2>
      </Container>
    </div>
  );
};

export default AboutService;
