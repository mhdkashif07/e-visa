/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const Information = () => {
  const [activeButton, setActiveButton] = useState("button1");

  console.log(activeButton);

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
        <div>
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
        style={{ display: activeButton === "button3" ? "block" : "none" }}
      >
        <div id="faqs_block" style={{ color: "white" }}>
          <br />
          <span>
            <b>e-Visa</b>
          </span>
          <hr />
          <b>What is an e-Visa?</b>
          <br />
          <p>
            An e-Visa is the easiest way to get a permit for entry into the
            Kyrgyz Republic. All you need to do is complete the online
            application form and pay with your credit/debit card instead of
            applying through the Kyrgyz mission. After receiving your e-Visa
            confirmation through this portal, you can enter the Kyrgyz Republic
            during the e-Visa validity period.
          </p>
          <br />
          <b>Who is eligible for an e-Visa?</b>
          <br />
          <p>
            Citizens of certain countries are eligible for the e-Visa provided
            that they meet the required criteria. To find out these criteria, go
            to
            <b>Main Page</b>, click on the <b>Apply for a visa</b> button, and
            select your Country, Type of Travel Document, and Visa Type.
          </p>
          <br />
          <b>
            Do I have to obtain a visa if I do not leave the international
            transit area?
          </b>
          <br />
          <p>
            No. You do not have to obtain a visa if you are not going to leave
            the international transit area.
          </p>
          <br />

          <span>
            <b>APPLICATION PROCESS</b>
          </span>
          <hr />
          <b>Can I choose the language I complete the application form in?</b>
          <br />
          <p>No, you must fill in the application form in English.</p>
          <br />
          <b>
            After submission, I have realized that some of the information that
            I provided in the e-Visa application requires correction. What
            should I do?
          </b>
          <br />
          <p>
            The process of application consists of certain steps. In the step
            <b>Preview & Confirmation</b>, you have the possibility to check
            once again, correct, and confirm your data. After making payment,
            you cannot change your data and must create a new e-Visa
            application.
          </p>
          <br />
          <b>
            I have submitted the first step of the application and received a
            verification email. Is there any time limit for making verification?
          </b>
          <br />
          <p>
            Yes. For security reasons, the verification email is valid only for
            72 hours. You should make verification within 72 hours after
            receiving the email; otherwise, your application will be canceled,
            and you will have to start a visa application once again.
          </p>
          <br />
          <b>
            Can I continue my e-Visa application if I am forced to leave it
            unfinished?
          </b>
          <br />
          <p>
            Yes. Just enter the section <b>Continue application</b> and enter
            your reference number. You will proceed to the steps which you have
            not completed yet.
          </p>
          <br />
          <b>How will I know the status of my e-Visa application?</b>
          <br />
          <p>
            You can know the status of your e-Visa application via this portal.
            Just enter the section <b>Check status</b> and enter your reference
            number. You will proceed to the <b>Application Status</b> page where
            you can get information about the status of your e-Visa application.
          </p>
          <br />

          <span>
            <b>ERRORS</b>
          </span>
          <hr />
          <b>
            I completed my application but haven't received any confirmation
            from you. Did you get my application?
          </b>
          <br />
          <p>
            Please, check 'spam' and 'junk' folders as well. If this does not
            help, you should submit a new application and indicate a different
            email address.
          </p>
          <br />

          <span>
            <b>PAYMENTS/REFUNDS</b>
          </span>
          <hr />
          <b>What does the CVV/CVC/CVC2 number mean?</b>
          <br />
          <p>
            CCVV/CVC/CVC2 for Visa and MasterCard is the final three digits of
            the number printed on the signature strip on the back of your card.
          </p>
          <br />
          <b>How much is a visa fee?</b>
          <br />
          <p>Visa fee depends on visa category, type, and period.</p>
          <br />
          <b>How do I pay for my application?</b>
          <br />
          <p>
            After final checking and confirmation of your application, you will
            proceed to the payment step and make payment via the standard
            electronic payment system.
          </p>
          <br />
          <b>Should the card be under my name?</b>
          <br />
          <p>No. The card does not have to be under your name.</p>
          <br />
          <b>Can I get an invoice?</b>
          <br />
          <p>
            We cannot provide an invoice for your payment. Once a successful
            payment has been made, you will receive a payment confirmation email
            to the email address used for your application. The payment
            confirmation email will state the amount paid and application
            details.
          </p>
          <br />
          <b>
            If my e-Visa application is denied, will my payment be refunded?
          </b>
          <br />
          <p>No. The e-Visa fee is not refundable.</p>
          <br />
          <b>
            I have realized that some information on my e-Visa does not match
            the information on my travel document/passport. I know that my
            e-Visa is invalid. Can I get a refund?
          </b>
          <br />
          <p>
            No. The applicant is responsible for any mistakes made in his/her
            application.
          </p>
          <br />
          <b>Can I get a refund if I do not use my e-Visa?</b>
          <br />
          <p>No. The visa fee is not refundable.</p>
          <br />
          <span>
            <b>DOCUMENT REQUIREMENTS</b>
          </span>
          <hr />
          <b>What kind of Documentation do I need to apply for an e-Visa?</b>
          <br />
          <p>
            You will need a valid travel Document/Passport, Photo, and
            Credit/debit card. You need to have scanned images of your
            Document/Passport and digital photo to attach them to your
            electronic application according to the visa type.
          </p>
          <br />
          <b>In which language should I present documentation?</b>
          <br />
          <p>
            All documentation should be presented in Kyrgyz or Russian languages
            or translated into these languages.
          </p>
          <br />
          <b>What are the requirements for my travel document/passport?</b>
          <br />
          <p>
            Your travel document must meet the following criteria:
            <br />
            - Its validity shall extend at least for 6 months after the validity
            period of the requested Kyrgyz visa
            <br />
            - Document should include not less than 2 free pages.
            <br />
            - Should not be damaged and should not include unofficial remarks.
            <br />
            <br />
            <span>
              <b>DURATION OF STAY/VALIDITY PERIOD</b>
            </span>
          </p>
          <b>
            What is the difference between the validity period and Duration of
            stay?
          </b>
          <br />
          <p>
            Understanding the difference between the visa validity period and
            duration of stay is important. The validity period of a visa is
            generally longer than its duration. The validity establishes the
            first and last dates during which the visa can be used. The visa
            expires on the last day of its validity. Duration of stay indicates
            the length of time you have permission to remain in Kyrgyzstan
            within the validity period of the visa.
          </p>
          <br />

          <span>
            <b>SUPPORT DESK/TECHNICAL HELP</b>
          </span>
          <hr />
          <b>
            I have accidentally deleted the mail with the reference number of my
            e-Visa application. What should I do?
          </b>
          <br />
          <p>Please, contact the support desk for this matter:</p>
          <br />
        </div>
      </div>

      <div
        className="mainInformBox_2288"
        id="about_visa_block"
        style={{ display: activeButton === "button4" ? "block" : "none" }}
      >
        <div style={{ textAlign: "left", color: "white" }}>
          About visa types and categories <br />
          <br />
          <b>Diplomatic visa («D»)</b> is issued to a foreign citizen - the
          holder of a diplomatic passport entering the Kyrgyz Republic on
          official business. <br />
          Diplomatic visa is issued to:
          <br />
          - heads of foreign states, governments, family members of the said
          persons following him, as well as members of foreign official
          delegations - a visa for up to 30 days, unless otherwise provided by
          an international treaty of the Kyrgyz Republic or in accordance with
          the principle of reciprocity
          <br />
          - a person holding a diplomatic or consular position in a diplomatic
          mission or consular institution of a foreign state, an official of a
          representative office of an international organization in the Kyrgyz
          Republic enjoying immunities and privileges in the Kyrgyz Republic, as
          well as members of his family (spouse, dependent children and parents)
          enjoying diplomatic privileges and immunities, - visa for a period of
          up to 1 year, unless otherwise provided by an international agreement
          of the Kyrgyz Republic or in accordance with the principle of
          reciprocity <br />
          - to a foreign diplomatic courier - a visa for up to 90 days, unless
          otherwise provided by an international agreement of the Kyrgyz
          Republic or in accordance with the principle of reciprocity.
          <br />
          <br />
          <b>Official visa («O»)</b> is issued to a foreign citizen-the owner of
          a service/official passport entering the Kyrgyz Republic on official
          business.
          <br />
          Official visa is issued to:
          <br />
          - a foreign citizen entering at the invitation of the state bodies of
          the Kyrgyz Republic on official business - a visa for up to 90 days
          <br />
          - a member of the administrative, technical and service personnel of
          the diplomatic mission and consular institution of a foreign state in
          the Kyrgyz Republic or an employee of the representative office of an
          international organization in the Kyrgyz Republic, as well as members
          of his family (spouse, children and parents who are dependent) - a
          visa for up to 1 year, unless otherwise provided by an international
          agreement Of the Kyrgyz Republic or in accordance with the principle
          of reciprocity
          <br />
          - a foreign courier carrying diplomatic mail, if he does not have a
          diplomatic passport - a visa for up to 90 days, unless otherwise
          provided by an international agreement of the Kyrgyz Republic or in
          accordance with the principle of reciprocity. <br />
          <br />
          <b>Invest visa («I»)</b> is issued to an investor or the head of a
          foreign investment company engaged in investment activities in the
          Kyrgyz Republic and who has submitted the necessary supporting
          documents certifying the contribution to the economy of the Kyrgyz
          Republic, its monetary and material values equivalent to the amount of
          10 (ten) million soms intended for production, industrial,
          agricultural, banking, energy, educational, medical, engineering and
          construction purposes, as well as information and communication
          technologies, - visa for up to 3 years. <br />
          <br />
          <b>Employment visa («W»)</b> is issued to the applicant to obtain a
          permit for labor or individual entrepreneurial activity on the
          territory of the Kyrgyz Republic. This visa grants the applicant the
          right to enter the territory of the Kyrgyz Republic for up to 60 days,
          without the right to carry out labor or individual entrepreneurial
          activity. <br />
          Upon receipt of a work permit, DCS and MFA, the applicant is issued a
          work visa (type "W"), - for the duration of the work permit, but not
          more than 1 year.
          <br />
          <br />
          <b>Special work visa (type "SW")</b> is issued to an applicant for
          whom, in accordance with the legislation of the Kyrgyz Republic in the
          field of external migration, a different procedure for carrying out
          work activities is provided without obtaining a work permit, as well
          as to employees of charitable foundations, for up to 60 days. <br />
          A special work visa (type "SW") is issued by the DCS, the Ministry of
          Foreign Affairs or foreign institutions of the Kyrgyz Republic on the
          basis of a certificate from an authorized state body in the field of
          migration or accreditation (for journalists and correspondents) or on
          the basis of an appeal from state bodies (for employees of charitable
          foundations implementing projects on the territory of the Kyrgyz
          Republic), but not more than 1 year. <br />
          <br />
          <b>Study visa (type "S")</b> is issued to an applicant entering the
          Kyrgyz Republic for training - for up to 90 days. <br />
          A study visa (type "S") is issued on the territory of the Kyrgyz
          Republic for a period of up to 1 year in the case of studying in
          educational organizations registered on the territory of the Kyrgyz
          Republic.
          <br />
          <br />
          <b>Business visa («B»)</b> is issued to an applicant entering the
          Kyrgyz Republic for business purposes, to participate in negotiations,
          conferences and meetings, sports events organized by state and local
          self-government bodies, international organizations and legal
          entities, as well as foreign institutions of the Kyrgyz Republic
          within the framework of economic diplomacy projects - for up to 60
          days.
          <br />
          <br />
          <b>Driver’s visa («T»)</b> is issued to foreign citizens entering the
          Kyrgyz Republic by truck for international cargo transportation.
          <br />
          A driver's visa is issued for a period of up to 6 months, with the
          condition that the applicant stays on the territory of the Kyrgyz
          Republic for no more than 30 days per trip, unless otherwise
          established by an international agreement of the Kyrgyz Republic or on
          the principles of reciprocity.
          <br />
          <br />
          <b>Special guest visa (type "SG")</b> is issued to an applicant
          entering the Kyrgyz Republic for various business or private purposes,
          on behalf of the President of the Kyrgyz Republic, the Chairman of the
          Cabinet of Ministers of the Kyrgyz Republic or the Minister of Foreign
          Affairs of the Kyrgyz Republic for a period not exceeding 1 year.
          <br />
          <br />
          <b>Relatives visa («RL»)</b> is issued to the applicant for up to 1
          year, in case of visiting close relatives or family reunification.
          <br />
          If necessary, an exit/entry single-entry Tuugandar visa (type "RL") is
          issued to a person recognized as a refugee, in the presence of
          supporting documents, in coordination with the national security
          authorities for up to 60 days.
          <br />
          <br />
          <b>Visa to ethnic kyrgyz («M»)</b> is issued to ethnic Kyrgyz, with
          the possibility of subsequent obtaining the status of "kairylman", as
          well as to persons born on the territory of the Kyrgyz Republic or the
          Kyrgyz SSR, to visit or return to the Kyrgyz Republic for up to 1
          year.
          <br />
          If necessary, a person with the status of "kairylman", in coordination
          with the authorized state body of the Kyrgyz Republic in charge of
          national security issues (hereinafter referred to as the national
          security body), is issued an exit / entry meken visa (type "M") for up
          to 1 year. <br />
          <br />
          <b>Tourist visa («TS»)</b> is issued to an applicant intending to
          visit the Kyrgyz Republic for the purpose of tourism, with various
          private purposes, including visiting friends, receiving medical
          services, without the right to carry out labor or individual
          entrepreneurial activity, as well as other actions related to making a
          profit on the territory of the Kyrgyz Republic, for up to 60 days, for
          single entry and exit.
          <br />
          <br />
          <b>Mountain tourism visa (type "MT")</b> is issued to an applicant
          intending to visit the Kyrgyz Republic for the purpose of mountain
          tourism (mountaineering, snowboarding, trekking, rafting, mountain
          biking, heli-skiing, rock climbing, ice climbing, freeride, skitour
          and other types of mountain tourism) for up to 90 days. <br />
          <br />
          <b>Religion («R»)</b> is issued to a missionary intending to visit the
          Kyrgyz Republic through cooperation with religious organizations,
          subject to a permit issued by the authorized state body for religious
          affairs for up to 60 days. <br />
          <br />
          <b>Foreigner's family visa (type "FF")</b> is issued to family members
          of the applicant (spouse, children under 18, parents of minor
          children, as well as children with disabilities and dependent parents)
          staying in the territory of the Kyrgyz Republic with service (type
          "O"), investment (type "I"), labor (types "W"), special labor (type
          "SW"), relatives visa (type "RL"), educational (type "S"), as well as
          on the basis of a residence permit or registration at the place of
          stay (in relation to citizens of states, which are subject to a
          visa-free stay on the territory of the Kyrgyz Republic), or the status
          of kayrylman for up to 1 year, without the right to work or individual
          entrepreneurial activity, as well as other actions related to
          profit-making on the territory of the Kyrgyz Republic.
          <br />
          <br />
          <b>Transit visa («TR»)</b> is issued to an applicant following transit
          through the territory of the Kyrgyz Republic to third countries for a
          period of validity of up to 5 days. <br />
          <br />
          <b>Leave visa («L»)</b> is issued to the applicant for departure from
          the Kyrgyz Republic, taking into account the completion of the overdue
          period of stay, for a period of validity of up to 10 days.
          <br />
          <br />
          <b>Digital nomad (type "DN")</b> is issued by the DCS to a foreign
          citizen or a stateless person engaged in activities in the field of
          information and communication technologies and engaged in the
          development of software products, at the request of the authorized
          state body for the implementation of state policy in the field of
          digitalization and electronic management or the owner of the status
          "Digital Nomad "Digital nomad" for up to 6 months.
          <br />
          <br />
        </div>
      </div>

      <div
        className="mainInformBox_2288"
        id="application_form_block"
        style={{ display: activeButton === "button5" ? "block" : "none" }}
      >
        <div
          style={{ textAlign: "left", color: "white" }}
        >
          <br />
          <a href="/grajdanin.pdf" target="_blank" className="ssilInfo" style={{ color: "white" }}>
            Application from citizens
          </a>
          <br />
          <br />
          <a href="/yur_lico.pdf" target="_blank" className="ssilInfo" style={{ color: "white" }}>
            Application from legal entities
          </a>
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default Information;
