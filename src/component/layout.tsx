import { LayoutProps } from "@/utils/types";
import React from "react";
import SubHeader from "./subHeader";
import Header from "./header";
import Footer from "./footer";
import { useMediaQuery } from "@mui/material";
import MobileHeader from "./mobileHeader";
import { Analytics } from "@vercel/analytics/react";
const Layout = ({ children }: LayoutProps) => {
  const phone = useMediaQuery("(max-width:600px)");
  return (
    <div>
      {/* <SubHeader /> */}
      {phone ? <MobileHeader /> : <Header />}
      <Analytics />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
