import courses from "@/banner/courses-bg.jpg";
import Faq from "@/component/combopack/faq";
import Courses from "@/component/courses";
import CourseSection from "@/component/courseSection";
import CustomBanner from "@/component/customBanner";
import Testimonial from "@/component/testimonial";
import { Box } from "@mui/material";
const Course = () => {
  return (
    <div>
      <CustomBanner heading="Courses" img={courses.src} />
      <CourseSection />
      <Box sx={{ pt: 7 }}>
        <Courses />
      </Box>
      <Box sx={{ pt: 7 }}>
        <Testimonial />
      </Box>
      <Box sx={{ pt: 7 }}>
        <Faq />
      </Box>
    </div>
  );
};

export default Course;
