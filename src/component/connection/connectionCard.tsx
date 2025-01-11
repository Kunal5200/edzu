import { COLORS } from "@/utils/enum";
import { roboto } from "@/utils/fonts";
import { CONNECTION_PROPS } from "@/utils/types";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const ConnectionCard = ({ number, heading, content }:CONNECTION_PROPS) => {
  return (
    <div>
      <Box>
        <Stack direction={"row"} alignItems={"center"} spacing={2}>
          <Typography
            sx={{
              fontSize: 20,
              fontFamily: roboto.style,
              color: COLORS.PRIMARY,
              fontWeight: 550,
              "::after": {
                content: '")"',
              },
            }}
          >
            {number}
          </Typography>
          <Typography
            sx={{ fontSize: 20, fontFamily: roboto.style, fontWeight: 550 }}
          >
            {heading}
          </Typography>
        </Stack>
        <Typography
          sx={{
            fontSize: 15,
            fontFamily: roboto.style,
            color: COLORS.TEXT,
            mt: 1,
            fontWeight: 400,
          }}
        >
          {content}
        </Typography>
      </Box>
    </div>
  );
};

export default ConnectionCard;
