import { COLORS } from "@/utils/enum";
import { PRICING_PLAN } from "@/utils/types";
import { Done } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { BiRupee } from "react-icons/bi";

const Plans = ({
  planType,
  price,
  benefits,
  url,
  duration,
  previousPrice,
}: PRICING_PLAN) => {
  const Payment = (url: string) => {
    window.open(url, "_blank");
  };
  return (
    <div>
      <Card
        sx={{
          boxShadow: "0px 0px 3px 3px rgb(0,0,0,0.10)",
          height: { lg: 650, xs: 530 },
          position: "relative",
        }}
      >
        <Typography
          sx={{
            fontSize: 30,
            textAlign: "center",
            fontWeight: 550,
            letterSpacing: 2,
            p: 2,
          }}
        >
          {planType}{" "}
        </Typography>
        <Box
          sx={{
            height: 100,
            backgroundColor: COLORS.PRIMARY,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"center"}
              spacing={0.5}
            >
              <BiRupee fontSize={35} color="#ffffff" />
              <Stack direction={"row"} alignItems={"center"} spacing={1}>
                <Typography sx={{ fontSize: 40, color: COLORS.WHITE }}>
                  {price}
                </Typography>
                <Typography
                  sx={{
                    fontSize: 25,
                    color: COLORS.WHITE,
                    textDecoration: "line-through",
                  }}
                >
                  {previousPrice}
                </Typography>
              </Stack>
            </Stack>
            <Typography sx={{ textAlign: "center", color: COLORS.WHITE }}>
              {duration}
            </Typography>
          </Box>
        </Box>
        <List sx={{ p: 2 }}>
          {benefits.map((val, i) => (
            <ListItem key={i} disablePadding>
              <ListItemAvatar sx={{ minWidth: 40 }}>
                <Done sx={{ fontSize: 20, color: COLORS.PRIMARY }} />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography sx={{ fontSize: 15 }}>{val.label}</Typography>
                }
              />
            </ListItem>
          ))}
        </List>
        <Box
          sx={{
            p: 2,
            position: "absolute",
            bottom: 20,
            width: "100%",
            textAlign: "center",
            right: 0,
            left: 0,
          }}
        >
          <Button
            sx={{
              fontSize: 15,
              backgroundColor: COLORS.PRIMARY,
              color: COLORS.WHITE,
              width: 200,
              mr: 5,
            }}
            onClick={() => Payment(url)}
          >
            Buy
          </Button>
        </Box>
      </Card>
    </div>
  );
};

export default Plans;
