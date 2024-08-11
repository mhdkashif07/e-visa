/* eslint-disable react/prop-types */
// PrintableDocument.js
import React from "react";
import Logo from "../assets/images/logoTop.png";
import QR from "../assets/images/images.png";
// import User from "../assets/images/user.jpeg";

// eslint-disable-next-line react/display-name
const PrintableDocument = React.forwardRef(({ applicationData }, ref) => {
  const periodOfStayDays = Math.ceil(
    (new Date(applicationData.planDateOfExit) -
      new Date(applicationData.planDateOfEntry)) /
      (1000 * 60 * 60 * 24)
  );
  return (
    <div
      ref={ref}
      className="printable-pdf-container"
      style={{
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "10px",
        textAlign: "center",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          justifyItems: "center",
          alignItems: "center",
          marginTop: "0px",
        }}
      >
        <img
          style={{
            width: "100px",
            height: "100px",
            marginRight: "50px",
            display: "flex",
            justifyItems: "center",
            alignItems: "center",
          }}
          src={Logo}
          alt=""
        />
        <div>
          <h2 style={{ fontSize: "1rem", fontWeight: "bolder" }}>
            КЫРГЫЗ РЕСПУБЛИКАСЫНЫН ТЫШКЫ ИШТЕР МИНИСТРЛИГИ
          </h2>
          <h2
            style={{
              marginTop: "10px",
              fontSize: "1rem",
              fontWeight: "bolder",
            }}
          >
            MINISTRY OF FOREIGN AFFAIRS OF THE KYRGYZ REPUBLIC
          </h2>
          <h4 style={{ marginTop: "30px" }}>Электрондук виза – «E-visa»</h4>
        </div>
      </div>
      <hr
        style={{
          border: "2px solid",
          borderColor: "black",
          width: "100%",
          marginBottom: "20px ",
          fontSize: ".7rem",
          fontWeight: "bolder",
        }}
      />
      <p style={{ display: "flex", justifyContent: "end" }}>
        Визанын номери/visa number: {applicationData.trackingId}
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "30px",
          padding: "0 50px",
        }}
      >
        <div style={{ flex: "1", textAlign: "left" }}>
          {/* Placeholder for photo */}
          {/* Replace with actual image URL or component if needed */}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          {/* Placeholder for QR Code */}
          {/* Replace with actual QR Code image URL */}
          {/* <img
            src={User}
            alt="user"
            style={{ maxWidth: "40%", height: "100px" }}
          /> */}
          <img
            src={applicationData.profilePicture}
            alt="user"
            style={{ maxWidth: "40%", height: "100px" }}
          />
          <img
            src={QR}
            alt="QR Code"
            style={{ maxWidth: "40%", height: "100px" }}
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0 50px",
        }}
      >
        <div style={{ width: "70%", textAlign: "start" }}>
          Толук аты-жөнү/Full name:
        </div>{" "}
        <div style={{ textAlign: "start" }}>
          {applicationData.firstName} {applicationData.lastName}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0 50px",
        }}
      >
        <div style={{ width: "70%", textAlign: "start" }}>
          Туулган датасы/Date of birth:
        </div>{" "}
        <div>
          {new Date(applicationData.dateOfBirth)
            .toLocaleDateString("en-GB")
            .replace(/\//g, "-")}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0 50px",
        }}
      >
        <div style={{ width: "70%", textAlign: "start" }}>
          Жарандыгы/Citizenship:
        </div>{" "}
        <div>{applicationData.country}</div>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          padding: "0 50px",
        }}
      >
        <div style={{ width: "70%", textAlign: "start" }}>
          Жол жүрүүчү документтин (паспорттун) номери/Number of travel document
          (Passport):
        </div>{" "}
        <div>{applicationData.passportNumber}</div>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          padding: "0 50px",
        }}
      >
        <div style={{ width: "70%", textAlign: "start" }}>
          Тип проїзного документа/Type of travel document:
        </div>{" "}
        <div>{applicationData.passportType}</div>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          padding: "0 50px",
          alignItems: "center",
        }}
      >
        <div style={{ width: "70%", textAlign: "start" }}>
          <span>Жол жүрүүчү документтин (паспорттун) номери /</span> Date of
          issue of travelling document (passport):
        </div>{" "}
        <div>
          {new Date(applicationData.passportIssueDate)
            .toLocaleDateString("en-GB")
            .replace(/\//g, "-")}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          padding: "0 50px",
        }}
      >
        <div style={{ width: "70%", textAlign: "start" }}>
          дата закінчення терміну дії проїзного документа (паспорта)/Date of
          expiry of the travelling document (Passport):
        </div>{" "}
        <div>
          {new Date(applicationData.passportExpiryDate)
            .toLocaleDateString("en-GB")
            .replace(/\//g, "-")}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          padding: "0 50px",
        }}
      >
        <div style={{ width: "70%", textAlign: "start" }}>
          Тип візи/Type of visa:
        </div>{" "}
        <div>{applicationData.purposeOfVisit}</div>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          padding: "0 50px",
        }}
      >
        <div style={{ width: "70%", textAlign: "start" }}>
          Визанын колдонулуу мөөнөтү/Validity of Visa:
        </div>{" "}
        <div>
          {new Date(applicationData.planDateOfEntry)
            .toLocaleDateString("en-GB")
            .replace(/\//g, "-")}{" "}
          -{" "}
          {new Date(applicationData.planDateOfExit)
            .toLocaleDateString("en-GB")
            .replace(/\//g, "-")}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          padding: "0 50px",
        }}
      >
        <div style={{ width: "70%", textAlign: "start" }}>
          Кількість конкурсних робіт/Number of entries:
        </div>{" "}
        <div>SINGLE ENTRY</div>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          padding: "0 50px",
        }}
      >
        <div style={{ width: "70%", textAlign: "start" }}>
          Період перебування (дні)/Period of stay(days):
        </div>{" "}
        <div>{periodOfStayDays}</div>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          padding: "0 50px",
        }}
      >
        <div style={{ width: "70%", textAlign: "start" }}>
          Запрошення/Invitation:
        </div>{" "}
        <div>{applicationData.invitation}</div>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          padding: "0 50px",
        }}
      >
        <div style={{ width: "70%", textAlign: "start" }}>
          Дата отримання візи/Date of visa:
        </div>
        <div>{applicationData.dateOfVisa}</div>
      </div>

      <div style={{ marginTop: "2rem", paddingInline: "50px" }}>
        <p style={{ textAlign: "center", fontWeight: "500" }}>
          Validity period of a visa is generally longer than the period of stay.
          The validity period establishes the first and last dates during which
          the visa can be used. Period of stay indicates the length of time you
          have permission to remain in Kyrgyzstan within the validity period of
          the visa.
        </p>
      </div>
    </div>
  );
});

export default PrintableDocument;
