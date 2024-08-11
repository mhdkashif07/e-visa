import React, { useEffect } from "react";

import MultiStepForm from "../components/MultiStepForm";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const authIdToken = sessionStorage.getItem("authToken");
    if (!authIdToken) {
      navigate("/signin");
    }
  }, []);
  return (
    <>
      <MultiStepForm />
    </>
  );
};
export default Form;
