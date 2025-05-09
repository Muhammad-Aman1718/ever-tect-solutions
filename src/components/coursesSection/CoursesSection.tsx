// import React from "react";
// import CoursesCard from "./CoursesCard";

// const allCourses = [{

// }];

// const CoursesSection = () => {
//   return (
//     <div>
//       <h1 className="text-[#4D4D4D] text-[36px] font-semibold leading-[44px] text-center mb-[50px] ">
//         Courses
//       </h1>
//       <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))]  gap-[40px] lg:grid-cols-3 ">
//         <CoursesCard
//           courseHeading="Web Development (Mern Stack) "
//           coursePoints={[
//             "Html5 / Css3",
//             "Bootstrap / Tailwind",
//             "Javascript",
//             "React.js",
//             "Node.js",
//           ]}
//         />
//         <CoursesCard
//           courseHeading="Graphic Designing Pro"
//           coursePoints={[
//             "Canva Pro",
//             "Adobe Products Family",
//             "Coral Draw",
//             "Filmora (UI/UX)",
//             "AI Video Creations Tools Creations",
//           ]}
//         />
//         <CoursesCard
//           courseHeading="Digital Marketing Pro"
//           coursePoints={[
//             "Graphics Designing",
//             "Social Media Marketing",
//             "Web Development (Wordpress/Shoppify)",
//             "SEO (Search Engine Optimization)",
//             "E-Commerce Store",
//           ]}
//         />
//         <CoursesCard
//           courseHeading="E-Commerce"
//           coursePoints={[
//             "Shoppify",
//             "eBay",
//             "Meta Platform (Facebook/Instagram)",
//             "Social Media Marketing",
//             "Product Hunting and listing",
//           ]}
//         />
//         <CoursesCard
//           courseHeading="Mobile App Development"
//           coursePoints={[
//             "Android based App Development",
//             "XML (Front-End)",
//             "UI/UX",
//             "Firebase Database",
//             "Internship",
//           ]}
//         />
//         <CoursesCard
//           courseHeading="Python Programming"
//           coursePoints={[
//             "Basic Programming",
//             "Object Oriented Programming (OOP)",
//             "Data Analytics",
//             "Python Libraries",
//             "Machine Learning Concepts",
//           ]}
//         />
//         {/*  */}
//         <CoursesCard
//           courseHeading="Digital Business Booster"
//           coursePoints={[
//             "Graphics Designing",
//             "Social Media Marketing",
//             "Web Development (Wordpress/Shoppify)",
//             "SEO (Search Engine Optimization)",
//             "E-Commerce Store",
//           ]}
//         />
//         <CoursesCard
//           courseHeading="AI Media Production"
//           coursePoints={[
//             "Video and Audio ads Creation",
//             "Educational Contents",
//             "Apps Designing",
//             "Web Designing",
//             "E-Commerce Store",
//           ]}
//         />
//         <CoursesCard
//           courseHeading="Wordpress Web Development"
//           coursePoints={[
//             "Front-End Designing",
//             "Backend Query Processing",
//             "E-Commerce Store",
//             "Customized Websites",
//             "User Friendly Interface",
//           ]}
//         />
//       </div>
//     </div>
//   );
// };

// export default CoursesSection;

"use client";

import React, { useState } from "react";
import CoursesCard from "./CoursesCard";

const allCourses = [
  {
    courseHeading: "Web Development (Mern Stack)",
    coursePoints: [
      "Html5 / Css3",
      "Bootstrap / Tailwind",
      "Javascript",
      "React.js",
      "Node.js",
    ],
  },
  {
    courseHeading: "Graphic Designing Pro",
    coursePoints: [
      "Canva Pro",
      "Adobe Products Family",
      "Coral Draw",
      "Filmora (UI/UX)",
      "AI Video Creations Tools Creations",
    ],
  },
  {
    courseHeading: "Digital Marketing Pro",
    coursePoints: [
      "Graphics Designing",
      "Social Media Marketing",
      "Web Development (Wordpress/Shoppify)",
      "SEO (Search Engine Optimization)",
      "E-Commerce Store",
    ],
  },
  {
    courseHeading: "E-Commerce",
    coursePoints: [
      "Shoppify",
      "eBay",
      "Meta Platform (Facebook/Instagram)",
      "Social Media Marketing",
      "Product Hunting and listing",
    ],
  },
  {
    courseHeading: "Mobile App Development",
    coursePoints: [
      "Android based App Development",
      "XML (Front-End)",
      "UI/UX",
      "Firebase Database",
      "Internship",
    ],
  },
  {
    courseHeading: "Python Programming",
    coursePoints: [
      "Basic Programming",
      "Object Oriented Programming (OOP)",
      "Data Analytics",
      "Python Libraries",
      "Machine Learning Concepts",
    ],
  },
  {
    courseHeading: "Digital Business Booster",
    coursePoints: [
      "Graphics Designing",
      "Social Media Marketing",
      "Web Development (Wordpress/Shoppify)",
      "SEO (Search Engine Optimization)",
      "E-Commerce Store",
    ],
  },
  {
    courseHeading: "AI Media Production",
    coursePoints: [
      "Video and Audio ads Creation",
      "Educational Contents",
      "Apps Designing",
      "Web Designing",
      "E-Commerce Store",
    ],
  },
  {
    courseHeading: "Wordpress Web Development",
    coursePoints: [
      "Front-End Designing",
      "Backend Query Processing",
      "E-Commerce Store",
      "Customized Websites",
      "User Friendly Interface",
    ],
  },
];

const CoursesSection = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleToggle = () => {
    setVisibleCount((prev) => (prev >= allCourses.length ? 3 : prev + 3));
  };

  const visibleCourses = allCourses.slice(0, visibleCount);

  return (
    <div>
      <h1 className="text-[#4D4D4D] text-[36px] font-semibold leading-[44px] text-center mb-[50px]">
        Courses
      </h1>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-[40px] lg:grid-cols-3">
        {visibleCourses.map((course, index) => (
          <CoursesCard
            key={index}
            courseHeading={course.courseHeading}
            coursePoints={course.coursePoints}
          />
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <button
          onClick={handleToggle}
          className="bg-[#2A75BB] text-white px-6 py-2 rounded-xl hover:bg-[#225f99] transition"
        >
          {visibleCount >= allCourses.length ? "Show Less" : "View More"}
        </button>
      </div>
    </div>
  );
};

export default CoursesSection;
