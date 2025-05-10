import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/config/prisma";
import { AxiosError } from "axios";
import { userData } from "@/types/types";

export const POST = async (req: NextRequest) => {
  try {
    const body: userData = await req.json();
    const {
      fullName,
      fatherName,
      email,
      phoneNumber,
      education,
      course,
      message,
    } = body;

    console.log("this is user data body ===========>", body);

    const checkDuplicateData = await prisma.courseForm.findMany({});

    if (
      !fullName ||
      !fatherName ||
      !email ||
      !phoneNumber ||
      !education ||
      !course ||
      !message
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "requried all feilds",
        },
        { status: 400 }
      );
    }

    const existingUser = await prisma.courseForm.findUnique({
      where: {
        email: email, // Check for duplicate email
      },
    });

    if (existingUser) {
      return NextResponse.json(
        {
          success: false,
          message: "A user with this email has already submitted the form",
        },
        { status: 400 }
      );
    }

    const carData = await prisma.courseForm.create({
      data: {
        fullName: fullName,
        fatherName: fatherName,
        email: email,
        phoneNumber: phoneNumber,
        education: education,
        course: course,
        message: message,
      },
    });

    return NextResponse.json({
      success: true,
      message: "User Data saved successfully",
      car: carData,
    });
  } catch (error) {
    const errorAxios = error as AxiosError;
    return NextResponse.json({
      success: false,
      message: "Something went wrong",
      error: errorAxios.message || "Unknown error",
    });
  } finally {
    await prisma.$disconnect();
  }
};
