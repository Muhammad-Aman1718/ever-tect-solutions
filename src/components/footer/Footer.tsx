import React from "react";
import Image from "next/image";
import Logo from "../../../public/assets/logo.png";

const Footer = () => {
  return (
    <div className="bg-[#E1F0FF] ">
      <div className="">
        <div className="flex items-center  ">
          <Image
            src={Logo}
            alt="logo does not show"
            className="w-[120px] h-[120px] "
          />
          <div>
            <h3 className=" text-[#2A75BB] text-[30px] leading-[10px] ">
              EVERTECH
            </h3>
            <h3 className=" text-[28px] leading-[45px] ">SOLUTIONS</h3>
            <p className=" text-[8px] font-bold leading-0 ">
              Institute of Skill Development & Software House
            </p>
          </div>
        </div>
        <div>
          <h1 className=" text-[40px] ">Office Address</h1>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Footer;
