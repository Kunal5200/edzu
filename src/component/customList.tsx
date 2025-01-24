import { COLORS } from "@/utils/enum";
import { roboto } from "@/utils/fonts";
import { LIST } from "@/utils/types";
import { Done } from "@mui/icons-material";
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

interface CUSTOM_LIST {
  data: LIST[];
  fontWeight?: boolean;
}

const CustomList = ({ data, fontWeight }: CUSTOM_LIST) => {
  return (
    <div>
      <List>
        {data.map((val, i) => (
          <ListItem key={i} disablePadding>
            <ListItemAvatar sx={{ minWidth: 35 }}>
              <Done sx={{ color: COLORS.PRIMARY, fontSize: 15 }} />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography
                  sx={{
                    fontSize: 15,
                    fontFamily: roboto.style,
                    fontWeight: fontWeight ? 400 : 500,
                  }}
                >
                  {val.label}
                </Typography>
              }
              secondary={
                <Typography sx={{ fontSize: 14, fontFamily: roboto.style }}>
                  {val.value}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default CustomList;
