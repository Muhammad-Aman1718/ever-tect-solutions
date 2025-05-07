import HeroSection from "@/components/heroSection/HeroSection";
import MainContainer from "@/components/MainContainer";
import Navbar from "@/components/navbar/Navbar";
import React from "react";

const Home = () => {
  return (
    <div className="h-[4000px] ">
      <div className=" bg-[#F5F7FA] ">
        <MainContainer className=" border ">
          <Navbar />
          <HeroSection />
        </MainContainer>
      </div>
    </div>
  );
};

export default Home;
