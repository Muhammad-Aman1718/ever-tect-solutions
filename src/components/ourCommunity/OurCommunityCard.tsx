import React from "react";
import Image, { StaticImageData } from "next/image";

interface OurCommunityCardPropsTypes {
  img?: string | StaticImageData;
  heading?: string;
  paragraph?: string;
}

const OurCommunityCard: React.FC<OurCommunityCardPropsTypes> = ({
  img,
  heading,
  paragraph,
}) => {
  return (
    <div className="border flex flex-col items-center justify-center py-6 px-4 max-w-[300px] ">
      <Image src={img!} alt="icon does not show" />
      <h1 className=" text-[28px] font-bold leading-[36px] text-[#4D4D4D] text-center ">
        {heading}
      </h1>
      <p className=" text-[14px] text-[#717171] leading-[20px] text-center ">
        {paragraph}
      </p>
    </div>
  );
};

export default OurCommunityCard;
