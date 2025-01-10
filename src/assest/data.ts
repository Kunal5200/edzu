import { COLORS, HEADER_LINKS } from "@/utils/enum";
import {
  AcUnit,
  Computer,
  DoneAll,
  Email,
  EmojiEvents,
  MoreVert,
  Phone,
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

};
