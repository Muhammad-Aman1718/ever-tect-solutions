import React from "react";
import WebDevelopmentCoursesImg from "../../../public/assets/courses/web-dev.jpeg";
import Image from "next/image";

const CoursesCard = () => {
  return (
    <div className=" bg-white rounded-2xl shadow-lg overflow-hidden  hover:shadow-xl transition-shadow duration-300">
      <Image
        src={WebDevelopmentCoursesImg}
        alt="Course Banner"
        className="w-full h-48 object-fit"
      />

      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Full Stack Web Development
        </h2>
        <ul className="list-disc pl-5 text-gray-600 text-sm space-y-2 mb-6">
          <li>12-week intensive program</li>
          <li>Live instructor-led classes</li>
          <li>Hands-on projects and assignments</li>
          <li>100% job assistance after completion</li>
        </ul>

        <div className="flex justify-between gap-2">
          <button className="flex-1 border border-[#2A75BB] text-[#2A75BB] py-2 rounded-xl hover:bg-[#2A75BB1a] hover:cursor-pointer transition">
            View Details
          </button>
          <button className="flex-1 bg-[#2A75BB] text-white py-2 rounded-xl hover:bg-[#225f99] transition hover:cursor-pointer ">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoursesCard;
