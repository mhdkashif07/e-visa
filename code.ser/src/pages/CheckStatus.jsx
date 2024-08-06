import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useReactToPrint } from "react-to-print";
import PrintableDocument from "./PrintableComponent"; // Ensure correct import
import "./checkStatus.css";
import { Grid } from "@mui/material";

const CheckStatus = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [applicationData, setApplicationData] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  console.log("applicationData", applicationData);
  const [showForm, setShowForm] = useState(true); // State to toggle form visibility
  const componentRef = useRef(); // Reference for the component to be printed

  const onSubmit = async (formData) => {
    setIsSubmitting(true);
    try {
      const response = await axios.post(
        "https://e-visa-project.vercel.app/api/visa/check/application/status",
        {
          trackingId: formData.referenceNumber,
        }
      );
      console.log(".............data", response);
      setApplicationData(response.data.data.applicationData); // Store data received from backend
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle error
    } finally {
      setIsSubmitting(false);
    }
    setShowForm(false); // Hide form after successful submission
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

  return (
    <div className="container" style={{ width: "90%" }}>
      <h6 className="text-center mb-2 mt-5" style={{ color: "white" }}>
        Information Box
      </h6>
      <p className="mb-5" style={{ color: "white" }}>
        In order to check the status of your application or continue an
        unfinished application, please enter your application reference number
        in the relevant box. If you do not know this number, you can find it in
        the e-mail message that we sent to you. It is an 8-symbol alphanumeric
        code.
      </p>

      {/* Conditionally render the form */}
      {showForm && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label
              htmlFor="referenceNumber"
              className="form-label"
              style={{ color: "white" }}
            >
              Insert Your Reference Number
            </label>
            <input
              id="referenceNumber"
              type="text"
              className="form-control"
              {...register("referenceNumber", {
                required: "Reference number is required",
              })}
            />
            {errors.referenceNumber && (
              <p className="text-danger">{errors.referenceNumber.message}</p>
            )}
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
        </form>
      )}

      {applicationData && (
        <div className="mt-4 application-status">
          {/* <dev>
            <img src={applicationData.photo} alt="" width={"50px"}  height={"50%"}/>
          </dev> */}
          <h4 style={{ color: "#fff" }} className="title text-center">
            Application Status
          </h4>

          <div className="formContainer">
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <div className="form-group">
                  <label className="form-label">Application ID:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={applicationData.trackingId}
                    readOnly
                  />
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                <div className="form-group">
                  <label className="form-label">Country:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={applicationData.country}
                    readOnly
                  />
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                <div className="form-group">
                  <label className="form-label">First Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={applicationData.firstName}
                    readOnly
                  />
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                <div className="form-group">
                  <label className="form-label">Last Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={applicationData.lastName}
                    readOnly
                  />
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                <div className="form-group">
                  <label className="form-label">Date of Birth:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={new Date(
                      applicationData.dateOfBirth
                    ).toLocaleDateString()}
                    readOnly
                  />
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                <div className="form-group">
                  <label className="form-label">Passport Number:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={applicationData.passportNumber}
                    readOnly
                  />
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                <div className="form-group">
                  <label className="form-label">Passport Issue Date:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={new Date(
                      applicationData.passportIssueDate
                    ).toLocaleDateString()}
                    readOnly
                  />
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                <div className="form-group">
                  <label className="form-label">Passport Expiry Date:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={new Date(
                      applicationData.passportExpiryDate
                    ).toLocaleDateString()}
                    readOnly
                  />
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                <div className="form-group">
                  <label className="form-label">Gender:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={applicationData.gender}
                    readOnly
                  />
                </div>
              </Grid>

              <Grid item xs={12} md={6}>
                <div className="form-group">
                  <label className="form-label">Email:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={applicationData.email}
                    readOnly
                  />
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                <div className="form-group">
                  <label className="form-label">Purpose of Visit:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={applicationData.purposeOfVisit}
                    readOnly
                  />
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                <div className="form-group">
                  <label className="form-label">Plan Date of Entry:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={new Date(
                      applicationData.planDateOfEntry
                    ).toLocaleDateString()}
                    readOnly
                  />
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className="form-group">
                  <p style={{ color: "#fff", mb: "0px !important" }}>
                    Plan Date of Exit:
                  </p>
                  <input
                    style={{
                      height: "6vh",
                      width: "100%",
                      borderRadius: "6px",
                      backgroundColor: "#333",
                      color: "#fff",
                      border: "1px solid #fff",
                    }}
                    type="text"
                    className="formControlLast"
                    value={new Date(
                      applicationData.planDateOfExit
                    ).toLocaleDateString()}
                    readOnly
                  />
                </div>
              </Grid>
            </Grid>
          </div>

          {/* Button to print */}
          <div className="text-center mt-5">
            <button className="btn btn-secondary me-5" onClick={handlePrint}>
              Print
            </button>
            <button
              className="btn btn-secondary"
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
