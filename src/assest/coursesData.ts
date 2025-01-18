import img1 from "@/course/img1.jpg";
import img2 from "@/course/img2.jpg";
import img3 from "@/course/img3.jpg";
import img4 from "@/course/img4.jpg";
import img5 from "@/course/img5.jpg";
import img6 from "@/course/img6.jpg";
import { COURSE_PROPS, COURSECARDPROPS } from "@/utils/types";
export const COURSESDATA: COURSE_PROPS[] = [
  {
    img: img1.src,
    category: "Management",
    tutorName: "David Warner",
    title: "Information about UI/UX design degree",
    rating: 2.5,
    price: "$188",
    time: "5hr",
    lessons: "4",
  },
  {
    img: img2.src,
    category: "Business",
    tutorName: "Kunal Sharma",
    title: "React-The Complete Guide (React Router)",
    rating: 4.5,
    price: "$166",
    time: "38hr 45 min",

    lessons: "5",
  },
  {
    img: img3.src,
    title: "Certified Javascript with Free Project Coure",
    category: "Development",
    tutorName: "Academind",
    rating: 3.5,
    price: "$200",
    time: "30hr",
    lessons: "10",
  },
  {
    img: img4.src,
    title: "Photography Crash Course for PhotoGrapher",
    category: "Design",
    tutorName: "Beckham",
    rating: 4.5,
    price: "$120",
    time: "50hr",
    lessons: "20",
  },
  {
    img: img5.src,
    title: "Go from Zero to Hero with node js ",
    category: "Language",
    tutorName: "Bruno Simon",
    rating: 4.5,
    price: "$120",
    time: "25hr",
    lessons: "10",
  },
  //   {
  //     img: img6,
  //   },
];

export const COURSE_DATA: COURSECARDPROPS[] = [
  {
    heading: "Artificial Intelligence",
    price: "8500",
  },
  {
    heading: "Cyber Security",
    price: "8500",
  },
  {
    heading: "Data Science",
    price: "8500",
  },
  {
    heading: "Machine Learning",
    price: "8500",
  },
  {
    heading: "Web Development",
    price: "8500",
  },
  {
    heading: "UI/UX Design",
    price: "8500",
  },
  {
    heading: "Iot & Robotics",
    price: "8500",
  },
  {
    heading: "Cloud Computing",
    price: "8500",
  },
  {
    heading: "Embedded System",
    price: "8500",
  },
  {
    heading: "Hybrid & Electric Vehicle",
    price: "8500",
  },
  {
    heading: "Auto CAD",
    price: "8500",
  },
  {
    heading: "Fashion Designing",
    price: "8500",
  },
  {
    heading: "DIGITAL MARKETING",
    price: "8500",
  },
];
