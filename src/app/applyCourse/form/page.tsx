"use client";
import InputField from "@/components/inputs/InputField";
import MainContainer from "@/components/MainContainer";
import React from "react";

const Form = () => {
  return (
    <div>
      <MainContainer>
        <InputField
          label="Full Name :"
          placeholder="Enter your name"
          inputType="text"
        />
        <InputField label="" />
        <InputField />
        <InputField />
        <InputField />
      </MainContainer>
    </div>
  );
};

export default Form;
