import code from "@/course/techData/web.gif";
import { COLORS } from "@/utils/enum";
import { roboto } from "@/utils/fonts";
import { TECHDATAPROPS } from "@/utils/types";
import { Box, Button, Card, CardActionArea, Typography } from "@mui/material";
import Image from "next/image";
const TechCard = ({ img, title, course, onClick, id }: TECHDATAPROPS) => {
  return (
    <div>
      <Card
        sx={{
          p: 2,
          boxShadow: "0px 0px 3px 3px rgb(0,0,0,0.10)",
          backgroundColor: COLORS.WHITE,
          height: 150,
          position: "relative",
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          {/* <Code sx={{ color: COLORS.WHITE, fontSize: 40 }} /> */}
          <Image src={img} alt="" width={50} />
        </Box>
        <Typography
          sx={{
            fontSize: 20,
            fontFamily: roboto.style,
            textAlign: "center",
            mt: 1,
          }}
        >
          {title}
        </Typography>
        <Button
          sx={{
            mt: 1,
            textAlign: "center",
            position: "absolute",
            bottom: 0,
            left: 0,
          }}
          fullWidth
          onClick={onClick}
        >
          View Course
        </Button>
      </Card>
    </div>
  );
};

export default TechCard;
