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
import certificate1 from "@/certificate/certificate-1.jpg";
import certificate2 from "@/certificate/certificate-2.jpg";
import certificate3 from "@/certificate/certificate-3.jpg";
import certificate4 from "@/certificate/img-4.jpg";
import certificate5 from "@/certificate/img-5.jpg";
import certificate6 from "@/certificate/img-6.jpg";
import certificate7 from "@/certificate/img-7.jpg";
import banner1 from "@/banner/sliderBg1.jpg";
import banner2 from "@/banner/sliderBg2.jpg";
import banner3 from "@/banner/sliderBg3.jpg";
import icon1 from "@/icons/24-course.png";
import icon2 from "@/icons/certificate.png";
import icon3 from "@/icons/expert-team.png";
import icon4 from "@/icons/projects.png";
import icon5 from "@/icons/community.png";
import icon6 from "@/icons/24-support.png";
export const data = {
  bannerSection: [
    {
      img: banner1.src,
    },
    {
      img: banner2.src,
    },
    {
      img: banner3.src,
    },
  ],

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
      count: 15,
      label: "Expert Instructors",
    },
    {
      icon: LibraryBooksOutlined,
      count: 15,
      label: "Total Courses",
    },
    {
      icon: Mood,
      count: 7120,
      label: "Happy Students",
    },
    {
      icon: EmojiObjects,
      count: 329,
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
          url: "/",
        },
        {
          label: "About Us",
          url: "/about",
        },
        {
          label: "Privacy Policy",
          url: "/privacy-policy",
        },
        {
          label: "Refund Policy",
          url: "/refund-policy",
        },

        {
          label: "Terms and Conditions",
          url: "/terms-conditions",
        },
      ],
    },
    {
      heading: "UseFul Links",
      list: [
        {
          label: "Web Development",
          url: "/courses/web-development",
        },
        {
          label: "Artificial Intelligence",
          url: "/courses/artificial-intelligence",
        },
        {
          label: "Data Science",
          url: "/courses/data-science",
        },
        {
          label: "Machine Learning",
          url: "/courses/machine-learning",
        },
        {
          label: "Mobile App Development",
          url: "/courses/mobile-app-development",
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
        "Our platform is designed to help you succeed. Whether you're upskilling, exploring a new career path, or enhancing your knowledge, we provide expert-curated courses, hands-on learning, and a supportive environment to turn your ambitions into accomplishments.",
      // content2:
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      heading: "Quality can be better than Quantity in this Platform",
      content1:
        "At our EdTech platform, we prioritize quality over quantity. Every course is carefully crafted by industry experts to ensure you gain in-depth knowledge and practical skills. With personalized learning, hands-on projects, and real-world insights, we focus on delivering value that truly advances your career.",
      // content2:
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    },
  ],
  aboutServices: [
    {
      heading: "A Better Future Starts Here",
      description:
        "Edzu EdTech was founded in 2023 with a vision to bring meaningful change to the education sector. After years of hard work and dedication, we recognized the need to enhance traditional education. While it serves its purpose well, there is always room to innovate and contribute to the betterment of society.",
    },
    {
      heading: "A Classical Education for the Future",
      description:
        "Prepare for tomorrow with a strong foundation today. Our programs combine timeless educational principles with modern advancements, empowering you to excel in your chosen field and secure a bright, successful future.",
    },
    {
      heading: "A Journey to Excellence",
      description:
        "Embark on a transformative learning experience that molds your skills and knowledge for success. Our programs are designed to guide you every step of the way, helping you achieve excellence in your chosen field.",
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
      label: "Tech and Data ",
      value: "12+ Diverse Courses",
    },
    {
      label: "Business",
      value: "10+ Diverse Courses",
    },
    // {
    //   label: "More",
    //   value: "2+ Diverse Courses",
    // },
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
  ],

  serviceData: [
    {
      img: icon1,
      label: "24*7 Course Availability",
    },
    {
      img: icon2,
      label: "industry-recognized certifications",
    },
    {
      img: icon3,
      label: "Expert team of Mentors",
    },
    {
      img: icon4,
      label: "Project crafted for you",
    },
    {
      img: icon5,
      label: "Active Community",
    },
    {
      img: icon6,
      label: "24*7 Support Availability",
    },
  ],
};
