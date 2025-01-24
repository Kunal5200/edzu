import CustomBanner from "@/component/customBanner";
import {
  Box,
  Container,
  List,
  ListItem,
  ListItemAvatar,
  Typography,
} from "@mui/material";
import React from "react";
import banner from "@/banner/privacy-policy.jpg";
import { roboto } from "@/utils/fonts";
import { Done } from "@mui/icons-material";
import { COLORS } from "@/utils/enum";
import CustomList from "@/component/customList";
import {
  INFORMATION_DATA,
  privacyPolicyList1,
  privacyPolicyList2,
} from "@/assest/privacyPolicy";
const PrivacyPolicy = () => {
  return (
    <div>
      <CustomBanner heading="Privacy Policy" img={banner.src} />
      <Box sx={{ p: 2 }}>
        <Container>
          <Typography>
            At Edzu (accessible at{" "}
            <Typography component={"a"} href="https://edzu.in/">
              https://edzu.in/
            </Typography>{" "}
            ), we prioritize the privacy of our visitors. This Privacy Policy
            outlines the types of information we collect, how we use it, and how
            it is managed.
          </Typography>

          <Box sx={{ mt: 2 }}>
            <Typography
              sx={{ fontSize: 30, fontFamily: roboto.style, fontWeight: 600 }}
            >
              1. Information We Collect
            </Typography>
            <Typography
              sx={{
                fontSize: 20,
                fontFamily: roboto.style,
                fontWeight: 550,
                mt: 2,
              }}
            >
              Information You Provide Directly:
            </Typography>
            <CustomList data={privacyPolicyList1} />
            <Typography
              sx={{
                fontSize: 20,
                fontFamily: roboto.style,
                fontWeight: 550,
                mt: 2,
              }}
            >
              Information Collected Automatically:
            </Typography>
            <CustomList data={privacyPolicyList2} />
          </Box>
          <Box sx={{ mt: 2 }}>
            <Typography
              sx={{ fontSize: 30, fontFamily: roboto.style, fontWeight: 600 }}
            >
              2. How We Use Your Information
            </Typography>
            <Typography
              sx={{
                fontSize: 20,
                fontFamily: roboto.style,
                fontWeight: 550,
                mt: 2,
              }}
            >
              We use the information we collect to:
            </Typography>
            <CustomList data={INFORMATION_DATA} />
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default PrivacyPolicy;
