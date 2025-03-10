import { PRICING_PLAN } from "@/utils/types";

export const PRICINGPLAN: PRICING_PLAN[] = [
  {
    planType: "LITE",
    price: "699",
    benefits: [
      {
        label: "1 Month Training Program ",
      },
      {
        label: "Recorded Sessions ",
      },
      {
        label: "24*7 Available Lectures",
      },
      {
        label: "Government Certified Certifications",
      },
    ],
    url: "https://rzp.io/l/traininglite",
    duration: "for one month",
    previousPrice: "1499",
  },
  {
    planType: "PRO",
    price: "1399",
    benefits: [
      {
        label: "2 Months Training and Internship Program ",
      },
      {
        label: "Recorded Sessions",
      },
      {
        label: "24*7 Available Lectures",
      },
      {
        label: "Government Certified Certifications",
      },
      {
        label: "Hands On Live Projects",
      },
    ],
    url: "https://rzp.io/rzp/trainingpro",
    duration: "for two months",
    previousPrice: "2899",
  },
  {
    planType: "MASTERY",
    price: "1899",
    benefits: [
      {
        label: "3 Months Training and Internship Program",
      },
      {
        label: "Recorded Sessions",
      },
      {
        label: "24*7 Available Lectures",
      },
      {
        label: "Government Certified Certifications",
      },
      {
        label: "Hands On Live Projects",
      },
      {
        label: "Resume Building",
      },
      {
        label: "Question Bank ",
      },
      {
        label: "Interview Preparations ",
      },
    ],
    url: "https://rzp.io/l/trainingmastery",
    duration: "for three months",
    previousPrice: "3899",
  },
];
