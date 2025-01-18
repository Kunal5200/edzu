import { COLORS, COURSE_TYPE, HEADER_LINKS } from "@/utils/enum";
import {
  AcUnit,
  CalendarMonth,
  Computer,
  DoneAll,
  Email,
  EmailOutlined,
  EmojiEvents,
  EmojiObjects,
  Grade,
  LibraryBooksOutlined,
  LocationOn,
  Mood,
  MoreVert,
  People,
  Person2,
  Phone,
  PhoneAndroid,
  X,
} from "@mui/icons-material";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import certificate1 from "@/certificate/img-1.jpg";
import certificate2 from "@/certificate/img-2.jpg";
import certificate3 from "@/certificate/img-3.jpg";
import certificate4 from "@/certificate/img-4.jpg";
import certificate5 from "@/certificate/img-5.jpg";
import certificate6 from "@/certificate/img-6.jpg";
import certificate7 from "@/certificate/img-7.jpg";
export const data = {
  contactHeader: [
    {
      icon: Phone,
      text: "Call : +91 9560021531",
    },
    {
      icon: Email,
      text: "Email : edzuedtech@gmail.com",
    },
  ],
  socialIcons: [
    {
      icon: FaFacebookF,
      url: "https://www.facebook.com/profile.php?id=100090065978318",
    },
    // {
    //   icon: X,
    // },
    {
      icon: FaLinkedinIn,
      url: "https://www.linkedin.com/company/edzu-edtech/",
    },
    {
      icon: FaInstagram,
      url: "https://www.instagram.com/edzu.in/",
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
      icon: false,
    },
    {
      label: HEADER_LINKS.COMBOPACKS,
      url: "combo-packs",
    },
    {
      label: HEADER_LINKS.CONTACT,
      url: "/contact",
    },
  ],
  courseSection: [
    {
      icon: DoneAll,
      heading: "Google Rating",
      description: "4.3",
      color: COLORS.GREY,
      textColor: COLORS.BLACK,
    },
    {
      icon: Computer,
      heading: "Courses",
      description: "9+ courses",
      color: COLORS.PRIMARY,
      textColor: COLORS.WHITE,
    },
    {
      icon: AcUnit,
      heading: "Mentees",
      description: "7k+ Mentees enrolled ",
      color: COLORS.GREY,
      textColor: COLORS.BLACK,
    },
    {
      icon: EmojiEvents,
      heading: "Certificate",
      description: "Govt. Certified Certificate",
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
      heading: "Top Mentorship",
      content:
        "Expert guidance from industry leaders to enhance skills, build confidence, and achieve career goals.",
    },
    {
      number: "02",
      heading: "Digital Access",
      content:
        "Seamless online learning through high-quality resources, tools, and platforms accessible anytime, anywhere.",
    },
    {
      number: "03",
      heading: "Government-Certified Certificates",
      content:
        "Earn official certifications recognized by leading organizations, boosting your professional credibility and career opportunities.",
    },
  ],
  footerContact: [
    {
      icon: LocationOn,
      label: "194-A, Prakash Industrial Estate, Uttar Pradesh ",
    },
    {
      icon: PhoneAndroid,
      label: "+91 9560021531",
    },
    {
      icon: EmailOutlined,
      label: "edzuedtech@gmail.com",
    },
  ],
  footerLinks: [
    {
      heading: "Support",
      list: [
        {
          label: "Home Page",
        },
        {
          label: "Privacy Policy",
        },
        {
          label: "Refund Policy",
        },
        {
          label: "Privacy Policy",
        },
        {
          label: "Terms and Conditions",
        },
      ],
    },
    {
      heading: "UseFul Links",
      list: [
        {
          label: "Web Development",
        },
        {
          label: "Artificial Intelligence",
        },
        {
          label: "Data Science",
        },
        {
          label: "Machine Learning",
        },
        {
          label: "Mobile App Development",
        },
        // {
        //   label: "Digital Marketing",
        // },
        // {
        //   label: "Finance",
        // },
        // {
        //   label: "Human Resource",
        // },
        // {
        //   label: "Combo Packs",
        // },
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
  courseTypeProduct: [
    {
      label: COURSE_TYPE.TECH,
    },
    {
      label: COURSE_TYPE.BUSINESS,
    },
  ],

  contactCardData: [
    {
      icon: Phone,
    },
  ],

  comboPackData: [
    {
      label: "Tech Starter",
      value: "12+ Diverse Courses",
    },
    {
      label: "MBA Lite",
      value: "10+ Diverse Courses",
    },
    {
      label: "More",
      value: "2+ Diverse Courses",
    },
  ],
  courseBenefits: [
    {
      label: "Mockup Interviews",
    },
    {
      label: "Value Packs",
    },
    {
      label: "Placement Assistance",
    },
  ],

  goldenPassData: [
    {
      label: "Completion Rate",
      value: "91%",
      icon: People,
    },
    {
      label: "Live engagement",
      value: "95%",
      icon: CalendarMonth,
    },
    {
      label: "Student Satisfaction",
      value: "93%",
      icon: Grade,
    },
  ],

  certificateData: [
    {
      img: certificate1,
    },
    {
      img: certificate2,
    },
    {
      img: certificate3,
    },
    {
      img: certificate4,
    },
    {
      img: certificate5,
    },
    {
      img: certificate6,
    },
    {
      img: certificate7,
    },
    {
      img: certificate6,
    },
  ],
};
