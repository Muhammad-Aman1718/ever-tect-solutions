import { courseForm } from "@/store/slices/courseForm";
import { useAppDispatch } from "@/store/store";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const useApplyCourse = () => {
  const searchParams = useSearchParams();
  const selectedCourse = searchParams.get("course");
  const [fullName, setFullName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [education, setEducation] = useState("");
  const [course, setCourse] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (selectedCourse) {
      setCourse(selectedCourse);
    }
  }, [selectedCourse]);

  const userData = {
    fullName,
    fatherName,
    email,
    phoneNumber,
    education,
    course,
    message,
  };

  const handleSubmit = async () => {
    try {
      console.log(" handleSubmit was clicked");

      await dispatch(courseForm(userData)); // assuming this is an async action
      setFullName("");
      setFatherName("");
      setEmail("");
      setPhoneNumber("");
      setEducation("");
      setCourse("");
      setMessage("");
    } catch (error) {
      // Handle error (e.g., show an error message)
    }
  };

  return {
    fullName,
    setFullName,
    fatherName,
    setFatherName,
    email,
    setEmail,
    phoneNumber,
    setPhoneNumber,
    education,
    setEducation,
    course,
    setCourse,
    message,
    setMessage,
    handleSubmit,
  };
};

export default useApplyCourse;
