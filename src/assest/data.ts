import { HEADER_LINKS } from "@/utils/enum";
import { Email, MoreVert, Phone, X } from "@mui/icons-material";
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
};
