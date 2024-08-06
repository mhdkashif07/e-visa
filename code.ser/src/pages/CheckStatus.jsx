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

  console.log(applicationData);
  const periodOfStayDays = Math.ceil(
    (new Date(applicationData?.planDateOfExit) -
      new Date(applicationData?.planDateOfEntry)) /
      (1000 * 60 * 60 * 24)
  );

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
            <Grid container spacing={2}  style={{ display: "flex", justifyContent: "space-between" }}>
              <Grid item xs={12} md={5.5}>
                <div className="form-group">
                  <label className="form-label">Visa application sataus:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={"SUMBITTED"}
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
            <button className="btn btn-secondary me-5 print-btn" onClick={handlePrint}>
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
