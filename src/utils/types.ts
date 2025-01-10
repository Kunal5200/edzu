import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
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
