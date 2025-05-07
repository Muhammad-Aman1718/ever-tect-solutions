import React from "react";

const Navbar = () => {
  return (
    <div className=" border  flex items-center justify-around py-[22px] ">
      <div className="border flex-[1.5] ">
        <h1>IMG</h1>
      </div>
      <div className="border flex-[3]  ">
        <ul className=" flex items-center justify-around ">
          <li className="leading-6 text-[#18191F] text-[18px] font-medium ">
            Home
          </li>
          <li className="leading-6 text-[#18191F] text-[18px] font-medium ">
            Courses
          </li>
          <li className="leading-6 text-[#18191F] text-[18px] font-medium ">
            Services
          </li>
          <li className="leading-6 text-[#18191F] text-[18px] font-medium ">
            About Us
          </li>
          <li className="leading-6 text-[#18191F] text-[18px] font-medium ">
            Contact Us
          </li>
        </ul>
      </div>
      <div className=" border flex items-center justify-center flex-[1.5]  ">
        <button className=" py-[10px] px-[40px] bg-[#4CAF4F] rounded-[4px] text-white text-[14px]  hover:cursor-pointer  ">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
