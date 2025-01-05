import { LayoutProps } from "@/utils/types";
import React from "react";
import SubHeader from "./subHeader";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <SubHeader />
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
