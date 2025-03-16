import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
}

export interface LIST {
  label?: string;
  value?: string;
}

export interface COURSE_PROPS {
  img: StaticImageData | string;
  title: string;
  category: string;
  tutorName: string;
  rating: number;
  price: string;
  time: string;
  lessons: string;
}

export interface TESTIMONIAL_DATA {
  img: StaticImageData | string;
  name: string;
  content: string;
  designation: string;
}

export interface CONNECTION_PROPS {
  number: string;
  heading: string;
  content: string;
}

export interface ABOUTPROPS {
  heading: string;
  content: string;
  list: LIST[];
}

export interface ABOUTDATAPROPS {
  heading: string;
  description: string;
}
export interface ABOUTSERVICEPROPS {
  img: StaticImageData;
  data: ABOUTDATAPROPS[];
}

export interface TECHDATAPROPS {
  img: StaticImageData;
  title: string;
  course: string;
  onClick?: () => void;
  id: string;
}

export interface CONTACTCARDPROPS {
  icon: ReactNode;
  heading: string;
  value: string;
}

export interface BannerProps {
  img: string;
  heading: string | undefined;
}

export interface COURSECARDPROPS {
  heading: string;
  price: string;
}

export interface FAQPROS {
  label: string;
  value: string;
}

interface COURSE_DETAILS_PROPS {
  heading: string;
  list: LIST[];
}

export interface COURSE_DETAILS {
  heading: string;
  description: string;
  highlight: COURSE_DETAILS_PROPS;
  benefits: COURSE_DETAILS_PROPS;
  outline: COURSE_DETAILS_PROPS[];
  pageTitle: string;
  learning: LIST[];
}

export interface PRICING_PLAN {
  planType: string;
  price: string;
  benefits: LIST[];
  url: string;
  duration: string;
  previousPrice?: string;
}

export interface SERVICE_PROPS {
  img: StaticImageData;
  label: string;
}

export interface TermsProps {
  heading: string;
  descriptions: string;
  list?: LIST[] | undefined;
}


