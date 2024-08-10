/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const Information = () => {
  const [activeButton, setActiveButton] = useState("button1");

  const handleClick = (id) => {
    setActiveButton(id);
  };
  return (
    <div className="container" style={{ padding: "40px 140px" }}>
      <div className="labServ_6411">GET INFORMATION</div>

      <div className="informParent_4522">
        <div className="infBtn_6633 infBtn_6633_active" id="do_I_need_visa">
          <button
            id="button1"
            className={`infBtn_6633 ${
              activeButton === "button1" ? "infBtn_6633_active" : ""
            }`}
            onClick={() => handleClick("button1")}
          >
            DO I NEED VISA?
          </button>
        </div>
        <button
          id="button2"
          className={`infBtn_6633 ${
            activeButton === "button2" ? "infBtn_6633_active" : ""
          }`}
          onClick={() => handleClick("button2")}
        >
          IMPORTANT INFORMATION
        </button>

        <button
          id="button3"
          className={`infBtn_6633 ${
            activeButton === "button3" ? "infBtn_6633_active" : ""
          }`}
          onClick={() => handleClick("button3")}
        >
          FAQS
        </button>
        <button
          id="button4"
          className={`infBtn_6633 ${
            activeButton === "button4" ? "infBtn_6633_active" : ""
          }`}
          onClick={() => handleClick("button4")}
        >
          ABOUT VISA TYPES AND CATEGORIES
        </button>

        <button
          id="button5"
          className={`infBtn_6633 ${
            activeButton === "button5" ? "infBtn_6633_active" : ""
          }`}
          onClick={() => handleClick("button5")}
        >
          APPLICATION FORMS
        </button>
      </div>

      <div
        className="mainInformBox_2288"
        id="do_I_need_visa_block"
        style={{ display: activeButton === "button1" ? "block" : "none" }}
      >
        <p className="lab_2278">
          This tool provides general information about visa eligibility for
          holders of passports and documents of different countries. To check
          visa eligibility, please choose the country of your passport below.
          You will be provided with information about:
          <br />
          - exemption or requirement of obtaining an entry visa to enter the
          Kyrgyz Republic,
          <br />
          - available mechanisms of obtaining a visa.
          <br />
          <br />
        </p>
        <p className="lab_2278">
          Permanent residents of Special Administrative Regions of China, Hong
          Kong, and Macao (Hong Kong SAR, Macau SAR) have a 30-day visa-free
          regime for all types of travel documents (dip., service, ordinary).
          <br />
          Citizens of the Maldives have a 30-day visa-free regime for all types
          of travel documents.
          <br />
        </p>
        <br />
        <select
          id="doc_issued_by"
          className="sel_6966"
          onChange="callVisaTypeInfo();"
        >
          <option value="">Select country</option>
          {/* <!-- Add the list of countries here --> */}
        </select>
        <table cellPadding="0" cellSpacing="0" className="eligibility_table">
          <thead>
            <tr>
              <th>Regime</th>
              <th>Ordinary Passport</th>
              <th>Service Passport</th>
              <th>Diplomatic Passport</th>
              <th>Ordinary Passport*</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
        <div
          id="resident_card_txt"
          style={{ display: "none", color: "white", marginTop: 33 }}
        >
          Resident card (temporary residence permit) is a document confirming
          the right for a long-term residence in the territory of a state of a
          person who is not a citizen of this state.
        </div>
      </div>

      <div
        className="mainInformBox_2288"
        id="important_information_block"
        style={{ display: activeButton === "button2" ? "block" : "none" }}
      >
        <div className="mainInformBox_2288">
          <div className="importInfBox_1_2278">
            You can check if you are eligible to get Kyrgyz Republic visa and
            other information about entry and stay regime of foreign citizens in
            Kyrgyz Republic in “do i need visa?” sector.
          </div>

          <div className="importInfBox_2_2278">
            After arriving in Kyrgyz Republic, foreign country citizens, except
            counties, included in a list (the list of foreign countries with the
            indication of the terms for the release of foreign citizens and
            stateless persons arriving in the Kyrgyz Republic from registration
            at the place of their stay in authorized state bodies, as well as in
            hotels) are obliged to register according to the place of stay in 5
            work days after the moment of entry.
          </div>

          <div className="importInfBox_1_2278">
            You can make your online payment by credit/debit card. The card is
            not required to be under your name. Make sure that Your card is open
            to international transactions.
          </div>

          <div className="importInfBox_2_2278">
            Please, make sure the filled information is correct. In case of any
            mistakes, your e-visa application will be rejected.
          </div>

          <div className="importInfBox_1_2278">
            There is no refund in case of rejection of e-visa.
          </div>

          <div className="importInfBox_2_2278">
            Please, avoid buying the air ticket before getting the notice of
            approval to you the electronic visa.
          </div>

          <div className="importInfBox_1_2278">
            Presently foreign citizens and stateless persons with electronic
            visas of the Kyrgyz Republic can cross the State Border of the
            Kyrgyz Republic at the following international checkpoints: <br />
            1. Manas-airport <br />
            2. "Osh-airport" <br />
            3. "Chon-Kapka-avtodorozhnyi" <br />
            4. "Chaldybar- avtodorozhnyi"
            <br />
            5. "Ak-Jol- avtodorozhnyi"
            <br />
            6. "Ak-Tilek- avtodorozhnyi"
            <br />
            7. "Dostuk- avtodorozhnyi"
            <br />
            8. "Kyzyl-Bel- avtodorozhnyi"
            <br />
            9. "Kulundu- avtodorozhnyi"
            <br />
            10. "Bor-Dobo- avtodorozhnyi"
            <br />
            11. "Irkeshtam- avtodorozhnyi"
            <br />
            12. "Torugart-avtodorozhnyi".
          </div>

          <div className="importInfBox_2_2278">
            Dear applicant, please read the step-by-step instructions in case
            the System returns Your application. <br />
            If your application was returned by the System, you will receive a
            message to your email address specified in the application about the
            need to make corrections, download the necessary package of
            documents or make a payment. <br />
            After receiving the message, you will need to return to our official
            website evisa.e-gov.kg, select the Services section-Check the
            status, enter the reference number, and you will be redirected to
            the page of correction of Your application. <br />
            Lines that require corrections will be marked in red. You will need
            to click on the "tick" icon, make changes and click on the same icon
            again. <br />
            After making changes and checking the correctness of all data, you
            need to click the "Submit" button. <br />
            <br />
            Attention! The application review period 5 working days starts from
            the moment of correcting all the necessary information or adding the
            necessary package of documents.
          </div>
        </div>
      </div>

      <div
        className="mainInformBox_2288"
        id="faqs_block"
        style={{ display: "none" }}
      >
        {/* <!-- FAQs content goes here --> */}
      </div>
    </div>
  );
};

export default Information;
