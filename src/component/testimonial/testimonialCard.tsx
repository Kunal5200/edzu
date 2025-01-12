import { Avatar, Box, Card, Stack, Typography } from "@mui/material";
import React from "react";
import user1 from "@/testimonials/user1.jpg";
import Image from "next/image";
import { roboto } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import { TESTIMONIAL_DATA } from "@/utils/types";
const TestimonialCard = ({
  img,
  name,
  designation,
  content,
}: TESTIMONIAL_DATA) => {
  return (
    <div>
      <Card sx={{ p: 3, mb: 2, mt: 2 }}>
        <Stack direction={"row"} alignItems={"center"} spacing={2}>
          <Avatar sx={{ width: 60, height: 60 }}>
            <Image src={img} alt="" width={60} style={{ objectFit: "cover" }} />
          </Avatar>
          <Box>
            <Typography
              sx={{
                fontSize: 20,
                fontWeight: 550,
                fontFamily: roboto.style,
                textTransform: "capitalize",
              }}
            >
              {name}
            </Typography>
            <Typography
              sx={{
                fontSize: 14,
                fontFamily: roboto.style,
                color: COLORS.PRIMARY,
              }}
            >
              {designation}
            </Typography>
          </Box>
        </Stack>
        <Typography sx={{ fontSize: 15, fontFamily: roboto.style, mt: 2,color:COLORS.TEXT }}>
          {content}
        </Typography>
      </Card>
    </div>
  );
};

export default TestimonialCard;
