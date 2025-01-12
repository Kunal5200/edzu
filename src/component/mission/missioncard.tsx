import { COLORS } from "@/utils/enum";
import { roboto } from "@/utils/fonts";
import { Card, Typography } from "@mui/material";
import React from "react";

const MissionCard = () => {
  return (
    <div>
      <Card sx={{ p: 2 }}>
        <Typography
          sx={{
            fontSize: 14,
            fontFamily: roboto.style,
            color: COLORS.PRIMARY,
            letterSpacing: 2,
          }}
        >
          Discover Mission
        </Typography>
        <Typography
          sx={{
            fontSize: 30,
            fontFamily: roboto.style,
            color: COLORS.BLACK,
            fontWeight: 700,
            mt: 1,
          }}
        >
          Why Our Platform is Better
        </Typography>
      </Card>
    </div>
  );
};

export default MissionCard;
