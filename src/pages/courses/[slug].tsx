import React, { useEffect, useState } from "react";
import banner from "@/banner/course-detail.jpg";
import { useRouter } from "next/router";
import { COURSE_IDS } from "@/utils/enum";
import { WEB_DEVELOPMENT } from "@/assest/webDevelopment";
import { COURSE_DETAILS } from "@/utils/types";
import CustomBanner from "@/component/customBanner";
import {
  Backdrop,
  Box,
  CircularProgress,
  Container,
  Grid2,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import Image from "next/image";
import image from "@/course/webDevelopment.jpg";
import { StarBorderOutlined } from "@mui/icons-material";
const CourseDetails = () => {
  const [data, setData] = useState<COURSE_DETAILS | null>();

  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (router.query.slug === COURSE_IDS.WEB_DEVELOPMENT) {
      setTimeout(() => {
        setData(WEB_DEVELOPMENT);
        setLoading(false);
      }, 2000);
    }
  }, [router.query]);
  return (
    <div>
      <CustomBanner heading={data?.pageTitle} img={banner.src} />
      {loading ? (
        <Backdrop open={loading}>
          <CircularProgress />
        </Backdrop>
      ) : (
        <Box sx={{ mt: 7 }}>
          <Container>
            <Grid2 container>
              <Grid2 size={8}>
                <Box sx={{ height: 400 }}>
                  <Image
                    src={image}
                    alt=""
                    className="img-fluid"
                    style={{ objectFit: "cover" }}
                  />
                </Box>
                <Typography sx={{ fontSize: 30, mt: 4, mb: 2 }}>
                  Overview
                </Typography>
                <Typography sx={{ fontSize: 20 }}>{data?.heading}</Typography>
                <Typography sx={{ fontSize: 15, fontWeight: 400, mt: 2 }}>
                  {data?.description}
                </Typography>
                <Grid2 container spacing={5}>
                  <Grid2 size={6}>
                    <Typography sx={{ fontSize: 20, mt: 2 }}>
                      {data?.highlight.heading}
                    </Typography>
                    <List>
                      {data?.highlight.list.map((val, i) => (
                        <ListItem key={i} disablePadding>
                          <ListItemAvatar sx={{ minWidth: 40 }}>
                            <StarBorderOutlined />
                          </ListItemAvatar>
                          <ListItemText
                            primary={
                              <Typography sx={{ fontSize: 14, mt: 1 }}>
                                {val.label}
                              </Typography>
                            }
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Grid2>
                  <Grid2 size={6}>
                    <Typography sx={{ fontSize: 20, mt: 2 }}>
                      {data?.benefits.heading}
                    </Typography>
                    <List>
                      {data?.benefits.list.map((val, i) => (
                        <ListItem key={i} disablePadding>
                          <ListItemAvatar sx={{ minWidth: 40 }}>
                            <StarBorderOutlined />
                          </ListItemAvatar>
                          <ListItemText
                            primary={
                              <Typography sx={{ fontSize: 14, mt: 1 }}>
                                {val.label}
                              </Typography>
                            }
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Grid2>
                </Grid2>
              </Grid2>
              <Grid2 size={4}></Grid2>
            </Grid2>
          </Container>
        </Box>
      )}
    </div>
  );
};

export default CourseDetails;
