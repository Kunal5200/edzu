import { LayoutProps } from "@/utils/types";
import React from "react";
import SubHeader from "./subHeader";
import Header from "./header";
import Footer from "./footer";
import { useMediaQuery } from "@mui/material";
import MobileHeader from "./mobileHeader";

const Layout = ({ children }: LayoutProps) => {
  const phone = useMediaQuery("(max-width:600px)");
  return (
    <div>
      <SubHeader />
      {phone ? <MobileHeader /> : <Header />}
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
