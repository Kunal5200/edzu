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
  SHARING_INFORMATION,
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
              sx={{ fontSize: 25, fontFamily: roboto.style, fontWeight: 600 }}
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
              sx={{ fontSize: 25, fontFamily: roboto.style, fontWeight: 600 }}
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
            <CustomList data={INFORMATION_DATA} fontWeight={true} />
          </Box>
          <Box sx={{ mt: 2 }}>
            <Typography
              sx={{ fontSize: 25, fontFamily: roboto.style, fontWeight: 600 }}
            >
              3. Sharing Your Information
            </Typography>
            <Typography
              sx={{
                fontSize: 20,
                fontFamily: roboto.style,
                fontWeight: 550,
                mt: 2,
              }}
            >
              We do not share your personal information with third parties
              unless:
            </Typography>
            <CustomList data={SHARING_INFORMATION} />
          </Box>
          <Box sx={{ mt: 2 }}>
            <Typography
              sx={{ fontSize: 25, fontFamily: roboto.style, fontWeight: 600 }}
            >
              4. Data Retention
            </Typography>
            <Typography
              sx={{
                fontSize: 14,
                fontFamily: roboto.style,
                fontWeight: 400,
                mt: 2,
              }}
            >
              We retain personal information as long as necessary for the
              purposes outlined in this policy unless a longer retention period
              is required or permitted by law.
            </Typography>
          </Box>

          <Box sx={{ mt: 2 }}>
            <Typography
              sx={{ fontSize: 25, fontFamily: roboto.style, fontWeight: 600 }}
            >
              5. Your Rights
            </Typography>
            <Typography
              sx={{
                fontSize: 20,
                fontFamily: roboto.style,
                fontWeight: 550,
                mt: 2,
              }}
            >
              You have the right to:
            </Typography>
            <CustomList data={SHARING_INFORMATION} />
          </Box>

          <Box sx={{ mt: 2 }}>
            <Typography
              sx={{ fontSize: 25, fontFamily: roboto.style, fontWeight: 600 }}
            >
              6. Children’s Information
            </Typography>
            <Typography
              sx={{
                fontSize: 14,
                fontFamily: roboto.style,
                fontWeight: 400,
                mt: 2,
              }}
            >
              Edzu does not knowingly collect personal data from children under
              13. If you believe your child has provided such information,
              contact us immediately to remove it.
            </Typography>
          </Box>
          <Box sx={{ mt: 2 }}>
            <Typography
              sx={{ fontSize: 25, fontFamily: roboto.style, fontWeight: 600 }}
            >
              7. Contact Us
            </Typography>
            <Typography
              sx={{
                fontSize: 14,
                fontFamily: roboto.style,
                fontWeight: 400,
                mt: 2,
              }}
            >
              For questions about this Privacy Policy, email us at
              edzuedtech@gmail.com.
            </Typography>
          </Box>
          <Box sx={{ mt: 2 }}>
            <Typography
              sx={{ fontSize: 25, fontFamily: roboto.style, fontWeight: 600 }}
            >
              8. Changes to This Policy
            </Typography>
            <Typography
              sx={{
                fontSize: 14,
                fontFamily: roboto.style,
                fontWeight: 400,
                mt: 2,
                mb: 2,
              }}
            >
              We may update this Privacy Policy periodically. Any changes will
              be posted on our website.
            </Typography>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default PrivacyPolicy;
