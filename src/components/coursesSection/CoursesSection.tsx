import React from "react";
import CoursesCard from "./CoursesCard";

const CoursesSection = () => {
  return (
    <div>
      <h1 className="text-[#4D4D4D] text-[36px] font-semibold leading-[44px] text-center mb-[50px] ">
        Courses
      </h1>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))]  gap-[40px] lg:grid-cols-3 ">
        <CoursesCard
          courseHeading="Web Development (Mern Stack) "
          coursePoints={[
            "Html5 / Css3",
            "Bootstrap / Tailwind",
            "Javascript",
            "React.js",
            "Node.js",
          ]}
        />
        <CoursesCard
          courseHeading="Graphic Designing Pro"
          coursePoints={[
            "Canva Pro",
            "Adobe Products Family",
            "Coral Draw",
            "Filmora (UI/UX)",
            "AI Video Creations Tools Creations",
          ]}
        />
        <CoursesCard
          courseHeading="Digital Marketing Pro"
          coursePoints={[
            "Graphics Designing",
            "Social Media Marketing",
            "Web Development (Wordpress/Shoppify)",
            "SEO (Search Engine Optimization)",
            "E-Commerce Store",
          ]}
        />
        <CoursesCard />
        <CoursesCard />
      </div>
    </div>
  );
};

export default CoursesSection;
