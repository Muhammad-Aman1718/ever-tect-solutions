import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const useApplyCourse = () => {
  const searchParams = useSearchParams();
  const selectedCourse = searchParams.get("course");
  const [course, setCourse] = useState("");
  const [fullName, setFullName] = useState("");
  const [fatherName, setFatherName] = useState("");
  

  useEffect(() => {
    if (selectedCourse) {
      setCourse(selectedCourse);
    }
  }, [selectedCourse]);

  return { course, setCourse };
};

export default useApplyCourse;
