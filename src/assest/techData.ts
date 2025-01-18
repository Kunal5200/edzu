import { TECHDATAPROPS } from "@/utils/types";
import icon1 from "@/course/techData/web.gif";
import icon2 from "@/course/techData/ai.gif";
import icon3 from "@/course/techData/dataScience.gif";
import icon4 from "@/course/techData/machineLearning.gif";
import icon5 from "@/course/techData/mobileDevelopment.gif";
import { COURSE_IDS } from "@/utils/enum";
export const TECHDATA: TECHDATAPROPS[] = [
  {
    img: icon1,
    title: "Web Development",
    course: "10 courses",
    id: COURSE_IDS.WEB_DEVELOPMENT,
  },
  {
    img: icon2,
    title: "Artificial Intelligence",
    course: "5 courses",
    id: COURSE_IDS.ARTIFICIAL_INTELLIGENCE,
  },
  {
    img: icon3,
    title: "Data Science",
    course: "4 courses",

    id: COURSE_IDS.DATA_SCIENCE,
  },
  {
    img: icon4,
    title: "Machine Learning",
    course: "2 courses",
    id: COURSE_IDS.MACHINE_LEARNING,
  },
  {
    img: icon5,
    title: "Mobile App Development",
    course: "20 courses",
    id: COURSE_IDS.MOBILE_APP_DEVELOPMENT,
  },
];
