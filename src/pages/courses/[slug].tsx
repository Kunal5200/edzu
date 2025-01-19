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
  Card,
  CircularProgress,
  Container,
  Divider,
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
import Plans from "@/component/plans";
import { PRICINGPLAN } from "@/assest/pricingPlan";
import Testimonial from "@/component/testimonial";
import Certification from "@/component/combopack/certification";
import Faq from "@/component/combopack/faq";
import { ARTIFICICAL_INTELLIGENCE } from "@/assest/artificialIntelligence";
const CourseDetails = () => {
  const [data, setData] = useState<COURSE_DETAILS | null>();

  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        const currentScroll = window.pageYOffset;
        // setScrollPosition(currentScroll);
        setIsScrolling(currentScroll > 0);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  useEffect(() => {
    if (router.query.slug === COURSE_IDS.WEB_DEVELOPMENT) {
      setTimeout(() => {
        setData(WEB_DEVELOPMENT);
        setLoading(false);
      }, 2000);
    }
    if (router.query.slug === COURSE_IDS.ARTIFICIAL_INTELLIGENCE) {
      setTimeout(() => {
        setData(ARTIFICICAL_INTELLIGENCE);
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
            <Grid2 container spacing={4}>
              <Grid2 size={{ lg: 8, xs: 12 }}>
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
                  <Grid2 size={{ lg: 6, xs: 12 }}>
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
                  <Grid2 size={{ lg: 6, xs: 12 }}>
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
                <Typography sx={{ fontSize: 30, mt: 4 }}>Outline : </Typography>
                <Grid2 container spacing={5} mt={4}>
                  {data?.outline.map((val, i) => (
                    <Grid2 size={{ lg: 6, xs: 12 }} key={i}>
                      <Typography sx={{ fontSize: 20 }}>
                        {val.heading}
                      </Typography>

                      <List>
                        {val.list.map((val, i) => (
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
                  ))}
                </Grid2>
              </Grid2>
              <Grid2 size={{ lg: 4, xs: 12 }}>
                <Card
                  sx={{
                    boxShadow: "0px 0px 2px 2px rgb(0,0,0,0.20)",
                    position: "sticky",
                    top: 100,
                  }}
                >
                  <Typography sx={{ fontSize: 20, p: 2 }}>
                    What You'll Learn
                  </Typography>
                  <Divider />
                  <List sx={{ p: 2 }}>
                    {data?.learning.map((val, i) => (
                      <ListItem disablePadding key={i} sx={{ mb: 1 }}>
                        <ListItemText
                          primary={
                            <Typography sx={{ fontSize: 15 }}>
                              {val.label}
                            </Typography>
                          }
                        />
                      </ListItem>
                    ))}
                  </List>
                </Card>
              </Grid2>
            </Grid2>
          </Container>
          <Container sx={{ mt: 7 }}>
            <Grid2 container spacing={4}>
              {PRICINGPLAN.map((val, i) => (
                <Grid2 size={{ lg: 4, xs: 12 }} key={i}>
                  <Plans
                    planType={val.planType}
                    price={val.price}
                    duration={val.duration}
                    url={val.url}
                    benefits={val.benefits}
                  />
                </Grid2>
              ))}
            </Grid2>
          </Container>
          <Box sx={{ mt: 7 }}>
            <Certification />
          </Box>
          <Box sx={{ mt: 7 }}>
            <Testimonial />
          </Box>
          <Box sx={{ mt: 7 }}>
            <Faq />
          </Box>
        </Box>
      )}
    </div>
  );
};

export default CourseDetails;
