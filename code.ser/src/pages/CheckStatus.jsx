import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useReactToPrint } from "react-to-print";
import PrintableDocument from "./PrintableComponent"; // Ensure correct import
import "./checkStatus.css";
import { Grid } from "@mui/material";
import { toast } from "react-toastify";
// import captchaImgSrc from "../assets/images/captcha/vasplusCaptcha00a0.jpg";
import refreshIcon from "../assets/images/refresh_icon.png";

// const captchaCodes = ["00a0", "1d85", "4e50", "5aa1", "5abf"];

const captchaImagesCodes = [
  { id: "00a0", text: "whcxfn" },
  { id: "1d85", text: "tdnjx8" },
  { id: "4e50", text: "25kg2k" },
  { id: "5aa1", text: "w7sv6q" },
  { id: "5abf", text: "3hcv4s" },
  { id: "6faf", text: "rrzb95" },
  { id: "24bb", text: "n2w8wq" },
  { id: "47c6", text: "qdhfxf" },
  { id: "52c3", text: "rwjw3j" },
  { id: "54f1", text: "23brdd" },
  { id: "93af", text: "r2f66h" },
  { id: "0356", text: "y9d6pt" },
  { id: "531b", text: "jrk4s5" },
  { id: "2573", text: "ypnk5q" },
  { id: "3791", text: "hdhmvm" },
  { id: "a3e6", text: "544gwk" },
  { id: "a318", text: "3v8x73" },
  { id: "a804", text: "s2ntmn" },
  { id: "c2bd", text: "g3hx9k" },
  { id: "d214", text: "bgxhxc" },
  { id: "f46e", text: "fkf7x3" },
  { id: "ffc0", text: "53nj35" },
];

// Generate captchaCodes from captchaImagesCodes
const captchaCodes = captchaImagesCodes.map((captcha) => captcha.id);

const CheckStatus = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [applicationData, setApplicationData] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showVerificationCodeForm, setShowVerificationCodeForm] =
    useState(false);
  const [isSendingCode, setIsSendingCode] = useState(false);
  const [verificationCodeInput, setVerificationCodeInput] = useState("");
  const [trackingId, setTrackingId] = useState("");

  const [captchaCode, setCaptchaCode] = useState("");
  const [userInput, setUserInput] = useState("");
  const [currentCaptcha, setCurrentCaptcha] = useState(generateCaptcha());

  console.log(trackingId);

  const [showForm, setShowForm] = useState(true); // State to toggle form visibility
  const componentRef = useRef(); // Reference for the component to be printed

  // Function to generate a random captcha
  function generateCaptcha() {
    const randomIndex = Math.floor(Math.random() * captchaCodes?.length);
    return captchaImagesCodes.find(
      (captcha) => captcha.id === captchaCodes[randomIndex]
    );
  }

  // Function to refresh captcha
  const refreshCaptcha = () => {
    setCurrentCaptcha(generateCaptcha());
    setUserInput("");
  };

  // Function to handle user input change
  const handleCaptchaCodeChange = (e) => {
    setUserInput(e.target.value);
  };

  // Function to validate captcha
  const validateCaptcha = () => {
    if (userInput === currentCaptcha.text) {
      alert("Captcha is correct!");
    } else {
      alert("Captcha is incorrect. Please try again.");
      refreshCaptcha(); // Optionally refresh captcha on incorrect attempt
    }
  };
  //check the tracking id
  const onSubmit = async (formData) => {
    setIsSubmitting(true);
    // validateCaptcha();
    if (userInput === currentCaptcha.text) {
      try {
        const response = await axios.post(
          "https://e-visa-project.vercel.app/api/visa/check/application/status",
          {
            trackingId: formData.referenceNumber,
          }
        );
        console.log(".............data", response);
        setApplicationData(response.data.data.applicationData); // Store data received from backend
        if (response.data.data.status === "success") {
          setShowForm(false);
          setShowVerificationCodeForm(true);
          setTrackingId(response.data.data.trackingId);
          toast.success(response.data.data.message, {
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
        console.log("Error fetching data:", error);
        if (
          error.response.data.error.name === "Verification Code already Exists"
        ) {
          setShowForm(false);
          setShowVerificationCodeForm(true);
          toast.success("Verification Code already sended to your email.", {
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
        } else {
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
      } finally {
        setIsSubmitting(false);
      }
    } else {
      toast.error("Captcha is incorrect!", {
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
      setIsSubmitting(false);
      refreshCaptcha(); // Optionally refresh captcha on incorrect attempt
    }

    reset(); // Optionally reset the form after submission
  };

  //verify the verification code and tracking id
  const handleVerification = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await axios.post(
        "https://e-visa-project.vercel.app/api/visa/verify/trackingId/&/Code",
        {
          trackingId: trackingId,
          verificationCode: verificationCodeInput,
        }
      );
      console.log(".............data", response);
      if (response.data.data.status === "success") {
        setApplicationData(response.data.data.applicationData); // Store data received from backend
        setShowVerificationCodeForm(false);
        toast.success(response.data.data.message, {
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
      console.log("Error fetching data:", error);

      if (error.response.data.error.name === "Verification code expired") {
        setShowVerificationCodeForm(true);
        toast.error("Verification code is expired pls resend the code", {
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
      } else {
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
    } finally {
      setIsSubmitting(false);
    }
    reset(); // Optionally reset the form after submission
  };

  //resend the verification code
  const handleResendCode = async (e) => {
    e.preventDefault();
    setIsSendingCode(true);
    try {
      const response = await axios.post(
        "https://e-visa-project.vercel.app/api/visa/send/code/again",
        {
          trackingId: trackingId,
        }
      );
      console.log(".............data", response);
      if (response.data.data.status === "success") {
        // setShowVerificationCodeForm(true);
        toast.success("Verification code resended to your email.", {
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
      console.log("Error fetching data:", error);
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
    } finally {
      setIsSendingCode(false);
    }
    reset(); // Optionally reset the form after submission
  };

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Application Details",
    onAfterPrint: () => {
      // Optionally handle any actions after printing
    },
  });

  const handlePreview = () => {
    // Implement preview functionality if needed
    alert("Preview functionality not implemented");
  };

  const periodOfStayDays = Math.ceil(
    (new Date(applicationData?.planDateOfExit) -
      new Date(applicationData?.planDateOfEntry)) /
      (1000 * 60 * 60 * 24)
  );

  return (
    <div className="container" style={{ width: "90%" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="informBox_5566">
          <h5 className="mb-1 mt-3" style={{ color: "white" }}>
            Information Box
          </h5>
          <p className="mb-4" style={{ color: "white" }}>
            {!showVerificationCodeForm ? (
              <>
                In order to check the status of your application or continue an
                unfinished application, please enter your application reference
                number in the relevant box. If you do not know this number, you
                can find it in the e-mail message that we sent to you. It is an
                8-symbol alphanumeric code.
              </>
            ) : (
              <>
                In order to verify your application status, please enter the
                verification code that we have sent to your email. The code is a
                6-digit numeric value. If you did not receive the code, please
                check your spam folder or request a new code.
              </>
            )}
          </p>
        </div>
      </div>

      {/* Conditionally render the form */}
      {showForm && (
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div style={{ width: "50%" }}>
            <div className="mb-3">
              <label
                htmlFor="referenceNumber"
                className="form-label"
                style={{ color: "white", marginBottom: "2px" }}
              >
                Insert Your Reference Number
              </label>
              <input
                id="referenceNumber"
                type="text"
                className="form-control"
                // onChange={(e) => setTrackingId(e.target.value)}
                {...register("referenceNumber", {
                  required: "Reference number is required",
                  onChange: (e) => setTrackingId(e.target.value),
                })}
              />
              {errors.referenceNumber && (
                <p className="text-danger">{errors.referenceNumber.message}</p>
              )}
            </div>
            <div>
              <div className="captcha-container mb-3">
                <img
                  src={`./captcha/vasplusCaptcha${currentCaptcha.id}.jpg`}
                  id="captchaimg"
                  alt="Captcha"
                />
                <img
                  src={refreshIcon}
                  onClick={refreshCaptcha}
                  className="refreshIcon"
                  style={{ marginLeft: "10px" }}
                  alt="Refresh Captcha"
                />
                <input
                  type="text"
                  value={userInput}
                  onChange={handleCaptchaCodeChange}
                  id="vpb_captcha_code"
                  name="vpb_captcha_code"
                  required
                />
              </div>
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
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </div>
        </form>
      )}

      {/* show form for the verification code */}
      {showVerificationCodeForm && (
        <form
          onSubmit={handleVerification}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div style={{ width: "50%" }}>
            <div className="mb-3">
              <label
                htmlFor="verificationCode"
                className="form-label"
                style={{ color: "white", marginBottom: "2px" }}
              >
                Insert Your Verification Code
              </label>
              <input
                id="verificationCode"
                type="text"
                className="form-control"
                onChange={(e) => setVerificationCodeInput(e.target.value)}
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="btn"
                style={{
                  backgroundColor: "#09B169",
                  color: "white",
                  padding: "8px 24px",
                  marginRight: "20px",
                }}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
              <button
                type="submit"
                className="btn"
                style={{
                  backgroundColor: "#09B169",
                  color: "white",
                  padding: "8px 24px",
                }}
                onClick={handleResendCode}
                disabled={isSendingCode}
              >
                {isSendingCode ? "Resending Code..." : "Resend Code"}
              </button>
            </div>
          </div>
        </form>
      )}

      {applicationData && (
        <div className="mt-4 application-status">
          {/* <dev>
            <img src={applicationData.photo} alt="" width={"50px"}  height={"50%"}/>
          </dev> */}
          <h1
            style={{
              color: "#fff",
              textTransform: "uppercase",
              fontSize: "3.8rem",
            }}
            className="title text-center"
          >
            Application Status
          </h1>

          <div className="formContainer">
            <Grid
              container
              spacing={2}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <Grid item xs={12} md={5.5}>
                <div className="form-group">
                  <label className="form-label">Visa application sataus:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={"CONFIRMED"}
                    readOnly
                  />
                </div>
              </Grid>
              <Grid item xs={12} md={5.5}>
                <div className="form-group">
                  <label className="form-label">Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={applicationData.firstName}
                    readOnly
                  />
                </div>
              </Grid>
              <Grid item xs={12} md={5.5}>
                <div className="form-group">
                  <label className="form-label">
                    Date of your application status is:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={applicationData.dateOfVisa}
                    readOnly
                  />
                </div>
              </Grid>
              <Grid item xs={12} md={5.5}>
                <div className="form-group">
                  <label className="form-label">Surname:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={applicationData.lastName}
                    readOnly
                  />
                </div>
              </Grid>
              <Grid item xs={12} md={5.5}>
                <div className="form-group">
                  <label className="form-label">Reference number:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={applicationData.trackingId}
                    readOnly
                  />
                </div>
              </Grid>
              <Grid item xs={12} md={5.5}>
                <div className="form-group">
                  <label className="form-label">Birth Date:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={new Date(applicationData.dateOfBirth)
                      .toLocaleDateString("en-GB")
                      .replace(/\//g, "-")}
                    readOnly
                  />
                </div>
              </Grid>
              <Grid item xs={12} md={5.5}>
                <div className="form-group">
                  <label className="form-label">Passport country:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={applicationData.country}
                    readOnly
                  />
                </div>
              </Grid>
              <Grid item xs={12} md={5.5}>
                <div className="form-group">
                  <label className="form-label">Visa type:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={applicationData.visaType}
                    readOnly
                  />
                </div>
              </Grid>
              <Grid item xs={12} md={5.5}>
                <div className="form-group">
                  <label className="form-label">Passport type:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={applicationData.passportType}
                    readOnly
                  />
                </div>
              </Grid>

              <Grid item xs={12} md={5.5}>
                <div className="form-group">
                  <label className="form-label">Visa duration:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={periodOfStayDays}
                    readOnly
                  />
                </div>
              </Grid>
              <Grid item xs={12} md={5.5}>
                <div className="form-group">
                  <label className="form-label">Passport number:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={applicationData.passportNumber}
                    readOnly
                  />
                </div>
              </Grid>
              <Grid item xs={12} md={5.5}>
                <div className="form-group">
                  <label className="form-label">Entry times:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={"SINGLE ENTRY"}
                    readOnly
                  />
                </div>
              </Grid>
              <Grid item xs={12} md={5.5}>
                <div className="form-group">
                  <label className="form-label">Issue date of passport:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={applicationData.passportIssueDate}
                    readOnly
                  />
                </div>
              </Grid>
              <Grid item xs={12} md={5.5}>
                <div className="form-group">
                  <label className="form-label">Visa validity period:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={`${new Date(applicationData.planDateOfEntry)
                      .toLocaleDateString("en-GB")
                      .replace(/\//g, "-")} - ${new Date(
                      applicationData.planDateOfExit
                    )
                      .toLocaleDateString("en-GB")
                      .replace(/\//g, "-")}`}
                    readOnly
                  />
                </div>
              </Grid>
              <Grid item xs={12} md={5.5}>
                <div className="form-group">
                  <label className="form-label">Issue date of passport:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={applicationData.passportExpiryDate}
                    readOnly
                  />
                </div>
              </Grid>
            </Grid>
          </div>

          {/* Button to print */}
          <div className="text-center mt-5">
            <button
              className="btn btn-secondary me-5 print-btn"
              onClick={handlePrint}
            >
              Print
            </button>
            <button
              className="btn btn-secondary print-btn"
              onClick={handlePreview}
              disabled
            >
              Preview
            </button>
          </div>
        </div>
      )}

      {/* PrintableDocument for printing */}
      {applicationData && (
        <div style={{ display: "none" }}>
          <PrintableDocument
            ref={componentRef}
            applicationData={applicationData}
          />
        </div>
      )}
    </div>
  );
};

export default CheckStatus;
