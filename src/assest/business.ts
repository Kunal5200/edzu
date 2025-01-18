import { TECHDATAPROPS } from "@/utils/types";
import icon1 from "@/course/business/digitalmarketing.gif";
import icon2 from "@/course/business/finance.gif";
import icon3 from "@/course/business/hr.gif";
import { COURSE_IDS } from "@/utils/enum";
export const BUSINESS: TECHDATAPROPS[] = [
  {
    img: icon1,
    title: "Digital Marketing",
    course: "4 courses",
    id: COURSE_IDS.DIGITAL_MARKETING,
  },
  {
    img: icon2,
    title: "Finance",
    course: "10 courses",
    id: COURSE_IDS.FINANCE,
  },
  {
    img: icon3,
    title: "Human Resource",
    course: "10 courses",
    id: COURSE_IDS.HUMAN_RESOURCE,
  },
];
