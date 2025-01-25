import CustomBanner from "@/component/customBanner";
import React from "react";
import banner from "@/banner/refund-policy.jpg";
import { Box, Container, Typography } from "@mui/material";
import { roboto } from "@/utils/fonts";
import { TERMS } from "@/assest/terms";
import CustomList from "@/component/customList";
const TermsConditions = () => {
  return (
    <div>
      <CustomBanner heading="Terms and Conditions" img={banner.src} />
      <Box sx={{ mt: 2, mb: 2 }}>
        <Container>
          <Typography sx={{ fontSize: 18, fontFamily: roboto.style }}>
            Welcome to Edzu! These terms and conditions outline the rules and
            regulations for using our website, located at https://edzu.in/. By
            accessing or using our website, you agree to be bound by these terms
            and conditions.
          </Typography>
          {TERMS.map((val, i) => (
            <Box key={i} mt={2}>
              <Typography
                sx={{ fontSize: 20, fontFamily: roboto.style, fontWeight: 550 }}
              >
                {val.heading}
              </Typography>
              <Typography sx={{ fontSize: 15 }}>{val.descriptions}</Typography>
              {val.list && <CustomList data={val?.list} fontWeight={true} />}
            </Box>
          ))}
        </Container>
      </Box>
    </div>
  );
};

export default TermsConditions;
