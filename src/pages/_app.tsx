import Layout from "@/component/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "swiper/css";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";
export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
