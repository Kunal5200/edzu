import { PRICING_PLAN } from "@/utils/types";

export const PRICINGPLAN: PRICING_PLAN[] = [
  {
    planType: "LITE",
    price: "1499",
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
    previousPrice: "3499",
  },
  {
    planType: "PRO",
    price: "2499",
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
    previousPrice: "5499",
  },
  {
    planType: "MASTERY",
    price: "5499",
    benefits: [
      {
        label: "3 Months Training and Internship Program",
      },
      {
        label: "1 Month LIVE CLASSES",
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
    previousPrice: "10499",
  },
];
