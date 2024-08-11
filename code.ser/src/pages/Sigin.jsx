import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom"; // Import Link for navigation
import { toast } from "react-toastify";

const Sigin = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    // Here you can handle form submission, e.g., send data to your backend
    console.log("login", data, password);

    try {
      const response = await axios.post(
        "https://e-visa-project.vercel.app/api/visa/login",
        {
          identifier: data.username,
          password: password,
        },
        {
          headers: {
            // Authorization: "Bearer YOUR_AUTH_TOKEN", // Replace with your actual auth token if required
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        sessionStorage.setItem("authToken", response?.data?.token);
        navigate("/");
        // Reset the form data if needed
        toast.success("Successfully login", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          // transition: Bounce,
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error(error.response.data.error.message, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        // transition: Bounce,
      });
    }
    // finally {
    //   setIsSubmitting(false);
    // }

    // Clear the form fields after submission
    // reset();
  };

  return (
    <div className="container" style={{ width: "50%" }}>
      <h6 className="text-center mb-5 mt-5" style={{ color: "white" }}>
        Log in to personal account
      </h6>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username (or Email)
          </label>
          <input
            id="username"
            type="text"
            className="form-control"
            {...register("username", { required: "Username is required" })}
          />
          {errors.username && (
            <p className="text-danger">{errors.username.message}</p>
          )}
        </div>
        <div className="mb-1">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            id="password"
            type="password"
            className="form-control"
            {...register("password", {
              onChange: (e) => setPassword(e.target.value),
            })}
          />
          {/* {errors.password && (
            <p className="text-danger">{errors.password.message}</p>
          )} */}
        </div>
        <div className="d-flex justify-content-between mb-3">
          <Link
            to="/registration"
            className="btn btn-link"
            style={{ color: "#09B169" }}
          >
            Registration
          </Link>
          <Link
            to="/forgot-password"
            className="btn btn-link"
            style={{ color: "#09B169" }}
          >
            Forget your password?
          </Link>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="btn"
            style={{
              backgroundColor: "#09B169",
              color: "white",
              padding: "8px 24px",
            }}
          >
            Log In
          </button>
        </div>
      </form>
    </div>
  );
};

export default Sigin;
