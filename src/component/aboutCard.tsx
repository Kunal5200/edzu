import { COLORS } from "@/utils/enum";
import { roboto } from "@/utils/fonts";
import { ABOUTPROPS } from "@/utils/types";
import { Done } from "@mui/icons-material";
import {
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const AboutCard = ({ heading, content, list }: ABOUTPROPS) => {
 

  const [hovered, setHovered] = useState(false);
  return (
    <div>
      <Typography
        sx={{ fontSize: 20, fontFamily: roboto.style, fontWeight: 700 }}
      >
        {heading}
      </Typography>
      <Divider
        sx={{ borderColor: COLORS.PRIMARY, borderWidth: 1, width: 80, mt: 1 }}
      />
      <Typography
        sx={{
          fontSize: 15,
          fontFamily: roboto.style,
          color: COLORS.TEXT,
          fontWeight: 400,
          mt: 2,
        }}
      >
       {content}
      </Typography>
      <List>
        {list.map((val, i) => (
          <ListItem
            key={i}
            sx={{
              ":hover": {
                ".icon_box": {
                  backgroundColor: COLORS.PRIMARY,
                  color: COLORS.WHITE,
                },
              },
            }}
            disablePadding
          >
            <ListItemAvatar
              sx={{
                backgroundColor: COLORS.WHITE,
                color: COLORS.PRIMARY,
                minWidth: 20,
                height: 20,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                boxShadow: "0px 0px 2px 2px rgb(0,0,0,0.10)",
              }}
              className="icon_box"
            >
              <Done sx={{ fontSize: 15, fontWeight: 550 }} />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography
                  sx={{
                    fontSize: 15,
                    fontFamily: roboto.style,
                    fontWeight: 450,
                  }}
                >
                  {val.label}
                </Typography>
              }
              sx={{ ml: 2 }}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default AboutCard;
