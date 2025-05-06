import MainContainer from "@/components/MainContainer";
import Navbar from "@/components/navbar/Navbar";
import React from "react";

const Home = () => {
  return (
    <div className=" mx-auto ">
      <MainContainer className=" border ">
        <Navbar />
      </MainContainer>
    </div>
  );
};

export default Home;
