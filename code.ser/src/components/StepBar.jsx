// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Stepper from "./Stepper";
import VisaForm from "./VisaForm";
import axios from "axios";
import jsPDF from "jspdf";

import ima from "../assets/images/images.png";
import { v4 as uuidv4 } from "uuid";
import titleImg from "../assets/images/pdfTitleImg.png";
import name from "../assets/pdf/name.png";
import date from "../assets/pdf/date.png";
import city from "../assets/pdf/city.png";
import passport from "../assets/pdf/passport.png";
import Xpassport from "../assets/pdf/xpassport.png";
import ppassport from "../assets/pdf/ppassort.png";
import visa from "../assets/pdf/visa.png";
import { toast } from "react-toastify";

const StepBar = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [image, setImage] = useState(null);
  const [formData, setFormData] = useState({});

  const handleNext = () => {
    if (step < 6) {
      setStep(step + 1);
    }
  };

  const handleConfirmData = () => {
    const uniqueID = uuidv4(); // Generate unique ID
    setFormData((prevData) => ({ ...prevData, applicationID: uniqueID }));
    setStep(step + 1);
  };

  // const handleSubmit = async () => {
  //   setIsSubmitting(true);
  //   console.log("formData", formData);
  //   try {
  //     const response = await axios.post(
  //       "https://e-visa-project.vercel.app/api/visa/new/application",
  //       formData,
  //       {
  //         headers: {
  //           Authorization: "Bearer YOUR_AUTH_TOKEN", // Replace with your actual auth token if required
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     ); // Use your backend URL here
  //     if (response.status === 200) {
  //       console.log("Form submitted successfully");
  //       // Reset the form data if needed
  //     }
  //   } catch (error) {
  //     console.error("Error submitting form:", error);
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };

  // const handleSubmit = async () => {
  //   setIsSubmitting(true);
  //   console.log("formData", formData);
  //   try {
  //     // Create a FormData object
  //     const formDataToSend = new FormData();
  //     // Append formData keys and values to the FormData object
  //     Object.keys(formData).forEach((key) => {
  //       formDataToSend.append(key, formData[key]);
  //     });

  //     const response = await axios.post(
  //       "https://e-visa-project.vercel.app/api/visa/new/application",
  //       formDataToSend,
  //       {
  //         headers: {
  //           Authorization: "Bearer YOUR_AUTH_TOKEN", // Replace with your actual auth token if required
  //           "Content-Type": "multipart/form-data",
  //         },
  //       }
  //     );

  //     if (response.status === 200) {
  //       console.log("Form submitted successfully");
  //       // Reset the form data if needed
  //     }
  //   } catch (error) {
  //     console.error("Error submitting form:", error);
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      // Create a FormData object
      const formDataToSend = new FormData();
      // Append formData keys and values to the FormData object
      // Append formData keys and values to the FormData object
      Object.keys(formData).forEach((key) => {
        if (key === "photo") {
          formDataToSend.append("profilePicture", formData[key]); // Rename photo to image
        } else {
          formDataToSend.append(key, formData[key]);
        }
      });

      // Get current date and time in the desired format
      const now = new Date();
      const formattedDateTime = `${now
        .getDate()
        .toString()
        .padStart(2, "0")}-${(now.getMonth() + 1)
        .toString()
        .padStart(2, "0")}-${now.getFullYear()} (${now
        .getHours()
        .toString()
        .padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}:${now
        .getSeconds()
        .toString()
        .padStart(2, "0")})`;

      // Append the current date and time to the FormData object
      formDataToSend.append("dateOfVisa", formattedDateTime);

      // Log the FormData content
      // for (let [key, value] of formDataToSend.entries()) {
      //   console.log(key, value);
      // }

      const response = await axios.post(
        "https://e-visa-project.vercel.app/api/visa/new/application",
        formDataToSend,
        {
          headers: {
            Authorization: "Bearer YOUR_AUTH_TOKEN", // Replace with your actual auth token if required
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        // Reset the form data if needed
        toast.success("Form submitted successfully!", {
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
      toast.error("Error submitting form", {
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
      setIsSubmitting(false);
    }
  };

  const handleDownload = () => {
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: [148, 210], // A5 size
    });

    // Add Title Image URL
    const titleImageUrl = titleImg; // Replace with your image URL

    // Function to convert image URL to Base64
    const imageToBase64 = (url) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = "Anonymous"; // Handle CORS issues
        img.onload = () => {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");
          canvas.width = img.width;
          canvas.height = img.height;
          ctx.drawImage(img, 0, 0);
          const dataURL = canvas.toDataURL("image/png");
          resolve(dataURL);
        };
        img.onerror = reject;
        img.src = url;
      });
    };

    // Add Images
    const addImagesToPDF = async () => {
      try {
        // Add Title Image
        const titleImageDataURL = await imageToBase64(titleImageUrl);
        const imageHeight = 25; // Adjust height as needed
        const imageY = 10; // Adjust Y position to fit within the page
        const imageWidth = 132; // Adjust width to fit within page margins
        doc.addImage(
          titleImageDataURL,
          "PNG",
          10,
          imageY,
          imageWidth,
          imageHeight
        ); // Adjust dimensions and position as needed

        // Add local photo file
        if (formData.photo) {
          const photoURL = URL.createObjectURL(formData.photo);
          const photoDataURL = await imageToBase64(photoURL);
          doc.addImage(
            photoDataURL,
            "PNG",
            10,
            imageY + imageHeight + 10,
            20,
            20
          ); // Adjust dimensions and position as needed
        }

        // Add QR code image
        if (ima) {
          const qrCodeDataURL = await imageToBase64(ima);
          const qrCodeSize = 20;
          const qrCodeX = 118; // Position to fit within page margins
          const qrCodeY = imageY + imageHeight + 10;
          const idTextY = qrCodeY - 5; // Adjust position for ID text

          // Set smaller font size for the ID text
          doc.setFontSize(10);
          doc.text(
            `Your ID is ${formData.applicationID}`,
            qrCodeX + qrCodeSize / 2,
            idTextY,
            { align: "right" }
          );

          // Reset font size for other text
          doc.setFontSize(12);
          doc.addImage(
            qrCodeDataURL,
            "PNG",
            qrCodeX,
            qrCodeY,
            qrCodeSize,
            qrCodeSize
          ); // Adjust dimensions and position as needed
        }

        // Prepare images for labels
        const labelImages = {
          name: name,
          dateOfBirth: date,
          citizenship: city,
          passportNumber: passport,
          dateOfIssue: ppassport,
          dateOfExpiry: Xpassport,
          validityOfVisa: visa,
        };

        const fields = [
          {
            label: labelImages.name,
            value: `${formData.firstName} ${formData.lastName}`,
          },
          {
            label: labelImages.dateOfBirth,
            value: formData.dateOfBirth
              ? formData.dateOfBirth.toLocaleDateString()
              : "",
          },
          { label: labelImages.citizenship, value: formData.country },
          { label: labelImages.passportNumber, value: formData.passportNumber },
          {
            label: labelImages.dateOfIssue,
            value: formData.passportIssueDate
              ? formData.passportIssueDate.toLocaleDateString()
              : "",
          },
          {
            label: labelImages.dateOfExpiry,
            value: formData.passportExpiryDate
              ? formData.passportExpiryDate.toLocaleDateString()
              : "",
          },
          {
            label: labelImages.validityOfVisa,
            value: `${
              formData.planDateOfEntry
                ? formData.planDateOfEntry.toLocaleDateString()
                : ""
            } - ${
              formData.planDateOfExit
                ? formData.planDateOfExit.toLocaleDateString()
                : ""
            }`,
          },
        ];

        const leftAlignX = 10;
        const rightAlignX = 138; // Adjust to fit within page margins
        const infoYStart = imageY + imageHeight + 40;
        const infoLineHeight = 10; // Adjust line height for better spacing

        doc.setFontSize(12);
        doc.setFont("Roboto", "normal");

        for (let i = 0; i < fields.length; i++) {
          const field = fields[i];
          const yPosition = infoYStart + i * infoLineHeight;

          try {
            // Add label image with specific size adjustments for passportNumber
            const labelImageDataURL = await imageToBase64(field.label);
            const labelWidth =
              field.label === labelImages.passportNumber
                ? 80
                : field.label === labelImages.dateOfIssue
                ? 90
                : field.label === labelImages.dateOfExpiry
                ? 90
                : 60; // Increase width for passportNumber
            const labelHeight =
              field.label === labelImages.passportNumber
                ? 8
                : field.label === labelImages.dateOfIssue
                ? 8
                : field.label === labelImages.dateOfExpiry
                ? 8
                : 7; // Increase height for passportNumber

            doc.addImage(
              labelImageDataURL,
              "PNG",
              leftAlignX,
              yPosition - 3, // Adjust Y position for better alignment with text
              labelWidth,
              labelHeight
            ); // Adjust dimensions as needed
          } catch (error) {
            console.error(`Error loading label image for field ${i}:`, error);
            continue; // Skip to the next field if an image fails to load
          }

          // Add value text
          doc.text(field.value, rightAlignX, yPosition, { align: "right" });
        }

        const textBlock =
          "Validity period of a visa is generally longer than the period of stay. The validity period establishes the first and last dates during which the visa can be used. Period of stay indicates the length of time you have permission to remain in Kyrgyzstan within the validity period of the visa.";
        const lines = doc.splitTextToSize(textBlock, 128); // Fit within page margins

        let currentY = infoYStart + fields.length * infoLineHeight + 10;
        const lineHeight = 6;

        lines.forEach((line) => {
          doc.text(line, leftAlignX, currentY, { maxWidth: 128 });
          currentY += lineHeight;
        });

        // Save PDF
        doc.save("visa_application.pdf");
      } catch (error) {
        console.error("Error adding images to PDF:", error);
      }
    };

    addImagesToPDF();
  };

  return (
    <div className="container mt-5 mb-5">
      <h1
        className="text-center"
        style={{
          color: "white",
          fontSize: "33px",
          letterSpacing: "0.8px",
          marginBottom: "30px",
        }}
      >
        APPLY FOR VISA
      </h1>
      <Stepper step={step} />
      <VisaForm
        step={step}
        isSubmitting={isSubmitting}
        setIsSubmitting={setIsSubmitting}
        formData={formData}
        setImage={setImage}
        setFormData={setFormData}
      />
      <div className="text-center mt-4">
        {step < 5 && (
          <button
            className="btn"
            style={{
              backgroundColor: "#09B169",
              color: "white",
              padding: "8px 24px",
            }}
            onClick={handleNext}
          >
            Next
          </button>
        )}
        {step === 5 && (
          <button
            className="btn"
            style={{
              backgroundColor: "#09B169",
              color: "white",
              padding: "8px 24px",
            }}
            onClick={handleConfirmData}
          >
            Confirm Data
          </button>
        )}
        {step === 6 && (
          <div>
            {/* <VisaForm applicationID={formData.applicationID} /> */}
            {/* <div className="alert alert-info">
              Your application ID is: {formData.applicationID}
            </div> */}
            <button
              className="btn"
              style={{
                backgroundColor: "#09B169",
                color: "white",
                padding: "8px 24px",
                marginRight: "10px",
              }}
              onClick={handleSubmit}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
            <button
              className="btn"
              style={{
                backgroundColor: "#09B169",
                color: "white",
                padding: "8px 24px",
              }}
              onClick={handleDownload}
            >
              Download
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default StepBar;
