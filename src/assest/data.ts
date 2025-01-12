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
      url: "/about",
    },
    {
      label: HEADER_LINKS.PROGRAMS,
      url: "/courses",
      icon: true,
    },
    {
      label: HEADER_LINKS.CONTACT,
      url: "/contact",
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
  aboutData: [
    {
      heading: "100,000 online courses",
      content:
        "Real innovations and a positive customer experience are the heart of successful communication.",
      list: [
        {
          label: "Activate listening",
        },
        {
          label: "Brilliant minds",
        },
        {
          label: "Better best wow!",
        },
        {
          label: "Branding it better!",
        },
      ],
    },
    {
      heading: "Expert instruction",
      content:
        "Real innovations and a positive customer experience are the heart of successful communication.",
      list: [
        {
          label: "Creating results.",
        },
        {
          label: "Expect more",
        },
        {
          label: "Good thinking",
        },
        {
          label: "In real we trust",
        },
      ],
    },
    {
      heading: "Lifetime access",
      content:
        "Real innovations and a positive customer experience are the heart of successful communication.",
      list: [
        {
          label: "Stay real always.",
        },
        {
          label: "We have you covered",
        },
        {
          label: "We turn heads",
        },
        {
          label: "Your brand promoted",
        },
      ],
    },
  ],
  missionData: [
    {
      heading: "A Place where you can Achieve",
      content1:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      content2:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      heading: "Quality can be better than Quantity in this Platform",
      content1:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      content2:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    },
  ],
  aboutServices: [
    {
      heading: "A Better Future Starts Here",
      description:
        "Website.com began in 2005. After years in the web hosting industry, we realized that it was near impossible for the average Jane or Joe to create their own website. Traditional web hosting services were simply too complicated, time consuming, and expensive to manage.",
    },
    {
      heading: "A Classical Education for the Future",
      description:
        "We created the Website.com Site Builder with the user’s perspective in mind. We wanted to offer a platform that would require no coding skills or design experience. We keep it simple, so users can focus on creating an amazing website that reflects their brand. Best of all – it’s free. You can get online, showcase your brand, or start selling products right away.",
    },
    {
      heading: "A Journey to Excellence",
      description:
        "After seeing an increased need for eCommerce solutions, we developed one of the only fully-featured, free and commission-free online store builders, allowing business owners to launch their online business.",
    },
  ],
  aboutSuccess: [
    {
      heading: "A Success Oriented Learning Environment",
      description:
        "Website.com began in 2005. After years in the web hosting industry, we realized that it was near impossible for the average Jane or Joe to create their own website. Traditional web hosting services were simply too complicated, time consuming, and expensive to manage.",
    },
    {
      heading: "Academic Excellence and Cultural Diversity",
      description:
        "We created the Website.com Site Builder with the user’s perspective in mind. We wanted to offer a platform that would require no coding skills or design experience. We keep it simple, so users can focus on creating an amazing website that reflects their brand. Best of all – it’s free. You can get online, showcase your brand, or start selling products right away.",
    },
  ],
};
