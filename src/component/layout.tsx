import { LayoutProps } from "@/utils/types";
import React from "react";
import SubHeader from "./subHeader";
import Header from "./header";
import Footer from "./footer";
import { useMediaQuery } from "@mui/material";
import MobileHeader from "./mobileHeader";
import { Analytics } from "@vercel/analytics/react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import Head from "next/head";
const Layout = ({ children }: LayoutProps) => {
  const phone = useMediaQuery("(max-width:600px)");
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
      {/* <SubHeader /> */}
      {phone ? <MobileHeader /> : <Header />}
      <FloatingWhatsApp phoneNumber="+91 9560021531" accountName="Edzu" />
      <Analytics />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
