import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ima from "../assets/images/images.png";
import logoVisaForm from "../assets/images/logoTop.png";
import "./style.css";

const VisaForm = ({ step, isSubmitting, formData, setFormData, setImage }) => {
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleDateChange = (date, id) => {
    setFormData({ ...formData, [id]: date });
  };

  const handleFileInputChange = (e) => {
    const { id, files } = e.target;
    const file = files[0];
    setFormData({ ...formData, [id]: file });
  };

  const renderFormFields = () => {
    switch (step) {
      case 1:
        return (
          <>
            <h5 className="text-center mb-5 mt-5" style={{ color: "white" }}>
              1. COUNTRY/TRIP PURPOSE
            </h5>
            <div className="mb-3" style={{ width: "50%", margin: "0 auto" }}>
              <select
                id="country"
                className="form-select"
                style={{ backgroundColor: "#30333a", color: "white" }}
                onChange={handleInputChange}
                required
              >
                <option value="">Select passport country</option>
                <option value="Afghanistan">Afghanistan</option>
                <option value="Albania">Albania</option>
                <option value="Algeria">Algeria</option>
                <option value="Andorra">Andorra</option>
                <option value="Angola">Angola</option>
                <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                <option value="Argentina">Argentina</option>
                <option value="Armenia">Armenia</option>
                <option value="Australia">Australia</option>
                <option value="Austria">Austria</option>
                <option value="Azerbaijan">Azerbaijan</option>
                <option value="Bahamas">Bahamas</option>
                <option value="Bahrain">Bahrain</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Barbados">Barbados</option>
                <option value="Belarus">Belarus</option>
                <option value="Belgium">Belgium</option>
                <option value="Belize">Belize</option>
                <option value="Benin">Benin</option>
                <option value="Bhutan">Bhutan</option>
                <option value="Bolivia">Bolivia</option>
                <option value="Bosnia and Herzegovina">
                  Bosnia and Herzegovina
                </option>
                <option value="Botswana">Botswana</option>
                <option value="Brazil">Brazil</option>
                <option value="Brunei Darussalam">Brunei Darussalam</option>
                <option value="Bulgaria">Bulgaria</option>
                <option value="Burkina Faso">Burkina Faso</option>
                <option value="Burundi">Burundi</option>
                <option value="Cambodia">Cambodia</option>
                <option value="Cameroon">Cameroon</option>
                <option value="Canada">Canada</option>
                <option value="Cape Verde">Cape Verde</option>
                <option value="Central African Republic">
                  Central African Republic
                </option>
                <option value="Chad">Chad</option>
                <option value="Chile">Chile</option>
                <option value="China">China</option>
                <option value="Colombia">Colombia</option>
                <option value="Comoros">Comoros</option>
                <option value="Congo">Congo</option>
                <option value="Costa Rica">Costa Rica</option>
                <option value="Côte d'Ivoire">Côte d'Ivoire</option>
                <option value="Croatia">Croatia</option>
                <option value="Cuba">Cuba</option>
                <option value="Cyprus">Cyprus</option>
                <option value="Czech Republic">Czech Republic</option>
                <option value="Democratic People's Republic of Korea">
                  Democratic People's Republic of Korea
                </option>
                <option value="Democratic Republic of the Congo">
                  Democratic Republic of the Congo
                </option>
                <option value="Denmark">Denmark</option>
                <option value="Djibouti">Djibouti</option>
                <option value="Dominica">Dominica</option>
                <option value="Dominican Republic">Dominican Republic</option>
                <option value="Ecuador">Ecuador</option>
                <option value="Egypt">Egypt</option>
                <option value="El Salvador">El Salvador</option>
                <option value="Equatorial Guinea">Equatorial Guinea</option>
                <option value="Eritrea">Eritrea</option>
                <option value="Estonia">Estonia</option>
                <option value="Ethiopia">Ethiopia</option>
                <option value="Fiji">Fiji</option>
                <option value="Finland">Finland</option>
                <option value="France">France</option>
                <option value="Gabon">Gabon</option>
                <option value="Gambia">Gambia</option>
                <option value="Georgia">Georgia</option>
                <option value="Germany">Germany</option>
                <option value="Ghana">Ghana</option>
                <option value="Greece">Greece</option>
                <option value="Grenada">Grenada</option>
                <option value="Guatemala">Guatemala</option>
                <option value="Guinea">Guinea</option>
                <option value="Guinea-Bissau">Guinea-Bissau</option>
                <option value="Guyana">Guyana</option>
                <option value="Haiti">Haiti</option>
                <option value="Holy See">Holy See</option>
                <option value="Honduras">Honduras</option>
                <option value="Hungary">Hungary</option>
                <option value="Iceland">Iceland</option>
                <option value="India">India</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Iran">Iran</option>
                <option value="Iraq">Iraq</option>
                <option value="Ireland">Ireland</option>
                <option value="Israel">Israel</option>
                <option value="Italy">Italy</option>
                <option value="Jamaica">Jamaica</option>
                <option value="Japan">Japan</option>
                <option value="Jordan">Jordan</option>
                <option value="Kazakhstan">Kazakhstan</option>
                <option value="Kenya">Kenya</option>
                <option value="Kiribati">Kiribati</option>
                <option value="Korea">Korea</option>
                <option value="Kuwait">Kuwait</option>
                <option value="Lao PDR">Lao PDR</option>
                <option value="Latvia">Latvia</option>
                <option value="Lebanon">Lebanon</option>
                <option value="Lesotho">Lesotho</option>
                <option value="Liberia">Liberia</option>
                <option value="Libya">Libya</option>
                <option value="Liechtenstein">Liechtenstein</option>
                <option value="Lithuania">Lithuania</option>
                <option value="Luxembourg">Luxembourg</option>
                <option value="Macao">Macao</option>
                <option value="Macedonia">Macedonia</option>
                <option value="Madagascar">Madagascar</option>
                <option value="Malawi">Malawi</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Maldives">Maldives</option>
                <option value="Mali">Mali</option>
                <option value="Malta">Malta</option>
                <option value="Marshall Islands">Marshall Islands</option>
                <option value="Mauritania">Mauritania</option>
                <option value="Mauritius">Mauritius</option>
                <option value="Mexico">Mexico</option>
                <option value="Micronesia">Micronesia</option>
                <option value="Moldova">Moldova</option>
                <option value="Monaco">Monaco</option>
                <option value="Mongolia">Mongolia</option>
                <option value="Montenegro">Montenegro</option>
                <option value="Morocco">Morocco</option>
                <option value="Mozambique">Mozambique</option>
                <option value="Myanmar">Myanmar</option>
                <option value="Namibia">Namibia</option>
                <option value="Nauru">Nauru</option>
                <option value="Nepal">Nepal</option>
                <option value="Netherlands">Netherlands</option>
                <option value="New Zealand">New Zealand</option>
                <option value="Nicaragua">Nicaragua</option>
                <option value="Niger">Niger</option>
                <option value="Nigeria">Nigeria</option>
                <option value="Norway">Norway</option>
                <option value="Oman">Oman</option>
                <option value="Pakistan">Pakistan</option>
                <option value="Palau">Palau</option>
                <option value="Palestinian Territory">
                  Palestinian Territory
                </option>
                <option value="Panama">Panama</option>
                <option value="Papua New Guinea">Papua New Guinea</option>
                <option value="Paraguay">Paraguay</option>
                <option value="Peru">Peru</option>
                <option value="Philippines">Philippines</option>
                <option value="Poland">Poland</option>
                <option value="Portugal">Portugal</option>
                <option value="Qatar">Qatar</option>
                <option value="Romania">Romania</option>
                <option value="Russian Federation">Russian Federation</option>
                <option value="Rwanda">Rwanda</option>
                <option value="Saint Kitts and Nevis">
                  Saint Kitts and Nevis
                </option>
                <option value="Saint Lucia">Saint Lucia</option>
                <option value="Saint Vincent and Grenadines">
                  Saint Vincent and Grenadines
                </option>
                <option value="Samoa">Samoa</option>
                <option value="San Marino">San Marino</option>
                <option value="Sao Tome and Principe">
                  Sao Tome and Principe
                </option>
                <option value="Saudi Arabia">Saudi Arabia</option>
                <option value="Senegal">Senegal</option>
                <option value="Serbia">Serbia</option>
                <option value="Seychelles">Seychelles</option>
                <option value="Sierra Leone">Sierra Leone</option>
                <option value="Singapore">Singapore</option>
                <option value="Slovakia">Slovakia</option>
                <option value="Slovenia">Slovenia</option>
                <option value="Solomon Islands">Solomon Islands</option>
                <option value="Somalia">Somalia</option>
                <option value="South Africa">South Africa</option>
                <option value="South Sudan">South Sudan</option>
                <option value="Spain">Spain</option>
                <option value="Sri Lanka">Sri Lanka</option>
                <option value="Sudan">Sudan</option>
                <option value="Suriname">Suriname</option>
                <option value="Swaziland">Swaziland</option>
                <option value="Sweden">Sweden</option>
                <option value="Switzerland">Switzerland</option>
                <option value="Syrian Arab Republic">
                  Syrian Arab Republic
                </option>
                <option value="Tajikistan">Tajikistan</option>
                <option value="Tanzania">Tanzania</option>
                <option value="Thailand">Thailand</option>
                <option value="Timor-Leste">Timor-Leste</option>
                <option value="Togo">Togo</option>
                <option value="Tonga">Tonga</option>
                <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                <option value="Tunisia">Tunisia</option>
                <option value="Turkey">Turkey</option>
                <option value="Turkmenistan">Turkmenistan</option>
                <option value="Tuvalu">Tuvalu</option>
                <option value="Uganda">Uganda</option>
                <option value="Ukraine">Ukraine</option>
                <option value="UN Employee">UN Employee</option>
                <option value="United Arab Emirates">
                  United Arab Emirates
                </option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="United States of America">
                  United States of America
                </option>
                <option value="Uruguay">Uruguay</option>
                <option value="Uzbekistan">Uzbekistan</option>
                <option value="Vanuatu">Vanuatu</option>
                <option value="Venezuela">Venezuela</option>
                <option value="Viet Nam">Viet Nam</option>
                <option value="Yemen">Yemen</option>
                <option value="Zambia">Zambia</option>
                <option value="Zimbabwe">Zimbabwe</option>
              </select>
            </div>
            <div className="mb-3" style={{ width: "50%", margin: "0 auto" }}>
              <select
                id="passportType"
                className="form-select"
                style={{ backgroundColor: "#30333a", color: "white" }}
                onChange={handleInputChange}
                required
              >
                <option value="">Select passport type</option>
                <option value="0">select passport type </option>
                <option value="Ordinary">Ordinary</option>
                <option value="Diplomatic">Diplomatic</option>
                <option value="Service/Official">Service/Official</option>
                <option value="Stateless person's travel">
                  Stateless person's travel document
                </option>
                <option value="Other travel">Other travel document</option>{" "}
              </select>
            </div>
            <div
              class="conditionsBox"
              style={{ width: "350px", textAlign: "left", margin: "0 auto" }}
            >
              <input type="checkbox" id="agree_step_1" />
              <a href="" target="_blank" style={{ color: "white" }}>
                I agree to the terms and conditions.
              </a>
            </div>
          </>
        );

      case 2:
        return (
          <>
            <h5 className="text-center mb-3 mt-5" style={{ color: "white" }}>
              2. MAIN DATA
            </h5>
            <p className="text-center mb-5" style={{ color: "white" }}>
              Invitation is required from Kyrgyz citizen.
            </p>
            <h6 className="text-center mb-3 mt-5" style={{ color: "white" }}>
              Inviting person data
            </h6>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div style={{ width: "60%" }}>
                <div
                  className="mb-3"
                  style={{ width: "60%", margin: "0 auto" }}
                >
                  <input
                    id="firstName"
                    placeholder="Person's Surname"
                    className="form-control"
                    style={{ backgroundColor: "black", color: "white" }}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div
                  className="mb-3"
                  style={{ width: "60%", margin: "0 auto" }}
                >
                  <input
                    id="lastName"
                    placeholder="Person's name"
                    className="form-control"
                    style={{ backgroundColor: "black", color: "white" }}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div
                  className="mb-3"
                  style={{ width: "60%", margin: "0 auto" }}
                >
                  <input
                    id="invitation"
                    placeholder="Inviting person's name"
                    className="form-control"
                    style={{ backgroundColor: "black", color: "white" }}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div
                  className="mb-3"
                  style={{ width: "60%", margin: "0 auto" }}
                >
                  <DatePicker
                    id="dateOfBirth"
                    selected={formData.dateOfBirth}
                    onChange={(date) => handleDateChange(date, "dateOfBirth")}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="Select Date of Birth"
                    className="form-control"
                    style={{ backgroundColor: "black", color: "white" }}
                    required
                  />
                </div>
                <div
                  className="mb-3"
                  style={{ width: "60%", margin: "0 auto" }}
                >
                  <input
                    id="passportNumber"
                    placeholder="Passport Number"
                    className="form-control"
                    style={{ backgroundColor: "black", color: "white" }}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div
                  className="mb-3"
                  style={{ width: "60%", margin: "0 auto" }}
                >
                  <DatePicker
                    id="passportIssueDate"
                    selected={formData.passportIssueDate}
                    onChange={(date) =>
                      handleDateChange(date, "passportIssueDate")
                    }
                    dateFormat="dd/MM/yyyy"
                    placeholderText="Select Passport Issue Date"
                    className="form-control"
                    style={{ backgroundColor: "black", color: "white" }}
                    required
                  />
                </div>
                <div
                  className="mb-3"
                  style={{ width: "60%", margin: "0 auto" }}
                >
                  <DatePicker
                    id="passportExpiryDate"
                    selected={formData.passportExpiryDate}
                    onChange={(date) =>
                      handleDateChange(date, "passportExpiryDate")
                    }
                    dateFormat="dd/MM/yyyy"
                    placeholderText="Select Passport Expiry Date"
                    className="form-control"
                    style={{ backgroundColor: "black", color: "white" }}
                    required
                  />
                </div>
                <div
                  className="mb-3"
                  style={{ width: "60%", margin: "0 auto" }}
                >
                  <select
                    id="gender"
                    className="form-select"
                    style={{ backgroundColor: "#30333a", color: "white" }}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div
                  className="mb-3"
                  style={{ width: "60%", margin: "0 auto" }}
                >
                  <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    className="form-control"
                    style={{ backgroundColor: "black", color: "white" }}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
            </div>
          </>
        );

      case 3:
        return (
          <>
            <h5 className="text-center mb-3 mt-5" style={{ color: "white" }}>
              3. ADDITIONAL DATA
            </h5>
            <div className="mb-3" style={{ width: "50%", margin: "0 auto" }}>
              <input
                id="contactPhoneNumber"
                placeholder="Contact Phone Number"
                className="form-control"
                style={{ backgroundColor: "black", color: "white" }}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3" style={{ width: "50%", margin: "0 auto" }}>
              <input
                id="emailAddress"
                placeholder="Email Address"
                className="form-control"
                style={{ backgroundColor: "black", color: "white" }}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3" style={{ width: "50%", margin: "0 auto" }}>
              <input
                id="contactInformation"
                placeholder="Contact Information"
                className="form-control"
                style={{ backgroundColor: "black", color: "white" }}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3" style={{ width: "50%", margin: "0 auto" }}>
              <input
                id="placeOfStay"
                placeholder="Place of Stay"
                className="form-control"
                style={{ backgroundColor: "black", color: "white" }}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3" style={{ width: "50%", margin: "0 auto" }}>
              <input
                id="purposeOfVisit"
                placeholder="Purpose of Visit"
                className="form-control"
                style={{ backgroundColor: "black", color: "white" }}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3" style={{ width: "50%", margin: "0 auto" }}>
              <DatePicker
                id="planDateOfEntry"
                selected={formData.planDateOfEntry}
                onChange={(date) => handleDateChange(date, "planDateOfEntry")}
                dateFormat="dd/MM/yyyy"
                placeholderText="Select Plan Date of Entry"
                className="form-control"
                style={{ backgroundColor: "black", color: "white" }}
                required
              />
            </div>
            <div className="mb-3" style={{ width: "50%", margin: "0 auto" }}>
              <DatePicker
                id="planDateOfExit"
                selected={formData.planDateOfExit}
                onChange={(date) => handleDateChange(date, "planDateOfExit")}
                dateFormat="dd/MM/yyyy"
                placeholderText="Select Plan Date of Exit"
                className="form-control"
                style={{
                  backgroundColor: "black",
                  color: "white",
                  with: "100%",
                }}
                required
              />
            </div>
          </>
        );

      case 4:
        return (
          <>
            <h5 className="text-center mb-3 mt-5" style={{ color: "white" }}>
              4. PHOTO AND DOCUMENT
            </h5>
            <div className="mb-3" style={{ width: "50%", margin: "0 auto" }}>
              <input
                id="photo"
                type="file"
                className="form-control"
                style={{ backgroundColor: "black", color: "white" }}
                onChange={handleFileInputChange}
                required
              />
            </div>
            <h6 className="text-center mb-3 mt-5" style={{ color: "white" }}>
              Additional Documents
            </h6>
            <div className="mb-3" style={{ width: "50%", margin: "0 auto" }}>
              <input
                id="document1"
                type="file"
                className="form-control"
                style={{ backgroundColor: "black", color: "white" }}
                onChange={handleFileInputChange}
                required
              />
            </div>
            {/* <div className="mb-3" style={{ width: "50%", margin: "0 auto" }}>
              <input
                id="document2"
                type="file"
                className="form-control"
                style={{ backgroundColor: "black", color: "white" }}
                onChange={handleFileInputChange}
                required
              />
            </div>
            <div className="mb-3" style={{ width: "50%", margin: "0 auto" }}>
              <input
                id="document3"
                type="file"
                className="form-control"
                style={{ backgroundColor: "black", color: "white" }}
                onChange={handleFileInputChange}
                required
              />
            </div>
            <div className="mb-3" style={{ width: "50%", margin: "0 auto" }}>
              <input
                id="document4"
                type="file"
                className="form-control"
                style={{ backgroundColor: "black", color: "white" }}
                onChange={handleFileInputChange}
                required
              />
            </div>
            <div className="mb-3" style={{ width: "50%", margin: "0 auto" }}>
              <input
                id="document5"
                type="file"
                className="form-control"
                style={{ backgroundColor: "black", color: "white" }}
                onChange={handleFileInputChange}
                required
              />
            </div> */}
          </>
        );

      case 5:
        return (
          <>
            <h5 className="text-center mb-3 mt-3" style={{ color: "white" }}>
              Review and Confirm
            </h5>
            <div className="row" style={{ justifyContent: "center" }}>
              <div className="col-md-5 mb-2">
                <label style={{ color: "#fff" }}>Passport Country:</label>
                <input
                  id="country"
                  className="form-control"
                  value={formData.country}
                  readOnly
                />
              </div>
              <div className="col-md-5 mb-2">
                <label style={{ color: "#fff" }}>Passport Type:</label>
                <input
                  id="passportType"
                  className="form-control"
                  value={formData.passportType}
                  readOnly
                />
              </div>
              <div className="col-md-5 mb-2">
                <label htmlFor="firstName" style={{ color: "#fff" }}>
                  First Name:
                </label>
                <input
                  id="firstName"
                  className="form-control"
                  value={formData.firstName}
                  readOnly
                />
              </div>
              <div className="col-md-5 mb-2">
                <label htmlFor="lastName" style={{ color: "#fff" }}>
                  Last Name:
                </label>
                <input
                  id="lastName"
                  className="form-control"
                  value={formData.lastName}
                  readOnly
                />
              </div>
              <div className="col-md-5 mb-2">
                <label htmlFor="dateOfBirth" style={{ color: "#fff" }}>
                  Date of Birth:
                </label>
                <input
                  id="dateOfBirth"
                  className="form-control"
                  value={
                    formData.dateOfBirth
                      ? formData.dateOfBirth.toLocaleDateString()
                      : ""
                  }
                  readOnly
                />
              </div>
              <div className="col-md-5 mb-2">
                <label htmlFor="passportNumber" style={{ color: "#fff" }}>
                  Passport Number:
                </label>
                <input
                  id="passportNumber"
                  className="form-control"
                  value={formData.passportNumber}
                  readOnly
                />
              </div>
              <div className="col-md-5 mb-2">
                <label htmlFor="passportIssueDate" style={{ color: "#fff" }}>
                  Passport Issue Date:
                </label>
                <input
                  id="passportIssueDate"
                  className="form-control"
                  value={
                    formData.passportIssueDate
                      ? formData.passportIssueDate.toLocaleDateString()
                      : ""
                  }
                  readOnly
                />
              </div>
              <div className="col-md-5 mb-2">
                <label htmlFor="passportExpiryDate" style={{ color: "#fff" }}>
                  Passport Expiry Date:
                </label>
                <input
                  id="passportExpiryDate"
                  className="form-control"
                  value={
                    formData.passportExpiryDate
                      ? formData.passportExpiryDate.toLocaleDateString()
                      : ""
                  }
                  readOnly
                />
              </div>
              <div className="col-md-5 mb-2">
                <label htmlFor="gender" style={{ color: "#fff" }}>
                  Gender:
                </label>
                <input
                  id="gender"
                  className="form-control"
                  value={formData.gender}
                  readOnly
                />
              </div>
              <div className="col-md-5 mb-2">
                <label htmlFor="email" style={{ color: "#fff" }}>
                  Email:
                </label>
                <input
                  id="email"
                  className="form-control"
                  value={formData.email}
                  readOnly
                />
              </div>
              <div className="col-md-5 mb-2">
                <label htmlFor="contactPhoneNumber" style={{ color: "#fff" }}>
                  Contact Phone Number:
                </label>
                <input
                  id="contactPhoneNumber"
                  className="form-control"
                  value={formData.contactPhoneNumber}
                  readOnly
                />
              </div>
              <div className="col-md-5 mb-2">
                <label htmlFor="emailAddress" style={{ color: "#fff" }}>
                  Email Address:
                </label>
                <input
                  id="emailAddress"
                  className="form-control"
                  value={formData.emailAddress}
                  readOnly
                />
              </div>
              <div className="col-md-5 mb-2">
                <label htmlFor="contactInformation" style={{ color: "#fff" }}>
                  Contact Information:
                </label>
                <input
                  id="contactInformation"
                  className="form-control"
                  value={formData.contactInformation}
                  readOnly
                />
              </div>
              <div className="col-md-5 mb-2">
                <label htmlFor="placeOfStay" style={{ color: "#fff" }}>
                  Place of Stay:
                </label>
                <input
                  id="placeOfStay"
                  className="form-control"
                  value={formData.placeOfStay}
                  readOnly
                />
              </div>
              <div className="col-md-5 mb-2">
                <label htmlFor="purposeOfVisit" style={{ color: "#fff" }}>
                  Purpose of Visit:
                </label>
                <input
                  id="purposeOfVisit"
                  className="form-control"
                  value={formData.purposeOfVisit}
                  readOnly
                />
              </div>
              <div className="col-md-5 mb-2">
                <label htmlFor="planDateOfEntry" style={{ color: "#fff" }}>
                  Plan date of Entry:
                </label>
                <input
                  id="planDateOfEntry"
                  className="form-control"
                  value={
                    formData.planDateOfEntry
                      ? formData.planDateOfEntry.toLocaleDateString()
                      : ""
                  }
                  readOnly
                />
              </div>
              <div className="col-md-5 mb-2">
                <label htmlFor="planDateOfExit" style={{ color: "#fff" }}>
                  Plan Date Of Exit:
                </label>
                <input
                  id="planDateOfExit"
                  className="form-control"
                  value={
                    formData.planDateOfExit
                      ? formData.planDateOfExit.toLocaleDateString()
                      : ""
                  }
                  readOnly
                />
              </div>
              <div className="col-md-12 mb-2">
                <div
                  className="mb-3"
                  style={{ width: "40%", margin: "0 auto" }}
                >
                  <label htmlFor="message" style={{ color: "#fff" }}>
                    Message:
                  </label>
                  <input
                    id="message"
                    className="form-control"
                    value={formData.message}
                    readOnly
                  />
                </div>
              </div>
            </div>
          </>
        );

      case 6:
        return (
          <>
            <div
              className="container"
              style={{
                backgroundColor: "white",
                padding: "20px",
                borderRadius: "10px",
                textAlign: "center",
              }}
            >
              <div className="row">
                <div className="col-2" style={{ textAlign: "end" }}>
                  <div>
                    <img
                      src={logoVisaForm}
                      alt="QR Code"
                      style={{ height: "120px", width: "120px" }}
                    />
                  </div>
                </div>
                <div className="col-10">
                  <h4>КЫРГЫЗ РЕСПУБЛИКАСЫНЫН ТЫШКЫ ИШТЕР МИНИСТРЛИГИ</h4>
                  <h4 style={{ marginTop: "20px" }}>
                    MINISTRY OF FOREIGN AFFAIRS OF THE KYRGYZ REPUBLIC
                  </h4>

                  <h5 style={{ margin: "10px 0" }}>
                    Электрондук виза – «E-visa»
                  </h5>
                </div>
              </div>
              <hr
                style={{
                  border: "2px solid",
                  borderColor: "black",
                  width: "100%",
                  margin: "20px auto",
                }}
              />

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "30px",
                  padding: "0 100px",
                }}
              >
                <div style={{ textAlign: "left" }}>
                  {formData.photo && (
                    <img
                      src={URL.createObjectURL(formData.photo)}
                      alt="Uploaded photo"
                      style={{ height: "180px", width: "180px" }}
                    />
                  )}
                </div>
                <div style={{ textAlign: "right" }}>
                  <img
                    src={ima}
                    alt="QR Code"
                    style={{ height: "180px", width: "180px" }}
                  />
                </div>
              </div>

              {/* <div style={{ display: "flex", justifyContent: "space-between", padding: "0 100px" }}>

                                <h5 className='nw'>Толук аты-жөнү/Full name:</h5>  <h5 className='nw'> {formData.firstName} {formData.lastName}</h5> */}
              <>
                <div style={{ padding: "0 100px" }}>
                  <div className="row">
                    <div className="col-8">
                      <h5
                        className="nw"
                        style={{ textAlign: "left", marginBottom: "15px" }}
                      >
                        Толук аты-жөнү/Full name:
                      </h5>
                    </div>
                    <div className="col-4">
                      <h5
                        className="nw"
                        style={{ textAlign: "left", marginBottom: "15px" }}
                      >
                        {formData.firstName} {formData.lastName}
                      </h5>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-8">
                      <h5
                        className="nw"
                        style={{ textAlign: "left", marginBottom: "15px" }}
                      >
                        Туулган датасы/Date of birth:
                      </h5>
                    </div>
                    <div className="col-4">
                      <h5
                        className="nw"
                        style={{ textAlign: "left", marginBottom: "15px" }}
                      >
                        {formData.dateOfBirth?.toLocaleDateString()}
                      </h5>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-8">
                      <h5
                        className="nw"
                        style={{ textAlign: "left", marginBottom: "15px" }}
                      >
                        Жарандыгы/Citizenship:
                      </h5>
                    </div>
                    <div className="col-4">
                      <h5
                        className="nw"
                        style={{ textAlign: "left", marginBottom: "15px" }}
                      >
                        {formData.country}
                      </h5>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-8">
                      <h5
                        className="nw"
                        style={{ textAlign: "left", marginBottom: "15px" }}
                      >
                        Жол жүрүүчү документтин (паспорттун) номери /<br />{" "}
                        Number of Travel document (passport):
                      </h5>
                    </div>
                    <div className="col-4">
                      <h5
                        className="nw"
                        style={{ textAlign: "left", marginBottom: "15px" }}
                      >
                        {formData.passportNumber}
                      </h5>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-8">
                      <h5
                        className="nw"
                        style={{ textAlign: "left", marginBottom: "15px" }}
                      >
                        Жол жүрүүчү документтин (паспорттун) берилген датасы /
                        <br /> DATE of issue of the travelling document
                        (passport):
                      </h5>
                    </div>
                    <div className="col-4">
                      <h5
                        className="nw"
                        style={{ textAlign: "left", marginBottom: "15px" }}
                      >
                        {formData.passportIssueDate?.toLocaleDateString()}
                      </h5>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-8">
                      <h5
                        className="nw"
                        style={{ textAlign: "left", marginBottom: "15px" }}
                      >
                        Жол жүрүүчү документтин (паспорттун) бүткөн датасы /
                        <br /> Date of expiry of the travelling document
                        (passport):
                      </h5>
                    </div>
                    <div className="col-4">
                      <h5
                        className="nw"
                        style={{ textAlign: "left", marginBottom: "15px" }}
                      >
                        {formData.passportExpiryDate?.toLocaleDateString()}
                      </h5>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-8">
                      <h5
                        className="nw"
                        style={{ textAlign: "left", marginBottom: "15px" }}
                      >
                        Визанын түрү/Type of visa:
                      </h5>
                    </div>
                    <div className="col-4">
                      <h5
                        className="nw"
                        style={{ textAlign: "left", marginBottom: "15px" }}
                      >
                        {formData.planDateOfEntry?.toLocaleDateString()} -{" "}
                        {formData.planDateOfExit?.toLocaleDateString()}
                      </h5>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-8">
                      <h5
                        className="nw"
                        style={{ textAlign: "left", marginBottom: "15px" }}
                      >
                        Визанын түрү/Type of visa:
                      </h5>
                    </div>
                    <div className="col-4">
                      <h5
                        className="nw"
                        style={{ textAlign: "left", marginBottom: "15px" }}
                      >
                        {formData.planDateOfEntry?.toLocaleDateString()} -{" "}
                        {formData.planDateOfExit?.toLocaleDateString()}
                      </h5>
                    </div>
                  </div>
                </div>
              </>

              {/*              
                                    <p><strong>Validity of Visa:</strong> {formData.planDateOfEntry?.toLocaleDateString()} - {formData.planDateOfExit?.toLocaleDateString()}</p> */}
              <h5
                style={{
                  marginTop: "50px",
                  paddingLeft: "100px",
                  paddingRight: "100px",
                  paddingBottom: "150px",
                }}
              >
                Validity period of a visa is generally longer than the period of
                stay. The validity period establishes the first and last dates
                during which the visa can be used. Period of stay indicates the
                length of time you have permission to remain in Kyrgyzstan
                within the validity period of the visa.
              </h5>
            </div>
          </>
        );
      // Add more cases for other steps as needed
      default:
        return null;
    }
  };

  return (
    <div>
      <form>
        {renderFormFields()}

        <div className="text-center mt-4">
          {/* <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button> */}
        </div>
      </form>
    </div>
  );
};

export default VisaForm;
