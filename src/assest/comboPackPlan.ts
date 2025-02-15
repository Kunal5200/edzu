import { PRICING_PLAN } from "@/utils/types";

export const COMBO_PACK_PLAN: PRICING_PLAN[] = [
  {
    planType: "Lite",
    price: "1399",
    benefits: [
      {
        label: "2 Months Training Program",
      },
      {
        label: "Recorded Sessions",
      },
      {
        label: "24*7 Available Lectures",
      },
      {
        label: "2 Different Training Certificates ",
      },
      {
        label: "Government Certified Certifications ",
      },
    ],
    url: "https://pages.razorpay.com/combolite",
    duration: "For Two Months",
    previousPrice: "2899",
  },
  {
    planType: "PRO",
    price: "2799",
    benefits: [
      {
        label: "4 Months Training and Internship Program ",
      },
      {
        label: "Recorded Sessions",
      },
      {
        label: "24*7 Available Lectures",
      },
      {
        label: "2 Different Training Certificates",
      },
      {
        label: "2 Different Internship Certificates",
      },
      {
        label: "Government Certified Certifications ",
      },
      {
        label: "Hands On Live Projects",
      },
    ],
    duration: "For 4 Months",
    url: "https://pages.razorpay.com/combopro",
    previousPrice: "5699",
  },
  {
    planType: "MAESTRY",
    price: "3799",
    benefits: [
      {
        label: "6 Months Training and Internship Program ",
      },
      {
        label: "Recorded Sessions",
      },
      {
        label: "24*7 Available Lectures",
      },
      {
        label: "2 Different Training Certificates",
      },
      {
        label: "2 Different Internship Certificates",
      },
      {
        label: "Certificate of Excellence",
      },
      {
        label: "Government Certified Certifications ",
      },
      {
        label: "Hands On Live Projects",
      },
      {
        label: "Resume Building ",
      },
      {
        label: "Question Bank",
      },
      {
        label: "Interview Preparations",
      },
    ],
    url: " https://pages.razorpay.com/combomaestry",
    duration: "For 6 Months",
    previousPrice: "7699",
  },
];
