import React from "react";
import CoursesCard from "./CoursesCard";

const CoursesSection = () => {
  return (
    <div>
      <h1 className="text-[#4D4D4D] text-[36px] font-semibold leading-[44px] text-center mb-[50px] ">
        Courses
      </h1>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))]  gap-[40px] lg:grid-cols-3 ">
        <CoursesCard />
        <CoursesCard />
        <CoursesCard />
        <CoursesCard />
        <CoursesCard />
      </div>
    </div>
  );
};

export default CoursesSection;
