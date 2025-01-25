import CustomBanner from "@/component/customBanner";
import React from "react";
import banner from "@/banner/refund-policy.jpg";
import { Box, Container, Typography } from "@mui/material";
import { roboto } from "@/utils/fonts";
import CustomList from "@/component/customList";
import {
  REFUND_CONTACT,
  REFUND_COURSES,
  REFUND_MOBILE,
  REFUNDPOLICY_DATA,
} from "@/assest/refundPolicy";
const RefundPolicy = () => {
  return (
    <div>
      <CustomBanner heading="Refund Policy" img={banner.src} />
      <Box sx={{ p: 2 }}>
        <Container>
          <Typography sx={{ fontSize: 18, fontFamily: roboto.style }}>
            At Edzu, we strive to ensure your satisfaction with the products,
            services, courses, or workshops you purchase from us. Please review
            the terms of our refund policy carefully.
          </Typography>
          <Typography sx={{ fontSize: 20, fontFamily: roboto.style, mt: 2 }}>
            Workshops
          </Typography>
          <CustomList data={REFUNDPOLICY_DATA} fontWeight={true} />
          <Typography sx={{ fontSize: 20, fontFamily: roboto.style, mt: 2 }}>
            Courses
          </Typography>
          <CustomList data={REFUND_COURSES} fontWeight={true} />
          <Typography sx={{ fontSize: 20, fontFamily: roboto.style, mt: 2 }}>
            Contact
          </Typography>
          <CustomList data={REFUND_CONTACT} fontWeight={true} />
          <Typography sx={{ fontSize: 20, fontFamily: roboto.style, mt: 2 }}>
            Or
          </Typography>
          <CustomList data={REFUND_MOBILE} fontWeight={true} />
        </Container>
      </Box>
    </div>
  );
};

export default RefundPolicy;
