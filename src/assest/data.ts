import { COLORS, HEADER_LINKS } from "@/utils/enum";
import {
  AcUnit,
  Computer,
  DoneAll,
  Email,
  EmailOutlined,
  EmojiEvents,
  EmojiObjects,
  LibraryBooksOutlined,
  LocationOn,
  Mood,
  MoreVert,
  Person2,
  Phone,
  PhoneAndroid,
  X,
} from "@mui/icons-material";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

export const data = {
  contactHeader: [
    {
      icon: Phone,
      text: "Call : 9582004819",
    },
    {
      icon: Email,
      text: "Email :info@edzu.in",
    },
  ],
  socialIcons: [
    {
      icon: FaFacebookF,
    },
    {
      icon: X,
    },
    {
      icon: FaLinkedinIn,
    },
    {
      icon: FaInstagram,
    },
  ],
  headerLinks: [
    {
      label: HEADER_LINKS.HOME,
      url: "/",
    },
    {
      label: HEADER_LINKS.ABOUT,
      url: "/about-us",
    },
    {
      label: HEADER_LINKS.PROGRAMS,
      url: "/courses",
    },
    {
      label: HEADER_LINKS.CONTACT,
      url: "/contact-us",
    },
  ],
  courseSection: [
    {
      icon: DoneAll,
      heading: "Learn The Latest Skills",
      description: "Like business analytics, graphic design, Python, and more.",
      color: COLORS.GREY,
      textColor: COLORS.BLACK,
    },
    {
      icon: Computer,
      heading: "100k Online Courses",
      description: "In high-demand fields like IT, AI and cloud engineering.",
      color: COLORS.PRIMARY,
      textColor: COLORS.WHITE,
    },
    {
      icon: AcUnit,
      heading: "Earn a Certificate",
      description:
        "From a leading university in business, computer science, and more.",
      color: COLORS.GREY,
      textColor: COLORS.BLACK,
    },
    {
      icon: EmojiEvents,
      heading: "Up Your Skill",
      description: "With on-demand training and development programs.",
      color: COLORS.PRIMARY,
      textColor: COLORS.WHITE,
    },
  ],
  counterData: [
    {
      icon: Person2,
      count: 50,
      label: "Expert Instructors",
    },
    {
      icon: LibraryBooksOutlined,
      count: 1150,
      label: "Total Courses",
    },
    {
      icon: Mood,
      count: 8190,
      label: "Happy Students",
    },
    {
      icon: EmojiObjects,
      count: 654,
      label: "Creative Events",
    },
  ],

  connectionData: [
    {
      number: "01",
      heading: "Exclusive Advisor",
      content:
        "Nulla quis lorem ut libero malesuada feugiat pellentesque in ipsum id orci porta dapibus donec sollicitudin molestie malesuada quisque velit nisi pretium ut lacinia.",
    },
    {
      number: "02",
      heading: "Reached Your Goals",
      content:
        "Nulla quis lorem ut libero malesuada feugiat pellentesque in ipsum id orci porta dapibus donec sollicitudin molestie malesuada quisque velit nisi pretium ut lacinia.",
    },
    {
      number: "03",
      heading: "Digital Laboratory",
      content:
        "Nulla quis lorem ut libero malesuada feugiat pellentesque in ipsum id orci porta dapibus donec sollicitudin molestie malesuada quisque velit nisi pretium ut lacinia.",
    },
  ],
  footerContact: [
    {
      icon: LocationOn,
      label: "Delhi-Meerut road, Ghaziabad,UP India",
    },
    {
      icon: PhoneAndroid,
      label: "+91 9354678205",
    },
    {
      icon: EmailOutlined,
      label: "kunalsharma5868@gmail.com",
    },
  ],
  footerLinks: [
    {
      heading: "Support",
      list: [
        {
          label: "Home",
        },
        {
          label: "About Us",
        },
        {
          label: "Contact",
        },
        {
          label: "Privacy Policy",
        },
        {
          label: "Terms & Conditions",
        },
      ],
    },
    {
      heading: "UseFul Links",
      list: [
        {
          label: "Graphic Design",
        },
        {
          label: "Photography",
        },
        {
          label: "Web Design",
        },
        {
          label: "Web Development",
        },
      ],
    },
  ],
};
