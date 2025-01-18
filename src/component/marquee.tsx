import { data } from "@/assest/data";
import { Star } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import React from "react";
import Marquee from "react-fast-marquee";

const Continuous = () => {
  return (
    <div>
      <Marquee>
        {data.courseBenefits.map((val, i) => (
          <Stack direction={"row"} alignItems={"center"} spacing={2}>
            <Typography>{val.label}</Typography>
            {/* <Star /> */}
          </Stack>
        ))}
      </Marquee>
    </div>
  );
};

export default Continuous;
