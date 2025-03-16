import React, { useEffect, useState } from "react";
import banner from "@/banner/course-detail.jpg";
import { useRouter } from "next/router";
import { COLORS, COURSE_IDS } from "@/utils/enum";
import { WEB_DEVELOPMENT } from "@/assest/webDevelopment";
import { COURSE_DETAILS } from "@/utils/types";
import CustomBanner from "@/component/customBanner";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
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
import {
  AddCircle,
  Done,
  ExpandMore,
  Remove,
  RemoveCircle,
  StarBorderOutlined,
} from "@mui/icons-material";
import Plans from "@/component/plans";
import { PRICINGPLAN } from "@/assest/pricingPlan";
import Testimonial from "@/component/testimonial";
import Certification from "@/component/combopack/certification";
import Faq from "@/component/combopack/faq";
import { ARTIFICICAL_INTELLIGENCE } from "@/assest/artificialIntelligence";
import { DATA_SCIENCE } from "@/assest/dataScience";
import { MACHINE_LEARNING } from "@/assest/machineLearning";
import { MOBILEAPP_DEVELOPMENT } from "@/assest/mobile-app-debelopment";
import { Digital_MARKETING } from "@/assest/digital_marketing";
import { FINANCE } from "@/assest/finance";
import { HUMAN_RESOURCE } from "@/assest/human-resource";
import { CYBER_SECURITY } from "@/assest/cyber-security";
const CourseDetails = () => {
  const [data, setData] = useState<COURSE_DETAILS | null>();

  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState<string | false>();
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  const courseDataMap: Record<string, COURSE_DETAILS> = {
    [COURSE_IDS.WEB_DEVELOPMENT]: WEB_DEVELOPMENT,
    [COURSE_IDS.ARTIFICIAL_INTELLIGENCE]: ARTIFICICAL_INTELLIGENCE,
    [COURSE_IDS.DATA_SCIENCE]: DATA_SCIENCE,
    [COURSE_IDS.MACHINE_LEARNING]: MACHINE_LEARNING,
    [COURSE_IDS.MOBILE_APP_DEVELOPMENT]: MOBILEAPP_DEVELOPMENT,
    [COURSE_IDS.DIGITAL_MARKETING]: Digital_MARKETING,
    [COURSE_IDS.FINANCE]: FINANCE,
    [COURSE_IDS.HUMAN_RESOURCE]: HUMAN_RESOURCE,
    [COURSE_IDS.CYBER_SECURITY]: CYBER_SECURITY,
  };

  useEffect(() => {
    const { slug } = router.query;

    if (slug && typeof slug === "string") {
      const selectedCourse = courseDataMap[slug];
      if (selectedCourse) {
        setLoading(true);
        setTimeout(() => {
          setData(selectedCourse);
          setLoading(false);
        }, 2000);
      } else {
        setData(null);
        setLoading(false);
      }
    }
  }, [router.query.slug]);
  return (
    <div>
      <CustomBanner heading={data?.pageTitle} img={banner.src} />
      {loading ? (
        <Backdrop open={loading}>
          <CircularProgress />
        </Backdrop>
      ) : (
        <Box sx={{ pt: 7, backgroundColor: COLORS.FAQBG }}>
          <Container>
            <Grid2 container spacing={4}>
              <Grid2 size={{ lg: 8, xs: 12 }}>
                <Typography sx={{ fontSize: 30, mt: 4, mb: 2 }}>
                  Overview
                </Typography>
                <Typography sx={{ fontSize: 20 }}>{data?.heading}</Typography>
                <Typography sx={{ fontSize: 15, fontWeight: 400, mt: 2 }}>
                  {data?.description}
                </Typography>
                <Grid2 container spacing={5}>
                  <Grid2 size={{ lg: 12, xs: 12 }}>
                    <Typography sx={{ fontSize: 20, mt: 2 }}>
                      {data?.highlight.heading}
                    </Typography>
                    <List>
                      {data?.highlight.list.map((val, i) => (
                        <ListItem key={i} disablePadding>
                          <ListItemAvatar sx={{ minWidth: 40 }}>
                            <Done htmlColor={COLORS.PRIMARY} />
                          </ListItemAvatar>
                          <ListItemText
                            primary={
                              <Typography sx={{ fontSize: 14 }}>
                                {val.label}
                              </Typography>
                            }
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Grid2>
                  <Grid2 size={{ lg: 12, xs: 12 }}>
                    <Typography sx={{ fontSize: 20, mt: 2 }}>
                      {data?.benefits.heading}
                    </Typography>
                    <List>
                      {data?.benefits.list.map((val, i) => (
                        <ListItem key={i} disablePadding>
                          <ListItemAvatar sx={{ minWidth: 40 }}>
                            <Done htmlColor={COLORS.PRIMARY} />
                          </ListItemAvatar>
                          <ListItemText
                            primary={
                              <Typography sx={{ fontSize: 14 }}>
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

                <Grid2 container spacing={2} mt={2}>
                  {data?.outline.map((val, i) => (
                    <Grid2 size={12}>
                      <Accordion
                        sx={{ boxShadow: "0px 0px 2px 3px rgb(0,0,0,0.10)" }}
                        onChange={handleChange(`panel${i}`)}
                        expanded={expanded === `panel${i}`}
                      >
                        <AccordionSummary
                          expandIcon={
                            expanded === `panel${i}` ? (
                              <RemoveCircle htmlColor={COLORS.PRIMARY} />
                            ) : (
                              <AddCircle />
                            )
                          }
                          sx={{ borderBottom: "1px solid #d7d7d7" }}
                        >
                          <Typography sx={{ fontSize: 15, fontWeight: 550 }}>
                            {val.heading}
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <List>
                            {val.list.map((val, i) => (
                              <ListItem key={i} disablePadding>
                                <ListItemAvatar sx={{ minWidth: 40 }}>
                                  <StarBorderOutlined
                                    htmlColor={COLORS.PRIMARY}
                                  />
                                </ListItemAvatar>
                                <ListItemText
                                  primary={
                                    <Typography
                                      sx={{
                                        fontSize: val.value ? 18 : 14,
                                        fontWeight: val.value ? 550 : 400,
                                      }}
                                    >
                                      {val.label}
                                    </Typography>
                                  }
                                  secondary={
                                    <Typography
                                      sx={{ fontSize: val.value ? 16 : 14 }}
                                    >
                                      {val.value}
                                    </Typography>
                                  }
                                />
                              </ListItem>
                            ))}
                          </List>
                        </AccordionDetails>
                      </Accordion>
                    </Grid2>
                  ))}
                </Grid2>
              </Grid2>
              <Grid2 size={{ lg: 4, xs: 12 }}>
                <Card
                  sx={{
                    boxShadow: "0px 0px 2px 2px rgb(0,0,0,0.20)",
                    position: "sticky",
                    top: 170,
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
                    previousPrice={val.previousPrice}
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
