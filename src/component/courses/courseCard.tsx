import { COLORS } from "@/utils/enum";
import { roboto } from "@/utils/fonts";
import { COURSE_PROPS } from "@/utils/types";
import {
  MenuBook,
  MenuBookOutlined,
  Person,
  WatchLater,
  WatchLaterOutlined,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Paper,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const CourseCard = ({
  img,
  category,
  title,
  tutorName,
  rating,
  price,
  time,
  lessons,
}: COURSE_PROPS) => {
  const newData = [
    {
      icon: MenuBookOutlined,
      label: `${lessons} lessons`,
    },
    {
      icon: WatchLaterOutlined,
      label: time,
    },
  ];

  return (
    <Box sx={{ pb: 2 }}>
      <Card
        sx={{
          position: "relative",
          ":hover": {
            ".bg-image": {
              transform: "scale(1.1)",
            },
            ".category-box": {
              backgroundColor: COLORS.PRIMARY,
              color: COLORS.WHITE,
            },
          },
          ".bg-image": {
            transition: "0.5s ease all",
          },
          overflow: "hidden",
          ".category-box": {
            transition: "0.5s ease all",
          },
          height: 520,
        }}
      >
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              backgroundImage: `url(${img})`,
              height: 250,
              backgroundPosition: "center",
              backgroundSize: "cover",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-end",
            }}
            className="bg-image"
          ></Box>
          <Box
            sx={{
              backgroundColor: COLORS.GREY,
              mx: 4,
              borderTopLeftRadius: 3,
              p: 0.5,
              borderTopRightRadius: 3,
              width: 100,
              textAlign: "center",
              position: "absolute",
              bottom: 0,
              right: 0,
            }}
            className="category-box"
          >
            <Typography sx={{ fontSize: 14, fontFamily: roboto.style }}>
              {category}
            </Typography>
          </Box>
        </Box>
        <CardContent>
          <Stack direction={"row"} alignItems={"center"} spacing={2}>
            <Avatar></Avatar>
            <Typography
              sx={{ fontSize: 15, fontFamily: roboto.style, fontWeight: 550 }}
            >
              {tutorName}
            </Typography>
          </Stack>
          <Typography
            sx={{
              mt: 2,
              fontSize: 18,
              fontFamily: roboto.style,
              fontWeight: 700,
            }}
          >
            {title}
          </Typography>

          <Stack direction={"row"} alignItems={"center"} spacing={4} mt={2}>
            {newData.map((val, i) => (
              <Stack
                direction={"row"}
                alignItems={"center"}
                spacing={1}
                key={i}
              >
                <val.icon sx={{ fontSize: 20 }} />
                <Typography sx={{ fontSize: 14, fontFamily: roboto.style }}>
                  {val.label}
                </Typography>
              </Stack>
            ))}
          </Stack>
          <Stack direction={"row"} alignItems={"center"} spacing={1} mt={2}>
            <Rating value={rating} precision={0.5} readOnly />
            <Typography sx={{ fontSize: 14, fontFamily: roboto.style }}>
              ({rating})
            </Typography>
          </Stack>
          <Box sx={{ position: "absolute", bottom: 0, width: "90%", p: 1 }}>
            <Divider />
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Typography sx={{ fontSize: 20, fontFamily: roboto.style }}>
                {price}
              </Typography>
              <Button
                sx={{
                  fontSize: 14,
                  textTransform: "initial",
                  backgroundColor: COLORS.PRIMARY,
                  mt: 1,
                  color: COLORS.WHITE,
                  fontFamily: roboto.style,
                  borderRadius: 0,
                }}
              >
                Enroll Now
              </Button>
            </Stack>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CourseCard;
