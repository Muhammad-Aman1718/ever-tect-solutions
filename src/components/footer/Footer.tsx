import React from "react";
import Image from "next/image";
import Logo from "../../../public/assets/logo.png";

const Footer = () => {
  return (
    <div className="bg-[#E1F0FF] ">
      <div>
        <div className="flex items-center  ">
          <Image
            src={Logo}
            alt="logo does not show"
            className="w-[150px] h-[150px] "
          />
          <div>
            <h3 className=" text-[#2A75BB] text-[40px] leading-[20px] ">
              EVERTECH
            </h3>
            <h3 className=" text-[38px] leading-[50px] ">SOLUTIONS</h3>
            <p className=" text-[10px] font-bold leading-0 ">
              Institute of Skill Development & Software House{" "}
            </p>
          </div>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Footer;
