// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import refreshIcon from "../assets/images/refresh_icon.png";

const NewCheckStatus = () => {
  const [referenceNumber, setReferenceNumber] = useState("");
  const [captchaCode, setCaptchaCode] = useState("");
  const [captchaImgSrc, setCaptchaImgSrc] = useState(
    "vasplusCaptchaa804.jpg?rand=859907661"
  );

  const handleReferenceNumberChange = (e) => {
    setReferenceNumber(e.target.value);
  };

  const handleCaptchaCodeChange = (e) => {
    setCaptchaCode(e.target.value);
  };

  const refreshCaptcha = () => {
    setCaptchaImgSrc(
      `vasplusCaptchaa804.jpg?rand=${Math.floor(Math.random() * 1000000000)}`
    );
  };

  const checkStatus = () => {
    // Implement your logic for checking status here
  };

  return (
    <div
      className="container"
      style={{
        width: "90%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {/* <div className="informBox_5566">
        <b>Information box</b>
        <br />
        In order to check the status of your application or continue an
        unfinished application, please enter your application reference number
        in the relevant box. If you do not know this number, you can find it in
        the e-mail message that we sent to you. It is an 8-symbol alphanumeric
        code.
      </div> */}
      <br />
      <br />

      <form id="check_status_form">
        <table cellPadding="4" cellSpacing="4">
          <tbody>
            <tr>
              <td>
                <span className="lab_1478">Insert your reference number</span>
                <br />
                <input
                  type="text"
                  value={referenceNumber}
                  onChange={handleReferenceNumberChange}
                  id="reference_numb"
                  name="reference_numb"
                  className="inp_6966"
                  required
                />
              </td>
            </tr>
            <tr>
              <td></td>
            </tr>
            <tr>
              <td></td>
            </tr>
            <tr>
              <td>
                <img src={captchaImgSrc} id="captchaimg" alt="Captcha" />
                <img
                  src={refreshIcon}
                  onClick={refreshCaptcha}
                  className="refreshIcon"
                  alt="Refresh Captcha"
                />
                <input
                  type="text"
                  value={captchaCode}
                  onChange={handleCaptchaCodeChange}
                  id="vpb_captcha_code"
                  name="vpb_captcha_code"
                  required
                />
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <input
            type="button"
            className="btn_3256"
            value="NEXT"
            onClick={checkStatus}
          />
        </div>
      </form>
    </div>
  );
};

export default NewCheckStatus;
